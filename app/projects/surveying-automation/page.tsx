import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Land Surveying Automation & Technical Tools",
  description: "Workflow automation and technical tools for land surveying operations, including job organization, time tracking, reporting, and structured data access.",
  keywords: ["land surveying", "survey automation", "workflow automation", "operations management", "surveying tools", "Sanford Dinkins"],
  openGraph: {
    title: "Land Surveying Automation & Technical Tools | Sanford Dinkins, PE",
    description: "Workflow automation and technical tools for land surveying operations, including job organization, time tracking, reporting, and structured data access.",
    url: "https://sanforddinkins.com/projects/surveying-automation",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Land Surveying Automation - Sanford Dinkins, PE",
      },
    ],
  },
}

export default function SurveyingAutomationPage() {
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
            Land Surveying Automation & Technical Tools
          </h1>
          <p className="text-xl text-muted-foreground">
            Operational efficiency tools for survey workflows
          </p>
        </header>

        {/* Context */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Context</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Land surveying involves coordinating field crews, managing equipment schedules, tracking job progress, and organizing technical deliverables across multiple concurrent projects. The work is deadline-sensitive and requires accurate documentation for legal and engineering use.
            </p>
            <p>
              Administrative overhead—job tracking, time allocation, report generation, and billing preparation—consumes significant time that would otherwise be spent on technical production. Most surveying firms rely on manual workflows and disconnected systems to manage these tasks.
            </p>
            <p>
              Survey data is also frequently needed by adjacent disciplines (civil engineering, planning, billing), but extracting structured information from survey systems often requires manual effort and reformatting.
            </p>
          </div>
        </section>

        {/* System / Approach */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">System / Approach</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              I have built automation tools tailored to land surveying operations, designed to reduce administrative burden and improve data accessibility across the firm.
            </p>
            <div className="pl-6 border-l-2 border-border space-y-4">
              <div>
                <h3 className="font-medium mb-2">Job & Project Organization</h3>
                <p className="text-muted-foreground text-sm">
                  Structured systems for tracking survey orders, project phases, and deliverable status. Automation reduces manual entry and ensures consistent job records.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Time & Effort Tracking</h3>
                <p className="text-muted-foreground text-sm">
                  Automated retrieval and organization of time data by survey order, crew, and equipment. Summaries are formatted for internal review and billing preparation.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Report Extraction & Summarization</h3>
                <p className="text-muted-foreground text-sm">
                  Tools that extract key information from survey reports and deliverables, making technical data accessible to non-surveying staff (project managers, engineers, billing administrators).
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Structured Data Access</h3>
                <p className="text-muted-foreground text-sm">
                  Systems that expose survey data in structured formats for downstream use in engineering workflows, billing systems, and project coordination tools.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm italic">
              These tools are designed to integrate with existing survey workflows rather than replace them. The focus is on reducing friction, not adding complexity.
            </p>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Outcomes</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              By automating repetitive administrative tasks, these tools allow survey staff to focus on technical work rather than data wrangling. Time tracking, reporting, and job organization no longer require manual spreadsheet maintenance.
            </p>
            <p>
              Structured data access improves coordination between surveying and adjacent disciplines. Engineers and project managers can retrieve survey information without requiring manual intervention from survey staff.
            </p>
            <p className="text-muted-foreground text-sm">
              The result is a more efficient operation with better visibility into project status, effort allocation, and deliverable timelines.
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
                <Badge variant="secondary">Land Surveying</Badge>
                <Badge variant="secondary">Workflow Automation</Badge>
                <Badge variant="secondary">Operations Management</Badge>
                <Badge variant="secondary">Data Integration</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">System Type</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Internal Tools</Badge>
                <Badge variant="outline">Process Automation</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Tools</h3>
              <p className="text-sm text-muted-foreground">
                Survey software integrations, time tracking systems, structured data extraction
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
