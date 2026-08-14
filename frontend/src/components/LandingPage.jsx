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
import WhatWeTest from './What_We_Test/WhatWeTest'
import { navLinks } from '../data/navLinks'
// import WhatWeTest from './WhatWeTest/WhatWeTest'

export default function LandingPage() {

  useScrollReveal();

  return (
    <>

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
    
    </>
  )
}