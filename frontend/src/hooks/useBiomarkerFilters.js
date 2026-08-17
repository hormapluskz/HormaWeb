import { useState, useMemo, useCallback } from 'react';

/**
 * Owns all search/filter state for the "What we test" page and derives the
 * filtered category list from it. Keeping this in one hook (rather than in
 * App.jsx directly) makes App a thin composition layer and makes the
 * filtering logic independently testable.
 */
export default function useBiomarkerFilters(categories) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [panelFilter, setPanelFilter] = useState(() => new Set(['advanced']));
  const [selectedAddons, setSelectedAddons] = useState(() => new Set());

  const togglePanel = useCallback((slug, value) => {
    setPanelFilter((prev) => {
      if (slug === 'clear') return new Set();
      const next = new Set(prev);
      if (value) next.add(slug);
      else next.delete(slug);
      return next;
    });
  }, []);

  const toggleAddon = useCallback((addon, value) => {
    setSelectedAddons((prev) => {
      if (addon === 'clear') return new Set();
      const next = new Set(prev);
      if (value) next.add(addon);
      else next.delete(addon);
      return next;
    });
  }, []);

  const filteredCategories = useMemo(() => {
    let cats = categories;

    if (activeCategory !== 'all') {
      cats = cats.filter((c) => c.slug === activeCategory);
    }

    const query = search.trim().toLowerCase();
    if (query) {
      cats = cats
        .map((c) => ({
          ...c,
          biomarkers: c.biomarkers.filter(
            (b) =>
              b.name.toLowerCase().includes(query) ||
              b.desc.toLowerCase().includes(query)
          ),
        }))
        .filter((c) => c.biomarkers.length > 0);
    }

    return cats;
  }, [categories, search, activeCategory]);

  const totalResults = useMemo(
    () => filteredCategories.reduce((sum, c) => sum + c.biomarkers.length, 0),
    [filteredCategories]
  );

  const totalAllBiomarkers = useMemo(
    () => categories.reduce((sum, c) => sum + c.count, 0),
    [categories]
  );

  return {
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    panelFilter,
    togglePanel,
    selectedAddons,
    toggleAddon,
    filteredCategories,
    totalResults,
    totalAllBiomarkers,
  };
}
