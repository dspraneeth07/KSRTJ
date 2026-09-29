import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageProvider';
import { navLinks, serviceNav } from '../../data/content';
import { PHONE_TEL } from '../../data/contact';
import { BrandMark, ContactIcon } from '../Icons';

export function UtilityBar() {
  const { t, lang, setLang } = useLang();
  return (
    <div className="utility">
      <div className="wrap utility__inner">
        <p className="utility__note">{t('utility.hours')}</p>
        <div className="utility__actions">
          <a className="utility__link utility__call" href={PHONE_TEL}>
            <ContactIcon name="phone" className="utility__callIcon" />
            <span>{t('utility.call')}</span>
          </a>
          <div className="langswitch" role="group" aria-label="Language">
            <button
              type="button"
              className={`langswitch__btn ${lang === 'en' ? 'is-active' : ''}`}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <span className="langswitch__sep" aria-hidden="true" />
            <button
              type="button"
              lang="te"
              className={`langswitch__btn ${lang === 'te' ? 'is-active' : ''}`}
              aria-pressed={lang === 'te'}
              onClick={() => setLang('te')}
            >
              తెలుగు
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { t } = useLang();
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const closeTimer = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = useCallback(() => {
    setMegaOpen(false);
    setDrawerOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) closeAll();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [closeAll]);

  // Lock the page behind the mobile drawer.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const isDesktop = () =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 901px)').matches;

  const onHeaderEnter = () => window.clearTimeout(closeTimer.current);
  const onHeaderLeave = () => {
    if (!isDesktop()) return;
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 160);
  };

  // Headings only: each one goes to the page that holds its detail.
  const megaPanel = (
    <div className="mega" id="mega" hidden={!megaOpen}>
      <ul className="mega__list">
        {serviceNav.map((item) => (
          <li key={item.id}>
            <Link to={item.to} onClick={closeAll}>
              {t(item.label)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <header
      ref={headerRef}
      className={`header ${stuck ? 'is-stuck' : ''}`}
      onMouseEnter={onHeaderEnter}
      onMouseLeave={onHeaderLeave}
    >
      <div className="wrap header__inner">
        <Link className="brand" to="/" aria-label="Home" onClick={closeAll}>
          <span className="brand__mark">
            <BrandMark />
          </span>
          <span className="brand__text">
            <span className="brand__name">{t('brand.name')}</span>
            <span className="brand__tag">{t('brand.tag')}</span>
          </span>
        </Link>

        <nav className={`nav ${drawerOpen ? 'is-open' : ''}`} id="nav" aria-label="Primary">
          <ul className="nav__list">
            <li className="nav__item nav__item--mega">
              <button
                type="button"
                className="nav__link nav__toggle"
                aria-expanded={megaOpen}
                aria-controls="mega"
                onMouseEnter={() => isDesktop() && setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
              >
                <span>{t('nav.services')}</span>
                <svg className="nav__caret" viewBox="0 0 12 8" aria-hidden="true">
                  <path d="M1 1.5 L6 6.5 L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </button>
              {/* On mobile the panel lives inside the drawer; on desktop CSS
                  drops it out of the header as a full-width sheet. */}
              <div className="nav__megaSlot">{megaPanel}</div>
            </li>

            {navLinks.map((link) => (
              <li className="nav__item" key={link.to}>
                <Link className="nav__link" to={link.to} onClick={closeAll}>
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__cta">
          <Link className="btn btn--amber btn--sm" to="/contact" onClick={closeAll}>
            {t('cta.book')}
          </Link>
          <button
            type="button"
            className="burger"
            aria-expanded={drawerOpen}
            aria-controls="nav"
            aria-label={drawerOpen ? t('nav.close') : t('nav.menu')}
            onClick={() => {
              setDrawerOpen((v) => !v);
              setMegaOpen(true);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
