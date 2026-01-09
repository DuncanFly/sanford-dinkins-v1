import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Site Civil Engineering & Land Development | Sanford Dinkins, PE",
  description: "Professional site civil engineering and land development experience including grading, drainage, stormwater systems, utilities coordination, permitting, and agency coordination.",
}

export default function SiteCivilEngineeringPage() {
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
            Site Civil Engineering & Land Development
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional engineering for grading, drainage, utilities, and permitting
          </p>
        </header>

        {/* Context */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Context</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Site civil engineering is the process of transforming raw land into functional, safe, and legally compliant development parcels. It requires coordination across multiple disciplines: grading and earthwork, stormwater management, utility infrastructure, environmental review, and agency permitting.
            </p>
            <p>
              Each project operates within a regulatory framework that varies by jurisdiction, parcel history, and environmental constraints. The work demands technical precision, professional judgment, and accountability to public safety standards.
            </p>
            <p>
              As a licensed Professional Engineer, I have prepared plans, calculations, and permit applications for site development projects requiring coordination with local agencies, utility providers, and construction teams.
            </p>
          </div>
        </section>

        {/* System / Approach */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">System / Approach</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Site civil engineering involves systematic planning and iterative refinement. Key activities include:
            </p>
            <div className="pl-6 border-l-2 border-border space-y-4">
              <div>
                <h3 className="font-medium mb-2">Grading & Drainage Design</h3>
                <p className="text-muted-foreground text-sm">
                  Establishing functional site elevations, managing stormwater runoff, and ensuring proper surface flow patterns that comply with municipal and environmental standards.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Stormwater Management Systems</h3>
                <p className="text-muted-foreground text-sm">
                  Designing detention basins, bioswales, and conveyance systems to meet peak flow requirements, water quality standards, and downstream impact mitigation criteria.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Utilities Coordination</h3>
                <p className="text-muted-foreground text-sm">
                  Planning water distribution, sanitary sewer collection, and storm drainage infrastructure. Coordinating with utility providers and ensuring constructability.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Permitting & Agency Coordination</h3>
                <p className="text-muted-foreground text-sm">
                  Preparing technical reports, responding to agency comments, and navigating entitlement processes. Managing timelines, resubmittals, and compliance documentation.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Quality Assurance & Professional Responsibility</h3>
                <p className="text-muted-foreground text-sm">
                  Performing engineering calculations, reviewing plans for accuracy and code compliance, and maintaining professional liability standards. Coordinating internal QA/QC reviews before submittal.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm italic">
              This work is iterative, detail-oriented, and requires understanding both regulatory intent and practical construction constraints.
            </p>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-mono">Outcomes</h2>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              The outcome of site civil engineering work is a permitted, constructible design that meets regulatory requirements and can be built within budget and schedule constraints.
            </p>
            <p>
              Successful projects balance technical precision with agency coordination, client communication, and field constructability. Plans must be clear, calculations must be defensible, and the design must account for real-world construction tolerances.
            </p>
            <p className="text-muted-foreground text-sm">
              This discipline reinforces the importance of structured processes, documentation, and professional accountability—principles that carry over into all technical work.
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
                <Badge variant="secondary">Civil Engineering</Badge>
                <Badge variant="secondary">Land Development</Badge>
                <Badge variant="secondary">Grading & Drainage</Badge>
                <Badge variant="secondary">Stormwater Management</Badge>
                <Badge variant="secondary">Utilities</Badge>
                <Badge variant="secondary">Permitting</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">System Type</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Engineering Practice</Badge>
                <Badge variant="outline">Professional Services</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Tools</h3>
              <p className="text-sm text-muted-foreground">
                AutoCAD Civil 3D, Hydraflow, spreadsheet modeling, technical review standards
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
