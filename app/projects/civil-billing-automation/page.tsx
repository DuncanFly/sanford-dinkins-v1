import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Civil Billing & Engineering Workflow Automation",
  description: "Automated civil engineering billing system integrating QuickBooks Online and QuickBooks Time for accurate progress billing, time tracking, and engineering-specific reporting.",
  keywords: ["civil billing", "engineering automation", "QuickBooks integration", "progress billing", "civil engineering workflow", "Sanford Dinkins"],
  openGraph: {
    title: "Civil Billing & Engineering Workflow Automation | Sanford Dinkins, PE",
    description: "Automated civil engineering billing system integrating QuickBooks Online and QuickBooks Time for accurate progress billing, time tracking, and engineering-specific reporting.",
    url: "https://sanforddinkins.com/projects/civil-billing-automation",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Civil Billing Automation - Sanford Dinkins, PE",
      },
    ],
  },
}

export default function CivilBillingAutomationPage() {
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
            Civil Billing & Engineering Workflow Automation
          </h1>
          <p className="text-xl text-muted-foreground">
            Engineering-grade billing automation for civil firms
          </p>
        </header>

        {/* Context */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Context</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Civil engineering billing is structurally complex. Projects span months or years, involve multiple sub-scopes, and require progress billing that reflects contract terms, effort allocation, and phase-specific deliverables.
            </p>
            <p>
              Most firms rely on manual workflows: exporting time entries from timekeeping systems, organizing them by project and sub-project in spreadsheets, calculating billing summaries, and cross-referencing contract terms before generating invoices. This process is time-intensive, error-prone, and difficult to audit.
            </p>
            <p>
              QuickBooks Online—while widely used—lacks native engineering billing logic. Its progress invoicing features are limited, and QuickBooks Time integration does not automatically align time data with engineering contract structures. The result is a recurring administrative burden that creates bottlenecks during billing cycles.
            </p>
          </div>
        </section>

        {/* System / Approach */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">System / Approach</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              I designed a billing automation platform that bridges QuickBooks Online and QuickBooks Time, applying engineering-specific logic to transform raw time data into structured, reviewable billing summaries.
            </p>
            <div className="pl-6 border-l-2 border-border space-y-4">
              <div>
                <h3 className="font-medium mb-2">Automated Time Retrieval</h3>
                <p className="text-muted-foreground text-sm">
                  The system retrieves time entries by project and sub-project, filtering by date range and team member. It handles QuickBooks Time API constraints and structures data for downstream processing.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Engineering-Specific Billing Summaries</h3>
                <p className="text-muted-foreground text-sm">
                  Time data is grouped by contract scope, task type, and billing classification. The system generates summaries aligned with engineering deliverables rather than generic timekeeping categories.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Progress Billing Logic</h3>
                <p className="text-muted-foreground text-sm">
                  For projects without native QuickBooks progress fields, the system calculates percent complete, remaining contract balances, and unbilled amounts based on user-defined contract structures and billing history.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Clean, Reviewable Reports</h3>
                <p className="text-muted-foreground text-sm">
                  Billing summaries are formatted for internal engineering review before invoice generation. This ensures accuracy, prevents overbilling, and provides clear audit trails.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Optional Invoice Creation</h3>
                <p className="text-muted-foreground text-sm">
                  Once validated, summaries can be pushed directly into QuickBooks Online as invoices, eliminating manual re-entry and reducing transcription errors.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm italic">
              The system prioritizes clarity and auditability over feature density. Every calculation is traceable, and every summary is designed to be reviewed by a person before becoming an invoice.
            </p>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Outcomes</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              The platform replaces hours of manual reconciliation with a repeatable, auditable workflow. Billing cycles that previously required extensive spreadsheet work now occur in minutes, with fewer errors and better documentation.
            </p>
            <p>
              Engineering principals can review billing summaries in a clean, structured format before approving invoices. This improves accuracy, reduces billing disputes, and maintains the professional standard expected in client relationships.
            </p>
            <p className="text-muted-foreground text-sm">
              By automating low-value administrative tasks, the system allows engineers to focus on technical work rather than billing reconciliation.
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
                <Badge variant="secondary">Engineering Operations</Badge>
                <Badge variant="secondary">Billing Automation</Badge>
                <Badge variant="secondary">Accounting Integration</Badge>
                <Badge variant="secondary">Workflow Systems</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">System Type</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Automation Platform</Badge>
                <Badge variant="outline">API Integration</Badge>
                <Badge variant="outline">Engineering Tool</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Tools</h3>
              <p className="text-sm text-muted-foreground">
                QuickBooks Online API, QuickBooks Time API, TypeScript, secure token management
              </p>
            </div>
          </div>
        </section>

        {/* External Link */}
        <footer className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">
            This system is being developed as a standalone product for civil engineering firms.
          </p>
          <a
            href="https://www.civilbilling.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground hover:text-muted-foreground transition-colors underline decoration-border hover:decoration-foreground"
          >
            Join the Civil Billing waitlist →
          </a>
        </footer>
      </article>
    </main>
  )
}
