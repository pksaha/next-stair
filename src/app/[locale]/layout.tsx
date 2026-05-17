import { ClerkProvider, SignInButton, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "next-stair — AI Image Generator",
  description: "Create stunning images with AI",
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

  const { userId } = await auth()

  return (
    <ClerkProvider>
      <NextIntlClientProvider>
        <header className="flex justify-between items-center px-6 py-4 border-b">
          <span className="font-bold text-lg">next-stair</span>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            {!userId ? <SignInButton /> : <UserButton />}
          </div>
        </header>
        {children}
      </NextIntlClientProvider>
    </ClerkProvider>
  )
}
