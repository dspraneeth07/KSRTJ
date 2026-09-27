import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { useLang } from '../../i18n/LanguageProvider';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { YantraOutline } from '../Icons';

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

      <div className="wrap hero__inner" ref={layers}>
        <p className="eyebrow eyebrow--light hero__layer" style={{ ['--depth' as string]: 26 }}>
          {t('hero.eyebrow')}
        </p>
        <h1 className="hero__title hero__layer" style={{ ['--depth' as string]: 18 }}>
          {t('hero.title')}
        </h1>
        <p className="hero__lede hero__layer" style={{ ['--depth' as string]: 11 }}>
          {t('hero.lede')}
        </p>
        <div className="hero__actions hero__layer" style={{ ['--depth' as string]: 7 }}>
          <a className="btn btn--amber btn--lg" href="#book">
            {t('cta.book')}
          </a>
          <a className="btn btn--ghost btn--lg" href="#process">
            {t('cta.howItWorks')}
          </a>
        </div>
        <p className="hero__foot">{t('hero.foot')}</p>
      </div>
    </section>
  );
}
