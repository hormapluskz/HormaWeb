export default function Kit() {
  const cards = [
    {
      image: '/kit-card-1.jpg',
      value: '12.4',
      unit: 'mIU/L',
      label: 'FSH Level',
      goal: 'Hormonal balance',
      tips: ['Reduce stress daily', 'Sleep 7–9 hours per night']
    },

    {
      image: '/kit-card-2.jpg',
      value: '493',
      unit: 'ng/dL',
      label: 'Testosterone',
      goal: 'Increase muscle',
      tips: ['Strength train 2–3x per week', 'Magnesium 300–400 mg daily']
    }
  ]

  return (
    <section id="kit" className="relative min-h-screen bg-white px-6 py-20 md:px-12">

      {/* Top text */}
      <div className="max-w-2xl lg:max-w-4xl lg:mx-auto lg:text-center mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-black leading-tight mb-4">
          Horma+ Kit
        </h2>
        <p className="text-[15px] md:text-[17px] lg:text-xl text-black/60 font-light leading-relaxed mb-8">
          Home urine tests reveal your hormone levels<br className="hidden lg:block" /> and guide your nutrition and lifestyle with expert-backed tips.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:overflow-visible lg:grid lg:grid-cols-2 lg:max-w-3xl lg:mx-auto" style={{ scrollbarWidth: 'none' }}>
        {cards.map((card, index) => (
          <div key={index} className="relative shrink-0 w-[75vw] sm:w-[340px] lg:w-full rounded-3xl overflow-hidden min-h-[420px] snap-start lg:snap-none">
            {/* Photo */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-gray-300"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            {/* Value overlay */}
            <div className="absolute bottom-28 left-0 right-0 text-center text-white">
              <span className="text-3xl md:text-5xl font-bold">{card.value}</span>
              <span className="text-lg align-super ml-1">{card.unit}</span>
              <p className="text-xl font-medium mt-1">{card.label}</p>
            </div>

            {/* Goal card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4">
              <p className="text-xs text-black/50 font-medium mb-2">Goal &nbsp; {card.goal}</p>
              <ul className="space-y-1">
                {card.tips.map((tip, i) => (
                  <li key={i} className="text-xs text-black/70 font-light">· {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* we built */}
      <div className="text-center mt-10">
        <p className="text-xl md:text-2xl text-black/80 font-light leading-relaxed max-w-4xl mx-auto italic glass-transparent-form rounded-2xl p-8">
          We built Horma+ to bridge this gap continuous, predictive insights<br className="hidden lg:block" /> that empower proactive health decisions
        </p>
      </div>

    </section>
  )
}
