import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageProvider';
import { courses, faqs, pillars, processSteps, signatures } from '../../data/content';
import type { StringKey } from '../../i18n/strings';
import { PillarIcon, YantraOutline } from '../Icons';
import { Portrait } from '../Portrait';
import { Reveal } from '../Reveal';
import { Tilt } from '../Tilt';

/* ── shared heading ─────────────────────────────────────────────── */

interface HeadProps {
  eyebrow: StringKey;
  title: StringKey;
  lede?: StringKey;
  light?: boolean;
  align?: 'center' | 'left';
}

function SectionHead({ eyebrow, title, lede, light, align = 'center' }: HeadProps) {
  const { t } = useLang();
  return (
    <Reveal
      as="header"
      variant="lift"
      className={`secthead ${light ? 'secthead--light' : ''} ${
        align === 'left' ? 'secthead--left' : ''
      }`}
    >
      <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{t(eyebrow)}</p>
      <h2 className="secthead__title">{t(title)}</h2>
      {lede && <p className="secthead__lede">{t(lede)}</p>}
    </Reveal>
  );
}

/* ── practice statement ────────────────────────────────────────── */

/**
 * This band used to carry four counters — years, consultations, projects,
 * countries. They were placeholders, and unverifiable numbers are the
 * fastest way to lose the credibility the rest of the page argues for.
 * One honest sentence replaces them.
 */
export function TrustStrip() {
  const { t } = useLang();
  return (
    <section className="statement" aria-label="Experience">
      <Reveal className="wrap statement__inner" variant="lift">
        <h2 className="statement__title">{t('trust.title')}</h2>
        <p className="statement__body">{t('trust.body')}</p>
      </Reveal>
    </section>
  );
}

/* ── four pillars ───────────────────────────────────────────────── */

