import { useState, useRef, useCallback } from 'react';

export function useDragScroll() {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);

  const handleMouseDown = useCallback((e) => {
    setIsDown(true);
    const slider = sliderRef.current;
    if (!slider) return;
    slider.style.cursor = 'grabbing';
    slider.dataset.startX = e.pageX - slider.offsetLeft;
    slider.dataset.scrollLeft = slider.scrollLeft;
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDown(false);
    if (sliderRef.current) sliderRef.current.style.cursor = 'grab';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - Number(slider.dataset.startX)) * 1.5;
    slider.scrollLeft = Number(slider.dataset.scrollLeft) - walk;
  }, [isDown]);

  return {
    sliderRef,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseUp,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
    },
  };
}