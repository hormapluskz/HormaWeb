export default function Stats() {
  const stats = [
    {
      value: "589M",
      label: "adults live with diabetes"
    },
    {
      value: "332M",
      label: "live with depression"
    },
    {
      value: "1 in 4",
      label: "men > 30y.o. experience low testosterone levels"
    },
    {
      value: "14-25%",
      label: "of women experience menstrual irregularities"
    },
    {
      value: "850M",
      label: "people struggle with sleep issues"
    },
    {
      value: "936M",
      label: "adults worldwide at risk of / living with OSA"
    }
  ]

  return (
    <section id="stats" className="relative min-h-[50vh] lg:min-h-screen flex items-center py-20 px-4">
      {/* Background Image */}
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center lg:hidden"
        style={{ backgroundImage: 'url(/stats-background.jpg)', backgroundSize: '150%', backgroundColor: '#ffffff', backgroundPosition: 'center 35%' }}
      ></div>
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center hidden lg:block"
        style={{ backgroundImage: 'url(/stats-background-desktop.jpg)', backgroundSize: '100%', backgroundColor: '#ffffff', backgroundPosition: 'center center' }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-between min-h-[80vh]">
          {/* Main Stat */}
          <div className="text-center mb-10">
            <h2 className="text-[22px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-sans font-light leading-snug text-black max-w-6xl mx-auto">
              <span className="font-bold">1.7B</span> with hormonal or metabolic imbalances <span className="font-bold">don't get regular monitoring</span> and lack predictive insights
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl p-3 lg:p-5 text-center hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)' }}
            >
              <div className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 text-white">
                {stat.value}
              </div>
              <div className="text-[11px] md:text-sm text-white/70 font-light leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
