export default function WhatsInside() {
  const items = [
    {
      img: '/hormonal_inside.jpg',
      title: 'Hormonal intelligence',
      desc: 'We translate complex hormonal fluctuations into an actionable score to help you optimize your daily performance and well-being.',
    },
    {
      img: '/ring_inside.jpg',
      title: 'Digital biomarkers',
      desc: 'Sync your wearable data to monitor vital signs like HRV and resting heart rate, identifying patterns before they impact your health.',
    },
    {
      img: '/ai_inside.jpg',
      title: 'AI & Doctor Review',
      desc: 'Get instant AI insights backed by professional doctor reports for a personalized health roadmap you can trust.',
    },
    {
      img: '/women_inside.jpg',
      title: 'Women Health',
      desc: 'From cycle tracking to fertility insights, we provide tailored support designed specifically for the unique needs of women\'s biology.',
    },
    {
      img: '/lab_inside.jpg',
      title: 'Horma Lab',
      desc: 'Complete your tests at the lab and get your results sent straight to the app, merging professional data with your daily hormonal tracking.',
    },
    {
      img: '/kit_inside.jpg',
      title: 'Horma Kit',
      desc: 'Precision testing at home. Use our specialized kits and AI-powered scanner to measure hormone levels in minutes from your smartphone.',
    }
  ]

  return (
    <section className="relative bg-white px-4 py-20 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-black leading-tight mb-4">
            What's inside Horma+
          </h2>
          <p className="text-[15px] md:text-[17px] lg:text-xl text-black/50 font-light leading-relaxed max-w-2xl">
            Horma+ is more than a data tracker. Step into an intelligent ecosystem of personalized insights and high-performance habits, designed to sync perfectly with your unique biology.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              {/* Small photo card */}
              <div
                className="shrink-0 w-[140px] h-[160px] md:w-[180px] md:h-[200px] rounded-3xl bg-gray-200 bg-cover bg-center shadow-sm"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              {/* Text */}
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-black/50 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
