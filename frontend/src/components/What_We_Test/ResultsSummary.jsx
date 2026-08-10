export default function ResultsSummary({ search, totalResults }) {
  return (
    <div className="mb-6 text-sm text-slate-500">
      {search ? (
        <span>
          Found <strong>{totalResults}</strong> results for &ldquo;{search}&rdquo;
        </span>
      ) : (
        <span>
          Showing all <strong>{totalResults}</strong> biomarkers
        </span>
      )}
    </div>
  );
}
