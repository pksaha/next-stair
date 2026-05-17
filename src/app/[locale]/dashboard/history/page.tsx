import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getUserByClerkId } from "@/lib/credits"
import {
  getUserGenerations,
  getUserToolSlugs,
} from "@/lib/generations"
import { HistoryTable } from "@/components/HistoryTable"

type Params = Promise<{ locale: string }>
type SearchParamsType = Promise<{
  page?: string
  tool?: string
  dateFrom?: string
  dateTo?: string
  status?: string
}>

export default async function HistoryPage({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParamsType
}) {
  const { locale } = await params
  const { page, tool, dateFrom, dateTo, status } =
    await searchParams
  const { userId: clerkId } = await auth()
  if (!clerkId) redirect(`/${locale}/sign-in`)

  const dbUser = await getUserByClerkId(clerkId)
  if (!dbUser) redirect(`/${locale}/sign-in`)

  const currentPage = Math.max(1, parseInt(page ?? "1"))

  const [{ rows, total, totalPages }, toolSlugs] =
    await Promise.all([
      getUserGenerations(dbUser.id, {
        toolSlug: tool,
        dateFrom,
        dateTo,
        status,
        page: currentPage,
        limit: 20,
      }),
      getUserToolSlugs(dbUser.id),
    ])

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Generation history
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {total} generation{total !== 1 ? "s" : ""} total
          </p>
        </div>
        <a
          href={`/${locale}/dashboard`}
          className="text-sm text-muted-foreground
                     hover:text-foreground transition-colors"
        >
          ← Dashboard
        </a>
      </div>

      <HistoryTable
        generations={rows}
        toolSlugs={toolSlugs}
        locale={locale}
        currentPage={currentPage}
        totalPages={totalPages}
        filters={{ tool, dateFrom, dateTo, status }}
      />

    </div>
  )
}
