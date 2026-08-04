export default function DoctorCard({ doctor, onLearnMore }) {
  return (
    <div className="snap-start shrink-0 w-[320px] md:w-[588px] md:h-[265px] flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#f5f5f7]">
      {/* Image */}
      <div className="w-full md:w-[220px] h-[200px] md:h-[265px] shrink-0 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </div>

      {/* Info */}
      <div className="w-full md:w-[368px] md:h-[265px] flex flex-col justify-center px-5 md:px-6 py-5">
        <div className="h-4 md:h-7 mb-3">
          <img src={doctor.logo} alt="" className="h-full w-auto object-contain opacity-80" />
        </div>

        <p className="text-sm md:text-[16.5px] font-medium text-gray-900 leading-tight mb-0.5">
          {doctor.name}
        </p>
        <p className="text-xs md:text-[16.5px] text-gray-500 leading-snug mb-2">
          {doctor.role}
        </p>
        <p className="text-xs md:text-[16.5px] text-gray-600 leading-relaxed mb-3 line-clamp-2">
          {doctor.desc}
        </p>

        <button
          onClick={() => onLearnMore(doctor)}
          className="text-xs md:text-sm text-gray-900 font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors w-fit"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}