import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection"

const FEATURES = [
  {
    icon: "⚡",
    title: "Generate in seconds",
    description:
      "Powered by gpt-image-1, the most advanced AI " +
      "image model. Text-to-image and image-to-image " +
      "in under 30 seconds.",
  },
  {
    icon: "🌍",
    title: "11 languages",
    description:
      "Full Bengali, Hindi, Chinese, and 8 more languages. " +
      "Every page, every tool, every blog post translated.",
  },
  {
    icon: "🎨",
    title: "20 specialised tools",
    description:
      "Headshots, avatars, Pixar characters, cosplay, " +
      "anime conversion, hairstyle changes, and more.",
  },
  {
    icon: "📱",
    title: "Works everywhere",
    description:
      "Mobile-first design. Generate, download, and share " +
      "images from any device, any screen size.",
  },
  {
    icon: "🔒",
    title: "Your images, your gallery",
    description:
      "Every image saved to your personal gallery. " +
      "Download, share, or delete at any time.",
  },
  {
    icon: "💳",
    title: "Start for free",
    description:
      "1 free credit on signup. No credit card required. " +
      "Upgrade to Pro when you need more.",
  },
]

export function FeaturesSection() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div className="max-w-5xl mx-auto">

        <div style={{ marginBottom: "48px" }}>
          <AnimatedSection className="text-center">
            <div className="section-badge" style={{ marginBottom: "16px" }}>
              ✦ Features
            </div>
            <h2 className="heading-1" style={{ marginBottom: "12px" }}>
              Everything you need
            </h2>
            <p className="body-lg" style={{ maxWidth: "480px", margin: "0 auto" }}>
              Built for speed, quality, and real-world use.
            </p>
          </AnimatedSection>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title} className="card-glow">
              <div
                style={{
                  width: 48, height: 48,
                  borderRadius: 12,
                  background: "rgba(212,160,23,0.15)",
                  border: "1px solid rgba(212,160,23,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: "16px",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--text-1)",
                  marginBottom: "8px",
                }}
              >
                {feature.title}
              </h3>
              <p className="body" style={{ margin: 0 }}>
                {feature.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}
