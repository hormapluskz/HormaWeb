export default function Story() {
  const stories = [
    {
      name: "Beksultan Urazbekov",
      role: "CEO & Co-Founder",
      story: "My father’s diabetes diagnosis was a shock. He wasn't in a risk group, but silent stress was destroying him from within. I realized then: outward health is an illusion. <span class='font-extrabold text-white'>We need continuous biomarker monitoring to catch the exact moment the body begins to fail. </span>",
      image: "/ceo-story.jpg"
    },
    {
      name: "Ibrahhim Tlektes",
      role: "CTO & Co-Founder",
      story: "Losing an 8-year love union, a life built together, to an untracked hormonal imbalance taught me a <span class='font-extrabold text-white'> hard truth: we tend to ignore a problem until we have visual proof of it.</span> Our mission is to give people the tools to truly understand themselves and each other.",
      image: "/cto-story.jpg"
    }
  ]

  return (
    <section id="story" className="relative min-h-screen flex items-center py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold mb-4 text-black">
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
