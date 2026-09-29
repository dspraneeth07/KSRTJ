import { Link } from 'react-router-dom';
import { useBi } from '../i18n/bi';
import { useLang } from '../i18n/LanguageProvider';
import { courseGroups } from '../data/content';
import { training } from '../data/training';
import { contact } from '../data/contact';
import { Reveal } from '../components/Reveal';
import { Tilt } from '../components/Tilt';
import { YantraOutline } from '../components/Icons';

/**
 * Training & Educational Programs — the overview.
 *
 * Two groups with genuinely different shapes. Certificate courses carry
 * level, duration, medium, mode and a certificate; study programmes are
 * open-ended and carry mode only. Listing a duration or a certificate
 * against a study programme would claim something it does not offer, so
 * the meta rows are driven by `group.kind` rather than being filled in
 * with placeholders.
 */

export default function TrainingPage() {
  const { b } = useBi();
  const { t } = useLang();

  return (
    <div className="training">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="thero">
        <div className="wrap thero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">{b(training.crumbHome)}</Link>
            <span aria-hidden="true">/</span>
            <span className="crumbs__here">{b(training.crumbTraining)}</span>
          </nav>

          <p className="eyebrow eyebrow--light">{t('courses.eyebrow')}</p>
          <h1 className="thero__title">{t('courses.title')}</h1>
          <p className="thero__lede">{t('courses.lede')}</p>
          <p className="thero__standfirst">{b(training.standfirst)}</p>
        </div>
      </section>

      {/* ── The two groups ──────────────────────────────────────── */}
      {courseGroups.map((group) => (
        <section
          className={`section ${group.kind === 'study' ? 'section--paper2' : ''}`}
          id={group.id}
          key={group.id}
        >
          <div className="wrap">
            <Reveal className="crsgroup__head" variant="lift">
              <h2 className="crsgroup__title">{t(group.title)}</h2>
              {group.kind === 'certificate' && (
                <Link className="crsgroup__link" to={training.certificatePath}>
                  {b(training.certLink)} →
                </Link>
              )}
            </Reveal>

            <div className="crsgrid">
              {group.items.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 70}>
                  <Tilt className="course__tilt" max={6} lift={16}>
                    <article className="course">
                      <h3 className="course__name">{t(item.name)}</h3>
                      <p className="course__desc">{t(item.desc)}</p>
                      <dl className="course__meta">
                        {group.kind === 'certificate' && (
                          <>
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
                          </>
                        )}
                        <div>
                          <dt>{t('meta.mode')}</dt>
                          <dd>{t('courses.mode')}</dd>
                        </div>
                        {group.kind === 'certificate' && (
                          <div>
                            <dt>{t('courses.certLabel')}</dt>
                            <dd>{t('courses.cert')}</dd>
                          </div>
                        )}
                      </dl>
                    </article>
                  </Tilt>
                </Reveal>
              ))}
            </div>

            {group.kind === 'study' && (
              <Reveal variant="lift" delay={120}>
                <p className="crsnote">{b(training.studyNote)}</p>
              </Reveal>
            )}
          </div>
        </section>
      ))}

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
              {t('footer.contact')}
            </Link>
            <Link className="btn btn--ghost btn--lg" to={training.certificatePath}>
              {t('courses.grp.cert')}
            </Link>
          </div>
          <p className="cta__foot">{t('cta.foot')}</p>
        </Reveal>
      </section>
    </div>
  );
}
