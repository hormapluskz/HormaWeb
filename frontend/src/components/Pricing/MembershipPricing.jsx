import { MEMBERSHIP_PRICING } from '../../data/membershipData';

export default function MembershipPricing() {
  const { price, period, billing } = MEMBERSHIP_PRICING;
  return (
    <div className="membership-pricing">
      <div className="membership-price">{price}</div>
      <div className="membership-price-label">
        <p className="membership-price-period">{period}</p>
        <p className="membership-price-billing">{billing}</p>
      </div>
    </div>
  );
}