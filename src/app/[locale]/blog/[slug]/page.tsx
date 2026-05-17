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
            <header className="space-y-4">
              <div className="flex items-center gap-3
                              text-xs text-muted-foreground">
                <span className="bg-muted px-3 py-1 rounded-full
                                 capitalize">
                  {post.category.replace(/-/g, " ")}
                </span>
                <span>
                  {post.readingTimeMinutes} min read
                </span>
                {post.publishedAt && (
                  <span>
                    {new Date(
                      post.publishedAt
                    ).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold
                             leading-tight">
                {resolved.title}
              </h1>

              <p className="text-lg text-muted-foreground
                            leading-relaxed">
                {resolved.excerpt}
              </p>
            </header>

            {/* Body */}
            <BlogContent content={resolved.content} />

            {/* Related tools — internal links */}
            {relatedTools.length > 0 && (
              <section className="border-t pt-8 space-y-4">
                <h2 className="text-lg font-semibold">
                  Try these AI tools
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3
                                gap-3">
                  {relatedTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/ai-image-effects/${tool.slug}`}
                      className="border rounded-xl p-4 space-y-1
                                 hover:border-primary/50
                                 hover:bg-muted/30 transition-colors
                                 group"
                    >
                      <p className="font-medium text-sm
                                    group-hover:text-primary
                                    transition-colors">
                        {tool.name}
                      </p>
                      <p className="text-xs text-muted-foreground
                                    line-clamp-2">
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
              <div className="space-y-3">
                <p className="text-sm font-medium">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted px-3 py-1
                                 rounded-full"
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
            <div className="border rounded-xl p-4 space-y-3
                            bg-muted/20">
              <p className="text-sm font-medium">
                Try next-stair free
              </p>
              <p className="text-xs text-muted-foreground">
                1 free generation. No credit card required.
              </p>
              <Link
                href="/sign-up"
                className="block w-full text-center
                           bg-primary text-primary-foreground
                           rounded-lg px-4 py-2.5 text-sm
                           font-medium hover:bg-primary/90
                           transition-colors"
              >
                Start for free →
              </Link>
            </div>

          </aside>

        </div>

      </div>
    </>
  )
}
