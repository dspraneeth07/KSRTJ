import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageProvider';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { YantraOutline } from '../Icons';
import { Portrait } from '../Portrait';

// ~600KB of three.js stays out of the first paint: the hero renders the
// flat outline immediately and swaps in the WebGL scene once it arrives.
const YantraScene = lazy(() => import('../../three/YantraScene'));

/** WebGL can be absent (old device, disabled, software-blocked). Detect once. */
function useWebGL(): boolean {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      setOk(Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl')));
    } catch {
      setOk(false);
    }
  }, []);
  return ok;
}

export function Hero() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const webgl = useWebGL();
  const layers = useRef<HTMLDivElement>(null);

  // Depth parallax on the copy: each layer shifts by its own factor, so the
  // eyebrow, headline and lede separate slightly as the pointer moves.
  useEffect(() => {
    if (reduced) return;
    const el = layers.current;
    if (!el || !window.matchMedia('(hover: hover)').matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty('--px', String(x));
        el.style.setProperty('--py', String(y));
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const showScene = webgl && !reduced;

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />

      <div className="wrap hero__inner" ref={layers}>
        <div className="hero__copy">
          <h1 className="hero__title hero__layer" style={{ ['--depth' as string]: 20 }}>
            {t('hero.title')}
          </h1>

          {/* The five disciplines, set as one rule-separated line. Split on
              the middot so each reads as its own item at any width rather
              than wrapping mid-name. */}
          <ul className="hero__disc hero__layer" style={{ ['--depth' as string]: 14 }}>
            {t('brand.full')
              .split('·')
              .map((part) => part.trim())
              .filter(Boolean)
              .map((part) => (
                <li key={part}>{part}</li>
              ))}
          </ul>

          <p className="hero__lede hero__layer" style={{ ['--depth' as string]: 10 }}>
            {t('hero.lede')}
          </p>

          <div className="hero__actions hero__layer" style={{ ['--depth' as string]: 7 }}>
            <Link className="btn btn--amber btn--lg" to="/contact">
              {t('cta.book')}
            </Link>
            <Link className="btn btn--ghost btn--lg" to="/training">
              {t('nav.courses')}
            </Link>
          </div>
          <p className="hero__foot">{t('hero.foot')}</p>
        </div>

        {/* After the copy in the DOM so the headline is read first; CSS
            places it to the left. Hidden below 1200px, where there is no
            room for it — at no download cost, since the founder block
            further down the page serves the same file. */}
        <figure className="hero__figure hero__layer" style={{ ['--depth' as string]: 4 }}>
          <Portrait variant="portrait" className="hero__portrait" alt={t('founder.alt')} />
        </figure>

        {/* A decorative backdrop below 1200px, a third column above it —
            where it is given room to be seen whole rather than bled off
            the right edge. */}
        <div className="hero__stage" aria-hidden="true">
          {showScene ? (
            <Suspense fallback={<YantraOutline className="hero__outline" />}>
              <div className="yantra3d">
                <YantraScene />
              </div>
            </Suspense>
          ) : (
            <YantraOutline className="hero__outline" />
          )}
        </div>
      </div>
    </section>
  );
}
