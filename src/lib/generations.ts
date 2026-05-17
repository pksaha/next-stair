import { db } from "@/db"
import { generations } from "@/db/schema"
import {
  eq,
  desc,
  and,
  gte,
  lte,
  inArray,
  count,
  sql,
} from "drizzle-orm"

export type GenerationFilter = {
  toolSlug?: string
  dateFrom?: string   // ISO date string YYYY-MM-DD
  dateTo?: string
  status?: string
  page?: number
  limit?: number
}

const DEFAULT_LIMIT = 20

export async function getUserGenerations(
  userId: string,
  filter: GenerationFilter = {}
) {
  const {
    toolSlug,
    dateFrom,
    dateTo,
    status,
    page = 1,
    limit = DEFAULT_LIMIT,
  } = filter

  const offset = (page - 1) * limit

  const conditions = [eq(generations.userId, userId)]

  if (toolSlug) {
    conditions.push(eq(generations.toolSlug, toolSlug))
  }
  if (status) {
    conditions.push(eq(generations.status, status))
  }
  if (dateFrom) {
    conditions.push(gte(generations.createdAt, new Date(dateFrom)))
  }
  if (dateTo) {
    // Add 1 day so dateTo is inclusive
    const to = new Date(dateTo)
    to.setDate(to.getDate() + 1)
    conditions.push(lte(generations.createdAt, to))
  }

  const where = and(...conditions)

  const [rows, [{ total }]] = await Promise.all([
    db
      .select()
      .from(generations)
      .where(where)
      .orderBy(desc(generations.createdAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ total: count() })
      .from(generations)
      .where(where),
  ])

  return {
    rows,
    total: Number(total),
    page,
    limit,
    totalPages: Math.ceil(Number(total) / limit),
  }
}

export async function getGenerationById(id: string) {
  const [row] = await db
    .select()
    .from(generations)
    .where(eq(generations.id, id))
    .limit(1)
  return row ?? null
}

export async function getUserToolSlugs(
  userId: string
): Promise<string[]> {
  const rows = await db
    .selectDistinct({ toolSlug: generations.toolSlug })
    .from(generations)
    .where(eq(generations.userId, userId))
    .orderBy(generations.toolSlug)
  return rows.map((r) => r.toolSlug)
}

export async function getUserGenerationStats(userId: string) {
  const [result] = await db
    .select({
      total: count(),
      totalCreditsUsed: sql<number>`COALESCE(SUM(${generations.creditsUsed}), 0)`,
    })
    .from(generations)
    .where(eq(generations.userId, userId))

  return {
    total: Number(result?.total ?? 0),
    totalCreditsUsed: Number(result?.totalCreditsUsed ?? 0),
  }
}
