import { ClerkProvider } from "@clerk/nextjs"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { SiteHeader } from "@/components/SiteHeader"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "next-stair — AI Image Generator",
  description: "Create stunning images with AI",
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <ClerkProvider>
      <NextIntlClientProvider>
        <SiteHeader />
        <main>{children}</main>
      </NextIntlClientProvider>
    </ClerkProvider>
  )
}
