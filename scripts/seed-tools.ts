import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { toolConfigs } from "../src/db/schema"
import * as dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle({ client: sql })

const tools = [
  {
    slug: "ai-headshot-generator",
    name: "AI Headshot Generator",
    description:
      "Transform any photo into a professional headshot using AI. " +
      "Perfect for LinkedIn, resumes, and corporate profiles.",
    category: "ai-effects",
    promptTemplate:
      "Professional corporate headshot portrait of a person, " +
      "studio lighting, clean background, sharp focus, " +
      "business attire, photorealistic, high resolution",
    exampleOutputUrls: [],
    featureBullets: [
      "Turn any selfie into a professional headshot in seconds",
      "Studio-quality lighting added automatically",
      "Clean backgrounds: white, grey, or office settings",
      "Perfect for LinkedIn, CVs, and company directories",
      "Works with any photo — no professional camera needed",
    ],
    faqItems: [
      {
        q: "What type of photo should I upload?",
        a:
          "Any clear photo showing your face works well. " +
          "Front-facing photos with good lighting give the best results.",
      },
      {
        q: "Can I choose the background colour?",
        a:
          "Yes — describe your preferred background in the prompt, " +
          "such as 'white background' or 'blurred office background'.",
      },
      {
        q: "How many credits does this use?",
        a: "One generation uses 1 credit regardless of quality setting.",
      },
      {
        q: "Is this suitable for professional use?",
        a:
          "Yes. The output is a high-resolution PNG suitable for " +
          "LinkedIn, company websites, and printed materials.",
      },
    ],
    seoTitle:
      "AI Headshot Generator — Professional Photos in Seconds | next-stair",
    seoDescription:
      "Generate studio-quality professional headshots from any photo " +
      "using AI. Perfect for LinkedIn, CVs, and corporate profiles. " +
      "Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 1,
  },
  {
    slug: "ai-avatar-generator",
    name: "AI Avatar Generator",
    description:
      "Create unique AI avatars for social media, gaming profiles, " +
      "and digital identities. Dozens of styles available.",
    category: "ai-effects",
    promptTemplate:
      "Digital avatar portrait, stylized illustration, " +
      "vibrant colors, clean design, social media profile picture style, " +
      "centered composition, high quality",
    exampleOutputUrls: [],
    featureBullets: [
      "Create avatars in dozens of artistic styles",
      "Perfect for Twitter, Discord, Twitch, and gaming profiles",
      "Upload a photo to base the avatar on your face",
      "Or generate entirely from a text description",
      "High-resolution output ready for any platform",
    ],
    faqItems: [
      {
        q: "Do I need to upload a photo?",
        a:
          "No — you can describe your avatar in text and generate " +
          "from scratch. Or upload a photo to base it on your appearance.",
      },
      {
        q: "What styles can I generate?",
        a:
          "Anime, pixel art, oil painting, cartoon, cyberpunk, " +
          "fantasy, and more — just describe the style in your prompt.",
      },
      {
        q: "What size is the output?",
        a:
          "1024×1024 pixels for square avatars, which is the " +
          "recommended size for most social platforms.",
      },
    ],
    seoTitle:
      "AI Avatar Generator — Custom Profile Pictures with AI | next-stair",
    seoDescription:
      "Generate unique AI avatars for any style — anime, pixel art, " +
      "cartoon, and more. Upload a photo or describe from scratch. " +
      "Free to try.",
    creditsRequired: 1,
    requiresImageUpload: false,
    isPublished: true,
    sortOrder: 2,
  },
  {
    slug: "pixar-ai-generator",
    name: "Pixar AI Generator",
    description:
      "Transform any photo into a Pixar-style 3D animated character. " +
      "Bring your family, pets, and friends into the Pixar universe.",
    category: "ai-effects",
    promptTemplate:
      "Pixar animated movie character style, 3D CGI rendering, " +
      "warm lighting, expressive features, smooth textures, " +
      "cinematic quality, Disney Pixar aesthetic",
    exampleOutputUrls: [],
    featureBullets: [
      "Turn any photo into a Pixar-style 3D character",
      "Works for people, pets, and even objects",
      "Perfect for family portraits and social media",
      "Captures the warm, expressive Pixar art style",
      "High-resolution output suitable for printing",
    ],
    faqItems: [
      {
        q: "Does this work for pets?",
        a:
          "Yes — upload a photo of your pet and describe it in the " +
          "prompt. Dogs, cats, and other animals work great.",
      },
      {
        q: "Can I use this for a group photo?",
        a:
          "For best results, generate one character at a time. " +
          "Group photos can work but individual photos give sharper results.",
      },
      {
        q: "Is this affiliated with Pixar or Disney?",
        a:
          "No — this tool uses AI to replicate the visual style. " +
          "It is not affiliated with Pixar Animation Studios or Disney.",
      },
    ],
    seoTitle:
      "Pixar AI Generator — Turn Photos into Pixar Characters | next-stair",
    seoDescription:
      "Transform any photo into a Pixar-style 3D animated character " +
      "with AI. Works for people and pets. Free to try.",
    creditsRequired: 1,
    requiresImageUpload: true,
    isPublished: true,
    sortOrder: 3,
  },
]

async function seedTools() {
  console.log(`Seeding ${tools.length} tools...`)

  for (const tool of tools) {
    await db
      .insert(toolConfigs)
      .values(tool)
      .onConflictDoNothing()

    console.log(`✓ ${tool.name} (${tool.slug})`)
  }

  console.log("Done. Run the dev server to see the pages.")
  process.exit(0)
}

seedTools().catch((err) => {
  console.error(err)
  process.exit(1)
})
