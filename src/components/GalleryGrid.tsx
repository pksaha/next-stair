"use client"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import {
  deleteGeneration,
  bulkDeleteGenerations,
} from "@/app/actions/generations"
import type { Generation } from "@/db/schema"

interface Props {
  generations: Generation[]
  locale: string
  currentPage: number
  totalPages: number
  toolFilter?: string
}

export function GalleryGrid({
  generations,
  locale,
  currentPage,
  totalPages,
  toolFilter,
}: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [selected, setSelected] = useState<Set<string>>(
    new Set()
  )
  const [bulkMode, setBulkMode] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<
    string | null
  >(null)

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function selectAll() {
    setSelected(new Set(generations.map((g) => g.id)))
  }

  function clearSelection() {
    setSelected(new Set())
  }

  async function handleSingleDelete(id: string) {
    startTransition(async () => {
      await deleteGeneration(id)
      setConfirmDelete(null)
    })
  }

  async function handleBulkDelete() {
    if (selected.size === 0) return
    startTransition(async () => {
      await bulkDeleteGenerations(Array.from(selected))
      setSelected(new Set())
      setBulkMode(false)
    })
  }

  function copyShareLink(id: string) {
    const url =
      `${window.location.origin}/${locale}/share/${id}`
    navigator.clipboard.writeText(url)
  }

  function buildPageUrl(page: number) {
    const params = new URLSearchParams()
    if (page > 1) params.set("page", String(page))
    if (toolFilter) params.set("tool", toolFilter)
    const qs = params.toString()
    return qs ? `?${qs}` : "?"
  }

  if (generations.length === 0) {
    return (
      <div className="text-center py-20 space-y-3">
        <p className="text-4xl">🎨</p>
        <p className="text-muted-foreground">
          No images yet.
        </p>
        <a
          href={`/${locale}/dashboard`}
          className="text-primary underline text-sm"
        >
          Generate your first image →
        </a>
      </div>
    )
  }

  return (
    <div className="space-y-4">

      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap">
        <button
          type="button"
          onClick={() => {
            setBulkMode(!bulkMode)
            clearSelection()
          }}
          className="text-sm border rounded-lg px-3 py-1.5 transition-colors"
          style={bulkMode ? {
            background: "var(--gold)",
            color: "#000",
            border: "none",
            fontWeight: 700,
          } : undefined}
        >
          {bulkMode ? "Cancel selection" : "Select images"}
        </button>

        {bulkMode && (
          <>
            <button
              type="button"
              onClick={selectAll}
              className="text-sm text-primary underline"
            >
              Select all ({generations.length})
            </button>
            {selected.size > 0 && (
              <>
                <span className="text-sm text-muted-foreground">
                  {selected.size} selected
                </span>
                <button
                  type="button"
                  onClick={handleBulkDelete}
                  disabled={isPending}
                  className="text-sm border border-destructive
                             text-destructive rounded-lg px-3 py-1.5
                             hover:bg-destructive/10 transition-colors
                             disabled:opacity-50"
                >
                  {isPending
                    ? "Deleting..."
                    : `Delete ${selected.size}`}
                </button>
              </>
            )}
          </>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3
                      lg:grid-cols-4 gap-3">
        {generations.map((gen) => (
          <div
            key={gen.id}
            className={[
              "group relative rounded-xl overflow-hidden",
              "border bg-muted aspect-square",
              bulkMode && selected.has(gen.id)
                ? "ring-2 ring-primary"
                : "",
            ].join(" ")}
          >
            {gen.outputUrl && (
              <img
                src={gen.outputUrl}
                alt={gen.prompt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            )}

            {/* Select checkbox in bulk mode */}
            {bulkMode && (
              <button
                type="button"
                onClick={() => toggleSelect(gen.id)}
                className="absolute inset-0 z-10"
                aria-label={
                  selected.has(gen.id)
                    ? "Deselect image"
                    : "Select image"
                }
              >
                <div className={[
                  "absolute top-2 left-2 w-5 h-5 rounded",
                  "border-2 border-white flex items-center",
                  "justify-center",
                  selected.has(gen.id)
                    ? "bg-primary border-primary"
                    : "bg-black/30",
                ].join(" ")}>
                  {selected.has(gen.id) && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
              </button>
            )}

            {/* Hover overlay — only when not in bulk mode */}
            {!bulkMode && (
              <div className="absolute inset-0 bg-black/60
                              opacity-0 group-hover:opacity-100
                              transition-opacity flex flex-col
                              justify-end p-3 gap-2">
                <p className="text-white text-xs line-clamp-2
                              leading-relaxed">
                  {gen.prompt}
                </p>
                <div className="flex gap-2">
                  <a
                    href={gen.outputUrl!}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white
                               text-black rounded-md px-2 py-1.5
                               text-xs font-medium hover:bg-white/90"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={() => copyShareLink(gen.id)}
                    className="flex-1 text-center border border-white
                               text-white rounded-md px-2 py-1.5
                               text-xs font-medium hover:bg-white/10"
                  >
                    Copy link
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmDelete(gen.id)}
                    className="border border-red-400 text-red-400
                               rounded-md px-2 py-1.5 text-xs
                               hover:bg-red-400/10"
                    aria-label="Delete image"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center
                        gap-2 pt-4">
          <a
            href={buildPageUrl(currentPage - 1)}
            className={[
              "border rounded-lg px-3 py-2 text-sm",
              "transition-colors",
              currentPage <= 1
                ? "opacity-30 pointer-events-none"
                : "hover:bg-muted",
            ].join(" ")}
            aria-disabled={currentPage <= 1}
          >
            ← Previous
          </a>
          <span className="text-sm text-muted-foreground px-2">
            Page {currentPage} of {totalPages}
          </span>
          <a
            href={buildPageUrl(currentPage + 1)}
            className={[
              "border rounded-lg px-3 py-2 text-sm",
              "transition-colors",
              currentPage >= totalPages
                ? "opacity-30 pointer-events-none"
                : "hover:bg-muted",
            ].join(" ")}
            aria-disabled={currentPage >= totalPages}
          >
            Next →
          </a>
        </div>
      )}

      {/* Single delete confirmation modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/50 z-50
                        flex items-center justify-center p-4">
          <div
            className="rounded-xl p-6 max-w-sm w-full"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <h3 className="font-semibold">Delete image?</h3>
            <p className="text-sm text-muted-foreground">
              This cannot be undone. The image will be
              permanently deleted.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setConfirmDelete(null)}
                className="flex-1 border rounded-lg px-4 py-2
                           text-sm hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleSingleDelete(confirmDelete)}
                disabled={isPending}
                className="btn-gold flex-1"
                style={isPending ? { opacity: 0.5 } : undefined}
              >
                {isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
