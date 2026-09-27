import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBi, type Bi } from '../i18n/bi';
import { useLang } from '../i18n/LanguageProvider';
import { swaraPage } from '../data/swara';
import { Reveal } from '../components/Reveal';
import { PillarIcon } from '../components/Icons';
import { Portrait } from '../components/Portrait';

/**
 * The fourth vertical, deliberately built differently.
 *
 * No cards, no tilt, no sheen, no fee table, no booking button. Content
 * sits on hairline rules at a narrow measure with far more air than the
 * rest of the site. The register is the argument: a page that looked like
 * the other three would be selling these disciplines, which is the one
 * thing this page must not do.
 */

const ui = {
  breadcrumbHome: { en: 'Home', te: 'ముఖపేజీ' },
  breadcrumbServices: { en: 'Services', te: 'సేవలు' },
  expectations: { en: 'What to expect', te: 'ఏమి ఆశించవచ్చు' },
  who: { en: 'Who this is for', te: 'ఇది ఎవరికి' },
  practice: { en: 'What guidance looks like', te: 'మార్గదర్శనం ఎలా ఉంటుంది' },
  limit: { en: 'What it is not', te: 'ఇది ఏమి కాదు' },
  faqTitle: { en: 'Before you write', te: 'రాసేముందు' },
  guidedBy: {
    en: 'Guidance in both disciplines is given personally.',
    te: 'ఈ రెండు శాఖల్లోనూ మార్గదర్శనం వ్యక్తిగతంగానే ఇవ్వబడుతుంది.',
  },
} satisfies Record<string, Bi>;

