import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useBi, type Bi } from '../i18n/bi';
import { useLang } from '../i18n/LanguageProvider';
import { modeLabels, type Service, type Vertical } from '../data/verticalTypes';
import { Reveal } from '../components/Reveal';
import { Tilt } from '../components/Tilt';
import { PillarIcon, YantraOutline } from '../components/Icons';
import { Portrait } from '../components/Portrait';

/**
 * One page component for every service vertical. Everything specific to a
 * vertical lives in its data file; this renders the shape they share, so
 * Numerology and Swarashastra will need a data file and a route, nothing more.
 */

/* Chrome shared by all verticals. Deliberately not in the global dictionary —
   none of it appears outside these pages. */
const ui = {
  breadcrumbHome: { en: 'Home', te: 'ముఖపేజీ' },
  breadcrumbServices: { en: 'Services', te: 'సేవలు' },
  filterLabel: { en: 'Filter by stage', te: 'దశ ప్రకారం వడపోత' },
  expandAll: { en: 'Expand all', te: 'అన్నీ తెరవండి' },
  collapseAll: { en: 'Collapse all', te: 'అన్నీ మూయండి' },
  examine: { en: 'What we examine', te: 'మేము పరిశీలించేవి' },
  who: { en: 'Who this is for', te: 'ఇది ఎవరికి' },
  receive: { en: 'What you receive', te: 'మీకు అందేది' },
  mode: { en: 'Mode', te: 'విధానం' },
  bundlesEyebrow: { en: 'Combined engagements', te: 'కలిపిన సేవలు' },
  includes: { en: 'Includes', te: 'ఇందులో ఉన్నవి' },
  faqEyebrow: { en: 'Questions', te: 'ప్రశ్నలు' },
  priceEyebrow: { en: 'Terms', te: 'నిబంధనలు' },
  priceTitle: { en: 'Duration and fees', te: 'వ్యవధి మరియు రుసుము' },
  ctaEyebrow: { en: 'Begin', te: 'ప్రారంభం' },
  book: { en: 'Book a consultation', te: 'సంప్రదింపు నమోదు' },
  ask: { en: 'Ask on WhatsApp', te: 'వాట్సాప్‌లో అడగండి' },
  note: { en: 'Please note', te: 'గమనిక' },
  conducted: {
    en: 'Every consultation on this page is conducted personally.',
    te: 'ఈ పేజీలోని ప్రతి సంప్రదింపునూ వ్యక్తిగతంగానే నిర్వహిస్తారు.',
  },
} satisfies Record<string, Bi>;

/* ── One service, as an expandable row ──────────────────────────── */

