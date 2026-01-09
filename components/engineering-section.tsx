const areasOfPractice = [
  "Site civil land development",
  "Grading and earthwork design",
  "Stormwater management and drainage systems",
  "Water and sewer utilities coordination",
  "Permitting, entitlements, and agency approvals",
  "Consultant coordination and technical QA/QC",
]

export function EngineeringSection() {
  return (
    <section id="experience" className="bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-4 font-mono">Engineering Experience</p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight">Site Civil Engineering</h2>
        </div>

        {/* Intro paragraphs */}
        <div className="max-w-3xl space-y-6 mb-24">
          <p className="text-lg text-zinc-800 leading-relaxed">
            I am a licensed civil engineer with hands-on experience delivering site civil land development projects from
            concept through permitting and execution. My work spans grading, drainage, stormwater management, utilities
            coordination, and regulatory approvals, with a strong emphasis on constructability, compliance, and risk
            reduction.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            I routinely work at the intersection of design constraints, jurisdictional requirements, and real-world
            execution—coordinating across disciplines, responding to review comments, and refining plans to meet both
            technical and regulatory standards.
          </p>
        </div>

        {/* Areas of Practice */}
        <div className="mb-24">
          <h3 className="text-xl font-medium text-zinc-900 mb-8">Areas of Practice</h3>
          <ul className="grid md:grid-cols-2 gap-x-20 gap-y-4">
            {areasOfPractice.map((area, index) => (
              <li key={index} className="text-zinc-600 flex items-start gap-4">
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2.5 shrink-0" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Approach & Philosophy */}
        <div className="grid md:grid-cols-2 gap-20 pt-16 border-t border-zinc-200">
          <div>
            <h3 className="text-xl font-medium text-zinc-900 mb-6">Professional Approach</h3>
            <div className="space-y-4">
              <p className="text-zinc-600 leading-relaxed">
                My engineering work is grounded in clarity, accountability, and systems thinking. I focus on producing
                plans and calculations that are not only technically sound, but also efficient to review, build, and
                maintain.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Licensure is not a formality—it reflects responsibility. I approach every project with that
                responsibility in mind.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-zinc-900 mb-6">Engineering Philosophy</h3>
            <div className="space-y-4">
              <p className="text-zinc-800 leading-relaxed font-medium">
                Engineering is ultimately about decision-making under constraint.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Whether addressing runoff limits, utility conflicts, grading balance, or permitting requirements, I
                prioritize solutions that are technically correct, clearly documented, and practical to implement. The
                same disciplined thinking that governs my engineering work also informs the systems and tools I build
                beyond traditional design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
