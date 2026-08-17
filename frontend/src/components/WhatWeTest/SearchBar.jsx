import {
  SearchIcon,
  XIcon,
} from '../../icons/Icons';

export default function SearchBar({
  value,
  onChange,
}) {
  const hasValue = value.length > 0;

  return (
    <div className="relative mb-5">
      <SearchIcon
        size={18}
        aria-hidden="true"
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search biomarkers..."
        aria-label="Search biomarkers"
        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
      />

      {hasValue && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3.5 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-200"
        >
          <XIcon
            size={15}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}