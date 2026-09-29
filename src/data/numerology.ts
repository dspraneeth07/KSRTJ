import type { Vertical } from './verticalTypes';

/* ═══════════════════════════════════════════════════════════════════
   Numerology — twelve services in four clusters.

   The service numbers are the client's own and are not sequential
   within a cluster: Signature Analysis is 11 but belongs with the
   personal names, and Marriage Compatibility is 03 but belongs with
   timing and compatibility. The number identifies the service across
   the whole list, so it is kept as given.
   ═══════════════════════════════════════════════════════════════════ */

const clusters: Vertical['clusters'] = [
  {
    id: 'personal',
    label: { en: 'Personal & Family Names', te: 'వ్యక్తిగత, కుటుంబ నామాలు' },
    blurb: {
      en: 'Names used by individuals and families.',
      te: 'వ్యక్తులు మరియు కుటుంబాల్లో ఉపయోగించే పేర్లకు సంబంధించిన పరిశీలన.',
    },
  },
  {
    id: 'business',
    label: { en: 'Business & Brand Identity', te: 'వ్యాపార, బ్రాండ్ గుర్తింపు' },
    blurb: {
      en: 'Names used for businesses, institutions, products and services.',
      te: 'వ్యాపారాలు, సంస్థలు, ఉత్పత్తులు మరియు సేవలకు ఉపయోగించే పేర్ల పరిశీలన.',
    },
  },
  {
    id: 'daily',
    label: { en: 'Numbers You Use Daily', te: 'రోజువారీ సంఖ్యలు' },
    blurb: {
      en: 'Mobile, vehicle, house and other commonly used numbers.',
      te: 'మొబైల్, వాహనం, ఇల్లు మరియు సాధారణంగా ఉపయోగించే ఇతర సంఖ్యలు.',
    },
  },
  {
    id: 'checks',
    label: { en: 'Timing & Compatibility', te: 'కాలం, అనుకూలత' },
    blurb: {
      en: 'Dates and numerical relationships according to the requirement.',
      te: 'తేదీలు మరియు సంఖ్యల పరస్పర అనుకూలతకు సంబంధించిన పరిశీలన.',
    },
  },
];

