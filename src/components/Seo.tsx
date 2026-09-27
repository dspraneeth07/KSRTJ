import { useLocation } from 'react-router-dom';
import { useBi, type Bi } from '../i18n/bi';

/**
 * Per-route document head.
 *
 * React 19 hoists <title>, <meta> and <link rel="canonical"> rendered
 * anywhere in the tree into <head>, so this needs no helmet library and no
 * extra dependency. It is mounted once in the shell and keys off the path,
 * which keeps every page's metadata in one file rather than scattered
 * across six components.
 *
 * Note that this is a client-rendered SPA: a crawler that does not execute
 * JavaScript sees only the static tags in index.html. That is the known
 * trade-off recorded in the README, and prerendering is the fix if organic
 * search becomes a priority.
 */

const SITE = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ?? '';

interface Entry {
  title: Bi;
  description: Bi;
}

const BRAND = 'Sanātana Vidyā Kendra';

const pages: Record<string, Entry> = {
  '/': {
    title: {
      en: `${BRAND} — Vastu, Jyotisha & Numerology, Wanaparthy`,
      te: `${BRAND} — వాస్తు, జ్యోతిష, సంఖ్యా శాస్త్రం, వనపర్తి`,
    },
    description: {
      en: 'Vastu Shastra, Jyotisha, Numerology, Swarashastra and Brahmavidya practised as one discipline. Consultations for individuals, builders, corporates and institutions, in Telugu and English, from Wanaparthy, Telangana.',
      te: 'వాస్తు శాస్త్రం, జ్యోతిషం, సంఖ్యా శాస్త్రం, స్వర శాస్త్రం, బ్రహ్మవిద్య — ఒకే శాస్త్రంగా ఆచరణ. వ్యక్తులకు, బిల్డర్లకు, సంస్థలకు తెలుగు, ఆంగ్లంలో సంప్రదింపులు. వనపర్తి, తెలంగాణ.',
    },
  },
  '/about': {
    title: {
      en: `Shri K. Shrinivas Reddy — Founder & Principal Consultant · ${BRAND}`,
      te: `శ్రీ కె. శ్రీనివాస్ రెడ్డి — స్థాపకులు, ప్రధాన సలహాదారు · ${BRAND}`,
    },
    description: {
      en: 'Shri K. Shrinivas Reddy practises Vastu Shastra, Jyotisha and Numerology as one discipline from Wanaparthy, Telangana. Training, method, the record kept, and what this practice does not do.',
      te: 'శ్రీ కె. శ్రీనివాస్ రెడ్డి వనపర్తి, తెలంగాణ నుండి వాస్తు, జ్యోతిష, సంఖ్యా శాస్త్రాలను ఒకే శాస్త్రంగా ఆచరిస్తారు. శిక్షణ, పద్ధతి, భద్రపరిచిన రికార్డు, ఈ సంస్థ చేయనివి.',
    },
  },
  '/services/vastu': {
    title: {
      en: `Vastu Shastra Consultation — 15 services · ${BRAND}`,
      te: `వాస్తు శాస్త్ర సంప్రదింపు — 15 సేవలు · ${BRAND}`,
    },
    description: {
      en: 'Plot Vastu, house and flat Vastu, main entrance, Ayadi Ganitham, commercial and industrial audits, dosha identification and remedies. Measured drawings, instrument-verified north, remedies ranked by cost.',
      te: 'స్థల వాస్తు, ఇల్లు–ఫ్లాట్ వాస్తు, ముఖ ద్వారం, ఆయాది గణితం, వాణిజ్య–పారిశ్రామిక తనిఖీ, దోష నిర్ధారణ, పరిహారాలు. కొలిచిన ప్రణాళికలు, పరికరంతో ఉత్తర నిర్ధారణ, ఖర్చు క్రమంలో పరిహారాలు.',
    },
  },
  '/services/jyotisha': {
    title: {
      en: `Jyotisha Consultation — 19 services · ${BRAND}`,
      te: `జ్యోతిష సంప్రదింపు — 19 సేవలు · ${BRAND}`,
    },
    description: {
      en: 'Birth chart analysis, career, marriage and Guna Milan, dasha–bhukti and gochara, life-event timing, Prashna, Muhurtham and naming. Charts calculated in advance and cross-checked against a second ayanamsa.',
      te: 'జన్మ జాతక విశ్లేషణ, వృత్తి, వివాహం, గుణ మిలన్, దశ–భుక్తి, గోచారం, కాల నిర్ణయం, ప్రశ్న, ముహూర్తం, నామకరణం. కుండలి ముందుగానే గణించి, రెండో అయనాంశతో సరిపోల్చుతాం.',
    },
  },
  '/services/numerology': {
    title: {
      en: `Numerology Consultation — 12 services · ${BRAND}`,
      te: `సంఖ్యా శాస్త్ర సంప్రదింపు — 12 సేవలు · ${BRAND}`,
    },
    description: {
      en: 'Name and spelling correction, child naming, business, company and brand names, mobile, vehicle and house number compatibility, auspicious dates and signature analysis. Chaldean system, arithmetic shown.',
      te: 'పేరు–స్పెల్లింగ్ సవరణ, శిశు నామకరణం, వ్యాపార–కంపెనీ–బ్రాండ్ నామాలు, మొబైల్–వాహన–ఇంటి సంఖ్య అనుకూలత, శుభ తేదీలు, సంతక విశ్లేషణ. కాల్డియన్ విధానం, లెక్కతో సహా.',
    },
  },
  '/services/swarashastra': {
    title: {
      en: `Swarashastra & Brahmavidya — guidance, not consultation · ${BRAND}`,
      te: `స్వర శాస్త్రం, బ్రహ్మవిద్య — సంప్రదింపు కాదు, మార్గదర్శనం · ${BRAND}`,
    },
    description: {
      en: 'Teacher-guided study in Swarashastra and Brahmavidya. No booking, no deliverable and no fixed end — admission follows a readiness conversation that carries no fee.',
      te: 'స్వర శాస్త్రం, బ్రహ్మవిద్యలలో గురు మార్గదర్శనంలో అధ్యయనం. నమోదు ఉండదు, నివేదిక ఉండదు, నిర్దిష్ట ముగింపు ఉండదు — రుసుము లేని సన్నద్ధత సంభాషణ తర్వాతే ప్రవేశం.',
    },
  },
};

const notFound: Entry = {
  title: { en: `Page not found · ${BRAND}`, te: `పేజీ కనబడలేదు · ${BRAND}` },
  description: {
    en: 'That page does not exist.',
    te: 'ఆ పేజీ లేదు.',
  },
};

export function Seo() {
  const { pathname } = useLocation();
  const { b, lang } = useBi();

  const known = pathname in pages;
  const entry = known ? pages[pathname] : notFound;
  const title = b(entry.title);
  const description = b(entry.description);

  // An unknown path is served index.html with a 200 by Netlify's SPA rewrite.
  // Without this it would advertise itself as a real page: a self-canonical
  // tells a crawler the URL is canonical, which is the opposite of the truth.
  const canonical = known && SITE ? `${SITE}${pathname === '/' ? '/' : pathname}` : undefined;
  const image = SITE ? `${SITE}/img/og-card.jpg` : undefined;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {!known && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={lang === 'te' ? 'te_IN' : 'en_IN'} />
      {canonical && <meta property="og:url" content={canonical} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
}
