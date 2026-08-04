import { comparison_items } from "../data/comparison_items";


export default function Comparison(){

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
          {comparison_items.map((item, i) => (
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