"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, ExternalLink, Presentation } from "lucide-react"

const publications = [
  {
    authors: "Deepika Davuluri, Evan Williams, Dan Racz, Katharina Domnanich, Ivis Chaple Gore",
    title: "Solid harvesting and separation of Pt-197 for cancer theranostic",
    year: "2026",
    status: "Under Preparation",
  },
  {
    authors: "Vira Zakusilova, Deepika Davuluri, Katie Austin, Emilia Majka, Katharina Domnanich, Greg Severin",
    title: "Solid harvesting of Ca-47 for Ca-47/Sc-47 generator",
    year: "2026",
    status: "Under Preparation",
  },
  {
    authors: "Deepika Davuluri, Nikith Vasa, Manish Kumar",
    title: "Probabilistic safety analysis of open pit uranium mine constituting an aquifer in proximity using PYTHON",
    year: "2026",
    status: "Under Preparation",
  },
  {
    authors: "Deepika Davuluri, Manish Kumar, Vipin Shukla",
    title: "Safety Analysis of Near-surface nuclear waste repository constituting an aquifer in proximity",
    year: "2023",
    status: "Published",
    doi: "https://doi.org/10.1016/j.matpr.2023.01.069",
  },
  {
    authors: "Deepika Davuluri, Annam Renita",
    title: "Extraction of Dye from Marine Macro algae",
    year: "2014",
    status: "Published",
    doi: "https://www.sphinxsai.com/2015/ch_vol8_no3/2/(1060-1063)V8N3.pdf",
  },
]

const conferences = [
  {
    title: "Probabilistic safety analysis of open pit uranium mine constituting an aquifer in proximity using PYTHON",
    event: "ICAWTM 2026 Conference, PDEU",
    type: "Online Oral Presentation",
    year: "2026",
  },
  {
    title: "Production of novel platinum isotopes for theragnostic of cancers",
    event: "ACS SPRING 2024",
    type: "Oral Presentation",
    year: "2024",
  },
  {
    title: "Safety Analysis of Near-surface nuclear waste repository constituting an aquifer in proximity",
    event: "ICAWTM 2020 Conference, PDEU",
    type: "Online Oral Presentation",
    year: "2022",
  },
  {
    title: "Production of Bio ceramic from Waste Eggshell",
    event: "CEEE, SSN College of Engineering",
    type: "Presentation",
    year: "2016",
  },
]

export function Publications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="publications" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-primary">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Publications & Conferences
          </h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Publications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-mono text-sm text-primary mb-8 flex items-center gap-2"
          >
            <FileText size={16} />
            {"// Publications & Manuscripts"}
          </motion.h3>

          <div className="flex flex-col gap-4">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                className="group p-5 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-sm font-bold text-foreground leading-relaxed flex-1">
                      {pub.title}
                    </h4>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        pub.status === "Published"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}>
                        {pub.status}
                      </span>
                      {pub.doi && (
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                          aria-label={`DOI link for ${pub.title}`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">{pub.authors} ({pub.year})</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conferences */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="font-mono text-sm text-primary mb-8 flex items-center gap-2"
          >
            <Presentation size={16} />
            {"// Conference Presentations"}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conferences.map((conf, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.9 }}
                className="p-5 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-primary">{conf.year}</span>
                  <h4 className="text-sm font-bold text-foreground leading-relaxed">{conf.title}</h4>
                  <p className="font-mono text-xs text-muted-foreground">{conf.event}</p>
                  <span className="inline-block w-fit px-2 py-0.5 rounded bg-secondary text-secondary-foreground font-mono text-[10px]">
                    {conf.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
