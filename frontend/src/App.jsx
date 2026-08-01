import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Stats from './components/Stats'
import HormoneDescription from './components/HormoneDescription'
import Features from './components/Features'
import Lab from './components/Lab'
import Team from './components/Team'
import Contact from './components/Contact'
import Kit from './components/Kit'
import WhatsInside from './components/WhatsInside'
import FoundersPage from './components/FoundersPage'
import useScrollReveal from './hooks/useScrollReveal'
import HowItWorks from './components/HowItWorks'

function LandingPage() {
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

  const mainLinks = navLinks.slice(0, 2) ;  
  const menuLinks = navLinks;               


  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Navigation */}
      <>
      <nav className={`fixed inset-x-0 top-0 z-[999] transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] `}>
        <div
          className={`
            relative mx-auto flex items-center h-14 overflow-hidden
            transition-[max-width,border-radius,padding,gap,background-color,backdrop-filter,box-shadow] 
            duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${scrolled
              ? 'max-w-[56rem] rounded-full bg-black/60 backdrop-blur-[1.5rem] py-1.5 pl-6 pr-1.5 shadow-[0_1px_4px_#0003,0_7px_24px_#0000001a]'
              : 'max-w-full rounded-none bg-[#1D212B] py-4 px-6 lg:px-12'
            }
            max-lg:max-w-full max-lg:rounded-none max-lg:bg-[#1D212B] max-lg:py-3.5 max-lg:px-5
          `}
        >

          {/* === Логотип по центру (desktop) === */}
          <a
            href="/"
            className={`
              text-white font-bold tracking-tight whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-[1]
              text-xl lg:text-2xl
              ${scrolled ? 'lg:scale-[0.85]' : 'lg:scale-100'}
            `}
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Horma+
          </a>

          {/* Левые ссылки */}
          <div className="hidden lg:flex items-center group/left">
            {mainLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white text-sm font-medium px-3 py-2 transition-opacity duration-150 group-hover/left:opacity-50 hover:!opacity-100"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA справа */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-white text-[#1D212B] text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
            >
              Priority Access
            </a>
          </div>

          {/* 9-dot гамбургер */}
          <button
            className="ml-auto w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
          >
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
              <circle cx="2" cy="2" r="2" fill="white" />
              <circle cx="10" cy="2" r="2" fill="white" />
              <circle cx="18" cy="2" r="2" fill="white" />
              <circle cx="2" cy="11" r="2" fill="white" />
              <circle cx="10" cy="11" r="2" fill="white" />
              <circle cx="18" cy="11" r="2" fill="white" />
              <circle cx="2" cy="20" r="2" fill="white" />
              <circle cx="10" cy="20" r="2" fill="white" />
              <circle cx="18" cy="20" r="2" fill="white" />
            </svg>
          </button>
        </div>
      </nav>

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
    </>
    

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/founders" element={<FoundersPage />} />
    </Routes>
  )
}

export default App
