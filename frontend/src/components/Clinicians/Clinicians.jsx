import { useState } from 'react';
import { doctors, logos } from '../../data/doctors';
import { useDragScroll } from '../../hooks/useDragScroll';
import LogoStrip from './LogoStrip';
import DoctorCard from './DoctorCard';
import DoctorModal from './DoctorModal';
import './index.css'

export default function Clinicians() {
  const [activeDoctor, setActiveDoctor] = useState(null);
  const { sliderRef, handlers } = useDragScroll();

  return (
    <>
    <section id="clinicians" className="py-20 md:py-32 bg-white">
      {/* Title + Logos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 md:mb-16">
        <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] font-bold text-gray-900 leading-[1.1] tracking-tight max-w-3xl mb-10 md:mb-14">
          Led by doctors with 40 years of health and longevity expertise
        </h2>
        <LogoStrip logos={logos} />
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="w-full overflow-x-auto pb-6 cursor-grab select-none snap-x snap-mandatory scrollbar-hide"
        {...handlers}
      >
        <div className="flex gap-4 md:gap-5 px-4 sm:px-6 lg:px-12 w-max">
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} onLearnMore={setActiveDoctor} />
          ))}
        </div>
      </div>

      
    </section>

    
    <DoctorModal doctor={activeDoctor} onClose={() => setActiveDoctor(null)} />
  
    </>
  );
}