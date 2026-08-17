import { XIcon } from '../../icons/Icons';

export default function EmptyState({
  search,
  onClearSearch,
}) {
  return (
    <div className="rounded-xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        <XIcon size={17} />
      </div>

      <h2 className="mt-4 text-base font-semibold text-slate-900">
        No results found
      </h2>

      <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-slate-500">
        {search
          ? `We couldn't find any biomarkers matching "${search}".`
          : 'There are no biomarkers matching the selected filters.'}
      </p>

      {(search || true) && (
        <button
          type="button"
          onClick={onClearSearch}
          className="mt-4 text-sm font-medium text-slate-900 underline underline-offset-4"
        >
          Clear search
        </button>
      )}
    </div>
  );
}