export function Pillars() {
  const { t } = useLang();
  return (
    <section className="section" id="pillars">
      <div className="wrap">
        <SectionHead eyebrow="pillars.eyebrow" title="pillars.title" lede="pillars.lede" />
        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <Tilt className="pillar__tilt" max={6} lift={18}>
                <article className="pillar">
                  <div className="pillar__icon">
                    <PillarIcon name={p.icon} />
                  </div>
                  <h3 className="pillar__name">{t(p.name)}</h3>
                  <p className="pillar__sub">{t(p.sub)}</p>
                  <p className="pillar__desc">{t(p.desc)}</p>
                  <p className="pillar__count">{t(p.count)}</p>
                  <a className="link" href="#book">
                    {t(p.cta)}
                  </a>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── signature consultations ────────────────────────────────────── */

export function Signature() {
  const { t } = useLang();
  return (
    <section className="section section--paper2" id="signature">
      <div className="wrap">
        <SectionHead eyebrow="sig.eyebrow" title="sig.title" lede="sig.lede" />
        <div className="sig">
          {signatures.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 80}>
              <Tilt className="sig__tilt" max={5} lift={16}>
                <article className="sig__card">
                  <p className="sig__disc">{t(s.discipline)}</p>
                  <h3 className="sig__name">{t(s.name)}</h3>
                  <p className="sig__desc">{t(s.desc)}</p>
                  <dl className="sig__meta">
                    <div>
                      <dt>{t('meta.mode')}</dt>
                      <dd>{t(s.mode)}</dd>
                    </div>
                  </dl>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
        <p className="sig__foot">
          <span>{t('sig.fee')}</span>{' '}
          <a className="link" href="#book">
            {t('cta.requestFee')}
          </a>
        </p>
      </div>
    </section>
  );
}

/* ── process ────────────────────────────────────────────────────── */

export function Process() {
  const { t } = useLang();
  return (
    <section className="section section--dark" id="process">
      <div className="wrap">
        <SectionHead eyebrow="process.eyebrow" title="process.title" lede="process.lede" light />
        <ol className="process">
          {processSteps.map((step, i) => (
            <Reveal as="li" className="process__step" key={step.id} delay={i * 90}>
              <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="process__name">{t(step.name)}</h3>
              <p className="process__desc">{t(step.desc)}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── founder ────────────────────────────────────────────────────── */

export function Founder() {
  const { t } = useLang();
  return (
    <section className="section" id="founder">
      <div className="wrap founder">
        <Reveal className="founder__portrait" variant="lift">
          <Tilt max={8} lift={22}>
            <figure className="founder__frame">
              <Portrait variant="portrait" className="founder__photo" alt={t('founder.alt')} />
            </figure>
          </Tilt>
        </Reveal>

        <Reveal className="founder__body" delay={90} variant="lift">
          <p className="eyebrow">{t('founder.eyebrow')}</p>
          <h2 className="secthead__title">{t('founder.title')}</h2>
          <p className="founder__role">{t('founder.role')}</p>
          <p className="founder__text">{t('founder.p1')}</p>
          <p className="founder__text">{t('founder.p2')}</p>
          <h3 className="founder__credLabel">{t('founder.credLabel')}</h3>
          <ul className="founder__creds">
            <li>{t('founder.cred1')}</li>
            <li>{t('founder.cred2')}</li>
          </ul>
          <Link className="link" to="/about">
            {t('cta.readFull')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── institutional ─────────────────────────────────────────────── */

export function Institutional() {
  const { t } = useLang();
  return (
    <section className="section section--paper2" id="institutional">
      <div className="wrap">
        <SectionHead eyebrow="inst.eyebrow" title="inst.title" lede="inst.lede" />
        <Reveal className="inst__cta" variant="lift">
          <p>{t('inst.ctaText')}</p>
          <a className="btn btn--ink" href="#book">
            {t('cta.instBrief')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ── courses ────────────────────────────────────────────────────── */

export function Courses() {
  const { t } = useLang();
  return (
    <section className="section" id="courses">
      <div className="wrap">
        <SectionHead eyebrow="courses.eyebrow" title="courses.title" lede="courses.lede" />
        <div className="courses">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={i * 80}>
              <Tilt className="course__tilt" max={6} lift={16}>
                <article className="course">
                  <h3 className="course__name">{t(course.name)}</h3>
                  <p className="course__desc">{t(course.desc)}</p>
                  <dl className="course__meta">
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
                      <dd>{t('courses.cert')}</dd>
                    </div>
                  </dl>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ────────────────────────────────────────────────────────── */

export function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="section" id="faq">
      <div className="wrap faq__wrap">
        <SectionHead eyebrow="faq.eyebrow" title="faq.title" align="left" />
        <div className="faq">
          {faqs.map((item, i) => {
            const isOpen = open === item.id;
            return (
              <Reveal className="faq__item" key={item.id} delay={i * 60} variant="lift">
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${item.id}`}
                  onClick={() => setOpen(isOpen ? null : item.id)}
                >
                  <span>{t(item.q)}</span>
                  <span className={`faq__sign ${isOpen ? 'is-open' : ''}`} aria-hidden="true" />
                </button>
                <div className="faq__a" id={`faq-${item.id}`} hidden={!isOpen}>
                  <p>{t(item.a)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── closing CTA ────────────────────────────────────────────────── */

export function ClosingCta() {
  const { t } = useLang();
  return (
    <section className="cta" id="book">
      <div className="cta__art" aria-hidden="true">
        <YantraOutline />
      </div>
      <Reveal className="wrap cta__inner" variant="lift">
        <p className="eyebrow eyebrow--light">{t('cta.eyebrow')}</p>
        <h2 className="cta__title">{t('cta.title')}</h2>
        <p className="cta__lede">{t('cta.lede')}</p>
        <div className="cta__actions">
          <a className="btn btn--amber btn--lg" href="#book">
            {t('cta.book')}
          </a>
          <a className="btn btn--ghost btn--lg" href="https://wa.me/910000000000">
            {t('cta.whatsapp')}
          </a>
        </div>
        <p className="cta__foot">{t('cta.foot')}</p>
      </Reveal>
    </section>
  );
}
