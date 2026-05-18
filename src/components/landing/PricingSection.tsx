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
      cta: "Start free",
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
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto space-y-12">

        <AnimatedSection className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free. Upgrade when you need more.
            No hidden fees.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <StaggerItem
              key={tier.key}
              className={[
                "border rounded-2xl p-6 space-y-6",
                "flex flex-col bg-background",
                tier.highlight
                  ? "border-primary shadow-lg ring-1 ring-primary/20"
                  : "border-border",
              ].join(" ")}
            >
              {tier.badge && (
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {tier.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold">{tier.plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground text-sm">
                      {tier.period}
                    </span>
                  )}
                </div>
                {tier.anchor && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {tier.anchor}
                  </p>
                )}
              </div>

              <ul className="space-y-2 flex-1">
                {tier.plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-primary shrink-0 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {tier.key === "free" ? (
                <Link
                  href="/sign-up"
                  className="w-full block text-center border rounded-lg
                             px-4 py-2.5 text-sm font-medium
                             hover:bg-muted transition-colors"
                >
                  {tier.cta}
                </Link>
              ) : (
                <PaddleCheckout
                  priceId={tier.priceId!}
                  planName={tier.plan.name}
                  className={[
                    "w-full rounded-lg px-4 py-2.5",
                    "text-sm font-medium transition-colors",
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border hover:bg-muted",
                  ].join(" ")}
                >
                  {tier.cta}
                </PaddleCheckout>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection direction="none" className="text-center">
          <Link
            href={`/${locale}/pricing`}
            className="text-sm text-muted-foreground underline underline-offset-2
                       hover:text-foreground"
          >
            See full pricing details →
          </Link>
        </AnimatedSection>

      </div>
    </section>
  )
}
