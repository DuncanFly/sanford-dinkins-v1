import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Civil Engineering Billing Automation | QuickBooks Integration for Engineering Firms",
  description:
    "Engineering-grade billing automation platform for civil firms. Automated QuickBooks Online and QuickBooks Time integration for progress billing, time tracking, engineering contract management, and accurate invoicing. Eliminates manual spreadsheet workflows and billing errors.",
  keywords: [
    "civil engineering billing software",
    "engineering billing automation",
    "QuickBooks for civil engineers",
    "engineering time tracking",
    "progress billing automation",
    "civil firm billing system",
    "engineering workflow automation",
    "QuickBooks Online integration",
    "engineering contract billing",
    "automated invoicing for engineers",
  ],
  alternates: {
    canonical: "/projects/civil-billing-automation",
  },
  openGraph: {
    title: "Civil Engineering Billing Automation | QuickBooks Integration for Engineering Firms",
    description:
      "Engineering-grade billing automation platform for civil firms. Automated QuickBooks integration for progress billing, time tracking, and accurate invoicing.",
    url: "https://www.sanforddinkins.com/projects/civil-billing-automation",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Civil Billing Automation Platform",
  description:
    "Engineering-grade billing automation system for civil engineering firms. Integrates QuickBooks Online and QuickBooks Time for automated progress billing, time tracking, and accurate invoicing.",
  applicationCategory: "BusinessApplication",
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
  url: "https://www.sanforddinkins.com/projects/civil-billing-automation",
}

export default function CivilBillingAutomationPage() {
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
            Civil Billing & Engineering Workflow Automation
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Engineering-grade billing automation for civil engineering firms
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
            <div>
              <span className="font-medium text-foreground">Role:</span> System Designer & Developer
            </div>
            <div>
              <span className="font-medium text-foreground">Context:</span> Production Platform
            </div>
          </div>
        </header>

        {/* Problem Statement */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Problem Statement</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Civil engineering billing is structurally complex. Projects span months or years, involve multiple
              sub-scopes, and require progress billing that reflects contract terms, effort allocation, and
              phase-specific deliverables.
            </p>
            <p>
              Most firms rely on manual workflows: exporting time entries from timekeeping systems, organizing them by
              project and sub-project in spreadsheets, calculating billing summaries, and cross-referencing contract
              terms before generating invoices. This process is time-intensive, error-prone, and difficult to audit.
            </p>
            <p>
              QuickBooks Online—while widely used—lacks native engineering billing logic. Its progress invoicing
              features are limited, and QuickBooks Time integration does not automatically align time data with
              engineering contract structures. The result is a recurring administrative burden that creates bottlenecks
              during billing cycles.
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
              The platform bridges QuickBooks Online and QuickBooks Time, applying engineering-specific logic to
              transform raw time data into structured, reviewable billing summaries.
            </p>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Automated Time Retrieval</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Retrieves time entries by project and sub-project, filtering by date range and team member. Handles
                  QuickBooks Time API constraints and structures data for downstream processing.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Engineering-Specific Billing Summaries</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Groups time data by contract scope, task type, and billing classification. Generates summaries aligned
                  with engineering deliverables rather than generic timekeeping categories.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Progress Billing Logic</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Calculates percent complete, remaining contract balances, and unbilled amounts based on user-defined
                  contract structures and billing history. Works with projects lacking native QuickBooks progress fields.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Clean, Reviewable Reports</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Formats billing summaries for internal engineering review before invoice generation. Ensures accuracy,
                  prevents overbilling, and provides clear audit trails.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Optional Invoice Creation</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Pushes validated summaries directly into QuickBooks Online as invoices, eliminating manual re-entry
                  and reducing transcription errors.
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground italic">
              The system prioritizes clarity and auditability over feature density. Every calculation is traceable, and
              every summary is designed to be reviewed by a person before becoming an invoice.
            </p>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Technical Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Languages & Frameworks</h3>
              <p className="text-sm text-muted-foreground">TypeScript, Node.js, React, Next.js</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">APIs & Integrations</h3>
              <p className="text-sm text-muted-foreground">
                QuickBooks Online API, QuickBooks Time API, OAuth 2.0
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Infrastructure</h3>
              <p className="text-sm text-muted-foreground">Vercel, PostgreSQL, secure token management</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Development Approach</h3>
              <p className="text-sm text-muted-foreground">
                API-first design, structured data models, audit-focused architecture
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
              The platform replaces hours of manual reconciliation with a repeatable, auditable workflow. Billing cycles
              that previously required extensive spreadsheet work now occur in minutes, with fewer errors and better
              documentation.
            </p>
            <p>
              Engineering principals can review billing summaries in a clean, structured format before approving
              invoices. This improves accuracy, reduces billing disputes, and maintains the professional standard
              expected in client relationships.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>What this demonstrates:</strong> Systems thinking applied to operational problems, API integration
              expertise, understanding of real-world accounting constraints, and the ability to design tools that solve
              specific professional pain points without over-engineering.
            </p>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Skills Demonstrated
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Engineering Operations</Badge>
            <Badge>Billing Automation</Badge>
            <Badge>API Integration</Badge>
            <Badge>QuickBooks Development</Badge>
            <Badge>Systems Architecture</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React/Next.js</Badge>
            <Badge>OAuth 2.0</Badge>
            <Badge>Database Design</Badge>
            <Badge>Process Automation</Badge>
            <Badge>Audit Trail Design</Badge>
            <Badge>Domain-Specific Logic</Badge>
          </div>
        </section>

        {/* Links */}
        <section className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-border">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Links</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">External</h3>
              <a
                href="https://app.templateinvoices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors underline"
              >
                Join the Civil Billing waitlist →
              </a>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-border">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Related Projects</h2>
          <div className="grid gap-4">
            <Link
              href="/projects/site-civil-engineering"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">Site Civil Engineering & Land Development</h3>
              <p className="text-sm text-muted-foreground">
                Professional civil engineering services for land development projects
              </p>
            </Link>
            <Link
              href="/projects/surveying-automation"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">Land Surveying Automation & Technical Tools</h3>
              <p className="text-sm text-muted-foreground">
                Workflow automation for survey operations and billing integration
              </p>
            </Link>
            <Link
              href="/projects/systems-and-experiments"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">Systems Architecture & Experimental Tools</h3>
              <p className="text-sm text-muted-foreground">
                Additional automation and systems design projects
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
