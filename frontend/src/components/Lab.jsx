export default function Lab() {
  return (
    <section id="lab" className="relative bg-[#f5f5f7] px-4 py-20 md:px-12 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-black leading-tight mb-3">
            Horma+ Lab
          </h2>
          <p className="text-[15px] md:text-[17px] lg:text-xl text-black/50 font-light">
            includes a comprehensive blood test <br /> covering 100+ biomarkers
          </p>
        </div>

        {/* Biomarker types */}
        <div className="mb-16 lg:hidden">
          {/* Mobile: row 1 — 4 items */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            {[
              { label: 'Metabolic Panel',       img: '/bio-metabolic.jpg' },
              { label: 'Liver & Kidney Base',   img: '/bio-liver.jpg' },
              { label: 'Sex Hormones',          img: '/bio-hormones.jpg' },
              { label: 'Thyroid Control (TSH)', img: '/bio-thyroid.jpg' },
            ].map(({ label, img }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-14 h-14 rounded-2xl bg-cover bg-center bg-gray-200 shadow-sm" style={{ backgroundImage: `url(${img})` }}></div>
                <span className="text-xs text-black/60 font-light leading-snug">{label}</span>
              </div>
            ))}
          </div>
          {/* Mobile: row 2 — 3 items centered */}
          <div className="flex justify-center gap-3">
            {[
              { label: 'Vital Nutrients', img: '/bio-nutrients.jpg' },
              { label: 'Blood Health',    img: '/bio-blood.jpg' },
              { label: 'Premium Add-on', img: '/bio-premium.jpg' },
            ].map(({ label, img }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center w-[calc(25%-6px)]">
                <div className="w-14 h-14 rounded-2xl bg-cover bg-center bg-gray-200 shadow-sm" style={{ backgroundImage: `url(${img})` }}></div>
                <span className="text-xs text-black/60 font-light leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: single row */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-3 mb-16">
          {[
            { label: 'Metabolic Panel',       img: '/bio-metabolic.jpg' },
            { label: 'Liver & Kidney Base',   img: '/bio-liver.jpg' },
            { label: 'Sex Hormones',          img: '/bio-hormones.jpg' },
            { label: 'Thyroid Control (TSH)', img: '/bio-thyroid.jpg' },
            { label: 'Vital Nutrients',       img: '/bio-nutrients.jpg' },
            { label: 'Blood Health',          img: '/bio-blood.jpg' },
            { label: 'Premium Add-on',        img: '/bio-premium.jpg' },
          ].map(({ label, img }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <div className="w-14 h-14 rounded-2xl bg-cover bg-center bg-gray-200 shadow-sm" style={{ backgroundImage: `url(${img})` }}></div>
              <span className="text-xs text-black/60 font-light leading-snug">{label}</span>
            </div>
          ))}
        </div>

        {/* Big Card */}
        <div className="relative w-full max-w-sm mx-auto mb-12 rounded-3xl overflow-hidden shadow-sm" style={{ aspectRatio: '4/5' }}>
          <div className="absolute inset-0 bg-cover bg-center bg-gray-300" style={{ backgroundImage: 'url(/lab-background.jpg)' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Schedule Your Lab Day</h3>
            <p className="text-base font-light leading-relaxed text-white/80">
              Choose a partner clinic nearby
            </p>
          </div>
        </div>

        {/* Second Big Card */}
        <div className="relative w-full max-w-sm mx-auto mb-12 rounded-3xl overflow-hidden shadow-sm bg-gray-200" style={{ aspectRatio: '4/5', backgroundImage: 'url(/lab-insights.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Get Your Insights</h3>
            <p className="text-base font-light leading-relaxed text-white/80">
              As soon as the lab confirms, your results are instantly converted into a personalized hormonal roadmap on your dashboard.
            </p>
          </div>
        </div>

        {/* Expert-backed Card */}
        <div className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-sm" style={{ aspectRatio: '4/5' }}>
          {/* Background photo */}
          <div className="absolute inset-0 bg-cover bg-center bg-orange-200" style={{ backgroundImage: 'url(/expert-background.jpg)' }}></div>
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Floating tags */}
          <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-3 px-6">
            <div className="flex gap-3 justify-center">
              <div className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm" style={{ backgroundColor: '#1D212B' }}>
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                <span className="text-sm font-medium text-white">Vitamin D3</span>
              </div>
              <div className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm" style={{ backgroundColor: '#1D212B' }}>
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                <span className="text-sm font-medium text-white">Magnesium</span>
              </div>
            </div>
            <div className="flex gap-3 justify-center">
              <div className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm" style={{ backgroundColor: '#1D212B' }}>
                <span className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center text-white text-xs font-bold">✕</span>
                <span className="text-sm font-medium text-white">Palm Oil</span>
              </div>
            </div>
          </div>

          {/* Health Score card */}
          <div className="absolute top-[42%] right-6 -translate-y-1/2 rounded-2xl p-4 shadow-lg w-36" style={{ backgroundColor: '#1D212B' }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full border-2 border-green-500"></span>
                <span className="text-xs font-medium text-white">Health Score</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#22c55e" strokeWidth="3"
                    strokeDasharray="75 94.2" strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">↑82%</span>
              </div>
            </div>
          </div>

          {/* Doctor badge */}
          <div className="absolute bottom-[130px] left-5 flex items-center gap-4 bg-white/90 rounded-2xl px-4 py-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: 'url(/team-kamila.jpg)' }}></div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-blue-500 text-xs">✔</span>
                <span className="text-xs text-black/60">Reviewed by</span>
              </div>
              <span className="text-sm font-bold text-black">Dr. Burabayeva Kamila</span>
            </div>
          </div>

          {/* Bottom text */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white mb-2">Your Personalized Protocol</h3>
            <p className="text-sm font-light text-white/80 leading-relaxed">
              AI-assisted, clinician-reviewed plan for supplements, nutrition, and habits to move markers into optimal ranges.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
