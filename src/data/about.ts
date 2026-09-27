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
    en: 'Practising Vastu Shastra, Jyotisha and Numerology as one discipline rather than three, and teaching all three, from Wanaparthy in Telangana.',
    te: 'వాస్తు శాస్త్రం, జ్యోతిషం, సంఖ్యా శాస్త్రం — మూడుగా కాక ఒకే శాస్త్రంగా ఆచరణ; మూడింటినీ బోధన. తెలంగాణలోని వనపర్తి నుండి.',
  },
  place: { en: 'KDR Nagar · Wanaparthy · Telangana', te: 'కేడీఆర్ నగర్ · వనపర్తి · తెలంగాణ' },

  /* ── Opening statement ────────────────────────────────────────── */
  opening: {
    label: { en: 'Why the work is not divided', te: 'ఈ పని ఎందుకు విభజించబడలేదు' },
    paras: [
      {
        en: 'Most people who consult on these subjects specialise in one of them. That is the sensible commercial arrangement, and it is also the reason so much advice contradicts itself. A Vastu consultant who has never seen the owner’s chart, an astrologer who has never seen the house, and a numerologist who has spoken to neither will each give an answer that is defensible on its own and close to useless alongside the other two.',
        te: 'ఈ విషయాల్లో సలహా ఇచ్చే చాలామంది ఏదో ఒకదానిలోనే ప్రత్యేకత సాధిస్తారు. వ్యాపార పరంగా అది సహజమైన ఏర్పాటే; అలాగే చాలా సలహాలు పరస్పరం విరుద్ధంగా ఉండటానికి కారణమూ అదే. యజమాని జాతకం చూడని వాస్తు సలహాదారు, ఇల్లు చూడని జ్యోతిష్కుడు, ఇద్దరితోనూ మాట్లాడని సంఖ్యా శాస్త్రవేత్త — ముగ్గురూ విడిగా సమర్థించుకోగల సమాధానాలే ఇస్తారు; కానీ మూడూ కలిపి చూస్తే అవి దాదాపు నిరుపయోగం.',
      },
      {
        en: 'This practice was built the other way round. The questions clients actually bring do not arrive divided by discipline — a house, a marriage and a business decision usually turn up as one problem, in one conversation, and often in a single sentence. Holding the three sciences in the same room is what makes it possible to reconcile the findings rather than stack them.',
        te: 'ఈ సంస్థ దానికి వ్యతిరేక దిశలో నిర్మించబడింది. ఖాతాదారులు నిజంగా తెచ్చే ప్రశ్నలు శాస్త్రాల వారీగా విడిపోయి రావు — ఇల్లు, వివాహం, వ్యాపార నిర్ణయం సాధారణంగా ఒకే సమస్యగా, ఒకే సంభాషణలో, తరచుగా ఒకే వాక్యంలో వస్తాయి. మూడు శాస్త్రాలనూ ఒకే చోట ఉంచడం వల్లనే ఫలితాలను పోగు చేయకుండా సమన్వయం చేయడం సాధ్యమవుతుంది.',
      },
      {
        en: 'What that requires, in practice, is a slower kind of work. Charts are calculated before the sitting rather than during it. True north is taken on site with an instrument rather than read off a builder’s drawing. Findings are graded by severity, so a client knows what is actually affecting them and what is merely imperfect on paper. And where the shastra is silent, or the evidence is thin, that is said plainly instead of filled in.',
        te: 'ఆచరణలో దీనికి కావలసింది నెమ్మదైన పని. కుండలిని సమావేశ సమయంలో కాక, అంతకుముందే గణిస్తాం. నిజ ఉత్తర దిక్కును బిల్డర్ ప్రణాళిక నుండి చదవకుండా, స్థలంలోనే పరికరంతో నిర్ధారిస్తాం. ఫలితాలను తీవ్రత ప్రకారం విభజిస్తాం — నిజంగా ప్రభావం చూపేది ఏది, కాగితంపై మాత్రమే లోపమైనది ఏది అని ఖాతాదారుకు తెలుస్తుంది. శాస్త్రం మౌనంగా ఉన్న చోట, ఆధారం బలహీనంగా ఉన్న చోట — ఖాళీని పూరించకుండా అది స్పష్టంగా చెప్తాం.',
      },
    ],
  },

  /* ── Training ─────────────────────────────────────────────────── */
  training: {
    label: { en: 'Training and lineage', te: 'శిక్షణ, గురు పరంపర' },
    paras: [
      {
        en: 'Trained in the Sthapatya and Jyotisha traditions under [Guru’s name] over [n] years, and in independent practice since [year].',
        te: '[గురువు పేరు] వద్ద [n] సంవత్సరాలు స్థాపత్య, జ్యోతిష సంప్రదాయాలలో శిక్షణ; [సంవత్సరం] నుండి స్వతంత్ర ఆచరణలో.',
      },
      {
        en: '[To be supplied: the lineage this training belongs to, the principal texts studied within it, and how the study was structured — two or three sentences is enough, and specifics matter more than length.]',
        te: '[అందించవలసినది: ఈ శిక్షణ ఏ పరంపరకు చెందినది, అందులో అధ్యయనం చేసిన ప్రధాన గ్రంథాలు, అధ్యయనం ఎలా సాగింది — రెండు మూడు వాక్యాలు చాలు; పొడవు కంటే నిర్దిష్టతే ముఖ్యం.]',
      },
    ],
  },

  /* ── Qualifications ───────────────────────────────────────────── */
  qualifications: {
    label: { en: 'Qualifications', te: 'అర్హతలు' },
    note: {
      en: 'A qualification is listed here only with the institution and the year that awarded it. Where either is missing, the line stays out — an unverifiable credential costs more on a page like this one than an absent credential does.',
      te: 'ఏ అర్హతనైనా — దాన్ని ఇచ్చిన సంస్థ, సంవత్సరంతో సహా మాత్రమే ఇక్కడ చేరుస్తాం. ఆ రెండింటిలో ఏది లేకపోయినా ఆ పంక్తిని తొలగిస్తాం — ఈ పేజీలో ధ్రువీకరించలేని అర్హత వల్ల, అసలు అర్హత లేకపోవడం కంటే ఎక్కువ నష్టం.',
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

  /* ── The record ───────────────────────────────────────────────── */
  record: {
    label: { en: 'The record', te: 'రికార్డు' },
    paras: [
      {
        en: 'Every chart, every site plan and every report issued since [year] is retained.',
        te: '[సంవత్సరం] నుండి ఇచ్చిన ప్రతి కుండలి, ప్రతి స్థల ప్రణాళిక, ప్రతి నివేదిక భద్రపరచబడింది.',
      },
      {
        en: 'This is unusual, and it is deliberate. A practice that keeps no record can only recall the predictions that landed. A practice that keeps one can be asked about the others — and has to answer. It is also what makes it possible to tell a client honestly that a particular reading is less certain than it sounds, because the failures are on file alongside the successes.',
        te: 'ఇది అరుదైన పద్ధతి, ఉద్దేశపూర్వకమైనది కూడా. రికార్డు ఉంచని సంస్థ, ఫలించిన అంచనాలను మాత్రమే గుర్తుంచుకోగలదు. రికార్డు ఉంచిన సంస్థను మిగిలిన వాటి గురించి కూడా అడగవచ్చు — దానికి సమాధానం చెప్పక తప్పదు. ఒక పరిశీలన అనిపించినంత నిశ్చయమైనది కాదని ఖాతాదారుకు నిజాయితీగా చెప్పగలగడానికి కారణమూ ఇదే; ఎందుకంటే విజయాలతో పాటు వైఫల్యాలూ ఫైల్‌లో ఉంటాయి.',
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
        en: 'Foundational courses in Vastu Shastra, Jyotisha and Numerology are taught in small batches, in Telugu and English, from primary texts rather than summaries. Students have included practising architects and interior designers as well as those intending to consult professionally.',
        te: 'వాస్తు శాస్త్రం, జ్యోతిషం, సంఖ్యా శాస్త్రాలలో మౌలిక కోర్సులు — చిన్న బ్యాచ్‌లలో, తెలుగు, ఆంగ్లంలో, సంక్షిప్త నోట్సుతో కాక మూల గ్రంథాలతో బోధన. వృత్తిపరంగా సలహా ఇవ్వాలనుకునేవారితో పాటు ఆచరణలో ఉన్న ఆర్కిటెక్టులు, ఇంటీరియర్ డిజైనర్లు కూడా విద్యార్థులుగా ఉన్నారు.',
      },
      {
        en: 'Swarashastra and Brahmavidya are taught separately, by assessment, and are not offered as courses at all.',
        te: 'స్వర శాస్త్రం, బ్రహ్మవిద్యలను విడిగా, పరిశీలన అనంతరం మాత్రమే బోధిస్తారు; అవి కోర్సులుగా అసలు ఇవ్వబడవు.',
      },
    ],
    courseLink: { en: 'See the three courses', te: 'మూడు కోర్సులు చూడండి' },
    swaraLink: { en: 'Swarashastra & Brahmavidya', te: 'స్వర శాస్త్రం, బ్రహ్మవిద్య' },
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
          en: 'Across Telangana and Andhra Pradesh; elsewhere in India by arrangement, with travel at actuals',
          te: 'తెలంగాణ, ఆంధ్రప్రదేశ్ అంతటా; భారతదేశంలో ఇతర ప్రాంతాలకు ముందస్తు ఏర్పాటుతో, ప్రయాణ ఖర్చు వాస్తవ ప్రాతిపదికన',
        },
      },
      {
        id: 'online',
        k: { en: 'Online', te: 'ఆన్‌లైన్' },
        v: {
          en: 'For clients across India and abroad, at no difference in method',
          te: 'భారతదేశం, విదేశాల్లోని ఖాతాదారులకు — పద్ధతిలో ఎలాంటి తేడా లేకుండా',
        },
      },
      {
        id: 'languages',
        k: { en: 'Languages', te: 'భాషలు' },
        v: {
          en: 'Telugu and English. The sitting and the written report may be in different languages',
          te: 'తెలుగు, ఆంగ్లం. సమావేశం ఒక భాషలో, లిఖిత నివేదిక మరో భాషలో కూడా తీసుకోవచ్చు',
        },
      },
    ],
  },

  cta: {
    title: { en: 'Consultations are conducted personally.', te: 'సంప్రదింపులు వ్యక్తిగతంగానే నిర్వహిస్తారు.' },
    lede: {
      en: 'Not by an associate, and not by a team. That sets a limit on how many are possible in a week, which is the reason slots are confirmed by a person rather than a calendar.',
      te: 'సహాయకుల ద్వారా కాదు, బృందం ద్వారా కాదు. అందువల్ల వారానికి ఎన్ని సాధ్యమో దానికి ఒక పరిమితి ఉంటుంది — సమయాన్ని క్యాలెండర్ కాక ఒక వ్యక్తి నిర్ధారించడానికి కారణం అదే.',
    },
  },
};
