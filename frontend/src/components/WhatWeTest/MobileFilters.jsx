import { useState } from 'react';

import FilterGroup from './FilterGroup';
import Checkbox from './Checkbox';

import {
  CORE_PANELS,
  ADDONS,
  CATEGORIES,
} from '../../data/biomarkerData';

import { ChevronDownIcon, XIcon } from '../../icons/Icons';

export default function MobileFilters({
  activeCategory,
  onCategoryChange,

  panelFilter,
  onPanelToggle,

  selectedAddons,
  onAddonToggle,

  onClearFilters,
  activeFilterCount,
  totalAllBiomarkers,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      <div className="mb-4 overflow-x-auto">
        <div className="flex min-w-max gap-2 pb-1">
          <CategoryChip
            active={activeCategory === 'all'}
            label="All"
            count={totalAllBiomarkers}
            onClick={() => onCategoryChange('all')}
          />

          {CATEGORIES.map((category) => (
            <CategoryChip
              key={category.slug}
              active={activeCategory === category.slug}
              disabled={category.count === 0}
              label={category.name}
              count={category.count}
              onClick={() => onCategoryChange(category.slug)}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900"
      >
        <span>
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-1 text-slate-400">
              ({activeFilterCount})
            </span>
          )}
        </span>

        <ChevronDownIcon
          size={17}
          className={[
            'text-slate-400 transition-transform',
            open && 'rotate-180',
          ]
            .filter(Boolean)
            .join(' ')}
        />
      </button>

      {open && (
        <div className="mt-2 rounded-xl border border-slate-200 bg-white p-4">
          {activeFilterCount > 0 && (
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={onClearFilters}
                className="text-xs font-medium text-slate-500 hover:text-slate-900"
              >
                Clear all
              </button>
            </div>
          )}

          <FilterGroup
            title="Core panels"
            defaultOpen
          >
            <div className="bio_new-filter-list">
              {CORE_PANELS.map((panel) => (
                <Checkbox
                  key={panel.slug}
                  label={panel.label}
                  suffix={panel.suffix}
                  checked={panelFilter.has(panel.slug)}
                  onChange={(checked) =>
                    onPanelToggle(panel.slug, checked)
                  }
                />
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Add-ons">
            <div className="bio_new-filter-list-scroll">
              {ADDONS.map((addon) => (
                <Checkbox
                  key={addon}
                  label={addon}
                  checked={selectedAddons.has(addon)}
                  onChange={(checked) =>
                    onAddonToggle(addon, checked)
                  }
                />
              ))}
            </div>
          </FilterGroup>
        </div>
      )}
    </div>
  );
}

function CategoryChip({
  label,
  count,
  active,
  disabled,
  onClick,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        'rounded-full border px-3 py-2 text-xs font-medium transition-colors',
        active
          ? 'border-slate-900 bg-slate-900 text-white'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900',
        disabled && 'cursor-not-allowed opacity-40',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
      <span className={active ? 'ml-1 text-white/60' : 'ml-1 text-slate-400'}>
        {count}
      </span>
    </button>
  );
}