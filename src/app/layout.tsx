import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "next-stair",
  description: "AI image generation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
