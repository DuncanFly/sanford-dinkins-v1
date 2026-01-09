import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "StudyGuidesAI | Sanford Dinkins, PE",
  description: "Educational platform designed to convert complex material into structured, digestible study guides with AI-assisted summarization and curated structure.",
  alternates: {
    canonical: "/projects/studyguidesai",
  },
}

export default function StudyGuidesAIPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Sanford Dinkins, PE
          </Link>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16 pb-8 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            StudyGuidesAI
          </h1>
          <p className="text-xl text-muted-foreground">
            Structured learning tools for complex technical material
          </p>
        </header>

        {/* Context */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Context</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Learning complex technical material—whether for professional licensing exams, academic coursework, or technical certification—requires more than passive reading. Effective study involves distillation, hierarchy, and structured repetition.
            </p>
            <p>
              Traditional study guides are often dense, poorly organized, or fail to emphasize the relationships between concepts. Generic AI summarization tools produce surface-level content that lacks depth, context, and logical structure.
            </p>
            <p>
              There is a persistent gap between raw educational content and the kind of structured, hierarchical study materials that support retention and comprehension—especially for technical subjects where precision and understanding of relationships matter.
            </p>
          </div>
        </section>

        {/* System / Approach */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">System / Approach</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              StudyGuidesAI is designed to convert complex material into structured, digestible study guides that emphasize clarity, hierarchy, and conceptual relationships.
            </p>
            <div className="pl-6 border-l-2 border-border space-y-4">
              <div>
                <h3 className="font-medium mb-2">Structure-First Design</h3>
                <p className="text-muted-foreground text-sm">
                  The platform organizes content into logical hierarchies: topics, subtopics, key concepts, and supporting details. This mirrors the way technical documentation is structured in professional engineering contexts.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">AI-Assisted Summarization with Constraints</h3>
                <p className="text-muted-foreground text-sm">
                  AI is used to extract key ideas and generate summaries, but within a structured framework that enforces clarity and prevents vague generalizations. The system prioritizes technical accuracy and conceptual precision over generic output.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Retention-Oriented Formatting</h3>
                <p className="text-muted-foreground text-sm">
                  Study guides are formatted to support active learning: key concepts are highlighted, relationships between ideas are explicit, and content is designed for iterative review rather than one-time reading.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Engineering Documentation Principles</h3>
                <p className="text-muted-foreground text-sm">
                  The approach is informed by professional documentation standards: technical writing practices, logical organization, and the assumption that clarity is a design constraint, not an optional feature.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm italic">
              The platform balances automation with structure, using AI as a tool rather than an unfiltered content generator.
            </p>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Outcomes</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              The result is a study tool that produces structured, readable guides without the noise and inconsistency of generic AI-generated content. Users receive materials designed to support comprehension and retention, not just surface-level summarization.
            </p>
            <p>
              By applying engineering documentation principles to educational content, the platform bridges the gap between raw material and effective study resources.
            </p>
            <p className="text-muted-foreground text-sm">
              This project demonstrates systems thinking applied to a non-engineering domain, showing that structured processes and attention to hierarchy improve outcomes across disciplines.
            </p>
          </div>
        </section>

        {/* Scope & Tags */}
        <section className="pt-8 border-t border-border mb-12">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Scope & Tags</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Domains</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Education Technology</Badge>
                <Badge variant="secondary">AI Applications</Badge>
                <Badge variant="secondary">Content Systems</Badge>
                <Badge variant="secondary">Technical Documentation</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">System Type</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">SaaS Platform</Badge>
                <Badge variant="outline">AI-Assisted Tool</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Tools</h3>
              <p className="text-sm text-muted-foreground">
                AI content processing, structured data models, user interface design
              </p>
            </div>
          </div>
        </section>

        {/* External Link */}
        <footer className="pt-8 border-t border-border">
          <a
            href="https://studyguidesai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground hover:text-muted-foreground transition-colors underline decoration-border hover:decoration-foreground"
          >
            Visit StudyGuidesAI →
          </a>
        </footer>
      </article>
    </main>
  )
}
