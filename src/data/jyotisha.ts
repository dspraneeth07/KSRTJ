import type { Vertical } from './verticalTypes';

/* ═══════════════════════════════════════════════════════════════════
   Jyotisha Shastra & Allied Studies — twenty services in five clusters.

   The service numbers are the client's own and are not sequential
   within a cluster: Health Astrology is 10 and Samudrika Shastra is 20,
   but both belong with the foundational chart readings. The number
   identifies the service across the whole list, so it is kept as given
   rather than renumbered per group.
   ═══════════════════════════════════════════════════════════════════ */

const clusters: Vertical['clusters'] = [
  {
    id: 'foundations',
    label: { en: 'Life Chart & Foundations', te: 'జాతకం, మౌలిక పరిశీలన' },
    blurb: {
      en: 'The whole chart and its relevant indications.',
      te: 'మొత్తం జాతకం మరియు అందులోని సంబంధిత సూచనల పరిశీలన.',
    },
  },
  {
    id: 'work',
    label: { en: 'Career, Wealth & Property', te: 'వృత్తి, సంపద, ఆస్తి' },
    blurb: {
      en: 'Separate areas relating to profession, income, wealth and property.',
      te: 'సంపాదన, వృత్తి, సంపద మరియు ఆస్తికి సంబంధించిన వేర్వేరు అంశాల పరిశీలన.',
    },
  },
  {
    id: 'family',
    label: { en: 'Relationships & Family', te: 'సంబంధాలు, కుటుంబం' },
    blurb: {
      en: 'One chart or comparison of two charts, according to the requirement.',
      te: 'ఒక జాతకం లేదా రెండు జాతకాల పోలిక — అవసరాన్ని బట్టి.',
    },
  },
  {
    id: 'timing',
    label: { en: 'Timing & Event Readings', te: 'కాల నిర్ణయం, సంఘటనల పరిశీలన' },
    blurb: {
      en: 'Jyotisha timing methods and their application to specific questions.',
      te: 'జ్యోతిష్య కాల పద్ధతులు మరియు వాటి నిర్దిష్ట అనువర్తనం.',
    },
  },
  {
    id: 'ceremonial',
    label: { en: 'Muhurtham & Remedies', te: 'ముహూర్తం, పరిహారాలు' },
    blurb: {
      en: 'Timing, naming, and traditional remedial guidance.',
      te: 'సమయ ఎంపిక, నామకరణం మరియు జ్యోతిష్య పరిహారాలకు సంబంధించిన పరిశీలన.',
    },
  },
];

