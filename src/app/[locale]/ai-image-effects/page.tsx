import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { getAllPublishedTools } from "@/lib/tools"
import { routing } from "@/i18n/routing"

type Params = Promise<{ locale: string }>

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { locale } = await params
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ??
    "https://yourdomain.com"
  return {
    title: "AI Image Effects — 20+ Free AI Tools | next-stair",
    description:
      "Generate headshots, avatars, Pixar characters, anime art, " +
      "and more with our free AI image effect tools.",
    alternates: {
      canonical: `${appUrl}/en/ai-image-effects`,
    },
  }
}

export default async function AIEffectsPage(
  { params }: { params: Params }
) {
  const { locale } = await params
  const tools = await getAllPublishedTools()

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">AI Image Effects</h1>
        <p className="text-muted-foreground text-lg max-w-xl
                      mx-auto">
          {tools.length} AI-powered tools to generate, edit, and
          transform images
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2
                      lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/ai-image-effects/${tool.slug}`}
            locale={locale}
            className="group border rounded-xl p-5 space-y-2
                       hover:border-primary/50 hover:bg-muted/30
                       transition-colors"
          >
            <h2 className="font-semibold text-sm group-hover:text-primary
                           transition-colors">
              {tool.name}
            </h2>
            <p className="text-xs text-muted-foreground
                          line-clamp-2">
              {tool.description}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs text-primary">
                Try free →
              </span>
              {tool.requiresImageUpload && (
                <span className="text-xs bg-muted px-2 py-0.5
                                 rounded-full">
                  Upload photo
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}
