import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import FoundersPage from './components/FoundersPage'
import WhatWeTest from './components/What_We_Test/WhatWeTest'
// import WhatWeTest from './components/WhatWeTest/WhatWeTest'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import { navLinks } from './data/navLinks'


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  

  const mainLinks = navLinks.slice(0, 3) ;  
  const menuLinks = navLinks;     

  const handleNavClick = (event, href) => {
  if (!href?.startsWith('#')) {
    return;
  }

  event.preventDefault();

  const targetId = href.slice(1);
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const HEADER_OFFSET = 80;

  const targetPosition =
    target.getBoundingClientRect().top +
    window.scrollY -
    HEADER_OFFSET;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
};

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-[GalderGlynn]">
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
        className={`fixed top-0 right-0 h-full w-[90vw] lg:w-[400px] min-w-[20rem] bg-white z-[999] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-l-2xl 
          ${ menuOpen ? 'translate-x-0' : 'translate-x-full' }
          `}
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
          {navLinks.map(({ href, label }) => {
            const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#');

            if (isExternal) {
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    setMenuOpen(false);
                    handleNavClick(e, href);
                    
                  }}
                  className="text-black text-xl font-medium py-3 border-b border-gray-100 transition-opacity hover:opacity-70"
                >
                  {label}
                </a>
              )
            }
          

            return (
              <Link
                key={href}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="text-black text-xl font-medium py-3 border-b border-gray-100 transition-opacity hover:opacity-70"
              >
                {label}
              </Link>
            )
          })}
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
    

      

      
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/founders" element={<FoundersPage />} />
      <Route path="/whatWeTest" element={<WhatWeTest />} />
    </Routes>
    </div>
   
    
    
  
    
  )
}

export default App
