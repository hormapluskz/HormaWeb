import Hero from './Hero';
import Sidebar from './Sidebar';
import MobileFilters from './MobileFilters';
import SearchBar from './SearchBar';
import ResultsSummary from './ResultsSummary';
import CategoryBlock from './CategoryBlock';
import EmptyState from './EmptyState';

import useBiomarkerFilters from '../../hooks/useBiomarkerFilters';
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

    clearFilters,

    filteredCategories,
    totalResults,
    totalAllBiomarkers,
    activeFilterCount,
  } = useBiomarkerFilters(CATEGORIES);

  return (
    <>
      <Hero />

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Desktop filters */}
          <div className="hidden w-72 shrink-0 lg:block">
            <Sidebar
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              panelFilter={panelFilter}
              onPanelToggle={togglePanel}
              selectedAddons={selectedAddons}
              onAddonToggle={toggleAddon}
              onClearFilters={clearFilters}
              totalAllBiomarkers={totalAllBiomarkers}
            />
          </div>

          {/* Main content */}
          <section className="min-w-0 flex-1">
            <header className="mb-7">
              <h1 className="text-3xl tracking-tight text-slate-900 sm:text-[31px]">
                What we test
              </h1>

              <p className="mt-2 max-w-2xl text-[15px] leading-6 text-slate-600">
                Your biomarkers are more than just numbers. They give you a
                glimpse into how well your body is operating. Explore what&apos;s
                measured in our biomarker blood tests so you can select the
                panels that are best for you.
              </p>
            </header>

            <div className="lg:hidden">
              <MobileFilters
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                panelFilter={panelFilter}
                onPanelToggle={togglePanel}
                selectedAddons={selectedAddons}
                onAddonToggle={toggleAddon}
                onClearFilters={clearFilters}
                activeFilterCount={activeFilterCount}
                totalAllBiomarkers={totalAllBiomarkers}
              />
            </div>

            <SearchBar value={search} onChange={setSearch} />

            <ResultsSummary
              search={search}
              totalResults={totalResults}
            />

            {filteredCategories.length === 0 ? (
              <EmptyState
                search={search}
                onClearSearch={() => setSearch('')}
              />
            ) : (
              <div className="space-y-8">
                {filteredCategories.map((category) => (
                  <CategoryBlock
                    key={category.slug}
                    category={category}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}