import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

export default function DoctorModal({ doctor, onClose }) {
  useLockBodyScroll(!!doctor);

  // Закрытие по Escape
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (!doctor) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [doctor, handleKeyDown]);

  if (!doctor) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl max-h-[85vh] overflow-y-auto shadow-2xl transform transition-all duration-300 sm:scale-100">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-6 md:p-10">
          <h3 id="modal-title" className="text-lg md:text-xl font-bold text-gray-900 mb-6">
            Meet the doctors on our medical advisory board
          </h3>

          <div className="flex flex-row gap-5 mb-6">
            <div className="w-28 sm:w-36 aspect-[3/4] rounded-xl overflow-hidden shrink-0 bg-gray-100">
              <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <img src={doctor.logo} alt="" className="h-5 w-auto object-contain mb-3 opacity-60" />
              <p className="text-base font-medium text-gray-900 mb-0.5">{doctor.name}</p>
              <p className="text-sm text-gray-500">{doctor.role}</p>
            </div>
          </div>

          <div className="text-sm text-gray-600 leading-relaxed space-y-4">
            <p>{doctor.fullBio}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}