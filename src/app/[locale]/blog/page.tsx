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

      <div className="space-y-3">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground text-lg">
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
              className="group border rounded-xl p-6
                         space-y-3 hover:border-primary/50
                         hover:bg-muted/20 transition-colors"
            >
              <div className="flex items-center gap-2
                              text-xs text-muted-foreground">
                <span className="bg-muted px-2 py-0.5
                                 rounded-full capitalize">
                  {post.category.replace(/-/g, " ")}
                </span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>

              <h2 className="font-semibold text-base
                             leading-snug
                             group-hover:text-primary
                             transition-colors">
                {resolved.title}
              </h2>

              <p className="text-sm text-muted-foreground
                            line-clamp-2 leading-relaxed">
                {resolved.excerpt}
              </p>

              {post.publishedAt && (
                <p className="text-xs text-muted-foreground">
                  {new Date(
                    post.publishedAt
                  ).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              )}
            </Link>
          )
        })}
      </div>

    </div>
  )
}
