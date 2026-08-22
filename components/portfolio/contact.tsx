"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, MapPin, Phone } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <span className="font-mono text-xs text-primary">06.</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Interested in collaboration, radiopharmaceutical research, or materials science? 
            {"Let's"} connect and explore the possibilities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          <a
            href="mailto:davulur8@msu.edu"
            className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30 hover:border-primary/40 transition-all duration-300"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">Email</p>
              <p className="text-sm text-foreground">davulur8@msu.edu</p>
            </div>
          </a>

          <a
            href="tel:+13095324220"
            className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30 hover:border-primary/40 transition-all duration-300"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">Phone</p>
              <p className="text-sm text-foreground">+1 309-532-4220</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/deepika-davuluri-phd-c/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30 hover:border-primary/40 transition-all duration-300"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Linkedin size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">LinkedIn</p>
              <p className="text-sm text-foreground">Deepika Davuluri Ph.D.(C)</p>
            </div>
          </a>

          <div className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <MapPin size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">Location</p>
              <p className="text-sm text-foreground">East Lansing, MI, USA</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="mailto:davulur8@msu.edu"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-mono text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Mail size={16} />
          Say Hello
        </motion.a>
      </div>
    </section>
  )
}
