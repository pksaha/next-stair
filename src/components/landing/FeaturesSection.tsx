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
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        <AnimatedSection className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything you need
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Built for speed, quality, and real-world use.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => (
            <StaggerItem
              key={feature.title}
              className="border rounded-xl p-6 space-y-3
                         hover:border-primary/30 transition-colors"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}
