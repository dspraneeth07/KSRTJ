import { useCallback, useRef, type PointerEvent, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees on each axis. */
  max?: number;
  /** How far the card lifts toward the viewer, in px. */
  lift?: number;
  /** Adds a moving specular sheen driven by the pointer. */
  sheen?: boolean;
}

/**
 * Pointer-driven 3D tilt.
 *
 * Writes to CSS custom properties inside a rAF rather than setting React
 * state, so pointer movement never triggers a re-render — the whole effect
 * costs one composited transform per frame.
 *
 * Coarse pointers (touch) and reduced-motion users get a plain static card:
 * a tilt that only responds to hover is dead weight on a phone.
 */
export function Tilt({ children, className = '', max = 7, lift = 14, sheen = true }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const reduced = useReducedMotion();

  const enabled =
    !reduced && typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

  const apply = useCallback(
    (rx: number, ry: number, mx: number, my: number, z: number) => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty('--rx', `${rx}deg`);
      el.style.setProperty('--ry', `${ry}deg`);
      el.style.setProperty('--mx', `${mx}%`);
      el.style.setProperty('--my', `${my}%`);
      el.style.setProperty('--tz', `${z}px`);
    },
    [],
  );

  const onMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!enabled) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        apply(
          (0.5 - py) * max * 2,
          (px - 0.5) * max * 2,
          px * 100,
          py * 100,
          lift,
        );
      });
    },
    [apply, enabled, lift, max],
  );

  const onLeave = useCallback(() => {
    if (!enabled) return;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => apply(0, 0, 50, 50, 0));
  }, [apply, enabled]);

  return (
    <div
      ref={ref}
      className={`tilt ${sheen ? 'tilt--sheen' : ''} ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="tilt__inner">{children}</div>
    </div>
  );
}
