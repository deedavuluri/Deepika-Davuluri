"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-12 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="font-mono text-xs text-muted-foreground text-center leading-relaxed">
          <p>
            <span className="text-primary">$</span> echo{" "}
            <span className="text-foreground">{'"Built with atoms and electrons"'}</span>
          </p>
          <p className="mt-2">
            Deepika Davuluri &middot; Nuclear Chemistry Researcher &middot; Michigan State University
          </p>
        </div>

        {/* Decorative element row */}
        <div className="flex items-center gap-3 text-muted-foreground/30 font-mono text-[10px]">
          <span>{"{"}</span>
          <span className="text-primary/30">Pt</span>
          <span>&middot;</span>
          <span className="text-primary/30">Ca</span>
          <span>&middot;</span>
          <span className="text-primary/30">Pm</span>
          <span>&middot;</span>
          <span className="text-primary/30">Sc</span>
          <span>&middot;</span>
          <span className="text-primary/30">Ta</span>
          <span>{"}"}</span>
        </div>
      </div>
    </motion.footer>
  )
}