function ServiceRow({
  service,
  open,
  onToggle,
}: {
  service: Service;
  open: boolean;
  onToggle: () => void;
}) {
  const { b, bl } = useBi();
  const panelId = `svc-${service.id}`;

  return (
    <article className={`svc ${open ? 'is-open' : ''}`}>
      <h3 className="svc__head">
        <button
          type="button"
          className="svc__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="svc__num">{String(service.index).padStart(2, '0')}</span>
          <span className="svc__name">{b(service.name)}</span>
          <span className="svc__def">{b(service.definition)}</span>
          <span className="svc__sign" aria-hidden="true" />
        </button>
      </h3>

      <div className="svc__panel" id={panelId} hidden={!open}>
        <div className="svc__grid">
          <div className="svc__col">
            <h4 className="svc__label">{b(ui.examine)}</h4>
            <ul className="svc__points">
              {bl(service.examine).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="svc__col">
            <h4 className="svc__label">{b(ui.who)}</h4>
            <p className="svc__text">{b(service.who)}</p>

            <h4 className="svc__label">{b(ui.receive)}</h4>
            <p className="svc__text">{b(service.receive)}</p>

            <dl className="svc__meta">
              <div>
                <dt>{b(ui.mode)}</dt>
                <dd>{b(modeLabels[service.mode])}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Responsible-framing callout, where the subject warrants one. */}
        {service.caution && (
          <aside className="svc__caution">
            <span className="svc__cautionLabel">{b(ui.note)}</span>
            <p>{b(service.caution)}</p>
          </aside>
        )}

        <p className="svc__cta">
          <span>{b(service.cta)}</span>
          <a className="btn btn--ink btn--sm" href="#book">
            {b(ui.book)}
          </a>
        </p>
      </div>
    </article>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function VerticalPage({ vertical }: { vertical: Vertical }) {
  const { b } = useBi();
  const { t } = useLang();
  const [filter, setFilter] = useState<string>('all');
  // Two sets, not one: service ids and FAQ ids share a namespace otherwise,
  // and some verticals use the same id in both ('ayadi', 'remedies').
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [faqOpen, setFaqOpen] = useState<string | null>(null);

  const visibleClusters = useMemo(
    () => (filter === 'all' ? vertical.clusters : vertical.clusters.filter((c) => c.id === filter)),
    [filter, vertical.clusters],
  );

  const byCluster = useMemo(() => {
    const map = new Map<string, Service[]>();
    for (const service of vertical.services) {
      const list = map.get(service.cluster) ?? [];
      list.push(service);
      map.set(service.cluster, list);
    }
    return map;
  }, [vertical.services]);

  const visibleIds = useMemo(
    () => visibleClusters.flatMap((c) => (byCluster.get(c.id) ?? []).map((s) => s.id)),
    [byCluster, visibleClusters],
  );
  const allOpen = visibleIds.length > 0 && visibleIds.every((id) => open.has(id));

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const serviceById = (id: string) => vertical.services.find((s) => s.id === id);

  return (
    <>
      {/* ── Vertical hero ──────────────────────────────────────── */}
      <section className="vhero">
        <div className="vhero__art" aria-hidden="true">
          <YantraOutline />
        </div>
        <div className="wrap vhero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">{b(ui.breadcrumbHome)}</Link>
            <span aria-hidden="true">/</span>
            <span>{b(ui.breadcrumbServices)}</span>
            <span aria-hidden="true">/</span>
            <span className="crumbs__here">{t(vertical.nameKey)}</span>
          </nav>

          <div className="vhero__mark" aria-hidden="true">
            <PillarIcon name={vertical.icon} />
          </div>
          <p className="eyebrow eyebrow--light">{b(vertical.eyebrow)}</p>
          <h1 className="vhero__title">{b(vertical.title)}</h1>
          <p className="vhero__lede">{b(vertical.lede)}</p>
        </div>
      </section>

      {/* ── Framing ────────────────────────────────────────────── */}
      <section className="section vframe">
        <div className="wrap vframe__inner">
          <Reveal className="vframe__col" variant="lift">
            <h2 className="vframe__title">{b(vertical.framingTitle)}</h2>
          </Reveal>
          <Reveal className="vframe__col" variant="lift" delay={80}>
            <p className="vframe__text">{b(vertical.framing)}</p>

            <figure className="byline">
              <Portrait variant="square" className="byline__photo" alt={t('founder.alt')} />
              <figcaption className="byline__text">
                <span className="byline__name">{t('founder.title')}</span>
                <span className="byline__role">{t('founder.role')}</span>
                <span className="byline__note">{b(ui.conducted)}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Filter + service accordion ─────────────────────────── */}
      <section className="section section--paper2" id="services">
        <div className="wrap">
          <div className="vfilter">
            <div className="vfilter__chips" role="group" aria-label={b(ui.filterLabel)}>
              <button
                type="button"
                className={`chip ${filter === 'all' ? 'is-on' : ''}`}
                aria-pressed={filter === 'all'}
                onClick={() => setFilter('all')}
              >
                {b(vertical.filterAll)}
              </button>
              {vertical.clusters.map((cluster) => (
                <button
                  key={cluster.id}
                  type="button"
                  className={`chip ${filter === cluster.id ? 'is-on' : ''}`}
                  aria-pressed={filter === cluster.id}
                  onClick={() => setFilter(cluster.id)}
                >
                  {b(cluster.label)}
                  <span className="chip__count">{byCluster.get(cluster.id)?.length ?? 0}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="vfilter__all"
              onClick={() => setOpen(allOpen ? new Set() : new Set(visibleIds))}
            >
              {allOpen ? b(ui.collapseAll) : b(ui.expandAll)}
            </button>
          </div>

          {visibleClusters.map((cluster) => (
            <div className="vgroup" key={cluster.id}>
              <Reveal className="vgroup__head" variant="lift">
                <h2 className="vgroup__title">{b(cluster.label)}</h2>
                <p className="vgroup__blurb">{b(cluster.blurb)}</p>
              </Reveal>

              <div className="vgroup__list">
                {(byCluster.get(cluster.id) ?? []).map((service, i) => (
                  <Reveal key={service.id} delay={i * 50} variant="lift">
                    <ServiceRow
                      service={service}
                      open={open.has(service.id)}
                      onToggle={() => toggle(service.id)}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bundles ────────────────────────────────────────────── */}
      <section className="section" id="bundles">
        <div className="wrap">
          <Reveal as="header" className="secthead" variant="lift">
            <p className="eyebrow">{b(ui.bundlesEyebrow)}</p>
            <h2 className="secthead__title">{b(vertical.bundlesTitle)}</h2>
            <p className="secthead__lede">{b(vertical.bundlesLede)}</p>
          </Reveal>

          <div className="bundles">
            {vertical.bundles.map((bundle, i) => (
              <Reveal key={bundle.id} delay={i * 80}>
                <Tilt max={6} lift={16}>
                  <article className="bundle">
                    <h3 className="bundle__name">{b(bundle.name)}</h3>
                    <p className="bundle__value">{b(bundle.value)}</p>
                    <h4 className="bundle__label">{b(ui.includes)}</h4>
                    <ul className="bundle__items">
                      {bundle.includes.map((id) => {
                        const service = serviceById(id);
                        return service ? <li key={id}>{b(service.name)}</li> : null;
                      })}
                      {bundle.crossVertical && (
                        <li className="bundle__cross">{b(bundle.crossVertical)}</li>
                      )}
                    </ul>
                    <a className="link" href="#book">
                      {b(ui.book)}
                    </a>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="section section--paper2" id="vertical-faq">
        <div className="wrap faq__wrap">
          <Reveal as="header" className="secthead secthead--left" variant="lift">
            <p className="eyebrow">{b(ui.faqEyebrow)}</p>
            <h2 className="secthead__title">{b(vertical.faqTitle)}</h2>
          </Reveal>
          <div className="faq">
            {vertical.faqs.map((item, i) => {
              const isOpen = faqOpen === item.id;
              return (
                <Reveal className="faq__item" key={item.id} delay={i * 50} variant="lift">
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`vfaq-${item.id}`}
                    onClick={() => setFaqOpen(isOpen ? null : item.id)}
                  >
                    <span>{b(item.q)}</span>
                    <span className={`faq__sign ${isOpen ? 'is-open' : ''}`} aria-hidden="true" />
                  </button>
                  <div className="faq__a" id={`vfaq-${item.id}`} hidden={!isOpen}>
                    <p>{b(item.a)}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Terms ─────────────────────────────────────────────── */}
      <section className="section" id="fees">
        <div className="wrap">
          <Reveal as="header" className="secthead" variant="lift">
            <p className="eyebrow">{b(ui.priceEyebrow)}</p>
            <h2 className="secthead__title">{b(ui.priceTitle)}</h2>
            <p className="secthead__lede">{b(vertical.feeLede)}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Closing ────────────────────────────────────────────── */}
      <section className="cta" id="book">
        <div className="cta__art" aria-hidden="true">
          <YantraOutline />
        </div>
        <Reveal className="wrap cta__inner" variant="lift">
          <p className="eyebrow eyebrow--light">{b(ui.ctaEyebrow)}</p>
          <h2 className="cta__title">{b(vertical.ctaTitle)}</h2>
          <p className="cta__lede">{b(vertical.ctaLede)}</p>
          <div className="cta__actions">
            <a className="btn btn--amber btn--lg" href="#book">
              {b(ui.book)}
            </a>
            <a className="btn btn--ghost btn--lg" href="https://wa.me/910000000000">
              {b(ui.ask)}
            </a>
          </div>
          <p className="cta__foot">{t('cta.foot')}</p>
        </Reveal>
      </section>
    </>
  );
}
