import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"
import { getAllToolSlugs } from "@/lib/tools"
import { getAllPostSlugs } from "@/lib/blog"

export default async function sitemap():
  Promise<MetadataRoute.Sitemap> {
  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ??
    "https://yourdomain.com"

  const toolSlugs = await getAllToolSlugs()
  const postSlugs = await getAllPostSlugs()
  const locales = routing.locales

  const entries: MetadataRoute.Sitemap = []

  // Static pages per locale
  const staticPaths = ["", "/blog", "/pricing",
    "/ai-image-effects"]
  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${appUrl}/${locale}${path}`,
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : 0.8,
      })
    }
  }

  // Tool pages — 20 × 11 = 220 URLs
  for (const locale of locales) {
    for (const slug of toolSlugs) {
      entries.push({
        url: `${appUrl}/${locale}/ai-image-effects/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  }

  // Blog posts — N × 11 URLs
  for (const locale of locales) {
    for (const slug of postSlugs) {
      entries.push({
        url: `${appUrl}/${locale}/blog/${slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
      })
    }
  }

  return entries
}
