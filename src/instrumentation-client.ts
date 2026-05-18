import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  // Only send errors in production — silence in dev
  enabled: process.env.NODE_ENV === "production",
  // Sample 10% of transactions for performance tracing
  // (keeps quota usage low on the free tier)
  tracesSampleRate: 0.1,
  // Capture session replays only on errors
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0,
  // Don't show debug output in production
  debug: false,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: false,
    }),
  ],
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
