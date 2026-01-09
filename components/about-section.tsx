export function AboutSection() {
  return (
    <section id="about" className="bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 sm:gap-12 md:gap-16">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-mono mb-6 md:mb-0">About</p>
          </div>

          <div className="max-w-2xl space-y-6 sm:space-y-8">
            <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed">
              I am a licensed Professional Engineer with a background in site civil land development and a parallel
              practice in building technical systems.
            </p>
            <p className="text-lg sm:text-xl text-zinc-900 leading-relaxed font-medium">
              My work is driven by a consistent principle: well-designed systems reduce risk, ambiguity, and wasted
              effort.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Whether designing stormwater infrastructure or automating an engineering billing workflow, I apply the
              same disciplined thinking—clear inputs, defensible logic, and outputs that people can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
