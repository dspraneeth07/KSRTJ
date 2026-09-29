import type { Bi, BiList } from '../i18n/bi';

/* ═══════════════════════════════════════════════════════════════════
   Footer.

   A curated shortlist per discipline — not a slice of services.ts. The
   footer's job is to show what the centre does at a glance, so it picks
   six representative items rather than reproducing all eighty.

   None of these have pages of their own, so they link to the discipline
   page that covers them.
   ═══════════════════════════════════════════════════════════════════ */

export interface FooterColumn {
  id: string;
  title: Bi;
  /** Where every item in the column goes. */
  to: string;
  items: BiList;
}

export const footerDisciplines: FooterColumn[] = [
  {
    id: 'vastu',
    title: { en: 'Vastu Shastra', te: 'వాస్తు శాస్త్రం' },
    to: '/services/vastu',
    items: {
      en: [
        'Plot Vastu — direction, shape, slope, road frontage',
        'House & villa Vastu',
        'Flat & apartment Vastu',
        'Ayadi Ganitham',
        'Industrial Vastu',
        'Practical Vastu remedies, where applicable',
      ],
      te: [
        'స్థల వాస్తు — దిక్కు, ఆకారం, వాలు, రహదారి ముఖం',
        'ఇల్లు, విల్లా వాస్తు',
        'ఫ్లాట్, అపార్ట్‌మెంట్ వాస్తు',
        'ఆయాది గణితం',
        'పారిశ్రామిక వాస్తు',
        'అవసరమైన చోట ఆచరణాత్మక వాస్తు పరిహార సూచనలు',
      ],
    },
  },
  {
    id: 'jyotisha',
    title: {
      en: 'Jyotisha Shastra & Allied Studies',
      te: 'జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు',
    },
    to: '/services/jyotisha',
    items: {
      en: [
        'Birth chart analysis (Janma Jataka)',
        'Marriage compatibility',
        'Dasha–bhukti and gochara-based assessment',
        'Prashna Shastra',
        'Muhurta, date & time selection',
        'Naming based on Nakshatra & Pada',
      ],
      te: [
        'జన్మ జాతక విశ్లేషణ',
        'వివాహ అనుకూలత',
        'దశ–భుక్తి మరియు గోచారాల ఆధారిత పరిశీలన',
        'ప్రశ్న శాస్త్రం',
        'ముహూర్తం, తేదీ మరియు సమయ నిర్ణయం',
        'నక్షత్ర, పాద ఆధారిత నామకరణం',
      ],
    },
  },
  {
    id: 'numerology',
    title: { en: 'Numerology', te: 'సంఖ్యా శాస్త్రం' },
    to: '/services/numerology',
    items: {
      en: [
        'Personal name & spelling correction',
        'Child naming',
        'Brand name',
        'House & flat number compatibility',
        'Date selection by number',
        'Signature analysis',
      ],
      te: [
        'వ్యక్తిగత పేరు, స్పెల్లింగ్ సవరణ',
        'శిశు నామకరణం',
        'బ్రాండ్ నామం',
        'ఇల్లు, ఫ్లాట్ సంఖ్య అనుకూలత',
        'సంఖ్య ఆధారంగా తేదీ ఎంపిక',
        'సంతక విశ్లేషణ',
      ],
    },
  },
];

export interface FooterLink {
  id: string;
  label: Bi;
  to: string;
}

export const footerCentre = {
  title: { en: 'The Centre', te: 'కేంద్రం' } satisfies Bi,
  links: [
    { id: 'about', label: { en: 'About', te: 'మా గురించి' }, to: '/about' },
    { id: 'services', label: { en: 'Services', te: 'సేవలు' }, to: '/#signature' },
    { id: 'training', label: { en: 'Training', te: 'శిక్షణ' }, to: '/training' },
    {
      id: 'certificates',
      label: { en: 'Certificate Courses', te: 'సర్టిఫికేట్ కోర్సులు' },
      to: '/training/certificate-courses',
    },
    { id: 'process', label: { en: 'Process', te: 'ప్రక్రియ' }, to: '/contact#process' },
    { id: 'faq', label: { en: 'Questions', te: 'ప్రశ్నలు' }, to: '/#faq' },
    { id: 'contact', label: { en: 'Contact', te: 'సంప్రదించండి' }, to: '/contact' },
  ] satisfies FooterLink[],
};
