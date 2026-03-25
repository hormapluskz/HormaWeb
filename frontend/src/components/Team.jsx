export default function Team() {
  const team = [
    {
      name: "Urazbekov Bexultan",
      role: ["CEO & Co-founder"],
      photo: "/team-bexultan.jpg",
      hasPhoto: true
    },
    {
      name: "Tlektes Ibrahhim",
      role: "CTO & Co-founder",
      photo: "/team-ibrahim.jpg",
      hasPhoto: true
    },
    {
      name: "Sagimbekov Adil",
      role: ["CDO & Co-founder"],
      photo: "/team-adil.jpg",
      hasPhoto: true
    },
    {
      name: "Burbayeva Kamila",
      role: ["MD, BC Endocrinologist", "Kazakhstan Association of Endocrinologists"],
      photo: "/team-kamila.jpg",
      hasPhoto: true
    }
  ]

  return (
    <section id="team" className="relative min-h-screen flex items-center overflow-hidden bg-white">

      <div className="relative z-10 w-full px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold mb-4 text-black drop-shadow-sm">
              Our Team
            </h2>
            <p className="text-black/70 text-lg lg:text-xl font-light">
              Experts united by a passion<br className="lg:hidden" /> for transforming health monitoring
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 lg:max-w-5xl lg:mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-transparent-form rounded-2xl p-4 lg:p-6 hover:scale-105 transition-transform duration-200 text-center"
              >
                {member.hasPhoto ? (
                  <div
                    className="w-full aspect-square rounded-xl mb-3 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.photo})` }}
                  ></div>
                ) : (
                  <div className="w-full aspect-square rounded-xl mb-3 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-4xl">⚕️</span>
                  </div>
                )}
                <h3 className="text-sm lg:text-lg font-bold text-black mb-1">{member.name}</h3>
                <p className="text-black/70 text-xs lg:text-base font-light">
                  {Array.isArray(member.role) ? (
                    <>
                      <span>{member.role[0]}</span>
                      <br />
                      <span>{member.role[1]}</span>
                    </>
                  ) : (
                    member.role
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Team Philosophy */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-black/90 font-light leading-relaxed mb-4">
              We believe in the safe, non-invasive,<br className="lg:hidden" /> and effective power of our biometric intelligence<br className="hidden lg:block" /> so deeply. <span className="font-bold">We don't just track problems,<br className="lg:hidden" /> we catch them before they exist!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
