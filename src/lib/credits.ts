import { db } from "@/db"
import { credits, users } from "@/db/schema"
import { eq, sql } from "drizzle-orm"

/**
 * Get a user's current credit balance.
 * Returns 0 if no credit row exists.
 */
export async function getCreditBalance(
  userId: string   // this is the internal DB users.id (uuid)
): Promise<number> {
  const [row] = await db
    .select({ balance: credits.balance })
    .from(credits)
    .where(eq(credits.userId, userId))
    .limit(1)

  return row?.balance ?? 0
}

/**
 * Get the internal DB user row from a Clerk user ID.
 * Returns null if the user has not been synced yet.
 */
export async function getUserByClerkId(clerkId: string) {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1)

  return user ?? null
}

/**
 * Deduct credits inside a transaction.
 * Must be called AFTER a successful image generation,
 * inside the same transaction that inserts the generation row.
 *
 * IMPORTANT: Inside a db.transaction() block, always use
 * the tx parameter — not the global db — so the deduction
 * rolls back if anything else in the transaction fails.
 */
type Tx = Parameters<Parameters<typeof db.transaction>[0]>[0]

export async function deductCredit(
  tx: Tx,          // pass the transaction object here
  userId: string,
  amount: number = 1
): Promise<void> {
  await tx
    .update(credits)
    .set({
      balance:      sql`${credits.balance} - ${amount}`,
      lifetimeUsed: sql`${credits.lifetimeUsed} + ${amount}`,
      updatedAt:    new Date(),
    })
    .where(eq(credits.userId, userId))
}
