import { MEMBERSHIP_SLIDES } from '../../data/membershipData';
import useMembershipCarousel from '../../hooks/useMembershipCarousel';

// Tripled so the loop can scroll seamlessly in either direction before
// silently snapping back to the middle set.
const extendedSlides = [...MEMBERSHIP_SLIDES, ...MEMBERSHIP_SLIDES, ...MEMBERSHIP_SLIDES];

export default function MembershipSlider() {
  const { trackRef, sliderRef, counterRef, registerBarFill, registerBar, handleBarClick } =
    useMembershipCarousel(MEMBERSHIP_SLIDES.length);

  return (
    <div className="membership-left lg:flex-[1_1_32rem] md:flex-[1_1_22rem]">
      <div ref={sliderRef} className="membership-slider">
        <div ref={trackRef} className="membership-track">
          {extendedSlides.map((slide, i) => (
            <div key={`${slide.id}-${i}`} className="membership-slide">
              <img src={slide.src} alt={slide.alt} className="membership-slide-img" draggable={false} />
            </div>
          ))}
        </div>
      </div>

      <div className="membership-nav">
        <div className="membership-bars">
          {MEMBERSHIP_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              ref={registerBar(i)}
              onClick={() => handleBarClick(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="membership-bar"
            >
              <div ref={registerBarFill(i)} className="membership-bar-fill" />
            </button>
          ))}
        </div>
        <div className="membership-counter">
          <span ref={counterRef}>1</span> / <span>{MEMBERSHIP_SLIDES.length}</span>
        </div>
      </div>
    </div>
  );
}