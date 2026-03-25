import { useState } from 'react'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: 'Hormones',
      description: 'Comprehensive hormonal balance monitoring',
      icon: '⚗️',
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
      title: 'Glucose Monitoring',
      description: 'Continuous glucose monitoring for metabolic health insights',
      icon: '🩸',
      phoneContent: {
        title: 'Glucose Level',
        subtitle: 'Real-time tracking',
        mainValue: '5.2',
        mainUnit: 'mmol/L',
        chart: '📊',
        status: 'Normal Range'
      }
    },
    {
      title: 'Sleep Apnea (OSA Risk)',
      description: 'Sleep apnea detection and respiratory monitoring',
      icon: '😴',
      phoneContent: {
        title: 'Sleep Apnea',
        subtitle: 'OSA Risk Analysis',
        mainValue: 'Low',
        mainUnit: '',
        chart: '📈',
        status: 'Healthy Breathing'
      }
    },
    {
      title: 'Menstrual Cycle',
      description: 'Track menstrual phases, ovulation and PMS symptoms',
      icon: '🌸',
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
      title: 'Stress',
      description: 'Real-time stress level detection and management',
      icon: '🧘',
      phoneContent: {
        title: 'Stress Level',
        subtitle: 'Current',
        mainValue: 'Low',
        mainUnit: '',
        chart: '🧘‍♀️',
        status: 'Relaxed State'
      }
    }
  ]

  const currentFeature = features[activeFeature]

  return (
    <section id="features" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-white drop-shadow-sm">
            A comprehensive <br className="lg:hidden" />view<br className="hidden lg:block" />{' '}of your health<br className="lg:hidden" />{' '}at every stage
            </h2>
          </div>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className="px-6 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-200 bg-white text-black hover:scale-105"
              >
                {feature.title}
              </button>
            ))}
          </div>

          {/* Phone Mockup with Dynamic Content */}
          <div className="flex justify-center pb-20">
            <div className="w-72 lg:w-80 h-[600px] lg:h-[680px] bg-black rounded-[55px] shadow-2xl p-3 relative overflow-hidden">
              {/* Phone Screen */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[47px] overflow-hidden relative">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                
                {/* App Content - Dynamic based on selected feature */}
                <div className="pt-16 px-6 text-white h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4 animate-pulse">{currentFeature.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{currentFeature.phoneContent.title}</h3>
                    <p className="text-gray-400 text-sm">{currentFeature.phoneContent.subtitle}</p>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="text-center mb-8">
                      <div className="text-6xl font-bold mb-2">{currentFeature.phoneContent.mainValue}</div>
                      <div className="text-gray-400 text-lg">{currentFeature.phoneContent.mainUnit}</div>
                    </div>
                    
                    <div className="text-6xl mb-6">{currentFeature.phoneContent.chart}</div>
                    
                    <div className="bg-white/10 rounded-2xl px-6 py-3">
                      <p className="text-sm">{currentFeature.phoneContent.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

