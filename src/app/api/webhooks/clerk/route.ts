import { Webhook } from "svix"
import { headers } from "next/headers"
import { WebhookEvent } from "@clerk/nextjs/server"
import { db } from "@/db"
import { users, credits } from "@/db/schema"

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    return new Response("Webhook secret not configured", {
      status: 500,
    })
  }

  const headersList = await headers()
  const svix_id = headersList.get("svix-id")
  const svix_timestamp = headersList.get("svix-timestamp")
  const svix_signature = headersList.get("svix-signature")

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload)

  const wh = new Webhook(WEBHOOK_SECRET)
  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch {
    return new Response("Invalid webhook signature", {
      status: 400,
    })
  }

  if (evt.type === "user.created") {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data

    const email = email_addresses[0]?.email_address ?? ""
    const name =
      [first_name, last_name].filter(Boolean).join(" ") || null

    const [newUser] = await db
      .insert(users)
      .values({
        clerkId: id,
        email,
        name,
        imageUrl: image_url,
      })
      .returning()

    await db.insert(credits).values({
      userId: newUser.id,
      balance: 10,
      lifetimeEarned: 10,
      lifetimeUsed: 0,
    })
  }

  return new Response("OK", { status: 200 })
}
