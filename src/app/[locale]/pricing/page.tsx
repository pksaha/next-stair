import type { Metadata } from "next"
import { auth } from "@clerk/nextjs/server"
import { routing } from "@/i18n/routing"
import { getUserByClerkId } from "@/lib/credits"
import { getUserPlan } from "@/lib/subscriptions"
import { PLANS } from "@/lib/plans"
import { PaddleCheckout } from "@/components/PaddleCheckout"

type Params = Promise<{ locale: string }>

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pricing — next-stair AI Image Generator",
    description:
      "Start free with 1 credit. Upgrade to Pro for 200 " +
      "credits/month at $25, or Premium for 500 " +
      "credits/month at $49. No hidden fees.",
  }
}

export default async function PricingPage(
  { params }: { params: Params }
) {
  const { locale } = await params
  const { userId: clerkId } = await auth()
  let currentPlan = "free"
  if (clerkId) {
    const dbUser = await getUserByClerkId(clerkId)
    if (dbUser) currentPlan = await getUserPlan(dbUser.id)
  }

  const tiers = [
    {
      key: "free",
      plan: PLANS.free,
      price: "$0",
      period: "",
      cta: "Get started free",
      priceId: null,
      highlight: false,
    },
    {
      key: "pro",
      plan: PLANS.pro,
      price: "$25",
      period: "/month",
      cta: "Upgrade to Pro",
      priceId: process.env.PADDLE_PRICE_PRO ?? "",
      highlight: true,
    },
    {
      key: "premium",
      plan: PLANS.premium,
      price: "$49",
      period: "/month",
      cta: "Get Premium",
      priceId: process.env.PADDLE_PRICE_PREMIUM ?? "",
      highlight: false,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">
          Simple pricing
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl
                      mx-auto">
          Start free. Upgrade when you need more.
          Cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => {
          const isCurrentPlan = currentPlan === tier.key

          return (
            <div
              key={tier.key}
              className={[
                "border rounded-2xl p-6 space-y-6",
                "flex flex-col",
                tier.highlight
                  ? "border-primary shadow-lg " +
                    "ring-1 ring-primary/20"
                  : "border-border",
              ].join(" ")}
            >
              {tier.highlight && (
                <div className="text-xs font-semibold
                                text-primary uppercase
                                tracking-wide">
                  Most popular
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold">
                  {tier.plan.name}
                </h2>
                <div className="mt-2 flex items-baseline
                                gap-1">
                  <span className="text-4xl font-bold">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground
                                     text-sm">
                      {tier.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-2 flex-1">
                {tier.plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2
                               text-sm"
                  >
                    <span className="text-primary
                                     shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
                {tier.plan.limitations.map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-2
                               text-sm text-muted-foreground"
                  >
                    <span className="shrink-0 mt-0.5">✗</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>

              {isCurrentPlan ? (
                <div className="w-full text-center border
                                rounded-lg px-4 py-2.5
                                text-sm font-medium
                                text-muted-foreground
                                bg-muted">
                  Current plan
                </div>
              ) : tier.key === "free" ? (
                <a
                  href={`/${locale}/sign-up`}
                  className="w-full block text-center
                             border rounded-lg px-4 py-2.5
                             text-sm font-medium
                             hover:bg-muted transition-colors"
                >
                  {tier.cta}
                </a>
              ) : (
                <PaddleCheckout
                  priceId={tier.priceId!}
                  planName={tier.plan.name}
                  className={[
                    "w-full rounded-lg px-4 py-2.5",
                    "text-sm font-medium transition-colors",
                    tier.highlight
                      ? "bg-primary text-primary-foreground" +
                        " hover:bg-primary/90"
                      : "border hover:bg-muted",
                  ].join(" ")}
                >
                  {tier.cta}
                </PaddleCheckout>
              )}
            </div>
          )
        })}
      </div>

      <p className="text-center text-xs
                    text-muted-foreground">
        Payments processed securely by Paddle.
        Cancel anytime from your dashboard.
        All prices in USD. Local taxes may apply.
      </p>

    </div>
  )
}