export default function SwaraPage() {
  const { b, bl } = useBi();
  const { t } = useLang();
  // First answer open, so the section reads as questions *and* answers
  // rather than as a bare list of questions.
  const [faqOpen, setFaqOpen] = useState<string | null>(swaraPage.faqs[0]?.id ?? null);

  return (
    <div className="quiet">
      {/* ── Hero: flat, no glow, no 3D, no ornament ─────────────── */}
      <section className="qhero">
        <div className="wrap qhero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">{b(ui.breadcrumbHome)}</Link>
            <span aria-hidden="true">/</span>
            <span>{b(ui.breadcrumbServices)}</span>
            <span aria-hidden="true">/</span>
            <span className="crumbs__here">{t('v.swara.name')}</span>
          </nav>

          <div className="qhero__mark" aria-hidden="true">
            <PillarIcon name="swara" />
          </div>
          <p className="eyebrow eyebrow--light">{b(swaraPage.eyebrow)}</p>
          <h1 className="qhero__title">{b(swaraPage.title)}</h1>
          <p className="qhero__lede">{b(swaraPage.lede)}</p>
        </div>
      </section>

      {/* ── Framing + expectations ──────────────────────────────── */}
      <section className="qsection">
        <div className="wrap qcol">
          <Reveal variant="lift">
            <h2 className="qh2">{b(swaraPage.framingTitle)}</h2>
            <p className="qbody">{b(swaraPage.framing)}</p>
          </Reveal>

          <Reveal variant="lift" delay={90}>
            <h3 className="qlabel">{b(ui.expectations)}</h3>
            <ul className="qlist">
              {bl(swaraPage.expectations).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <figure className="byline byline--quiet">
              <Portrait variant="square" className="byline__photo" alt={t('founder.alt')} />
              <figcaption className="byline__text">
                <span className="byline__name">{t('founder.title')}</span>
                <span className="byline__role">{t('founder.role')}</span>
                <span className="byline__note">{b(ui.guidedBy)}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── The two disciplines ─────────────────────────────────── */}
      {swaraPage.disciplines.map((discipline) => (
        <section className="qsection qsection--rule" id={discipline.id} key={discipline.id}>
          <div className="wrap qcol">
            <Reveal variant="lift">
              <h2 className="qdisc__name">{b(discipline.name)}</h2>
              <p className="qdisc__standfirst">{b(discipline.standfirst)}</p>
              <p className="qbody qbody--lead">{b(discipline.definition)}</p>

              <div className="qlimit">
                <h3 className="qlabel">{b(ui.limit)}</h3>
                <p>{b(discipline.limit)}</p>
              </div>
            </Reveal>

            <Reveal variant="lift" delay={80}>
              <h3 className="qlabel qlabel--stages">{b(discipline.stagesLabel)}</h3>
              <ol className="qstages">
                {discipline.stages.map((stage, i) => (
                  <li className="qstage" key={stage.id}>
                    <span className="qstage__num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="qstage__body">
                      <h4 className="qstage__name">{b(stage.name)}</h4>
                      <p>{b(stage.body)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal variant="lift" delay={120}>
              <div className="qpair">
                <div>
                  <h3 className="qlabel">{b(ui.who)}</h3>
                  <p className="qbody">{b(discipline.who)}</p>
                </div>
                <div>
                  <h3 className="qlabel">{b(ui.practice)}</h3>
                  <p className="qbody">{b(discipline.practice)}</p>
                </div>
              </div>

              {/* A quiet text link, never a button. */}
              <a className="qcta" href="#enquire">
                {b(discipline.cta)}
                <span aria-hidden="true"> →</span>
              </a>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── Explicit comparison with the other three ────────────── */}
      <section className="qsection qsection--tint" id="difference">
        <div className="wrap qcol">
          <Reveal variant="lift">
            <h2 className="qh2">{b(swaraPage.comparison.title)}</h2>
            <p className="qbody">{b(swaraPage.comparison.lede)}</p>
          </Reveal>

          <Reveal variant="lift" delay={80}>
            <div className="qtable__scroll">
              <table className="qtable">
                <thead>
                  <tr>
                    <th scope="col" />
                    <th scope="col">{b(swaraPage.comparison.colA)}</th>
                    <th scope="col">{b(swaraPage.comparison.colB)}</th>
                  </tr>
                </thead>
                <tbody>
                  {swaraPage.comparison.rows.map((row) => (
                    <tr key={row.id}>
                      <th scope="row">{b(row.label)}</th>
                      <td>{b(row.a)}</td>
                      <td className="qtable__b">{b(row.b)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="qsection" id="swara-faq">
        <div className="wrap qcol">
          <Reveal variant="lift">
            <h2 className="qh2">{b(ui.faqTitle)}</h2>
          </Reveal>
          <div className="faq qfaq">
            {swaraPage.faqs.map((item, i) => {
              const isOpen = faqOpen === item.id;
              return (
                <Reveal className="faq__item" key={item.id} delay={i * 50} variant="lift">
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`sfaq-${item.id}`}
                    onClick={() => setFaqOpen(isOpen ? null : item.id)}
                  >
                    <span>{b(item.q)}</span>
                    <span className={`faq__sign ${isOpen ? 'is-open' : ''}`} aria-hidden="true" />
                  </button>
                  <div className="faq__a" id={`sfaq-${item.id}`} hidden={!isOpen}>
                    <p>{b(item.a)}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Enquiry flow, in place of a fee table ───────────────── */}
      <section className="qsection qsection--tint" id="enquire">
        <div className="wrap qcol">
          <Reveal variant="lift">
            <h2 className="qh2">{b(swaraPage.flow.title)}</h2>
            <p className="qbody">{b(swaraPage.flow.lede)}</p>
          </Reveal>

          <Reveal variant="lift" delay={80}>
            <ol className="qstages qstages--flow">
              {swaraPage.flow.steps.map((step, i) => (
                <li className="qstage" key={step.id}>
                  <span className="qstage__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="qstage__body">
                    <h3 className="qstage__name">{b(step.name)}</h3>
                    <p>{b(step.body)}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="qnote">{b(swaraPage.flow.note)}</p>

            <a className="qcta qcta--final" href="mailto:enquiries@example.org">
              {b(swaraPage.flow.cta)}
              <span aria-hidden="true"> →</span>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
