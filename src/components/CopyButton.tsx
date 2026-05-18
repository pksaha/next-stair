"use client"

import { useState } from "react"

interface Props {
  text: string
  className?: string
}

export function CopyButton({ text, className }: Props) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea")
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={[
        "transition-all duration-150 select-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={copied ? "Copied!" : "Copy prompt"}
    >
      {copied ? "✓ Copied!" : "Copy"}
    </button>
  )
}
