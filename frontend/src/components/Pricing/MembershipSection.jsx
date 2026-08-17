import MembershipSlider from './MembershipSlider';
import MembershipBullets from './MembershipBullets';
import MembershipPricing from './MembershipPricing';
import MembershipBadges from './MembershipBadges';
import { MEMBERSHIP_CTA, MEMBERSHIP_PRICING } from '../../data/membershipData';

export default function MembershipSection() {
  return (
    <section id='pricing' className="membership-section">
      <div className="membership-container">
        <div className="membership-wrapper">
          <MembershipSlider />

          <div className="membership-right">
            <h2 className="membership-heading">Your membership starts here</h2>

            <MembershipBullets />
            <MembershipPricing />

            <div className="membership-cta-wrapper">
              <a href={MEMBERSHIP_CTA.href} className="membership-cta">
                <span>{MEMBERSHIP_CTA.label}</span>
              </a>
              <MembershipBadges />
            </div>

            <p className="membership-disclaimer">{MEMBERSHIP_PRICING.disclaimer}</p>
          </div>
        </div>
      </div>

      <style>{`
        .membership-section { padding: 0rem 1.5rem; padding-bottom: 5rem; }
        .membership-container { max-width: 80rem; margin: 0 auto; }
        .membership-wrapper { display: flex; flex-wrap: wrap; gap: 3rem; align-items: center; }

        .membership-left { min-width: 0; max-width: 39rem; width: 100%; }
        .membership-slider { min-width: 0; max-width: 100%; width: 100%; overflow: hidden; border-radius: 1rem; cursor: grab; }
        .membership-track { display: flex; gap: 1rem; user-select: none; will-change: transform; }
        .membership-slide { flex-shrink: 0; width: 100%; aspect-ratio: 1 / 1; border-radius: 1rem; overflow: hidden; background: #18181b; }
        .membership-slide-img { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }

        .membership-nav { display: flex; align-items: center; gap: 1rem; margin-top: 1rem; }
        .membership-bars { display: flex; flex: 1; gap: 0.375rem; }
        .membership-bar {
          flex: 1; height: 3px; border-radius: 9999px; background-color: rgba(24, 24, 27, 0.2);
          border: none; padding: 0; cursor: pointer; overflow: hidden;
          transition: flex-grow 0.75s cubic-bezier(0.45, 0, 0.55, 1);
        }
        .membership-bar-fill { height: 100%; width: 0%; background-color: #18181b; border-radius: 9999px; }
        .membership-counter { font-size: 0.875rem; color: #71717a; white-space: nowrap; overflow: hidden; }

        .membership-right { flex: 1 1 20rem; min-width: 18rem; }
        .membership-heading { font-size: 2rem; font-weight: 600; margin-bottom: 1.5rem; color: #18181b; }

        .membership-bullets { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; }
        .membership-bullet-item { display: flex; align-items: center; gap: 0.75rem; }
        .membership-bullet-dot { width: 6px; height: 6px; border-radius: 9999px; background-color: #18181b; flex-shrink: 0; }
        .membership-bullet-text { font-size: 0.9rem; color: #3f3f46; margin: 0; }

        .membership-pricing { display: flex; align-items: baseline; gap: 0.75rem; margin-top: 1.5rem; }
        .membership-price { font-size: 2.5rem; font-weight: 600; color: #18181b; }
        .membership-price-label { display: flex; flex-direction: column; line-height: 1.2; }
        .membership-price-period { font-size: 0.875rem; color: #3f3f46; margin: 0; }
        .membership-price-billing { font-size: 0.75rem; color: #a1a1aa; margin: 0; }

        .membership-cta-wrapper { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
        .membership-cta {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
          padding: 0.875rem 2rem; border-radius: 9999px; background-color: #18181b; color: #fff;
          font-size: 0.9375rem; font-weight: 500; text-decoration: none; transition: opacity 0.2s;
        }
        .membership-cta:hover { opacity: 0.9; }
        .membership-cta-icon { width: 16px; height: 16px; }

        .membership-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
        .membership-badge { display: flex; align-items: center; gap: 0.375rem; font-size: 0.8rem; color: #71717a; }
        .membership-badge-icon { width: 14px; height: 14px; color: #a1a1aa; }

        .membership-disclaimer { margin-top: 1rem; font-size: 0.75rem; color: #a1a1aa; }

        @media (max-width: 767px) {
          .membership-wrapper { flex-direction: column; }
          .membership-left { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}