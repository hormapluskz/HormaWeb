import { useState } from 'react'
import axios from 'axios'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Заявка на Priority Access'
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post('/api/contact/', formData)
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: 'Заявка на Priority Access' })
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="home" className="w-full relative min-h-screen flex flex-col overflow-hidden pt-14 lg:pt-18">
      
      {/* Showcase Card — full width, square top, rounded bottom */}
      <div className="relative flex-1 w-full min-h-[600px] lg:min-h-[750px] rounded-b-[24px] sm:rounded-b-[32px] lg:rounded-b-[40px] overflow-hidden bg-gradient-to-br from-slate-500 to-slate-600">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background.jpg"
            alt="Showcase"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Corner brackets — top square, bottom rounded */}
        <div className="absolute top-5 left-5 sm:top-7 sm:left-7 lg:top-9 lg:left-8 w-6 h-5 sm:w-7 md:w-8 md:h-7 border-t-2 border-l-2 border-white/60 z-10"></div>
        <div className="absolute top-5 right-5 sm:top-7 sm:right-7 lg:top-9 lg:right-8 w-6 h-5 sm:w-7 md:w-8 md:h-7 border-t-2 border-r-2 border-white/60 z-10"></div>
        <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 lg:bottom-9 lg:left-8 w-6 h-5 sm:w-7 md:w-8 md:h-7 border-b-2 border-l-2 border-white/60 rounded-bl-lg z-10"></div>
        <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-7 lg:bottom-8 lg:right-8 w-6 h-5 sm:w-7 md:w-8 md:h-7 border-b-2 border-r-2 border-white/60 rounded-br-lg z-10"></div>

        {/* Content — mobile stacks, desktop uses grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr_auto] min-h-[600px] lg:min-h-[750px] p-6 sm:p-8 lg:p-10 gap-8">

          {/* Heading — top left */}
          <div className="lg:row-start-1">
            <div className="w-3 h-3 mt-60 rounded-full bg-white animate-pulse"></div>
            <h1 className="text-[#f6f7f9] text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.85] font-bold">
              HORMA+
            </h1>
          </div>

          {/* Description — vertically centered on right (desktop) */}
          <div className="lg:row-start-1 lg:row-span-3 lg:col-start-2 lg:self-center lg:justify-self-end lg:text-right max-w-sm">
            <p className="text-white/90 text-sm leading-relaxed sm:text-base lg:text-[17px]">
              I transform your vision into captivating images using expert lighting and creative direction.
            </p>
          </div>

          {/* Photo stack — bottom left */}
          <div className="lg:row-start-3 lg:self-end">
            <div className="relative w-16 h-12 sm:w-20 sm:h-16 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
              <div className="absolute -right-3 sm:-right-5 w-12 h-12 sm:w-16 sm:h-16 rounded-xl border-2 border-white/80 rotate-[20deg] overflow-hidden bg-white/20 z-10">
                <img src="/payment-mastercard.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute left-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl border-2 border-white/80 -rotate-[20deg] overflow-hidden bg-white/20">
                <img src="/payment-revenuecat.png" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Trust block — bottom right */}
          <div className="lg:row-start-3 lg:col-start-2 lg:self-end lg:justify-self-end flex flex-col items-start lg:items-end gap-2">
            <span className="text-white/90 text-sm">Trusted by 25,000+ clients</span>
            <div className="flex gap-1 text-green-400 text-lg">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-1">
              <a href="#" className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0022 12z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}