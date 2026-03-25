export default function Lab() {
  const features = [
    'One blood draw for your full hormonal & metabolic panel',
    '100+ biomarkers per test',
    'Personalized health insights that evolve with you',
    'Track hormones, glucose, sleep, stress & more',
    'Expert-backed recommendations for your goals',
  ]

  return (
    <section id="lab" className="relative min-h-screen px-6 py-16 md:px-12 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/lab-background.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center min-h-screen">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* LEFT — Heading + Description */}
          <div>
            <p className="text-white/50 text-sm font-light mb-3">
              What could cost you $3,000+ is just <span className="font-semibold text-white">$199</span>
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-white leading-tight mb-6">
              Horma+ Lab<br />Membership
            </h2>
            <p className="text-white/70 text-[15px] lg:text-lg font-light leading-relaxed max-w-md">
              Your membership includes a comprehensive blood test covering <strong className="text-white">100+ biomarkers</strong> — hormones, glucose, metabolic markers, and more in a single collection.
            </p>
          </div>

          {/* RIGHT — Features + Price + Payment + CTA */}
          <div>
            {/* Feature list */}
            <ul className="space-y-3 mb-10">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] lg:text-base text-white/80 font-light">
                  <span className="text-white mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="flex items-end gap-2 mb-1">
              <span className="text-white/50 text-xl align-top mt-2">$</span>
              <span className="text-6xl font-bold text-white leading-none">199</span>
              <span className="text-white/50 text-sm mb-2">/ test &nbsp;·&nbsp; billed annually</span>
            </div>
            <p className="text-white/40 text-xs mb-8">
              Single test available for $249. Includes doctor review & personalized report.
            </p>

            {/* Payment methods */}
            <div className="mb-6">
              <span className="text-white/40 text-xs block mb-3">Flexible payment options</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-10 border border-white/20 rounded-lg bg-white/10 flex items-center justify-center">
                  <img src="/payment-stripe.png" alt="Stripe" className="w-full h-full object-contain" />
                </div>
                <div className="w-16 h-10 border border-white/20 rounded-lg bg-white/10 flex items-center justify-center">
                  <img src="/payment-revenuecat.png" alt="RevenueCat" className="w-full h-full object-contain" />
                </div>
                <div className="w-16 h-10 border border-white/20 rounded-lg bg-white/10 flex items-center justify-center">
                  <img src="/payment-mastercard.png" alt="Mastercard" className="w-full h-full object-contain" />
                </div>
                <div className="w-16 h-10 border border-white/20 rounded-lg bg-white/10 flex items-center justify-center">
                  <img src="/payment-visa.png" alt="Visa" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full max-w-sm py-4 text-white font-medium text-base rounded-full transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
            >
              Reserve your test →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
