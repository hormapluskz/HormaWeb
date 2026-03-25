import { useState } from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Story from './components/Story'
import Features from './components/Features'
import Lab from './components/Lab'
import Team from './components/Team'
import Contact from './components/Contact'
import Kit from './components/Kit'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#lab', label: 'Horma+ Lab' },
    { href: '#kit', label: 'Horma+ Kit' },
    { href: '#story', label: 'Story' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-[199] w-screen pl-4 pr-5 pt-4 transition-all duration-200 ease-in-out will-change-transform max-[991px]:px-0 max-[991px]:pt-0">
        <div
          className="max-w-[70rem] mx-auto rounded-full px-2 pl-8 z-[999] max-[991px]:rounded-none max-[991px]:px-6 max-[991px]:py-3.5 max-[479px]:px-5"
          style={{
            backgroundColor: '#000000b3',
            boxShadow: '0 1px 4px #0003, 0 7px 24px #0000001a',
            backdropFilter: 'blur(12px)'
          }}
        >
          {/* Main row */}
          <div className="flex items-center w-full h-14 max-[991px]:h-auto">
            <div className="flex items-center w-1/2">
              <span className="text-2xl font-sans font-bold tracking-tight text-white">
                Horma+
              </span>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex flex-1 justify-center items-center gap-6 group">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} className="text-white transition-colors duration-200 font-bold tracking-tight text-sm whitespace-nowrap group-hover:text-white/40 hover:!text-white" style={{ fontFamily: 'sans-serif' }}>
                  {label}
                </a>
              ))}
            </div>

            {/* Burger button (mobile) */}
            <button
              className="md:hidden ml-auto flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[198] flex flex-col justify-center px-8 group"
          style={{ backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)' }}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-white font-bold tracking-tight transition-all duration-200 group-hover:text-white/30 hover:!text-white"
              style={{ fontSize: '2.5rem', fontFamily: 'sans-serif' }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <Lab />
        <Kit/>
        <Story />
        <Team />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 glass border-t border-black/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="text-black/60 text-sm">
              &copy; 2026 <span className="font-bold" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Horma+</span>. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
