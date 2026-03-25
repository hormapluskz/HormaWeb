import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      await axios.post('/api/contact/', formData)
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
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
    <section id="contact" className="relative flex items-center justify-center overflow-hidden bg-white">

      <div className="relative z-10 w-full px-4 py-10">
        <div className="max-w-2xl lg:max-w-3xl mx-auto">
          <div className="rounded-3xl p-6 md:p-12 shadow-2xl" style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold mb-4 text-white">
                Horma+ <br />
                Priority Access
              </h2>
              <p className="text-white/70 font-light leading-relaxed text-sm">
                <span className="font-bold text-white">Be among the 1-st</span> for whom we adapt <br /> 
                the technologies of the future, providing <br />
                personalized care for your hormonal health.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full px-5 py-3 glass-transparent text-white rounded-xl focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 font-light placeholder-white/50"
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
                  className="w-full px-5 py-3 glass-transparent text-white rounded-xl focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 font-light placeholder-white/50"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  className="w-full px-5 py-3 glass-transparent text-white rounded-xl focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-200 font-light placeholder-white/50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-white text-black rounded-full font-medium tracking-wide text-lg transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Reserve Your Spot'}
              </button>

              {status === 'success' && (
                <div className="glass-graphite rounded-xl p-4 text-center">
                  <p className="text-black font-light">
                    ✓ You're on the waitlist!
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="glass rounded-xl p-4 text-center border border-red-500/20">
                  <p className="text-red-600 font-light">
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

