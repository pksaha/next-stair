"use client"

import { useRef, useState } from "react"

interface Props {
  onImageLoad: (base64: string) => void
  onClear: () => void
  hasImage: boolean
  disabled?: boolean
}

export function ImageUpload({
  onImageLoad,
  onClear,
  hasImage,
  disabled,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function processFile(file: File) {
    setError(null)

    // Validate type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (PNG, JPG, WEBP)")
      return
    }

    // Validate size — 10MB max
    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be under 10MB")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      setPreview(dataUrl)
      // Strip the data:image/...;base64, prefix — API needs
      // raw base64 only
      const base64 = dataUrl.split(",")[1]
      onImageLoad(base64)
    }
    reader.readAsDataURL(file)
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) processFile(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) processFile(file)
  }

  function handleClear() {
    setPreview(null)
    setError(null)
    if (inputRef.current) inputRef.current.value = ""
    onClear()
  }

  if (preview) {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Input image (image-to-image)
        </label>
        <div className="relative rounded-lg overflow-hidden border">
          <img
            src={preview}
            alt="Upload preview"
            className="w-full max-h-48 object-contain bg-muted"
          />
          <button
            type="button"
            onClick={handleClear}
            disabled={disabled}
            className="absolute top-2 right-2 bg-background border
                       rounded-full w-7 h-7 flex items-center
                       justify-center text-sm hover:bg-muted
                       disabled:opacity-50"
            aria-label="Remove image"
          >
            ✕
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Input image{" "}
        <span className="text-muted-foreground font-normal">
          (optional — for image-to-image editing)
        </span>
      </label>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={[
          "border-2 border-dashed rounded-lg p-6 text-center",
          "cursor-pointer transition-colors",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50",
          disabled ? "opacity-50 cursor-not-allowed" : "",
        ].join(" ")}
      >
        <p className="text-sm text-muted-foreground">
          Drag an image here or{" "}
          <span className="text-primary underline">click to browse</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          PNG, JPG, WEBP — max 10MB
        </p>
      </div>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={disabled}
      />
    </div>
  )
}
