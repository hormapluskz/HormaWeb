import BiomarkerCard from './BiomarkerCard';
import { CATEGORY_ICON } from '../../data/biomarkerData';
import { BeakerIcon } from '../../icons/Icons';

export default function CategoryBlock({ category }) {
  const {
    slug,
    name,
    count,
    biomarkers,
  } = category;

  const Icon = CATEGORY_ICON[slug] || BeakerIcon;

  if (!biomarkers.length) {
    return null;
  }

  return (
    <section
      id={`category-${slug}`}
      className="scroll-mt-24"
      aria-labelledby={`category-title-${slug}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
          <Icon size={15} aria-hidden="true" />
        </span>

        <h2
          id={`category-title-${slug}`}
          className="text-base font-semibold text-slate-900"
        >
          {name}
        </h2>

        <span className="text-sm text-slate-400">
          {count}
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="hidden border-b border-slate-100 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:flex">
          <span className="flex-1">
            Biomarker
          </span>

          <span className="w-52">
            Included in
          </span>
        </div>

        <div>
          {biomarkers.map((biomarker) => (
            <BiomarkerCard
              key={biomarker.slug}
              data={biomarker}
            />
          ))}
        </div>
      </div>
    </section>
  );
}