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
      <section className="py-16 md:py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <AnimatedSection className="space-y-6">
              <div className="inline-block text-xs font-medium
                              bg-primary/10 text-primary
                              px-4 py-1.5 rounded-full">
                Powered by gpt-image-1
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl
                             font-bold tracking-tight leading-tight">
                Create stunning images{" "}
                <span className="text-primary">with AI</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                20 AI image tools. 11 languages including
                Bengali and Hindi. Generate, edit, and
                transform images in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/sign-up"
                  className="bg-primary text-primary-foreground
                             rounded-xl px-6 py-3 font-semibold
                             hover:bg-primary/90 transition-colors
                             text-center"
                >
                  Start free — 1 credit →
                </Link>
                <Link
                  href="/ai-image-effects"
                  className="border rounded-xl px-6 py-3 font-semibold
                             hover:bg-muted transition-colors text-center"
                >
                  Explore 20 tools
                </Link>
              </div>

              <p className="text-xs text-muted-foreground">
                No credit card required · Payments by Paddle
              </p>
            </AnimatedSection>

            {/* Right — live demo */}
            <AnimatedSection delay={0.15} direction="left">
              <div className="border rounded-2xl p-6 bg-muted/20 space-y-4">
                <p className="text-sm font-medium">Try it now — free</p>
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
