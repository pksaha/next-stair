import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
  resolvePostLocale,
} from "@/lib/blog"
import { getAllPublishedTools } from "@/lib/tools"
import { BlogContent } from "@/components/BlogContent"
import { Link } from "@/i18n/navigation"

type Params = Promise<{ locale: string; slug: string }>

// ── Static generation ──────────────────────────────────────
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  )
}

// ── SEO metadata ───────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { locale, slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: "Post not found" }
  const resolved = resolvePostLocale(post, locale)
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "https://yourdomain.com"
  const canonicalUrl = `${appUrl}/en/blog/${slug}`

  const languages: Record<string, string> = {}
  routing.locales.forEach((loc) => {
    languages[loc] = `${appUrl}/${loc}/blog/${slug}`
  })
  languages["x-default"] = canonicalUrl

  return {
    title: resolved.seoTitle,
    description: resolved.seoDescription,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: resolved.seoTitle,
      description: resolved.seoDescription,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      authors: [post.author],
      url: `${appUrl}/${locale}/blog/${slug}`,
      ...(post.coverImageUrl && {
        images: [{ url: post.coverImageUrl }],
      }),
    },
  }
}

// ── JSON-LD helpers ────────────────────────────────────────
function ArticleJsonLd({
  post,
  resolved,
  url,
}: {
  post: Awaited<ReturnType<typeof getPostBySlug>>
  resolved: ReturnType<typeof resolvePostLocale>
  url: string
}) {
  if (!post) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: resolved.title,
          description: resolved.excerpt,
          author: {
            "@type": "Person",
            name: post.author,
          },
          datePublished: post.publishedAt?.toISOString(),
          dateModified: post.updatedAt?.toISOString(),
          url,
          ...(post.coverImageUrl && {
            image: post.coverImageUrl,
          }),
        }),
      }}
    />
  )
}

function BreadcrumbJsonLd({
  locale,
  slug,
  title,
  appUrl,
}: {
  locale: string
  slug: string
  title: string
  appUrl: string
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${appUrl}/${locale}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${appUrl}/${locale}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: title,
              item: `${appUrl}/${locale}/blog/${slug}`,
            },
          ],
        }),
      }}
    />
  )
}

// ── Page component ─────────────────────────────────────────
export default async function BlogPostPage(
  { params }: { params: Params }
) {
  const { locale, slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()
  const resolved = resolvePostLocale(post, locale)
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "https://yourdomain.com"
  const pageUrl = `${appUrl}/${locale}/blog/${slug}`

  const allTools = await getAllPublishedTools()
  const relatedTools = allTools.filter((t) =>
    post.relatedToolSlugs.includes(t.slug)
  )

  const relatedPosts = await getRelatedPosts(
    slug,
    post.category,
    3
  )

  return (
    <>
      <ArticleJsonLd post={post} resolved={resolved} url={pageUrl} />
      <BreadcrumbJsonLd
        locale={locale}
        slug={slug}
        title={resolved.title}
        appUrl={appUrl}
      />

      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-4
                        gap-10">

          {/* Main content */}
          <article className="lg:col-span-3 space-y-8">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2
                            text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                className="hover:text-foreground"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground line-clamp-1">
                {resolved.title}
              </span>
            </nav>

            {/* Header */}
            <header
              className="relative overflow-hidden"
              style={{ paddingBottom: "8px" }}
            >
              {/* Golden radial glow */}
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
                {post.category.replace(/-/g, " ")}
              </div>

              <h1
                className="heading-1"
                style={{ marginBottom: "16px" }}
              >
                {resolved.title}
              </h1>

              <p
                className="body-lg"
                style={{ marginBottom: "16px", maxWidth: "640px" }}
              >
                {resolved.excerpt}
              </p>

              <div
                className="flex items-center gap-3"
                style={{ flexWrap: "wrap" }}
              >
                <span className="caption">
                  {post.readingTimeMinutes} min read
                </span>
                {post.publishedAt && (
                  <span className="caption">
                    {new Date(post.publishedAt).toLocaleDateString(
                      locale,
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </span>
                )}
              </div>
            </header>

            {/* Body */}
            <BlogContent content={resolved.content} />

            {/* Related tools — internal links */}
            {relatedTools.length > 0 && (
              <section>
                <h2
                  style={{
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    color: "#fff",
                    marginBottom: "16px",
                    paddingTop: "32px",
                    borderTop: "1px solid rgba(212,160,23,0.12)",
                  }}
                >
                  Try these AI tools
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/ai-image-effects/${tool.slug}`}
                      className="card"
                      style={{ textDecoration: "none" }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                          color: "var(--text-1)",
                          marginBottom: "6px",
                        }}
                      >
                        {tool.name}
                      </p>
                      <p
                        className="body"
                        style={{
                          fontSize: "0.8125rem",
                          margin: 0,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {tool.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">

            {/* Tags */}
            {post.tags.length > 0 && (
              <div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(212,160,23,0.1)",
                        border: "1px solid rgba(212,160,23,0.2)",
                        color: "rgba(255,255,255,0.6)",
                        borderRadius: "100px",
                        padding: "3px 12px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm font-medium">
                  Related articles
                </p>
                <div className="space-y-3">
                  {relatedPosts.map((rp) => {
                    const rpResolved =
                      resolvePostLocale(rp, locale)
                    return (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="block group"
                      >
                        <p className="text-sm
                                      group-hover:text-primary
                                      transition-colors
                                      leading-snug">
                          {rpResolved.title}
                        </p>
                        <p className="text-xs
                                      text-muted-foreground mt-1">
                          {rp.readingTimeMinutes} min read
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="card-glow">
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "var(--text-1)",
                  marginBottom: "6px",
                }}
              >
                Try next-stair free
              </p>
              <p className="caption" style={{ marginBottom: "16px" }}>
                1 free generation. No credit card required.
              </p>
              <Link href="/sign-up" style={{ display: "block" }}>
                <button className="btn-gold" style={{ width: "100%" }}>
                  Start for free →
                </button>
              </Link>
            </div>

          </aside>

        </div>

      </div>
    </>
  )
}
