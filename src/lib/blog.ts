import { db } from "@/db"
import { blogPosts } from "@/db/schema"
import type {
  BlogPost,
  BlogPostTranslation,
} from "@/db/schema"
import { eq, desc, and } from "drizzle-orm"
import { routing } from "@/i18n/routing"
import type { Locale } from "@/i18n/routing"

// ── Translation resolver ───────────────────────────────────
// Returns locale-specific content if available,
// falls back to English base content if not.
export function resolvePostLocale(
  post: BlogPost,
  locale: string
): {
  title: string
  excerpt: string
  content: string
  seoTitle: string
  seoDescription: string
} {
  if (locale === "en") {
    return {
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      seoTitle: post.seoTitle ?? post.title,
      seoDescription: post.seoDescription ?? post.excerpt,
    }
  }

  const translations = post.translations as
    | Record<string, BlogPostTranslation>
    | null
    | undefined

  const t = translations?.[locale]

  return {
    title: t?.title ?? post.title,
    excerpt: t?.excerpt ?? post.excerpt,
    content: t?.content ?? post.content,
    seoTitle:
      t?.seoTitle ?? post.seoTitle ?? post.title,
    seoDescription:
      t?.seoDescription ??
      post.seoDescription ??
      post.excerpt,
  }
}

// ── Queries ────────────────────────────────────────────────
export async function getAllPublishedPosts() {
  return db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.isPublished, true))
    .orderBy(desc(blogPosts.publishedAt))
}

export async function getPostBySlug(slug: string) {
  const [post] = await db
    .select()
    .from(blogPosts)
    .where(
      and(
        eq(blogPosts.slug, slug),
        eq(blogPosts.isPublished, true)
      )
    )
    .limit(1)
  return post ?? null
}

export async function getAllPostSlugs() {
  const posts = await db
    .select({ slug: blogPosts.slug })
    .from(blogPosts)
    .where(eq(blogPosts.isPublished, true))
  return posts.map((p) => p.slug)
}

export async function getPostsByCategory(
  category: string
) {
  return db
    .select()
    .from(blogPosts)
    .where(
      and(
        eq(blogPosts.category, category),
        eq(blogPosts.isPublished, true)
      )
    )
    .orderBy(desc(blogPosts.publishedAt))
}

// ── Related posts for sidebar ──────────────────────────────
// Returns up to 3 other posts in the same category
export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
) {
  const all = await getPostsByCategory(category)
  return all
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit)
}

// ── Reading time calculator ────────────────────────────────
// 200 words per minute average reading speed
export function calculateReadingTime(content: string): number {
  const wordCount = content
    .replace(/[#*`>[\]-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / 200))
}

// Re-export for convenience — callers can get all locales
// without importing routing directly
export { routing }
export type { Locale }
