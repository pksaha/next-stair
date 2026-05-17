import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import createIntlMiddleware from "next-intl/middleware"
import { NextResponse } from "next/server"
import { routing } from "./i18n/routing"

const intlMiddleware = createIntlMiddleware(routing)

const isProtectedRoute = createRouteMatcher([
  "/:locale/dashboard(.*)",
  "/:locale/generate(.*)",
  "/dashboard(.*)",
  "/generate(.*)",
])

const isApiRoute = createRouteMatcher(["/api/(.*)", "/trpc/(.*)"])

export const proxy = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
  // API routes need Clerk auth but not locale routing
  if (isApiRoute(req)) return NextResponse.next()
  return intlMiddleware(req)
})

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
