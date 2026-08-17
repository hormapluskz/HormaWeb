// export const handleNavClick = (event, href) => {
//   if (!href?.startsWith('#')) {
//     return;
//   }

//   event.preventDefault();

//   const targetId = href.slice(1);
//   const target = document.getElementById(targetId);

//   if (!target) {
//     return;
//   }

//   const HEADER_OFFSET = 80;

//   const targetPosition =
//     target.getBoundingClientRect().top +
//     window.scrollY -
//     HEADER_OFFSET;

//   window.scrollTo({
//     top: targetPosition,
//     behavior: 'smooth',
//   });
// };

// hooks/useHandleNavClick.js
import { useNavigate, useLocation } from 'react-router-dom';

export function useHandleNavClick() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    // 1. Handle anchor links (e.g. '#features' or '/#features')
    if (href.includes('#')) {
      e.preventDefault();
      const targetId = href.substring(href.indexOf('#')); // Extracts "#features"

      if (location.pathname === '/') {
        // Already on home page: smooth scroll directly
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', targetId);
        }
      } else {
        // On another page (e.g. /whatWeTest): Navigate home and pass the target element in state
        navigate('/', { state: { scrollTo: targetId } });
      }
    }
  };

  return handleNavClick;
}