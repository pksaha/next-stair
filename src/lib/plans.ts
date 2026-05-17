import type { PlanTier } from "@/db/schema"

export const PLANS = {
  free: {
    name: "Free",
    slug: "free" as PlanTier,
    price: 0,
    monthlyCredits: 1,
    signupCredits: 1,
    maxCreditsBalance: 3,
    generationsPerDay: 1,
    paddlePriceId: null,
    features: [
      "1 credit per month",
      "1 generation per day",
      "Access to text-to-image tool",
      "Standard quality only",
      "Community support",
    ],
    limitations: [
      "No image upload tools",
      "No HD quality",
      "No priority processing",
    ],
  },
  pro: {
    name: "Pro",
    slug: "pro" as PlanTier,
    price: 25,
    monthlyCredits: 200,
    signupCredits: 200,
    maxCreditsBalance: 400,
    generationsPerDay: 200,
    paddlePriceId: process.env.PADDLE_PRICE_PRO ?? "",
    features: [
      "200 credits per month",
      "200 generations per day",
      "Access to all 20 AI tools",
      "HD quality generation",
      "Image upload and editing",
      "Priority processing",
      "Email support",
    ],
    limitations: [],
  },
  premium: {
    name: "Premium",
    slug: "premium" as PlanTier,
    price: 49,
    monthlyCredits: 500,
    signupCredits: 500,
    maxCreditsBalance: 1000,
    generationsPerDay: 500,
    paddlePriceId: process.env.PADDLE_PRICE_PREMIUM ?? "",
    features: [
      "500 credits per month",
      "500 generations per day",
      "Access to all 20 AI tools",
      "HD quality generation",
      "Image upload and editing",
      "Batch generation",
      "Priority processing",
      "Priority support",
    ],
    limitations: [],
  },
} as const

export type PlanConfig = (typeof PLANS)[PlanTier]

export function getPlanConfig(tier: string): PlanConfig {
  return PLANS[tier as PlanTier] ?? PLANS.free
}

export function resolvePlan(
  subscriptionPlan: string | null | undefined
): PlanTier {
  if (!subscriptionPlan) return "free"
  if (subscriptionPlan in PLANS) return subscriptionPlan as PlanTier
  return "free"
}

export function getPlanFromPriceId(priceId: string): PlanTier {
  if (priceId === process.env.PADDLE_PRICE_PRO) return "pro"
  if (priceId === process.env.PADDLE_PRICE_PREMIUM) return "premium"
  return "free"
}
