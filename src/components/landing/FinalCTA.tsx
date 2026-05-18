import { AnimatedSection } from "@/components/AnimatedSection"
import { Link } from "@/i18n/navigation"

export function FinalCTA({ locale }: { locale: string }) {
  return (
    <section className="py-24 px-6">
      <AnimatedSection
        className="max-w-2xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Start creating for free
        </h2>
        <p className="text-muted-foreground text-lg">
          1 free generation. No credit card.
          Upgrade when you need more.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/sign-up"
            className="bg-primary text-primary-foreground rounded-xl
                       px-8 py-4 text-base font-semibold
                       hover:bg-primary/90 transition-colors"
          >
            Get started free →
          </Link>
          <Link
            href="/ai-image-effects"
            className="border rounded-xl px-8 py-4 text-base font-semibold
                       hover:bg-muted transition-colors"
          >
            Explore 20 tools
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">
          No credit card required · Cancel anytime · Payments by Paddle
        </p>
      </AnimatedSection>
    </section>
  )
}
