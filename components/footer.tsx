import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[280px_1fr_1fr] gap-16">
          <div>
            <p className="font-medium text-zinc-100 mb-2">Sanford Dinkins, PE</p>
            <p className="text-sm text-zinc-500 font-mono">Civil Engineering · Systems Design · Automation</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-600 mb-6 font-mono">Disciplines</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>Site Civil Engineering</li>
              <li>Land Development</li>
              <li>Systems Design</li>
              <li>Automation</li>
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-600 mb-6 font-mono">Connect</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="mailto:contact@sanforddinkins.com"
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

        <div className="mt-20 pt-8 border-t border-zinc-800/30">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Sanford Dinkins, PE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
