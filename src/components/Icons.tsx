import type { IconName } from '../data/content';

/**
 * Thin-line geometry abstracted from yantra forms. Never literal deity or
 * temple imagery — the restraint is the point.
 */

export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
      <circle cx="20" cy="20" r="18.2" />
      <rect x="7.8" y="7.8" width="24.4" height="24.4" />
      <path d="M20 6.6 L31.6 26.7 H8.4 Z" />
      <path d="M20 33.4 L8.4 13.3 H31.6 Z" />
      <circle cx="20" cy="20" r="4.4" />
    </svg>
  );
}

const paths: Record<IconName, React.ReactNode> = {
  vastu: (
    <>
      <rect x="6" y="6" width="36" height="36" />
      <path d="M18 6v36M30 6v36M6 18h36M6 30h36" />
      <path d="M6 6 42 42" />
      <circle cx="24" cy="24" r="3.6" />
    </>
  ),
  jyotisha: (
    <>
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="9" />
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11.3 11.3l4.2 4.2M32.5 32.5l4.2 4.2M36.7 11.3l-4.2 4.2M15.5 32.5l-4.2 4.2" />
      <circle cx="35.5" cy="14" r="2.2" fill="currentColor" stroke="none" />
    </>
  ),
  numerology: (
    <>
      <rect x="10" y="10" width="28" height="28" />
      <rect x="10" y="10" width="28" height="28" transform="rotate(45 24 24)" />
      <circle cx="24" cy="24" r="14" />
      <circle cx="24" cy="24" r="3.6" />
    </>
  ),
  swara: (
    <>
      <path d="M24 7 40.7 36H7.3Z" />
      <path d="M24 41 7.3 12h33.4Z" />
      <circle cx="24" cy="24" r="19" />
      <circle cx="24" cy="24" r="2.6" />
    </>
  ),
};

export function PillarIcon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/**
 * Flat stand-in shown while the WebGL scene loads, and the permanent
 * fallback where WebGL is unavailable or reduced-motion is set.
 */
export function YantraOutline({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 600" fill="none" stroke="currentColor" strokeWidth="0.9" aria-hidden="true">
      <circle cx="300" cy="300" r="290" />
      <circle cx="300" cy="300" r="268" />
      <rect x="60" y="60" width="480" height="480" />
      <circle cx="300" cy="300" r="230" />
      <path d="M300 82 L488 408 H112 Z" />
      <path d="M300 518 L112 192 H488 Z" />
      <path d="M300 140 L458 383 H142 Z" />
      <path d="M300 460 L142 217 H458 Z" />
      <circle cx="300" cy="300" r="120" />
      <circle cx="300" cy="300" r="58" />
      <circle cx="300" cy="300" r="8" />
    </svg>
  );
}
