import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { getAllToolSlugs, getToolBySlug } from "@/lib/tools"
import { ImageGenerator } from "@/components/ImageGenerator"

// ── Types ──────────────────────────────────────────────────
type Params = Promise<{ locale: string; slug: string }>

// ── Static generation ──────────────────────────────────────
// Returns every locale × slug combination so Next.js
// pre-renders all pages at build time.
export async function generateStaticParams() {
  const slugs = await getAllToolSlugs()
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  )
}

// ── SEO metadata ───────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { locale, slug } = await params
  const tool = await getToolBySlug(slug)
  if (!tool) return { title: "Tool not found" }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ??
    "https://yourdomain.com"
  const canonicalUrl = `${appUrl}/en/ai-image-effects/${slug}`

  // Build hreflang alternates for all 11 locales
  const languages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    languages[loc] = `${appUrl}/${loc}/ai-image-effects/${slug}`
  })
  languages["x-default"] = canonicalUrl

  return {
    title: tool.seoTitle ??
      `${tool.name} — AI Image Generator | next-stair`,
    description: tool.seoDescription ?? tool.description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: tool.seoTitle ?? tool.name,
      description: tool.seoDescription ?? tool.description,
      type: "website",
      url: `${appUrl}/${locale}/ai-image-effects/${slug}`,
    },
  }
}

// ── JSON-LD structured data ────────────────────────────────
function ToolJsonLd({
  tool,
  url,
}: {
  tool: Awaited<ReturnType<typeof getToolBySlug>>
  url: string
}) {
  if (!tool) return null
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "MultimediaApplication",
    url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier available",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// ── Page component ─────────────────────────────────────────
export default async function ToolPage(
  { params }: { params: Params }
) {
  const { locale, slug } = await params
  const tool = await getToolBySlug(slug)
  if (!tool) notFound()

  const t = await getTranslations({ locale, namespace: "common" })
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ??
    "https://yourdomain.com"
  const pageUrl =
    `${appUrl}/${locale}/ai-image-effects/${slug}`

  // Parse FAQ items safely
  const faqItems = Array.isArray(tool.faqItems)
    ? (tool.faqItems as { q: string; a: string }[])
    : []

  return (
    <>
      <ToolJsonLd tool={tool} url={pageUrl} />

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-16">

        {/* ── Hero section ──────────────────────────────── */}
        <section className="text-center space-y-4">
          <div className="inline-block bg-primary/10 text-primary
                          text-sm font-medium px-4 py-1 rounded-full">
            AI Image Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-bold
                         tracking-tight">
            {tool.name}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl
                        mx-auto">
            {tool.description}
          </p>
        </section>

        {/* ── Generator UI ──────────────────────────────── */}
        <section>
          <ImageGenerator
            toolSlug={tool.slug}
            promptPlaceholder={
              `Describe what you want... ` +
              `(Suggested: ${tool.promptTemplate.slice(0, 80)}...)`
            }
            initialPrompt={tool.promptTemplate}
          />
        </section>

        {/* ── Features ──────────────────────────────────── */}
        {tool.featureBullets && tool.featureBullets.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">
              What you can do with {tool.name}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2
                           gap-4">
              {tool.featureBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border
                             rounded-lg p-4"
                >
                  <span className="text-primary mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span className="text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── FAQ ───────────────────────────────────────── */}
        {faqItems.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">
              Frequently asked questions
            </h2>

            {/* FAQ JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqItems.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.a,
                    },
                  })),
                }),
              }}
            />

            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="border rounded-lg px-5 py-4
                             open:bg-muted/30 cursor-pointer"
                >
                  <summary className="font-medium text-sm
                                      list-none flex justify-between
                                      items-center">
                    {item.q}
                    <span className="text-muted-foreground
                                     text-xs ml-4">
                      ▼
                    </span>
                  </summary>
                  <p className="text-sm text-muted-foreground
                                mt-3 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* ── Related tools placeholder ─────────────────── */}
        <section className="border rounded-xl p-6 bg-muted/20
                            space-y-3">
          <h2 className="text-lg font-semibold">
            More AI image tools
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore all our AI tools at{" "}
            <a
              href={`/${locale}/ai-image-effects`}
              className="text-primary underline"
            >
              ai-image-effects
            </a>
          </p>
        </section>

      </div>
    </>
  )
}
