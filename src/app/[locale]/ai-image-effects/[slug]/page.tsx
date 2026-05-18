import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { getAllToolSlugs, getToolBySlug } from "@/lib/tools"
import { getAllPublishedPosts, resolvePostLocale } from "@/lib/blog"
import { ImageGenerator } from "@/components/ImageGenerator"
import { Link } from "@/i18n/navigation"

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

  // Find blog posts that mention this tool in
  // their relatedToolSlugs
  const allPosts = await getAllPublishedPosts()
  const relatedPosts = allPosts
    .filter((p) => p.relatedToolSlugs.includes(slug))
    .slice(0, 3)

  return (
    <>
      <ToolJsonLd tool={tool} url={pageUrl} />

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-16">

        {/* ── Hero section ──────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ padding: "64px 24px 48px" }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%", left: "50%",
              transform: "translateX(-50%)",
              width: "600px", height: "400px",
              background:
                "radial-gradient(ellipse, " +
                "rgba(212,160,23,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            className="section-badge"
            style={{ marginBottom: "16px" }}
          >
            ✦ AI Image Tool
          </div>
          <h1 className="heading-1" style={{ marginBottom: "16px" }}>
            {tool.name}
          </h1>
          <p className="body-lg" style={{ maxWidth: "560px" }}>
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
          <section style={{ marginTop: "48px" }}>
            <h2
              className="heading-2"
              style={{ marginBottom: "24px" }}
            >
              What you can do with {tool.name}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4"
                style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {tool.featureBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="card"
                  style={{ display: "flex", gap: "12px", padding: "16px" }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <span className="body">{bullet}</span>
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
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-soft)",
                    borderRadius: "var(--radius-md)",
                    padding: "16px 20px",
                    cursor: "pointer",
                  }}
                  onToggle={(e) => {
                    const el = e.currentTarget
                    if (el.open) {
                      el.style.borderLeft =
                        "3px solid var(--gold)"
                      el.style.paddingLeft = "17px"
                    } else {
                      el.style.borderLeft = ""
                      el.style.paddingLeft = "20px"
                    }
                  }}
                >
                  <summary
                    style={{
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "var(--text-1)",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.q}
                    <span
                      style={{
                        color: "var(--gold)",
                        fontSize: "0.75rem",
                        marginLeft: "16px",
                        flexShrink: 0,
                      }}
                    >
                      ▼
                    </span>
                  </summary>
                  <p className="body" style={{ marginTop: "12px" }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* ── Related tools placeholder ─────────────────── */}
        <section
          className="card"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-soft)",
          }}
        >
          <h2
            style={{
              fontWeight: 600,
              fontSize: "1.125rem",
              color: "var(--text-1)",
              marginBottom: "8px",
            }}
          >
            More AI image tools
          </h2>
          <p className="body">
            Explore all our AI tools at{" "}
            <a
              href={`/${locale}/ai-image-effects`}
              style={{ color: "var(--gold-light)", textDecoration: "underline" }}
            >
              ai-image-effects
            </a>
          </p>
        </section>

        {/* ── Related blog posts ────────────────────────── */}
        {relatedPosts.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold">
              Prompt guides &amp; tutorials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((post) => {
                const resolved = resolvePostLocale(post, locale)
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group border rounded-xl p-4
                               space-y-2 hover:border-primary/50
                               hover:bg-muted/20 transition-colors"
                  >
                    <p className="text-xs text-muted-foreground
                                  capitalize">
                      {post.category.replace(/-/g, " ")}
                    </p>
                    <p className="text-sm font-medium leading-snug
                                  group-hover:text-primary
                                  transition-colors">
                      {resolved.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.readingTimeMinutes} min read
                    </p>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

      </div>
    </>
  )
}
