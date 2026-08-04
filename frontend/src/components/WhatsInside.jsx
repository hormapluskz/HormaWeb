import { whats_inside_items } from "../data/whats_inside_items"


export default function WhatsInside() {
  

  return (
    <section id="inside" className="relative bg-white px-4 py-20 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold leading-tight mb-4" style={{ color: '#1D212B' }}>
            What's inside Horma+
          </h2>
          <p className="text-[15px] md:text-[17px] lg:text-xl text-black/50 font-light leading-relaxed max-w-2xl">
            Horma+ is more than a data tracker. Step into an intelligent ecosystem of personalized insights and high-performance habits, designed to sync perfectly with your unique biology.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {whats_inside_items.map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              {/* Small photo card */}
              <img src={item.img}
                className="shrink-0 w-[140px] h-[160px] md:w-[180px] md:h-[200px] rounded-3xl shadow-sm"
                // style={{ backgroundImage: `url(${item.img})` }}
              >

              </img>
              {/* Text */}
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2" style={{ color: '#1D212B' }}>
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
