import { MinusIcon } from '../../icons/Icons';

export default function Checkbox({
  label,
  suffix,
  checked = false,
  onChange,
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className="bio_new-filter-item"
    >
      <span
        aria-hidden="true"
        className={[
          'bio_new-filter-check',
          checked && 'is-checked',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {checked && (
          <MinusIcon
            size={12}
            className="text-white"
          />
        )}
      </span>

      <span className="bio_new-filter-label">
        {label}
      </span>

      {suffix && (
        <span className="bio_new-filter-suffix">
          {suffix}
        </span>
      )}
    </button>
  );
}