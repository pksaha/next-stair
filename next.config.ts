import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
import { withSentryConfig } from "@sentry/nextjs"

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

// CSP directives.
// Update YOUR_DOMAIN with your actual domain when deploying.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'
    https://cdn.paddle.com
    https://*.clerk.accounts.dev
    https://challenges.cloudflare.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:
    https://res.cloudinary.com
    https://img.clerk.com;
  font-src 'self';
  connect-src 'self'
    https://api.clerk.com
    https://*.clerk.accounts.dev
    https://checkout.paddle.com
    https://cdn.paddle.com
    https://o*.ingest.sentry.io;
  frame-src
    https://checkout.paddle.com
    https://*.clerk.accounts.dev
    https://challenges.cloudflare.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\n/g, " ").replace(/\s+/g, " ").trim()

const securityHeaders = [
  // Start in report-only mode — change to
  // Content-Security-Policy after validating in production
  {
    key: "Content-Security-Policy-Report-Only",
    value: ContentSecurityPolicy,
  },
  // Prevent clickjacking
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Prevent MIME type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Control referrer information
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Restrict browser feature access
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), " +
      "browsing-topics=()",
  },
  // Force HTTPS for 2 years (add only after you have HTTPS)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent DNS prefetch leaking
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
}

export default withSentryConfig(
  withNextIntl(nextConfig),
  {
    org: process.env.SENTRY_ORG ?? "",
    project: process.env.SENTRY_PROJECT ?? "",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    tunnelRoute: "/sentry-tunnel",
    silent: !process.env.CI,
  }
)
