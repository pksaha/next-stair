import { getRequestConfig } from "next-intl/server"
import { hasLocale } from "next-intl"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale comes from the [locale] URL segment
  const requested = await requestLocale

  // Fall back to English if the locale is not in our list
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale, // REQUIRED in next-intl v4 — do not remove
    messages: (
      await import(`../../messages/${locale}.json`)
    ).default,
  }
})
