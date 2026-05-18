import type { Metadata } from "next"
import { routing } from "@/i18n/routing"
import { getAllPublishedPosts, resolvePostLocale } from "@/lib/blog"
import { Link } from "@/i18n/navigation"

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
    title: "AI Image Prompts & Guides — next-stair Blog",
    description:
      "Tested AI image generation prompts, style guides, " +
      "and tutorials. Anime portraits, Renaissance art, " +
      "Instagram aesthetics, and more.",
    alternates: {
      canonical: `${appUrl}/en/blog`,
    },
  }
}

export default async function BlogIndexPage(
  { params }: { params: Params }
) {
  const { locale } = await params
  const posts = await getAllPublishedPosts()

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

      <div style={{ marginBottom: "48px" }}>
        <div className="section-badge" style={{ marginBottom: "16px" }}>
          ✦ Blog
        </div>
        <h1 className="heading-1" style={{ marginBottom: "12px" }}>
          AI image prompts &amp; guides
        </h1>
        <p className="body-lg">
          AI image prompts, style guides, and tutorials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => {
          const resolved = resolvePostLocale(post, locale)
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                className="section-badge"
                style={{ marginBottom: "12px" }}
              >
                {post.category.replace(/-/g, " ")}
              </div>

              <h2
                style={{
                  fontWeight: 600,
                  color: "#fff",
                  fontSize: "1rem",
                  lineHeight: 1.4,
                  marginBottom: "8px",
                }}
              >
                {resolved.title}
              </h2>

              <p
                className="body"
                style={{
                  marginBottom: "12px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {resolved.excerpt}
              </p>

              <div className="flex items-center gap-3">
                <span className="caption">
                  {post.readingTimeMinutes} min read
                </span>
                {post.publishedAt && (
                  <span className="caption">
                    {new Date(post.publishedAt).toLocaleDateString(
                      locale,
                      { year: "numeric", month: "short", day: "numeric" }
                    )}
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>

    </div>
  )
}
