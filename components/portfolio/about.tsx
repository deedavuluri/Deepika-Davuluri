"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Atom, FlaskConical, Microscope, Cpu } from "lucide-react"

const interests = [
  {
    icon: Atom,
    title: "Radiopharmaceuticals",
    desc: "Production of radionuclides through accelerators, cyclotrons and reactor irradiations for cancer theranostics.",
  },
  {
    icon: FlaskConical,
    title: "Separation Science",
    desc: "Ion exchange chromatography, extraction chromatography, solvent extraction, and electrochemical separations.",
  },
  {
    icon: Microscope,
    title: "Materials Science",
    desc: "Design and testing of high entropy alloys for extreme environments and biomaterials. SEM-EDX, XRD, FTIR, TEM studies.",
  },
  {
    icon: Cpu,
    title: "Automation & AI",
    desc: "Process development for purification and radiolabeling. Python, LISE++, SRIM, Thermo Cal, MATLAB & SolidWorks.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-primary">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Research Interests
          </h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Interest cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 glow-border"
            >
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity scanlines overflow-hidden" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-foreground tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-2 right-2 font-mono text-[10px] text-primary/30">
                [{String(i + 1).padStart(2, "0")}]
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm font-mono text-xs"
        >
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2">researcher_profile.py</span>
          </div>
          <div className="space-y-1 text-muted-foreground">
            <p>
              <span className="text-primary">class</span>{" "}
              <span className="text-foreground">Researcher</span>:
            </p>
            <p className="pl-4">
              <span className="text-primary">name</span> ={" "}
              <span className="text-accent">{'"Deepika Davuluri"'}</span>
            </p>
            <p className="pl-4">
              <span className="text-primary">affiliation</span> ={" "}
              <span className="text-accent">{'"Michigan State University"'}</span>
            </p>
            <p className="pl-4">
              <span className="text-primary">lab</span> ={" "}
              <span className="text-accent">{'"Domnanich Lab, FRIB"'}</span>
            </p>
            <p className="pl-4">
              <span className="text-primary">focus</span> = [
              <span className="text-accent">{'"Isotope Harvesting"'}</span>,{" "}
              <span className="text-accent">{'"Radiocisplatin"'}</span>,{" "}
              <span className="text-accent">{'"Cancer Theranostics"'}</span>]
            </p>
            <p className="pl-4">
              <span className="text-primary">skills</span> = [
              <span className="text-accent">{'"Python"'}</span>,{" "}
              <span className="text-accent">{'"LISE++"'}</span>,{" "}
              <span className="text-accent">{'"SRIM"'}</span>,{" "}
              <span className="text-accent">{'"MATLAB"'}</span>,{" "}
              <span className="text-accent">{'"SolidWorks"'}</span>]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
