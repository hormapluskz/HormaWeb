import { MinusIcon } from '../../icons/Icons';

/**
 * Fully controlled (no internal state) so the parent's filter state is
 * always the single source of truth — the old version tracked "checked"
 * locally, which meant the Add-ons list visually toggled but never
 * actually affected anything.
 */
export default function Checkbox({ label, suffix, checked = false, onChange }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className="flex w-full items-center gap-3 text-left text-sm text-slate-700"
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
          checked ? 'border-slate-900 bg-slate-900' : 'border-slate-300'
        }`}
      >
        {checked && <MinusIcon size={12} className="text-white" />}
      </span>
      <span className="flex-1">{label}</span>
      {suffix && <span className="text-xs text-slate-400">{suffix}</span>}
    </button>
  );
}
