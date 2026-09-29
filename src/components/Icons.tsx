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
      {/* Two breath channels crossing a still centre. */}
      <circle cx="24" cy="24" r="19" />
      <path d="M11 33c6.5 0 6.5-18 13-18s6.5 18 13 18" />
      <path d="M11 15c6.5 0 6.5 18 13 18s6.5-18 13-18" />
      <circle cx="24" cy="24" r="2.6" />
    </>
  ),
  spiritual: (
    <>
      {/* A lamp flame inside the circle of enquiry. */}
      <circle cx="24" cy="24" r="19" />
      <path d="M24 10c5.5 6.4 8.2 10.6 8.2 15a8.2 8.2 0 0 1-16.4 0c0-4.4 2.7-8.6 8.2-15Z" />
      <path d="M24 38c-2.6-3-3.9-5-3.9-7.1A3.9 3.9 0 0 1 24 27a3.9 3.9 0 0 1 3.9 3.9c0 2.1-1.3 4.1-3.9 7.1Z" />
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

/**
 * Contact channel glyphs. Stroked to the same 1.4 weight as the pillar
 * icons so a row of them reads as one family, and sized by the font so
 * they scale with the card rather than against it.
 */
export function ContactIcon({
  name,
  className = '',
}: {
  name: 'phone' | 'whatsapp' | 'place';
  className?: string;
}) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {name === 'phone' && (
        <path
          {...common}
          d="M6.2 3.6h3l1.3 3.6-1.9 1.3a12.4 12.4 0 0 0 5.9 5.9l1.3-1.9 3.6 1.3v3a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.2 5.8a2 2 0 0 1 2-2.2Z"
        />
      )}
      {name === 'whatsapp' && (
        <>
          {/* Speech bubble with the tail bottom-left, as the mark reads. */}
          <path
            {...common}
            d="M3.6 20.4l1.3-3.9A8.4 8.4 0 1 1 8 19.5l-4.4.9Z"
          />
          <path
            {...common}
            d="M9.3 8.6l.9-.1.9 1.9-.9.8a5.3 5.3 0 0 0 2.6 2.6l.8-.9 1.9.9-.1.9a1.3 1.3 0 0 1-1.4 1 6.9 6.9 0 0 1-5.7-5.7 1.3 1.3 0 0 1 1-1.4Z"
          />
        </>
      )}
      {name === 'place' && (
        <>
          <path {...common} d="M12 21.2s6.4-5.6 6.4-10.2a6.4 6.4 0 1 0-12.8 0C5.6 15.6 12 21.2 12 21.2Z" />
          <circle {...common} cx="12" cy="10.8" r="2.4" />
        </>
      )}
    </svg>
  );
}
