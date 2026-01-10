import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "StudyGuidesAI | AI-Powered Study Guide Generator for Technical Learning",
  description:
    "AI-assisted educational platform that converts complex technical material into structured, hierarchical study guides. Designed for professional exam prep, technical certification, and academic learning with engineering documentation principles. Structured learning tools with AI summarization.",
  keywords: [
    "AI study guide generator",
    "technical study guides",
    "professional exam preparation",
    "AI learning tools",
    "structured study materials",
    "technical education platform",
    "engineering exam prep",
    "AI-assisted learning",
    "study guide software",
  ],
  alternates: {
    canonical: "/projects/studyguidesai",
  },
  openGraph: {
    title: "StudyGuidesAI | AI-Powered Study Guide Generator for Technical Learning",
    description:
      "AI-assisted educational platform that converts complex technical material into structured, hierarchical study guides. Designed for professional exam prep and technical certification.",
    url: "https://sdinkins.com/projects/studyguidesai",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "StudyGuidesAI",
  description:
    "AI-assisted educational platform for converting complex technical material into structured, hierarchical study guides. Designed for professional exam preparation and technical learning.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Person",
    name: "Sanford Dinkins",
    jobTitle: "Professional Civil Engineer",
  },
  url: "https://studyguidesai.com",
}

export default function StudyGuidesAIPage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Sanford Dinkins, PE
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 space-y-12 sm:space-y-14 md:space-y-16">
        {/* Hero Section */}
        <header className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground tracking-tight">StudyGuidesAI</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Structured learning tools for complex technical material
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
            <div>
              <span className="font-medium text-foreground">Role:</span> Founder & System Designer
            </div>
            <div>
              <span className="font-medium text-foreground">Context:</span> SaaS Platform
            </div>
          </div>
        </header>

        {/* Problem Statement */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Problem Statement</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Learning complex technical material—whether for professional licensing exams, academic coursework, or
              technical certification—requires more than passive reading. Effective study involves distillation,
              hierarchy, and structured repetition.
            </p>
            <p>
              Traditional study guides are often dense, poorly organized, or fail to emphasize the relationships between
              concepts. Generic AI summarization tools produce surface-level content that lacks depth, context, and
              logical structure.
            </p>
            <p>
              There is a persistent gap between raw educational content and the kind of structured, hierarchical study
              materials that support retention and comprehension—especially for technical subjects where precision and
              understanding of relationships matter.
            </p>
          </div>
        </section>

        {/* Solution & Approach */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Solution & Approach
          </h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-foreground leading-relaxed">
            <p>
              StudyGuidesAI converts complex material into structured, digestible study guides that emphasize clarity,
              hierarchy, and conceptual relationships.
            </p>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Structure-First Design</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Organizes content into logical hierarchies: topics, subtopics, key concepts, and supporting details.
                  Mirrors the way technical documentation is structured in professional engineering contexts.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI-Assisted Summarization with Constraints</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  AI extracts key ideas and generates summaries within a structured framework that enforces clarity and
                  prevents vague generalizations. Prioritizes technical accuracy and conceptual precision over generic
                  output.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Retention-Oriented Formatting</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Formats study guides to support active learning. Key concepts are highlighted, relationships between
                  ideas are explicit, and content is designed for iterative review rather than one-time reading.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Engineering Documentation Principles</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Approach is informed by professional documentation standards: technical writing practices, logical
                  organization, and the assumption that clarity is a design constraint, not an optional feature.
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground italic">
              The platform balances automation with structure, using AI as a tool rather than an unfiltered content
              generator.
            </p>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Technical Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Languages & Frameworks</h3>
              <p className="text-sm text-muted-foreground">TypeScript, React, Next.js</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">AI & Content Processing</h3>
              <p className="text-sm text-muted-foreground">
                Large language models, structured content extraction, hierarchical data models
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Infrastructure</h3>
              <p className="text-sm text-muted-foreground">Vercel, PostgreSQL, authentication systems</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Development Approach</h3>
              <p className="text-sm text-muted-foreground">
                Content-first design, AI guardrails, emphasis on structured output quality
              </p>
            </div>
          </div>
        </section>

        {/* Impact & Outcomes */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Impact & Outcomes
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              The result is a study tool that produces structured, readable guides without the noise and inconsistency
              of generic AI-generated content. Users receive materials designed to support comprehension and retention,
              not just surface-level summarization.
            </p>
            <p>
              By applying engineering documentation principles to educational content, the platform bridges the gap
              between raw material and effective study resources.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>What this demonstrates:</strong> Product design thinking, AI application with quality constraints,
              cross-domain systems thinking (engineering principles applied to education), and the ability to build
              consumer-facing platforms that prioritize structured output over feature density.
            </p>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Skills Demonstrated
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Product Design</Badge>
            <Badge>AI Application Development</Badge>
            <Badge>Content Systems</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React/Next.js</Badge>
            <Badge>Database Design</Badge>
            <Badge>User Experience Design</Badge>
            <Badge>Technical Documentation</Badge>
            <Badge>Structured Data Modeling</Badge>
            <Badge>Quality Constraints</Badge>
            <Badge>Cross-Domain Thinking</Badge>
            <Badge>SaaS Architecture</Badge>
          </div>
        </section>

        {/* Links */}
        <section className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-border">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Links</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">External</h3>
              <a
                href="https://studyguidesai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors underline"
              >
                Visit StudyGuidesAI →
              </a>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-border">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Related Projects</h2>
          <div className="grid gap-4">
            <Link
              href="/projects/civil-billing-automation"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">Civil Engineering Billing Automation</h3>
              <p className="text-sm text-muted-foreground">
                Engineering workflow automation with similar systems thinking
              </p>
            </Link>
            <Link
              href="/projects/systems-and-experiments"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">Systems Architecture & Experimental Tools</h3>
              <p className="text-sm text-muted-foreground">
                Additional platforms demonstrating product design and system architecture
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
