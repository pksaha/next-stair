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
      <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
      <p className="text-muted-foreground mb-8">
        {t("welcome")},{" "}
        {user?.firstName ?? user?.emailAddresses[0]?.emailAddress}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">{t("credits")}</p>
          <p className="text-3xl font-bold mt-1">{creditBalance}</p>
          <p className="text-xs text-muted-foreground mt-1">
            of {planConfig.monthlyCredits} this month
          </p>
        </div>
        <a
          href={`/${locale}/dashboard/gallery`}
          className="border rounded-lg p-6 hover:border-primary/50
                     hover:bg-muted/30 transition-colors block"
        >
          <p className="text-sm text-muted-foreground">{t("generated")}</p>
          <p className="text-3xl font-bold mt-1">{stats.total}</p>
          <p className="text-xs text-primary mt-1">View gallery →</p>
        </a>
        <div className="border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Credits used</p>
          <p className="text-3xl font-bold mt-1">{stats.totalCreditsUsed}</p>
          <p className="text-xs text-muted-foreground mt-1">all time</p>
        </div>
        <div className="border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">
            {t("plan")}
          </p>
          <p className="text-3xl font-bold mt-1">
            {planConfig.name}
          </p>
          {subscription?.cancelAtPeriodEnd &&
            subscription.currentPeriodEnd && (
              <p className="text-xs text-amber-600 mt-1">
                Cancels{" "}
                {subscription.currentPeriodEnd
                  .toLocaleDateString()}
              </p>
            )}
          {currentPlan === "free" && (
            <a
              href={`/${locale}/pricing`}
              className="text-xs text-primary underline
                         mt-2 block"
            >
              Upgrade →
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <a
          href={`/${locale}/dashboard/gallery`}
          className="border rounded-xl p-5 hover:border-primary/50
                     hover:bg-muted/30 transition-colors space-y-1"
        >
          <p className="font-semibold text-sm">My gallery</p>
          <p className="text-xs text-muted-foreground">
            Browse all your generated images
          </p>
        </a>
        <a
          href={`/${locale}/dashboard/history`}
          className="border rounded-xl p-5 hover:border-primary/50
                     hover:bg-muted/30 transition-colors space-y-1"
        >
          <p className="font-semibold text-sm">
            Generation history
          </p>
          <p className="text-xs text-muted-foreground">
            Filter and manage all generations
          </p>
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
