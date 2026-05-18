import { AnimatedSection } from "@/components/AnimatedSection"

const STATS = [
  { value: "20+",  label: "AI tools" },
  { value: "11",   label: "Languages" },
  { value: "400+", label: "Indexed pages" },
  { value: "Free", label: "To start" },
]

export function SocialProof() {
  return (
    <section className="border-y bg-muted/20 py-8 px-6">
      <AnimatedSection
        direction="none"
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
