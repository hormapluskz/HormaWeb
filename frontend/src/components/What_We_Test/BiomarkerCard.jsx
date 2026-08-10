import { useState } from 'react';
import { MinusIcon, PlusIcon } from '../../icons/Icons';

export default function BiomarkerCard({ data }) {
  const { name, desc, panels } = data;
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <div className="flex flex-1 flex-col gap-1 pr-4 sm:flex-row sm:items-center sm:gap-4">
          <span className="text-sm font-medium text-slate-900">{name}</span>
          <div className="flex flex-wrap gap-1.5">
            {panels.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className="shrink-0 text-slate-400">
          {open ? <MinusIcon size={18} /> : <PlusIcon size={18} />}
        </div>
      </button>

      {open && (
        <div className="pb-4">
          <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
          <div className="mt-3 flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
            >
              Learn more
            </a>
          </div>
          <p className="mt-3 text-[11px] leading-4 text-slate-400">
            Method: FDA-cleared clinical laboratory assay performed in CLIA-certified,
            CAP-accredited laboratories. Used to aid clinician-directed evaluation and
            monitoring. Not a stand-alone diagnosis.
          </p>
        </div>
      )}
    </div>
  );
}
