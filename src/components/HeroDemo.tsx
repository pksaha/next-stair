"use client"
import { useState } from "react"

const EXAMPLE_PROMPTS = [
  "Professional LinkedIn headshot, studio lighting, " +
    "clean background, confident expression",
  "Soft shojo anime portrait, pastel colours, " +
    "cherry blossoms, clean line art",
  "Pixar 3D character from photo, warm lighting, " +
    "expressive features, cinematic quality",
  "Golden hour portrait, warm amber backlight, " +
    "outdoor setting, film colour grade",
  "Rembrandt lighting, single candle source, " +
    "deep shadows, Dutch Golden Age quality",
]

export function HeroDemo({ locale }: { locale: string }) {
  const [prompt, setPrompt] = useState(EXAMPLE_PROMPTS[0])
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGenerate() {
    if (!prompt.trim()) return
    setIsGenerating(true)
    setError(null)

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt.trim(),
          aspectRatio: "square",
          quality: "low",
          toolSlug: "text-to-image",
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (res.status === 401) {
          window.location.href = `/${locale}/sign-up`
          return
        }
        setError(data.error ?? "Generation failed. Please try again.")
        return
      }

      setImageUrl(data.imageUrl)
    } catch {
      setError("Network error — please try again")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="w-full max-w-xl space-y-3">

      {/* Prompt input */}
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={2}
          placeholder="Describe the image you want..."
          disabled={isGenerating}
          className="w-full border rounded-xl px-4 py-3
                     pr-28 text-sm bg-background resize-none
                     focus:outline-none focus:ring-2
                     focus:ring-primary/40
                     disabled:opacity-60"
        />
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim()}
          className="absolute right-2 bottom-2
                     bg-primary text-primary-foreground
                     rounded-lg px-4 py-1.5 text-sm
                     font-medium transition-all
                     hover:bg-primary/90
                     disabled:opacity-50
                     disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <span className="flex items-center gap-1.5">
              <span className="animate-spin text-xs">⟳</span>
              Generating
            </span>
          ) : (
            "Generate →"
          )}
        </button>
      </div>

      {/* Example prompts */}
      <div className="flex flex-wrap gap-2">
        {EXAMPLE_PROMPTS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPrompt(p)}
            className={[
              "text-xs border rounded-full px-3 py-1",
              "transition-colors",
              prompt === p
                ? "border-primary bg-primary/10 text-primary"
                : "border-border hover:border-primary/40",
            ].join(" ")}
          >
            {p.split(",")[0].slice(0, 28)}...
          </button>
        ))}
      </div>

      {/* Result */}
      {isGenerating && (
        <div className="border rounded-xl h-64 bg-muted/30
                        flex flex-col items-center
                        justify-center gap-3">
          <div className="text-3xl animate-pulse">🎨</div>
          <p className="text-sm text-muted-foreground">
            Generating your image...
          </p>
        </div>
      )}

      {imageUrl && !isGenerating && (
        <div className="border rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt={prompt}
            className="w-full object-cover"
          />
          <div className="p-3 flex gap-2">
            <a
              href={`/${locale}/sign-up`}
              className="flex-1 text-center bg-primary
                         text-primary-foreground rounded-lg
                         px-4 py-2 text-xs font-medium
                         hover:bg-primary/90 transition-colors"
            >
              Get 1 free credit — sign up →
            </a>
            <a
              href={imageUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg px-4 py-2
                         text-xs hover:bg-muted
                         transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      )}

      {error && (
        <p className="text-xs text-destructive border
                      border-destructive/30 bg-destructive/10
                      rounded-lg px-3 py-2">
          {error}
        </p>
      )}

    </div>
  )
}
