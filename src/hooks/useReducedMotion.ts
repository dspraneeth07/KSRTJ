import { useEffect, useState } from 'react';

/**
 * Tracks `prefers-reduced-motion`. Every 3D effect on this page consults it:
 * tilt, parallax and the WebGL yantra all fall back to a static presentation
 * rather than simply animating faster.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
