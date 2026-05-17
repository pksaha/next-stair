"use client"
import { useEffect, useState } from "react"
import { useAuth } from "@clerk/nextjs"
import {
  initializePaddle,
  type Paddle,
  type Environments,
} from "@paddle/paddle-js"

interface Props {
  priceId: string
  planName: string
  children: React.ReactNode
  className?: string
}

export function PaddleCheckout({
  priceId,
  planName,
  children,
  className,
}: Props) {
  const { userId } = useAuth()
  const [paddle, setPaddle] = useState<Paddle | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN
    const env =
      (process.env.NEXT_PUBLIC_PADDLE_ENV as Environments) ??
      "sandbox"

    // Silently skip if credentials are not set yet.
    // The button will still render — clicking it shows
    // the "coming soon" message below.
    if (!token) return

    initializePaddle({ environment: env, token }).then(
      (instance) => { if (instance) setPaddle(instance) }
    )
  }, [])

  async function handleCheckout() {
    if (!paddle) {
      alert(
        "Payment is not configured yet. " +
        "Check back soon — billing is coming!"
      )
      return
    }

    if (!userId) {
      window.location.href = "/en/sign-in"
      return
    }

    setLoading(true)
    try {
      paddle.Checkout.open({
        items: [{ priceId, quantity: 1 }],
        customData: { userId },
        settings: {
          displayMode: "overlay",
          theme: "light",
          locale: "en",
          allowLogout: false,
          successUrl:
            `${window.location.origin}/en/dashboard` +
            `?upgraded=true`,
        },
      })
    } catch (err) {
      console.error("Checkout error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className={className}
    >
      {loading ? "Loading..." : children}
    </button>
  )
}
