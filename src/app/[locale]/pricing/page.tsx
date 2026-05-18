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

      <div className="text-center" style={{ marginBottom: "48px" }}>
        <div className="section-badge" style={{ marginBottom: "16px" }}>
          ✦ Pricing
        </div>
        <h1 className="heading-1" style={{ marginBottom: "12px" }}>
          Simple pricing
        </h1>
        <p className="body-lg" style={{ maxWidth: "480px", margin: "0 auto" }}>
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
              className={
                tier.highlight
                  ? "card-glow flex flex-col"
                  : "card flex flex-col"
              }
              style={
                tier.highlight
                  ? {
                      border: "1px solid rgba(212,160,23,0.4)",
                      boxShadow: "0 0 48px rgba(212,160,23,0.1)",
                    }
                  : { background: "var(--surface)" }
              }
            >
              {tier.highlight && (
                <span
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg,#F5C842,#D4A017)",
                    color: "#000",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    padding: "3px 12px",
                    borderRadius: "100px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Most popular
                </span>
              )}

              <div style={{ marginBottom: "20px" }}>
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-1)",
                    marginBottom: "8px",
                  }}
                >
                  {tier.plan.name}
                </h2>
                <div className="flex items-baseline gap-1">
                  <span
                    style={{
                      fontSize: "3rem",
                      fontWeight: 800,
                      background:
                        "linear-gradient(135deg,#F5C842,#D4A017)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
              </div>

              <ul
                className="flex-1"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 24px",
                }}
              >
                {tier.plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2"
                    style={{ marginBottom: "10px", fontSize: "0.875rem" }}
                  >
                    <span
                      style={{
                        color: "var(--gold)",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>
                      {f}
                    </span>
                  </li>
                ))}
                {tier.plan.limitations.map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-2"
                    style={{ marginBottom: "10px", fontSize: "0.875rem" }}
                  >
                    <span
                      style={{
                        color: "rgba(239,68,68,0.7)",
                        flexShrink: 0,
                      }}
                    >
                      ✗
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>
                      {l}
                    </span>
                  </li>
                ))}
              </ul>

              {isCurrentPlan ? (
                <span
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-soft)",
                    color: "rgba(255,255,255,0.4)",
                    borderRadius: "var(--radius-md)",
                    padding: "10px 16px",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    display: "block",
                  }}
                >
                  Current plan
                </span>
              ) : tier.key === "free" ? (
                <a href={`/${locale}/sign-up`} style={{ display: "block" }}>
                  <button className="btn-outline" style={{ width: "100%" }}>
                    {tier.cta}
                  </button>
                </a>
              ) : (
                <div style={{ width: "100%" }}>
                  <PaddleCheckout
                    priceId={tier.priceId!}
                    planName={tier.plan.name}
                    className={
                      tier.highlight ? "btn-gold" : "btn-outline"
                    }
                  >
                    {tier.cta}
                  </PaddleCheckout>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <p
        className="caption"
        style={{ textAlign: "center", marginTop: "24px" }}
      >
        Payments processed securely by Paddle.
        Cancel anytime from your dashboard.
        All prices in USD. Local taxes may apply.
      </p>

    </div>
  )
}
