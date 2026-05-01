import { Link } from 'react-router-dom'

export default function FoundersPage() {
  const founders = [
    {
      name: "Beksultan Urazbekov",
      role: "CEO & Co-Founder",
      story: "My father's diabetes diagnosis was a shock. He wasn't in a risk group, but silent stress was destroying him from within. I realized then: outward health is an illusion. <span class='font-extrabold text-white'>We need continuous biomarker monitoring to catch the exact moment the body begins to fail.</span>",
      image: "/ceo-story.jpg"
    },
    {
      name: "Ibrahhim Tlektes",
      role: "CTO & Co-Founder",
      story: "Losing an 8-year love union, a life built together, to an untracked hormonal imbalance of my partner taught me a <span class='font-extrabold text-white'>hard truth: we tend to ignore a problem until we have visual proof of it.</span> Our mission is to give people the tools to truly understand themselves and each other.",
      image: "/cto-story.jpg"
    },
    {
      name: "Sagimbekov Adil",
      role: "CDO & Co-Founder",
      story: "Design is how I see the world — but health data always felt cold and clinical. I wanted to build something that feels <span class='font-extrabold text-white'>human, warm, and actionable.</span> Horma+ is my answer to that: turning complex biomarker data into insights anyone can understand and act on.",
      image: "/team-adil.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-black/10">
        <span className="text-xl font-bold text-black" style={{ fontFamily: 'sans-serif' }}>Horma+</span>
        <Link
          to="/"
          className="flex items-center gap-2 text-black/60 hover:text-black transition-colors text-sm font-medium"
        >
          ← Back
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold mb-4 text-black">
            Born from personal experiences<br className="hidden lg:block" /> that shaped our mission
          </h1>
          <p className="text-black/50 text-lg font-light mt-4">
            Three founders. Three stories. One mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="relative h-[420px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-gray-300"
                style={{ backgroundImage: `url(${founder.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                <p className="text-white/70 text-sm font-light mb-6">{founder.role}</p>
                <p
                  className="text-white/90 leading-relaxed font-light text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: founder.story }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
