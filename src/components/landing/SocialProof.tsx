import { AnimatedSection } from "@/components/AnimatedSection"

const STATS = [
  { value: "20+",  label: "AI tools",     icon: "🎨" },
  { value: "11",   label: "Languages",    icon: "🌍" },
  { value: "400+", label: "Indexed pages",icon: "📈" },
  { value: "Free", label: "To start",     icon: "✨" },
]

export function SocialProof() {
  return (
    <>
      <hr className="divider-gold" />
      <section style={{ padding: "48px 24px" }}>
        <AnimatedSection
          direction="none"
          className="max-w-4xl mx-auto"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{ fontSize: "1.5rem", marginBottom: "4px" }}
                >
                  {stat.icon}
                </div>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg, #F5C842, #D4A017)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    margin: 0,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.875rem",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
      <hr className="divider-gold" />
    </>
  )
}
