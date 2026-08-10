import { SearchIcon, XIcon } from '../../icons/Icons';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mb-6">
      <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search biomarkers..."
        aria-label="Search biomarkers"
        className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm outline-none transition focus:border-slate-400"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          <XIcon size={16} />
        </button>
      )}
    </div>
  );
}
