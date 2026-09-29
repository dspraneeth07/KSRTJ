import type { Vertical } from './verticalTypes';

/* ═══════════════════════════════════════════════════════════════════
   Jyotisha vertical — 19 sub-services.

   Boundaries stated inside the copy, not in a footnote:
     · #1 Complete Birth Chart is the whole map; #2–#12 are depth on one
       area for people who already have that map
     · Career (#4, vocation) vs Business (#5, enterprise) vs Wealth
       (#6, accumulation) — earning, running, and holding are three
       different questions
     · Marriage & Married Life (#7, one chart) vs Guna Milan (#13, two)
     · Dasha–Bhukti (#14, the method) vs Life Event Timing (#15, applied)
     · Prashna (#16, a question already asked, no birth details) vs
       Muhurtham (#17, choosing a time to begin, needs the birth chart)

   Tone rule for this vertical: guidance and self-understanding, never
   deterministic prediction. No fear-based or absolute phrasing anywhere,
   and explicit non-medical framing on Health and Progeny.
   ═══════════════════════════════════════════════════════════════════ */

export const jyotishaVertical: Vertical = {
  id: 'jyotisha',
  path: '/services/jyotisha',
  icon: 'jyotisha',
  nameKey: 'v.jyotisha.name',
  subKey: 'v.jyotisha.sub',
  countKey: 'v.jyotisha.count',

  eyebrow: { en: 'Vertical two of four', te: 'నాలుగింటిలో రెండో శాఖ' },
  title: {
    en: 'A chart is an instrument for reading, not a verdict.',
    te: 'జాతకం చదవడానికి ఒక సాధనం, తీర్పు కాదు.',
  },
  lede: {
    en: 'Jyotisha works from a calculated position of the planets at your moment of birth. What it offers is a reading of disposition and of timing — where the ground is firm and where it is not. It does not offer certainty, and we do not present it as though it did.',
    te: 'మీ జనన క్షణంలో గ్రహాల స్థితిని గణించి జ్యోతిషం పని చేస్తుంది. అది ఇచ్చేది స్వభావం, కాలం గురించిన అవగాహన — ఎక్కడ నేల గట్టిగా ఉంది, ఎక్కడ లేదు అనే విషయం. అది నిశ్చయత ఇవ్వదు; ఇస్తుందని మేము చెప్పం.',
  },
  framingTitle: {
    en: 'How a Jyotisha consultation runs here',
    te: 'ఇక్కడ జ్యోతిష సంప్రదింపు ఎలా జరుగుతుంది',
  },
  framing: {
    en: 'We need three things: date of birth, time of birth as precisely as it was recorded, and place of birth. The chart is calculated before you arrive, cross-checked against a second ayanamsa, and the divisional charts relevant to your question are prepared in advance — you are never billed for arithmetic done during your own sitting. Where the birth time is uncertain, we rectify it against documented life events first and tell you what confidence we reached. The first service below reads the whole chart; the rest are depth on a single area, and most people who take them have already had that first reading done. Consultations run in Telugu or English, online or in person, and every one ends in writing.',
    te: 'మాకు మూడు వివరాలు కావాలి: జనన తేదీ, నమోదైనంత ఖచ్చితమైన జనన సమయం, జనన స్థలం. మీరు రాకముందే కుండలి గణించి, రెండో అయనాంశతో సరిపోల్చి, మీ ప్రశ్నకు సంబంధించిన వర్గ కుండలులు ముందుగానే సిద్ధం చేస్తాం — మీ సమావేశ సమయంలో లెక్కలకు వెచ్చించిన సమయానికి మీకు రుసుము ఉండదు. జనన సమయం మీద సందేహం ఉంటే, ధ్రువీకరించిన జీవిత సంఘటనల ఆధారంగా ముందుగా సవరించి, ఎంత నిశ్చయతకు చేరామో చెప్తాం. కింది మొదటి సేవ మొత్తం జాతకాన్ని చదువుతుంది; మిగిలినవి ఒక్కో అంశంపై లోతైన పరిశీలన — వాటిని తీసుకునే చాలామంది ఆ మొదటి పరిశీలన ఇప్పటికే చేయించుకుని ఉంటారు. సంప్రదింపులు తెలుగులో లేదా ఆంగ్లంలో, ఆన్‌లైన్ లేదా ప్రత్యక్షంగా; ప్రతి ఒక్కటీ లిఖిత రూపంలో ముగుస్తుంది.',
  },
  timingLabel: { en: 'Session', te: 'సమావేశ వ్యవధి' },
  filterAll: { en: 'All services', te: 'అన్ని సేవలు' },
  bundlesTitle: {
    en: 'Three sequences that answer the whole question',
    te: 'పూర్తి ప్రశ్నకు సమాధానమిచ్చే మూడు క్రమాలు',
  },
  bundlesLede: {
    en: 'Readings that need each other. Taken separately they tend to contradict; taken together they are reconciled before you hear them.',
    te: 'ఒకదానికొకటి అవసరమైన పరిశీలనలు. విడిగా తీసుకుంటే పరస్పర విరుద్ధంగా ఉంటాయి; కలిపి తీసుకుంటే మీకు చెప్పేముందే సమన్వయం చేస్తాం.',
  },
  faqTitle: { en: 'Asked before most readings', te: 'చాలా పరిశీలనలకు ముందు అడిగేవి' },
  feeLede: {
    en: 'Duration and fees are shared according to the requirement, before the sitting.',
    te: 'వ్యవధి, రుసుము అవసరాన్ని బట్టి సమావేశానికి ముందే తెలియజేయబడతాయి.',
  },
  ctaTitle: {
    en: 'Not sure whether you need the whole chart or one area?',
    te: 'మొత్తం జాతకం కావాలా, ఒక అంశం చాలా — తేల్చుకోలేకపోతున్నారా?',
  },
  ctaLede: {
    en: 'Tell us the question in two lines. If a full reading is unnecessary, we will say so and point you at the one service that answers it.',
    te: 'మీ ప్రశ్నను రెండు వాక్యాల్లో చెప్పండి. పూర్తి పరిశీలన అవసరం లేకపోతే అది చెప్పి, సమాధానమిచ్చే ఒకే సేవను సూచిస్తాం.',
  },

  /* ── Clusters ──────────────────────────────────────────────────
     Grouped by what the reading actually reads. The first four
     services all read standing indications in the natal chart —
     constitution, temperament, aptitude — rather than a date or a
     transaction, which is why Health sits with Foundations and not
     in a category of its own.                                     */
  clusters: [
    {
      id: 'foundations',
      label: { en: 'Life chart & foundations', te: 'జాతకం, మౌలిక పరిశీలన' },
      blurb: {
        en: 'The whole chart, and the standing indications read within it.',
        te: 'మొత్తం జాతకం, అందులోని స్థిర సూచనలు.',
      },
    },
    {
      id: 'work',
      label: { en: 'Career, wealth & property', te: 'వృత్తి, సంపద, ఆస్తి' },
      blurb: {
        en: 'Earning, running, holding and moving — four different questions.',
        te: 'సంపాదన, నిర్వహణ, నిలుపుదల, స్థానచలనం — నాలుగు వేర్వేరు ప్రశ్నలు.',
      },
    },
    {
      id: 'family',
      label: { en: 'Relationships & family', te: 'సంబంధాలు, కుటుంబం' },
      blurb: {
        en: 'One chart, or two compared — we will tell you which your question needs.',
        te: 'ఒక జాతకమా, రెండింటి పోలికా — మీ ప్రశ్నకు ఏది కావాలో చెప్తాం.',
      },
    },
    {
      id: 'timing',
      label: { en: 'Timing & event readings', te: 'కాల నిర్ణయం, సంఘటనల పరిశీలన' },
      blurb: {
        en: 'The method, its application, and the question asked in the moment.',
        te: 'పద్ధతి, దాని అనువర్తనం, ఆ క్షణంలో అడిగిన ప్రశ్న.',
      },
    },
    {
      id: 'ceremonial',
      label: { en: 'Ceremonial & remedial', te: 'ముహూర్తం, పరిహారాలు' },
      blurb: {
        en: 'Choosing a time, choosing a name, and what is actually worth doing.',
        te: 'సమయ ఎంపిక, నామ ఎంపిక, నిజంగా చేయదగినది ఏమిటి.',
      },
    },
  ],

  services: [
    /* ── 1 ───────────────────────────────────────────────────── */
    {
      id: 'birthchart',
      index: 1,
      cluster: 'foundations',
      name: { en: 'Complete Birth Chart (Janma Jataka) Analysis', te: 'సంపూర్ణ జన్మ జాతక విశ్లేషణ' },
      definition: {
        en: 'The foundational reading of the entire chart in one sitting. Every other service on this page is depth on a single area; this is the map they all sit on.',
        te: 'ఒకే సమావేశంలో మొత్తం జాతకాన్ని చదివే మౌలిక పరిశీలన. ఈ పేజీలోని మిగతా ప్రతి సేవా ఒక్కో అంశంపై లోతైన పరిశీలన; అవన్నీ నిలిచేది ఈ పునాదిపైనే.',
      },
      examine: {
        en: [
          'Lagna and its lord, and the Moon’s nakshatra — which together set temperament and fix the dasha sequence you will be living through',
          'All twelve houses read in order with their lords’ placement and dignity, rather than a highlight reel of the three that sound most interesting',
          'The yogas actually formed in your chart — and, just as usefully, the well-known ones that are commonly claimed but are not present in yours',
          'The running mahadasha and bhukti, with the relevant gochara periods laid against them',
          'Divisional charts where they change the reading: navamsa for marriage and dharma, dasamsa for profession',
        ],
        te: [
          'లగ్నం, లగ్నాధిపతి, చంద్రుని నక్షత్రం — ఇవి కలిసి స్వభావాన్ని నిర్ణయిస్తాయి, మీరు గడపబోయే దశా క్రమాన్ని నిర్ధారిస్తాయి',
          'ఆసక్తికరంగా అనిపించే మూడు భావాలను మాత్రమే కాక, పన్నెండు భావాలనూ వరుసగా — వాటి అధిపతుల స్థానం, బలంతో సహా',
          'మీ జాతకంలో నిజంగా ఏర్పడిన యోగాలు — అలాగే, తరచుగా చెప్పబడే ప్రసిద్ధ యోగాలలో మీ జాతకంలో లేనివి ఏవో కూడా',
          'నడుస్తున్న మహాదశ, భుక్తి; వాటితో పాటు సంబంధిత గోచార కాలాలు',
          'పరిశీలనను మార్చే వర్గ కుండలులు: వివాహం, ధర్మం కోసం నవాంశ; వృత్తి కోసం దశాంశ',
        ],
      },
      who: {
        en: 'You have never had the full chart read, or you hold several partial readings that disagree with one another and want a single coherent baseline.',
        te: 'ఇంతవరకు పూర్తి జాతక పరిశీలన చేయించుకోలేదు, లేదా పరస్పరం విరుద్ధమైన పాక్షిక పరిశీలనలు ఉన్నాయి; ఒకే సమగ్ర ఆధారం కావాలి.',
      },
      receive: {
        en: 'A written report covering all twelve houses, the yogas actually present, the dasha sequence ahead, and a recording of the sitting.',
        te: 'పన్నెండు భావాలు, నిజంగా ఉన్న యోగాలు, ముందున్న దశా క్రమం — అన్నీ కలిపిన లిఖిత నివేదిక; సమావేశ రికార్డింగ్‌తో సహా.',
      },
      cta: {
        en: 'Start here if you have not had the whole chart read.',
        te: 'మొత్తం జాతకం చదివించుకోకపోతే ఇక్కడే ప్రారంభించండి.',
      },
      mode: 'both',
      timing: { en: '90 minutes', te: '90 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 2 ───────────────────────────────────────────────────── */
    {
      id: 'personality',
      index: 2,
      cluster: 'foundations',
      name: { en: 'Personality & Life Pattern', te: 'స్వభావం, జీవన సరళి' },
      definition: {
        en: 'A reading of temperament and recurring pattern rather than of events — why a similar situation keeps arriving, and what in the chart disposes you toward it.',
        te: 'సంఘటనల కంటే స్వభావం, పునరావృతమయ్యే సరళిపై పరిశీలన — ఒకే రకమైన పరిస్థితి మళ్లీ మళ్లీ ఎందుకు ఎదురవుతుంది, జాతకంలో దానికి కారణమేమిటి.',
      },
      examine: {
        en: [
          'Lagna and lagna lord for constitution and outward manner; the Moon for mind and emotional register',
          'The Sun for self-conception and your relationship to authority; Mercury for how you reason and how you argue',
          'The atmakaraka, and how the chart distributes weight across the four purusharthas',
          'Strengths and pressures that recur across successive dasha periods — the pattern, not the individual incident',
          'Where one natural tendency serves you in one area of life and works against you in another',
        ],
        te: [
          'శరీర ప్రకృతి, బాహ్య ప్రవర్తనకు లగ్నం, లగ్నాధిపతి; మనసు, భావోద్వేగ స్థాయికి చంద్రుడు',
          'ఆత్మభావన, అధికారంతో మీ సంబంధానికి సూర్యుడు; ఆలోచనా విధానం, వాదన శైలికి బుధుడు',
          'ఆత్మకారకుడు; నాలుగు పురుషార్థాల మధ్య జాతకం బరువును ఎలా పంచుతుంది',
          'వరుస దశల్లో పునరావృతమయ్యే బలాలు, ఒత్తిడులు — ఒక సంఘటన కాదు, సరళి',
          'ఒక సహజ లక్షణం జీవితంలో ఒక చోట సహకరించి, మరో చోట అడ్డుపడే స్థానాలు',
        ],
      },
      who: {
        en: 'You are less interested in prediction than in understanding your own pattern — this is often taken before a career change, a course of therapy, or a decision that has been postponed for years.',
        te: 'భవిష్యత్తు చెప్పించుకోవడం కంటే మీ స్వంత సరళిని అర్థం చేసుకోవాలనుకుంటున్నారు — వృత్తి మార్పు, చికిత్స, లేదా ఏళ్లుగా వాయిదా పడుతున్న నిర్ణయానికి ముందు దీన్ని తీసుకుంటారు.',
      },
      receive: {
        en: 'A written character and pattern reading, with the chart factor behind each observation stated so you can weigh it for yourself.',
        te: 'లిఖిత స్వభావ, సరళి పరిశీలన — ప్రతి పరిశీలన వెనుక ఉన్న జాతక కారణం స్పష్టంగా, మీరే బేరీజు వేసుకునేలా.',
      },
      cta: {
        en: 'For understanding the pattern rather than predicting the event.',
        te: 'సంఘటనను ఊహించడం కాదు — సరళిని అర్థం చేసుకోవడానికి.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 3 ───────────────────────────────────────────────────── */
    {
      id: 'education',
      index: 3,
      cluster: 'foundations',
      name: { en: 'Education & Knowledge Path', te: 'విద్య, జ్ఞాన మార్గం' },
      definition: {
        en: 'Aptitude and study direction from the chart — which fields it supports, and which years run favourably for admission and examination.',
        te: 'జాతకం ఆధారంగా అభిరుచి, చదువు దిశ — ఏ రంగాలకు అనుకూలం, ప్రవేశాలకు, పరీక్షలకు ఏ సంవత్సరాలు అనుకూలం.',
      },
      examine: {
        en: [
          '4th house for schooling and foundational learning, 5th for grasp and intelligence, 9th for higher and specialised study',
          'The condition of Mercury and Jupiter, and Saturn’s part in application and persistence — which often matters more than raw aptitude',
          'Vidya yogas where genuinely present, and the subject families the 5th and 9th lords point toward',
          'Dasha periods covering the student’s admission and examination years, and how the transits of Jupiter and Saturn fall across them',
          'Whether the chart favours continuous study or a break-and-return pattern, which changes what advice is realistic',
        ],
        te: [
          'పాఠశాల విద్య, మౌలిక అభ్యాసానికి చతుర్థ భావం; గ్రహణ శక్తి, బుద్ధికి పంచమ భావం; ఉన్నత, ప్రత్యేక విద్యకు నవమ భావం',
          'బుధ, గురు స్థితి; పట్టుదల, కృషిలో శని పాత్ర — తరచుగా సహజ ప్రతిభ కంటే ఇదే ఎక్కువ ప్రభావం చూపుతుంది',
          'నిజంగా ఏర్పడిన విద్యా యోగాలు; పంచమ, నవమాధిపతులు సూచించే విషయ రంగాలు',
          'విద్యార్థి ప్రవేశ, పరీక్షా సంవత్సరాలకు సంబంధించిన దశలు; ఆ కాలంలో గురు, శని గోచారాలు',
          'నిరంతర విద్యకు అనుకూలమా, లేక విరామం తర్వాత తిరిగి చదివే సరళా — ఇది ఇచ్చే సలహాను మారుస్తుంది',
        ],
      },
      who: {
        en: 'Parents deciding a stream for a child, students choosing between courses, or an adult considering a return to study.',
        te: 'పిల్లలకు గ్రూప్ ఎంపిక చేస్తున్న తల్లిదండ్రులు, కోర్సుల మధ్య నిర్ణయించుకుంటున్న విద్యార్థులు, లేదా తిరిగి చదవాలనుకుంటున్న పెద్దలు.',
      },
      receive: {
        en: 'A written note on the subject directions the chart supports, the periods favourable for admission and examination, and what to be realistic about.',
        te: 'జాతకం అనుకూలించే విషయ దిశలు, ప్రవేశ–పరీక్షలకు అనుకూల కాలాలు, వాస్తవికంగా ఏమి ఆశించాలి — వీటిపై లిఖిత సూచన.',
      },
      cta: {
        en: 'Best taken a year before the stream decision, not the week of it.',
        te: 'గ్రూప్ నిర్ణయానికి ఒక వారం ముందు కాదు — ఒక సంవత్సరం ముందు తీసుకోవడం మేలు.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 10 (placed with foundations) ────────────────────────── */
    {
      id: 'health',
      index: 10,
      cluster: 'foundations',
      name: { en: 'Health Astrology', te: 'ఆరోగ్య జ్యోతిషం' },
      definition: {
        en: 'Constitutional indications from the chart and supportive timing guidance — read alongside medical care, never instead of it.',
        te: 'జాతకం నుండి శరీర ప్రకృతికి సంబంధించిన సూచనలు, అనుకూల కాల మార్గదర్శనం — వైద్య సంరక్షణతో పాటు, దానికి బదులుగా కాదు.',
      },
      caution: {
        en: 'We do not diagnose, name a disease, predict its course, or advise stopping or changing any treatment. If you are unwell, see a doctor first. This reading sits alongside medical care and is of no use in place of it.',
        te: 'మేము రోగ నిర్ధారణ చేయం, వ్యాధి పేరు చెప్పం, దాని గతిని ఊహించం, ఏ చికిత్సనూ ఆపమని లేదా మార్చమని సూచించం. అనారోగ్యంగా ఉంటే ముందు వైద్యుడిని కలవండి. ఈ పరిశీలన వైద్య సంరక్షణతో పాటు ఉంటుంది; దానికి బదులుగా ఇది పనికిరాదు.',
      },
      examine: {
        en: [
          'Lagna and its lord for constitution; the 6th house for illness, the 8th for chronicity, the 12th for hospitalisation and recovery',
          'The natural significators, and the bodily systems the traditionally afflicted planets are said to govern',
          'Periods that have historically been demanding on the constitution, so that check-ups and rest can be scheduled rather than deferred',
          'Correlation against your actual medical history — the chart is read against what has happened, not in place of a record',
          'Supportive measures within your control: routine, diet discipline, and the timing of an elective procedure where your doctor has left the date open',
        ],
        te: [
          'శరీర ప్రకృతికి లగ్నం, లగ్నాధిపతి; రోగానికి షష్ఠ భావం, దీర్ఘకాలిక స్థితికి అష్టమ భావం, ఆసుపత్రి–కోలుకోవడానికి ద్వాదశ భావం',
          'సహజ కారకులు; సాంప్రదాయంగా పీడిత గ్రహాలు ఏ శరీర వ్యవస్థలను సూచిస్తాయనే విషయం',
          'గతంలో ఆరోగ్యపరంగా శ్రమతో కూడిన కాలాలు — పరీక్షలు, విశ్రాంతిని వాయిదా వేయకుండా ముందుగానే ప్రణాళిక వేసుకునేలా',
          'మీ నిజమైన వైద్య చరిత్రతో సరిపోలిక — జరిగిన దానితో పోల్చి చదువుతాం, రికార్డుకు బదులుగా కాదు',
          'మీ చేతిలో ఉన్న సహాయక చర్యలు: దినచర్య, ఆహార క్రమశిక్షణ; వైద్యుడు తేదీని మీకే వదిలిన ఐచ్ఛిక శస్త్రచికిత్సకు అనుకూల సమయం',
        ],
      },
      who: {
        en: 'You want the constitutional view alongside medical care, or a supportive timing view for an elective procedure your doctor has already approved.',
        te: 'వైద్య సంరక్షణతో పాటు శరీర ప్రకృతి దృష్టికోణం కావాలి, లేదా వైద్యుడు ఇప్పటికే ఆమోదించిన ఐచ్ఛిక చికిత్సకు అనుకూల సమయం కావాలి.',
      },
      receive: {
        en: 'A written note on constitutional indications and demanding periods, framed as scheduling and lifestyle guidance rather than as findings about your body.',
        te: 'శరీర ప్రకృతి సూచనలు, శ్రమతో కూడిన కాలాలపై లిఖిత సూచన — మీ శరీరం గురించిన నిర్ధారణలుగా కాక, ప్రణాళిక, జీవనశైలి మార్గదర్శనంగా.',
      },
      cta: {
        en: 'Bring your doctor’s advice with you. We work alongside it.',
        te: 'మీ వైద్యుని సలహాను తీసుకురండి. మేము దానితో పాటే పని చేస్తాం.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },


    /* ── 20 ──────────────────────────────────────────────────── */
    {
      id: 'samudrika',
      index: 20,
      cluster: 'foundations',
      name: { en: 'Samudrika Shastra', te: 'సాముద్రిక శాస్త్రం' },
      definition: {
        en: 'A reading of the hand and of physical features against the principles of Samudrika Shastra — a separate traditional method, used alongside the chart rather than in place of it.',
        te: 'సాముద్రిక శాస్త్ర సూత్రాల ఆధారంగా హస్తరేఖలు, శరీర లక్షణాల పరిశీలన — ఇది ఒక ప్రత్యేక సాంప్రదాయ పద్ధతి; జాతకానికి బదులుగా కాక, దానితో పాటు ఉపయోగిస్తారు.',
      },
      caution: {
        en: 'This is not a medical or psychological assessment, and nothing observed here is a finding about your health. Where a reading touches health at all, it defers to a doctor.',
        te: 'ఇది వైద్య లేదా మానసిక పరీక్ష కాదు; ఇక్కడ గమనించినది మీ ఆరోగ్యం గురించిన నిర్ధారణ కాదు. ఆరోగ్యానికి సంబంధించిన విషయం వచ్చినప్పుడు వైద్యుని సలహాకే ప్రాధాన్యం.',
      },
      examine: {
        en: [
          'The principal lines of the hand, their course and their relation to one another',
          'The shape of the hand, the fingers and the mounts, read together rather than as isolated signs',
          'Physical features traditionally treated as significant within Samudrika Shastra',
          'How the reading sits alongside the birth chart, where one is available — the two are compared rather than one being used to override the other',
          'Where the indications are unclear or the traditions disagree, which is said rather than smoothed over',
        ],
        te: [
          'హస్తంలోని ప్రధాన రేఖలు, వాటి గమనం, ఒకదానితో ఒకటి ఉన్న సంబంధం',
          'హస్తం, వేళ్లు, ఉన్నత భాగాల ఆకృతి — వేర్వేరు గుర్తులుగా కాక, కలిపి చూసి',
          'సాముద్రిక శాస్త్రంలో సాంప్రదాయంగా ముఖ్యమైనవిగా చెప్పే శరీర లక్షణాలు',
          'జాతకం అందుబాటులో ఉంటే, ఈ పరిశీలన దానితో ఎలా కలుస్తుంది — ఒకదాన్ని మరొకటి తోసిపుచ్చకుండా, రెండింటినీ పోల్చి',
          'సూచనలు స్పష్టంగా లేని చోట, లేదా సంప్రదాయాల మధ్య భేదం ఉన్న చోట — దాన్ని కప్పిపుచ్చకుండా చెప్పడం',
        ],
      },
      who: {
        en: 'Someone whose birth details are unavailable or uncertain, or who wants this traditional reading taken alongside the chart.',
        te: 'జనన వివరాలు అందుబాటులో లేని లేదా నిశ్చయంగా తెలియని వారికి; లేదా జాతకంతో పాటు ఈ సాంప్రదాయ పరిశీలన కూడా కోరేవారికి.',
      },
      receive: {
        en: 'A written note on what was observed and the guidance that follows from it, with the basis for each observation stated.',
        te: 'గమనించిన అంశాలు, వాటి ఆధారంగా ఇచ్చే మార్గదర్శనం — ప్రతి పరిశీలన వెనుక కారణంతో సహా లిఖిత రూపంలో.',
      },
      cta: {
        en: 'Clear photographs of both palms are needed for a remote reading.',
        te: 'దూరస్థ పరిశీలనకు రెండు అరచేతుల స్పష్టమైన ఫోటోలు అవసరం.',
      },
      mode: 'both',
      timing: { en: '45 minutes', te: '45 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 4 ───────────────────────────────────────────────────── */
    {
      id: 'career',
      index: 4,
      cluster: 'work',
      name: { en: 'Career & Profession', te: 'ఉద్యోగం, వృత్తి' },
      definition: {
        en: 'What kind of work the chart is built for and how the trajectory runs. This is about vocation and employment — running a business is a separate reading.',
        te: 'జాతకం ఏ రకమైన పనికి అనుకూలం, ప్రస్థానం ఎలా సాగుతుంది. ఇది వృత్తి, ఉద్యోగానికి సంబంధించినది — వ్యాపార నిర్వహణ వేరే పరిశీలన.',
      },
      examine: {
        en: [
          '10th house and its lord, the strongest planet in a kendra, and the dasamsa (D-10) read alongside the natal chart',
          '6th house for service and employment conditions, and how it stands against the 10th — this is where job satisfaction usually lives',
          'The occupations the dominant planets signify, narrowed to the ones your actual training and circumstances allow',
          'Dasha periods in which a change is supported, and periods in which staying put is the stronger play',
          'Whether the chart leans toward employment, independent practice, or a hybrid — stated plainly rather than flattered',
        ],
        te: [
          'దశమ భావం, దశమాధిపతి; కేంద్రంలో బలమైన గ్రహం; జన్మ కుండలితో పాటు దశాంశ (D-10)',
          'సేవ, ఉద్యోగ పరిస్థితులకు షష్ఠ భావం; దశమ భావంతో దాని సంబంధం — ఉద్యోగ సంతృప్తి సాధారణంగా ఇక్కడే ఉంటుంది',
          'బలమైన గ్రహాలు సూచించే వృత్తులు; వాటిలో మీ శిక్షణ, పరిస్థితులు అనుమతించే వాటికి పరిమితం చేసి',
          'మార్పుకు అనుకూలమైన దశలు; అలాగే ఉన్న చోటే ఉండటం మేలైన కాలాలు',
          'ఉద్యోగమా, స్వతంత్ర వృత్తా, రెండూ కలిపినదా — పొగడ్తలు లేకుండా స్పష్టంగా',
        ],
      },
      who: {
        en: 'Choosing a field, weighing a job change or a relocation, or in a career that has quietly stopped moving.',
        te: 'రంగం ఎంపిక, ఉద్యోగ మార్పు లేదా బదిలీపై ఆలోచన, లేదా ముందుకు కదలని వృత్తిలో ఉన్నవారు.',
      },
      receive: {
        en: 'A written career reading with the occupations the chart supports, the timing windows for change, and the questions to take back to your own judgement.',
        te: 'జాతకం అనుకూలించే వృత్తులు, మార్పుకు అనుకూల కాలాలు, మీ స్వంత నిర్ణయానికి తీసుకెళ్లవలసిన ప్రశ్నలతో లిఖిత వృత్తి పరిశీలన.',
      },
      cta: {
        en: 'Bring the offer letter and the doubt. We will read both.',
        te: 'ఆఫర్ లెటర్‌ను, సందేహాన్ని రెండింటినీ తీసుకురండి. రెండూ పరిశీలిస్తాం.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 5 ───────────────────────────────────────────────────── */
    {
      id: 'business',
      index: 5,
      cluster: 'work',
      name: { en: 'Business & Financial Standing', te: 'వ్యాపారం, ఆర్థిక స్థితి' },
      definition: {
        en: 'For those running or starting a business — whether the chart supports enterprise at all, when to launch or expand, and whether to take a partner.',
        te: 'వ్యాపారం నడుపుతున్నవారికి, ప్రారంభించబోయేవారికి — జాతకం అసలు స్వతంత్ర వ్యాపారానికి అనుకూలమా, ప్రారంభం–విస్తరణ ఎప్పుడు, భాగస్వామిని తీసుకోవాలా.',
      },
      examine: {
        en: [
          '7th house for partnership and the market you face, 10th for the enterprise itself, 11th for gains actually realised',
          'Whether the chart genuinely supports independent enterprise or performs better in employment — we say so if it is the latter, which is not what most people come to hear',
          'Partnership suitability read across both principals’ charts where a partner is proposed',
          'Dasha and gochara windows for launch, expansion, borrowing and consolidation — including the periods best spent sitting still',
          'Cashflow pattern indications: steady accrual against cyclical, and what that implies for how the venture should be capitalised',
        ],
        te: [
          'భాగస్వామ్యానికి, మీరు ఎదుర్కొనే మార్కెట్‌కు సప్తమ భావం; సంస్థకు దశమ భావం; నిజంగా వచ్చే లాభాలకు లాభ భావం',
          'జాతకం నిజంగా స్వతంత్ర వ్యాపారానికి అనుకూలమా, లేక ఉద్యోగంలోనే మెరుగ్గా ఉంటుందా — రెండోదైతే అదే చెప్తాం; చాలామంది వినాలనుకునేది అది కాదు',
          'భాగస్వామిని ప్రతిపాదించినప్పుడు ఇద్దరి జాతకాలనూ పోల్చి భాగస్వామ్య అనుకూలత',
          'ప్రారంభం, విస్తరణ, రుణం, స్థిరీకరణకు దశ–గోచార కాలాలు — కదలకుండా ఉండటమే మేలైన కాలాలతో సహా',
          'నగదు ప్రవాహ సరళి: స్థిరమైనదా, చక్రీయమైనదా; దాన్ని బట్టి పెట్టుబడి ఎలా ఉండాలి',
        ],
      },
      who: {
        en: 'Founders, family-business successors, and anyone deciding between a salary and a venture.',
        te: 'వ్యాపార స్థాపకులు, కుటుంబ వ్యాపార వారసులు, జీతం–వ్యాపారం మధ్య నిర్ణయించుకుంటున్నవారు.',
      },
      receive: {
        en: 'A written reading covering enterprise suitability, partnership assessment, and a dated window chart for launch, expansion and consolidation.',
        te: 'వ్యాపార అనుకూలత, భాగస్వామ్య అంచనా, ప్రారంభం–విస్తరణ–స్థిరీకరణకు తేదీలతో కూడిన కాల పట్టిక — అన్నీ లిఖిత రూపంలో.',
      },
      cta: {
        en: 'Read the chart before you register the company.',
        te: 'కంపెనీ నమోదుకు ముందే జాతకం చూడండి.',
      },
      mode: 'both',
      timing: { en: '75 minutes', te: '75 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 6 ───────────────────────────────────────────────────── */
    {
      id: 'wealth',
      index: 6,
      cluster: 'work',
      name: { en: 'Income, Property & Wealth Prospects', te: 'ఆదాయం, ఆస్తి, ధన యోగాలు' },
      definition: {
        en: 'The accumulation side rather than the earning side — how wealth builds, holds and disperses across a lifetime, which is a different question from what you do for a living.',
        te: 'సంపాదన కాదు, నిల్వ గురించిన పరిశీలన — జీవితకాలంలో సంపద ఎలా పోగవుతుంది, నిలుస్తుంది, చెదిరిపోతుంది. మీరు జీవనోపాధికి ఏమి చేస్తారన్నది వేరే ప్రశ్న.',
      },
      examine: {
        en: [
          '2nd house for accumulated wealth and family resources, 11th for gains, 12th for outflow and loss — read as one system rather than three separate verdicts',
          'The dhana yogas actually formed, the honest weight of each, and the combinations that disperse rather than gather',
          'The relationship between the 2nd and 11th lords, and the periods in which their dashas run',
          'Whether the chart supports holding assets or turning them over, and which form of asset it favours',
          'Outflow patterns — where money reliably leaves — so that it can be planned around rather than discovered each year',
        ],
        te: [
          'సేకరించిన ధనానికి, కుటుంబ వనరులకు ద్వితీయ భావం; లాభాలకు లాభ భావం; వ్యయం, నష్టానికి ద్వాదశ భావం — మూడు వేర్వేరు తీర్పులుగా కాక ఒకే వ్యవస్థగా',
          'నిజంగా ఏర్పడిన ధన యోగాలు, ప్రతి దాని వాస్తవ బలం; పోగుచేయకుండా చెదరగొట్టే కలయికలు',
          'ద్వితీయ, లాభాధిపతుల మధ్య సంబంధం; వాటి దశలు నడిచే కాలాలు',
          'ఆస్తులను నిలుపుకోవడానికి అనుకూలమా, తిరిగి అమ్మి కొనడానికా; ఏ రకమైన ఆస్తికి అనుకూలం',
          'వ్యయ సరళి — డబ్బు స్థిరంగా ఎక్కడ ఖర్చవుతుంది — ప్రతి ఏటా ఆశ్చర్యపోకుండా ముందే ప్రణాళిక వేసుకునేలా',
        ],
      },
      who: {
        en: 'You earn adequately but wealth does not accumulate, or you are planning long-horizon savings, inheritance or asset allocation.',
        te: 'సంపాదన సరిపోతోంది కానీ సంపద నిలవడం లేదు, లేదా దీర్ఘకాలిక పొదుపు, వారసత్వం, ఆస్తి పంపిణీ ప్రణాళిక వేస్తున్నారు.',
      },
      receive: {
        en: 'A written wealth-pattern reading with accumulation and outflow periods mapped across the coming dashas.',
        te: 'రాబోయే దశల్లో సంపద పోగయ్యే, ఖర్చయ్యే కాలాలను గుర్తించిన లిఖిత ధన సరళి పరిశీలన.',
      },
      cta: {
        en: 'For where the money goes, not for what you do to earn it.',
        te: 'ఎలా సంపాదిస్తారన్నది కాదు — డబ్బు ఎక్కడికి పోతుందన్నదానికి.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 12 ──────────────────────────────────────────────────── */
    {
      id: 'property',
      index: 12,
      cluster: 'work',
      name: { en: 'House, Land & Vehicle Yogas', te: 'గృహ, భూమి, వాహన యోగాలు' },
      definition: {
        en: 'The specific question of acquiring immovable property or a vehicle — whether, what kind, and when. Narrower than the wealth reading, which is about accumulation in general.',
        te: 'స్థిరాస్తి లేదా వాహనం కొనుగోలుపై నిర్దిష్ట ప్రశ్న — కొనాలా, ఏది, ఎప్పుడు. సాధారణ సంపద పరిశీలన కంటే ఇది పరిమితమైనది.',
      },
      examine: {
        en: [
          '4th house and its lord for property, land and vehicles; Mars for land specifically and Venus for vehicles',
          'Whether the chart favours built property, open land, or neither at this stage of life',
          'Dasha and transit windows for purchase, registration and possession — three dates that are frequently not the same',
          'Loan and liability indications through the 6th and 8th where the purchase is to be financed',
          'Coordination with our Vastu desk where a specific plot or property has already been shortlisted',
        ],
        te: [
          'ఆస్తి, భూమి, వాహనాలకు చతుర్థ భావం, చతుర్థాధిపతి; భూమికి ప్రత్యేకంగా కుజుడు, వాహనాలకు శుక్రుడు',
          'ఈ జీవిత దశలో నిర్మిత ఆస్తికి అనుకూలమా, ఖాళీ స్థలానికా, లేక రెండింటికీ కాదా',
          'కొనుగోలు, రిజిస్ట్రేషన్, స్వాధీనానికి దశ–గోచార కాలాలు — ఈ మూడు తేదీలు తరచుగా ఒకటి కావు',
          'రుణంతో కొనుగోలు చేస్తుంటే షష్ఠ, అష్టమ భావాల ద్వారా రుణ, బాధ్యతల సూచనలు',
          'నిర్దిష్ట స్థలం లేదా ఆస్తి ఇప్పటికే ఎంపికలో ఉంటే మా వాస్తు విభాగంతో సమన్వయం',
        ],
      },
      who: {
        en: 'Buying a first home, a plot or a vehicle, and wanting to know whether this is the year for it.',
        te: 'మొదటి ఇల్లు, స్థలం లేదా వాహనం కొంటున్నారు; ఇది సరైన సంవత్సరమా అని తెలుసుకోవాలి.',
      },
      receive: {
        en: 'A written note on the property indications, the favourable purchase and registration windows, and what to verify before committing.',
        te: 'ఆస్తి సూచనలు, కొనుగోలు–రిజిస్ట్రేషన్‌కు అనుకూల కాలాలు, ఖరారు చేసేముందు పరిశీలించవలసినవి — వీటిపై లిఖిత సూచన.',
      },
      cta: {
        en: 'We will tell you the year. Our Vastu desk will tell you the plot.',
        te: 'సంవత్సరం మేము చెప్తాం. స్థలం ఏదో మా వాస్తు విభాగం చెప్తుంది.',
      },
      mode: 'both',
      timing: { en: '45 minutes', te: '45 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 11 ──────────────────────────────────────────────────── */
    {
      id: 'foreign',
      index: 11,
      cluster: 'work',
      name: { en: 'Foreign Travel & Settlement Yogas', te: 'విదేశ ప్రయాణం, స్థిర నివాసం' },
      definition: {
        en: 'Whether the chart supports living or working abroad, in what form, and during which periods.',
        te: 'విదేశాల్లో నివాసం లేదా ఉద్యోగానికి జాతకం అనుకూలమా, ఏ రూపంలో, ఏ కాలాల్లో.',
      },
      examine: {
        en: [
          '12th house for foreign residence, 9th for long journeys, 7th for living away from the place of birth',
          'Whether the indication is for travel, deputation, study abroad, or permanent settlement — these read differently and are routinely conflated',
          'Dasha and gochara windows in which applications, visas and relocations run more smoothly',
          'The involvement of Rahu and Saturn, which usually distinguishes a difficult route from a straightforward one',
          'Whether the chart supports a return, and when — the part almost nobody thinks to ask about',
        ],
        te: [
          'విదేశ నివాసానికి ద్వాదశ భావం, దీర్ఘ ప్రయాణాలకు నవమ భావం, జన్మస్థలం వదిలి ఉండటానికి సప్తమ భావం',
          'సూచన ప్రయాణానికా, డిప్యుటేషన్‌కా, విదేశీ విద్యకా, శాశ్వత నివాసానికా — ఇవి వేర్వేరుగా చదవాలి; తరచుగా వీటిని కలిపేస్తారు',
          'దరఖాస్తులు, వీసాలు, స్థానచలనం సాఫీగా సాగే దశ–గోచార కాలాలు',
          'రాహు, శని ప్రమేయం — సాధారణంగా కష్టమైన మార్గాన్ని సులభమైన దాని నుండి వేరు చేసేది ఇదే',
          'తిరిగి రావడానికి జాతకం అనుకూలమా, ఎప్పుడు — దాదాపు ఎవరూ అడగని విషయం ఇది',
        ],
      },
      who: {
        en: 'Students applying abroad, professionals weighing a deputation, families considering permanent migration, or those deciding whether to come back.',
        te: 'విదేశాలకు దరఖాస్తు చేసే విద్యార్థులు, డిప్యుటేషన్‌పై ఆలోచిస్తున్న ఉద్యోగులు, శాశ్వత వలసను పరిశీలిస్తున్న కుటుంబాలు, లేదా తిరిగి రావాలా అని ఆలోచిస్తున్నవారు.',
      },
      receive: {
        en: 'A written reading of the settlement indications with the favourable application and relocation windows dated.',
        te: 'నివాస సూచనలు, దరఖాస్తు–స్థానచలనానికి అనుకూల కాలాలను తేదీలతో గుర్తించిన లిఖిత పరిశీలన.',
      },
      cta: {
        en: 'Ask about the return as well as the departure.',
        te: 'వెళ్లడం గురించే కాదు — తిరిగి రావడం గురించి కూడా అడగండి.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 7 ───────────────────────────────────────────────────── */
    {
      id: 'marriage',
      index: 7,
      cluster: 'family',
      name: { en: 'Marriage & Married Life', te: 'వివాహం, దాంపత్య జీవితం' },
      definition: {
        en: 'Read from your own single chart — the timing, the disposition indicated in a partner, and the quality of married life. It is not a comparison between two charts; that is Guna Milan.',
        te: 'మీ ఒక్క జాతకం ఆధారంగా — వివాహ కాలం, భాగస్వామిలో సూచించబడిన స్వభావం, దాంపత్య జీవిత స్థితి. ఇది రెండు జాతకాల పోలిక కాదు; అది గుణ మిలన్.',
      },
      examine: {
        en: [
          '7th house and its lord, with Venus for men and Jupiter for women, and the navamsa (D-9) read alongside',
          'Timing windows from the dasha sequence and from the transits of Jupiter and Saturn across the 7th',
          'What the chart indicates about a partner’s disposition and background — described as tendencies, never as certainties about a person not yet met',
          'Mangala dosha where present, its actual strength, and the standard cancellations that are so often left out of the conversation',
          'The factors bearing on married life after the wedding, which is the part most readings skip entirely',
        ],
        te: [
          'సప్తమ భావం, సప్తమాధిపతి; పురుషులకు శుక్రుడు, స్త్రీలకు గురువు; వాటితో పాటు నవాంశ (D-9)',
          'దశా క్రమం నుండి, సప్తమ భావంపై గురు–శని గోచారాల నుండి వచ్చే కాల సూచనలు',
          'భాగస్వామి స్వభావం, నేపథ్యం గురించి జాతకం సూచించేవి — ఇంకా కలవని వ్యక్తి గురించి నిశ్చయాలుగా కాక, ధోరణులుగా మాత్రమే',
          'కుజ దోషం ఉంటే దాని వాస్తవ బలం; తరచుగా చెప్పకుండా వదిలేసే సాధారణ పరిహార–రద్దు నియమాలు',
          'పెళ్లి తర్వాతి దాంపత్య జీవితాన్ని ప్రభావితం చేసే అంశాలు — చాలా పరిశీలనలు పూర్తిగా వదిలేసే భాగం ఇదే',
        ],
      },
      who: {
        en: 'You are unmarried and want the timing and the picture, or married and want to understand the dynamic from your own chart.',
        te: 'పెళ్లి కానివారు — కాలం, స్థితి తెలుసుకోవాలి; లేదా వివాహితులు — మీ స్వంత జాతకం నుండి దాంపత్య స్థితిని అర్థం చేసుకోవాలి.',
      },
      receive: {
        en: 'A written reading with the timing windows, the partner indications, and a straightforward note on the dosha position if one exists.',
        te: 'కాల సూచనలు, భాగస్వామి సంబంధిత సూచనలు, దోషం ఉంటే దాని స్థితిపై స్పష్టమైన వివరణతో కూడిన లిఖిత పరిశీలన.',
      },
      cta: {
        en: 'One chart — your side of the question.',
        te: 'ఒకే జాతకం — ప్రశ్నలో మీ వైపు.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 13 ──────────────────────────────────────────────────── */
    {
      id: 'gunamilan',
      index: 13,
      cluster: 'family',
      name: { en: 'Marriage Compatibility (Guna Milan)', te: 'వివాహ అనుకూలత (గుణ మిలన్)' },
      definition: {
        en: 'A comparison of two charts between prospective partners. Distinct from Marriage & Married Life, which reads one person’s chart on its own.',
        te: 'ప్రతిపాదిత జంట ఇద్దరి జాతకాల పోలిక. ఒక్కరి జాతకాన్ని మాత్రమే చదివే వివాహ–దాంపత్య పరిశీలన కంటే ఇది వేరు.',
      },
      examine: {
        en: [
          'Ashtakoota guna milan across all eight kutas, with the score stated and — more usefully — explained',
          'Mangala dosha in both charts, its real strength, and whether it cancels, checked in both directions rather than only in the bride’s chart',
          'The 7th house and 7th lord of each chart read against the other, and both navamsas compared',
          'Temperament, longevity and progeny indications compared, none of which the koota score by itself captures',
          'Dasha compatibility over the coming years — two charts can score well and still run through a difficult period together',
        ],
        te: [
          'అష్టకూట గుణ మిలన్ — ఎనిమిది కూటాలు; మార్కులు చెప్పడమే కాక, వాటి అర్థాన్ని వివరించి',
          'ఇద్దరి జాతకాల్లోనూ కుజ దోషం, దాని వాస్తవ బలం, రద్దు అవుతుందా — వధువు జాతకంలో మాత్రమే కాక రెండు వైపులా పరిశీలించి',
          'ఇద్దరి సప్తమ భావం, సప్తమాధిపతిని ఒకరితో ఒకరు పోల్చి; రెండు నవాంశలనూ సరిపోల్చి',
          'స్వభావం, ఆయుష్షు, సంతాన సూచనల పోలిక — వీటిలో ఏదీ కేవలం కూట మార్కులతో తెలియదు',
          'రాబోయే సంవత్సరాల దశా అనుకూలత — మంచి మార్కులు వచ్చిన రెండు జాతకాలు కూడా కలిసి కష్ట కాలం గడపవచ్చు',
        ],
      },
      who: {
        en: 'Families evaluating a proposal, or a couple who have already chosen each other and want an honest reading before committing.',
        te: 'సంబంధాన్ని పరిశీలిస్తున్న కుటుంబాలు, లేదా ఒకరినొకరు ఎంచుకున్న జంట — నిర్ణయానికి ముందు నిజాయితీ గల అభిప్రాయం కావాలి.',
      },
      receive: {
        en: 'A compatibility sheet with the koota scores, the dosha position in both charts, one reconciled opinion, and the reasoning behind it.',
        te: 'కూట మార్కులు, ఇద్దరి జాతకాల్లోనూ దోష స్థితి, ఒకే సమన్వయ అభిప్రాయం, దాని వెనుక కారణాలతో కూడిన అనుకూలత పత్రం.',
      },
      cta: {
        en: 'One reconciled opinion, not two separate readings.',
        te: 'రెండు వేర్వేరు పరిశీలనలు కాదు — ఒకే సమన్వయ అభిప్రాయం.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 8 ───────────────────────────────────────────────────── */
    {
      id: 'progeny',
      index: 8,
      cluster: 'family',
      name: { en: 'Children & Progeny Matters', te: 'సంతాన విషయాలు' },
      definition: {
        en: 'Indications concerning children — the periods involved, the chart’s disposition, and a reading of a child’s own chart where that is what is wanted.',
        te: 'సంతానానికి సంబంధించిన సూచనలు — సంబంధిత కాలాలు, జాతక స్థితి; కోరితే పిల్లల సొంత జాతక పరిశీలన.',
      },
      caution: {
        en: 'This is not a fertility assessment and is no substitute for medical advice. Where treatment is in progress, we read alongside it and defer to it.',
        te: 'ఇది సంతాన సామర్థ్య పరీక్ష కాదు, వైద్య సలహాకు ప్రత్యామ్నాయం కాదు. చికిత్స జరుగుతున్నప్పుడు దానికి లోబడి, దానితో పాటే చదువుతాం.',
      },
      examine: {
        en: [
          '5th house and its lord, Jupiter as the natural significator, and the saptamsa (D-7) where the question warrants it',
          'The 5th counted from the Moon and from Jupiter as well, cross-checked, rather than one house read in isolation',
          'Dasha and transit periods relevant to the question, described as periods of relative support rather than as guarantees',
          'Where medical guidance is already under way, how the chart’s timing sits alongside it — as an adjunct only',
          'For an existing child: temperament, aptitude, and the years likely to need more support at school',
        ],
        te: [
          'పంచమ భావం, పంచమాధిపతి; సహజ కారకుడిగా గురువు; ప్రశ్న అవసరమైతే సప్తాంశ (D-7)',
          'ఒకే భావాన్ని విడిగా కాక, చంద్రుని నుండి, గురువు నుండి కూడా పంచమ భావాన్ని లెక్కించి సరిపోల్చి',
          'ప్రశ్నకు సంబంధించిన దశ, గోచార కాలాలు — హామీలుగా కాక, సాపేక్షంగా అనుకూల కాలాలుగా',
          'వైద్య మార్గదర్శనం ఇప్పటికే జరుగుతుంటే, జాతక కాలం దానితో ఎలా కలుస్తుంది — కేవలం అదనపు దృష్టికోణంగా',
          'ఇప్పటికే ఉన్న పిల్లలకు: స్వభావం, అభిరుచి, పాఠశాలలో ఎక్కువ సహకారం అవసరమయ్యే సంవత్సరాలు',
        ],
      },
      who: {
        en: 'Couples planning a family, parents wanting a child’s chart read, or those under medical treatment who want the timing view alongside it.',
        te: 'కుటుంబ ప్రణాళిక వేసుకుంటున్న జంటలు, పిల్లల జాతకం చూపించాలనుకునే తల్లిదండ్రులు, లేదా చికిత్సలో ఉండి దానితో పాటు కాల దృష్టికోణం కోరేవారు.',
      },
      receive: {
        en: 'A written reading of the relevant periods and indications in careful language, plus a child’s chart reading where requested.',
        te: 'సంబంధిత కాలాలు, సూచనలపై జాగ్రత్తగా రాసిన లిఖిత పరిశీలన; కోరితే పిల్లల జాతక పరిశీలనతో సహా.',
      },
      cta: {
        en: 'We read the chart. Your doctor reads the body.',
        te: 'జాతకాన్ని మేము చూస్తాం. శరీరాన్ని మీ వైద్యుడు చూస్తారు.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 9 ───────────────────────────────────────────────────── */
    {
      id: 'family',
      index: 9,
      cluster: 'family',
      name: { en: 'Family & Relationships', te: 'కుటుంబం, సంబంధాలు' },
      definition: {
        en: 'The wider relational field — parents, siblings, in-laws — and the recurring shape that disputes or dependence take within a household.',
        te: 'విస్తృత కుటుంబ సంబంధాలు — తల్లిదండ్రులు, తోబుట్టువులు, అత్తమామలు; ఇంట్లో వివాదాలు లేదా ఆధారపడటం పునరావృతమయ్యే తీరు.',
      },
      examine: {
        en: [
          '4th house for the mother and the domestic base, 9th for the father, 3rd for siblings, 11th for elder siblings and wider networks',
          'Where the chart indicates support and where it indicates friction — including the friction you are yourself contributing to',
          'Property and inheritance dynamics within the family where the 4th and 8th are involved',
          'Periods in which family matters tend to come to a head, and periods better suited to attempting a resolution',
          'Where another family member’s chart needs to be read alongside for the picture to make any sense',
        ],
        te: [
          'తల్లికి, గృహ మూలానికి చతుర్థ భావం; తండ్రికి నవమ భావం; తోబుట్టువులకు తృతీయ భావం; పెద్ద తోబుట్టువులకు, విస్తృత సంబంధాలకు లాభ భావం',
          'జాతకం ఎక్కడ సహకారాన్ని, ఎక్కడ ఘర్షణను సూచిస్తుంది — మీరే కారణమవుతున్న ఘర్షణతో సహా',
          'చతుర్థ, అష్టమ భావాల ప్రమేయం ఉన్న చోట కుటుంబంలో ఆస్తి, వారసత్వ పరిస్థితులు',
          'కుటుంబ విషయాలు తీవ్రమయ్యే కాలాలు; పరిష్కారానికి ప్రయత్నించడానికి అనుకూలమైన కాలాలు',
          'పూర్తి చిత్రం తెలియాలంటే మరో కుటుంబ సభ్యుని జాతకం కూడా చూడవలసిన సందర్భాలు',
        ],
      },
      who: {
        en: 'A long-running family dispute, property division among siblings, care of ageing parents, or a household that simply will not settle.',
        te: 'ఏళ్లుగా కొనసాగుతున్న కుటుంబ వివాదం, తోబుట్టువుల మధ్య ఆస్తి పంపకం, వృద్ధ తల్లిదండ్రుల సంరక్షణ, లేదా కుదుటపడని ఇల్లు.',
      },
      receive: {
        en: 'A written reading of the relational field with the relevant periods marked, and a plain statement of what the chart does not explain.',
        te: 'సంబంధిత కాలాలు గుర్తించిన లిఖిత కుటుంబ సంబంధ పరిశీలన; జాతకం వివరించలేని విషయాలను స్పష్టంగా చెప్తూ.',
      },
      cta: {
        en: 'Some family questions need two charts. We will tell you if yours does.',
        te: 'కొన్ని కుటుంబ ప్రశ్నలకు రెండు జాతకాలు కావాలి. మీ ప్రశ్నకు అవసరమైతే చెప్తాం.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 14 ──────────────────────────────────────────────────── */
    {
      id: 'dasha',
      index: 14,
      cluster: 'timing',
      name: { en: 'Dasha–Bhukti & Gochara Analysis', te: 'దశ–భుక్తి, గోచార పరిశీలన' },
      definition: {
        en: 'The planetary-period method itself, taken as a standalone consultation — the machinery by which your chart unfolds in time.',
        te: 'గ్రహ దశా విధానాన్నే ప్రత్యేక సంప్రదింపుగా — మీ జాతకం కాలక్రమంలో ఎలా విడివడుతుందో ఆ యంత్రాంగం.',
      },
      examine: {
        en: [
          'The full Vimshottari sequence — mahadasha, bhukti and antara — with the balance at birth verified rather than assumed from software',
          'The functional nature of each dasha lord in your particular chart; the same planet is not the same thing for two people',
          'Gochara of Jupiter and Saturn against the natal positions, and the Sade Sati position where it applies',
          'Where dasha and transit agree and where they contradict — the contradictions are where most readings quietly go wrong',
          'Ashtakavarga strength for the houses in question, as an independent second opinion on the same period',
        ],
        te: [
          'పూర్తి వింశోత్తరి క్రమం — మహాదశ, భుక్తి, అంతర్దశ; జనన సమయంలోని శేష దశను సాఫ్ట్‌వేర్ ఇచ్చినట్టే తీసుకోకుండా ధ్రువీకరించి',
          'మీ నిర్దిష్ట జాతకంలో ప్రతి దశాధిపతి ఎలా పనిచేస్తాడు — ఒకే గ్రహం ఇద్దరికీ ఒకేలా ఉండదు',
          'జన్మ స్థానాలతో పోల్చి గురు, శని గోచారం; వర్తిస్తే సాడేసాతి స్థితి',
          'దశ, గోచారం ఎక్కడ ఏకీభవిస్తాయి, ఎక్కడ విభేదిస్తాయి — చాలా పరిశీలనలు తప్పు దారి పట్టేది ఈ విభేదాల దగ్గరే',
          'సంబంధిత భావాలకు అష్టకవర్గ బలం — అదే కాలంపై స్వతంత్రమైన రెండో అభిప్రాయంగా',
        ],
      },
      who: {
        en: 'You already know your chart and want to understand the machinery — often taken by students of Jyotisha, and by clients who want the reasoning rather than only the conclusion.',
        te: 'మీ జాతకం మీకు తెలుసు, ఇప్పుడు దాని యంత్రాంగాన్ని అర్థం చేసుకోవాలి — జ్యోతిష విద్యార్థులు, తీర్పు కాక కారణం కావాలనుకునే ఖాతాదారులు దీన్ని తీసుకుంటారు.',
      },
      receive: {
        en: 'A dasha table for the coming fifteen years with each period characterised, and the transit overlay against it.',
        te: 'రాబోయే పదిహేనేళ్ల దశా పట్టిక — ప్రతి కాలం స్వభావంతో సహా; దానిపై గోచార పొరతో.',
      },
      cta: {
        en: 'For the method itself, not only the verdict.',
        te: 'తీర్పు కోసం మాత్రమే కాదు — పద్ధతి కోసం.',
      },
      mode: 'both',
      timing: { en: '75 minutes', te: '75 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 15 ──────────────────────────────────────────────────── */
    {
      id: 'timing',
      index: 15,
      cluster: 'timing',
      name: { en: 'Life Event Timing', te: 'జీవిత సంఘటనల కాల నిర్ణయం' },
      definition: {
        en: 'The applied question — when a particular thing is more likely, and what supports or delays it. The previous service is the method; this is its application to your specific question.',
        te: 'ఆచరణాత్మక ప్రశ్న — ఒక నిర్దిష్ట విషయం ఎప్పుడు జరిగే అవకాశం ఎక్కువ, దానికి ఏది సహకరిస్తుంది, ఏది ఆలస్యం చేస్తుంది. అంతకుముందు సేవ పద్ధతి; ఇది మీ ప్రశ్నకు దాని అనువర్తనం.',
      },
      examine: {
        en: [
          'The houses that actually bear on your question, and the dasha periods of their lords',
          'Dasha, gochara and ashtakavarga read together — a window is offered only where at least two of the three agree',
          'The transits of the slow planets across the relevant houses, which set the outer shape of any window',
          'Where the chart does not support a clear window at all, which we will tell you rather than manufacture one to fill the sitting',
          'The practical constraints of your own situation, since a favourable period you are in no position to act within is of no use to you',
        ],
        te: [
          'మీ ప్రశ్నకు నిజంగా సంబంధించిన భావాలు; వాటి అధిపతుల దశా కాలాలు',
          'దశ, గోచారం, అష్టకవర్గ — మూడింటిలో కనీసం రెండు ఏకీభవించిన చోటే కాల సూచన ఇస్తాం',
          'సంబంధిత భావాలపై మంద గ్రహాల గోచారం — ఏ కాలానికైనా బాహ్య రూపాన్ని నిర్ణయించేది ఇదే',
          'జాతకం స్పష్టమైన కాలాన్ని సూచించని చోట — సమావేశాన్ని నింపడానికి ఏదో ఒకటి సృష్టించకుండా, అదే చెప్తాం',
          'మీ వాస్తవ పరిస్థితిలోని ఆచరణ పరిమితులు — మీరు చర్య తీసుకోలేని అనుకూల కాలం వల్ల ప్రయోజనం లేదు',
        ],
      },
      who: {
        en: 'You have one or two specific questions with a “when” in them — a marriage, a purchase, a move, a change of work.',
        te: 'మీ దగ్గర “ఎప్పుడు” అనే ప్రశ్న ఉన్న ఒకటి రెండు నిర్దిష్ట విషయాలు ఉన్నాయి — వివాహం, కొనుగోలు, స్థానచలనం, ఉద్యోగ మార్పు.',
      },
      receive: {
        en: 'Dated windows for each question with the confidence in each stated, and a plain note wherever the chart is inconclusive.',
        te: 'ప్రతి ప్రశ్నకూ తేదీలతో కాల సూచనలు, ప్రతి దానిపై ఎంత నిశ్చయత ఉందో చెబుతూ; జాతకం స్పష్టత ఇవ్వని చోట స్పష్టమైన వివరణతో.',
      },
      cta: {
        en: 'Bring two or three specific questions rather than twenty.',
        te: 'ఇరవై కాదు — రెండు మూడు నిర్దిష్ట ప్రశ్నలు తీసుకురండి.',
      },
      mode: 'both',
      timing: { en: '60 minutes', te: '60 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 16 ──────────────────────────────────────────────────── */
    {
      id: 'prashna',
      index: 16,
      cluster: 'timing',
      name: { en: 'Prashna Jyotisham (Horary)', te: 'ప్రశ్న జ్యోతిషం' },
      definition: {
        en: 'A chart cast for the moment the question is asked, answering that one question. No birth details are needed — which is what makes it useful when the birth time is unknown or the matter is urgent.',
        te: 'ప్రశ్న అడిగిన క్షణానికి కుండలి వేసి, ఆ ఒక్క ప్రశ్నకు సమాధానం. జనన వివరాలు అవసరం లేదు — జనన సమయం తెలియనప్పుడు, లేదా విషయం అత్యవసరమైనప్పుడు ఇది ఉపయోగపడేది అందుకే.',
      },
      examine: {
        en: [
          'The prashna lagna for the moment of asking, and the significators for the specific matter raised',
          'The significators of the querent and of the thing asked about, and the aspects forming between them',
          'Whether the question is fit to be answered at all — an ill-formed or insincere question is declined rather than guessed at',
          'The Moon’s position and the arudha, as corroboration of the primary reading rather than decoration',
          'The time frame the answer applies within, which in prashna is characteristically short — weeks and months, not decades',
        ],
        te: [
          'ప్రశ్న అడిగిన క్షణపు ప్రశ్న లగ్నం; అడిగిన నిర్దిష్ట విషయానికి కారకులు',
          'ప్రశ్నించేవారి, ప్రశ్నించిన విషయపు కారకులు; వాటి మధ్య ఏర్పడే దృష్టులు',
          'ఈ ప్రశ్నకు అసలు సమాధానం చెప్పదగినదా — సరిగా ఏర్పడని లేదా చిత్తశుద్ధి లేని ప్రశ్నను ఊహించి చెప్పకుండా తిరస్కరిస్తాం',
          'చంద్ర స్థితి, ఆరూఢం — అలంకారంగా కాక, ప్రధాన పరిశీలనకు ధ్రువీకరణగా',
          'సమాధానం వర్తించే కాల పరిధి — ప్రశ్నలో అది సాధారణంగా తక్కువ; వారాలు, నెలలు — దశాబ్దాలు కాదు',
        ],
      },
      who: {
        en: 'The birth time is unknown or unreliable; a decision is pending now; or a lost matter, a delayed outcome or a pending result needs one clear answer.',
        te: 'జనన సమయం తెలియదు లేదా నమ్మదగినది కాదు; ఇప్పుడే ఒక నిర్ణయం తీసుకోవాలి; లేదా పోయిన వస్తువు, ఆలస్యమైన పని, పెండింగ్ ఫలితం — వీటిపై ఒక స్పష్టమైన సమాధానం కావాలి.',
      },
      receive: {
        en: 'A direct answer with the reasoning behind it and the time frame within which it applies — given in the sitting and confirmed in writing.',
        te: 'కారణంతో సహా నేరుగా సమాధానం, అది వర్తించే కాల పరిధితో — సమావేశంలోనే చెప్పి, లిఖితపూర్వకంగా నిర్ధారిస్తాం.',
      },
      cta: {
        en: 'No birth details needed. Bring one clear question.',
        te: 'జనన వివరాలు అక్కర్లేదు. ఒక స్పష్టమైన ప్రశ్న తీసుకురండి.',
      },
      mode: 'both',
      timing: { en: '30 minutes', te: '30 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 17 ──────────────────────────────────────────────────── */
    {
      id: 'muhurtham',
      index: 17,
      cluster: 'ceremonial',
      name: { en: 'Muhurtham (Auspicious Timing)', te: 'ముహూర్త నిర్ణయం' },
      definition: {
        en: 'Selecting the best time to begin something. This runs in the opposite direction to Prashna: there a question has already been asked, here an action has yet to start — and this one needs the birth charts of the people involved.',
        te: 'ఏదైనా ప్రారంభించడానికి ఉత్తమ సమయ ఎంపిక. ఇది ప్రశ్నకు వ్యతిరేక దిశ: అక్కడ ప్రశ్న ఇప్పటికే అడిగారు, ఇక్కడ పని ఇంకా ప్రారంభం కాలేదు — దీనికి సంబంధిత వ్యక్తుల జాతకాలు కావాలి.',
      },
      examine: {
        en: [
          'The panchanga for each candidate date — tithi, vara, nakshatra, yoga and karana — with the standard exclusions applied',
          'The lagna rising at the proposed moment, and the placement of the planets governing that specific act',
          'The charts and running dashas of the principals — a date that is generally auspicious can still be the wrong date for a particular person',
          'The requirements of the act itself, which differ: marriage, griha pravesh, registration, foundation, launch and elective surgery each have their own rules',
          'The practical constraints — hall availability, travel, office hours, a doctor’s schedule — because an unusable muhurtham is not a muhurtham',
        ],
        te: [
          'ప్రతి ప్రతిపాదిత తేదీకి పంచాంగం — తిథి, వారం, నక్షత్రం, యోగం, కరణం; సాధారణ వర్జ్యాలను వర్తింపజేసి',
          'ప్రతిపాదిత క్షణంలో ఉదయించే లగ్నం; ఆ నిర్దిష్ట కార్యాన్ని పాలించే గ్రహాల స్థితి',
          'సంబంధిత వ్యక్తుల జాతకాలు, నడుస్తున్న దశలు — సాధారణంగా శుభమైన తేదీ ఒక వ్యక్తికి తప్పు తేదీ కావచ్చు',
          'కార్యాన్ని బట్టి మారే నియమాలు: వివాహం, గృహ ప్రవేశం, రిజిస్ట్రేషన్, పునాది, ప్రారంభోత్సవం, ఐచ్ఛిక శస్త్రచికిత్స — ప్రతి దానికీ వేర్వేరు నియమాలు',
          'ఆచరణ పరిమితులు — కల్యాణ మండపం లభ్యత, ప్రయాణం, కార్యాలయ వేళలు, వైద్యుని సమయం — ఎందుకంటే ఆచరించలేని ముహూర్తం ముహూర్తమే కాదు',
        ],
      },
      who: {
        en: 'Fixing a wedding, griha pravesh, registration, business launch, foundation, or an elective procedure whose date your doctor has left to you.',
        te: 'వివాహం, గృహ ప్రవేశం, రిజిస్ట్రేషన్, వ్యాపార ప్రారంభం, పునాది, లేదా వైద్యుడు తేదీని మీకే వదిలిన ఐచ్ఛిక చికిత్స — వీటికి సమయం నిర్ణయించాలి.',
      },
      receive: {
        en: 'A dated list giving the primary muhurtham and two alternates, each with its exact window and the reason it was chosen.',
        te: 'ప్రధాన ముహూర్తం, రెండు ప్రత్యామ్నాయాలతో కూడిన తేదీల పత్రం — ప్రతి దానికీ ఖచ్చితమైన సమయం, ఎంపిక చేసిన కారణంతో.',
      },
      cta: {
        en: 'Ask at least six weeks ahead — good dates are not evenly distributed.',
        te: 'కనీసం ఆరు వారాల ముందు అడగండి — మంచి తేదీలు అన్ని నెలల్లోనూ సమానంగా ఉండవు.',
      },
      mode: 'both',
      timing: { en: '45 minutes', te: '45 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 18 ──────────────────────────────────────────────────── */
    {
      id: 'naming',
      index: 18,
      cluster: 'ceremonial',
      name: { en: 'Naming Guidance (Nakshatra & Pada)', te: 'నక్షత్ర, పాద ఆధారిత నామకరణం' },
      definition: {
        en: 'Determining the syllable a name should begin with from the birth nakshatra and pada, and evaluating the family’s candidate names against the chart.',
        te: 'జనన నక్షత్రం, పాదం ఆధారంగా పేరు ఏ అక్షరంతో ప్రారంభం కావాలో నిర్ణయించడం; కుటుంబం ఎంచుకున్న పేర్లను జాతకంతో సరిపోల్చడం.',
      },
      examine: {
        en: [
          'The birth nakshatra and its pada, which together fix the traditional starting syllable',
          'Candidate names checked against that syllable, and against the Moon sign and the lagna lord',
          'Pronounceability in both Telugu and English, and how the name will actually be used day to day and written on a form',
          'Where the family has a naming tradition of its own, how to satisfy both that and the nakshatra requirement',
          'A cross-check with our Numerology desk where the family also wants the numeric value considered',
        ],
        te: [
          'జనన నక్షత్రం, దాని పాదం — ఇవి కలిసి సాంప్రదాయ ఆది అక్షరాన్ని నిర్ణయిస్తాయి',
          'ఎంచుకున్న పేర్లను ఆ అక్షరంతో, చంద్ర రాశితో, లగ్నాధిపతితో సరిపోల్చడం',
          'తెలుగు, ఆంగ్లం రెండింటిలో ఉచ్చారణ; రోజువారీ వాడుకలో, పత్రాలలో పేరు ఎలా ఉంటుంది',
          'కుటుంబానికి సొంత నామకరణ సంప్రదాయం ఉంటే, దాన్నీ నక్షత్ర నియమాన్నీ రెండింటినీ ఎలా కలపాలి',
          'సంఖ్యా విలువను కూడా పరిగణించాలని కుటుంబం కోరితే మా సంఖ్యా శాస్త్ర విభాగంతో సరిపోలిక',
        ],
      },
      who: {
        en: 'Naming a newborn, or formally adding a nakshatra-based name alongside one the family has already chosen.',
        te: 'నవజాత శిశువుకు నామకరణం, లేదా కుటుంబం ఇప్పటికే ఎంచుకున్న పేరుతో పాటు నక్షత్ర ఆధారిత పేరును అధికారికంగా చేర్చడం.',
      },
      receive: {
        en: 'The indicated syllables, a shortlist of names with the reasoning for each, and the naming muhurtham if you want one.',
        te: 'సూచించిన అక్షరాలు, కారణాలతో కూడిన పేర్ల జాబితా; కోరితే నామకరణ ముహూర్తం.',
      },
      cta: {
        en: 'Send the birth details; we will send the syllables within two days.',
        te: 'జనన వివరాలు పంపండి; రెండు రోజుల్లో అక్షరాలు పంపుతాం.',
      },
      mode: 'remote',
      timing: { en: '30 minutes', te: '30 నిమిషాలు' },
      fee: '₹ —',
    },

    /* ── 19 ──────────────────────────────────────────────────── */
    {
      id: 'remedies',
      index: 19,
      cluster: 'ceremonial',
      name: { en: 'Astrological Remedies', te: 'జ్యోతిష పరిహారాలు' },
      definition: {
        en: 'What to actually do about what the chart shows — proposed in proportion to the finding, and never as something for you to buy from us.',
        te: 'జాతకం చూపిన దానికి నిజంగా ఏమి చేయాలి — నిర్ధారణకు తగినంతే సూచిస్తాం; మా దగ్గర కొనవలసిన వస్తువుగా ఎప్పుడూ కాదు.',
      },
      examine: {
        en: [
          'Whether a remedy is warranted at all — a great deal of what is sold as remedy addresses nothing in particular',
          'Conduct and discipline first: routine, restraint, and the specific behaviour the period is asking of you',
          'Mantra, charity and observance appropriate to the planet and the period, with the method explained rather than merely prescribed',
          'Gemstones only where the planet is genuinely a functional benefic for your lagna — and with the honest reservation that this area is contested even among practitioners',
          'What we will not do: sell you stones, yantras, poojas or protective items. We do not trade in remedies, and that is deliberate',
        ],
        te: [
          'అసలు పరిహారం అవసరమా — పరిహారం పేరుతో అమ్మేవాటిలో చాలా వరకు దేనినీ పరిష్కరించవు',
          'ముందు ప్రవర్తన, క్రమశిక్షణ: దినచర్య, సంయమనం; ఆ కాలం మీ నుండి కోరుతున్న నిర్దిష్ట ప్రవర్తన',
          'గ్రహానికి, కాలానికి తగిన మంత్రం, దానం, నియమం — కేవలం చెప్పి వదలకుండా, ఎలా చేయాలో వివరించి',
          'మీ లగ్నానికి ఆ గ్రహం నిజంగా శుభ కారకుడైన చోట మాత్రమే రత్నాలు — ఈ విషయంలో పండితుల మధ్యే భిన్నాభిప్రాయాలు ఉన్నాయని స్పష్టంగా చెబుతూ',
          'మేము చేయనివి: రత్నాలు, యంత్రాలు, పూజలు, రక్షణ వస్తువులు అమ్మం. పరిహారాల వ్యాపారం చేయం — ఇది ఉద్దేశపూర్వక నిర్ణయం',
        ],
      },
      who: {
        en: 'You have a reading — from us or from elsewhere — recommending remedies, and you want an unbiased view on which of them are worth doing.',
        te: 'మా దగ్గరో, వేరే చోటో వచ్చిన పరిశీలనలో పరిహారాలు సూచించారు; వాటిలో ఏవి చేయదగినవో నిష్పక్షపాత అభిప్రాయం కావాలి.',
      },
      receive: {
        en: 'A written remedy note ranked by effort and expected effect, with a plain statement of which items have weak backing.',
        te: 'శ్రమ, ఆశించిన ఫలితం ఆధారంగా క్రమబద్ధీకరించిన లిఖిత పరిహార సూచన; బలహీన ఆధారం ఉన్నవి ఏవో స్పష్టంగా చెబుతూ.',
      },
      cta: {
        en: 'We do not sell remedies. Ask us what is worth doing.',
        te: 'మేము పరిహారాలు అమ్మం. ఏమి చేయదగినదో అడగండి.',
      },
      mode: 'both',
      timing: { en: '45 minutes', te: '45 నిమిషాలు' },
      fee: '₹ —',
    },
  ],

  /* ── Bundles ─────────────────────────────────────────────────── */
  bundles: [
    {
      id: 'complete',
      name: { en: 'Complete Life Reading', te: 'సంపూర్ణ జీవిత పరిశీలన' },
      includes: ['birthchart', 'career', 'marriage', 'health'],
      value: {
        en: 'The whole chart first, then depth on the three areas most people actually came for — read as one engagement, so the findings are reconciled before you hear them rather than after.',
        te: 'ముందు మొత్తం జాతకం; ఆ తర్వాత చాలామంది నిజంగా వచ్చే మూడు అంశాలపై లోతైన పరిశీలన — ఒకే సేవగా, తద్వారా ఫలితాలు మీకు చెప్పేముందే సమన్వయమవుతాయి.',
      },
    },
    {
      id: 'wedding',
      name: { en: 'Before the Wedding', te: 'వివాహానికి ముందు' },
      includes: ['gunamilan', 'marriage', 'muhurtham'],
      value: {
        en: 'The two-chart comparison, each person’s own picture, and the date — settled together instead of by three people who never speak to each other.',
        te: 'రెండు జాతకాల పోలిక, ఇద్దరి సొంత స్థితి, తేదీ — ఒకరితో ఒకరు మాట్లాడని ముగ్గురు కాకుండా, అన్నీ ఒకే చోట.',
      },
    },
    {
      id: 'venture',
      name: { en: 'New Venture', te: 'నూతన వ్యాపారం' },
      includes: ['business', 'prashna', 'muhurtham'],
      crossVertical: {
        en: 'with a business name from Numerology and premises checked by the Vastu desk',
        te: 'సంఖ్యా శాస్త్ర విభాగం నుండి వ్యాపార నామం, వాస్తు విభాగం పరిశీలించిన స్థలంతో కలిపి',
      },
      value: {
        en: 'Enterprise suitability, one pending decision answered on the spot, and the launch date — with the name and the premises checked by the other desks rather than by four unconnected people.',
        te: 'వ్యాపార అనుకూలత, పెండింగ్‌లో ఉన్న ఒక నిర్ణయానికి వెంటనే సమాధానం, ప్రారంభ తేదీ — నలుగురు వేర్వేరు వ్యక్తులు కాక, పేరు, స్థలం మా ఇతర విభాగాలే పరిశీలించి.',
      },
    },
  ],

  /* ── FAQ ─────────────────────────────────────────────────────── */
  faqs: [
    {
      id: 'details',
      q: {
        en: 'What birth details do you need, and how exact does the birth time have to be?',
        te: 'ఏ జనన వివరాలు కావాలి? జనన సమయం ఎంత ఖచ్చితంగా ఉండాలి?',
      },
      a: {
        en: 'Date, time and place of birth. Within about five minutes is comfortable; within an hour is workable for most questions but weakens anything depending on the lagna or the divisional charts. If the time is unrecorded or disputed, we rectify it against documented life events before reading anything, and we tell you the confidence we reached. If you have no birth details at all, Prashna answers a single question without them.',
        te: 'జనన తేదీ, సమయం, స్థలం. దాదాపు ఐదు నిమిషాల లోపు ఖచ్చితత్వం మంచిది; ఒక గంట లోపు అయితే చాలా ప్రశ్నలకు సరిపోతుంది కానీ లగ్నం లేదా వర్గ కుండలులపై ఆధారపడే విషయాలు బలహీనమవుతాయి. సమయం నమోదు కాకపోతే లేదా భిన్నాభిప్రాయాలు ఉంటే, ఏదైనా చదవడానికి ముందు ధ్రువీకరించిన జీవిత సంఘటనలతో సవరించి, ఎంత నిశ్చయతకు చేరామో చెప్తాం. జనన వివరాలు అసలు లేకపోతే, వాటి అవసరం లేని ప్రశ్న జ్యోతిషం ఒక ప్రశ్నకు సమాధానమిస్తుంది.',
      },
    },
    {
      id: 'prashna-vs-chart',
      q: {
        en: 'What is the difference between a Prashna consultation and a full chart reading?',
        te: 'ప్రశ్న జ్యోతిషానికి, పూర్తి జాతక పరిశీలనకు తేడా ఏమిటి?',
      },
      a: {
        en: 'A full chart reading works from your birth moment and describes your life as a whole; it is broad and it holds for decades. Prashna works from the moment you ask, needs no birth details, and answers one question within a short horizon — typically weeks or months. If you want to understand yourself, take the chart. If you want an answer to one pending matter today, take Prashna.',
        te: 'పూర్తి జాతక పరిశీలన మీ జనన క్షణం ఆధారంగా జీవితాన్ని మొత్తంగా వివరిస్తుంది; అది విస్తృతమైనది, దశాబ్దాలకు వర్తిస్తుంది. ప్రశ్న జ్యోతిషం మీరు అడిగిన క్షణం ఆధారంగా పని చేస్తుంది, జనన వివరాలు అవసరం లేదు, తక్కువ కాల పరిధిలో — సాధారణంగా వారాలు లేదా నెలలు — ఒక ప్రశ్నకు సమాధానమిస్తుంది. మిమ్మల్ని మీరు అర్థం చేసుకోవాలంటే జాతకం; ఈ రోజు పెండింగ్‌లో ఉన్న ఒక విషయానికి సమాధానం కావాలంటే ప్రశ్న.',
      },
    },
    {
      id: 'muhurtham-notice',
      q: {
        en: 'How far in advance should a Muhurtham consultation be booked?',
        te: 'ముహూర్త సంప్రదింపును ఎంత ముందుగా నమోదు చేసుకోవాలి?',
      },
      a: {
        en: 'Six weeks at minimum, and three months for a wedding. Auspicious dates are not spread evenly through the year — some months carry very few, and if a hall or a family’s travel has already been fixed around a date we cannot support, someone is going to be disappointed. Asking early costs nothing; asking late narrows the answer to whatever is left.',
        te: 'కనీసం ఆరు వారాలు; వివాహానికైతే మూడు నెలలు. శుభ తేదీలు సంవత్సరమంతా సమానంగా ఉండవు — కొన్ని నెలల్లో చాలా తక్కువ ఉంటాయి. మేము సమర్థించలేని తేదీ చుట్టూ మండపం లేదా కుటుంబ ప్రయాణం ఇప్పటికే ఖరారైతే, ఎవరో ఒకరు నిరాశ చెందుతారు. ముందుగా అడగడం వల్ల ఖర్చు లేదు; ఆలస్యంగా అడిగితే మిగిలిన వాటికే పరిమితం కావాలి.',
      },
    },
    {
      id: 'mode',
      q: {
        en: 'Do you consult in person, online, or both?',
        te: 'సంప్రదింపులు ప్రత్యక్షంగానా, ఆన్‌లైన్‌లోనా, రెండూనా?',
      },
      a: {
        en: 'Both, and for Jyotisha there is no difference in quality — the inputs are a date, a time and a place, not the room you are sitting in. Naming guidance is handled remotely as a matter of course. Consultations run in Telugu or English, and you may take the sitting in one language and the written report in the other.',
        te: 'రెండూ. జ్యోతిషంలో నాణ్యతలో తేడా ఉండదు — కావలసినవి తేదీ, సమయం, స్థలం; మీరు కూర్చున్న గది కాదు. నామకరణ మార్గదర్శనం సహజంగానే దూరస్థంగా జరుగుతుంది. సంప్రదింపులు తెలుగులో లేదా ఆంగ్లంలో; సమావేశం ఒక భాషలో, లిఖిత నివేదిక మరో భాషలో కూడా తీసుకోవచ్చు.',
      },
    },
    {
      id: 'bad-news',
      q: {
        en: 'Do you predict death, serious illness, or divorce?',
        te: 'మరణం, తీవ్ర అనారోగ్యం, విడాకుల గురించి చెప్తారా?',
      },
      a: {
        en: 'No. We do not make those pronouncements, and we would ask you to be careful of anyone who does — a prediction of that kind is unfalsifiable in the moment and can do real harm to how someone lives afterwards. What we will discuss is where a period looks demanding and what can sensibly be done about it: a check-up scheduled, a decision deferred, a conversation had. Guidance you can act on, not a sentence passed.',
        te: 'చెప్పం. అలాంటి ప్రకటనలు మేము చేయం; చేసేవారి పట్ల జాగ్రత్తగా ఉండమని కోరతాం — అలాంటి జోస్యాన్ని ఆ క్షణంలో నిరూపించడం సాధ్యం కాదు, కానీ ఆ తర్వాత వ్యక్తి జీవించే తీరును అది నిజంగా దెబ్బతీయగలదు. మేము చర్చించేది: ఏ కాలం శ్రమతో కూడినదిగా కనిపిస్తోంది, దానిపై సహేతుకంగా ఏమి చేయవచ్చు — పరీక్ష చేయించుకోవడం, నిర్ణయాన్ని వాయిదా వేయడం, ఒక సంభాషణ జరపడం. అమలు చేయగల మార్గదర్శనం; విధించిన శిక్ష కాదు.',
      },
    },
    {
      id: 'contradictions',
      q: {
        en: 'I have had three readings that contradict each other. What now?',
        te: 'పరస్పరం విరుద్ధమైన మూడు పరిశీలనలు చేయించుకున్నాను. ఇప్పుడేమి చేయాలి?',
      },
      a: {
        en: 'Start by checking whether all three were even working from the same chart — differing ayanamsas, an unverified dasha balance at birth, or an unrectified birth time will produce three different charts before anyone has interpreted anything. That is why the full reading here begins by verifying the chart itself and states which ayanamsa was used. Bring the three readings with you; we will show you where they diverge and why.',
        te: 'ముందుగా ఆ మూడూ ఒకే కుండలి ఆధారంగా చేశారా అని చూడండి — వేర్వేరు అయనాంశలు, ధ్రువీకరించని జనన దశా శేషం, లేదా సవరించని జనన సమయం — ఎవరూ ఏమీ అర్థం చెప్పకముందే మూడు వేర్వేరు కుండలులు వస్తాయి. అందుకే ఇక్కడ పూర్తి పరిశీలన కుండలిని ధ్రువీకరించడంతో మొదలవుతుంది, ఏ అయనాంశ వాడామో కూడా చెప్తాం. ఆ మూడు పరిశీలనలూ తీసుకురండి; అవి ఎక్కడ, ఎందుకు విడిపోయాయో చూపిస్తాం.',
      },
    },
  ],
};
