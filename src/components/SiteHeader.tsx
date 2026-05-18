"use client"
import { useEffect, useState } from "react"
import { useAuth } from "@clerk/nextjs"
import {
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { Link } from "@/i18n/navigation"
import { LanguageSwitcher } from "./LanguageSwitcher"

export function SiteHeader() {
  const { userId } = useAuth()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "sticky top-0 z-50 flex justify-between",
        "items-center px-6 py-4 transition-all duration-300",
        scrolled
          ? "border-b bg-background/95 backdrop-blur-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <Link href="/" className="font-bold text-xl">
        next-stair
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-sm">
        <Link
          href="/ai-image-effects"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          AI Tools
        </Link>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/prompts"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Prompts
        </Link>
        <Link
          href="/pricing"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Pricing
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        {!userId ? (
          <>
            <SignInButton />
            <SignUpButton>
              <button
                className="bg-primary text-primary-foreground
                           rounded-lg px-4 py-2 text-sm
                           font-medium hover:bg-primary/90
                           transition-colors"
              >
                Get started
              </button>
            </SignUpButton>
          </>
        ) : (
          <UserButton />
        )}
      </div>
    </header>
  )
}
