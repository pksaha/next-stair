import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { ImageGenerator } from "@/components/ImageGenerator"
import { getCreditBalance, getUserByClerkId } from "@/lib/credits"
import { getSubscription, getUserPlan } from "@/lib/subscriptions"
import { getPlanConfig } from "@/lib/plans"
import { getUserGenerationStats } from "@/lib/generations"

type Params = Promise<{ locale: string }>

export default async function DashboardPage(
  { params }: { params: Params }
) {
  const { locale } = await params
  const { userId } = await auth()
  if (!userId) redirect("/sign-in")

  const user = await currentUser()
  const t = await getTranslations("dashboard")

  const dbUser = await getUserByClerkId(userId)
  const creditBalance = dbUser ? await getCreditBalance(dbUser.id) : 0
  const currentPlan = dbUser ? await getUserPlan(dbUser.id) : "free"
  const planConfig = getPlanConfig(currentPlan)
  const subscription = dbUser ? await getSubscription(dbUser.id) : null
  const stats = dbUser
    ? await getUserGenerationStats(dbUser.id)
    : { total: 0, totalCreditsUsed: 0 }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="heading-2" style={{ marginBottom: "4px" }}>
        {t("title")}
      </h1>
      <p className="body" style={{ marginBottom: "32px" }}>
        {t("welcome")},{" "}
        {user?.firstName ?? user?.emailAddresses[0]?.emailAddress}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* Credits */}
        <div className="card">
          <p className="caption" style={{ marginBottom: "4px" }}>
            {t("credits")}
          </p>
          <p style={{
            fontSize: "2.25rem", fontWeight: 700,
            background: "linear-gradient(135deg,#F5C842,#D4A017)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {creditBalance}
          </p>
          <p className="caption" style={{ marginTop: "4px" }}>
            of {planConfig.monthlyCredits} this month
          </p>
        </div>

        {/* Generated */}
        <a
          href={`/${locale}/dashboard/gallery`}
          className="card"
          style={{ cursor: "pointer", textDecoration: "none", display: "block" }}
        >
          <p className="caption" style={{ marginBottom: "4px" }}>
            {t("generated")}
          </p>
          <p style={{
            fontSize: "2.25rem", fontWeight: 700,
            background: "linear-gradient(135deg,#F5C842,#D4A017)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {stats.total}
          </p>
          <p style={{ color: "var(--gold)", fontSize: "0.8125rem", marginTop: "4px" }}>
            View gallery →
          </p>
        </a>

        {/* Credits used */}
        <div className="card">
          <p className="caption" style={{ marginBottom: "4px" }}>
            Credits used
          </p>
          <p style={{
            fontSize: "2.25rem", fontWeight: 700,
            background: "linear-gradient(135deg,#F5C842,#D4A017)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {stats.totalCreditsUsed}
          </p>
          <p className="caption" style={{ marginTop: "4px" }}>all time</p>
        </div>

        {/* Plan */}
        <div className="card">
          <p className="caption" style={{ marginBottom: "4px" }}>
            {t("plan")}
          </p>
          <p style={{
            fontSize: "2.25rem", fontWeight: 700,
            background: "linear-gradient(135deg,#F5C842,#D4A017)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {planConfig.name}
          </p>
          {subscription?.cancelAtPeriodEnd &&
            subscription.currentPeriodEnd && (
              <p className="caption" style={{ marginTop: "4px", color: "#F59E0B" }}>
                Cancels{" "}
                {subscription.currentPeriodEnd.toLocaleDateString()}
              </p>
            )}
          {currentPlan === "free" && (
            <a
              href={`/${locale}/pricing`}
              style={{
                color: "var(--gold)",
                fontSize: "0.8125rem",
                display: "block",
                marginTop: "8px",
              }}
            >
              Upgrade →
            </a>
          )}
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginTop: "24px" }}>
        <a
          href={`/${locale}/dashboard/gallery`}
          className="card"
          style={{ cursor: "pointer", textDecoration: "none", display: "block" }}
        >
          <p style={{ fontWeight: 600, color: "#fff", marginBottom: "4px" }}>
            My gallery
          </p>
          <p className="caption">Browse all your generated images</p>
        </a>
        <a
          href={`/${locale}/dashboard/history`}
          className="card"
          style={{ cursor: "pointer", textDecoration: "none", display: "block" }}
        >
          <p style={{ fontWeight: 600, color: "#fff", marginBottom: "4px" }}>
            Generation history
          </p>
          <p className="caption">Filter and manage all generations</p>
        </a>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          {t("generate")}
        </h2>
        <ImageGenerator
          toolSlug="text-to-image"
          promptPlaceholder="Describe the image you want to create..."
        />
      </div>
    </div>
  )
}
