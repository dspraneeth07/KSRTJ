import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

/** Elements this wrapper is allowed to render as. */
type RevealTag = 'div' | 'header' | 'section' | 'article' | 'li' | 'figure' | 'ul' | 'ol';

interface RevealProps {
  children: ReactNode;
  /** Rendered element. Defaults to a div. */
  as?: RevealTag;
  className?: string;
  /** Stagger in ms, usually index * 70. */
  delay?: number;
  /** '3d' rotates in on the X axis; 'lift' only translates. */
  variant?: '3d' | 'lift';
  id?: string;
}

/**
 * Reveal-on-scroll with a hard failsafe: if the observer never fires — a
 * throttled tab, a print render, an odd viewport — the content becomes
 * visible anyway after 2.2s. Content must never be permanently hidden by
 * a decorative effect.
 */
export function Reveal({
  children,
  as = 'div',
  className = '',
  delay = 0,
  variant = '3d',
  id,
}: RevealProps) {
  // Cast to a single concrete tag so JSX resolves one prop type rather
  // than intersecting every intrinsic element into `never`.
  const Tag = as as 'div';
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );
    io.observe(node);

    const failsafe = window.setTimeout(() => setShown(true), 2200);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [reduced]);

  const classes = ['reveal', `reveal--${variant}`, shown ? 'is-in' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      id={id}
      className={classes}
      style={shown && !reduced ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
