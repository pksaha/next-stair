export async function GET() {
  // This route intentionally throws an error to test
  // Sentry is receiving events. DELETE this file before
  // launching to production.
  throw new Error(
    "Sentry test error from next-stair — delete this route"
  )
}
