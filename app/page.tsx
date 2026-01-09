import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { EngineeringSection } from "@/components/engineering-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <EngineeringSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
