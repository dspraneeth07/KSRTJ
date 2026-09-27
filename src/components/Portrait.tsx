/**
 * The founder's photograph.
 *
 * Converted to black and white at build time rather than with a CSS filter:
 * the original has a blue studio backdrop, and a red-weighted channel mix
 * drops that backdrop to a deep neutral grey while keeping skin tones smooth.
 * `filter: grayscale()` would have flattened it to a muddy mid-tone and cost
 * a paint on every scroll.
 *
 * WebP first with a JPEG fallback; both are already greyscale, so no runtime
 * filter is applied and no colour version is ever downloaded.
 */

interface PortraitProps {
  /** 'portrait' for the founder block, 'square' for the compact credit strip. */
  variant?: 'portrait' | 'square';
  className?: string;
  alt: string;
  /** The founder block image is large and near the fold; the strip is not. */
  priority?: boolean;
}

const sizes = {
  portrait: { file: 'acharya-portrait', w: 1200, h: 1520 },
  square: { file: 'acharya-square', w: 560, h: 560 },
} as const;

export function Portrait({ variant = 'portrait', className = '', alt, priority }: PortraitProps) {
  const { file, w, h } = sizes[variant];

  return (
    <picture className={className}>
      <source srcSet={`/img/${file}.webp`} type="image/webp" />
      <img
        src={`/img/${file}.jpg`}
        alt={alt}
        width={w}
        height={h}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
      />
    </picture>
  );
}
