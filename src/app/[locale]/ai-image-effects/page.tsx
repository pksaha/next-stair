import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { getAllPublishedTools } from "@/lib/tools"
import { routing } from "@/i18n/routing"

type Params = Promise<{ locale: string }>

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
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

const categories = [
  {
    title: "Portrait & Identity",
    slugs: [
      "ai-headshot-generator",
      "ai-avatar-generator",
      "ai-professional-photo-generator",
      "ai-hairstyle-changer",
      "ai-background-remover",
    ],
  },
  {
    title: "Style & Character",
    slugs: [
      "pixar-ai-generator",
      "ai-cosplay-generator",
      "anime-to-real",
      "ai-figure-generator",
      "zootopia-nick-and-judy-selfie",
    ],
  },
  {
    title: "Edit & Transform",
    slugs: [
      "photo-restoration",
      "ai-photo-to-sketch",
      "ai-image-combiner",
      "ai-color-grading",
      "ai-pose-generator",
    ],
  },
  {
    title: "Creative & Fun",
    slugs: [
      "ai-sticker-generator",
      "ai-selfie-with-celebrities-generator",
      "ai-manga-translator",
      "pet-passport-photo-generator",
      "ai-floor-plan-generator",
    ],
  },
]

export default async function AIEffectsPage(
  { params }: { params: Params }
) {
  const { locale } = await params
  const tools = await getAllPublishedTools()

  const toolsByCategory = categories.map((cat) => ({
    ...cat,
    tools: tools.filter((t) => cat.slugs.includes(t.slug)),
  }))

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

      {toolsByCategory.map((cat) => (
        <section key={cat.title} className="space-y-4">
          <h2 className="text-xl font-semibold">{cat.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2
                          lg:grid-cols-3 gap-4">
            {cat.tools.map((tool) => (
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
        </section>
      ))}

    </div>
  )
}
