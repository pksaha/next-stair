import { db } from "@/db"
import { toolConfigs } from "@/db/schema"
import { eq } from "drizzle-orm"

/**
 * Get all published tools.
 * Used by generateStaticParams and the tools grid on the home page.
 */
export async function getAllPublishedTools() {
  return db
    .select()
    .from(toolConfigs)
    .where(eq(toolConfigs.isPublished, true))
    .orderBy(toolConfigs.sortOrder)
}

/**
 * Get a single tool by its slug.
 * Returns null if not found or not published.
 */
export async function getToolBySlug(slug: string) {
  const [tool] = await db
    .select()
    .from(toolConfigs)
    .where(eq(toolConfigs.slug, slug))
    .limit(1)

  return tool ?? null
}

/**
 * Get all tool slugs for generateStaticParams.
 * Returns only slugs — lightweight query.
 */
export async function getAllToolSlugs() {
  const tools = await db
    .select({ slug: toolConfigs.slug })
    .from(toolConfigs)
    .where(eq(toolConfigs.isPublished, true))

  return tools.map((t) => t.slug)
}
