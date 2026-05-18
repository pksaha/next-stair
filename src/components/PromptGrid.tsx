"use client"

import { useState, useEffect } from "react"
import { CopyButton } from "./CopyButton"
import {
  ALL_PROMPTS,
  getPromptsByCategory,
  PROMPT_CATEGORIES,
  type PromptItem,
  type PromptCategory,
} from "@/lib/prompts-data"

interface Props {
  initialPrompts: PromptItem[]
  initialCategory: string
  locale: string
}

export function PromptGrid({
  initialPrompts,
  initialCategory,
  locale,
}: Props) {
  const [prompts, setPrompts] = useState(initialPrompts)
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  // Listen for category change events from PromptFilters
  useEffect(() => {
    function handleChange(e: Event) {
      const category = (e as CustomEvent<{ category: string }>).detail.category
      setActiveCategory(category)
      setPrompts(
        getPromptsByCategory(category as PromptCategory | "all")
      )
    }

    window.addEventListener("prompt-category-change", handleChange)
    return () =>
      window.removeEventListener("prompt-category-change", handleChange)
  }, [])

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        {prompts.length} prompt
        {prompts.length !== 1 ? "s" : ""}
        {activeCategory !== "all" && (
          <span>
            {" "}in{" "}
            {PROMPT_CATEGORIES.find((c) => c.key === activeCategory)?.label ??
              activeCategory}
          </span>
        )}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} locale={locale} />
        ))}
      </div>
    </div>
  )
}

function PromptCard({
  prompt,
  locale,
}: {
  prompt: PromptItem
  locale: string
}) {
  return (
    <article
      className="border rounded-xl p-5 space-y-3
                 hover:border-primary/30
                 transition-colors flex flex-col
                 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-1 flex-1 min-w-0">
          <p className="font-semibold text-sm leading-snug">{prompt.title}</p>
          <span className="inline-block text-xs bg-muted px-2 py-0.5 rounded-full">
            {prompt.style}
          </span>
        </div>
      </div>

      {/* Prompt text */}
      <p
        className="text-xs text-muted-foreground
                   leading-relaxed line-clamp-4 flex-1
                   font-mono bg-muted/40 rounded-lg
                   px-3 py-2"
      >
        {prompt.prompt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {prompt.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-muted-foreground">
            #{tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        <CopyButton
          text={prompt.prompt}
          className={[
            "flex-1 text-xs border rounded-lg",
            "px-3 py-2 font-medium",
            "hover:bg-primary hover:text-primary-foreground",
            "hover:border-primary",
          ].join(" ")}
        />
        <a
          href={`/${locale}/ai-image-effects/` + prompt.toolSlug}
          className="flex-1 text-center text-xs border
                     rounded-lg px-3 py-2 font-medium
                     hover:bg-muted transition-colors"
        >
          Try it →
        </a>
      </div>

      {/* Blog link */}
      {prompt.blogSlug && (
        <a
          href={`/${locale}/blog/${prompt.blogSlug}`}
          className="text-xs text-primary underline
                     underline-offset-2 hover:no-underline"
        >
          Read the full guide →
        </a>
      )}
    </article>
  )
}
