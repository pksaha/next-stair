import { AnimatedSection } from "@/components/AnimatedSection"
import { Link } from "@/i18n/navigation"

export function FinalCTA({ locale }: { locale: string }) {
  void locale
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "96px 24px" }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "0%", left: "50%",
          transform: "translateX(-50%)",
          width: "700px", height: "400px",
          background:
            "radial-gradient(ellipse, " +
            "rgba(212,160,23,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <AnimatedSection className="relative max-w-2xl mx-auto text-center">
        <div className="section-badge" style={{ marginBottom: "20px" }}>
          ✦ Get started
        </div>
        <h2 className="heading-1" style={{ marginBottom: "16px" }}>
          Start creating for free
        </h2>
        <p className="body-lg" style={{ marginBottom: "32px" }}>
          1 free generation. No credit card.
          Upgrade when you need more.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          style={{ marginBottom: "20px" }}
        >
          <Link href="/sign-up">
            <button className="btn-gold">
              Get started free →
            </button>
          </Link>
          <Link href="/ai-image-effects">
            <button className="btn-outline">
              Explore 20 tools
            </button>
          </Link>
        </div>
        <p className="caption">
          No credit card required · Cancel anytime ·
          Payments by Paddle
        </p>
      </AnimatedSection>
    </section>
  )
}
