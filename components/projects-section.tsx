import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  {
    title: "Site Civil Engineering & Land Development",
    role: "Licensed Professional Engineer",
    focus: "Grading, drainage, utilities, and permitting",
    description:
      "Professional site civil engineering work including grading design, stormwater management, utilities coordination, and agency permitting for land development projects.",
    capabilities: [
      "Grading and drainage design",
      "Stormwater management systems",
      "Utilities coordination (water, sewer)",
      "Permitting and agency coordination",
      "Quality assurance and professional responsibility",
    ],
    note: "Licensed engineering work requiring technical precision, professional judgment, and accountability to public safety standards.",
    tags: ["Civil Engineering", "Land Development", "Professional Services"],
    link: "/projects/site-civil-engineering",
  },
  {
    title: "Civil Billing & Engineering Workflow Automation",
    role: "System designer & developer",
    focus: "Engineering billing accuracy, time tracking, and reporting",
    description:
      "I designed and built a civil billing platform that integrates QuickBooks Online and QuickBooks Time, automating workflows that are traditionally manual, error-prone, and spreadsheet-heavy.",
    capabilities: [
      "Automated retrieval of time entries by project and sub-project",
      "Engineering-specific billing summaries aligned with contract scopes",
      "Progress billing logic for projects without native QBO progress fields",
      "Clean, engineer-readable billing reports for internal review",
      "Optional invoice creation directly from validated summaries",
    ],
    note: "This system replaces hours of manual reconciliation with a repeatable, auditable process.",
    tags: ["Automation", "Finance", "Engineering Systems", "QuickBooks API"],
    link: "/projects/civil-billing-automation",
  },
  {
    title: "Land Surveying Automation & Technical Tools",
    role: "System architect & developer",
    focus: "Survey workflow efficiency and data handling",
    description: "I have built automation tools tailored to land surveying workflows, focusing on:",
    capabilities: [
      "Job and project data organization",
      "Time and effort tracking by survey order",
      "Report extraction and summarization",
      "Structured data access for engineering and billing use cases",
    ],
    note: "These tools reduce administrative overhead and allow technical staff to focus on production work rather than data wrangling.",
    tags: ["Automation", "Surveying", "Internal Tools"],
    link: "/projects/surveying-automation",
  },
  {
    title: "StudyGuidesAI",
    role: "Founder & system designer",
    focus: "Structured learning and AI-assisted study tools",
    description:
      "StudyGuidesAI is an educational platform designed to convert complex material into structured, digestible study guides. The system emphasizes clarity, hierarchy, and retention—principles directly informed by engineering documentation practices.",
    capabilities: [],
    note: "The platform integrates AI-assisted summarization with curated structure, avoiding the noise and inconsistency typical of generic content tools.",
    tags: ["SaaS", "AI", "Content Systems"],
    link: "/projects/studyguidesai",
  },
  {
    title: "QuickBooks API & MCP Server Development",
    role: "System designer & developer",
    focus: "Secure, structured API access for LLMs and internal tools",
    description:
      "I have designed MCP (Model Context Protocol) servers that expose QuickBooks Online and QuickBooks Time data in a controlled, queryable format. These systems enable:",
    capabilities: [
      "Natural-language access to accounting and time data",
      "Secure token handling without fragile state",
      "Reusable tooling for desktop and web applications",
    ],
    note: "This work bridges accounting systems with modern AI tooling while maintaining auditability and security.",
    tags: ["APIs", "Automation", "Accounting Systems", "MCP"],
    link: "/projects/systems-and-experiments",
  },
  {
    title: "Internal Tools & Experimental Systems",
    role: "",
    focus: "",
    description: "In addition to production platforms, I regularly build internal tools to:",
    capabilities: [
      "Automate repetitive engineering tasks",
      "Generate structured reports and summaries",
      "Reduce coordination overhead",
      "Improve data visibility across teams",
    ],
    note: "Some tools remain internal by design; others evolve into standalone products.",
    tags: ["Internal Tools", "Automation", "Systems Design"],
    link: "/projects/systems-and-experiments",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-zinc-950 noise-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3 sm:mb-4 font-mono">Projects & Systems</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-zinc-100 tracking-tight mb-6 sm:mb-8">
            Digital Tools & Automation
          </h2>
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              In parallel with my engineering practice, I design and build digital systems that remove friction from
              professional workflows—particularly in engineering, accounting, billing, and technical documentation.
            </p>
            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
              These are not experiments. They are working systems built to solve real problems I encountered firsthand.
            </p>
            <p className="text-sm sm:text-base text-zinc-200 font-medium">Same engineering mindset. Different medium.</p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="block">
              <Card className="group bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/80 hover:border-zinc-700/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] cursor-pointer">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl font-medium text-zinc-100">{project.title}</CardTitle>
                  {(project.role || project.focus) && (
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1 text-xs sm:text-sm text-zinc-500 mt-2">
                      {project.role && <span>Role: {project.role}</span>}
                      {project.focus && <span>Focus: {project.focus}</span>}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">{project.description}</p>

                  {project.capabilities.length > 0 && (
                    <ul className="space-y-2 pl-4">
                      {project.capabilities.map((cap, capIndex) => (
                        <li key={capIndex} className="text-sm text-zinc-500 flex items-start gap-3">
                          <span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.note && <p className="text-sm text-zinc-600 italic">{project.note}</p>}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal bg-zinc-800 text-zinc-400 border-zinc-700/50 hover:bg-zinc-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Portfolio Gateway */}
        <div className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-14 md:pt-16 border-t border-zinc-800/50">
          <h3 className="text-lg sm:text-xl font-medium text-zinc-100 mb-4 sm:mb-6">Systems & Platforms</h3>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mb-6 sm:mb-8">
            A growing collection of applications, tools, and platforms spanning:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-20 gap-y-2 sm:gap-y-3 max-w-2xl">
            {[
              "Engineering billing and reporting",
              "Surveying automation",
              "Accounting integrations",
              "AI-assisted documentation",
              "Internal workflow systems",
            ].map((item, index) => (
              <li key={index} className="text-zinc-500 text-xs sm:text-sm flex items-start gap-3">
                <span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-zinc-600 text-xs sm:text-sm mt-6 sm:mt-8">
            This site serves as a hub, with individual projects evolving independently as needs arise.
          </p>
        </div>
      </div>
    </section>
  )
}
