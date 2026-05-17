import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("home.hero")

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-sm bg-muted px-3 py-1 rounded-full mb-4">
        {t("badge")}
      </span>
      <h1 className="text-5xl font-bold mb-4 max-w-2xl">
        {t("title")}
      </h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-xl">
        {t("subtitle")}
      </p>
      <div className="flex gap-3">
        <a
          href="#"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium"
        >
          {t("cta")}
        </a>
        <a
          href="#"
          className="border px-6 py-3 rounded-lg font-medium"
        >
          {t("ctaSecondary")}
        </a>
      </div>
    </main>
  )
}
