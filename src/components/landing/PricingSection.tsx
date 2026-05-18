import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection"
import { PLANS } from "@/lib/plans"
import { PaddleCheckout } from "@/components/PaddleCheckout"
import { Link } from "@/i18n/navigation"

export function PricingSection({ locale }: { locale: string }) {
  const tiers = [
    {
      key: "free",
      plan: PLANS.free,
      price: "$0",
      period: "",
      anchor: null,
      cta: "Get started free",
      priceId: null,
      highlight: false,
      badge: null,
    },
    {
      key: "pro",
      plan: PLANS.pro,
      price: "$25",
      period: "/month",
      anchor: "vs $250+ for a professional photographer",
      cta: "Upgrade to Pro",
      priceId: process.env.PADDLE_PRICE_PRO ?? "",
      highlight: true,
      badge: "Most popular",
    },
    {
      key: "premium",
      plan: PLANS.premium,
      price: "$49",
      period: "/month",
      anchor: null,
      cta: "Get Premium",
      priceId: process.env.PADDLE_PRICE_PREMIUM ?? "",
      highlight: false,
      badge: null,
    },
  ]

  return (
    <section style={{ padding: "80px 24px" }}>
      <div className="max-w-5xl mx-auto">

        <div style={{ marginBottom: "48px" }}>
          <AnimatedSection className="text-center">
            <div className="section-badge" style={{ marginBottom: "16px" }}>
              ✦ Pricing
            </div>
            <h2 className="heading-1" style={{ marginBottom: "12px" }}>
              Simple pricing
            </h2>
            <p className="body-lg" style={{ maxWidth: "420px", margin: "0 auto" }}>
              Start free. Upgrade when you need more.
              No hidden fees.
            </p>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <StaggerItem key={tier.key}>
              <div
                className="card-glow flex flex-col h-full"
                style={
                  tier.highlight
                    ? {
                        border: "1px solid rgba(212,160,23,0.5)",
                        boxShadow: "0 0 40px rgba(212,160,23,0.12)",
                      }
                    : undefined
                }
              >
              {tier.badge && (
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #F5C842, #D4A017)",
                    color: "#000",
                    padding: "3px 12px",
                    borderRadius: "100px",
                    display: "inline-block",
                    marginBottom: "12px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {tier.badge}
                </span>
              )}

              <div style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-1)",
                    marginBottom: "8px",
                  }}
                >
                  {tier.plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    style={{
                      fontSize: "3rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #F5C842, #D4A017)",
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
                {tier.anchor && (
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: "4px",
                    }}
                  >
                    {tier.anchor}
                  </p>
                )}
              </div>

              <ul
                className="flex-1"
                style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}
              >
                {tier.plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2"
                    style={{ marginBottom: "10px", fontSize: "0.875rem" }}
                  >
                    <span style={{ color: "var(--gold)", fontWeight: 700, flexShrink: 0 }}>
                      ✓
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              {tier.key === "free" ? (
                <Link href="/sign-up" style={{ display: "block" }}>
                  <button className="btn-outline" style={{ width: "100%" }}>
                    {tier.cta}
                  </button>
                </Link>
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
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div style={{ marginTop: "32px" }}>
          <AnimatedSection direction="none" className="text-center">
            <Link
              href={`/${locale}/pricing`}
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              See full pricing details →
            </Link>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
