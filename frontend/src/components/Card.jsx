export default function Card({ src, text, desc }) {
  return (
    <div className="p-4 sm:p-5 flex flex-col justify-start items-stretch shadow-sm">

      <div className="w-full xl:w-[314px] lg:w-[230px] aspect-square rounded-xl overflow-hidden mx-auto xl:mx-0">
        <img 
          src={src} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="mt-4 w-full xl:w-[314px] mx-auto xl:mx-0">
        <h2 className="tracking-[-0.025rem] text-[20px] sm:text-[24px] font-normal">
          {text}
        </h2>
        <p className="mt-1 text-[14px] sm:text-[16px] text-[#71717a] leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}