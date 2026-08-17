import { MEMBERSHIP_BULLETS } from '../../data/membershipData';

export default function MembershipBullets() {
  return (
    <div className="membership-bullets min-[880px]:gap-1">
      {MEMBERSHIP_BULLETS.map((bullet) => (
        <div key={bullet} className="membership-bullet-item">
          <div className="membership-bullet-dot" />
          <p className="membership-bullet-text text-[#666666]">{bullet}</p>
        </div>
      ))}
    </div>
  );
}