import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS, SOCIAL_LINKS } from '@/data/constants'
import { NavMenu } from '@/components/common/NavMenu'

export function SiteLayout({
  children
}: {
  children: (onNavigate: (id: string) => void) => React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const yOffset = 100
    const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })

    setMenuOpen(false)
  }


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="px-4 h-16 flex items-center justify-between">
          <div className="text-lg font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              Dev
            </span>
            <span className="text-foreground/40">.</span>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu backdrop"
          />

          <aside className="absolute inset-y-0 left-0 w-80 max-w-[85vw] border-r border-border/50 bg-background/95 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="text-xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                  Dev
                </span>
                <span className="text-foreground/40">.</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <NavMenu items={NAV_ITEMS} onNavigate={scrollToSection} />
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:fixed md:inset-y-0 md:left-0 md:w-64 lg:w-72 border-r border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="flex flex-col w-full p-6">
          <div className="mb-10">
            <div className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Dev
              </span>
              <span className="text-foreground/40">.</span>
            </div>
            <p className="mt-2 text-sm text-foreground/50 leading-relaxed">
              Portfolio & case studies
            </p>
          </div>

          <NavMenu items={NAV_ITEMS} onNavigate={scrollToSection} />

          <div className="mt-auto pt-8 border-t border-border/30">
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      aria-label={label}
                  >
                    <Icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                  </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className="md:pl-64 lg:pl-72">{children(scrollToSection)}</main>
    </div>
  )
}

