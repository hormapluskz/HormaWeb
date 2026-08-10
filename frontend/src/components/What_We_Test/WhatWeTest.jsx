
import Hero from './Hero';
import Sidebar from './Sidebar';
import MobileFilters from './MobileFilters';
import SearchBar from './SearchBar';
import ResultsSummary from './ResultsSummary';
import CategoryBlock from './CategoryBlock';

import useBiomarkerFilters from '../../hooks/useBiomarkerFilters1';
import { CATEGORIES } from '../../data/biomarkerData';

export default function WhatWeTest() {
  const {
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
  } = useBiomarkerFilters(CATEGORIES);

  return (
    <>
      <Hero />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Desktop filters */}
          <aside className="hidden lg:block">
            <Sidebar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              panelFilter={panelFilter}
              onPanelToggle={togglePanel}
              selectedAddons={selectedAddons}
              onAddonToggle={toggleAddon}
              totalAllBiomarkers={totalAllBiomarkers}
            />
          </aside>

          {/* Main content */}
          <div className="min-w-0 flex-1">
            {/* Mobile filters */}
            <div className="mb-6 lg:hidden">
              <MobileFilters
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                panelFilter={panelFilter}
                onPanelToggle={togglePanel}
                selectedAddons={selectedAddons}
                onAddonToggle={toggleAddon}
                totalAllBiomarkers={totalAllBiomarkers}
              />
            </div>

            <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto lg:pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <header className="mb-8">
                <h1 className="text-[31px] tracking-tight text-slate-900">
                  What we test
                </h1>

                <p className="mt-2 max-w-2xl text-[15px] text-slate-600">
                  Your biomarkers are more than just numbers. They give you a
                  glimpse into how well your body is operating. Explore what&apos;s
                  measured in our biomarker blood tests so you can select the
                  panels that are best for you.
                </p>
              </header>

              <SearchBar
                value={search}
                onChange={setSearch}
              />

              <ResultsSummary
                search={search}
                totalResults={totalResults}
              />

              {filteredCategories.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-200 py-16 text-center">
                  <p className="text-lg text-slate-900">
                    No results found
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Try a different search term
                  </p>
                </div>
              ) : (
                filteredCategories.map((category) => (
                  <CategoryBlock
                    key={category.slug}
                    category={category}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

