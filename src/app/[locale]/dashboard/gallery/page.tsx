import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getUserByClerkId } from "@/lib/credits"
import { getUserGenerations } from "@/lib/generations"
import { GalleryGrid } from "@/components/GalleryGrid"

type Params = Promise<{ locale: string }>
type SearchParamsType = Promise<{
  page?: string
  tool?: string
}>

export default async function GalleryPage({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParamsType
}) {
  const { locale } = await params
  const { page, tool } = await searchParams
  const { userId: clerkId } = await auth()
  if (!clerkId) redirect(`/${locale}/sign-in`)

  const dbUser = await getUserByClerkId(clerkId)
  if (!dbUser) redirect(`/${locale}/sign-in`)

  const currentPage = Math.max(1, parseInt(page ?? "1"))

  const { rows, total, totalPages } =
    await getUserGenerations(dbUser.id, {
      toolSlug: tool,
      page: currentPage,
      limit: 24,   // 4 columns × 6 rows
    })

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My gallery</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {total} image{total !== 1 ? "s" : ""} generated
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

      <GalleryGrid
        generations={rows}
        locale={locale}
        currentPage={currentPage}
        totalPages={totalPages}
        toolFilter={tool}
      />

    </div>
  )
}
