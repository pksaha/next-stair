import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getGenerationById } from "@/lib/generations"
import { getToolBySlug } from "@/lib/tools"
import { Link } from "@/i18n/navigation"

type Params = Promise<{
  locale: string
  generationId: string
}>

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { generationId } = await params
  const generation = await getGenerationById(generationId)
  if (!generation) return { title: "Image not found" }

  return {
    title: `AI Generated Image — next-stair`,
    description:
      generation.prompt.slice(0, 155) + "...",
    openGraph: {
      title: "AI Generated Image — next-stair",
      description: generation.prompt.slice(0, 155),
      images: generation.outputUrl
        ? [{ url: generation.outputUrl }]
        : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: generation.outputUrl
        ? [generation.outputUrl]
        : [],
    },
  }
}

export default async function SharePage(
  { params }: { params: Params }
) {
  const { locale, generationId } = await params
  const generation = await getGenerationById(generationId)
  if (!generation || !generation.outputUrl) notFound()

  const tool = await getToolBySlug(generation.toolSlug)

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 space-y-6">

      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">
          Created with{" "}
          <Link
            href={`/ai-image-effects/${generation.toolSlug}`}
            className="text-primary underline"
          >
            {tool?.name ?? generation.toolSlug}
          </Link>
          {" "}on next-stair
        </p>
        <p className="text-xs text-muted-foreground">
          {new Date(generation.createdAt).toLocaleDateString(
            locale,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </p>
      </div>

      <img
        src={generation.outputUrl}
        alt={generation.prompt}
        className="w-full rounded-xl border"
      />

      <div className="space-y-2">
        <p className="text-sm font-medium">Prompt used</p>
        <p className="text-sm text-muted-foreground bg-muted
                      rounded-lg px-4 py-3 leading-relaxed">
          {generation.prompt}
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href={generation.outputUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border rounded-lg
                     px-4 py-2.5 text-sm font-medium
                     hover:bg-muted transition-colors"
        >
          Download image
        </a>
        <Link
          href="/"
          className="flex-1 text-center bg-primary
                     text-primary-foreground rounded-lg
                     px-4 py-2.5 text-sm font-medium
                     hover:bg-primary/90 transition-colors"
        >
          Create your own →
        </Link>
      </div>

    </div>
  )
}
