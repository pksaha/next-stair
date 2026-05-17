import { db } from "@/db"
import { subscriptions, credits } from "@/db/schema"
import { eq, sql } from "drizzle-orm"
import { getPlanConfig, resolvePlan } from "./plans"
import type { PlanTier } from "@/db/schema"

export async function getSubscription(userId: string) {
  const [row] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId))
    .limit(1)
  return row ?? null
}

export async function getUserPlan(userId: string): Promise<PlanTier> {
  const sub = await getSubscription(userId)
  if (!sub) return "free"
  if (sub.status === "canceled" || sub.status === "past_due") return "free"
  return resolvePlan(sub.plan)
}

export async function canAccessTool(
  userId: string,
  requiresUpload: boolean
): Promise<{ allowed: boolean; reason?: string }> {
  const plan = await getUserPlan(userId)
  if (plan === "free" && requiresUpload) {
    return {
      allowed: false,
      reason: "Image upload tools require a Pro or Premium plan.",
    }
  }
  return { allowed: true }
}

export async function topUpMonthlyCredits(
  userId: string,
  plan: PlanTier
): Promise<void> {
  const config = getPlanConfig(plan)
  await db
    .update(credits)
    .set({
      balance: sql`LEAST(${credits.balance} + ${config.monthlyCredits}, ${config.maxCreditsBalance})`,
      lifetimeEarned: sql`${credits.lifetimeEarned} + ${config.monthlyCredits}`,
      updatedAt: new Date(),
    })
    .where(eq(credits.userId, userId))
}

export async function upsertSubscription(data: {
  userId: string
  plan: PlanTier
  status: string
  paddleCustomerId: string
  paddleSubscriptionId: string
  paddleTransactionId?: string
  currentPeriodEnd?: Date
  cancelAtPeriodEnd?: boolean
}): Promise<void> {
  const existing = await getSubscription(data.userId)
  if (!existing) {
    await db.insert(subscriptions).values({
      userId: data.userId,
      plan: data.plan,
      status: data.status,
      paddleCustomerId: data.paddleCustomerId,
      paddleSubscriptionId: data.paddleSubscriptionId,
      paddleTransactionId: data.paddleTransactionId ?? null,
      currentPeriodEnd: data.currentPeriodEnd ?? null,
      cancelAtPeriodEnd: data.cancelAtPeriodEnd ?? false,
    })
  } else {
    await db
      .update(subscriptions)
      .set({
        plan: data.plan,
        status: data.status,
        paddleCustomerId: data.paddleCustomerId,
        paddleSubscriptionId: data.paddleSubscriptionId,
        paddleTransactionId:
          data.paddleTransactionId ?? existing.paddleTransactionId,
        currentPeriodEnd:
          data.currentPeriodEnd ?? existing.currentPeriodEnd,
        cancelAtPeriodEnd:
          data.cancelAtPeriodEnd ?? existing.cancelAtPeriodEnd,
        updatedAt: new Date(),
      })
      .where(eq(subscriptions.userId, data.userId))
  }
}
