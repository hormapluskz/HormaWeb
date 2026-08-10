import { useState } from 'react';
import { ChevronDownIcon } from '../../icons/Icons';

export default function FilterGroup({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-sm font-semibold text-slate-900"
      >
        {title}
        <ChevronDownIcon
          size={16}
          className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}
