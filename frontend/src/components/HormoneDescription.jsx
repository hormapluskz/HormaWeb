export default function HormoneDescription() {
  return (
    <section className="relative bg-white px-4 py-20 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-sans font-bold leading-tight" style={{ color: '#1D212B' }}>
            Hormones Don't Stay Stable <br className="hidden lg:block" /> They Change Constantly
          </h2>
        </div>

        {/* Photo */}
        <div className="rounded-3xl overflow-hidden w-full mb-10 shadow-sm">
          <img
            src="/hormone-description.jpg"
            alt="Hormone graphs"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[15px] md:text-[17px] lg:text-xl font-light leading-relaxed" style={{ color: '#1D212B99' }}>
            You are not the same person you were yesterday. Watch the daily movie of your hormones the unique rhythms that script your{' '}
            <span className="font-medium" style={{ color: '#1D212B' }}>energy, intimacy, and potential</span>{' '}
            every 24h.  
          </p>
        </div>

      </div>
    </section>
  )
}
