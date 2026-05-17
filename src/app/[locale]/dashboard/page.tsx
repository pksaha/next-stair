import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { useTranslations } from "next-intl"

export default async function DashboardPage() {
  const { userId } = await auth()
  if (!userId) redirect("/sign-in")

  const user = await currentUser()
  const t = useTranslations("dashboard")

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
      <p className="text-muted-foreground mb-8">
        {t("welcome")},{" "}
        {user?.firstName ?? user?.emailAddresses[0]?.emailAddress}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">{t("credits")}</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">{t("generated")}</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">{t("plan")}</p>
          <p className="text-3xl font-bold mt-1">{t("free")}</p>
        </div>
      </div>
    </div>
  )
}
