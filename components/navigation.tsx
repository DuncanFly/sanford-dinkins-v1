import Link from "next/link"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="text-zinc-100 font-medium tracking-tight text-sm sm:text-base">
          Sanford Dinkins, PE
        </Link>
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm">
          <Link href="#experience" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            <span className="hidden sm:inline">Experience</span>
            <span className="sm:hidden">Work</span>
          </Link>
          <Link href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            Projects
          </Link>
          <Link href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:inline">
            About
          </Link>
          <Link href="#contact" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
