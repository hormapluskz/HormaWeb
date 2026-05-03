import { useState } from 'react'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: 'Hormonal Balance',
      description: 'Track your full hormonal panel in real-time. Get insights on digital biomarkers, core insights and more.',
      icon: '⚗️',
      mockupImage: '/feature-hormonal.jpg',
      phoneContent: {
        title: 'Hormonal Balance',
        subtitle: 'Overall status',
        mainValue: 'Good',
        mainUnit: '',
        chart: '📉',
        status: 'Balanced'
      }
    },
    {
      title: 'Bloom in Every Phase',
      description: 'Every day of your 28-day journey has its own beauty. Unlock the secrets of your hormonal seasons and stay radiant, balanced, and empowered.',
      icon: '🌸',
      mockupImage: '/feature-cycle.jpg',
      phoneContent: {
        title: 'Cycle Tracking',
        subtitle: 'Current phase',
        mainValue: 'Day 14',
        mainUnit: 'Ovulation',
        chart: '🌙',
        status: 'Fertile Window'
      }
    },
    {
      title: 'Turn data into action',
      description: 'Horma+ AI goes beyond tracking to forecast your physiological state for the days ahead. Get precise recommendations on nutrition, training, and rest to maintain elite-level performance without the risk of burnout.',
      mockupImage: '/feature-ai.jpg',
      phoneContent: {
        title: 'Cycle Tracking',
        subtitle: 'Current phase',
        mainValue: 'Day 14',
        mainUnit: 'Ovulation',

        status: 'Fertile Window'
      }
    }
  ]

  const currentFeature = features[activeFeature]

  const prev = () => setActiveFeature((i) => (i - 1 + features.length) % features.length)
  const next = () => setActiveFeature((i) => (i + 1) % features.length)

  return (
    <section id="features" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold drop-shadow-sm" style={{ color: '#1D212B' }}>
            A comprehensive <br className="lg:hidden" />view<br className="hidden lg:block" />{' '}of your health<br className="lg:hidden" />{' '}at every stage
          </h2>
          <p className="text-base lg:text-lg font-light mt-4" style={{ color: '#1D212B99' }}>One app. Complete hormone intelligence.</p>
        </div>

        {/* Phone Mockup */}
        <div className="w-64 lg:w-72 h-[520px] lg:h-[580px] bg-black rounded-[55px] shadow-2xl p-3 relative overflow-hidden mb-10">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[47px] overflow-hidden relative">
            {/* App Content */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${currentFeature.mockupImage})` }}
            ></div>
          </div>
        </div>

        {/* Active Feature Card */}
        <div className="w-full max-w-sm lg:max-w-md bg-white rounded-2xl px-6 py-5 mb-6 text-center shadow-xl">
          <h3 className="text-lg font-bold text-black mb-1">{currentFeature.title}</h3>
          <p className="text-black/60 text-sm font-light leading-relaxed">{currentFeature.description}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-colors"
            style={{ color: '#1D212B' }}
          >
            ←
          </button>
          <div className="flex gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${i === activeFeature ? 'w-5' : ''}`}
                style={{ backgroundColor: i === activeFeature ? '#1D212B' : '#1D212B40' }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-colors"
            style={{ color: '#1D212B' }}
          >
            →
          </button>
        </div>

      </div>
    </section>
  )
}
