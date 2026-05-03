export default function Team() {
  const team = [
    {
      name: "Burbayeva Kamila",
      role: ["Doctor of Medicine,", "BC Endocrinologist,", "KZ Association", "of Endocrinologists"],
      photo: "/team-kamila.jpg",
    },  
    {
      name: "Urazbekov Beksultan",
      role: ["CEO & Co-Founder,", "Business Strategist,", "Forbes 30U30"],
      photo: "/team-bexultan.jpg",
    },
    {
      name: "Tlektes Ibrahim",
      role: ["CTO & Co-Founder", "R&D with product engineering"],
      photo: "/team-ibrahim.jpg",
    },
    {
      name: "Sagimbekov Adil",
      role: ["CDO & Co-Founder", "8y. of experience Unicorn companies"],
      photo: "/team-adil.jpg",
    }
  ]

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
    }
  ]

  return (
    <>
      {/* Team Section */}
      <section id="team" className="relative flex items-center overflow-hidden bg-white">
        <div className="relative z-10 w-full px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold mb-4 drop-shadow-sm" style={{ color: '#1D212B' }}>
                Our Team
              </h2>
              <p className="text-lg lg:text-xl font-light" style={{ color: '#1D212B99' }}>
                Experts united by a passion<br className="lg:hidden" /> for transforming health monitoring
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 lg:max-w-5xl lg:mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="glass-transparent-form rounded-2xl p-4 lg:p-6 hover:scale-105 transition-transform duration-200 text-center"
                >
                  <div
                    className="w-full aspect-square rounded-xl mb-3 bg-cover bg-center bg-gray-200"
                    style={{ backgroundImage: `url(${member.photo})` }}
                  ></div>
                  <h3 className="text-sm lg:text-lg font-bold mb-1" style={{ color: '#1D212B' }}>{member.name}</h3>
                  <p className="text-xs lg:text-base font-light" style={{ color: '#1D212B99' }}>
                    {Array.isArray(member.role) ? (
                      <>
                        {member.role.map((line, i) => (
                          <span key={i}>{line}{i < member.role.length - 1 && <br />}</span>
                        ))}
                      </>
                    ) : (
                      member.role.split(',').map((part, i) => (
                        <span key={i}>{part.trim()}{i < member.role.split(',').length - 1 && <br />}</span>
                      ))
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Team Philosophy */}
            <div className="mt-16 text-center max-w-xs md:max-w-4xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed" style={{ color: '#1D212B' }}>
                We believe in the safe, non-invasive, and effective power of our biometric intelligence so deeply. <span className="font-bold">We don't just track problems, we catch them before they exist!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Stories */}
      <section className="relative bg-white px-4 pb-20 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold mb-4" style={{ color: '#1D212B' }}>
              Born from personal experiences<br className="hidden lg:block" /> that shaped our mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto">
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
      </section>
    </>
  )
}
