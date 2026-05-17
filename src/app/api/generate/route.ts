import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"
import { openai, IMAGE_MODEL, IMAGE_SIZES } from "@/lib/openai"
import { uploadBase64ToCloudinary } from "@/lib/cloudinary"
import { db } from "@/db"
import { generations, credits as creditsTable } from "@/db/schema"
import { sql, eq } from "drizzle-orm"
import {
  getUserByClerkId,
  getCreditBalance,
} from "@/lib/credits"

export const maxDuration = 60  // allow up to 60s for generation

export async function POST(req: NextRequest) {
  // ── 1. Auth check ───────────────────────────────────────
  const { userId: clerkId } = await auth()
  if (!clerkId) {
    return NextResponse.json(
      { error: "Unauthorised" },
      { status: 401 }
    )
  }

  // ── 2. Get internal user ─────────────────────────────────
  const user = await getUserByClerkId(clerkId)

  if (!user) {
    return NextResponse.json(
      { error: "User not found. Please sign out and sign in again." },
      { status: 404 }
    )
  }

  // ── 3. Parse request body ────────────────────────────────
  const body = await req.json()
  const {
    prompt,
    aspectRatio = "square",
    quality = "medium",
    toolSlug = "text-to-image",
    inputImageBase64,  // present for image-to-image only
  } = body

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json(
      { error: "Prompt is required" },
      { status: 400 }
    )
  }

  if (prompt.length > 32000) {
    return NextResponse.json(
      { error: "Prompt is too long (max 32,000 characters)" },
      { status: 400 }
    )
  }

  // ── 4. Credit check ──────────────────────────────────────
  const balance = await getCreditBalance(user.id)

  if (balance < 1) {
    return NextResponse.json(
      { error: "No credits remaining. Please upgrade your plan." },
      { status: 402 }
    )
  }

  // ── 5. Generate image with OpenAI ────────────────────────
  const size = IMAGE_SIZES[aspectRatio as keyof typeof IMAGE_SIZES]
    ?? IMAGE_SIZES.square

  let imageBase64: string

  try {
    if (inputImageBase64) {
      // ── Image-to-image: use images.edit() ──────────────
      // Convert base64 to a File object for the API
      const imageBuffer = Buffer.from(inputImageBase64, "base64")
      const imageFile = new File(
        [imageBuffer],
        "input.png",
        { type: "image/png" }
      )

      const result = await openai.images.edit({
        model: IMAGE_MODEL,
        image: imageFile,
        prompt,
        size,
        quality,
        n: 1,
      })

      const b64Edit = result.data?.[0]?.b64_json
      if (!b64Edit) throw new Error("No image data returned from OpenAI")
      imageBase64 = b64Edit

    } else {
      // ── Text-to-image: use images.generate() ───────────
      const result = await openai.images.generate({
        model: IMAGE_MODEL,
        prompt,
        size,
        quality,
        n: 1,
        output_format: "png",
      })

      const b64Gen = result.data?.[0]?.b64_json
      if (!b64Gen) throw new Error("No image data returned from OpenAI")
      imageBase64 = b64Gen
    }
  } catch (err: unknown) {
    console.error("OpenAI generation error:", err)

    const message =
      err instanceof Error ? err.message : "Image generation failed"

    // Surface helpful messages for common errors
    if (message.includes("organization")) {
      return NextResponse.json(
        {
          error:
            "OpenAI organisation not verified. Complete verification at platform.openai.com/settings.",
        },
        { status: 403 }
      )
    }

    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }

  // ── 6. Upload to Cloudinary ──────────────────────────────
  let outputUrl: string

  try {
    outputUrl = await uploadBase64ToCloudinary(imageBase64)
  } catch (err) {
    console.error("Cloudinary upload error:", err)
    return NextResponse.json(
      { error: "Failed to store generated image" },
      { status: 500 }
    )
  }

  // ── 7. Save generation + deduct credit atomically via batch ─
  // neon-http doesn't support db.transaction(); db.batch() runs
  // both statements in a single HTTP request and rolls back both
  // if either fails.
  let generationId: string

  try {
    const [generationRows] = await db.batch([
      db.insert(generations)
        .values({
          userId: user.id,
          toolSlug,
          prompt,
          outputUrl,
          inputImageUrl: inputImageBase64 ? "uploaded" : null,
          model: IMAGE_MODEL,
          aspectRatio,
          status: "completed",
          creditsUsed: 1,
        })
        .returning({ id: generations.id }),
      db.update(creditsTable)
        .set({
          balance:      sql`${creditsTable.balance} - 1`,
          lifetimeUsed: sql`${creditsTable.lifetimeUsed} + 1`,
          updatedAt:    new Date(),
        })
        .where(eq(creditsTable.userId, user.id)),
    ] as const)

    generationId = generationRows[0].id
  } catch (err) {
    console.error("DB batch error:", err)
    return NextResponse.json(
      { error: "Failed to save generation record" },
      { status: 500 }
    )
  }

  // ── 8. Return result ─────────────────────────────────────
  return NextResponse.json({
    success: true,
    imageUrl: outputUrl,
    generationId,
  })
}
