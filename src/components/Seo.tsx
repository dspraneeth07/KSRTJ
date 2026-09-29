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
      en: `${BRAND} — Vastu, Jyotisha, Numerology, Swara & Brahmavidya`,
      te: `${BRAND} — వాస్తు, జ్యోతిష, సంఖ్యా శాస్త్రం, స్వరం, బ్రహ్మవిద్య`,
    },
    description: {
      en: 'Knowledge, practice, experience, research and teaching in Vastu Shastra, Jyotisha Shastra & Allied Studies, Numerology, Swara Shastra, and Spiritual Studies & Brahmavidya. Consultations and courses in Telugu and English, from Wanaparthy, Telangana.',
      te: 'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు, సంఖ్యా శాస్త్రం, స్వర శాస్త్రం, ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్యలపై జ్ఞానం, ఆచరణ, అనుభవం, పరిశోధన మరియు బోధన. తెలుగు, ఆంగ్లంలో సంప్రదింపులు, కోర్సులు. వనపర్తి, తెలంగాణ.',
    },
  },
  '/about': {
    title: {
      en: `Sri K. Sreenivasa Reddy — Founder & Principal Guide · ${BRAND}`,
      te: `శ్రీ కె. శ్రీనివాస్ రెడ్డి — స్థాపకులు & ప్రధాన మార్గదర్శకులు · ${BRAND}`,
    },
    description: {
      en: 'Sri K. Sreenivasa Reddy studies, practises and teaches Vastu Shastra, Jyotisha, Numerology and the spiritual and Vedic disciplines, from Wanaparthy, Telangana.',
      te: 'శ్రీ కె. శ్రీనివాస్ రెడ్డి వనపర్తి, తెలంగాణ నుండి వాస్తు, జ్యోతిష, సంఖ్యా శాస్త్రాలను మరియు ఆధ్యాత్మిక–వేద విద్యలను అధ్యయనం చేస్తూ, ఆచరిస్తూ, బోధిస్తారు.',
    },
  },
  '/contact': {
    title: {
      en: `Contact · ${BRAND}`,
      te: `సంప్రదించండి · ${BRAND}`,
    },
    description: {
      en: 'Call or message on WhatsApp for a consultation or to ask about the courses. Online or in person, in Telugu and English, from KDR Nagar, Wanaparthy, Telangana.',
      te: 'సంప్రదింపు కోసం లేదా కోర్సుల గురించి తెలుసుకోవడానికి ఫోన్ చేయండి లేదా వాట్సాప్‌లో సందేశం పంపండి. ఆన్‌లైన్ లేదా ప్రత్యక్షంగా, తెలుగు–ఆంగ్లంలో. కేడీఆర్ నగర్, వనపర్తి, తెలంగాణ.',
    },
  },
  '/training': {
    title: {
      en: `Training & Educational Programs · ${BRAND}`,
      te: `శిక్షణ & విద్యా కార్యక్రమాలు · ${BRAND}`,
    },
    description: {
      en: 'Certificate courses in Vastu Shastra, Jyotisha Shastra & Allied Studies and Numerology, and study programmes in Swara Shastra and Spiritual Studies & Brahmavidya. Telugu and English, online or in person.',
      te: 'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు, సంఖ్యా శాస్త్రంలో సర్టిఫికేట్ కోర్సులు; స్వర శాస్త్రం, ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్యలో అధ్యయన కార్యక్రమాలు. తెలుగు, ఆంగ్లం — ఆన్‌లైన్ లేదా ప్రత్యక్షం.',
    },
  },
  '/training/certificate-courses': {
    title: {
      en: `Certificate Courses · ${BRAND}`,
      te: `సర్టిఫికేట్ కోర్సులు · ${BRAND}`,
    },
    description: {
      en: 'Vastu Shastra, Jyotisha Shastra & Allied Studies and Numerology, taught from foundational to advanced levels in Telugu and English. Each course concludes with a Course Completion Certificate.',
      te: 'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు, సంఖ్యా శాస్త్రం — ప్రాథమిక స్థాయి నుండి ఉన్నత స్థాయి వరకు, తెలుగు–ఆంగ్లంలో. ప్రతి కోర్సు చివర Course Completion Certificate ఇవ్వబడుతుంది.',
    },
  },
  '/services/vastu': {
    title: {
      en: `Vastu Shastra — consultation and training · ${BRAND}`,
      te: `వాస్తు శాస్త్రం — సంప్రదింపు, శిక్షణ · ${BRAND}`,
    },
    description: {
      en: 'Plot Vastu, house and flat Vastu, main entrance, room zoning, Ayadi Ganitham, commercial premises, dosha identification and remedies — examination and guidance in Telugu and English.',
      te: 'స్థల వాస్తు, ఇల్లు–ఫ్లాట్ వాస్తు, ముఖ ద్వారం, గదుల స్థాన నిర్ణయం, ఆయాది గణితం, వాణిజ్య ప్రదేశాలు, దోష నిర్ధారణ, పరిహారాలు — తెలుగు, ఆంగ్లంలో పరిశీలన, మార్గదర్శనం.',
    },
  },
  '/services/jyotisha': {
    title: {
      en: `Jyotisha Shastra & Allied Studies — consultation and training · ${BRAND}`,
      te: `జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు — సంప్రదింపు, శిక్షణ · ${BRAND}`,
    },
    description: {
      en: 'Birth chart analysis, career, marriage and Guna Milan, dasha–bhukti and gochara, life-event timing, Prashna Jyotisham, Muhurtham and naming guidance.',
      te: 'జన్మ జాతక విశ్లేషణ, వృత్తి, వివాహం, గుణ మిలన్, దశ–భుక్తి, గోచారం, కాల నిర్ణయం, ప్రశ్న జ్యోతిషం, ముహూర్తం, నామకరణ మార్గదర్శనం.',
    },
  },
  '/services/numerology': {
    title: {
      en: `Numerology — consultation and training · ${BRAND}`,
      te: `సంఖ్యా శాస్త్రం — సంప్రదింపు, శిక్షణ · ${BRAND}`,
    },
    description: {
      en: 'Birth, destiny and name numbers, name and spelling correction, child naming, business and brand names, mobile, vehicle and house number compatibility, and auspicious dates.',
      te: 'జన్మ, భాగ్య, నామ సంఖ్యలు; పేరు–స్పెల్లింగ్ సవరణ, శిశు నామకరణం, వ్యాపార–బ్రాండ్ నామాలు, మొబైల్–వాహన–ఇంటి సంఖ్య అనుకూలత, శుభ తేదీలు.',
    },
  },
  '/services/spiritual': {
    title: {
      en: `Spiritual Studies & Brahmavidya · ${BRAND}`,
      te: `ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య · ${BRAND}`,
    },
    description: {
      en: 'Study, practice and guidance related to Swara Shastra, meditation, mantra, inner practice, self-knowledge and Brahmavidya, in Telugu and English.',
      te: 'స్వర శాస్త్రం, ధ్యానం, మంత్రం, అంతర్ముఖ సాధన, ఆత్మజ్ఞానం మరియు బ్రహ్మవిద్యకు సంబంధించిన అధ్యయనం, సాధన మరియు మార్గదర్శనం — తెలుగు, ఆంగ్లంలో.',
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
