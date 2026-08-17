import { useEffect, useRef, useState } from 'react';

import FilterGroup from './FilterGroup';
import Checkbox from './Checkbox';

import {
  CORE_PANELS,
  ADDONS,
  CATEGORIES,
} from '../../data/biomarkerData';

import './styles/sidebar.css';

export default function Sidebar({
  activeCategory,
  onCategoryChange,

  panelFilter,
  onPanelToggle,

  selectedAddons,
  onAddonToggle,

  onClearFilters,

  totalAllBiomarkers,
}) {
  const navRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const activeFilterCount =
    panelFilter.size + selectedAddons.size;

  useEffect(() => {
    const measureOverflow = () => {
      const element = navRef.current;

      if (!element) {
        return;
      }

      setHasOverflow(
        element.scrollHeight > element.clientHeight + 1
      );
    };

    measureOverflow();

    const observer = new ResizeObserver(measureOverflow);

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    window.addEventListener('resize', measureOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measureOverflow);
    };
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleScroll = () => {
    setIsScrolled(true);

    clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolled(false);
    }, 600);
  };

  return (
    <nav
      ref={navRef}
      onScroll={handleScroll}
      aria-label="Biomarker filters"
      className={[
        'bio_sidebar',
        hasOverflow && 'has-overflow',
        isScrolled && 'is-scrolled',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="bio_new-filter-section-header">
        <span className="bio_new-filter-section-title">
          Filters
          {activeFilterCount > 0 && (
            <span className="bio_new-modal-title-count">
              ({activeFilterCount})
            </span>
          )}
        </span>

        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onClearFilters}
            className="bio_new-filter-section-clear"
          >
            Clear all
          </button>
        )}
      </div>

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

      <div className="bio_new-location">
        <span className="bio_new-location-label">
          New York / New Jersey
        </span>

        <span
          aria-hidden="true"
          className="bio_new-location-switch"
        >
          <span className="bio_new-location-track" />
          <span className="bio_new-location-thumb" />
        </span>
      </div>

      <div className="bio_new-section-title">
        <span className="bio_new-section-title-text">
          Category
        </span>
      </div>

      <div className="bio_new-section-links">
        <CategoryButton
          active={activeCategory === 'all'}
          label="All categories"
          count={totalAllBiomarkers}
          onClick={() => onCategoryChange('all')}
        />

        {CATEGORIES.map((category) => (
          <CategoryButton
            key={category.slug}
            active={activeCategory === category.slug}
            empty={category.count === 0}
            label={category.name}
            count={category.count}
            onClick={() => onCategoryChange(category.slug)}
          />
        ))}
      </div>
    </nav>
  );
}

function CategoryButton({
  active,
  empty,
  label,
  count,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={[
        'bio_new-section-link',
        active && 'is-active',
        empty && 'is-empty',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="bio_new-section-link-name">
        {label}
      </span>

      <span className="bio_new-section-link-count">
        {count}
      </span>
    </button>
  );
}