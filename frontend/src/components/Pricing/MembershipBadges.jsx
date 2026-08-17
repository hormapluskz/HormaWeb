import { MEMBERSHIP_BADGES } from '../../data/membershipData';
import { HsaIcon, CancelIcon, ResultsIcon } from '../../icons/BadgeIcons';

const ICON_MAP = { hsa: HsaIcon, cancel: CancelIcon, results: ResultsIcon };

export default function MembershipBadges() {
  return (
    <div className="membership-badges">
      {MEMBERSHIP_BADGES.map(({ id, label }) => {
        const Icon = ICON_MAP[id];
        return (
          <div key={id} className="membership-badge">
            <Icon className="membership-badge-icon" />
            <div>{label}</div>
          </div>
        );
      })}
    </div>
  );
}