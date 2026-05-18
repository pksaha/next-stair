import { getAllPublishedTools } from "@/lib/tools"
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection"
import { Link } from "@/i18n/navigation"

const CATEGORIES = [
  {
    label: "Portrait & Identity",
    slugs: [
      "ai-headshot-generator",
      "ai-avatar-generator",
      "ai-professional-photo-generator",
      "ai-hairstyle-changer",
      "ai-background-remover",
    ],
  },
  {
    label: "Style & Character",
    slugs: [
      "pixar-ai-generator",
      "ai-cosplay-generator",
      "anime-to-real",
      "ai-figure-generator",
      "zootopia-nick-and-judy-selfie",
    ],
  },
  {
    label: "Edit & Transform",
    slugs: [
      "photo-restoration",
      "ai-photo-to-sketch",
      "ai-image-combiner",
      "ai-color-grading",
      "ai-pose-generator",
    ],
  },
  {
    label: "Creative & Fun",
    slugs: [
      "ai-sticker-generator",
      "ai-selfie-with-celebrities-generator",
      "ai-manga-translator",
      "pet-passport-photo-generator",
      "ai-floor-plan-generator",
    ],
  },
]

export async function ToolsShowcase() {
  const tools = await getAllPublishedTools()

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        <AnimatedSection className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            20 AI image tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every tool built for a specific creative need. All in one place.
          </p>
        </AnimatedSection>

        <div className="space-y-10">
          {CATEGORIES.map((cat) => {
            const catTools = tools.filter((t) => cat.slugs.includes(t.slug))
            return (
              <AnimatedSection key={cat.label}>
                <h3 className="text-sm font-medium text-muted-foreground
                               uppercase tracking-wide mb-4">
                  {cat.label}
                </h3>
                <StaggerContainer
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
                >
                  {catTools.map((tool) => (
                    <StaggerItem key={tool.slug} className="min-w-0">
                      <Link
                        href={`/ai-image-effects/${tool.slug}`}
                        className="block border rounded-xl p-4 space-y-1 text-sm
                                   hover:border-primary/50 hover:bg-muted/30
                                   transition-colors group h-full"
                      >
                        <p className="font-medium leading-snug line-clamp-2
                                      group-hover:text-primary transition-colors">
                          {tool.name}
                        </p>
                        {tool.requiresImageUpload && (
                          <span className="text-xs text-muted-foreground">
                            Upload photo
                          </span>
                        )}
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection className="text-center">
          <Link
            href="/ai-image-effects"
            className="inline-block border rounded-lg px-6 py-3 text-sm
                       font-medium hover:bg-muted transition-colors"
          >
            See all 20 tools →
          </Link>
        </AnimatedSection>

      </div>
    </section>
  )
}
