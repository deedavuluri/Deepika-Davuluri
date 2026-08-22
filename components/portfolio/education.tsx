"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "PhD - Chemistry",
    school: "Michigan State University, USA",
    period: "2023 - Present",
    gpa: "GPA: 3.78/4",
    highlight: "Radiopharmaceutical Sciences at FRIB",
  },
  {
    degree: "MSc - Materials Science & Engineering",
    school: "University of Sheffield, UK",
    period: "2022 - 2023",
    gpa: "MERIT",
    highlight: "Fusion reactor materials research",
  },
  {
    degree: "M.Tech - Nuclear Engineering",
    school: "Pandit Deendayal Energy University",
    period: "2019 - 2021",
    gpa: "GPA: 9.73/10",
    highlight: "Nuclear waste repository safety analysis",
  },
  {
    degree: "B.Tech - Chemical Engineering",
    school: "Sathyabama University",
    period: "2012 - 2016",
    gpa: "GPA: 8.9/10",
    highlight: "Bio-ceramic production & NASA Rover Challenge",
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="education" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-primary">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Education
          </h2>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group relative p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-500"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap size={18} />
                  </div>
                  <span className="font-mono text-xs text-primary">{edu.period}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
                  <p className="font-mono text-xs text-muted-foreground mt-1">{edu.school}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs font-bold">
                    {edu.gpa}
                  </span>
                  <span className="text-xs text-muted-foreground italic">{edu.highlight}</span>
                </div>

                {/* Progress bar decoration */}
                <div className="h-1 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 0.3 * i }}
                    className="h-full bg-primary/60 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
