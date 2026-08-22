"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const researchProjects = [
  {
    period: "Aug 2023 - Present",
    degree: "PhD Chemistry",
    title: "Harvesting and Separation of Platinum Isotopes for Radiocisplatin Generation",
    pi: "Dr. Katharina Domnanich",
    description:
      "Solid isotope harvesting of Pt-197 and Pt-189 from the FRIB beamline, followed by efficient isolation and purification strategies. Exploring synthesis of radiocisplatin as a cancer theranostic combining chemotherapy with theranostic capabilities.",
    tags: ["Pt-197", "Pt-189", "FRIB", "Radiocisplatin", "Theranostics"],
    isotope: "Pt",
    atomicNum: "78",
  },
  {
    period: "Apr - Jul 2025",
    degree: "PhD Chemistry",
    title: "Harvesting and Separation of Calcium-47 for Scandium-47 Production",
    pi: "Dr. Katharina Domnanich",
    description:
      "Proof-of-principal test for the isotope harvester designed for platinum isotopes. Solid isotope harvesting of Ca-47 from the FRIB beamline using Ca-48 isotope for Ca-47/Sc-47 generator system.",
    tags: ["Ca-47", "Sc-47", "FRIB", "Generator System"],
    isotope: "Ca",
    atomicNum: "20",
  },
  {
    period: "Aug 2024 - Present",
    degree: "PhD Chemistry",
    title: "Production and Separation of Promethium-149 for Cancer Therapeutics",
    pi: "Dr. Katharina Domnanich",
    description:
      "Exploring production and isolation of Pm-149 via cation exchange chromatography. Optimizing production from enriched Nd-148 targets via neutron irradiation in a reactor.",
    tags: ["Pm-149", "Nd-148", "Cation Exchange", "Reactor Irradiation"],
    isotope: "Pm",
    atomicNum: "61",
  },
  {
    period: "Nov 2022 - Oct 2023",
    degree: "MSc Materials Science",
    title: "Novel Reduced-Activation TaVTi(W,Cr,Fe) Compositionally Complex Alloys",
    pi: "Dr. Amy Gandy",
    description:
      "Manufactured and characterized novel alloys for plasma-facing components in future fusion power stations using SEM-EDX, XRD, Optical microscopy, and Mechanical testing after heat treatment and Ion implantation.",
    tags: ["HEA", "Fusion Reactor", "SEM-EDX", "XRD", "Ion Implantation"],
    isotope: "Ta",
    atomicNum: "73",
  },
  {
    period: "Jun 2020 - May 2021",
    degree: "M.Tech Nuclear Engineering",
    title: "Probabilistic Analysis of Radionuclide Transport from Near Surface Repository",
    pi: "Dr. PM Sathya Sai",
    description:
      "Event tree analysis for repository failure due to rainwater protrusion. Developed Python code to compute risk to critical group members from ingestion of contaminated water using Probabilistic Assessment.",
    tags: ["Python 3.0", "Event Tree", "Nuclear Waste", "Risk Assessment"],
    isotope: "U",
    atomicNum: "92",
  },
  {
    period: "Aug 2015 - Apr 2017",
    degree: "B.Tech Chemical Engineering",
    title: "ISEI Team India: NASA Human Exploration and Rover Challenge",
    pi: "Mr. Ralf Heckle, ISEI Leipzig",
    description:
      "Studied materials used in non-pneumatic tires, focusing on polymers and mechanical properties. Applied SolidWorks knowledge to design non-pneumatic wheel systems for rover designs.",
    tags: ["NASA", "SolidWorks", "Polymers", "Rover Design"],
    isotope: "Fe",
    atomicNum: "26",
  },
]

function IsotopeCard({ isotope, atomicNum }: { isotope: string; atomicNum: string }) {
  return (
    <div className="hidden md:flex flex-shrink-0 w-20 h-20 border border-primary/30 rounded-lg flex-col items-center justify-center bg-primary/5 group-hover:border-primary/60 transition-colors">
      <span className="font-mono text-[10px] text-primary/50">{atomicNum}</span>
      <span className="font-mono text-2xl font-bold text-primary glow-text">{isotope}</span>
    </div>
  )
}

export function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="research" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-primary">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Research Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border origin-top"
          />

          <div className="flex flex-col gap-12 pl-6 md:pl-20">
            {researchProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                className="group relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2 * i + 0.3, type: "spring" }}
                  className="absolute -left-6 md:-left-20 top-1 md:top-3"
                >
                  <div className="w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
                </motion.div>

                <div className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <IsotopeCard isotope={project.isotope} atomicNum={project.atomicNum} />

                    <div className="flex-1 flex flex-col gap-3">
                      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <span className="font-mono text-xs text-primary">{project.period}</span>
                        <span className="font-mono text-xs text-muted-foreground">{project.degree}</span>
                      </div>

                      <h3 className="text-base font-bold text-foreground leading-relaxed">{project.title}</h3>
                      <p className="font-mono text-xs text-muted-foreground">PI: {project.pi}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono text-[10px] tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
