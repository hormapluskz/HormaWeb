import { stories } from "../data/stories"

export default function Story() {
  

  return (
    <section id="story" className="relative min-h-screen flex items-center py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold mb-4" style={{ color: '#1D212B' }}>
            Born from personal experiences<br className="hidden lg:block" /> that shaped our mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="relative h-[320px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden group glass-transparent-form"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${story.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative h-full flex flex-col justify-end p-4 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                <p className="text-white/80 text-sm font-light mb-8">{story.role}</p>
                <p className="text-white/90 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: story.story }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
