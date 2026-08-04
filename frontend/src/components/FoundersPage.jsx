import { Link } from 'react-router-dom'
import { founders } from '../data/founders'

export default function FoundersPage() {
  

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
