import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Systems Architecture & Experimental Tools | Sanford Dinkins, PE",
  description: "Collection of experimental platforms, internal tools, and system architecture projects including EverydayLayer, Truncs, Paws & Palate, and financial tools.",
  alternates: {
    canonical: "/projects/systems-and-experiments",
  },
}

export default function SystemsAndExperimentsPage() {
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
            Systems Architecture & Experimental Tools
          </h1>
          <p className="text-xl text-muted-foreground">
            Exploratory platforms and internal systems
          </p>
        </header>

        {/* Context */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Context</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Not all tools are production systems. Some projects exist to explore technical concepts, test architectural ideas, or solve specific internal problems that do not warrant public releases.
            </p>
            <p>
              These experimental tools often serve as proof-of-concept work, prototypes for larger systems, or internal utilities that streamline specific workflows without needing to scale beyond their immediate use case.
            </p>
            <p>
              This page consolidates those projects—systems that demonstrate technical capability, design thinking, or problem-solving approach, but do not require individual deep-dive documentation.
            </p>
          </div>
        </section>

        {/* System / Approach */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">System / Approach</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              These projects share a common approach: identify a problem, design a solution, build it cleanly, and move on. No over-engineering. No unnecessary features. Just functional systems that solve defined problems.
            </p>
            <div className="space-y-8 mt-8">
              {/* EverydayLayer */}
              <div className="pl-6 border-l-2 border-border">
                <h3 className="font-medium mb-2">EverydayLayer</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  A personal knowledge management system designed for structured note-taking, journaling, and information retrieval. Focuses on clean organization rather than feature bloat.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">Knowledge Management</Badge>
                  <Badge variant="secondary" className="text-xs">Personal Tools</Badge>
                </div>
              </div>

              {/* Truncs */}
              <div className="pl-6 border-l-2 border-border">
                <h3 className="font-medium mb-2">Truncs</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  A link shortening and tracking tool for managing URL references across projects. Built to solve a specific workflow inefficiency without relying on external services.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">Internal Tools</Badge>
                  <Badge variant="secondary" className="text-xs">URL Management</Badge>
                </div>
              </div>

              {/* Paws & Palate */}
              <div className="pl-6 border-l-2 border-border">
                <h3 className="font-medium mb-2">Paws & Palate</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  A recipe and meal planning platform with structured ingredient management and dietary tracking. Designed for personal use with deliberate simplicity.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">Lifestyle Apps</Badge>
                  <Badge variant="secondary" className="text-xs">Data Organization</Badge>
                </div>
              </div>

              {/* Balance the Checkbook */}
              <div className="pl-6 border-l-2 border-border">
                <h3 className="font-medium mb-2">Balance the Checkbook</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  A personal financial tracking tool for reconciliation and transaction categorization. Built to provide clarity without requiring third-party account integrations.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">Financial Tools</Badge>
                  <Badge variant="secondary" className="text-xs">Personal Finance</Badge>
                </div>
              </div>

              {/* Other Internal Tools */}
              <div className="pl-6 border-l-2 border-border">
                <h3 className="font-medium mb-2">Other Internal Tools</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Various utilities for automating repetitive tasks, generating structured reports, managing project data, and improving internal workflows. Most remain internal by design.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">Automation</Badge>
                  <Badge variant="secondary" className="text-xs">Internal Systems</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Outcomes</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              These projects serve their intended purpose: solving specific problems cleanly and efficiently. Some remain in active use. Others were learning exercises. None required scaling beyond their original scope.
            </p>
            <p>
              The value is not in the individual tools themselves, but in the accumulated practice of designing systems, managing scope, and building functional solutions without unnecessary complexity.
            </p>
            <p className="text-muted-foreground text-sm">
              Experimental work reinforces the same principles that govern production systems: clarity, intentionality, and restraint.
            </p>
          </div>
        </section>

        {/* Scope & Tags */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Scope & Tags</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Domains</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Systems Design</Badge>
                <Badge variant="secondary">Internal Tools</Badge>
                <Badge variant="secondary">Prototyping</Badge>
                <Badge variant="secondary">Automation</Badge>
                <Badge variant="secondary">Personal Productivity</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">System Type</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Experimental Platforms</Badge>
                <Badge variant="outline">Internal Applications</Badge>
                <Badge variant="outline">Proof of Concept</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Tools</h3>
              <p className="text-sm text-muted-foreground">
                Various web frameworks, databases, APIs, and automation libraries depending on project requirements
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
