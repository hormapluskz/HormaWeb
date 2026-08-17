import { useRef, useEffect, useCallback } from 'react';

const DURATION = 5000;
const TRANSITION_MS = 750;

export default function useMembershipCarousel(realTotal) {
  const trackRef = useRef(null);
  const sliderRef = useRef(null);
  const counterRef = useRef(null);
  const barFillRefs = useRef([]);
  const barRefs = useRef([]);

  // Mutable carousel state that shouldn't trigger re-renders on every tick.
  const state = useRef({
    current: realTotal, // starts on the middle (real) copy of the 3x-cloned track
    remaining: DURATION,
    lastTick: 0,
    timer: null,
    snapTimer: null,
    dragging: false,
    dragActive: false,
    startX: 0,
    moveX: 0,
    startTx: 0,
  }).current;

  const realIndexOf = useCallback(
    (i) => ((i % realTotal) + realTotal) % realTotal,
    [realTotal]
  );

  const slideOffset = useCallback((index) => {
    const track = trackRef.current;
    const slide = track?.children[index];
    return slide ? slide.offsetLeft : 0;
  }, []);

  const updateBars = useCallback((realIdx) => {
    barRefs.current.forEach((bar, i) => bar?.classList.toggle('is-active', i === realIdx));
  }, []);

  const animateCounter = useCallback((value, dir) => {
    const el = counterRef.current;
    if (!el) return;
    el.style.transition = 'transform 0.25s ease-in, opacity 0.25s ease-in';
    el.style.transform = `translateX(${-dir * 100}%)`;
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = value;
      el.style.transition = 'none';
      el.style.transform = `translateX(${dir * 100}%)`;
      void el.offsetWidth; // force reflow so the next transition actually animates
      el.style.transition = 'transform 0.25s ease-out, opacity 0.25s ease-out';
      el.style.transform = 'translateX(0)';
      el.style.opacity = '1';
    }, 250);
  }, []);

  const play = useCallback(() => {
    clearTimeout(state.timer);
    state.lastTick = Date.now();
    const realIdx = realIndexOf(state.current);
    const fill = barFillRefs.current[realIdx];
    if (!fill) return;

    const pct = ((DURATION - state.remaining) / DURATION) * 100;
    fill.style.transition = 'none';
    fill.style.width = `${pct}%`;
    void fill.offsetWidth;
    fill.style.transition = `width ${state.remaining}ms linear`;
    fill.style.width = '100%';

    state.timer = setTimeout(() => {
      state.remaining = DURATION;
      goTo(state.current + 1, 1);
    }, state.remaining);
  }, [realIndexOf]);

  const pause = useCallback(() => {
    clearTimeout(state.timer);
    if (!state.lastTick) return;
    const elapsed = Date.now() - state.lastTick;
    state.remaining = Math.max(50, state.remaining - elapsed);
    const realIdx = realIndexOf(state.current);
    const fill = barFillRefs.current[realIdx];
    if (!fill) return;
    const pct = ((DURATION - state.remaining) / DURATION) * 100;
    fill.style.transition = 'none';
    fill.style.width = `${pct}%`;
  }, [realIndexOf]);

  const goTo = useCallback(
    (index, dir = 1) => {
      const track = trackRef.current;
      if (!track) return;

      const prevReal = realIndexOf(state.current);
      state.current = index;
      state.remaining = DURATION;

      track.style.transition = `transform ${TRANSITION_MS / 1000}s cubic-bezier(0.45, 0, 0.55, 1)`;
      track.style.transform = `translate3d(-${slideOffset(index)}px, 0, 0)`;

      const realIdx = realIndexOf(index);
      if (realIdx !== prevReal) animateCounter(realIdx + 1, dir);
      updateBars(realIdx);
      barFillRefs.current.forEach((fill, i) => {
        if (i !== realIdx && fill) {
          fill.style.transition = 'none';
          fill.style.width = '0%';
        }
      });

      // After the slide settles, silently snap back into the middle clone
      // set if we've drifted into an outer copy — keeps the loop infinite
      // without a visible jump.
      clearTimeout(state.snapTimer);
      state.snapTimer = setTimeout(() => {
        let snapped = state.current;
        while (snapped >= 2 * realTotal) snapped -= realTotal;
        while (snapped < realTotal) snapped += realTotal;
        if (snapped !== state.current) {
          state.current = snapped;
          track.style.transition = 'none';
          track.style.transform = `translate3d(-${slideOffset(snapped)}px, 0, 0)`;
        }
      }, TRANSITION_MS + 50);

      play();
    },
    [realIndexOf, slideOffset, animateCounter, updateBars, play, realTotal]
  );

  useEffect(() => {
    const track = trackRef.current;
    const slider = sliderRef.current;
    if (!track || !slider) return;

    // Initial position, no transition.
    track.style.transition = 'none';
    track.style.transform = `translate3d(-${slideOffset(state.current)}px, 0, 0)`;
    void track.offsetWidth;
    if (counterRef.current) counterRef.current.textContent = '1';
    updateBars(0);
    barFillRefs.current.forEach((f) => f && (f.style.width = '0%'));
    play();

    const onVisibility = () => (document.hidden ? pause() : play());
    document.addEventListener('visibilitychange', onVisibility);

    // --- drag / swipe ---
    const onDown = (e) => {
      state.dragging = true;
      state.dragActive = false;
      state.startX = state.moveX = e.touches ? e.touches[0].clientX : e.clientX;
    };
    const onMove = (e) => {
      if (!state.dragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      state.moveX = x;
      if (!state.dragActive && Math.abs(x - state.startX) > 5) {
        state.dragActive = true;
        const matrix = new DOMMatrix(getComputedStyle(track).transform);
        state.startTx = -matrix.m41;
        track.style.transition = 'none';
        track.style.cursor = 'grabbing';
        pause();
      }
      if (state.dragActive) {
        const pos = state.startTx - (x - state.startX);
        track.style.transform = `translate3d(-${pos}px, 0, 0)`;
        if (e.cancelable) e.preventDefault();
      }
    };
    const onUp = () => {
      if (!state.dragging) return;
      state.dragging = false;
      if (!state.dragActive) return;
      state.dragActive = false;
      track.style.cursor = 'grab';
      const delta = state.moveX - state.startX;
      const threshold = slider.clientWidth * 0.15;
      let target = state.current;
      if (Math.abs(delta) > threshold) target = delta < 0 ? state.current + 1 : state.current - 1;
      goTo(target, delta < 0 ? 1 : -1);
    };

    const preventDrag = (e) => e.preventDefault();
    track.addEventListener('dragstart', preventDrag);
    track.addEventListener('mousedown', onDown);
    track.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);

    // --- horizontal wheel / trackpad ---
    let wheelLocked = false;
    const onWheel = (e) => {
      let dx = e.deltaX;
      if (e.shiftKey && Math.abs(e.deltaY) > Math.abs(e.deltaX)) dx = e.deltaY;
      if (Math.abs(dx) < Math.abs(e.deltaY) && !e.shiftKey) return;
      if (Math.abs(dx) < 10) return;
      e.preventDefault();
      if (wheelLocked) return;
      wheelLocked = true;
      goTo(dx > 0 ? state.current + 1 : state.current - 1, dx > 0 ? 1 : -1);
      setTimeout(() => (wheelLocked = false), TRANSITION_MS + 100);
    };
    slider.addEventListener('wheel', onWheel, { passive: false });

    // --- resize: re-lock position without animating ---
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = `translate3d(-${slideOffset(state.current)}px, 0, 0)`;
      }, 150);
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(state.timer);
      clearTimeout(state.snapTimer);
      clearTimeout(resizeTimer);
      document.removeEventListener('visibilitychange', onVisibility);
      track.removeEventListener('dragstart', preventDrag);
      track.removeEventListener('mousedown', onDown);
      track.removeEventListener('touchstart', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
      slider.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', onResize);
    };
    // Intentionally run once on mount — goTo/play/pause close over `state`,
    // which is a stable ref, so re-running this on every render isn't needed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    trackRef,
    sliderRef,
    counterRef,
    registerBarFill: (i) => (el) => (barFillRefs.current[i] = el),
    registerBar: (i) => (el) => (barRefs.current[i] = el),
    handleBarClick: (i) => goTo(realTotal + i),
  };
}