const services: Vertical['services'] = [
  /* ── Personal & family names ────────────────────────────────── */
  {
    id: 'namecorrection',
    index: 1,
    cluster: 'personal',
    name: {
      en: 'Personal Name & Spelling Correction',
      te: 'వ్యక్తిగత పేరు, స్పెల్లింగ్ సవరణ',
    },
    definition: {
      en: 'Assessment of the name currently used in daily life and examination of its spelling in relation to the Birth Number and Destiny Number. Where appropriate, alternative spellings may also be considered.',
      te: 'రోజువారీ జీవితంలో ప్రస్తుతం ఉపయోగిస్తున్న పేరును పరిశీలించి, జనన సంఖ్య మరియు భాగ్య సంఖ్యకు సంబంధించి దాని స్పెల్లింగ్‌ను పరిశీలించడం. అవసరమైనప్పుడు ప్రత్యామ్నాయ స్పెల్లింగ్‌లను కూడా పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'childnaming',
    index: 2,
    cluster: 'personal',
    name: { en: 'Child Naming', te: 'శిశు నామకరణం' },
    definition: {
      en: "Assessment of suitable names for a child using the child's date of birth and the relevant numerology principles. Where required, names selected by the family can also be examined.",
      te: 'శిశువు జనన తేదీ మరియు సంబంధిత సంఖ్యా శాస్త్ర సూత్రాల ఆధారంగా పేర్లను పరిశీలించడం. అవసరమైనప్పుడు కుటుంబం ఎంపిక చేసిన పేర్లను కూడా పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'signature',
    index: 11,
    cluster: 'personal',
    name: { en: 'Signature Analysis', te: 'సంతక విశ్లేషణ' },
    definition: {
      en: 'Assessment of the commonly used handwritten signature as a separate aspect of name and personal-number analysis.',
      te: 'సాధారణంగా ఉపయోగించే చేతిరాత సంతకాన్ని పేరు మరియు వ్యక్తిగత సంఖ్యా విశ్లేషణలో ఒక ప్రత్యేక అంశంగా పరిశీలించడం.',
    },
  },

  /* ── Business & brand identity ──────────────────────────────── */
  {
    id: 'businessname',
    index: 4,
    cluster: 'business',
    name: { en: 'Business Name', te: 'వ్యాపార నామం' },
    definition: {
      en: 'Numerological assessment of a proposed or existing business name, including shops, clinics, studios, agencies and other businesses.',
      te: 'దుకాణం, క్లినిక్, స్టూడియో, ఏజెన్సీ మరియు ఇతర వ్యాపారాలకు సంబంధించిన ప్రతిపాదిత లేదా ఇప్పటికే ఉన్న వ్యాపార నామాన్ని సంఖ్యా శాస్త్రపరంగా పరిశీలించడం.',
    },
  },
  {
    id: 'companyname',
    index: 5,
    cluster: 'business',
    name: { en: 'Company & Institution Name', te: 'కంపెనీ, సంస్థ నామం' },
    definition: {
      en: 'Numerological assessment of the name of a company, institution or other organisation, according to the nature of the entity and the requirement.',
      te: 'కంపెనీ, సంస్థ లేదా ఇతర సంస్థకు సంబంధించిన పేరును, ఆ సంస్థ స్వభావం మరియు అవసరాన్ని బట్టి సంఖ్యా శాస్త్రపరంగా పరిశీలించడం.',
    },
  },
  {
    id: 'brandname',
    index: 6,
    cluster: 'business',
    name: { en: 'Brand Name', te: 'బ్రాండ్ నామం' },
    definition: {
      en: 'Numerological assessment of a proposed or existing brand name used for a product or service, including cases where the brand name differs from the registered business or company name.',
      te: 'ఉత్పత్తి లేదా సేవ ఏ పేరుతో వినియోగదారులకు పరిచయం చేయబడుతుందో ఆ బ్రాండ్ పేరును సంఖ్యా శాస్త్రపరంగా పరిశీలించడం. ఇది నమోదిత కంపెనీ లేదా వ్యాపార పేరు కంటే భిన్నంగా ఉండే సందర్భాలను కూడా పరిగణించవచ్చు.',
    },
  },

  /* ── Numbers you use daily ──────────────────────────────────── */
  {
    id: 'mobile',
    index: 7,
    cluster: 'daily',
    name: { en: 'Mobile Number Compatibility', te: 'మొబైల్ సంఖ్య అనుకూలత' },
    definition: {
      en: 'Assessment of a mobile number in relation to the relevant personal numbers. This may be considered for a new number or an existing number.',
      te: 'సంబంధిత వ్యక్తిగత సంఖ్యలతో మొబైల్ సంఖ్యను పరిశీలించడం. కొత్త సంఖ్య లేదా ఇప్పటికే ఉపయోగిస్తున్న సంఖ్యను కూడా పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'vehicle',
    index: 8,
    cluster: 'daily',
    name: { en: 'Vehicle Number Compatibility', te: 'వాహన సంఖ్య అనుకూలత' },
    definition: {
      en: 'Assessment of a proposed or existing vehicle registration number according to the relevant numerology principles.',
      te: 'ప్రతిపాదిత లేదా ఇప్పటికే ఉన్న వాహన రిజిస్ట్రేషన్ సంఖ్యను సంబంధిత సంఖ్యా శాస్త్ర సూత్రాల ప్రకారం పరిశీలించడం.',
    },
  },
  {
    id: 'house',
    index: 9,
    cluster: 'daily',
    name: {
      en: 'House & Flat Number Compatibility',
      te: 'ఇల్లు, ఫ్లాట్ సంఖ్య అనుకూలత',
    },
    definition: {
      en: 'Assessment of the number associated with a house, flat or residential unit according to the relevant numerology principles.',
      te: 'ఇల్లు, ఫ్లాట్ లేదా నివాస యూనిట్‌కు సంబంధించిన సంఖ్యను సంబంధిత సంఖ్యా శాస్త్ర సూత్రాల ప్రకారం పరిశీలించడం.',
    },
  },

  /* ── Timing & compatibility ─────────────────────────────────── */
  {
    id: 'marriage',
    index: 3,
    cluster: 'checks',
    name: {
      en: 'Marriage Compatibility (Birth, Destiny & Name Numbers)',
      te: 'వివాహ అనుకూలత (జనన, భాగ్య, నామ సంఖ్యలు)',
    },
    definition: {
      en: 'Numerological comparison of two individuals considering marriage, using their Birth, Destiny and Name Numbers according to the applicable method.',
      te: 'వివాహాన్ని పరిశీలిస్తున్న ఇద్దరి జనన, భాగ్య మరియు నామ సంఖ్యలను సంబంధిత సంఖ్యా శాస్త్ర విధానం ప్రకారం పరస్పరం పరిశీలించడం.',
    },
  },
  {
    id: 'dateselection',
    index: 10,
    cluster: 'checks',
    name: { en: 'Date Selection by Number', te: 'సంఖ్య ఆధారంగా తేదీ ఎంపిక' },
    definition: {
      en: 'Assessment of dates according to their numerical value and their relationship with the relevant persons and purpose, such as marriage, commencement, registration, housewarming or another important activity.',
      te: 'సంబంధిత వ్యక్తులు మరియు కార్య ఉద్దేశంతో తేదీ యొక్క సంఖ్యా విలువను పరిశీలించడం. ఉదాహరణకు వివాహం, ప్రారంభం, రిజిస్ట్రేషన్, గృహప్రవేశం లేదా ఇతర ముఖ్య కార్యక్రమాలకు తేదీని పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'general',
    index: 12,
    cluster: 'checks',
    name: {
      en: 'General Number Compatibility Check',
      te: 'సాధారణ సంఖ్యా అనుకూలత పరిశీలన',
    },
    definition: {
      en: 'A flexible numerology assessment for numbers or numerical combinations that do not fall under the other listed services, according to the specific requirement.',
      te: 'మిగతా సేవల్లోకి నేరుగా రాని సంఖ్య లేదా సంఖ్యా సమ్మేళనాన్ని అవసరాన్ని బట్టి పరిశీలించే సేవ.',
    },
  },
];

const bundles: Vertical['bundles'] = [
  {
    id: 'launch',
    name: { en: 'New Business Launch', te: 'నూతన వ్యాపార ప్రారంభం' },
    includes: ['businessname', 'brandname', 'dateselection'],
    /* Named rather than linked: these belong to other sections. */
    crossVertical: {
      en: [
        'Vastu assessment from the Vastu section, where required',
        'Relevant Jyotisha assessment from the Jyotisha section, where required',
      ],
      te: [
        'అవసరమైనప్పుడు వాస్తు విభాగం నుండి స్థల పరిశీలన',
        'అవసరమైనప్పుడు జ్యోతిష విభాగం నుండి సంబంధిత పరిశీలన',
      ],
    },
    value: {
      en: 'A combined assessment of the proposed business name, brand name and commencement date, with related Vastu or Jyotisha considerations included where required.',
      te: 'ప్రతిపాదిత వ్యాపార నామం, బ్రాండ్ నామం మరియు ప్రారంభ తేదీని కలిపి పరిశీలించడం. అవసరమైనప్పుడు సంబంధిత వాస్తు లేదా జ్యోతిష అంశాలను కూడా పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'baby',
    name: { en: 'New Baby', te: 'నూతన శిశువు' },
    includes: ['childnaming', 'dateselection'],
    crossVertical: {
      en: [
        'Nakshatra and Pada-based naming guidance from the Jyotisha section, where required',
      ],
      te: ['అవసరమైనప్పుడు జ్యోతిష విభాగం నుండి నక్షత్ర, పాద ఆధారిత నామకరణ పరిశీలన'],
    },
    value: {
      en: "A combined consideration of the child's name and naming-related date, with relevant Jyotisha considerations where required.",
      te: 'శిశువు పేరు మరియు నామకరణానికి సంబంధించిన తేదీని కలిపి పరిశీలించడం. అవసరమైనప్పుడు సంబంధిత జ్యోతిష అంశాలను కూడా పరిగణించవచ్చు.',
    },
  },
  {
    id: 'home',
    name: { en: 'New Home', te: 'నూతన గృహం' },
    includes: ['house', 'dateselection'],
    crossVertical: {
      en: ['Direction and layout assessment from the Vastu section, where required'],
      te: ['అవసరమైనప్పుడు వాస్తు విభాగం నుండి దిశ, ప్రణాళిక పరిశీలన'],
    },
    value: {
      en: 'A combined assessment of the house or flat number and the proposed housewarming date, with relevant Vastu considerations where required.',
      te: 'ఇల్లు లేదా ఫ్లాట్ సంఖ్యతో పాటు గృహప్రవేశ తేదీని కలిపి పరిశీలించడం. అవసరమైనప్పుడు సంబంధిత వాస్తు అంశాలను కూడా పరిగణించవచ్చు.',
    },
  },
];

const faqs: Vertical['faqs'] = [
  {
    id: 'legal',
    q: {
      en: 'Do I have to legally change my name after a spelling correction?',
      te: 'స్పెల్లింగ్ సవరణ తర్వాత పేరును చట్టబద్ధంగా మార్చుకోవాలా?',
    },
    a: {
      en: 'A numerology spelling assessment and a legal name change are separate matters. A numerology consultation can examine the name or spelling you intend to use. Any legal change to official records is a separate administrative or legal process.',
      te: 'సంఖ్యా శాస్త్రపరమైన స్పెల్లింగ్ పరిశీలన మరియు చట్టబద్ధమైన పేరు మార్పు రెండు వేర్వేరు విషయాలు. మీరు ఉపయోగించాలనుకుంటున్న పేరు లేదా స్పెల్లింగ్‌ను సంఖ్యా శాస్త్రపరంగా పరిశీలించవచ్చు. అధికారిక పత్రాల్లో పేరు మార్పు మాత్రం ప్రత్యేకమైన పరిపాలనా లేదా చట్టపరమైన ప్రక్రియ.',
    },
  },
  {
    id: 'destiny',
    q: {
      en: 'How is a Destiny Number different from a Name Number?',
      te: 'భాగ్య సంఖ్యకూ, నామ సంఖ్యకూ తేడా ఏమిటి?',
    },
    a: {
      en: 'In the method used here, the Destiny Number is derived from the complete date of birth, while the Name Number is derived from the letters of the name being assessed.',
      te: 'ఇక్కడ ఉపయోగించే విధానంలో భాగ్య సంఖ్య పూర్తి జనన తేదీ ఆధారంగా నిర్ణయించబడుతుంది. నామ సంఖ్య మాత్రం పరిశీలిస్తున్న పేరు యొక్క అక్షరాల ఆధారంగా నిర్ణయించబడుతుంది.',
    },
  },
  {
    id: 'brandseparate',
    q: {
      en: 'Can I keep my existing business name and assess the brand name separately?',
      te: 'నా వ్యాపార పేరును అలాగే ఉంచుకుని బ్రాండ్ పేరును విడిగా పరిశీలించవచ్చా?',
    },
    a: {
      en: 'Yes. A registered business or company name and a brand name can be assessed as separate names when they are used separately.',
      te: 'అవును. నమోదిత వ్యాపార లేదా కంపెనీ పేరు, విడిగా ఉపయోగించే బ్రాండ్ పేరు రెండూ వేర్వేరు పేర్లుగా అవసరాన్ని బట్టి పరిశీలించవచ్చు.',
    },
  },
  {
    id: 'advance',
    q: {
      en: 'How far in advance should I get a date checked?',
      te: 'తేదీని ఎంత ముందుగా పరిశీలించుకోవాలి?',
    },
    a: {
      en: 'It is useful to contact us in advance according to the nature of the activity and the range of dates being considered. The appropriate process can then be explained based on the requirement.',
      te: 'కార్య స్వభావం మరియు పరిశీలించాల్సిన తేదీల పరిధిని బట్టి ముందుగానే సంప్రదించడం ఉపయోగకరం. అవసరాన్ని బట్టి తగిన విధానాన్ని తెలియజేస్తాం.',
    },
  },
  {
    id: 'systems',
    q: {
      en: 'Which numerology system do you use?',
      te: 'మీరు ఏ సంఖ్యా శాస్త్ర విధానం వాడతారు?',
    },
    a: {
      en: 'For name calculations, we use the Chaldean system. Different systems assign different numerical values to letters, so the system being used is stated clearly before the calculation.',
      te: 'పేరు లెక్కలకు కాల్డియన్ విధానాన్ని ఉపయోగిస్తాం. వేర్వేరు సంఖ్యా శాస్త్ర విధానాల్లో అక్షరాలకు వేర్వేరు సంఖ్యా విలువలు ఉండవచ్చు కాబట్టి, లెక్కకు ఉపయోగించే విధానాన్ని స్పష్టంగా తెలియజేస్తాం.',
    },
  },
  {
    id: 'mobilechange',
    q: {
      en: 'Is it worth changing a mobile number I have used for many years?',
      te: 'చాలా ఏళ్లుగా వాడుతున్న మొబైల్ నంబర్ మార్చాలా?',
    },
    a: {
      en: 'An existing number can be assessed before any decision is made. Whether a change is appropriate depends on the requirement and the relevant numerical assessment. No change is required merely because a number is being assessed.',
      te: 'ఇప్పటికే ఉపయోగిస్తున్న నంబర్‌ను ముందుగా సంఖ్యా శాస్త్రపరంగా పరిశీలించవచ్చు. మార్చాలా లేదా అనే నిర్ణయం అవసరం మరియు సంబంధిత పరిశీలనపై ఆధారపడి ఉంటుంది. కేవలం పరిశీలన చేయడం వల్ల నంబర్ మార్చడం తప్పనిసరి కాదు.',
    },
  },
];

export const numerologyVertical: Vertical = {
  id: 'numerology',
  path: '/services/numerology',
  icon: 'numerology',
  nameKey: 'v.numero.name',
  subKey: 'v.numero.sub',
  eyebrow: {
    en: 'Third of Five Main Areas',
    te: 'ఐదు ప్రధాన విభాగాల్లో మూడోది',
  },
  title: { en: 'Numerology', te: 'సంఖ్యా శాస్త్రం' },
  standfirst: {
    en: 'Birth-Date Numbers Are Fixed; Names and Other Numbers Can Be Assessed',
    te: 'జనన తేదీ ఆధారిత సంఖ్యలు స్థిరమైనవి; పేర్లు మరియు ఇతర సంఖ్యలను పరిశీలించవచ్చు',
  },
  lede: [
    {
      en: 'In the numerology method used here, the Birth Number and Destiny Number are derived from the date of birth and remain fixed. The Name Number is derived from the spelling of the name currently in use and can therefore be reassessed when the spelling is changed.',
      te: 'ఇక్కడ ఉపయోగించే సంఖ్యా శాస్త్ర విధానంలో జనన సంఖ్య మరియు భాగ్య సంఖ్య జనన తేదీ ఆధారంగా నిర్ణయించబడతాయి మరియు స్థిరంగా ఉంటాయి. నామ సంఖ్య ప్రస్తుతం ఉపయోగించే పేరు యొక్క స్పెల్లింగ్ ఆధారంగా నిర్ణయించబడుతుంది; అందువల్ల స్పెల్లింగ్ మారినప్పుడు దానిని తిరిగి పరిశీలించవచ్చు.',
    },
    {
      en: 'Other numbers, such as mobile, vehicle, house or flat numbers, may also be assessed according to the specific requirement.',
      te: 'మొబైల్, వాహనం, ఇల్లు లేదా ఫ్లాట్ సంఖ్య వంటి ఇతర సంఖ్యలను కూడా అవసరాన్ని బట్టి పరిశీలించవచ్చు.',
    },
    {
      en: 'The purpose of a numerology consultation is to examine the relevant numbers together and assess a name, number or date according to the applicable numerology principles.',
      te: 'సంఖ్యా శాస్త్ర సంప్రదింపులో సంబంధిత సంఖ్యలను పరస్పరం పరిశీలించి, వర్తించే సంఖ్యా శాస్త్ర సూత్రాల ప్రకారం పేరు, సంఖ్య లేదా తేదీకి సంబంధించిన అంశాలను పరిశీలించడం ప్రధాన ఉద్దేశం.',
    },
  ],
  framingTitle: {
    en: 'How a Numerology Consultation Works Here',
    te: 'ఇక్కడ సంఖ్యా శాస్త్ర సంప్రదింపు ఎలా జరుగుతుంది',
  },
  framing: [
    {
      en: 'We generally require your full date of birth, the name you currently use, and the specific name, number or date you are considering.',
      te: 'సాధారణంగా మీ పూర్తి జనన తేదీ, మీరు ప్రస్తుతం ఉపయోగిస్తున్న పేరు మరియు మీరు పరిశీలించాలనుకుంటున్న నిర్దిష్ట పేరు, సంఖ్య లేదా తేదీ అవసరం.',
    },
    {
      en: 'For name calculations, we use the Chaldean system. We state the system clearly because different numerology systems use different letter values and can therefore produce different calculations.',
      te: 'పేరు లెక్కలకు కాల్డియన్ విధానం ఉపయోగిస్తాం. వేర్వేరు సంఖ్యా శాస్త్ర విధానాల్లో అక్షరాలకు వేర్వేరు సంఖ్యా విలువలు ఉండవచ్చు కాబట్టి, ఉపయోగిస్తున్న విధానాన్ని స్పష్టంగా తెలియజేస్తాం.',
    },
    {
      en: 'Where a recommendation involves a name, number or date, the relevant calculation can be explained so that you can understand how the result has been reached.',
      te: 'పేరు, సంఖ్య లేదా తేదీకి సంబంధించిన సూచన ఉన్నప్పుడు, సంబంధిత లెక్కను కూడా వివరించవచ్చు. తద్వారా ఆ ఫలితం ఏ విధంగా వచ్చిందో మీరు అర్థం చేసుకోగలరు.',
    },
    {
      en: 'Consultations are available in Telugu or English, online or in person.',
      te: 'సంప్రదింపులు తెలుగులో లేదా ఆంగ్లంలో, ఆన్‌లైన్ లేదా ప్రత్యక్షంగా నిర్వహించబడతాయి.',
    },
  ],
  filterAll: { en: 'All Services', te: 'అన్ని సేవలు' },
  bundlesTitle: {
    en: 'Three Service Combinations That Can Work Together',
    te: 'కలిసి చేయగల మూడు సేవా కలయికలు',
  },
  bundlesLede: {
    en: 'Two or more related services may be considered together where appropriate to the requirement. The relevant services are discussed before the consultation.',
    te: 'అవసరాన్ని బట్టి రెండు లేదా అంతకంటే ఎక్కువ సంబంధిత సేవలను కలిపి పరిశీలించవచ్చు. ఏ సేవలు అవసరమో సంప్రదింపుకు ముందు నిర్ణయించవచ్చు.',
  },
  faqTitle: {
    en: 'Asked Before Many Numerology Consultations',
    te: 'సంఖ్యా శాస్త్ర సంప్రదింపులకు ముందు అడిగేవి',
  },
  feeLede: [
    {
      en: 'Duration and fees are communicated according to the requirement and scope of work before the consultation.',
      te: 'వ్యవధి, రుసుము అవసరాన్ని మరియు పని పరిధిని బట్టి, పని ప్రారంభించే ముందు తెలియజేయబడతాయి.',
    },
  ],
  ctaTitle: {
    en: 'Deciding on a Name, Number or Date?',
    te: 'పేరు, సంఖ్య లేదా తేదీపై నిర్ణయం తీసుకుంటున్నారా?',
  },
  ctaLede: {
    en: 'Tell us what you are considering, along with your date of birth and the relevant options. We can explain the applicable numerology assessment and the basis of the calculation.',
    te: 'మీరు పరిశీలిస్తున్న అంశం, మీ జనన తేదీ మరియు అవసరమైన ఎంపికలను పంపండి. వర్తించే సంఖ్యా శాస్త్ర పరిశీలన మరియు లెక్క ఏ విధంగా చేయబడుతుందో వివరిస్తాం.',
  },
  clusters,
  services,
  bundles,
  faqs,
};
