import BiomarkerCard from './BiomarkerCard';
import { CATEGORY_ICON } from '../../data/biomarkerData';
import { BeakerIcon } from '../../icons/Icons';

export default function CategoryBlock({ category }) {
  const { slug, name, count, biomarkers } = category;
  const Icon = CATEGORY_ICON[slug] || BeakerIcon;

  if (count === 0 && biomarkers.length === 0) return null;

  return (
    <div className="mb-10" data-category={slug}>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
          <Icon size={20} />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
        <span className="ml-auto text-sm text-slate-400">{count}</span>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white px-4 sm:px-6">
        <div className="flex border-b border-slate-100 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <span className="flex-1">Biomarker</span>
          <span className="hidden sm:block">Included in</span>
        </div>
        {biomarkers.length === 0 ? (
          <div className="py-8 text-center text-sm text-slate-400">
            No biomarkers in this category
          </div>
        ) : (
          biomarkers.map((b) => <BiomarkerCard key={b.slug} data={b} />)
        )}
      </div>
    </div>
  );
}
