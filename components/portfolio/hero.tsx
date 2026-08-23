"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowDown, Mail, Linkedin } from "lucide-react"

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1))
      }, 40)
      return () => clearTimeout(timer)
    }
  }, [displayed, text, started])

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="cursor-blink text-primary">|</span>
      )}
    </span>
  )
}

function AtomSVG() {
  return (
    <motion.svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      className="hidden lg:block"
      aria-hidden="true"
    >
      {/* Nucleus */}
      <motion.circle
        cx="140"
        cy="140"
        r="8"
        fill="oklch(0.78 0.15 180)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="140"
        cy="140"
        r="16"
        fill="none"
        stroke="oklch(0.78 0.15 180)"
        strokeWidth="0.5"
        strokeOpacity="0.3"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbit 1 */}
      <motion.ellipse
        cx="140"
        cy="140"
        rx="110"
        ry="40"
        fill="none"
        stroke="oklch(0.78 0.15 180)"
        strokeWidth="0.8"
        strokeOpacity="0.4"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "140px 140px" }}
      />
      <motion.circle
        cx="250"
        cy="140"
        r="4"
        fill="oklch(0.78 0.15 180)"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "140px 140px" }}
      />

      {/* Orbit 2 */}
      <motion.ellipse
        cx="140"
        cy="140"
        rx="110"
        ry="40"
        fill="none"
        stroke="oklch(0.78 0.15 180)"
        strokeWidth="0.8"
        strokeOpacity="0.4"
        transform="rotate(60 140 140)"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "140px 140px" }}
      />
      <motion.circle
        cx="250"
        cy="140"
        r="4"
        fill="oklch(0.78 0.15 180)"
        transform="rotate(60 140 140)"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "140px 140px" }}
      />

      {/* Orbit 3 */}
      <motion.ellipse
        cx="140"
        cy="140"
        rx="110"
        ry="40"
        fill="none"
        stroke="oklch(0.78 0.15 180)"
        strokeWidth="0.8"
        strokeOpacity="0.4"
        transform="rotate(120 140 140)"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "140px 140px" }}
      />
      <motion.circle
        cx="250"
        cy="140"
        r="4"
        fill="oklch(0.78 0.15 180)"
        transform="rotate(120 140 140)"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "140px 140px" }}
      />
    </motion.svg>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs text-muted-foreground"
          >
            <span className="text-primary">$</span> cat researcher.profile
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
          >
            <span className="text-balance">Deepika</span>
            <br />
            <span className="glow-text text-primary">Davuluri</span>
          </motion.h1>

          {/* Subtitle typing effect */}
          <div className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            <TypingText
              text="PhD Candidate | Nuclear Chemistry | MSU"
              delay={1200}
            />
          </div>

          {/* Research tag line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg"
          >
            Exploring the frontiers of radiopharmaceutical science &mdash;
            harvesting isotopes, engineering separations, and developing cancer
            theranostics at the Facility for Rare Isotope Beams.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.6 }}
            className="flex items-center gap-4 pt-2"
          >
            <a
              href="mailto:davulur8@msu.edu"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail size={14} />
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/deedavuluri/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-mono text-xs rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </motion.div>

          {/* Status line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex items-center gap-3 font-mono text-xs text-muted-foreground pt-4"
          >
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Status: Researching
            </span>
            <span className="text-border">|</span>
            <span>East Lansing, MI</span>
            <span className="text-border">|</span>
            <span>
              <span className="text-primary">Pt-197</span> isotope harvesting
            </span>
          </motion.div>
        </div>

        {/* Right: Atom animation */}
        <div className="flex-shrink-0">
          <AtomSVG />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted-foreground">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
