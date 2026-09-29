import { Link } from 'react-router-dom';
import { useBi } from '../i18n/bi';
import { useLang } from '../i18n/LanguageProvider';
import { courseGroups } from '../data/content';
import { training } from '../data/training';
import { contact } from '../data/contact';
import { Reveal } from '../components/Reveal';
import { YantraOutline } from '../components/Icons';

/**
 * Certificate Courses — the detail page.
 *
 * The overview page states the level in one line per card. This page is
 * where someone decides whether to enrol, so it states the range instead
 * ("foundational to advanced") and sets each course as a full-width
 * record with a proper definition list rather than a card. Same three
 * courses, same source data — only the level key and the layout differ.
 */

const certificateGroup = courseGroups.find((group) => group.kind === 'certificate');

export default function CertificateCoursesPage() {
  const { b } = useBi();
  const { t } = useLang();

  const items = certificateGroup?.items ?? [];

  return (
    <div className="certs">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="thero thero--sub">
        <div className="wrap thero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">{b(training.crumbHome)}</Link>
            <span aria-hidden="true">/</span>
            <Link to={training.path}>{b(training.crumbTraining)}</Link>
            <span aria-hidden="true">/</span>
            <span className="crumbs__here">{t('courses.grp.cert')}</span>
          </nav>

          <p className="eyebrow eyebrow--light">{b(training.certificate.eyebrow)}</p>
          <h1 className="thero__title">{t('courses.grp.cert')}</h1>
          <p className="thero__lede">{b(training.certificate.lede)}</p>
        </div>
      </section>

      {/* ── The three courses ───────────────────────────────────── */}
      <section className="section">
        <div className="wrap certs__col">
          {items.map((item, i) => (
            <Reveal
              as="article"
              className="cert"
              key={item.id}
              id={item.id}
              variant="lift"
              delay={i * 60}
            >
              <span className="cert__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="cert__name">{t(item.name)}</h2>
              <p className="cert__desc">{t(item.desc)}</p>

              <dl className="cert__meta">
                <div>
                  <dt>{t('crs.levelsLabel')}</dt>
                  <dd>{t('crs.levels')}</dd>
                </div>
                <div>
                  <dt>{t('meta.duration')}</dt>
                  <dd>{t('courses.dur')}</dd>
                </div>
                <div>
                  <dt>{t('meta.medium')}</dt>
                  <dd>{t('medium.both')}</dd>
                </div>
                <div>
                  <dt>{t('meta.mode')}</dt>
                  <dd>{t('courses.mode')}</dd>
                </div>
                <div>
                  <dt>{t('courses.certLabel')}</dt>
                  <dd className="cert__cert">{t('courses.cert')}</dd>
                </div>
              </dl>

              <Link className="link cert__cta" to={contact.path}>
                {b(training.certificate.enquire)} →
              </Link>
            </Reveal>
          ))}

          {/* What the certificate is, and is not. */}
          <Reveal variant="lift">
            <p className="certnote">
              <span className="certnote__label">{b(training.certificate.noteLabel)}</span>
              {b(training.certificate.note)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Closing ─────────────────────────────────────────────── */}
      <section className="cta" id="book">
        <div className="cta__art" aria-hidden="true">
          <YantraOutline />
        </div>
        <Reveal className="wrap cta__inner" variant="lift">
          <p className="eyebrow eyebrow--light">{t('cta.eyebrow')}</p>
          <h2 className="cta__title">{b(training.cta.title)}</h2>
          <p className="cta__lede">{b(training.cta.lede)}</p>
          <div className="cta__actions">
            <Link className="btn btn--amber btn--lg" to={contact.path}>
              {b(training.certificate.enquire)}
            </Link>
            <Link className="btn btn--ghost btn--lg" to={training.path}>
              {b(training.certificate.backToTraining)}
            </Link>
          </div>
          <p className="cta__foot">{t('cta.foot')}</p>
        </Reveal>
      </section>
    </div>
  );
}