const services: Vertical['services'] = [
  /* ── Life chart & foundations ───────────────────────────────── */
  {
    id: 'birthchart',
    index: 1,
    cluster: 'foundations',
    name: {
      en: 'Complete Birth Chart (Janma Jataka) Analysis',
      te: 'సంపూర్ణ జన్మ జాతక విశ్లేషణ',
    },
    definition: {
      en: 'A comprehensive reading of the birth chart, considering personal disposition, major areas of life, and relevant Jyotisha indications.',
      te: 'మొత్తం జాతకాన్ని సమగ్రంగా పరిశీలించే మౌలిక సేవ. వ్యక్తిగత స్వభావం, జీవితంలోని ముఖ్య అంశాలు మరియు సంబంధిత జ్యోతిష్య సూచనలను సమగ్రంగా పరిశీలించడం.',
    },
  },
  {
    id: 'personality',
    index: 2,
    cluster: 'foundations',
    name: { en: 'Personality & Life Pattern', te: 'స్వభావం, జీవన సరళి' },
    definition: {
      en: 'A reading of temperament, behavioural tendencies, and recurring life patterns based on the relevant indications in the chart.',
      te: 'జాతకంలోని సూచనల ఆధారంగా స్వభావం, ప్రవర్తనా ధోరణులు మరియు పునరావృతమయ్యే జీవన సరళులను పరిశీలించడం.',
    },
  },
  {
    id: 'education',
    index: 3,
    cluster: 'foundations',
    name: { en: 'Education & Knowledge Path', te: 'విద్య, జ్ఞాన మార్గం' },
    definition: {
      en: 'Assessment of Jyotisha indications relating to education, interests, and knowledge. Relevant periods may also be considered where required.',
      te: 'విద్య, అభిరుచులు మరియు జ్ఞానానికి సంబంధించిన జ్యోతిష్య సూచనలను పరిశీలించడం. అవసరాన్ని బట్టి విద్యకు సంబంధించిన ముఖ్య కాలాలను కూడా పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'health',
    index: 10,
    cluster: 'foundations',
    name: { en: 'Health Astrology', te: 'ఆరోగ్య జ్యోతిషం' },
    definition: {
      en: 'Assessment of traditional Jyotisha indications relating to health and relevant periods. It is not a medical diagnosis or a substitute for medical care.',
      te: 'జాతకంలో ఆరోగ్యానికి సంబంధించిన సంప్రదాయ జ్యోతిష్య సూచనలు మరియు కాల సంబంధిత అంశాలను పరిశీలించడం. ఇది వైద్య నిర్ధారణ లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు.',
    },
  },
  {
    id: 'samudrika',
    index: 20,
    cluster: 'foundations',
    name: { en: 'Samudrika Shastra', te: 'సాముద్రిక శాస్త్రం' },
    definition: {
      en: 'Assessment of the hands and physical features according to traditional Samudrika Shastra principles. It is treated as a distinct traditional method rather than as a substitute for birth-chart analysis.',
      te: 'సాముద్రిక శాస్త్ర సూత్రాల ఆధారంగా హస్తరేఖలు మరియు శరీర లక్షణాలకు సంబంధించిన అంశాలను పరిశీలించడం. ఇది జ్యోతిష జాతక పరిశీలనకు భిన్నమైన ప్రత్యేక సంప్రదాయ పద్ధతిగా పరిగణించబడుతుంది.',
    },
  },

  /* ── Career, wealth & property ──────────────────────────────── */
  {
    id: 'career',
    index: 4,
    cluster: 'work',
    name: { en: 'Career & Profession', te: 'ఉద్యోగం, వృత్తి' },
    definition: {
      en: 'Assessment of Jyotisha indications relating to employment, profession, career tendencies, and relevant periods.',
      te: 'ఉద్యోగం మరియు వృత్తికి సంబంధించిన జ్యోతిష్య సూచనలు, వృత్తి ధోరణులు మరియు సంబంధిత కాలాలను పరిశీలించడం.',
    },
  },
  {
    id: 'business',
    index: 5,
    cluster: 'work',
    name: { en: 'Business & Financial Standing', te: 'వ్యాపారం, ఆర్థిక స్థితి' },
    definition: {
      en: 'Assessment of Jyotisha indications relating to business and financial matters. Where required, periods relating to starting, continuing, expanding, or entering into a business partnership may also be considered.',
      te: 'వ్యాపారం మరియు ఆర్థిక స్థితికి సంబంధించిన జ్యోతిష్య సూచనలను పరిశీలించడం. అవసరాన్ని బట్టి వ్యాపార ప్రారంభం, కొనసాగింపు, విస్తరణ మరియు భాగస్వామ్యానికి సంబంధించిన కాలాలను కూడా పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'wealth',
    index: 6,
    cluster: 'work',
    name: {
      en: 'Income, Property & Wealth Prospects',
      te: 'ఆదాయం, ఆస్తి, ధన యోగాలు',
    },
    definition: {
      en: 'Assessment of Jyotisha indications relating to income, wealth, savings, and property.',
      te: 'ఆదాయం, సంపద, పొదుపు మరియు ఆస్తికి సంబంధించిన జ్యోతిష్య సూచనలను పరిశీలించడం.',
    },
  },
  {
    id: 'property',
    index: 12,
    cluster: 'work',
    name: { en: 'House, Land & Vehicle Yogas', te: 'గృహ, భూమి, వాహన యోగాలు' },
    definition: {
      en: 'Assessment of Jyotisha indications and relevant periods relating to the acquisition of a house, land, or vehicle.',
      te: 'గృహం, భూమి లేదా వాహనం కొనుగోలు మరియు సంబంధిత అంశాలకు సంబంధించిన జ్యోతిష్య సూచనలు మరియు కాలాలను పరిశీలించడం.',
    },
  },
  {
    id: 'foreign',
    index: 11,
    cluster: 'work',
    name: { en: 'Foreign Travel & Settlement', te: 'విదేశీ ప్రయాణం, స్థిర నివాసం' },
    definition: {
      en: 'Assessment of Jyotisha indications relating to foreign travel, education or employment abroad, and residence abroad.',
      te: 'విదేశీ ప్రయాణం, విదేశీ విద్య లేదా ఉద్యోగం మరియు విదేశాల్లో నివాసానికి సంబంధించిన జ్యోతిష్య సూచనలు మరియు సంబంధిత కాలాలను పరిశీలించడం.',
    },
  },

  /* ── Relationships & family ─────────────────────────────────── */
  {
    id: 'marriage',
    index: 7,
    cluster: 'family',
    name: { en: 'Marriage & Married Life', te: 'వివాహం, దాంపత్య జీవితం' },
    definition: {
      en: "Reading one person's chart for marriage-related timing, indications concerning married life, and relevant indications concerning a partner.",
      te: 'ఒక వ్యక్తి జాతకం ఆధారంగా వివాహానికి సంబంధించిన కాలం, దాంపత్య సంబంధిత సూచనలు మరియు భాగస్వామికి సంబంధించిన జ్యోతిష్య సూచనలను పరిశీలించడం.',
    },
  },
  {
    id: 'gunamilan',
    index: 13,
    cluster: 'family',
    name: {
      en: 'Marriage Compatibility (Guna Milan)',
      te: 'వివాహ అనుకూలత (గుణ మిలన్)',
    },
    definition: {
      en: "Comparison of two prospective partners' charts for relevant aspects of marriage compatibility.",
      te: 'వివాహానికి ముందు ఇరువురి జాతకాలను పోల్చి, వివాహ అనుకూలతకు సంబంధించిన సంబంధిత అంశాలను పరిశీలించడం.',
    },
  },
  {
    id: 'progeny',
    index: 8,
    cluster: 'family',
    name: { en: 'Children & Progeny Matters', te: 'సంతాన విషయాలు' },
    definition: {
      en: "Assessment of Jyotisha indications and relevant periods concerning children. A child's own chart may also be considered separately where required.",
      te: 'సంతానానికి సంబంధించిన జ్యోతిష్య సూచనలు మరియు సంబంధిత కాలాలను పరిశీలించడం. అవసరాన్ని బట్టి పిల్లల స్వంత జాతకాన్ని కూడా విడిగా పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'family',
    index: 9,
    cluster: 'family',
    name: { en: 'Family & Relationships', te: 'కుటుంబం, సంబంధాలు' },
    definition: {
      en: 'Assessment of Jyotisha indications relating to parents, siblings, in-laws, and other family relationships.',
      te: 'తల్లిదండ్రులు, తోబుట్టువులు, అత్తమామలు మరియు ఇతర కుటుంబ సంబంధాలకు సంబంధించిన జ్యోతిష్య సూచనలు మరియు సంబంధిత అంశాలను పరిశీలించడం.',
    },
  },

  /* ── Timing & event readings ────────────────────────────────── */
  {
    id: 'dasha',
    index: 14,
    cluster: 'timing',
    name: {
      en: 'Dasha–Bhukti & Gochara Analysis',
      te: 'దశ–భుక్తి, గోచార పరిశీలన',
    },
    definition: {
      en: 'Assessment using Dasha–Bhukti and Gochara as Jyotisha timing methods, including how relevant chart indications may be considered during particular periods.',
      te: 'దశ–భుక్తి మరియు గోచారాలకు సంబంధించిన జ్యోతిష్య కాల పరిశీలన. సంబంధిత కాలంలో జాతకంలోని అంశాలు ఎలా పరిశీలించబడతాయో వివరించడం.',
    },
  },
  {
    id: 'timing',
    index: 15,
    cluster: 'timing',
    name: { en: 'Life Event Timing', te: 'జీవిత సంఘటనల కాల నిర్ణయం' },
    definition: {
      en: 'Assessment of the timing of a specific event or subject using relevant Jyotisha methods, including indications that may support or delay the matter.',
      te: 'ఒక నిర్దిష్ట సంఘటన లేదా అంశానికి సంబంధించిన కాలాన్ని జ్యోతిష్య పద్ధతుల ఆధారంగా పరిశీలించడం. సంబంధిత అంశానికి సహకరించే లేదా ఆలస్యానికి సంబంధించిన సూచనలను కూడా పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'prashna',
    index: 16,
    cluster: 'timing',
    name: { en: 'Prashna Jyotisham (Horary)', te: 'ప్రశ్న జ్యోతిషం' },
    definition: {
      en: 'A chart is prepared for the time at which a question is asked, and the specific question is examined through Prashna Jyotisha. Birth details are generally not required.',
      te: 'ప్రశ్న అడిగిన సమయాన్ని ఆధారంగా చేసుకుని ప్రశ్న కుండలిని రూపొందించి, అడిగిన నిర్దిష్ట ప్రశ్నకు సంబంధించిన జ్యోతిష్య పరిశీలన అందించడం. దీనికి సాధారణంగా జనన వివరాలు అవసరం లేదు.',
    },
  },

  /* ── Muhurtham & remedies ───────────────────────────────────── */
  {
    id: 'muhurtham',
    index: 17,
    cluster: 'ceremonial',
    name: { en: 'Muhurtham (Auspicious Timing)', te: 'ముహూర్త నిర్ణయం' },
    definition: {
      en: 'Selection of a suitable date and time for marriage, housewarming, construction, business commencement, and other important activities using relevant Jyotisha methods.',
      te: 'వివాహం, గృహప్రవేశం, నిర్మాణం, వ్యాపార ప్రారంభం మరియు ఇతర ముఖ్య కార్యాలకు అనుకూలమైన తేదీ మరియు సమయాన్ని జ్యోతిష్య పద్ధతుల ఆధారంగా పరిశీలించి సూచించడం.',
    },
  },
  {
    id: 'naming',
    index: 18,
    cluster: 'ceremonial',
    name: {
      en: 'Naming Guidance (Nakshatra & Pada)',
      te: 'నక్షత్ర, పాద ఆధారిత నామకరణం',
    },
    definition: {
      en: 'Assessment of the traditional naming syllables associated with the birth Nakshatra and Pada. Family-selected names may also be considered where required.',
      te: 'జన్మ నక్షత్రం మరియు పాదానికి సంబంధించిన సంప్రదాయ నియమాల ఆధారంగా పేరుకు అనుకూలమైన ప్రారంభ అక్షరాలను పరిశీలించడం. అవసరమైనప్పుడు కుటుంబం ఎంపిక చేసిన పేర్లను కూడా పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'remedies',
    index: 19,
    cluster: 'ceremonial',
    name: { en: 'Astrological Remedies', te: 'జ్యోతిష పరిహారాలు' },
    definition: {
      en: 'Traditional remedial guidance according to the relevant Jyotisha assessment. Only remedies considered relevant to the matter are suggested; purchasing any item from us is not required.',
      te: 'జ్యోతిష్య పరిశీలనలో గుర్తించిన అంశాలకు అనుగుణంగా సంప్రదాయ పరిహార మార్గదర్శకత్వం అందించడం. పరిహారంగా అవసరమైన విషయాలను మాత్రమే సూచిస్తాం; మా వద్ద నుంచే ఏదైనా వస్తువు కొనుగోలు చేయడం తప్పనిసరి కాదు.',
    },
  },
];

const bundles: Vertical['bundles'] = [
  {
    id: 'complete',
    name: { en: 'Complete Life Reading', te: 'సంపూర్ణ జీవిత పరిశీలన' },
    includes: ['birthchart', 'career', 'marriage', 'health'],
    value: {
      en: 'A comprehensive birth-chart reading followed, where required, by deeper assessment of career, marriage, health, or another important area.',
      te: 'మొత్తం జాతక పరిశీలనతో పాటు, అవసరాన్ని బట్టి వృత్తి, వివాహం, ఆరోగ్యం లేదా ఇతర ముఖ్య అంశాలపై లోతైన పరిశీలన.',
    },
  },
  {
    id: 'wedding',
    name: { en: 'Before the Wedding', te: 'వివాహానికి ముందు' },
    includes: ['gunamilan', 'marriage', 'muhurtham'],
    value: {
      en: 'A combined consideration of both charts, individual marriage-related indications, and Muhurtham where required.',
      te: 'ఇరువురి జాతకాల అనుకూలత, వ్యక్తిగత జాతకంలోని వివాహ సంబంధిత అంశాలు మరియు అవసరాన్ని బట్టి ముహూర్త పరిశీలనను కలిపి చూడడం.',
    },
  },
  {
    id: 'venture',
    name: { en: 'New Venture', te: 'నూతన వ్యాపారం' },
    includes: ['business', 'prashna', 'muhurtham'],
    /* Named rather than linked: these two belong to other sections. */
    crossVertical: {
      en: [
        'Business name assessment from Numerology',
        'Premises assessment from the Vastu section',
      ],
      te: [
        'సంఖ్యా శాస్త్ర విభాగం నుండి వ్యాపార నామ పరిశీలన',
        'వాస్తు విభాగం నుండి స్థల పరిశీలన',
      ],
    },
    value: {
      en: 'A combined assessment of business-related Jyotisha matters, Prashna where required, commencement timing, and relevant naming or Vastu considerations.',
      te: 'వ్యాపారానికి సంబంధించిన జ్యోతిష్య అంశాలు, అవసరమైనప్పుడు ప్రశ్న జ్యోతిషం, ప్రారంభ సమయం మరియు సంబంధిత నామకరణ లేదా వాస్తు అంశాలను కలిపి పరిశీలించడం.',
    },
  },
];

const faqs: Vertical['faqs'] = [
  {
    id: 'details',
    q: {
      en: 'What birth details do you need, and how exact does the birth time have to be?',
      te: 'ఏ జనన వివరాలు కావాలి? జనన సమయం ఎంత ఖచ్చితంగా ఉండాలి?',
    },
    a: {
      en: 'We generally require the date of birth, time of birth, and place of birth. If the birth time is uncertain, we explain in advance the extent to which an assessment can be made from the available information.',
      te: 'సాధారణంగా జనన తేదీ, జనన సమయం మరియు జనన స్థలం అవసరం. జనన సమయం విషయంలో సందేహం ఉంటే, అందుబాటులో ఉన్న వివరాల ఆధారంగా ఎంతవరకు పరిశీలన చేయగలమో ముందుగా తెలియజేస్తాం.',
    },
  },
  {
    id: 'prashna',
    q: {
      en: 'What is the difference between a Prashna consultation and a full chart reading?',
      te: 'ప్రశ్న జ్యోతిషానికి, పూర్తి జాతక పరిశీలనకు తేడా ఏమిటి?',
    },
    a: {
      en: "A full chart reading examines different areas of the birth chart using the person's birth details. Prashna Jyotisha examines a specific question using the time at which the question is asked.",
      te: 'పూర్తి జాతక పరిశీలన జనన వివరాల ఆధారంగా వ్యక్తి జాతకంలోని వివిధ అంశాలను పరిశీలిస్తుంది. ప్రశ్న జ్యోతిషం మాత్రం ప్రశ్న అడిగిన సమయాన్ని ఆధారంగా చేసుకుని ఒక నిర్దిష్ట ప్రశ్నను పరిశీలిస్తుంది.',
    },
  },
  {
    id: 'advance',
    q: {
      en: 'How far in advance should a Muhurtham consultation be booked?',
      te: 'ముహూర్త సంప్రదింపును ఎంత ముందుగా నమోదు చేసుకోవాలి?',
    },
    a: {
      en: 'It is useful to contact us in advance according to the nature of the activity and the range of dates being considered. The appropriate process can then be explained based on the available information.',
      te: 'కార్య స్వభావం మరియు అవసరమైన తేదీల పరిధిని బట్టి ముందుగానే సంప్రదించడం ఉపయోగకరం. అందుబాటులో ఉన్న వివరాల ఆధారంగా అవసరమైన విధానాన్ని తెలియజేస్తాం.',
    },
  },
  {
    id: 'mode',
    q: {
      en: 'Do you consult in person, online, or both?',
      te: 'సంప్రదింపులు ప్రత్యక్షంగానా, ఆన్‌లైన్‌లోనా, రెండూనా?',
    },
    a: {
      en: 'Both are available. The consultation can be conducted online or in person according to the requirement.',
      te: 'రెండూ అందుబాటులో ఉన్నాయి. అవసరాన్ని బట్టి ఆన్‌లైన్ లేదా ప్రత్యక్ష సంప్రదింపును నిర్వహించవచ్చు.',
    },
  },
  {
    id: 'sensitive',
    q: {
      en: 'Do you predict death, serious illness, or divorce?',
      te: 'మరణం, తీవ్ర అనారోగ్యం, విడాకుల గురించి చెప్తారా?',
    },
    a: {
      en: 'We do not provide definitive or fear-based predictions about sensitive life matters. Health-related Jyotisha assessment is not a medical diagnosis or substitute for medical care.',
      te: 'జీవితంలోని సున్నితమైన అంశాలపై ఖచ్చితమైన లేదా భయపెట్టే భవిష్యవాణులు చేయము. ఆరోగ్యానికి సంబంధించిన జ్యోతిష్య పరిశీలన వైద్య నిర్ధారణ లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు.',
    },
  },
  {
    id: 'contradictions',
    q: {
      en: 'I have had three readings that contradict each other. What now?',
      te: 'పరస్పరం విరుద్ధమైన మూడు పరిశీలనలు చేయించుకున్నాను. ఇప్పుడేమి చేయాలి?',
    },
    a: {
      en: 'It is useful to understand which method, principle, or information each reading was based on. Where appropriate, the available details can be reviewed to explain why the assessments differ.',
      te: 'ప్రతి పరిశీలన ఏ పద్ధతి, సూత్రం లేదా సమాచారంపై ఆధారపడి ఉందో ముందుగా తెలుసుకోవడం ఉపయోగకరం. అవసరమైతే అందుబాటులో ఉన్న వివరాలను పరిశీలించి, ఏ అంశంలో ఎందుకు భిన్నమైన అభిప్రాయాలు వచ్చాయో వివరించవచ్చు.',
    },
  },
];

export const jyotishaVertical: Vertical = {
  id: 'jyotisha',
  path: '/services/jyotisha',
  icon: 'jyotisha',
  nameKey: 'v.jyotisha.name',
  subKey: 'v.jyotisha.sub',
  eyebrow: {
    en: 'Second of Five Main Areas',
    te: 'ఐదు ప్రధాన విభాగాల్లో రెండోది',
  },
  title: {
    en: 'Jyotisha Shastra & Allied Studies',
    te: 'జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు',
  },
  standfirst: {
    en: 'A Chart Is an Instrument for Reading, Not a Verdict',
    te: 'జాతకం ఒక పరిశీలనా సాధనం; తుది తీర్పు కాదు.',
  },
  lede: [
    {
      en: 'Jyotisha works from the calculated planetary positions at the time of birth and examines traditional indications relating to disposition, life areas, and timing. It is a method of Jyotisha assessment for understanding a particular subject and does not guarantee specific outcomes.',
      te: 'జ్యోతిషం జనన సమయంలో గ్రహాల స్థితిని గణించి, వాటి ఆధారంగా స్వభావం, జీవన అంశాలు మరియు కాలానికి సంబంధించిన సంప్రదాయ సూచనలను పరిశీలిస్తుంది. ఇది ఒక నిర్దిష్ట విషయాన్ని అర్థం చేసుకోవడానికి ఉపయోగించే జ్యోతిష్య పరిశీలన; నిర్దిష్ట ఫలితాలకు హామీ ఇవ్వదు.',
    },
  ],
  framingTitle: {
    en: 'How a Jyotisha Consultation Works Here',
    te: 'ఇక్కడ జ్యోతిష సంప్రదింపు ఎలా జరుగుతుంది',
  },
  framing: [
    {
      en: 'We generally require the date of birth, time of birth, and place of birth. Where the birth time is uncertain, available life events may be considered to assess the time and to explain in advance the extent to which an assessment can be made.',
      te: 'సాధారణంగా జనన తేదీ, జనన సమయం మరియు జనన స్థలం అవసరం. జనన సమయం విషయంలో సందేహం ఉంటే, అందుబాటులో ఉన్న జీవిత సంఘటనలను ఆధారంగా చేసుకుని సమయాన్ని పరిశీలించి, దాని ఆధారంగా ఎంతవరకు పరిశీలన చేయగలమో ముందుగా తెలియజేస్తాం.',
    },
    {
      en: 'The required chart details and relevant assessments are prepared in advance. Where required for the question, relevant divisional charts may also be considered.',
      te: 'సంప్రదింపుకు అవసరమైన జాతక వివరాలు మరియు సంబంధిత పరిశీలనలను ముందుగానే సిద్ధం చేస్తాం. ప్రశ్నకు అవసరమైనప్పుడు సంబంధిత వర్గ కుండలులను కూడా పరిగణనలోకి తీసుకుంటాం.',
    },
    {
      en: 'Consultations are available in Telugu or English, online or in person.',
      te: 'సంప్రదింపులు తెలుగులో లేదా ఆంగ్లంలో, ఆన్‌లైన్ లేదా ప్రత్యక్షంగా నిర్వహించబడతాయి.',
    },
  ],
  filterAll: { en: 'All Services', te: 'అన్ని సేవలు' },
  bundlesTitle: {
    en: 'Three Service Sequences That Can Work Together',
    te: 'కలిసి చేయగల మూడు సేవా క్రమాలు',
  },
  bundlesLede: {
    en: 'Two or more services may be considered together where appropriate to the requirement. The relevant services are discussed and decided in advance.',
    te: 'సంబంధిత అవసరాన్ని బట్టి రెండు లేదా అంతకంటే ఎక్కువ సేవలను కలిపి పరిశీలించవచ్చు. ఏ సేవలు అవసరమో ముందుగా చర్చించి నిర్ణయిస్తాం.',
  },
  faqTitle: {
    en: 'Asked Before Many Readings',
    te: 'చాలా పరిశీలనలకు ముందు అడిగేవి',
  },
  feeLede: [
    {
      en: 'Duration and fees are communicated according to the requirement and scope of work before the consultation.',
      te: 'వ్యవధి మరియు రుసుము అవసరం మరియు పని పరిధిని బట్టి, సంప్రదింపుకు ముందే తెలియజేయబడతాయి.',
    },
  ],
  ctaTitle: {
    en: 'Not Sure Whether You Need the Whole Chart or One Area?',
    te: 'మొత్తం జాతకం కావాలా, ఒక అంశం మాత్రమేనా — తేల్చుకోలేకపోతున్నారా?',
  },
  ctaLede: {
    en: 'Tell us your question in two lines. We will explain whether a full chart reading is required or whether a specific service may be sufficient for your requirement.',
    te: 'మీ ప్రశ్నను రెండు వాక్యాల్లో చెప్పండి. పూర్తి జాతక పరిశీలన అవసరమా లేదా ఒక నిర్దిష్ట సేవ సరిపోతుందా అనే విషయాన్ని అవసరాన్ని బట్టి తెలియజేస్తాం.',
  },
  clusters,
  services,
  bundles,
  faqs,
};
