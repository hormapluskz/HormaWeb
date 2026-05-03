export default function Kit() {
  const cards = [
    {
      image: '/kit-card-1.jpg',
      value: '1x',
      unit: 'use',
      label: 'Disposable Tester',
      goal: 'Horma+ Kit',
      tips: ['Collect urine sample at home', 'Results sync to Horma+ app instantly']
    },

    {
      image: '/kit-card-2.jpg',
      value: '12.4',
      unit: 'mIU/L',
      label: 'FSH Level',
      goal: 'Hormonal balance',
      tips: ['Reduce stress daily', 'Sleep 7–9 hours per night']
    },
    {
      image: '/kit-card-3.jpg',
      value: '2.5',
      unit: 'mg/mmol',
      label: 'microAlbuminuria',
      goal: 'Kidney health',
      tips: ['Stay well hydrated daily', 'Reduce sodium intake']
    },
    {
      image: '/kit-card-4.jpg',
      value: '493',
      unit: 'ng/dL',
      label: 'Testosterone',
      goal: 'Increase muscle',
      tips: ['Strength train 2–3x per week', 'Magnesium 300–400 mg daily']
    },
    {
      image: '/kit-card-5.jpg',
      value: '2.1',
      unit: 'mIU/L',
      label: 'TSH Level',
      goal: 'Thyroid health',
      tips: ['Maintain iodine-rich diet', 'Monitor symptoms with doctor']
    },
    {
      image: '/kit-card-6.jpg',
      value: '45',
      unit: 'ng/mL',
      label: 'Ferritin Level',
      goal: 'Iron stores',
      tips: ['Eat iron-rich foods (red meat, legumes)', 'Pair with Vitamin C for absorption']
    },
    {
      image: '/kit-card-7.jpg',
      value: '32',
      unit: 'ng/mL',
      label: 'Vitamin D',
      goal: 'Bone & immune health',
      tips: ['Get 15–20 min sunlight daily', 'Supplement D3 + K2 if deficient']
    },
    {
      image: '/kit-card-8.jpg',
      value: '8.2',
      unit: 'mIU/mL',
      label: 'LH Level',
      goal: 'Reproductive health',
      tips: ['Track with cycle phase for accuracy', 'Consult if levels are consistently high']
    }
  ]

  return (
    <section id="kit" className="relative min-h-screen px-6 py-20 md:px-12 bg-white">

      {/* Top text */}
      <div className="max-w-2xl lg:max-w-4xl lg:mx-auto lg:text-center mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold leading-tight mb-4" style={{ color: '#1D212B' }}>
          Horma+ Kit
        </h2>
        <p className="text-[15px] md:text-[17px] lg:text-xl font-light leading-relaxed mb-8" style={{ color: '#1D212B99' }}>
          Home urine tests reveal your hormone levels<br className="hidden lg:block" /> and guide your nutrition and lifestyle with expert-backed tips.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:overflow-visible lg:grid lg:grid-cols-4 lg:max-w-6xl lg:mx-auto" style={{ scrollbarWidth: 'none' }}>
        {cards.map((card, index) => (
          <div key={index} className="relative shrink-0 w-[75vw] sm:w-[340px] lg:w-full rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[580px] snap-start lg:snap-none">
            {/* Photo */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-gray-300"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Value overlay */}
            <div className="absolute bottom-[7.5rem] lg:bottom-[9rem] left-0 right-0 text-center text-white px-2">
              <span className="text-3xl font-bold">{card.value}</span>
              <span className="text-lg align-super ml-1">{card.unit}</span>
              <p className="text-xl lg:text-base font-medium mt-1">{card.label}</p>
            </div>

            {/* Goal card */}
            <div className="absolute bottom-4 left-3 right-3 bg-white rounded-2xl p-3 lg:p-4">
              <p className="text-xs font-medium mb-1.5" style={{ color: '#1D212B99' }}>Goal &nbsp; {card.goal}</p>
              <ul className="space-y-1">
                {card.tips.map((tip, i) => (
                  <li key={i} className="text-xs font-light leading-snug" style={{ color: '#1D212B' }}>· {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* we built */}
      <div className="text-center mt-10">
        <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto italic glass-transparent-form rounded-2xl p-8" style={{ color: '#1D212B' }}>
          We built Horma+ to bridge this gap continuous, predictive insights<br className="hidden lg:block" /> that empower proactive health decisions
        </p>
      </div>

    </section>
  )
}
