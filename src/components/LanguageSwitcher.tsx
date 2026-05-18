"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { useParams } from "next/navigation"
import { routing, localeNames, localeFlags, Locale } from "@/i18n/routing"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const currentLocale = params.locale as Locale

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = event.target.value as Locale
    router.push(pathname, { locale: newLocale })
  }

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-soft)",
        color: "var(--text-2)",
        borderRadius: "var(--radius-sm)",
        padding: "5px 8px",
        fontSize: "0.8125rem",
        cursor: "pointer",
        outline: "none",
      }}
      aria-label="Select language"
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {localeFlags[locale]} {localeNames[locale]}
        </option>
      ))}
    </select>
  )
}
