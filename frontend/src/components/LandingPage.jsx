import { useState, useEffect } from 'react'
import Hero from './Hero'
import Stats from './Stats'
import HormoneDescription from './HormoneDescription'
import Features from './Features'
import Lab from './Lab'
import Team from './Team'
import Contact from './Contact'
import Kit from './Kit'
import WhatsInside from './WhatsInside'
import FoundersPage from './FoundersPage'
import useScrollReveal from '../hooks/useScrollReveal'
import HowItWorks from './HowItWorks'
import Navbar from './Navbar'
import Comparison from './Comparison'
import Clinicians from './Clinicians/Clinicians'

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#lab', label: 'Horma+ Lab' },
    { href: '#kit', label: 'Horma+ Kit' },
    { href: '#inside', label: 'Inside' },
    { href: '#team', label: 'Team' },
  ];

  const mainLinks = navLinks.slice(0, 3) ;  
  const menuLinks = navLinks;               


  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-[GalderGlynn]">
      {/* Navigation */}
      
      <Navbar scrolled={scrolled} mainLinks={mainLinks} setMenuOpen={setMenuOpen} />

      {/* Оверлей */}
      <div
        className={`fixed inset-0 bg-black/50 z-[998] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Мобильное меню */}
      <div
        className={`fixed top-0 right-0 h-full w-[90vw] lg:w-[400px] min-w-[20rem] bg-white z-[999] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-l-2xl ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
          aria-label="Close"
        >
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
            <circle cx="2" cy="2" r="2" fill="black" />
            <circle opacity="0.1" cx="10" cy="2" r="2" fill="black" />
            <circle cx="18" cy="2" r="2" fill="black" />
            <circle opacity="0.1" cx="2" cy="11" r="2" fill="black" />
            <circle cx="10" cy="11" r="2" fill="black" />
            <circle opacity="0.1" cx="18" cy="11" r="2" fill="black" />
            <circle cx="2" cy="20" r="2" fill="black" />
            <circle opacity="0.1" cx="10" cy="20" r="2" fill="black" />
            <circle cx="18" cy="20" r="2" fill="black" />
          </svg>
        </button>

        <div className="flex flex-col gap-1 mt-20 px-5">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-black text-xl font-medium py-3 border-b border-gray-100 transition-opacity hover:opacity-70"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="mt-auto p-5">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full py-3.5 rounded-full bg-[#1D212B] text-white text-center font-medium text-sm"
          >
            Priority Access
          </a>
        </div>
      </div>
    
    

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div
          className="menu-enter md:hidden fixed inset-0 z-[198] flex flex-col justify-start pt-24 px-8 group"
          style={{ backgroundColor: 'rgba(29,33,43,0.97)', backdropFilter: 'blur(20px)' }}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-white font-bold tracking-tight transition-all duration-200 group-hover:text-white/30 hover:!text-white"
              style={{ fontSize: '1.6rem', fontFamily: 'sans-serif' }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-white font-bold tracking-tight transition-all duration-200 group-hover:text-white/30 hover:!text-white"
            style={{ fontSize: '1.6rem', fontFamily: 'sans-serif' }}
          >
            Priority Access
          </a>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <div className="reveal"><Stats /></div>
        <div className="reveal"><HormoneDescription /></div>
        <div className="reveal"><Features /></div>
        <div className="reveal"><Lab /></div>
        <div className="reveal"><Kit /></div>
        <div className="reveal"><WhatsInside /></div>
        <div className="reveal"><Team /></div>
        <div className="reveal"><HowItWorks /></div>
        <div className="reveal"><Comparison /></div>
        <div className="reveal"><Clinicians /></div>
        <div className="reveal"><Contact /></div>
        
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12" style={{ backgroundColor: '#1D212B' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              &copy; 2026 <span className="font-bold" style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#ffffff' }}>Horma+</span>. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}