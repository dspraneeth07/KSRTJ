import type { Bi, BiList } from '../i18n/bi';

/* ═══════════════════════════════════════════════════════════════════
   About — the practitioner's own page.

   Written so that the PROSE is real and usable as it stands, and only
   the FACTS I do not have are bracketed. The philosophy, the method and
   the boundaries all follow from commitments the rest of the site
   already makes, so they are stated here as fact. Names, years and
   institutions are left in brackets rather than invented.
   ═══════════════════════════════════════════════════════════════════ */

export interface AboutSection {
  id: string;
  label: Bi;
  title?: Bi;
  paras?: Bi[];
}

export const about = {
  path: '/about',

  eyebrow: { en: 'The practice', te: 'ఆచరణ' },
  standfirst: {
    en: 'Studying, practising and teaching Vastu Shastra, Jyotisha, Numerology and the related spiritual and Vedic disciplines, from Wanaparthy in Telangana.',
    te: 'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం, సంఖ్యా శాస్త్రం మరియు సంబంధిత ఆధ్యాత్మిక–వేద విద్యల అధ్యయనం, ఆచరణ మరియు బోధన. తెలంగాణలోని వనపర్తి నుండి.',
  },
  place: { en: 'KDR Nagar · Wanaparthy · Telangana', te: 'కేడీఆర్ నగర్ · వనపర్తి · తెలంగాణ' },

  /* ── Opening statement ────────────────────────────────────────── */
  opening: {
    label: { en: 'Why the work is not divided', te: 'ఈ పని ఎందుకు విభజించబడలేదు' },
    paras: [
      {
        en: 'These subjects are usually taken up one at a time. The questions people actually bring, though, do not arrive divided by discipline — a house, a marriage and a decision about work often turn up in one conversation, and sometimes in a single sentence.',
        te: 'ఈ విషయాలను సాధారణంగా ఒక్కొక్కటిగా చేపడతారు. కానీ ప్రజలు నిజంగా తెచ్చే ప్రశ్నలు శాస్త్రాల వారీగా విడిపోయి రావు — ఇల్లు, వివాహం, వృత్తి నిర్ణయం తరచుగా ఒకే సంభాషణలో, కొన్నిసార్లు ఒకే వాక్యంలో వస్తాయి.',
      },
      {
        en: 'That is why all four fields are studied and applied alongside one another here, and why the same person teaches them. Where a question genuinely calls for more than one discipline, it can be examined together rather than in separate appointments.',
        te: 'అందుకే ఇక్కడ నాలుగు విభాగాలనూ పక్కపక్కనే అధ్యయనం చేసి ఆచరిస్తారు; వాటిని బోధించేది కూడా ఒకే వ్యక్తి. ఒక ప్రశ్నకు నిజంగా ఒకటి కంటే ఎక్కువ శాస్త్రం అవసరమైనప్పుడు, వేర్వేరు సమావేశాలుగా కాక కలిపి పరిశీలించవచ్చు.',
      },
      {
        en: 'Practice and teaching are treated as two halves of the same work. What is used in a consultation is what is taught in the courses, and the courses are taught from the primary texts rather than from summaries.',
        te: 'ఆచరణ, బోధన — ఈ రెంటినీ ఒకే పనిలోని రెండు భాగాలుగా చూస్తారు. సంప్రదింపులో ఉపయోగించేదే కోర్సుల్లో బోధిస్తారు; కోర్సులను సంక్షిప్త నోట్సుతో కాక మూల గ్రంథాల ఆధారంగా బోధిస్తారు.',
      },
    ],
  },

  /* ── Training ─────────────────────────────────────────────────── */
  training: {
    label: { en: 'Study and practice', te: 'అధ్యయనం, ఆచరణ' },
    paras: [
      {
        en: 'Continuous study of the Sthapatya and Jyotisha traditions and of Numerology, alongside the spiritual and Vedic disciplines, applied in practice and taught to those who wish to learn them.',
        te: 'స్థాపత్య, జ్యోతిష సంప్రదాయాలు మరియు సంఖ్యా శాస్త్రంపై నిరంతర అధ్యయనం; వాటితో పాటు ఆధ్యాత్మిక–వేద విద్యలు. వీటిని ఆచరణలో ఉపయోగిస్తూ, నేర్చుకోవాలనుకునేవారికి బోధిస్తారు.',
      },
    ],
  },

  /* ── Qualifications ───────────────────────────────────────────── */
  qualifications: {
    label: { en: 'Qualifications', te: 'అర్హతలు' },
    note: {
      en: 'Only qualifications actually held are listed. Courses taught here carry a Course Completion Certificate; they are not university degrees or government-recognised qualifications, and are not presented as such.',
      te: 'నిజంగా ఉన్న అర్హతలను మాత్రమే ఇక్కడ చేర్చాం. ఇక్కడ బోధించే కోర్సులకు Course Completion Certificate ఇవ్వబడుతుంది; ఇవి విశ్వవిద్యాలయ పట్టాలు కావు, ప్రభుత్వ గుర్తింపు పొందిన అర్హతలు కావు — అలా చెప్పబడవు కూడా.',
    },
  },

  /* ── Method ───────────────────────────────────────────────────── */
  method: {
    label: { en: 'How the work is done', te: 'పని ఎలా జరుగుతుంది' },
    lede: {
      en: 'Five commitments that apply to every consultation, in every discipline, regardless of what it costs or who is asking.',
      te: 'ప్రతి సంప్రదింపుకూ, ప్రతి శాస్త్రంలోనూ వర్తించే అయిదు నియమాలు — రుసుము ఎంతైనా, అడిగేది ఎవరైనా.',
    },
    items: [
      {
        id: 'cold',
        name: { en: 'Nothing is read cold', te: 'ఏదీ ముందస్తు సన్నద్ధత లేకుండా చదవం' },
        body: {
          en: 'Charts, mandala overlays and numeric grids are prepared and cross-checked before you arrive. You are never billed for arithmetic performed during your own sitting.',
          te: 'కుండలి, మండల నిర్ధారణ, సంఖ్యా పట్టికలు మీరు రాకముందే సిద్ధం చేసి, పునఃపరిశీలన చేస్తాం. మీ సమావేశ సమయంలో చేసిన లెక్కలకు మీకు ఎప్పుడూ రుసుము ఉండదు.',
        },
      },
      {
        id: 'measure',
        name: { en: 'The measurement comes before the opinion', te: 'అభిప్రాయానికి ముందు కొలత' },
        body: {
          en: 'True north is established on site with an instrument. A birth time that is uncertain is rectified against documented life events first, and you are told what confidence was reached before anything is predicted.',
          te: 'నిజ ఉత్తర దిక్కును స్థలంలోనే పరికరంతో నిర్ధారిస్తాం. జనన సమయం మీద సందేహం ఉంటే, ముందుగా ధ్రువీకరించిన జీవిత సంఘటనలతో సవరిస్తాం; ఏదైనా చెప్పే ముందు ఎంత నిశ్చయతకు చేరామో మీకు తెలియజేస్తాం.',
        },
      },
      {
        id: 'graded',
        name: { en: 'Findings are graded', te: 'ఫలితాలను తీవ్రత ప్రకారం విభజిస్తాం' },
        body: {
          en: 'What is actively affecting the household is separated from what is textbook-imperfect but inert. Both are reported. Only one of them needs acting on, and you are told which.',
          te: 'నిజంగా ఇప్పుడు ప్రభావం చూపుతున్నది, గ్రంథ ప్రకారం లోపమే అయినా నిష్క్రియంగా ఉన్నది — రెండింటినీ వేరు చేస్తాం. రెండూ నివేదికలో ఉంటాయి. వాటిలో ఒకదానికే చర్య అవసరం; ఏదో మీకు చెప్తాం.',
        },
      },
      {
        id: 'cost',
        name: { en: 'Remedies are ranked by cost', te: 'పరిహారాలను ఖర్చు క్రమంలో ఇస్తాం' },
        body: {
          en: 'Use and orientation first, then material and placement changes, and structural alteration only where the defect is severe and nothing lighter will address it. Demolition is the last item on the list, if it appears at all.',
          te: 'ముందు వినియోగం, దిక్కు; తర్వాత వస్తువులు, స్థానాల మార్పు; నిర్మాణ మార్పు కేవలం దోషం తీవ్రంగా ఉండి, తేలికైన మార్గం ఏదీ పని చేయని చోట మాత్రమే. కూల్చివేత జాబితాలో చివరిది — అసలు ఉంటే.',
        },
      },
      {
        id: 'written',
        name: { en: 'Nothing is left verbal', te: 'ఏదీ మౌఖికంగా వదిలిపెట్టం' },
        body: {
          en: 'Every consultation ends in writing, in Telugu or English, with the reasoning behind each finding set out so that you — or anyone you choose to show it to — can check it.',
          te: 'ప్రతి సంప్రదింపూ తెలుగు లేదా ఆంగ్లంలో లిఖిత రూపంలో ముగుస్తుంది; ప్రతి నిర్ధారణ వెనుక కారణం స్పష్టంగా ఉంటుంది — మీరు, లేదా మీరు చూపించదలచిన ఎవరైనా దాన్ని సరిచూసుకోగలిగేలా.',
        },
      },
    ],
  },

  /* ── Teaching and practice together ─────────────────────────── */
  record: {
    label: { en: 'Practice and teaching', te: 'ఆచరణ మరియు బోధన' },
    paras: [
      {
        en: 'This centre exists to do two things: to apply these disciplines to the questions people bring, and to teach them to anyone who wishes to study them properly.',
        te: 'ఈ కేంద్రం రెండు పనుల కోసం ఉంది: ప్రజలు తెచ్చే ప్రశ్నలకు ఈ శాస్త్రాలను వర్తింపజేయడం; వాటిని క్రమబద్ధంగా నేర్చుకోవాలనుకునే ఎవరికైనా బోధించడం.',
      },
      {
        en: 'Both are conducted personally, which sets a natural limit on how many can be taken on at once. Consultations and classes are arranged by conversation rather than through a booking calendar.',
        te: 'ఈ రెండూ వ్యక్తిగతంగానే నిర్వహిస్తారు; అందువల్ల ఒకేసారి ఎన్ని చేపట్టగలమో దానికి సహజమైన పరిమితి ఉంటుంది. సంప్రదింపులు, తరగతులు బుకింగ్ క్యాలెండర్ ద్వారా కాక సంభాషణ ద్వారా ఏర్పాటు చేయబడతాయి.',
      },
    ],
  },

  /* ── Boundaries ───────────────────────────────────────────────── */
  boundaries: {
    label: { en: 'What this practice does not do', te: 'ఈ సంస్థ చేయనివి' },
    lede: {
      en: 'Stated here rather than discovered later.',
      te: 'తర్వాత తెలుసుకోవడం కాదు — ఇక్కడే స్పష్టంగా.',
    },
    items: {
      en: [
        'Sell gemstones, yantras, poojas or protective items. Remedies are recommended where they are warranted; they are not stocked, and there is nothing here to buy.',
        'Predict death, terminal illness or divorce. A prediction of that kind cannot be falsified in the moment and can do real harm to how someone lives afterwards.',
        'Offer medical diagnosis, name a disease, or advise anyone to stop or alter a course of treatment. Where a reading touches health, it sits alongside a doctor and defers to one.',
        'Guarantee outcomes. What is guaranteed is the method — stated reasoning, a written record, and a willingness to say when the answer is uncertain.',
        'Take on work that would be better served by one of the other disciplines, by a different practitioner, or by nobody at all. In each case you will be told so.',
      ],
      te: [
        'రత్నాలు, యంత్రాలు, పూజలు, రక్షణ వస్తువులు అమ్మం. అవసరమైన చోట పరిహారాలు సూచిస్తాం; వాటిని నిల్వ ఉంచం, ఇక్కడ కొనడానికి ఏమీ లేదు.',
        'మరణం, ప్రాణాంతక వ్యాధి, విడాకుల గురించి చెప్పం. అలాంటి జోస్యాన్ని ఆ క్షణంలో నిరూపించడం సాధ్యం కాదు; కానీ ఆ తర్వాత వ్యక్తి జీవించే తీరును అది నిజంగా దెబ్బతీయగలదు.',
        'వైద్య నిర్ధారణ చేయం, వ్యాధి పేరు చెప్పం, ఏ చికిత్సనూ ఆపమని లేదా మార్చమని సూచించం. ఆరోగ్యానికి సంబంధించిన పరిశీలన వైద్యుని సలహాతో పాటు ఉంటుంది, దానికి లోబడి ఉంటుంది.',
        'ఫలితాలకు హామీ ఇవ్వం. హామీ ఇచ్చేది పద్ధతికి — చెప్పిన కారణాలు, లిఖిత రికార్డు, సమాధానం అనిశ్చితంగా ఉన్నప్పుడు అది చెప్పే నిజాయితీ.',
        'మరో శాస్త్రం, మరో వ్యక్తి, లేదా అసలు ఎవరూ చేయకపోవడమే మేలైన పనిని చేపట్టం. ఆ విషయం ప్రతిసారీ మీకు చెప్తాం.',
      ],
    } satisfies BiList,
  },

  /* ── Teaching ─────────────────────────────────────────────────── */
  teaching: {
    label: { en: 'Teaching', te: 'బోధన' },
    paras: [
      {
        en: 'Foundational programmes in Vastu Shastra, Jyotisha, Numerology and the spiritual and Vedic disciplines are taught in small batches, in Telugu and English, from the primary texts. The duration depends on the course, and each concludes with a Course Completion Certificate.',
        te: 'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం, సంఖ్యా శాస్త్రం మరియు ఆధ్యాత్మిక–వేద విద్యలలో మౌలిక కార్యక్రమాలు — చిన్న బ్యాచ్‌లలో, తెలుగు, ఆంగ్లంలో, మూల గ్రంథాల ఆధారంగా బోధన. వ్యవధి కోర్సును బట్టి ఉంటుంది; ప్రతి దానికీ Course Completion Certificate ఇవ్వబడుతుంది.',
      },
      {
        en: 'Classes are held online or in person, and individual guidance is available where a group course does not suit.',
        te: 'తరగతులు ఆన్‌లైన్ లేదా ప్రత్యక్షంగా జరుగుతాయి; బృంద కోర్సు సరిపోని చోట వ్యక్తిగత మార్గదర్శనం అందుబాటులో ఉంటుంది.',
      },
    ],
    courseLink: { en: 'See the three courses', te: 'మూడు కోర్సులు చూడండి' },
    swaraLink: { en: 'Spiritual & Vedic Studies', te: 'ఆధ్యాత్మిక & వేద విద్యలు' },
  },

  /* ── Where ────────────────────────────────────────────────────── */
  where: {
    label: { en: 'Where and how', te: 'ఎక్కడ, ఎలా' },
    rows: [
      {
        id: 'base',
        k: { en: 'Based at', te: 'కేంద్రం' },
        v: { en: 'KDR Nagar, Wanaparthy, Telangana', te: 'కేడీఆర్ నగర్, వనపర్తి, తెలంగాణ' },
      },
      {
        id: 'visits',
        k: { en: 'Site visits', te: 'స్థల సందర్శనలు' },
        v: {
          en: 'By arrangement, with travel charged at actuals',
          te: 'ముందస్తు ఏర్పాటుతో; ప్రయాణ ఖర్చు వాస్తవ ప్రాతిపదికన',
        },
      },
      {
        id: 'online',
        k: { en: 'Online', te: 'ఆన్‌లైన్' },
        v: {
          en: 'Consultations and classes, at no difference in method',
          te: 'సంప్రదింపులు, తరగతులు — పద్ధతిలో ఎలాంటి తేడా లేకుండా',
        },
      },
      {
        id: 'languages',
        k: { en: 'Languages', te: 'భాషలు' },
        v: {
          en: 'Telugu and English, for both consultations and classes',
          te: 'తెలుగు, ఆంగ్లం — సంప్రదింపులకు, తరగతులకు రెండింటికీ',
        },
      },
    ],
  },

  cta: {
    title: { en: 'Get in touch.', te: 'సంప్రదించండి.' },
    lede: {
      en: 'For a consultation or to ask about the courses, message on WhatsApp with a short note about what you are looking for.',
      te: 'సంప్రదింపు కోసం లేదా కోర్సుల గురించి తెలుసుకోవడానికి — మీరు ఏమి కోరుకుంటున్నారో క్లుప్తంగా రాసి వాట్సాప్‌లో సంప్రదించండి.',
    },
  },
};
