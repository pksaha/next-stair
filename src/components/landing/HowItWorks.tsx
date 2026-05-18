import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection"

const STEPS = [
  {
    number: "01",
    title: "Choose a tool",
    description:
      "Pick from 20 AI image tools — headshot generator, " +
      "avatar creator, anime converter, and more. Each is " +
      "built for a specific use case.",
  },
  {
    number: "02",
    title: "Describe or upload",
    description:
      "Type what you want in plain language, or upload " +
      "a photo for image-to-image transformation. " +
      "No design skills needed.",
  },
  {
    number: "03",
    title: "Download and share",
    description:
      "Your image is ready in seconds. Download it, " +
      "copy a share link, or save it to your personal " +
      "gallery for later.",
  },
]

export function HowItWorks() {
  return (
    <section style={{ background: "var(--surface)", padding: "80px 24px" }}>
      <div className="max-w-4xl mx-auto">

        <div style={{ marginBottom: "48px" }}>
          <AnimatedSection className="text-center">
            <div className="section-badge" style={{ marginBottom: "16px" }}>
              ✦ How it works
            </div>
            <h2 className="heading-1" style={{ marginBottom: "12px" }}>
              Three steps from idea to image
            </h2>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <StaggerItem key={step.number}>
              <div
                style={{
                  width: 56, height: 56,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F5C842, #D4A017)",
                  color: "#000",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(212,160,23,0.35)",
                  marginBottom: "20px",
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                {step.title}
              </h3>
              <p className="body" style={{ margin: 0 }}>
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}
