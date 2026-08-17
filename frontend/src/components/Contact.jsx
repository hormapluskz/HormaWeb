import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'
  const timerRef = useRef(null)


  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const resetStatusWithDelay = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setStatus('')
    }, 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      await axios.post('/api/contact/', formData)
      setStatus('success')
      setFormData(INITIAL_FORM_STATE)
      resetStatusWithDelay()
    } catch (error) {
      console.error('Contact form submission error:', error)
      setStatus('error')
      resetStatusWithDelay()
    }
  }

  const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, '')

  if (!digits) return ''

  // +X XXX XXX XX XX
  let formatted = '+' + digits.substring(0, 1) // +X

  if (digits.length > 1) {
    formatted += ' ' + digits.substring(1, 4) // +X XXX
  }
  if (digits.length > 4) {
    formatted += ' ' + digits.substring(4, 7) // +X XXX XXX
  }
  if (digits.length > 7) {
    formatted += ' ' + digits.substring(7, 9) // +X XXX XXX XX
  }
  if (digits.length > 9) {
    formatted += ' ' + digits.substring(9, 11) // +X XXX XXX XX XX (max 11 цифр)
  }

  return formatted
}

const handleChange = (e) => {
  const { name, value } = e.target

  if (name === 'phone') {
    const formattedPhone = formatPhoneNumber(value)
    
    setFormData((prev) => ({
      ...prev,
      [name]: formattedPhone
    }))
    return
  }

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }))
}

  return (
    <section id="contact" className="relative flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 w-full px-4 py-10">
        <div className="max-w-2xl lg:max-w-3xl mx-auto">
          <div className="rounded-3xl p-6 md:p-12 shadow-2xl bg-[#1D212B]">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold mb-4 text-white">
                Horma+ <br />
                Priority Access
              </h2>
              <p className="font-light leading-relaxed text-sm text-white/70">
                <span className="font-bold text-white">Be among the 1-st</span> for whom we adapt <br />
                the technologies of the future, providing <br />
                personalized care for your hormonal health.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-[14px]">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  aria-label="Full name"
                  className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 font-light"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 font-light"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+7 702 329 32 52"
                  aria-label="Phone number"
                  inputMode="numeric"
                  
                  className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 font-light"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Message"
                  aria-label="Message"
                  className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 font-light resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-full font-medium tracking-wide text-lg text-[#1D212B] bg-white transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'sending' ? 'Sending...' : 'Reserve Your Spot'}
              </button>

              {status === 'success' && (
                <div role="status" className="rounded-xl p-4 text-center border border-white/20 bg-white/5">
                  <p className="font-light text-white">
                    ✓ You're on the waitlist!
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div role="alert" className="rounded-xl p-4 text-center border border-red-500/30 bg-red-500/10">
                  <p className="text-red-400 font-light">
                    ✗ Error. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}