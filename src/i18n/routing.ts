import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: [
    "en",
    "bn",
    "hi",
    "zh",
    "ru",
    "de",
    "es",
    "fr",
    "pt",
    "ko",
    "ja",
  ],
  defaultLocale: "en",
  localePrefix: "always",
})

export type Locale = (typeof routing.locales)[number]

export const localeNames: Record<Locale, string> = {
  en: "English",
  bn: "বাংলা",
  hi: "हिन्दी",
  zh: "中文",
  ru: "Русский",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  pt: "Português",
  ko: "한국어",
  ja: "日本語",
}

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  bn: "🇧🇩",
  hi: "🇮🇳",
  zh: "🇨🇳",
  ru: "🇷🇺",
  de: "🇩🇪",
  es: "🇪🇸",
  fr: "🇫🇷",
  pt: "🇧🇷",
  ko: "🇰🇷",
  ja: "🇯🇵",
}
