import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { users, credits } from "../src/db/schema"
import { eq } from "drizzle-orm"
import * as dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle({ client: sql })

const CLERK_ID = "user_3DocL78Iwi8suX5CUmATGVI4taG"
const EMAIL    = "pijushmbstu@gmail.com"

async function seedCredits() {
  // ── 1. Upsert user row ──────────────────────────────────
  let [user] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, CLERK_ID))
    .limit(1)

  if (!user) {
    const [inserted] = await db
      .insert(users)
      .values({ clerkId: CLERK_ID, email: EMAIL, name: "Pijush" })
      .returning()
    user = inserted
    console.log(`Created user row: ${user.id}`)
  } else {
    console.log(`User row already exists: ${user.id}`)
  }

  // ── 2. Upsert credits row ───────────────────────────────
  const [existing] = await db
    .select()
    .from(credits)
    .where(eq(credits.userId, user.id))
    .limit(1)

  if (!existing) {
    await db.insert(credits).values({
      userId:        user.id,
      balance:       10,
      lifetimeEarned: 10,
      lifetimeUsed:  0,
    })
    console.log(`Added 10 credits for ${EMAIL}`)
  } else {
    console.log(`Credits already exist for ${EMAIL}: balance = ${existing.balance}`)
  }

  console.log("Done")
  process.exit(0)
}

seedCredits().catch(console.error)
