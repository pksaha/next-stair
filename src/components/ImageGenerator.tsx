"use client"

import { useState } from "react"
import { AspectRatioSelector } from "./AspectRatioSelector"
import { QualitySelector } from "./QualitySelector"
import { ImageUpload } from "./ImageUpload"

type AspectRatio = "square" | "landscape" | "portrait"
type Quality = "low" | "medium" | "high"

interface GenerationResult {
  imageUrl: string
  generationId: string
}

interface Props {
  toolSlug?: string
  promptPlaceholder?: string
  initialPrompt?: string
}

export function ImageGenerator({
  toolSlug = "text-to-image",
  promptPlaceholder = "Describe the image you want to create...",
  initialPrompt = "",
}: Props) {
  const [prompt, setPrompt] = useState(initialPrompt)
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("square")
  const [quality, setQuality] = useState<Quality>("medium")
  const [inputImageBase64, setInputImageBase64] = useState<
    string | null
  >(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<GenerationResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleGenerate() {
    if (!prompt.trim()) {
      setError("Please enter a prompt")
      return
    }

    setIsGenerating(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt.trim(),
          aspectRatio,
          quality,
          toolSlug,
          ...(inputImageBase64 && { inputImageBase64 }),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? "Generation failed")
        return
      }

      setResult(data)
    } catch {
      setError("Network error — please try again")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Left — controls */}
      <div className="space-y-5">

        {/* Prompt */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Prompt
            <span className="text-muted-foreground ml-1 font-normal">
              (max 32,000 chars)
            </span>
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={promptPlaceholder}
            disabled={isGenerating}
            rows={4}
            maxLength={32000}
            className="w-full border rounded-lg px-3 py-2 text-sm
                       bg-background resize-none
                       focus:outline-none focus:ring-2
                       focus:ring-primary/50
                       disabled:opacity-50"
          />
          <p className="text-xs text-muted-foreground text-right">
            {prompt.length} / 32,000
          </p>
        </div>

        <ImageUpload
          hasImage={!!inputImageBase64}
          onImageLoad={setInputImageBase64}
          onClear={() => setInputImageBase64(null)}
          disabled={isGenerating}
        />

        <AspectRatioSelector
          value={aspectRatio}
          onChange={setAspectRatio}
          disabled={isGenerating}
        />

        <QualitySelector
          value={quality}
          onChange={setQuality}
          disabled={isGenerating}
        />

        {error && (
          <div className="text-sm text-destructive border border-destructive/30
                          bg-destructive/10 rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim()}
          className="w-full bg-primary text-primary-foreground
                     py-3 px-6 rounded-lg font-medium text-sm
                     hover:bg-primary/90 transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⟳</span>
              Generating... (may take 10–30 seconds)
            </span>
          ) : inputImageBase64 ? (
            "Edit image"
          ) : (
            "Generate image"
          )}
        </button>

      </div>

      {/* Right — result */}
      <div className="flex flex-col">
        <p className="text-sm font-medium mb-2">Result</p>
        <div className="flex-1 border rounded-lg bg-muted/30
                        flex items-center justify-center min-h-64">
          {isGenerating && (
            <div className="text-center space-y-3 p-8">
              <div className="text-4xl animate-pulse">🎨</div>
              <p className="text-sm text-muted-foreground">
                Generating your image...
              </p>
              <p className="text-xs text-muted-foreground">
                This usually takes 10–30 seconds
              </p>
            </div>
          )}

          {!isGenerating && !result && !error && (
            <p className="text-sm text-muted-foreground p-8 text-center">
              Your generated image will appear here
            </p>
          )}

          {result && (
            <div className="w-full p-3 space-y-3">
              <img
                src={result.imageUrl}
                alt={prompt}
                className="w-full rounded-lg object-contain"
              />
              <div className="flex gap-2">
                <a
                  href={result.imageUrl}
                  download={`next-stair-${result.generationId}.webp`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border rounded-lg
                             px-3 py-2 text-sm hover:bg-muted
                             transition-colors"
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(result.imageUrl)
                  }}
                  className="flex-1 border rounded-lg px-3 py-2
                             text-sm hover:bg-muted transition-colors"
                >
                  Copy URL
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
