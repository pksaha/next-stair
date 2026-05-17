import { sql } from "drizzle-orm"
import {
  pgTable,
  text,
  integer,
  boolean,
  timestamp,
  uuid,
  jsonb,
} from "drizzle-orm/pg-core"

// ─── users ───────────────────────────────────────────────
// Mirrors Clerk user data. clerk_id is the foreign key
// linking our DB to Clerk's user system.
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: text("clerk_id").notNull().unique(),
  email: text("email").notNull(),
  name: text("name"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

// ─── credits ─────────────────────────────────────────────
// Tracks how many generation credits each user has.
// Every image generation costs credits.
export const credits = pgTable("credits", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  balance: integer("balance").notNull().default(10),
  lifetimeEarned: integer("lifetime_earned").notNull().default(10),
  lifetimeUsed: integer("lifetime_used").notNull().default(0),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

// ─── generations ─────────────────────────────────────────
// Every image a user generates is stored here.
// tool_slug links to tool_configs.slug.
export const generations = pgTable("generations", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  toolSlug: text("tool_slug").notNull(),
  prompt: text("prompt").notNull(),
  outputUrl: text("output_url"),
  inputImageUrl: text("input_image_url"),
  model: text("model").notNull().default("gpt-image-1"),
  aspectRatio: text("aspect_ratio").notNull().default("1:1"),
  status: text("status").notNull().default("pending"),
  creditsUsed: integer("credits_used").notNull().default(1),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

// ─── tool_configs ─────────────────────────────────────────
// Every AI effect page (/ai-image-effects/[slug]) is driven
// by a row in this table. Adding a new tool = one new row.
export const toolConfigs = pgTable("tool_configs", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull().default("ai-effects"),
  promptTemplate: text("prompt_template").notNull(),
  exampleOutputUrls: text("example_output_urls").array(),
  featureBullets: text("feature_bullets").array(),
  faqItems: jsonb("faq_items"),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  creditsRequired: integer("credits_required").notNull().default(1),
  requiresImageUpload: boolean("requires_image_upload")
    .notNull()
    .default(false),
  isPublished: boolean("is_published").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

// ─── subscriptions ────────────────────────────────────────
export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  plan: text("plan").notNull().default("free"),
  status: text("status").notNull().default("active"),
  paddleCustomerId: text("paddle_customer_id"),
  paddleSubscriptionId: text("paddle_subscription_id").unique(),
  paddleTransactionId: text("paddle_transaction_id"),
  currentPeriodEnd: timestamp("current_period_end"),
  cancelAtPeriodEnd: boolean("cancel_at_period_end")
    .notNull()
    .default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

// ─── blog_posts ───────────────────────────────────────────
// One row per article. All 11 language versions stored
// in the translations JSONB column. Base content is English.
export const blogPosts = pgTable("blog_posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  // URL slug — same across all locales
  // e.g. "12-anime-portrait-prompts"
  slug: text("slug").notNull().unique(),

  // Base language content (English)
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),   // 150-160 chars
  content: text("content").notNull(),   // Markdown body

  // Metadata
  author: text("author").notNull().default("Editorial Team"),
  category: text("category").notNull(),
  tags: text("tags").array().notNull().default(sql`'{}'`),
  coverImageUrl: text("cover_image_url"),
  readingTimeMinutes: integer("reading_time_minutes")
    .notNull()
    .default(5),

  // SEO
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),

  // Internal linking — array of tool slugs this post
  // should link to (e.g. ["ai-headshot-generator"])
  relatedToolSlugs: text("related_tool_slugs")
    .array()
    .notNull()
    .default(sql`'{}'`),

  // Translations for other 10 locales.
  // Shape: { "bn": { title, excerpt, content }, "hi": {...} }
  // English is base — no entry needed here for "en"
  translations: jsonb("translations"),

  // Publishing
  isPublished: boolean("is_published")
    .notNull()
    .default(false),
  publishedAt: timestamp("published_at"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

// ─── TypeScript types ────────────────────────────────────
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
export type Credit = typeof credits.$inferSelect
export type Generation = typeof generations.$inferSelect
export type NewGeneration = typeof generations.$inferInsert
export type ToolConfig = typeof toolConfigs.$inferSelect
export type Subscription = typeof subscriptions.$inferSelect
export type NewSubscription = typeof subscriptions.$inferInsert
export type PlanTier = "free" | "pro" | "premium"
export type BlogPost = typeof blogPosts.$inferSelect
export type NewBlogPost = typeof blogPosts.$inferInsert
export type BlogPostTranslation = {
  title: string
  excerpt: string
  content: string
  seoTitle?: string
  seoDescription?: string
}
