import { useId, useState } from 'react';
import { ChevronDownIcon } from '../../icons/Icons';

export default function FilterGroup({
  title,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <section className="bio_new-filter-group">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((previous) => !previous)}
        className="bio_new-filter-group-header"
      >
        <span className="bio_new-filter-group-title">
          {title}
        </span>

        <ChevronDownIcon
          size={16}
          aria-hidden="true"
          className={[
            'text-slate-400 transition-transform duration-200',
            open && 'rotate-180',
          ]
            .filter(Boolean)
            .join(' ')}
        />
      </button>

      <div
        id={contentId}
        hidden={!open}
        className="bio_new-filter-group-content"
      >
        {children}
      </div>
    </section>
  );
}