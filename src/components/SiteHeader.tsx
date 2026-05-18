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
    window.addEventListener("scroll", onScroll,
      { passive: true })
    return () =>
      window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      style={{
        background: scrolled
          ? "rgba(8,8,8,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(212,160,23,0.12)"
          : "none",
      }}
      className="sticky top-0 z-50 transition-all
                 duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex
                      items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5
                     no-underline"
        >
          <div
            style={{
              width: 32, height: 32,
              background: "linear-gradient(135deg, #F5C842, #D4A017)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 12px rgba(212,160,23,0.4)",
              fontSize: 16,
            }}
          >
            ✦
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.125rem",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            next-stair
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {[
            { label: "AI Tools", href: "/ai-image-effects" },
            { label: "Blog",     href: "/blog" },
            { label: "Prompts",  href: "/prompts" },
            { label: "Pricing",  href: "/pricing" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                transition: "color 0.15s ease",
                textDecoration: "none",
              }}
              className="hover:!text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          {!userId ? (
            <>
              <SignInButton>
                <button className="btn-outline !py-2 !px-4
                                   !text-sm">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="btn-gold !py-2 !px-5
                                   !text-sm">
                  Get started
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>

      </div>
    </header>
  )
}
