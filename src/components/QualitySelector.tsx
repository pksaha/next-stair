"use client"

type Quality = "low" | "medium" | "high"

interface Props {
  value: Quality
  onChange: (value: Quality) => void
  disabled?: boolean
}

const options: {
  value: Quality
  label: string
  description: string
  cost: string
}[] = [
  {
    value: "low",
    label: "Draft",
    description: "Fastest, cheapest",
    cost: "~$0.02",
  },
  {
    value: "medium",
    label: "Standard",
    description: "Balanced",
    cost: "~$0.07",
  },
  {
    value: "high",
    label: "HD",
    description: "Best quality",
    cost: "~$0.19",
  },
]

export function QualitySelector({
  value,
  onChange,
  disabled,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Quality</label>
      <div className="flex gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            disabled={disabled}
            onClick={() => onChange(option.value)}
            className={[
              "flex-1 flex flex-col items-center gap-1 p-3",
              "border rounded-lg text-sm transition-colors",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              value === option.value
                ? "border-primary bg-primary/10 text-primary"
                : "border-border hover:border-primary/50",
            ].join(" ")}
          >
            <span className="font-medium">{option.label}</span>
            <span className="text-xs text-muted-foreground">
              {option.description}
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              {option.cost}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
