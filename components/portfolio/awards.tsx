"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Star, Globe, Rocket } from "lucide-react"

const awards = [
  {
    icon: Award,
    title: "Alfred J. And Ruth Zeits Fellowship",
    org: "Michigan State University",
    year: "2025-26",
  },
  {
    icon: Star,
    title: "Associate Member, SigmaXi Society",
    org: "The Scientific Research Honor Society",
    year: "",
  },
  {
    icon: Globe,
    title: "UN Karamveer Chakra Fellowship",
    org: "United Nations",
    year: "2021",
  },
  {
    icon: Globe,
    title: "ISEI Germany STEM Ambassadorship",
    org: "ISEI Leipzig, Germany",
    year: "2017",
  },
  {
    icon: Rocket,
    title: "Best Multinational Team Award",
    org: "NASA Human Exploration & Rover Challenge",
    year: "2017",
  },
  {
    icon: Star,
    title: "Star of Excellence",
    org: "Sathyabama University",
    year: "2016",
  },
]

const experience = [
  {
    title: "Teaching Assistant",
    org: "Department of Chemistry, MSU",
    period: "2023 - 2024",
    desc: "Undergraduate laboratory instruction, grading, and academic support for core chemistry concepts.",
  },
  {
    title: "Co-Founder",
    org: "COSMAGEN",
    period: "2015 - 2022",
    desc: "Led strategy, innovation, and development. Analyzed 5000+ documents, secured MSME registration. Designed Project EduOM empowering 0.35M+ underprivileged students.",
  },
  {
    title: "Research Intern",
    org: "University of Tennessee, Knoxville",
    period: "Jul - Aug 2024",
    desc: "Fabrication of ionic liquids for separating platinum isotopes from irradiated iridium foils at Dr. Chaple's lab.",
  },
  {
    title: "Intern",
    org: "Oil and Gas Corporation, GOI",
    period: "Jan 2015",
    desc: "Exposed to crude oil extraction mechanisms and technologies at Gadimoga plant operating since the 1980s.",
  },
]

export function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="awards" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-primary">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Awards & Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Awards */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-mono text-sm text-primary mb-8"
            >
              {"// Awards & Honors"}
            </motion.h3>

            <div className="flex flex-col gap-4">
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <award.icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-foreground truncate">{award.title}</h4>
                    <p className="font-mono text-xs text-muted-foreground">{award.org}</p>
                  </div>
                  {award.year && (
                    <span className="font-mono text-xs text-primary/60 flex-shrink-0">
                      {award.year}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="font-mono text-sm text-primary mb-8"
            >
              {"// Work & Internships"}
            </motion.h3>

            <div className="flex flex-col gap-4">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i + 0.5 }}
                  className="p-4 rounded-xl border border-border bg-card/30 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-foreground">{exp.title}</h4>
                    <span className="font-mono text-xs text-primary">{exp.period}</span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mb-2">{exp.org}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Extracurriculars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm"
        >
          <h3 className="font-mono text-sm text-primary mb-4">{"// Extracurricular Activities"}</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Student Chair, DOW MSU Symposium (2025)",
              "Social Events Secretary, Women in Chemistry, MSU (2024-2026)",
              "FRIB Outreach Volunteer (2023-25)",
            ].map((activity) => (
              <span
                key={activity}
                className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-mono text-xs"
              >
                {activity}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
