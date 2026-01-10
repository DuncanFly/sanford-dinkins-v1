import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Site Civil Engineering & Land Development Services | Professional Engineer",
  description:
    "Licensed PE with site civil engineering expertise in grading design, drainage systems, stormwater management, utilities coordination, and municipal permitting for land development projects. Professional civil engineering services with quality assurance and regulatory compliance.",
  keywords: [
    "site civil engineering",
    "land development engineer",
    "grading and drainage design",
    "stormwater management systems",
    "civil engineering permitting",
    "utilities coordination",
    "professional engineer land development",
    "site development PE",
    "civil engineering QA/QC",
  ],
  alternates: {
    canonical: "/projects/site-civil-engineering",
  },
  openGraph: {
    title: "Site Civil Engineering & Land Development Services | Professional Engineer",
    description:
      "Licensed PE with site civil engineering expertise in grading design, drainage systems, stormwater management, utilities coordination, and municipal permitting for land development projects.",
    url: "https://sdinkins.com/projects/site-civil-engineering",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Site Civil Engineering & Land Development",
  description:
    "Professional civil engineering services for land development projects including grading, drainage, stormwater management, utilities coordination, and permitting.",
  provider: {
    "@type": "Person",
    name: "Sanford Dinkins",
    jobTitle: "Professional Civil Engineer",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      name: "Professional Engineer (PE)",
    },
  },
  serviceType: "Civil Engineering",
  areaServed: "United States",
  url: "https://sdinkins.com/projects/site-civil-engineering",
}

export default function SiteCivilEngineeringPage() {
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
            Site Civil Engineering & Land Development
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Professional engineering for grading, drainage, stormwater, utilities, and permitting
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
            <div>
              <span className="font-medium text-foreground">Role:</span> Licensed Professional Engineer
            </div>
            <div>
              <span className="font-medium text-foreground">Context:</span> Professional Services
            </div>
          </div>
        </header>

        {/* Problem Statement */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Problem Statement</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Site civil engineering is the process of transforming raw land into functional, safe, and legally
              compliant development parcels. Each project must satisfy multiple competing requirements: regulatory
              compliance, constructability, budget constraints, schedule pressures, and public safety standards.
            </p>
            <p>
              The work operates within a fragmented regulatory framework that varies by jurisdiction, parcel history,
              environmental sensitivity, and infrastructure capacity. Designers must coordinate across disciplines—
              grading, drainage, utilities, environmental review, permitting—while maintaining technical precision and
              professional accountability.
            </p>
            <p>
              Existing solutions fail when they prioritize speed over accuracy, lack engineering judgment, or neglect
              coordination between design, agency review, and field construction. The result is plan resubmittals, cost
              overruns, and constructability failures.
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
              Professional civil engineering services address these challenges through systematic planning, iterative
              refinement, and disciplined quality assurance.
            </p>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Grading & Drainage Design</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Establish functional site elevations, manage stormwater runoff, and ensure proper surface flow
                  patterns that comply with municipal and environmental standards. Design must balance earthwork
                  quantities, constructability, and regulatory requirements.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Stormwater Management Systems</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Design detention basins, bioswales, and conveyance systems to meet peak flow requirements, water
                  quality standards, and downstream impact mitigation criteria. Systems must be maintainable and
                  compliant with NPDES permits.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Utilities Coordination</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Plan water distribution, sanitary sewer collection, and storm drainage infrastructure. Coordinate
                  with utility providers, satisfy hydraulic capacity requirements, and ensure constructability within
                  site constraints.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Permitting & Agency Coordination</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Prepare technical reports, respond to agency comments, and navigate entitlement processes. Manage
                  timelines, resubmittals, and compliance documentation to maintain project schedules.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quality Assurance & Professional Responsibility</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Perform engineering calculations, review plans for accuracy and code compliance, and maintain
                  professional liability standards. Coordinate internal QA/QC reviews before submittal to minimize
                  errors and resubmittal risk.
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground italic">
              This approach is iterative, detail-oriented, and requires understanding both regulatory intent and
              practical construction constraints.
            </p>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">Technical Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Design Software</h3>
              <p className="text-sm text-muted-foreground">AutoCAD Civil 3D, Hydraflow, spreadsheet modeling</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Analysis Tools</h3>
              <p className="text-sm text-muted-foreground">
                Hydraulic modeling, earthwork calculations, stormwater analysis
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 text-foreground">Standards & Codes</h3>
              <p className="text-sm text-muted-foreground">
                Municipal design standards, state permitting requirements, environmental regulations
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
              The outcome of professional civil engineering work is a permitted, constructible design that meets
              regulatory requirements and can be built within budget and schedule constraints.
            </p>
            <p>
              Successful projects balance technical precision with agency coordination, client communication, and field
              constructability. Plans must be clear, calculations must be defensible, and the design must account for
              real-world construction tolerances.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>What this demonstrates:</strong> Professional judgment, systems thinking, regulatory fluency, and
              the ability to coordinate complex technical work under strict accountability standards. These principles
              carry over into all technical disciplines.
            </p>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Skills Demonstrated
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Site Civil Engineering</Badge>
            <Badge>Land Development</Badge>
            <Badge>Grading & Drainage Design</Badge>
            <Badge>Stormwater Management</Badge>
            <Badge>Utilities Coordination</Badge>
            <Badge>Municipal Permitting</Badge>
            <Badge>Agency Coordination</Badge>
            <Badge>Engineering QA/QC</Badge>
            <Badge>Technical Documentation</Badge>
            <Badge>Professional Accountability</Badge>
            <Badge>Systems Thinking</Badge>
            <Badge>Regulatory Compliance</Badge>
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
                Engineering-grade billing system for civil firms with QuickBooks integration
              </p>
            </Link>
            <Link
              href="/projects/surveying-automation"
              className="block p-4 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <h3 className="font-medium mb-1">Land Surveying Automation & Technical Tools</h3>
              <p className="text-sm text-muted-foreground">
                Workflow automation for survey operations and coordination with engineering teams
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
