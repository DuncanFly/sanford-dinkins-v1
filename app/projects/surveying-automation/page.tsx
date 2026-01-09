import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Land Surveying Workflow Automation | Survey Operations Management Software",
  description:
    "Workflow automation tools for land surveying firms. Automated job organization, survey time tracking, report generation, and structured data management. Reduces administrative overhead for survey operations and improves coordination with engineering teams.",
  keywords: [
    "land surveying software",
    "survey workflow automation",
    "surveying operations management",
    "survey time tracking",
    "survey job management",
    "surveying automation tools",
    "survey data management",
    "survey reporting software",
    "surveying firm software",
  ],
  alternates: {
    canonical: "/projects/surveying-automation",
  },
  openGraph: {
    title: "Land Surveying Workflow Automation | Survey Operations Management Software",
    description:
      "Workflow automation tools for land surveying firms. Automated job organization, survey time tracking, report generation, and structured data management.",
    url: "https://www.sanforddinkins.com/projects/surveying-automation",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Land Surveying Automation Tools",
  description:
    "Workflow automation and operations management tools for land surveying firms. Automates job organization, time tracking, report generation, and data integration with engineering systems.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  creator: {
    "@type": "Person",
    name: "Sanford Dinkins",
    jobTitle: "Professional Civil Engineer",
  },
  url: "https://www.sanforddinkins.com/projects/surveying-automation",
}

export default function SurveyingAutomationPage() {
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
            Land Surveying Automation & Technical Tools
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">Operational efficiency tools for survey workflows</p>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
            <div>
              <span className="font-medium text-foreground">Role:</span> System Architect & Developer
            </div>
            <div>
              <span className="font-medium text-foreground">Context:</span> Internal Tools
            </div>
          </div>
        </header>

        {/* Problem Statement */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Problem Statement</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Land surveying involves coordinating field crews, managing equipment schedules, tracking job progress, and
              organizing technical deliverables across multiple concurrent projects. The work is deadline-sensitive and
              requires accurate documentation for legal and engineering use.
            </p>
            <p>
              Administrative overhead—job tracking, time allocation, report generation, and billing preparation—consumes
              significant time that would otherwise be spent on technical production. Most surveying firms rely on
              manual workflows and disconnected systems to manage these tasks.
            </p>
            <p>
              Survey data is frequently needed by adjacent disciplines (civil engineering, planning, billing), but
              extracting structured information from survey systems often requires manual effort and reformatting. This
              creates coordination friction and delays project workflows.
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
              Purpose-built automation tools address these operational inefficiencies by reducing manual data handling
              and improving cross-discipline coordination.
            </p>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Job & Project Organization</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Structured systems for tracking survey orders, project phases, and deliverable status. Automation
                  reduces manual entry and ensures consistent job records across the firm.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Time & Effort Tracking</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Automated retrieval and organization of time data by survey order, crew, and equipment. Summaries are
                  formatted for internal review and billing preparation, eliminating manual spreadsheet reconciliation.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Report Extraction & Summarization</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Tools that extract key information from survey reports and deliverables, making technical data
                  accessible to non-surveying staff such as project managers, engineers, and billing administrators.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Structured Data Access</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Systems that expose survey data in structured formats for downstream use in engineering workflows,
                  billing systems, and project coordination tools. Reduces manual data requests and improves
                  cross-discipline efficiency.
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground italic">
              These tools integrate with existing survey workflows rather than replace them. The focus is on reducing
              friction, not adding complexity.
            </p>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Technical Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Languages & Frameworks</h3>
              <p className="text-sm text-muted-foreground">TypeScript, Node.js, Python</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Data Integration</h3>
              <p className="text-sm text-muted-foreground">
                Survey software APIs, time tracking systems, structured data extraction
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Development Approach</h3>
              <p className="text-sm text-muted-foreground">
                Workflow-first design, minimal user friction, emphasis on data reliability
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
              By automating repetitive administrative tasks, these tools allow survey staff to focus on technical work
              rather than data wrangling. Time tracking, reporting, and job organization no longer require manual
              spreadsheet maintenance.
            </p>
            <p>
              Structured data access improves coordination between surveying and adjacent disciplines. Engineers and
              project managers can retrieve survey information without requiring manual intervention from survey staff.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>What this demonstrates:</strong> Understanding of operations management, cross-discipline
              coordination requirements, data integration challenges, and the ability to design tools that solve
              workflow problems without disrupting existing processes.
            </p>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Skills Demonstrated
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Workflow Automation</Badge>
            <Badge>Survey Operations</Badge>
            <Badge>Data Integration</Badge>
            <Badge>API Development</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
            <Badge>Operations Management</Badge>
            <Badge>Cross-Discipline Coordination</Badge>
            <Badge>Data Extraction</Badge>
            <Badge>Process Optimization</Badge>
            <Badge>Systems Thinking</Badge>
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
                Professional civil engineering services requiring survey coordination
              </p>
            </Link>
            <Link
              href="/projects/civil-billing-automation"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">Civil Engineering Billing Automation</h3>
              <p className="text-sm text-muted-foreground">
                Engineering billing system with similar time tracking and data integration challenges
              </p>
            </Link>
            <Link
              href="/projects/systems-and-experiments"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">Systems Architecture & Experimental Tools</h3>
              <p className="text-sm text-muted-foreground">
                Additional internal tools and automation projects
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
