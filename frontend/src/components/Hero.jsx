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
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-background.jpg"
          alt="Background"
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Content — mobile: bottom left | desktop: center */}
      <div className="relative z-10 w-full px-6 pb-16 md:px-12 md:pb-16 lg:flex lg:items-center lg:justify-center lg:pb-0 lg:h-full lg:absolute lg:inset-0">
        <div className="flex flex-col gap-8 w-full lg:items-center lg:text-center lg:max-w-4xl">

          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[80px] font-sans font-bold tracking-tight leading-tight text-white lg:whitespace-nowrap">
            Unlock your hormone intelligence
          </h1>

          <p className="text-[14px] md:text-[16px] lg:text-[22px] text-white/80 font-light leading-relaxed italic drop-shadow-sm max-w-lg lg:max-w-2xl">
            <span className="text-white font-medium not-italic">Horma+</span>, a wellness platform that provides continuous,<br className="hidden lg:block" /> non-invasive hormone and glucose monitoring.
          </p>

          <a
            href="#contact"
            className="self-start lg:self-auto flex items-center gap-2 px-8 py-3.5 text-black font-medium tracking-wide text-sm rounded-[24px] transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: 'rgba(255,255,255,1)', backdropFilter: 'blur(12px)' }}
          >
            Get Priority Access
            <span className="text-base">›</span>
          </a>

        </div>
      </div>
    </section>
  )
}

