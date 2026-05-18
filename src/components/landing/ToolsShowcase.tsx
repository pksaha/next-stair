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
    <section style={{ padding: "80px 24px" }}>
      <div className="max-w-6xl mx-auto">

        <div style={{ marginBottom: "48px" }}>
          <AnimatedSection className="text-center">
            <div className="section-badge" style={{ marginBottom: "16px" }}>
              ✦ 20 AI Tools
            </div>
            <h2 className="heading-1" style={{ marginBottom: "12px" }}>
              20 AI image tools
            </h2>
            <p className="body-lg" style={{ maxWidth: "480px", margin: "0 auto" }}>
              Every tool built for a specific creative need.
              All in one place.
            </p>
          </AnimatedSection>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {CATEGORIES.map((cat) => {
            const catTools = tools.filter((t) =>
              cat.slugs.includes(t.slug)
            )
            return (
              <AnimatedSection key={cat.label}>
                <p
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  {cat.label}
                </p>
                <StaggerContainer
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
                >
                  {catTools.map((tool) => (
                    <StaggerItem key={tool.slug} className="min-w-0">
                      <Link
                        href={`/ai-image-effects/${tool.slug}`}
                        className="card"
                        style={{
                          display: "block",
                          textDecoration: "none",
                          height: "100%",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            color: "var(--text-1)",
                            lineHeight: 1.35,
                            marginBottom: "4px",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {tool.name}
                        </p>
                        {tool.requiresImageUpload && (
                          <span className="caption">Upload photo</span>
                        )}
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>
            )
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <AnimatedSection>
            <Link href="/ai-image-effects">
              <button className="btn-outline">
                See all 20 tools →
              </button>
            </Link>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
