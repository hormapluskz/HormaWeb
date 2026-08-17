export default function ResultsSummary({
  search,
  totalResults,
}) {
  if (search.trim()) {
    return (
      <p className="mb-6 text-sm text-slate-500">
        Found{' '}
        <strong className="font-semibold text-slate-700">
          {totalResults}
        </strong>{' '}
        {totalResults === 1 ? 'result' : 'results'} for{' '}
        <span className="text-slate-700">
          &ldquo;{search}&rdquo;
        </span>
      </p>
    );
  }

  return (
    <p className="mb-6 text-sm text-slate-500">
      Showing all{' '}
      <strong className="font-semibold text-slate-700">
        {totalResults}
      </strong>{' '}
      {totalResults === 1 ? 'biomarker' : 'biomarkers'}
    </p>
  );
}