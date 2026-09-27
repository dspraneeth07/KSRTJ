import { Link } from 'react-router-dom';
import { useBi, type Bi } from '../i18n/bi';
import { useLang } from '../i18n/LanguageProvider';
import { about } from '../data/about';
import { Reveal } from '../components/Reveal';
import { Portrait } from '../components/Portrait';

/**
 * The practitioner's own page.
 *
 * Deliberately editorial rather than modular: a split hero carrying the
 * photograph at size, then a single narrow column of prose broken by
 * hairline-ruled sections. No cards and no tilt — this page is a person,
 * not a catalogue, and the homepage founder block already does the
 * summary version.
 */

const ui = {
  home: { en: 'Home', te: 'ముఖపేజీ' },
  book: { en: 'Book a consultation', te: 'సంప్రదింపు నమోదు' },
  disciplines: { en: 'See the four disciplines', te: 'నాలుగు శాస్త్రాలు చూడండి' },
  note: { en: 'Note', te: 'గమనిక' },
} satisfies Record<string, Bi>;

export default function AboutPage() {
  const { b, bl } = useBi();
  const { t } = useLang();

  return (
    <div className="about">
      {/* ── Split hero: photograph at size, name beside it ──────── */}
      <section className="ahero">
        <div className="wrap ahero__grid">
          <div className="ahero__text">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">{b(ui.home)}</Link>
              <span aria-hidden="true">/</span>
              <span className="crumbs__here">{t('nav.about')}</span>
            </nav>

            <p className="eyebrow eyebrow--light">{b(about.eyebrow)}</p>
            <h1 className="ahero__name">{t('founder.title')}</h1>
            <p className="ahero__role">{t('founder.role')}</p>
            <p className="ahero__standfirst">{b(about.standfirst)}</p>
            <p className="ahero__place">{b(about.place)}</p>
          </div>

          <figure className="ahero__figure">
            <Portrait variant="portrait" className="ahero__photo" alt={t('founder.alt')} priority />
          </figure>
        </div>
      </section>

      {/* ── Opening statement ───────────────────────────────────── */}
      <section className="asection">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.opening.label)}</h2>
            {about.opening.paras.map((para, i) => (
              <p className={`abody ${i === 0 ? 'abody--lead' : ''}`} key={i}>
                {b(para)}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Training + qualifications ───────────────────────────── */}
      <section className="asection asection--rule">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.training.label)}</h2>
            {about.training.paras.map((para, i) => (
              <p className="abody" key={i}>
                {b(para)}
              </p>
            ))}
          </Reveal>

          <Reveal variant="lift" delay={80}>
            <h3 className="alabel">{b(about.qualifications.label)}</h3>
            <ul className="acreds">
              <li>{t('founder.cred1')}</li>
              <li>{t('founder.cred2')}</li>
            </ul>
            <p className="anote">
              <span className="anote__label">{b(ui.note)}</span>
              {b(about.qualifications.note)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Method ──────────────────────────────────────────────── */}
      <section className="asection asection--tint" id="method">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.method.label)}</h2>
            <p className="abody">{b(about.method.lede)}</p>
          </Reveal>

          <Reveal variant="lift" delay={80}>
            <ol className="amethod">
              {about.method.items.map((item, i) => (
                <li className="amethod__item" key={item.id}>
                  <span className="amethod__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="amethod__name">{b(item.name)}</h3>
                    <p>{b(item.body)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ── The record ──────────────────────────────────────────── */}
      <section className="asection">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.record.label)}</h2>
            {about.record.paras.map((para, i) => (
              <p className={`abody ${i === 0 ? 'abody--lead' : ''}`} key={i}>
                {b(para)}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Boundaries ──────────────────────────────────────────── */}
      <section className="asection asection--rule" id="boundaries">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.boundaries.label)}</h2>
            <p className="abody">{b(about.boundaries.lede)}</p>
          </Reveal>

          <Reveal variant="lift" delay={80}>
            <ul className="abounds">
              {bl(about.boundaries.items).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Teaching ────────────────────────────────────────────── */}
      <section className="asection asection--tint">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.teaching.label)}</h2>
            {about.teaching.paras.map((para, i) => (
              <p className="abody" key={i}>
                {b(para)}
              </p>
            ))}
            <p className="alinks">
              <Link className="link" to="/#courses">
                {b(about.teaching.courseLink)}
              </Link>
              <Link className="link" to="/services/spiritual">
                {b(about.teaching.swaraLink)}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Where and how ───────────────────────────────────────── */}
      <section className="asection">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.where.label)}</h2>
          </Reveal>
          <Reveal variant="lift" delay={80}>
            <dl className="awhere">
              {about.where.rows.map((row) => (
                <div className="awhere__row" key={row.id}>
                  <dt>{b(row.k)}</dt>
                  <dd>{b(row.v)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Closing ─────────────────────────────────────────────── */}
      <section className="cta" id="book">
        <Reveal className="wrap cta__inner" variant="lift">
          <p className="eyebrow eyebrow--light">{t('cta.eyebrow')}</p>
          <h2 className="cta__title">{b(about.cta.title)}</h2>
          <p className="cta__lede">{b(about.cta.lede)}</p>
          <div className="cta__actions">
            <a className="btn btn--amber btn--lg" href="#book">
              {b(ui.book)}
            </a>
            <Link className="btn btn--ghost btn--lg" to="/#pillars">
              {b(ui.disciplines)}
            </Link>
          </div>
          <p className="cta__foot">{t('cta.foot')}</p>
        </Reveal>
      </section>
    </div>
  );
}
