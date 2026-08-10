/* ═══════════════ SVG ICONS ═══════════════
 * Small, single-purpose stroke icons. Each one is a thin wrapper around
 * IconWrapper so sizing/stroke/colour stay consistent across the app.
 */

export const IconWrapper = ({ size = 24, className = '', children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export const SearchIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </IconWrapper>
);

export const XIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconWrapper>
);

export const ChevronDownIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="m6 9 6 6 6-6" />
  </IconWrapper>
);

export const PlusIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </IconWrapper>
);

export const MinusIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M5 12h14" />
  </IconWrapper>
);

export const BrainIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path d="M6 18a4 4 0 0 1-1.967-.516" />
    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
  </IconWrapper>
);

export const DnaIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="m2 15 6-6" />
    <path d="m8 21 6-6" />
    <path d="m14 15 6-6" />
    <path d="m8 3 6 6" />
    <path d="m14 9 6 6" />
    <path d="m2 9 6 6" />
    <circle cx="12" cy="12" r="2" />
  </IconWrapper>
);

export const ZapIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);

export const HeartIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </IconWrapper>
);

export const ShieldIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </IconWrapper>
);

export const FlameIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </IconWrapper>
);

export const ActivityIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </IconWrapper>
);

export const DropletsIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-6.5C15.5 7.5 13 2 12 2S8.5 7.5 8 8.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" />
  </IconWrapper>
);

export const UtensilsIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </IconWrapper>
);

export const UsersIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconWrapper>
);

export const ThermometerIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
  </IconWrapper>
);

export const SkullIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <path d="M8 20v2h8v-2" />
    <path d="m12 17 1-2 1 2" />
    <path d="M15 17a5 5 0 0 0-6 0" />
    <path d="M12 14a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3a5 5 0 0 1 5-5h1" />
  </IconWrapper>
);

export const BeakerIcon = ({ size, className, ...p }) => (
  <IconWrapper size={size} className={className} {...p}>
    <path d="M4.5 3h15" />
    <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
    <path d="M6 14h12" />
  </IconWrapper>
);
