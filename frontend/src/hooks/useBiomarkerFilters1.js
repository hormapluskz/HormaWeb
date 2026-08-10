import { useCallback, useMemo, useState } from 'react';

const normalize = (value = '') => value.trim().toLowerCase();

export default function useBiomarkerFilters(categories) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const [panelFilter, setPanelFilter] = useState(
    () => new Set(['advanced'])
  );

  const [selectedAddons, setSelectedAddons] = useState(
    () => new Set()
  );

  const togglePanel = useCallback((slug, value) => {
    setPanelFilter((previous) => {
      if (slug === 'clear') {
        return new Set();
      }

      const next = new Set(previous);

      if (value) {
        next.add(slug);
      } else {
        next.delete(slug);
      }

      return next;
    });
  }, []);

  const toggleAddon = useCallback((addon, value) => {
    setSelectedAddons((previous) => {
      if (addon === 'clear') {
        return new Set();
      }

      const next = new Set(previous);

      if (value) {
        next.add(addon);
      } else {
        next.delete(addon);
      }

      return next;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setPanelFilter(new Set());
    setSelectedAddons(new Set());
    setActiveCategory('all');
    setSearch('');
  }, []);

  const matchesPanelFilter = useCallback(
    (biomarker) => {
      if (panelFilter.size === 0) {
        return true;
      }

      const biomarkerPanels = biomarker.panels ?? [];

      const selectedPanelNames = new Set(
        [...panelFilter].map(normalize)
      );

      return biomarkerPanels.some((panel) =>
        selectedPanelNames.has(normalize(panel))
      );
    },
    [panelFilter]
  );

  const matchesAddonFilter = useCallback(
    (biomarker) => {
      if (selectedAddons.size === 0) {
        return true;
      }

      const biomarkerPanels = biomarker.panels ?? [];

      const normalizedBiomarkerPanels = new Set(
        biomarkerPanels.map(normalize)
      );

      return [...selectedAddons].some((addon) =>
        normalizedBiomarkerPanels.has(normalize(addon))
      );
    },
    [selectedAddons]
  );

  const filteredCategories = useMemo(() => {
    const query = normalize(search);

    let result = categories;

    if (activeCategory !== 'all') {
      result = result.filter(
        (category) => category.slug === activeCategory
      );
    }

    return result
      .map((category) => {
        const biomarkers = category.biomarkers.filter((biomarker) => {
          const matchesSearch =
            !query ||
            normalize(biomarker.name).includes(query) ||
            normalize(biomarker.desc).includes(query);

          return (
            matchesSearch &&
            matchesPanelFilter(biomarker) &&
            matchesAddonFilter(biomarker)
          );
        });

        return {
          ...category,
          biomarkers,
        };
      })
      .filter((category) => category.biomarkers.length > 0);
  }, [
    categories,
    search,
    activeCategory,
    matchesPanelFilter,
    matchesAddonFilter,
  ]);

  const totalResults = useMemo(
    () =>
      filteredCategories.reduce(
        (total, category) => total + category.biomarkers.length,
        0
      ),
    [filteredCategories]
  );

  const totalAllBiomarkers = useMemo(
    () =>
      categories.reduce(
        (total, category) => total + category.count,
        0
      ),
    [categories]
  );

  const activeFilterCount =
    panelFilter.size + selectedAddons.size;

  return {
    search,
    setSearch,

    activeCategory,
    setActiveCategory,

    panelFilter,
    togglePanel,

    selectedAddons,
    toggleAddon,

    clearFilters,

    filteredCategories,

    totalResults,
    totalAllBiomarkers,
    activeFilterCount,
  };
}