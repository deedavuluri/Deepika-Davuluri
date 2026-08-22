"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function SectionDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="flex items-center justify-center py-8 px-6" aria-hidden="true">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex items-center gap-4 w-full max-w-md"
      >
        <div className="flex-1 h-px bg-border" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="2" fill="oklch(0.78 0.15 180)" opacity="0.6" />
            <circle cx="8" cy="8" r="6" stroke="oklch(0.78 0.15 180)" strokeWidth="0.5" opacity="0.3" />
            <circle cx="8" cy="2" r="1" fill="oklch(0.78 0.15 180)" opacity="0.6" />
          </svg>
        </motion.div>
        <div className="flex-1 h-px bg-border" />
      </motion.div>
    </div>
  )
}
