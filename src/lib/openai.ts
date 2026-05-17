import OpenAI from "openai"
// This file is server-only — never import it in client
// components. The API key must never reach the browser.
if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set in .env.local")
}
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
// Model to use for all image generation in this project
export const IMAGE_MODEL = "gpt-image-1" as const
// Valid sizes for gpt-image-1
// Note: DALL-E 2 and DALL-E 3 are removed as of May 2026.
// Only GPT image models are supported.
export const IMAGE_SIZES = {
  square:    "1024x1024",
  landscape: "1536x1024",
  portrait:  "1024x1536",
} as const
export type AspectRatio = keyof typeof IMAGE_SIZES
export type ImageQuality = "low" | "medium" | "high"
