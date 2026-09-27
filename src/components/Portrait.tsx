/**
 * The founder's photograph.
 *
 * One source image everywhere: `public/img/acharya-portrait.*`. The client's
 * composite — the figure on a gold yantra ground — is kept unmodified at
 * `source/acharya-composite.png`; these two files are re-encodes of it.
 *
 * It fades to transparent at its edges, so it is built to sit on a dark
 * ground rather than inside a light frame. The WebP carries that alpha; the
 * JPEG fallback is flattened onto the same `--umber-deep` the CSS uses, so
 * the two look alike instead of one landing on a white box.
 *
 * The `square` variant is this same file, zoomed and offset by CSS so the
 * head fills the circular byline — see `.byline__photo` in sections.css.
 */

interface PortraitProps {
  /** 'portrait' for the founder block and About hero, 'square' for the byline. */
  variant?: 'portrait' | 'square';
  className?: string;
  alt: string;
  /** Eager for the About hero, which is above the fold; lazy elsewhere. */
  priority?: boolean;
}

const FILE = 'acharya-portrait';

/** Intrinsic size of the supplied composite, used to reserve layout space. */
const W = 1115;
const H = 1411;

export function Portrait({ variant = 'portrait', className = '', alt, priority }: PortraitProps) {
  return (
    <picture className={className} data-variant={variant}>
      <source srcSet={`/img/${FILE}.webp`} type="image/webp" />
      <img
        src={`/img/${FILE}.jpg`}
        alt={alt}
        width={W}
        height={H}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
      />
    </picture>
  );
}
