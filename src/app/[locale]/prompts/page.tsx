import type { Metadata } from "next"
import { Suspense } from "react"
import { routing } from "@/i18n/routing"
import {
  ALL_PROMPTS,
  PROMPT_CATEGORIES,
  getPromptsByCategory,
  type PromptCategory,
} from "@/lib/prompts-data"
import { PromptFilters } from "@/components/PromptFilters"
import { PromptGrid } from "@/components/PromptGrid"
import { Link } from "@/i18n/navigation"

type Params = Promise<{ locale: string }>
type SearchParamsType = Promise<{ category?: string }>

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { locale } = await params
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "https://yourdomain.com"

  return {
    title: "AI Image Prompts Gallery — Copy & Generate | next-stair",
    description:
      `${ALL_PROMPTS.length}+ curated AI image generation ` +
      "prompts across portrait, anime, social media, " +
      "artistic, product, and cinematic categories. " +
      "Copy any prompt and generate instantly.",
    alternates: {
      canonical: `${appUrl}/en/prompts`,
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, `${appUrl}/${loc}/prompts`])
      ),
    },
    openGraph: {
      title: "AI Image Prompts Gallery | next-stair",
      description:
        `${ALL_PROMPTS.length}+ curated prompts. ` +
        "Copy and generate instantly.",
      type: "website",
    },
  }
}

// JSON-LD
function PromptsJsonLd({
  locale,
  appUrl,
}: {
  locale: string
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
              name: "Prompts",
              item: `${appUrl}/${locale}/prompts`,
            },
          ],
        }),
      }}
    />
  )
}

export default async function PromptsPage({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParamsType
}) {
  const { locale } = await params
  const { category } = await searchParams
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "https://yourdomain.com"

  // Validate the category param
  const validCategories: string[] = PROMPT_CATEGORIES.map((c) => c.key)
  const activeCategory =
    category && validCategories.includes(category) ? category : "all"

  const initialPrompts = getPromptsByCategory(
    activeCategory as PromptCategory | "all"
  )

  return (
    <>
      <PromptsJsonLd locale={locale} appUrl={appUrl} />

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Prompts</span>
          </nav>

          <h1 className="text-4xl font-bold">AI Image Prompt Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {ALL_PROMPTS.length}+ curated prompts across{" "}
            {PROMPT_CATEGORIES.length} categories. Copy any prompt and generate
            instantly.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 pt-2">
            {PROMPT_CATEGORIES.map((cat) => {
              const count = getPromptsByCategory(cat.key).length
              return (
                <span key={cat.key} className="text-sm text-muted-foreground">
                  {cat.emoji} {cat.label}{" "}
                  <span className="font-medium text-foreground">{count}</span>
                </span>
              )
            })}
          </div>
        </div>

        {/* Filters — client island, wrapped in Suspense
            as required by useSearchParams */}
        <Suspense
          fallback={
            <div className="h-10 bg-muted/30 rounded-full animate-pulse w-80" />
          }
        >
          <PromptFilters activeCategory={activeCategory} />
        </Suspense>

        {/* Grid — client component for reactive filtering */}
        <PromptGrid
          initialPrompts={initialPrompts}
          initialCategory={activeCategory}
          locale={locale}
        />

        {/* Blog CTA */}
        <div className="border rounded-2xl p-8 bg-muted/20 text-center space-y-4">
          <h2 className="text-xl font-semibold">Want the full guides?</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Each category has a detailed blog article with 10-15 prompts, usage
            tips, and style explanations.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-primary text-primary-foreground
                       rounded-lg px-6 py-3 text-sm font-medium
                       hover:bg-primary/90 transition-colors"
          >
            Browse all prompt guides →
          </Link>
        </div>
      </div>
    </>
  )
}
