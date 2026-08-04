export default function Comparison(){
    const items = [
    { label: '100+ biomarker test', desc: 'Detect early signs of 1,000+ conditions', alt: true },
    { label: 'Health data upload', desc: 'Upload external bloodwork reports', alt: false },
    { label: 'Biological age', desc: null, alt: true },
    { label: 'Personalized protocol', desc: 'Diet, lifestyle and supplements', alt: false },
    { label: 'Wearable connection', desc: 'Link Apple Health, Whoop, OURA, etc.', alt: true },
    { label: 'Advanced AI chat', desc: 'With context on your health', alt: false },
    { label: '24/7 access to care team', desc: 'Ask questions anytime', alt: true },
    { label: 'Access add-on tests', desc: 'Gut, toxins, Grail Galleri cancer screen', alt: false },
    { label: 'Access peptides', desc: null, alt: true },
    { label: 'Access best supplements', desc: null, alt: false },
    { label: 'Access prescriptions', desc: null, alt: true },
  ];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 font-[GalderGlynn]">
      <div className="max-w-[720px] mx-auto">
        {/* Intro */}
        <p className="text-base md:text-lg mb-6 text-center">
          Your membership includes so much more.
        </p>

        {/* Heading */}
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-[1.1] tracking-tight mb-12 md:mb-16 text-center">
          <span className="block">What could cost $10,000</span>
          <span className="block">is now $199</span>
        </h2>

        {/* List */}
        <div className="mb-12 md:mb-16">
          {items.map((item, i) => (
            <div
              key={i}
              className={`
                flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-8
                py-2 px-3
                ${item.alt ? 'bg-[#fafafa]' : ''}
                `}
            >
              <div className="sm:w-[45%] text-base md:text-lg font-medium text-gray-900">
                {item.label}
              </div>
              {item.desc && (
                <div className="sm:w-[55%] text-sm md:text-base text-gray-500 leading-relaxed">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
        href="#contact"
        className="flex items-center justify-center h-12 px-8 bg-black text-white rounded-full text-sm font-semibold tracking-wide hover:opacity-90 transition-all active:scale-[0.98] mx-auto w-fit"
        >
            Become a member
        </a>
      </div>
    </section>
  );
}