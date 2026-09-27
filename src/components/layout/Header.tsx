import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageProvider';
import { useBi } from '../../i18n/bi';
import { megaColumns, navLinks } from '../../data/content';
import { verticalById } from '../../data/verticals';
import { swaraPage } from '../../data/swara';
import type { Vertical } from '../../data/verticalTypes';
import { BrandMark } from '../Icons';

/**
 * A vertical's mega-menu column, grouped into its own clusters. Fifteen or
 * nineteen links in a flat list is a wall of text; grouped by where the
 * client actually is, it stays scannable.
 */
function VerticalMegaColumn({
  vertical,
  onNavigate,
}: {
  vertical: Vertical;
  onNavigate: () => void;
}) {
  const { t } = useLang();
  const { b } = useBi();

  return (
    <section className="mega__col mega__col--grouped">
      <h3 className="mega__title">
        <Link to={vertical.path} onClick={onNavigate}>
          {t(vertical.nameKey)}
        </Link>
      </h3>
      <p className="mega__blurb">{t(vertical.subKey)}</p>

      {vertical.clusters.map((cluster) => (
        <div className="mega__group" key={cluster.id}>
          <h4 className="mega__groupTitle">{b(cluster.label)}</h4>
          <ul className="mega__list">
            {vertical.services
              .filter((service) => service.cluster === cluster.id)
              .map((service) => (
                <li key={service.id}>
                  <Link to={`${vertical.path}#services`} onClick={onNavigate}>
                    {b(service.name)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}

      <Link className="mega__all" to={vertical.path} onClick={onNavigate}>
        {t(vertical.countKey)} →
      </Link>
    </section>
  );
}

/**
 * The fourth column carries two disciplines rather than a dozen services,
 * so it is set as two substantial blocks with a line of description each.
 * A bullet list of two items would look like an unfinished column.
 */
function SwaraMegaColumn({ onNavigate }: { onNavigate: () => void }) {
  const { t } = useLang();
  const { b } = useBi();

  return (
    <section className="mega__col mega__col--pair">
      <h3 className="mega__title">
        <Link to={swaraPage.path} onClick={onNavigate}>
          {t('v.swara.name')}
        </Link>
      </h3>
      <p className="mega__blurb">{t('v.swara.sub')}</p>

      <div className="mega__pair">
        {swaraPage.disciplines.map((discipline) => (
          <Link
            className="mega__pairItem"
            to={`${swaraPage.path}#${discipline.id}`}
            key={discipline.id}
            onClick={onNavigate}
          >
            <span className="mega__pairName">{b(discipline.name)}</span>
            <span className="mega__pairLine">{b(discipline.standfirst)}</span>
          </Link>
        ))}
      </div>

      <p className="mega__note">{t('mega.swaraNote')}</p>

      <h3 className="mega__title mega__title--sub">{t('mega.training')}</h3>
      <ul className="mega__list">
        <li>
          <a href="/#courses" onClick={onNavigate}>{t('s.course.1')}</a>
        </li>
        <li>
          <a href="/#courses" onClick={onNavigate}>{t('s.course.2')}</a>
        </li>
        <li>
          <a href="/#courses" onClick={onNavigate}>{t('s.course.3')}</a>
        </li>
      </ul>
    </section>
  );
}

export function UtilityBar() {
  const { t, lang, setLang } = useLang();
  return (
    <div className="utility">
      <div className="wrap utility__inner">
        <p className="utility__note">{t('utility.hours')}</p>
        <div className="utility__actions">
          <a className="utility__link" href="tel:+910000000000">
            {t('utility.call')}
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

  const megaPanel = (
    <div className="mega" id="mega" hidden={!megaOpen}>
      <div className="wrap mega__grid">
        {megaColumns.map((col) => {
          if (col.id === 'swara') return <SwaraMegaColumn key={col.id} onNavigate={closeAll} />;
          const vertical = verticalById[col.id];
          return vertical ? (
            <VerticalMegaColumn key={col.id} vertical={vertical} onNavigate={closeAll} />
          ) : (
          <section className="mega__col" key={col.id}>
            <h3 className="mega__title">
              <a href="#pillars" onClick={closeAll}>
                {t(col.title)}
              </a>
            </h3>
            <ul className="mega__list">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#book" onClick={closeAll}>
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
            {col.note && <p className="mega__note">{t(col.note)}</p>}
            {col.extraTitle && col.extraItems && (
              <>
                <h3 className="mega__title mega__title--sub">{t(col.extraTitle)}</h3>
                <ul className="mega__list">
                  {col.extraItems.map((item) => (
                    <li key={item}>
                      <a href="#courses" onClick={closeAll}>
                        {t(item)}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
          );
        })}
      </div>
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
              <li className="nav__item" key={link.href}>
                {/* `/#pillars` rather than `#pillars`, so these still resolve
                    when the visitor is on a service page. */}
                <Link className="nav__link" to={`/${link.href}`} onClick={closeAll}>
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__cta">
          <a className="btn btn--amber btn--sm" href="#book">
            {t('cta.book')}
          </a>
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
