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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full Screen Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/hero-background.jpg"
          alt="Background"
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div> */}

      {/* Desktop: heading centered in the middle */}
      {/* <div className="hidden lg:flex absolute inset-0 z-10 items-center justify-center px-12">
        <h1 className="text-[80px] font-sans font-bold tracking-tight leading-tight text-white text-center whitespace-nowrap">
          Unlock your hormone intelligence
        </h1>
      </div> */}

      {/* Bottom content (always) + mobile heading */}
      {/* <div className="relative z-10 w-full px-6 pb-16 md:px-12 md:pb-16">
        <div className="flex flex-col gap-6 lg:items-center lg:text-center"> */}
          {/* Mobile heading */}
          {/* <h1 className="lg:hidden text-[36px] sm:text-[48px] md:text-[56px] font-sans font-bold tracking-tight leading-tight text-white">
            Unlock your hormone intelligence
          </h1>

          <p className="text-[14px] md:text-[16px] lg:text-[22px] text-white/80 font-light leading-relaxed italic drop-shadow-sm max-w-lg lg:max-w-2xl">
            <span className="text-white font-medium not-italic">Horma+</span>, a wellness platform that provides continuous,<br className="hidden lg:block" /> non-invasive hormone and glucose monitoring.
          </p>

          <a
            href="#contact"
            className="self-start lg:self-auto flex items-center gap-2 px-8 py-3.5 font-medium tracking-wide text-sm rounded-[24px] transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: 'rgba(255,255,255,1)', color: '#1D212B', backdropFilter: 'blur(12px)' }}
          >
            Get Priority Access
            <span className="text-base">›</span>
          </a>
        </div>
      </div> */}

      {/* ============ Showcase Card ============ */}
      <div className="relative w-full max-w-[1200px] h-[700px] aspect-[16/10] rounded-[40px] overflow-hidden bg-gradient-to-br from-slate-500 to-slate-600">

        {/* Background photo — swap src for your own image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background.jpg"
            alt="Showcase"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Corner bracket decorations */}
        <div className="absolute top-9 left-8 w-8 h-7 border-t-2 border-l-2 border-white/60 rounded-tl-lg z-10"></div>
        <div className="absolute top-9 right-8 w-8 h-7 border-t-2 border-r-2 border-white/60 rounded-tr-lg z-10"></div>
        <div className="absolute bottom-9 left-8 w-8 h-7 border-b-2 border-l-2 border-white/60 rounded-bl-lg z-10"></div>
        <div className="absolute bottom-8 right-8 w-8 h-7 border-b-2 border-r-2 border-white/60 rounded-br-lg z-10"></div>

        {/* Top-right icon badge */}
        {/* <div className="absolute top-8 right-8 z-20">
          <div className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div> */}

        {/* Wordmark / heading block */}
        <div className="absolute top-28 left-8 z-10 flex flex-col">
          <div className="w-[12px] h-[12px] mb-3 rounded-full bg-white" 
                style={{
                  animation: 'customPulse 1s ease-in-out infinite'
                }}>
          </div>
          <div className="text-[#f6f7f9] text-[120px] font-[400] leading-[100px] font-[Inter]">
            HORMA+
          </div>
        </div>

        {/* Description block */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 max-w-xs text-right">
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            I transform your vision into captivating images using expert lighting and creative direction.
          </p>
        </div>

        {/* Trust / rating / social block */}
        <div className="absolute bottom-40 right-8 z-10 flex flex-col items-end gap-2">
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

        {/* Photo-stack thumbnail block */}
        <div className="absolute bottom-40 left-8 z-10 w-20 h-16 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
          <div className="absolute -right-5 w-16 h-16 rounded-xl border-2 border-white/80 rotate-[20deg] overflow-hidden bg-white/20 z-10">
            <img src="/payment-mastercard.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-0 w-16 h-16 rounded-xl border-2 border-white/80 -rotate-[20deg] overflow-hidden bg-white/20">
            <img src="/payment-revenuecat.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}