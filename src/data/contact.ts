import type { Bi } from '../i18n/bi';

/* ═══════════════════════════════════════════════════════════════════
   Contact.

   One place where every way of reaching the centre is stated, followed
   by the consultation process so that a visitor knows what happens
   after they write. The process steps themselves are NOT duplicated
   here — they come from `processSteps` in content.ts, so the two pages
   that show them can never drift apart.
   ═══════════════════════════════════════════════════════════════════ */

/** The one phone number, written once. Everything else derives from it. */
export const PHONE_DISPLAY = '+91 83090 96407';
export const PHONE_TEL = 'tel:+918309096407';
export const WHATSAPP_URL = 'https://wa.me/918309096407';

export type ChannelIcon = 'phone' | 'whatsapp' | 'place';

export interface Channel {
  id: string;
  icon: ChannelIcon;
  label: Bi;
  value: Bi;
  note: Bi;
  href?: string;
  /** Opens off-site, so it carries rel=noopener and an external hint. */
  external?: boolean;
}

export const contact = {
  path: '/contact',

  eyebrow: { en: 'Contact', te: 'సంప్రదింపు' },
  title: { en: 'Get in touch.', te: 'సంప్రదించండి.' },
  lede: {
    en: 'For a consultation, or to ask about the courses, call or send a message on WhatsApp with a short note about what you are looking for.',
    te: 'సంప్రదింపు కోసం లేదా కోర్సుల గురించి తెలుసుకోవడానికి — మీరు ఏమి కోరుకుంటున్నారో క్లుప్తంగా రాసి ఫోన్ చేయండి లేదా వాట్సాప్‌లో సందేశం పంపండి.',
  },

  channels: [
    {
      id: 'phone',
      icon: 'phone',
      label: { en: 'Call', te: 'ఫోన్' },
      value: { en: PHONE_DISPLAY, te: PHONE_DISPLAY },
      note: {
        en: 'Speak directly about a consultation or a course.',
        te: 'సంప్రదింపు లేదా కోర్సు గురించి నేరుగా మాట్లాడవచ్చు.',
      },
      href: PHONE_TEL,
    },
    {
      id: 'whatsapp',
      icon: 'whatsapp',
      label: { en: 'WhatsApp', te: 'వాట్సాప్' },
      value: { en: 'Send a message', te: 'సందేశం పంపండి' },
      note: {
        en: 'Useful when birth details or site details need to be shared in writing.',
        te: 'జనన వివరాలు లేదా స్థల వివరాలు లిఖితపూర్వకంగా పంపాల్సినప్పుడు ఉపయోగపడుతుంది.',
      },
      href: WHATSAPP_URL,
      external: true,
    },
    {
      id: 'place',
      icon: 'place',
      label: { en: 'Visit', te: 'ప్రత్యక్ష సందర్శన' },
      value: { en: 'KDR Nagar, Wanaparthy', te: 'కేడీఆర్ నగర్, వనపర్తి' },
      note: {
        en: 'Telangana, India. In-person meetings are arranged beforehand.',
        te: 'తెలంగాణ, భారతదేశం. ప్రత్యక్ష సమావేశాలు ముందస్తు ఏర్పాటుతో జరుగుతాయి.',
      },
    },
  ] satisfies Channel[],

  /* ── The practical facts, stated once ───────────────────────────── */
  glance: {
    label: { en: 'At a glance', te: 'ముఖ్య వివరాలు' },
    rows: [
      {
        id: 'mode',
        k: { en: 'Mode', te: 'విధానం' },
        v: { en: 'Online or In-person', te: 'ఆన్‌లైన్ లేదా ప్రత్యక్షం' },
      },
      {
        id: 'languages',
        k: { en: 'Languages', te: 'భాషలు' },
        v: { en: 'Telugu, English', te: 'తెలుగు, ఆంగ్లం' },
      },
      {
        id: 'for',
        k: { en: 'For', te: 'దేని కోసం' },
        v: {
          en: 'Consultations and training programmes',
          te: 'సంప్రదింపులు మరియు శిక్షణ కార్యక్రమాలు',
        },
      },
      {
        id: 'place',
        k: { en: 'Based at', te: 'కేంద్రం' },
        v: {
          en: 'KDR Nagar, Wanaparthy, Telangana',
          te: 'కేడీఆర్ నగర్, వనపర్తి, తెలంగాణ',
        },
      },
    ] as { id: string; k: Bi; v: Bi }[],
  },

  /* ── Framing above the process ──────────────────────────────────── */
  processIntro: {
    en: 'What happens after you write',
    te: 'మీరు సంప్రదించిన తర్వాత ఏమి జరుగుతుంది',
  },

  /* ── Links out ──────────────────────────────────────────────────── */
  links: {
    label: { en: 'Looking for something specific?', te: 'నిర్దిష్టంగా ఏదైనా చూస్తున్నారా?' },
    items: [
      {
        id: 'training',
        to: '/training',
        name: { en: 'Training & Educational Programs', te: 'శిక్షణ & విద్యా కార్యక్రమాలు' },
        line: {
          en: 'Certificate courses and study programmes, with levels, medium and mode.',
          te: 'సర్టిఫికేట్ కోర్సులు, అధ్యయన కార్యక్రమాలు — స్థాయి, బోధనా భాష, విధానంతో సహా.',
        },
      },
      {
        id: 'about',
        to: '/about',
        name: { en: 'About Sri K. Sreenivasa Reddy', te: 'శ్రీ కె. శ్రీనివాస్ రెడ్డి గురించి' },
        line: {
          en: 'Background, qualifications, and how the work is approached.',
          te: 'నేపథ్యం, విద్యార్హతలు, పని చేసే విధానం.',
        },
      },
      {
        id: 'services',
        to: '/#signature',
        name: { en: 'Our main services', te: 'మా ప్రధాన సేవలు' },
        line: {
          en: 'Vastu, Jyotisha & allied studies, and Numerology.',
          te: 'వాస్తు, జ్యోతిష & అనుబంధ విద్యలు, సంఖ్యా శాస్త్రం.',
        },
      },
    ] as { id: string; to: string; name: Bi; line: Bi }[],
  },

  /* ── Closing ────────────────────────────────────────────────────
     Deliberately not a repeat of the hero: by the time a reader is
     here they have read the process, so this asks for the one thing
     that makes a first message useful. */
  cta: {
    title: { en: 'Tell us what you need.', te: 'మీకు ఏమి కావాలో తెలియజేయండి.' },
    lede: {
      en: 'A line about the subject — a house, a chart, a name, or a course — is enough to begin. We will tell you what details are needed next.',
      te: 'విషయం గురించి ఒక్క వాక్యం చాలు — ఇల్లు, జాతకం, పేరు లేదా కోర్సు. తర్వాత ఏ వివరాలు అవసరమో మేము తెలియజేస్తాం.',
    },
  },
};
