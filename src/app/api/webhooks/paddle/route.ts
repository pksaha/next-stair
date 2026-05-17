import { createHmac, timingSafeEqual } from "crypto"
import { NextRequest, NextResponse } from "next/server"
import { getUserByClerkId } from "@/lib/credits"
import {
  upsertSubscription,
  topUpMonthlyCredits,
} from "@/lib/subscriptions"
import { getPlanFromPriceId } from "@/lib/plans"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function verifyPaddleSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string
): boolean {
  const tsMatch = signatureHeader.match(/ts=(\d+)/)
  const h1Match = signatureHeader.match(/h1=([a-f0-9]+)/)
  if (!tsMatch || !h1Match) return false

  const timestamp = tsMatch[1]
  const receivedSig = h1Match[1]
  const signedPayload = `${timestamp}:${rawBody}`

  const hmac = createHmac("sha256", secret)
  hmac.update(signedPayload)
  const computedSig = hmac.digest("hex")

  try {
    return timingSafeEqual(
      Buffer.from(computedSig, "hex"),
      Buffer.from(receivedSig, "hex")
    )
  } catch {
    return false
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.PADDLE_WEBHOOK_SECRET
  // If secret not configured yet, return 200 silently.
  // This prevents errors during development before
  // Paddle credentials are added.
  if (!secret) {
    console.warn("PADDLE_WEBHOOK_SECRET not set — webhook ignored")
    return NextResponse.json({ received: true })
  }

  const rawBody = await req.text()
  const signatureHeader = req.headers.get("paddle-signature") ?? ""

  if (!signatureHeader) {
    return NextResponse.json(
      { error: "Missing Paddle-Signature header" },
      { status: 400 }
    )
  }

  if (!verifyPaddleSignature(rawBody, signatureHeader, secret)) {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 401 }
    )
  }

  let event: Record<string, unknown>
  try {
    event = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const eventType = event.event_type as string
  const data = event.data as Record<string, unknown>
  console.log(`Paddle webhook: ${eventType}`)

  try {
    const customData = data.custom_data as
      | Record<string, string>
      | null
      | undefined

    const clerkId = customData?.userId
    if (!clerkId) {
      return NextResponse.json({ received: true })
    }

    const dbUser = await getUserByClerkId(clerkId)
    if (!dbUser) {
      return NextResponse.json({ received: true })
    }

    const userId = dbUser.id
    const paddleCustomerId = data.customer_id as string
    const paddleSubscriptionId = data.id as string
    const items = data.items as
      | { price: { id: string } }[]
      | undefined
    const priceId = items?.[0]?.price?.id ?? ""
    const plan = getPlanFromPriceId(priceId)

    const scheduledChange = data.scheduled_change as
      | { action: string }
      | null
      | undefined

    const currentPeriodEnd = data.current_billing_period
      ? new Date(
          (data.current_billing_period as { ends_at: string }).ends_at
        )
      : undefined

    switch (eventType) {
      case "subscription.created":
        await upsertSubscription({
          userId, plan, status: "active",
          paddleCustomerId, paddleSubscriptionId,
          currentPeriodEnd, cancelAtPeriodEnd: false,
        })
        await topUpMonthlyCredits(userId, plan)
        break

      case "subscription.updated":
        await upsertSubscription({
          userId, plan,
          status: data.status as string,
          paddleCustomerId, paddleSubscriptionId,
          currentPeriodEnd,
          cancelAtPeriodEnd: scheduledChange?.action === "cancel",
        })
        break

      case "subscription.canceled":
        await upsertSubscription({
          userId, plan: "free", status: "canceled",
          paddleCustomerId, paddleSubscriptionId,
          cancelAtPeriodEnd: false,
        })
        break

      case "transaction.completed":
        if (data.origin === "subscription_recurring") {
          await topUpMonthlyCredits(userId, plan)
        }
        break

      default:
        console.log(`Unhandled: ${eventType}`)
    }
  } catch (err) {
    console.error("Webhook error:", err)
  }

  return NextResponse.json({ received: true })
}
