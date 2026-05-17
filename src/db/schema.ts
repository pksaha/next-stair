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
