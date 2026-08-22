"use client"

import { ParticleBackground } from "@/components/portfolio/particle-background"
import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Research } from "@/components/portfolio/research"
import { Education } from "@/components/portfolio/education"
import { Publications } from "@/components/portfolio/publications"
import { Awards } from "@/components/portfolio/awards"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { SectionDivider } from "@/components/portfolio/section-divider"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Nav />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Research />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Publications />
      <SectionDivider />
      <Awards />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  )
}
