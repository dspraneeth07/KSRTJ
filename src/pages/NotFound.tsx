import { Link } from 'react-router-dom';
import { useBi, type Bi } from '../i18n/bi';

/**
 * A real 404 rather than silently serving the homepage at every wrong URL.
 *
 * Netlify rewrites unknown paths to index.html with a 200, which is what a
 * client-routed site needs; this at least makes the page itself honest about
 * not existing, and offers the routes that do.
 */

const ui = {
  code: { en: 'Page not found', te: 'పేజీ కనబడలేదు' },
  title: {
    en: 'That page is not here.',
    te: 'ఆ పేజీ ఇక్కడ లేదు.',
  },
  body: {
    en: 'The address may have changed, or it may never have existed. These are the pages that do:',
    te: 'చిరునామా మారి ఉండవచ్చు, లేదా అది ఎప్పుడూ ఉండకపోవచ్చు. ఉన్న పేజీలు ఇవి:',
  },
  home: { en: 'Home', te: 'ముఖపేజీ' },
  about: { en: 'About the practice', te: 'సంస్థ గురించి' },
  vastu: { en: 'Vastu Shastra', te: 'వాస్తు శాస్త్రం' },
  jyotisha: { en: 'Jyotisha', te: 'జ్యోతిష శాస్త్రం' },
  numerology: { en: 'Numerology', te: 'సంఖ్యా శాస్త్రం' },
  swara: { en: 'Spiritual & Vedic Studies', te: 'ఆధ్యాత్మిక & వేద విద్యలు' },
} satisfies Record<string, Bi>;

const links: { to: string; label: Bi }[] = [
  { to: '/', label: ui.home },
  { to: '/about', label: ui.about },
  { to: '/services/vastu', label: ui.vastu },
  { to: '/services/jyotisha', label: ui.jyotisha },
  { to: '/services/numerology', label: ui.numerology },
  { to: '/services/spiritual', label: ui.swara },
];

export default function NotFound() {
  const { b } = useBi();

  return (
    <section className="nf">
      <div className="wrap nf__inner">
        <p className="eyebrow">{b(ui.code)}</p>
        <h1 className="nf__title">{b(ui.title)}</h1>
        <p className="nf__body">{b(ui.body)}</p>
        <ul className="nf__links">
          {links.map((link) => (
            <li key={link.to}>
              <Link className="link" to={link.to}>
                {b(link.label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
