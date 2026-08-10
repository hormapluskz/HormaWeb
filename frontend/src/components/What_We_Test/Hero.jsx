
import { useEffect, useRef, useState } from 'react';
import { HERO_WORDS } from '../../data/biomarkerData';
import './styles/hero.css';

const HERO_IMAGES = {
  desktop: 'https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69e53821ea39d117888476f2_Frame%201739335745.webp',
  mobile: 'https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/69e16688f37025601d843e36_Frame%201739335746.avif',
};

const PLAY_DELAY_MS = 5000;
const PAINT_FRAMES = 2;

function waitForNextPaint(callback) {
  let frame = 0;

  const requestNextFrame = () => {
    frame += 1;

    if (frame >= PAINT_FRAMES) {
      callback();
      return;
    }

    requestAnimationFrame(requestNextFrame);
  };

  requestAnimationFrame(requestNextFrame);
}

function waitForImageReady(image, onReady) {
  if (!image) {
    onReady();
    return undefined;
  }

  if (image.complete && image.naturalWidth > 0) {
    if (typeof image.decode === 'function') {
      image.decode().then(onReady, onReady);
    } else {
      onReady();
    }

    return undefined;
  }

  const handleLoad = () => {
    cleanup();
    onReady();
  };

  const handleError = () => {
    cleanup();
    onReady();
  };

  const cleanup = () => {
    image.removeEventListener('load', handleLoad);
    image.removeEventListener('error', handleError);
  };

  image.addEventListener('load', handleLoad);
  image.addEventListener('error', handleError);

  return cleanup;
}

export default function Hero() {
  const imageRef = useRef(null);
  const hasStartedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let imageCleanup;
    let safetyTimeout;

    const startAnimation = () => {
      if (cancelled || hasStartedRef.current) {
        return;
      }

      hasStartedRef.current = true;

      waitForNextPaint(() => {
        if (!cancelled) {
          setIsPlaying(true);
        }
      });
    };

    /**
     * Users who prefer reduced motion should not get the
     * animated hero experience.
     */
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      setIsPlaying(true);
      return undefined;
    }

    /**
     * If the tab is hidden during initial render, wait until
     * the document becomes visible before starting the animation.
     */
    const waitForVisibility = () => {
      if (document.hidden) {
        return;
      }

      document.removeEventListener(
        'visibilitychange',
        waitForVisibility,
      );

      imageCleanup = waitForImageReady(
        imageRef.current,
        startAnimation,
      );
    };

    if (document.hidden) {
      document.addEventListener(
        'visibilitychange',
        waitForVisibility,
      );
    } else {
      imageCleanup = waitForImageReady(
        imageRef.current,
        startAnimation,
      );
    }

    /**
     * Safety fallback.
     *
     * The animation should never remain in its initial blurred
     * state just because an image/browser event behaved unexpectedly.
     */
    safetyTimeout = window.setTimeout(
      startAnimation,
      PLAY_DELAY_MS,
    );

    return () => {
      cancelled = true;

      document.removeEventListener(
        'visibilitychange',
        waitForVisibility,
      );

      imageCleanup?.();

      if (safetyTimeout) {
        window.clearTimeout(safetyTimeout);
      }
    };
  }, []);

  /**
   * Three copies allow the vertical word animation to loop
   * without exposing the end of the list.
   */
  const words = [
    ...HERO_WORDS,
    ...HERO_WORDS,
    ...HERO_WORDS,
  ];

  return (
    <section
      className={`bio-hero ${isPlaying ? 'is-playing' : ''}`}
      aria-label="Biomarker categories"
    >
      <picture className="bio-hero-picture">
        <source
          media="(max-width: 767px)"
          srcSet={HERO_IMAGES.mobile}
        />

        <img
          ref={imageRef}
          src={HERO_IMAGES.desktop}
          alt=""
          aria-hidden="true"
          className="bio-hero-image"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className="bio-hero-overlay">
        <div
          className="bio-hero-line"
          aria-hidden="true"
        />

        <div
          className="bio-hero-arrow"
          aria-hidden="true"
        />

        <div className="bio-hero-frame">
          <div className="bio-hero-column">
            {words.map((word, index) => (
              <div
                key={`${word}-${index}`}
                data-i={index % HERO_WORDS.length}
                className="bio-hero-word"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}