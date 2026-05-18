"use client"

import { useSearchParams } from "next/navigation"
import { PROMPT_CATEGORIES, type PromptCategory } from "@/lib/prompts-data"

interface Props {
  activeCategory: string
}

export function PromptFilters({ activeCategory }: Props) {
  const searchParams = useSearchParams()

  function handleCategoryClick(key: string) {
    // Use window.history.pushState for shallow URL update.
    // This updates the URL bar without triggering a
    // server component re-render, giving instant tab
    // switching. The page server component reads the
    // initial searchParams on first render only.
    const params = new URLSearchParams(searchParams.toString())
    if (key === "all") {
      params.delete("category")
    } else {
      params.set("category", key)
    }
    const qs = params.toString()
    window.history.pushState(
      null,
      "",
      qs ? `?${qs}` : window.location.pathname
    )
    // Force a client-side re-render by dispatching a
    // custom event that the PromptGrid listens to
    window.dispatchEvent(
      new CustomEvent("prompt-category-change", {
        detail: { category: key },
      })
    )
  }

  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter prompts by category"
    >
      <button
        type="button"
        role="tab"
        aria-selected={activeCategory === "all"}
        onClick={() => handleCategoryClick("all")}
        className={[
          "px-4 py-2 rounded-full text-sm font-medium",
          "transition-colors border",
          activeCategory === "all"
            ? "bg-primary text-primary-foreground border-primary"
            : "border-border hover:border-primary/50 hover:bg-muted/50",
        ].join(" ")}
      >
        All prompts
      </button>

      {PROMPT_CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat.key}
          onClick={() => handleCategoryClick(cat.key)}
          className={[
            "px-4 py-2 rounded-full text-sm font-medium",
            "transition-colors border",
            activeCategory === cat.key
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border hover:border-primary/50 hover:bg-muted/50",
          ].join(" ")}
        >
          {cat.emoji} {cat.label}
        </button>
      ))}
    </div>
  )
}
