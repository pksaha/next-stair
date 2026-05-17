"use client"

type AspectRatio = "square" | "landscape" | "portrait"

interface Props {
  value: AspectRatio
  onChange: (value: AspectRatio) => void
  disabled?: boolean
}

const options: {
  value: AspectRatio
  label: string
  description: string
  icon: string
}[] = [
  {
    value: "square",
    label: "Square",
    description: "1:1 — 1024×1024",
    icon: "⬛",
  },
  {
    value: "landscape",
    label: "Landscape",
    description: "3:2 — 1536×1024",
    icon: "▬",
  },
  {
    value: "portrait",
    label: "Portrait",
    description: "2:3 — 1024×1536",
    icon: "▮",
  },
]

export function AspectRatioSelector({
  value,
  onChange,
  disabled,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Aspect ratio</label>
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
            <span className="text-lg">{option.icon}</span>
            <span className="font-medium">{option.label}</span>
            <span className="text-xs text-muted-foreground">
              {option.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
