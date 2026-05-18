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
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto space-y-12">

        <AnimatedSection className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg">
            Three steps from idea to image.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <StaggerItem key={step.number} className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary
                              flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}
