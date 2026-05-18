import type { Metadata } from "next"
import { routing } from "@/i18n/routing"
import { Link } from "@/i18n/navigation"
import { AnimatedSection } from "@/components/AnimatedSection"
import { HeroDemo } from "@/components/HeroDemo"
import { SocialProof } from "@/components/landing/SocialProof"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { ToolsShowcase } from "@/components/landing/ToolsShowcase"
import { PricingSection } from "@/components/landing/PricingSection"
import { FinalCTA } from "@/components/landing/FinalCTA"

export const dynamic = "force-static"
export const dynamicParams = false

type Params = Promise<{ locale: string }>

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { locale } = await params
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "https://yourdomain.com"

  return {
    title:
      "next-stair — AI Image Generator. 20 Tools. 11 Languages.",
    description:
      "Generate professional headshots, anime art, Pixar " +
      "characters, and 17 more AI image effects. Free to " +
      "start. Available in Bengali, Hindi, and 9 more " +
      "languages.",
    alternates: {
      canonical: `${appUrl}/en`,
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, `${appUrl}/${loc}`])
      ),
    },
    openGraph: {
      title: "next-stair — AI Image Generator",
      description: "20 AI tools. 11 languages. Free to start.",
      type: "website",
      url: `${appUrl}/${locale}`,
    },
  }
}

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params

  return (
    <main>

      {/* ── 1. Hero ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "96px",
          paddingBottom: "96px",
        }}
      >
        {/* Background radial glow */}
        <div
          style={{
            position: "absolute",
            top: "10%", left: "50%",
            transform: "translateX(-50%)",
            width: "800px", height: "500px",
            background:
              "radial-gradient(ellipse, " +
              "rgba(212,160,23,0.12) 0%, " +
              "transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2
                          gap-14 items-center">

            {/* Left — copy */}
            <AnimatedSection className="space-y-7">
              <div className="section-badge">
                ✦ Powered by gpt-image-1
              </div>

              <h1 className="display">
                Create stunning images{" "}
                <span className="text-gold">with AI</span>
              </h1>

              <p className="body-lg max-w-md">
                20 AI image tools. 11 languages including
                Bengali and Hindi. Generate, edit, and
                transform images in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/sign-up">
                  <button className="btn-gold w-full sm:w-auto">
                    Start free — 1 credit →
                  </button>
                </Link>
                <Link href="/ai-image-effects">
                  <button className="btn-outline w-full sm:w-auto">
                    Explore 20 tools
                  </button>
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <span
                  style={{
                    width: 8, height: 8,
                    borderRadius: "50%",
                    background: "#4CAF50",
                    display: "inline-block",
                    boxShadow: "0 0 8px #4CAF50",
                  }}
                />
                <span className="caption">
                  No credit card required ·
                  Payments secured by Paddle
                </span>
              </div>
            </AnimatedSection>

            {/* Right — live demo */}
            <AnimatedSection delay={0.15} direction="left">
              <div
                className="card-glow"
                style={{ padding: "24px" }}
              >
                <div
                  className="section-badge"
                  style={{ marginBottom: "16px" }}
                >
                  Try it now — free
                </div>
                <HeroDemo locale={locale} />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── 2. Social proof ─────────────────────────── */}
      <SocialProof />

      {/* ── 3. Features ─────────────────────────────── */}
      <FeaturesSection />

      {/* ── 4. How it works ─────────────────────────── */}
      <HowItWorks />

      {/* ── 5. Tools showcase ───────────────────────── */}
      <ToolsShowcase />

      {/* ── 6. Pricing ──────────────────────────────── */}
      <PricingSection locale={locale} />

      {/* ── 7. Final CTA ────────────────────────────── */}
      <FinalCTA locale={locale} />

    </main>
  )
}
