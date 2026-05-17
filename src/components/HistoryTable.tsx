"use client"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { deleteGeneration } from "@/app/actions/generations"
import type { Generation } from "@/db/schema"

interface Filters {
  tool?: string
  dateFrom?: string
  dateTo?: string
  status?: string
}

interface Props {
  generations: Generation[]
  toolSlugs: string[]
  locale: string
  currentPage: number
  totalPages: number
  filters: Filters
}

export function HistoryTable({
  generations,
  toolSlugs,
  locale,
  currentPage,
  totalPages,
  filters,
}: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [confirmDelete, setConfirmDelete] = useState<
    string | null
  >(null)

  function applyFilters(updates: Partial<Filters>) {
    const merged = { ...filters, ...updates }
    const params = new URLSearchParams()
    if (merged.tool) params.set("tool", merged.tool)
    if (merged.dateFrom) params.set("dateFrom", merged.dateFrom)
    if (merged.dateTo) params.set("dateTo", merged.dateTo)
    if (merged.status) params.set("status", merged.status)
    // Reset to page 1 on filter change
    router.push(`?${params.toString()}`)
  }

  function clearFilters() {
    router.push("?")
  }

  function buildPageUrl(page: number) {
    const params = new URLSearchParams()
    if (page > 1) params.set("page", String(page))
    if (filters.tool) params.set("tool", filters.tool)
    if (filters.dateFrom)
      params.set("dateFrom", filters.dateFrom)
    if (filters.dateTo) params.set("dateTo", filters.dateTo)
    if (filters.status) params.set("status", filters.status)
    return `?${params.toString()}`
  }

  async function handleDelete(id: string) {
    startTransition(async () => {
      await deleteGeneration(id)
      setConfirmDelete(null)
    })
  }

  function copyShareLink(id: string) {
    const url =
      `${window.location.origin}/${locale}/share/${id}`
    navigator.clipboard.writeText(url)
  }

  const hasActiveFilters =
    filters.tool || filters.dateFrom ||
    filters.dateTo || filters.status

  return (
    <div className="space-y-4">

      {/* Filters bar */}
      <div className="flex flex-wrap gap-3 items-end">

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">
            Tool
          </label>
          <select
            value={filters.tool ?? ""}
            onChange={(e) =>
              applyFilters({
                tool: e.target.value || undefined,
              })
            }
            className="border rounded-lg px-3 py-2 text-sm
                       bg-background min-w-40"
          >
            <option value="">All tools</option>
            {toolSlugs.map((slug) => (
              <option key={slug} value={slug}>
                {slug.replace(/-/g, " ")}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">
            From
          </label>
          <input
            type="date"
            value={filters.dateFrom ?? ""}
            onChange={(e) =>
              applyFilters({
                dateFrom: e.target.value || undefined,
              })
            }
            className="border rounded-lg px-3 py-2 text-sm
                       bg-background"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">
            To
          </label>
          <input
            type="date"
            value={filters.dateTo ?? ""}
            onChange={(e) =>
              applyFilters({
                dateTo: e.target.value || undefined,
              })
            }
            className="border rounded-lg px-3 py-2 text-sm
                       bg-background"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted-foreground">
            Status
          </label>
          <select
            value={filters.status ?? ""}
            onChange={(e) =>
              applyFilters({
                status: e.target.value || undefined,
              })
            }
            className="border rounded-lg px-3 py-2 text-sm
                       bg-background"
          >
            <option value="">All statuses</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm text-muted-foreground
                       underline self-end pb-2"
          >
            Clear filters
          </button>
        )}

      </div>

      {/* Table */}
      {generations.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground
                        text-sm">
          No generations match your filters.
        </div>
      ) : (
        <div className="border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-3
                               font-medium text-muted-foreground">
                  Image
                </th>
                <th className="text-left px-4 py-3
                               font-medium text-muted-foreground
                               hidden md:table-cell">
                  Prompt
                </th>
                <th className="text-left px-4 py-3
                               font-medium text-muted-foreground
                               hidden sm:table-cell">
                  Tool
                </th>
                <th className="text-left px-4 py-3
                               font-medium text-muted-foreground
                               hidden lg:table-cell">
                  Date
                </th>
                <th className="text-left px-4 py-3
                               font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {generations.map((gen) => (
                <tr
                  key={gen.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    {gen.outputUrl ? (
                      <img
                        src={gen.outputUrl}
                        alt={gen.prompt}
                        className="w-12 h-12 rounded-lg
                                   object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg
                                      bg-muted" />
                    )}
                  </td>
                  <td className="px-4 py-3 max-w-xs
                                 hidden md:table-cell">
                    <p className="line-clamp-2 text-xs
                                  text-muted-foreground">
                      {gen.prompt}
                    </p>
                  </td>
                  <td className="px-4 py-3
                                 hidden sm:table-cell">
                    <span className="text-xs bg-muted px-2
                                     py-1 rounded-full">
                      {gen.toolSlug.replace(/-/g, " ")}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs
                                 text-muted-foreground
                                 hidden lg:table-cell whitespace-nowrap">
                    {new Date(gen.createdAt)
                      .toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      {gen.outputUrl && (
                        <a
                          href={gen.outputUrl}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs border rounded
                                     px-2 py-1 hover:bg-muted
                                     transition-colors"
                        >
                          ↓
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => copyShareLink(gen.id)}
                        className="text-xs border rounded
                                   px-2 py-1 hover:bg-muted
                                   transition-colors"
                        title="Copy share link"
                      >
                        🔗
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setConfirmDelete(gen.id)
                        }
                        className="text-xs border border-destructive/30
                                   text-destructive rounded px-2 py-1
                                   hover:bg-destructive/10
                                   transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center
                        gap-2 pt-2">
          <a
            href={buildPageUrl(currentPage - 1)}
            className={[
              "border rounded-lg px-3 py-2 text-sm",
              currentPage <= 1
                ? "opacity-30 pointer-events-none"
                : "hover:bg-muted transition-colors",
            ].join(" ")}
          >
            ← Previous
          </a>
          <span className="text-sm text-muted-foreground">
            {currentPage} / {totalPages}
          </span>
          <a
            href={buildPageUrl(currentPage + 1)}
            className={[
              "border rounded-lg px-3 py-2 text-sm",
              currentPage >= totalPages
                ? "opacity-30 pointer-events-none"
                : "hover:bg-muted transition-colors",
            ].join(" ")}
          >
            Next →
          </a>
        </div>
      )}

      {/* Delete confirmation modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/50 z-50
                        flex items-center justify-center p-4">
          <div className="bg-background border rounded-xl
                          p-6 space-y-4 max-w-sm w-full">
            <h3 className="font-semibold">Delete generation?</h3>
            <p className="text-sm text-muted-foreground">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setConfirmDelete(null)}
                className="flex-1 border rounded-lg px-4 py-2
                           text-sm hover:bg-muted"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(confirmDelete)}
                disabled={isPending}
                className="flex-1 bg-destructive text-white
                           rounded-lg px-4 py-2 text-sm
                           disabled:opacity-50 hover:bg-destructive/90"
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
