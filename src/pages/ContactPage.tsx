import { Link } from 'react-router-dom';
import { useBi } from '../i18n/bi';
import { useLang } from '../i18n/LanguageProvider';
import { contact, PHONE_TEL, WHATSAPP_URL } from '../data/contact';
import { processSteps } from '../data/content';
import { ContactIcon, YantraOutline } from '../components/Icons';
import { Reveal } from '../components/Reveal';
import type { Bi } from '../i18n/bi';

/**
 * Contact.
 *
 * Three things, in the order a visitor needs them: how to reach the
 * centre, the practical facts, and what happens after they write. The
 * process steps are the same data the homepage renders — read from
 * `processSteps` rather than restated — but set here as a vertical
 * timeline, because on this page they answer "what am I signing up
 * for?" rather than "how does this place work?".
 */

const ui = {
  home: { en: 'Home', te: 'ముఖపేజీ' },
} satisfies Record<string, Bi>;

export default function ContactPage() {
  const { b } = useBi();
  const { t } = useLang();

  return (
    <div className="contact">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="chero">
        <div className="chero__art" aria-hidden="true">
          <YantraOutline />
        </div>
        <div className="wrap chero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">{b(ui.home)}</Link>
            <span aria-hidden="true">/</span>
            <span className="crumbs__here">{b(contact.eyebrow)}</span>
          </nav>

          <p className="eyebrow eyebrow--light">{b(contact.eyebrow)}</p>
          <h1 className="chero__title">{b(contact.title)}</h1>
          <p className="chero__lede">{b(contact.lede)}</p>
          <p className="chero__hours">{t('utility.hours')}</p>
        </div>
      </section>

      {/* ── Channels ────────────────────────────────────────────── */}
      <section className="section section--tight" id="reach">
        <div className="wrap">
          <div className="channels">
            {contact.channels.map((channel, i) => {
              const inner = (
                <>
                  <span className="channel__icon" aria-hidden="true">
                    <ContactIcon name={channel.icon} />
                  </span>
                  <span className="channel__label">{b(channel.label)}</span>
                  <span className="channel__value">{b(channel.value)}</span>
                  <span className="channel__note">{b(channel.note)}</span>
                </>
              );

              return (
                <Reveal key={channel.id} delay={i * 80}>
                  {channel.href ? (
                    <a
                      className="channel channel--link"
                      href={channel.href}
                      {...(channel.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="channel">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* ── At a glance ───────────────────────────────────── */}
          <Reveal className="glance" variant="lift" delay={120}>
            <h2 className="glance__title">{b(contact.glance.label)}</h2>
            <dl className="glance__rows">
              {contact.glance.rows.map((row) => (
                <div className="glance__row" key={row.id}>
                  <dt>{b(row.k)}</dt>
                  <dd>{b(row.v)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── The consultation process, as a timeline ─────────────── */}
      <section className="section section--dark" id="process">
        <div className="wrap">
          <Reveal as="header" variant="lift" className="secthead secthead--light secthead--left">
            <p className="eyebrow eyebrow--light">{b(contact.processIntro)}</p>
            <h2 className="secthead__title">{t('process.title')}</h2>
            <p className="secthead__lede">{t('process.lede')}</p>
          </Reveal>

          <ol className="ctimeline">
            {processSteps.map((step, i) => (
              <Reveal as="li" className="ctimeline__step" key={step.id} delay={i * 70}>
                <span className="ctimeline__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="ctimeline__body">
                  <h3 className="ctimeline__name">{t(step.name)}</h3>
                  <p className="ctimeline__desc">{t(step.desc)}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Onward links ────────────────────────────────────────── */}
      <section className="section section--paper2">
        <div className="wrap">
          <Reveal variant="lift">
            <h2 className="glance__title">{b(contact.links.label)}</h2>
          </Reveal>
          <div className="onward">
            {contact.links.items.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <Link className="onward__item" to={item.to}>
                  <span className="onward__name">{b(item.name)}</span>
                  <span className="onward__line">{b(item.line)}</span>
                  <span className="onward__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ─────────────────────────────────────────────── */}
      <section className="cta" id="book">
        <div className="cta__art" aria-hidden="true">
          <YantraOutline />
        </div>
        <Reveal className="wrap cta__inner" variant="lift">
          <p className="eyebrow eyebrow--light">{t('cta.eyebrow')}</p>
          <h2 className="cta__title">{b(contact.cta.title)}</h2>
          <p className="cta__lede">{b(contact.cta.lede)}</p>
          <div className="cta__actions">
            <a className="btn btn--amber btn--lg" href={PHONE_TEL}>
              {t('utility.call')}
            </a>
            <a
              className="btn btn--ghost btn--lg"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('cta.whatsapp')}
            </a>
          </div>
          <p className="cta__foot">{t('cta.foot')}</p>
        </Reveal>
      </section>
    </div>
  );
}
