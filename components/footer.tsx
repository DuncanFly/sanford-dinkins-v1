import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-[280px_1fr_1fr] gap-8 sm:gap-10 md:gap-16">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-medium text-zinc-100 mb-2 text-sm sm:text-base">Sanford Dinkins, PE</p>
            <p className="text-xs sm:text-sm text-zinc-500 font-mono">Civil Engineering · Systems Design · Automation</p>
          </div>

          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-600 mb-4 sm:mb-6 font-mono">Disciplines</p>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>Site Civil Engineering</li>
              <li>Land Development</li>
              <li>Systems Design</li>
              <li>Automation</li>
            </ul>
          </div>

          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-600 mb-4 sm:mb-6 font-mono">Connect</p>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  href="mailto:sbdinkins@gmail.com"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-zinc-800/30">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Sanford Dinkins, PE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
