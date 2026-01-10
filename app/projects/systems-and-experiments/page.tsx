import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Systems Architecture & Experimental Software Tools | Engineering Systems Design",
  description:
    "Collection of experimental platforms, internal automation tools, and system architecture projects. Includes knowledge management systems, workflow automation, financial tools, and proof-of-concept software demonstrating systems design and technical problem-solving capabilities.",
  keywords: [
    "systems architecture",
    "software engineering projects",
    "automation tools",
    "internal tools development",
    "system design",
    "engineering software",
    "workflow automation",
    "technical prototypes",
  ],
  alternates: {
    canonical: "https://sdinkins.com/projects/systems-and-experiments",
    languages: {
      "x-default": "https://sdinkins.com/projects/systems-and-experiments",
    },
  },
  openGraph: {
    title: "Systems Architecture & Experimental Software Tools | Engineering Systems Design",
    description:
      "Collection of experimental platforms, internal automation tools, and system architecture projects demonstrating systems design and technical problem-solving.",
    url: "https://sdinkins.com/projects/systems-and-experiments",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://sdinkins.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: "https://sdinkins.com/#projects",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Systems & Experiments",
          item: "https://sdinkins.com/projects/systems-and-experiments",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://sdinkins.com/projects/systems-and-experiments#webpage",
      url: "https://sdinkins.com/projects/systems-and-experiments",
      name: "Systems Architecture & Experimental Software Tools | Engineering Systems Design",
      isPartOf: {
        "@id": "https://sdinkins.com/#website",
      },
      about: {
        "@id": "https://sdinkins.com/#person",
      },
      mainEntity: {
        "@id": "https://sdinkins.com/projects/systems-and-experiments#case-study",
      },
      breadcrumb: {
        "@id": "https://sdinkins.com/projects/systems-and-experiments#breadcrumb",
      },
    },
    {
      "@type": "CreativeWork",
      "@id": "https://sdinkins.com/projects/systems-and-experiments#case-study",
      name: "Systems Architecture & Experimental Tools Portfolio",
      description:
        "Collection of experimental platforms, internal automation tools, and system architecture projects. Includes knowledge management systems (EverydayLayer), URL management tools (Truncs), recipe planning platforms (Paws & Palate), financial tracking tools (Balance the Checkbook), and various utilities for automating repetitive tasks and improving internal workflows. Demonstrates rapid prototyping, scope management, and systems thinking applied to domain-specific problems.",
      author: {
        "@id": "https://sdinkins.com/#person",
      },
      creator: {
        "@id": "https://sdinkins.com/#person",
      },
      about: [
        {
          "@type": "Thing",
          name: "Systems Architecture",
        },
        {
          "@type": "Thing",
          name: "Software Prototyping",
        },
        {
          "@type": "Thing",
          name: "Internal Automation Tools",
        },
        {
          "@type": "Thing",
          name: "Workflow Optimization",
        },
      ],
      keywords: [
        "systems architecture",
        "software prototyping",
        "internal automation tools",
        "knowledge management systems",
        "workflow automation",
        "rapid prototyping",
      ],
      dateCreated: "2023",
      inLanguage: "en-US",
    },
  ],
}

export default function SystemsAndExperimentsPage() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground tracking-tight">
            Systems Architecture & Experimental Tools
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">Exploratory platforms and internal systems</p>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
            <div>
              <span className="font-medium text-foreground">Role:</span> System Architect & Developer
            </div>
            <div>
              <span className="font-medium text-foreground">Context:</span> Experimental & Internal
            </div>
          </div>
        </header>

        {/* Problem Statement */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Problem Statement</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Not all tools are production systems. Some projects exist to explore technical concepts, test
              architectural ideas, or solve specific internal problems that do not warrant public releases.
            </p>
            <p>
              Professional work generates recurring friction points: information retrieval, workflow coordination,
              financial tracking, and data organization. Generic solutions often over-engineer the problem or fail to
              address domain-specific requirements.
            </p>
            <p>
              Experimental tools serve multiple purposes: they validate technical approaches, demonstrate systems
              thinking, and occasionally evolve into production platforms. They also provide a laboratory for testing
              ideas without the constraints of public-facing product development.
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
              These projects share a common approach: identify a problem, design a solution, build it cleanly, and move
              on. No over-engineering. No unnecessary features. Just functional systems that solve defined problems.
            </p>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">EverydayLayer</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    A personal knowledge management system designed for structured note-taking, journaling, and
                    information retrieval. Focuses on clean organization rather than feature bloat.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <Badge variant="secondary" className="text-xs">
                      Knowledge Management
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Personal Tools
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Truncs</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    A link shortening and tracking tool for managing URL references across projects. Built to solve a
                    specific workflow inefficiency without relying on external services.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <Badge variant="secondary" className="text-xs">
                      Internal Tools
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      URL Management
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Paws & Palate</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    A recipe and meal planning platform with structured ingredient management and dietary tracking.
                    Designed for personal use with deliberate simplicity.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <Badge variant="secondary" className="text-xs">
                      Lifestyle Apps
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Data Organization
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Balance the Checkbook</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    A personal financial tracking tool for reconciliation and transaction categorization. Built to
                    provide clarity without requiring third-party account integrations.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <Badge variant="secondary" className="text-xs">
                      Financial Tools
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Personal Finance
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Internal Tools</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    Various utilities for automating repetitive tasks, generating structured reports, managing project
                    data, and improving internal workflows. Most remain internal by design.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <Badge variant="secondary" className="text-xs">
                      Automation
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Internal Systems
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Technical Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Languages & Frameworks</h3>
              <p className="text-sm text-muted-foreground">
                TypeScript, React, Next.js, Python, Node.js (varies by project)
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Data & Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                PostgreSQL, Firebase, Vercel, various APIs depending on requirements
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Development Approach</h3>
              <p className="text-sm text-muted-foreground">
                Rapid prototyping, minimal viable scope, emphasis on solving specific problems without feature creep
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
              These projects serve their intended purpose: solving specific problems cleanly and efficiently. Some
              remain in active use. Others were learning exercises. None required scaling beyond their original scope.
            </p>
            <p>
              The value is not in the individual tools themselves, but in the accumulated practice of designing systems,
              managing scope, and building functional solutions without unnecessary complexity.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>What this demonstrates:</strong> Systems thinking, scope management, ability to ship functional
              tools quickly, technical versatility across different domains, and the discipline to avoid
              over-engineering. Experimental work reinforces the same principles that govern production systems:
              clarity, intentionality, and restraint.
            </p>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Skills Demonstrated
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Systems Design</Badge>
            <Badge>Rapid Prototyping</Badge>
            <Badge>Scope Management</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React/Next.js</Badge>
            <Badge>Python</Badge>
            <Badge>Database Design</Badge>
            <Badge>API Development</Badge>
            <Badge>Product Thinking</Badge>
            <Badge>Problem Decomposition</Badge>
            <Badge>Technical Versatility</Badge>
            <Badge>Restraint & Simplicity</Badge>
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
                Production platform demonstrating systems thinking applied to professional workflows
              </p>
            </Link>
            <Link
              href="/projects/surveying-automation"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">Land Surveying Automation & Technical Tools</h3>
              <p className="text-sm text-muted-foreground">
                Internal workflow automation with similar design principles
              </p>
            </Link>
            <Link
              href="/projects/studyguidesai"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">StudyGuidesAI</h3>
              <p className="text-sm text-muted-foreground">
                Consumer-facing platform showcasing product design and AI application
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
