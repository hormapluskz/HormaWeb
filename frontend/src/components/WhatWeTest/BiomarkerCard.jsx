import { useId, useState } from 'react';
import { MinusIcon, PlusIcon } from '../../icons/Icons';

const METHOD_DISCLAIMER =
  'Method: FDA-cleared clinical laboratory assay performed in CLIA-certified, CAP-accredited laboratories. Used to aid clinician-directed evaluation and monitoring. Not a stand-alone diagnosis.';

export default function BiomarkerCard({ data }) {
  const {
    name,
    desc,
    panels = [],
  } = data;

  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <article className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((previous) => !previous)}
        className="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-slate-50 sm:px-5"
      >
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium leading-5 text-slate-900">
            {name}
          </span>
        </span>

        <span className="hidden w-52 shrink-0 items-center gap-1.5 sm:flex">
          {panels.slice(0, 2).map((panel) => (
            <span
              key={panel}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
            >
              {panel}
            </span>
          ))}

          {panels.length > 2 && (
            <span className="text-[11px] text-slate-400">
              +{panels.length - 2}
            </span>
          )}
        </span>

        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500"
        >
          {open ? (
            <MinusIcon size={13} />
          ) : (
            <PlusIcon size={13} />
          )}
        </span>
      </button>

      <div
        id={contentId}
        hidden={!open}
        className="px-4 pb-5 sm:px-5"
      >
        <div className="max-w-3xl">
          <p className="text-sm leading-6 text-slate-500">
            {desc}
          </p>

          <a
            href="#"
            onClick={(event) => event.stopPropagation()}
            className="mt-3 inline-flex text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:decoration-slate-900"
          >
            Learn more
          </a>

          <p className="mt-4 text-[11px] leading-4 text-slate-400">
            {METHOD_DISCLAIMER}
          </p>
        </div>
      </div>
    </article>
  );
}