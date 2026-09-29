import { Link } from 'react-router-dom';
import { useBi, type Bi } from '../i18n/bi';
import { useLang } from '../i18n/LanguageProvider';
import { about } from '../data/about';
import { contact, PHONE_TEL, WHATSAPP_URL } from '../data/contact';
import { training } from '../data/training';
import { Reveal } from '../components/Reveal';
import { Portrait } from '../components/Portrait';

/**
 * The practitioner's own page.
 *
 * Deliberately editorial rather than modular: a split hero carrying the
 * photograph at size, then a single narrow column of prose broken by
 * hairline-ruled sections. No cards and no tilt — this page is a person,
 * not a catalogue.
 */

const ui = {
  home: { en: 'Home', te: 'ముఖపేజీ' },
  about: { en: 'About Us', te: 'మా గురించి' },
  book: { en: 'Book a Consultation', te: 'సంప్రదింపును బుక్ చేసుకోండి' },
  whatsapp: { en: 'WhatsApp', te: 'వాట్సాప్' },
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
              <span className="crumbs__here">{b(ui.about)}</span>
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

      {/* ── How the practice is conducted, then qualifications ──── */}
      <section className="asection">
        <div className="wrap acol">
          <Reveal variant="lift">
            {about.opening.paras.map((para, i) => (
              <p className="abody abody--lead" key={i}>
                {b(para)}
              </p>
            ))}
          </Reveal>

          <Reveal variant="lift" delay={80}>
            <h2 className="ah2 ah2--tight">{b(about.opening.label)}</h2>
            <ul className="acreds">
              <li>{t('founder.cred1')}</li>
              <li>{t('founder.cred2')}</li>
              <li>{t('founder.cred3')}</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Our Approach ────────────────────────────────────────── */}
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

      {/* ── Practice and teaching ───────────────────────────────── */}
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

      {/* ── What we do not do ───────────────────────────────────── */}
      <section className="asection asection--rule" id="boundaries">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.boundaries.label)}</h2>
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
      <section className="asection asection--tint" id="teaching">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.teaching.label)}</h2>
            <p className="abody abody--lead">{b(about.teaching.certPara)}</p>
          </Reveal>

          <Reveal variant="lift" delay={80}>
            <dl className="awhere">
              {about.teaching.rows.map((row) => (
                <div className="awhere__row" key={row.id}>
                  <dt>{b(row.k)}</dt>
                  <dd>{b(row.v)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal variant="lift" delay={120}>
            <h3 className="alabel">{b(about.teaching.studyLabel)}</h3>
            <p className="abody">{b(about.teaching.studyPara)}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Training & Educational Programs ─────────────────────── */}
      <section className="asection">
        <div className="wrap acol">
          <Reveal variant="lift">
            <h2 className="ah2">{b(about.programmes.label)}</h2>
          </Reveal>

          <Reveal variant="lift" delay={80}>
            <div className="aprog">
              {about.programmes.groups.map((group) => (
                <div className="aprog__group" key={group.id}>
                  <h3 className="aprog__label">{b(group.label)}</h3>
                  <ul className="aprog__list">
                    {bl(group.items).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="alinks">
              <Link className="link" to={training.path}>
                {b(about.programmes.link)}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Where and how ───────────────────────────────────────── */}
      <section className="asection asection--rule">
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
            <Link className="btn btn--amber btn--lg" to={contact.path}>
              {b(ui.book)}
            </Link>
            <a
              className="btn btn--ghost btn--lg"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {b(ui.whatsapp)}
            </a>
          </div>
          <p className="cta__foot">
            <a href={PHONE_TEL}>{t('utility.call')}</a>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
