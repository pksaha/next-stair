"use server"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { db } from "@/db"
import { generations } from "@/db/schema"
import { eq, and, inArray } from "drizzle-orm"
import { getUserByClerkId } from "@/lib/credits"

export async function deleteGeneration(
  generationId: string
): Promise<{ success: boolean; error?: string }> {
  const { userId: clerkId } = await auth()
  if (!clerkId) return { success: false, error: "Unauthorised" }

  const dbUser = await getUserByClerkId(clerkId)
  if (!dbUser) return { success: false, error: "User not found" }

  await db
    .delete(generations)
    .where(
      and(
        eq(generations.id, generationId),
        eq(generations.userId, dbUser.id)  // security: own only
      )
    )

  revalidatePath("/[locale]/dashboard/gallery", "page")
  revalidatePath("/[locale]/dashboard/history", "page")

  return { success: true }
}

export async function bulkDeleteGenerations(
  generationIds: string[]
): Promise<{ success: boolean; deleted: number; error?: string }> {
  if (generationIds.length === 0) {
    return { success: true, deleted: 0 }
  }

  if (generationIds.length > 50) {
    return {
      success: false,
      deleted: 0,
      error: "Maximum 50 images can be deleted at once",
    }
  }

  const { userId: clerkId } = await auth()
  if (!clerkId) {
    return { success: false, deleted: 0, error: "Unauthorised" }
  }

  const dbUser = await getUserByClerkId(clerkId)
  if (!dbUser) {
    return { success: false, deleted: 0, error: "User not found" }
  }

  // inArray + userId condition ensures users can only
  // delete their own generations — even if they pass
  // IDs belonging to other users
  const deleted = await db
    .delete(generations)
    .where(
      and(
        inArray(generations.id, generationIds),
        eq(generations.userId, dbUser.id)
      )
    )
    .returning({ id: generations.id })

  revalidatePath("/[locale]/dashboard/gallery", "page")
  revalidatePath("/[locale]/dashboard/history", "page")

  return { success: true, deleted: deleted.length }
}
