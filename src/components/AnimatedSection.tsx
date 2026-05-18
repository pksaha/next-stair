"use client"
import { motion, MotionConfig } from "motion/react"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

// Reusable scroll-triggered reveal component.
// Wraps any content with a fade + translate animation
// that fires once when the element enters the viewport.
// MotionConfig reducedMotion="user" respects the system
// "reduce motion" accessibility preference automatically.
export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  const offsetMap = {
    up:    { y: 32 },
    down:  { y: -32 },
    left:  { x: 32 },
    right: { x: -32 },
    none:  {},
  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, ...offsetMap[direction] }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        style={{ willChange: "transform" }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}

// Staggered children — wraps a list where each child
// animates in sequence with increasing delay.
// Usage: wrap a grid or list in StaggerContainer,
// wrap each child in StaggerItem.
export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.1,
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
