import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageProvider';
import { faqs, pillars, processSteps, serviceGroups } from '../../data/content';
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

        {serviceGroups.map((group) => (
          <div className="msgroup" key={group.id}>
            <Reveal className="msgroup__head" variant="lift">
              <h3 className="msgroup__title">{t(group.title)}</h3>
            </Reveal>

            <div className="msgrid">
              {group.items.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 70}>
                  <Tilt className="ms__tilt" max={5} lift={14}>
                    <article className="ms">
                      <h4 className="ms__name">{t(item.name)}</h4>
                      <p className="ms__desc">{t(item.desc)}</p>
                      <p className="ms__mode">
                        <span className="ms__modeLabel">{t('meta.mode')}</span>
                        {t('ms.mode')}
                      </p>
                    </article>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal className="msfee" variant="lift">
          <h3 className="msfee__title">{t('sig.feeTitle')}</h3>
          <p className="msfee__body">{t('sig.fee')}</p>
          <a className="link" href="#book">
            {t('sig.feeCta')}
          </a>
        </Reveal>
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
            <li>{t('founder.cred3')}</li>
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

/* ── FAQ ────────────────────────────────────────────────────────── */

export function Faq() {
  const { t } = useLang();
  // First answer open, so the section reads as questions *and* answers rather
  // than as a bare list of questions.
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

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
          <a className="btn btn--ghost btn--lg" href="https://wa.me/918309096407">
            {t('cta.whatsapp')}
          </a>
        </div>
        <p className="cta__foot">{t('cta.foot')}</p>
      </Reveal>
    </section>
  );
}
