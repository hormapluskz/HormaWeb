import FilterGroup from './FilterGroup';
import Checkbox from './Checkbox';
// import ToggleSwitch from './ToggleSwitch';
import { CORE_PANELS, ADDONS, CATEGORIES } from '../../data/biomarkerData';
import { useEffect, useRef, useState } from 'react';
import './styles/sidebar.css'

const Chevron = () => (
  <svg viewBox="0 0 10 6" fill="none" className="filter-chevron-icon">
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// function FilterGroup({ title, defaultOpen = false, children }) {
//   const [open, setOpen] = useState(defaultOpen);
//   const toggle = () => setOpen((p) => !p);
//   return (
//     <div data-bio-open={open ? '1' : '0'} className="bio_new-filter-group">
//       <div
//         role="button"
//         tabIndex={0}
//         onClick={toggle}
//         onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle())}
//         className="bio_new-filter-group-header"
//       >
//         <div className="bio_new-filter-group-title">{title}</div>
//         <div className={`bio_new-filter-group-chevron ${open ? 'is-open' : ''}`}>
//           <Chevron />
//         </div>
//       </div>
//       {open && <div className="bio_new-filter-list">{children}</div>}
//     </div>
//   );
// }

function FilterItem({ label, suffix, slug, type, checked, onChange }) {
  const toggle = () => onChange(!checked);
  return (
    <div
      role="checkbox"
      tabIndex={0}
      aria-checked={checked}
      data-bio-panel-slug={slug}
      data-bio-panel-type={type}
      onClick={toggle}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle())}
      className="bio_new-filter-item"
    >
      <div className="bio_new-filter-check" />
      <div className="bio_new-filter-label">
        {label} {suffix && <span className="bio_new-filter-suffix">{suffix}</span>}
      </div>
    </div>
  );
}

export default function Sidebar({
  activeCategory,
  onCategoryChange,
  panelFilter,
  onPanelToggle,
  selectedAddons,
  onAddonToggle,
  totalAllBiomarkers,
}) {
  const navRef = useRef(null);
  const scrollTimeout = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);

  const activeFilterCount = panelFilter.size + selectedAddons.size;

  // Scrollbar is invisible at rest, appears while actively scrolling, and
  // fades back out ~600ms after scrolling stops.
  const handleScroll = () => {
    setIsScrolled(true);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolled(false), 600);
  };

  useEffect(() => {
    const measure = () => {
      const el = navRef.current;
      if (el) setHasOverflow(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => () => clearTimeout(scrollTimeout.current), []);

  const clearAll = () => {
    onPanelToggle('clear');
    onAddonToggle('clear');
  };

  return (
    <nav
      ref={navRef}
      onScroll={handleScroll}
      className={`bio_sidebar ${hasOverflow ? 'has-overflow' : ''} ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <div className="bio_new-sidebar-inner">
        <div className="bio_new-filter-section-header">
          <div className="bio_new-filter-section-title">
            Filters{' '}
            <span className="bio_new-modal-title-count">
              {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
            </span>
          </div>
          {activeFilterCount > 0 && (
            <a href="#" onClick={(e) => (e.preventDefault(), clearAll())} className="bio_new-filter-section-clear">
              Clear all
            </a>
          )}
        </div>

        <FilterGroup title="Core panels" defaultOpen>
          {CORE_PANELS.map(({ slug, label, suffix }) => (
            <FilterItem
              key={slug}
              slug={slug}
              type="core"
              label={label}
              suffix={suffix}
              checked={panelFilter.has(slug)}
              onChange={(next) => onPanelToggle(slug, next)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Add-ons">
          <div className="bio_new-filter-list-scroll">
            {ADDONS.map((addon) => (
              <FilterItem
                key={addon}
                slug={addon}
                type="addon"
                label={addon}
                checked={selectedAddons.has(addon)}
                onChange={(next) => onAddonToggle(addon, next)}
              />
            ))}
          </div>
        </FilterGroup>

        <div className="bio_new-location">
          <div className="bio_new-location-label">New York / New Jersey</div>
          <div
            role="switch"
            tabIndex={0}
            aria-checked={locationEnabled}
            onClick={() => setLocationEnabled((p) => !p)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setLocationEnabled((p) => !p))}
            className="bio_new-location-switch"
          >
            <div className="bio_new-location-track" />
            <div className="bio_new-location-thumb" />
          </div>
        </div>

        <div className="bio_new-section-title">
          <div className="bio_new-section-title-text">Category</div>
        </div>

        <div className="bio_new-section-links">
          <div
            role="button"
            tabIndex={0}
            onClick={() => onCategoryChange('all')}
            className={`bio_new-section-link ${activeCategory === 'all' ? 'is-active' : ''}`}
          >
            <div className="bio_new-section-link-name">All categories</div>
            <div className="bio_new-section-link-count is-show">{totalAllBiomarkers}</div>
          </div>

          {CATEGORIES.map(({ slug, name, count }) => (
            <div
              key={slug}
              role="button"
              tabIndex={0}
              onClick={() => onCategoryChange(slug)}
              className={`bio_new-section-link ${activeCategory === slug ? 'is-active' : ''} ${
                count === 0 ? 'is-empty' : ''
              }`}
            >
              <div className="bio_new-section-link-name">{name}</div>
              <div className="bio_new-section-link-count is-show">{count}</div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}