import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

// Only initialise if credentials are present.
// Falls back to no-op in development without Upstash.
function createRateLimiter() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    console.warn(
      "Rate limiting disabled — UPSTASH credentials not set"
    )
    return null
  }

  const redis = new Redis({ url, token })

  return {
    // /api/generate — 20 requests per hour per IP
    // Covers Free users (1 credit/month) and prevents abuse
    generate: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(20, "1 h"),
      analytics: true,
      prefix: "next-stair:generate",
    }),

    // General API — 100 requests per minute per IP
    api: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(100, "1 m"),
      analytics: true,
      prefix: "next-stair:api",
    }),
  }
}

export const rateLimiters = createRateLimiter()

/**
 * Check rate limit for a given limiter and IP.
 * Returns null (allowed) if rate limiting is not configured.
 * Returns a 429 Response if the limit is exceeded.
 * Returns null (allowed) if the limit is not exceeded.
 */
export async function checkRateLimit(
  limiterKey: "generate" | "api",
  ip: string
): Promise<Response | null> {
  if (!rateLimiters) return null  // dev fallback

  const limiter = rateLimiters[limiterKey]
  const { success, limit, remaining, reset } =
    await limiter.limit(ip)

  if (!success) {
    const resetIn = Math.ceil((reset - Date.now()) / 1000)
    return new Response(
      JSON.stringify({
        error:
          "Too many requests. Please wait before generating again.",
        retryAfter: resetIn,
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": reset.toString(),
          "Retry-After": resetIn.toString(),
        },
      }
    )
  }

  return null  // allowed
}
