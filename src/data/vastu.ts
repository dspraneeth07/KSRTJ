import type { Vertical } from './verticalTypes';

/* ═══════════════════════════════════════════════════════════════════
   Vastu Shastra — fifteen services in four clusters.

   The clusters follow the stage the client is actually at: land not yet
   bought, a home, a commercial or industrial premises, or a building
   already standing. Each service carries its number, its name and what
   it covers — no expandable detail, because the page states what each
   service is rather than arguing for it.
   ═══════════════════════════════════════════════════════════════════ */

export const clusters: Vertical['clusters'] = [
  {
    id: 'before',
    label: { en: 'Before You Build', te: 'నిర్మాణానికి ముందు' },
    blurb: {
      en: 'Land, dimensions and planning — a stage where changes can generally be considered more easily.',
      te: 'స్థలం, కొలతలు మరియు ప్రణాళిక — సాధారణంగా మార్పులను ముందుగానే పరిగణించగల దశ.',
    },
  },
  {
    id: 'home',
    label: { en: 'Homes', te: 'నివాస గృహాలు' },
    blurb: {
      en: 'Independent houses, flats and apartments.',
      te: 'స్వతంత్ర ఇళ్లు, ఫ్లాట్లు మరియు అపార్ట్‌మెంట్లు.',
    },
  },
  {
    id: 'work',
    label: { en: 'Work & Industry', te: 'వ్యాపారం, పరిశ్రమ' },
    blurb: {
      en: 'From individual commercial spaces to larger establishments and industrial premises.',
      te: 'వ్యక్తిగత వాణిజ్య ప్రదేశాల నుండి పెద్ద సంస్థలు మరియు పారిశ్రామిక ప్రదేశాల వరకు.',
    },
  },
  {
    id: 'built',
    label: { en: 'Already Built', te: 'నిర్మించిన భవనాలు' },
    blurb: {
      en: 'Assessment, correction and comprehensive review for existing properties.',
      te: 'ఇప్పటికే ఉన్న భవనాలకు పరిశీలన, సవరణ మరియు సమగ్ర విశ్లేషణ.',
    },
  },
];

export const vastuServices: Vertical['services'] = [
  /* ── Before you build ───────────────────────────────────────── */
  {
    id: 'plot',
    index: 1,
    cluster: 'before',
    name: { en: 'Plot Vastu', te: 'స్థల వాస్తు' },
    definition: {
      en: 'Assessment of the site before construction, considering its direction, shape, slope, road relationship and other relevant Vastu factors.',
      te: 'నిర్మాణానికి ముందు స్థలాన్ని పరిశీలించి, దాని దిశ, ఆకారం, వాలు, రహదారి సంబంధం మరియు ఇతర సంబంధిత వాస్తు అంశాలను పరిగణనలోకి తీసుకోవడం.',
    },
  },
  {
    id: 'ayadi',
    index: 7,
    cluster: 'before',
    name: { en: 'Ayadi Ganitham', te: 'ఆయాది గణితం' },
    definition: {
      en: 'A traditional system of calculations concerned with building dimensions and proportions. It can be considered alongside directional and spatial Vastu when examining the dimensional aspects of a building.',
      te: 'భవన కొలతలు మరియు నిష్పత్తులకు సంబంధించిన సంప్రదాయ గణన విధానం. భవనంలోని కొలతలకు సంబంధించిన అంశాలను పరిశీలించేటప్పుడు దీనిని దిశలు మరియు స్థల అమరికకు సంబంధించిన వాస్తు అంశాలతో పాటు పరిగణించవచ్చు.',
    },
  },
  {
    id: 'newbuild',
    index: 14,
    cluster: 'before',
    name: { en: 'New Construction Planning', te: 'నూతన నిర్మాణ ప్రణాళిక' },
    definition: {
      en: 'Vastu guidance during the planning stage, based on the available architectural plan and the requirements of the proposed construction.',
      te: 'నిర్మాణ ప్రణాళిక దశలో, అందుబాటులో ఉన్న ఆర్కిటెక్చరల్ ప్రణాళిక మరియు నిర్మాణ అవసరాలను పరిగణనలోకి తీసుకుని వాస్తు మార్గదర్శకత్వం అందించడం.',
    },
  },

  /* ── Homes ──────────────────────────────────────────────────── */
  {
    id: 'house',
    index: 2,
    cluster: 'home',
    name: { en: 'House & Villa Vastu', te: 'ఇల్లు, విల్లా వాస్తు' },
    definition: {
      en: 'Vastu assessment for an independent residential structure, considering orientation, layout, room positions, proportions and other relevant aspects.',
      te: 'స్వతంత్ర నివాస నిర్మాణానికి వాస్తు పరిశీలన — దిశ, ప్రణాళిక, గదుల స్థానాలు, కొలతలు మరియు ఇతర సంబంధిత అంశాలను పరిగణనలోకి తీసుకోవడం.',
    },
  },
  {
    id: 'flat',
    index: 3,
    cluster: 'home',
    name: { en: 'Flat & Apartment Vastu', te: 'ఫ్లాట్, అపార్ట్‌మెంట్ వాస్తు' },
    definition: {
      en: 'Vastu assessment within the practical limits of an existing apartment or flat, including flat selection where required and possible adjustments within the available structure.',
      te: 'ఇప్పటికే ఉన్న ఫ్లాట్ లేదా అపార్ట్‌మెంట్‌లోని నిర్మాణ పరిమితులను పరిగణనలోకి తీసుకుని వాస్తు పరిశీలన చేయడం. అవసరమైనప్పుడు ఫ్లాట్ ఎంపిక మరియు అందుబాటులో ఉన్న మార్పులను కూడా పరిశీలించడం.',
    },
  },
  {
    id: 'entrance',
    index: 4,
    cluster: 'home',
    name: { en: 'Main Entrance Analysis', te: 'ముఖ ద్వార పరిశీలన' },
    definition: {
      en: 'Assessment of the position and arrangement of the main entrance in relation to the overall plan and other relevant Vastu considerations.',
      te: 'మొత్తం ప్రణాళిక మరియు ఇతర సంబంధిత వాస్తు అంశాలను పరిగణనలోకి తీసుకుని ప్రధాన ద్వారం స్థానం మరియు అమరికను పరిశీలించడం.',
    },
  },
  {
    id: 'zoning',
    index: 5,
    cluster: 'home',
    name: {
      en: 'Room Positioning & Zoning',
      te: 'గదుల స్థాన నిర్ణయం & జోన్ పరిశీలన',
    },
    definition: {
      en: 'Assessment of room locations and their relationship with the relevant areas or zones of the plan, considering the intended use of each space.',
      te: 'ప్రతి గది వినియోగాన్ని పరిగణనలోకి తీసుకుని, ప్రణాళికలోని సంబంధిత ప్రాంతాలు లేదా జోన్‌లతో గదుల స్థానాల సంబంధాన్ని పరిశీలించడం.',
    },
  },
  {
    id: 'water',
    index: 6,
    cluster: 'home',
    name: { en: 'Water & Drainage Vastu', te: 'నీరు, మురుగు నీటి స్థానం' },
    definition: {
      en: 'Assessment of water sources, storage, drainage and discharge locations in relation to the site and building plan.',
      te: 'నీటి వనరులు, నిల్వ, మురుగు నీటి ప్రవాహం మరియు బహిర్గమన స్థానాలను స్థలం మరియు భవన ప్రణాళికకు అనుగుణంగా పరిశీలించడం.',
    },
  },

  /* ── Work & industry ────────────────────────────────────────── */
  {
    id: 'shop',
    index: 8,
    cluster: 'work',
    name: { en: 'Shop & Office Vastu', te: 'దుకాణం, కార్యాలయ వాస్తు' },
    definition: {
      en: 'Vastu assessment for shops, clinics, studios, offices and other individual commercial spaces, considering the available interior arrangement and practical limitations.',
      te: 'దుకాణాలు, క్లినిక్‌లు, స్టూడియోలు, కార్యాలయాలు మరియు ఇతర వ్యక్తిగత వాణిజ్య ప్రదేశాలకు, అందుబాటులో ఉన్న అంతర్గత అమరిక మరియు నిర్మాణ పరిమితులను పరిగణనలోకి తీసుకుని వాస్తు పరిశీలన.',
    },
  },
  {
    id: 'commercial',
    index: 9,
    cluster: 'work',
    name: { en: 'Business & Commercial Vastu', te: 'వాణిజ్య వాస్తు' },
    definition: {
      en: 'Vastu assessment for larger commercial establishments such as showrooms, offices, hotels, hospitals and malls, with attention to overall planning, departments and functional areas.',
      te: 'షోరూమ్‌లు, కార్యాలయాలు, హోటళ్లు, ఆసుపత్రులు, మాల్స్ వంటి పెద్ద వాణిజ్య సంస్థలకు మొత్తం ప్రణాళిక, విభాగాలు మరియు వినియోగ ప్రాంతాలను పరిగణనలోకి తీసుకుని వాస్తు పరిశీలన.',
    },
  },
  {
    id: 'industrial',
    index: 10,
    cluster: 'work',
    name: { en: 'Industrial Vastu', te: 'పారిశ్రామిక వాస్తు' },
    definition: {
      en: 'Vastu assessment for industrial premises, considering the site, building arrangement, functional areas, process-related requirements and other relevant factors.',
      te: 'పారిశ్రామిక ప్రదేశాలకు స్థలం, భవన అమరిక, పని ప్రాంతాలు, ఉత్పత్తి సంబంధిత అవసరాలు మరియు ఇతర సంబంధిత అంశాలను పరిగణనలోకి తీసుకుని వాస్తు పరిశీలన.',
    },
  },
  {
    id: 'education',
    index: 11,
    cluster: 'work',
    name: { en: 'Educational Institution Vastu', te: 'విద్యా సంస్థల వాస్తు' },
    definition: {
      en: 'Vastu assessment for schools, colleges, coaching centres and other educational institutions, considering the overall layout and functional areas.',
      te: 'పాఠశాలలు, కళాశాలలు, కోచింగ్ కేంద్రాలు మరియు ఇతర విద్యా సంస్థలకు మొత్తం ప్రణాళిక మరియు వినియోగ ప్రాంతాలను పరిగణనలోకి తీసుకుని వాస్తు పరిశీలన.',
    },
  },

  /* ── Already built ──────────────────────────────────────────── */
  {
    id: 'dosha',
    index: 12,
    cluster: 'built',
    name: { en: 'Vastu Dosha Identification', te: 'వాస్తు దోష నిర్ధారణ' },
    definition: {
      en: 'Assessment of the property to identify relevant Vastu concerns and explain their nature and relative importance.',
      te: 'భవనాన్ని పరిశీలించి, సంబంధిత వాస్తు లోపాలు లేదా ఆందోళన కలిగించే అంశాలను గుర్తించి, వాటి స్వభావం మరియు సంబంధిత ప్రాధాన్యతను వివరించడం.',
    },
    note: {
      en: 'This service focuses on assessment. Remedial guidance can be provided separately where required.',
      te: 'ఈ సేవలో ప్రధానంగా పరిశీలనకు ప్రాధాన్యం ఉంటుంది. అవసరమైనప్పుడు పరిహార మార్గదర్శకత్వాన్ని విడిగా అందించవచ్చు.',
    },
  },
  {
    id: 'remedies',
    index: 13,
    cluster: 'built',
    name: { en: 'Vastu Remedies', te: 'వాస్తు పరిహారాలు' },
    definition: {
      en: 'Practical remedial guidance based on identified Vastu concerns. Wherever reasonably possible, simpler changes are considered before major structural alterations.',
      te: 'గుర్తించిన వాస్తు అంశాలకు అనుగుణంగా ఆచరణాత్మక పరిహార మార్గదర్శకత్వం అందించడం. సాధ్యమైనంతవరకు పెద్ద నిర్మాణ మార్పుల కంటే ముందుగా సులభమైన మార్పులను పరిగణిస్తాం.',
    },
  },
  {
    id: 'existing',
    index: 15,
    cluster: 'built',
    name: {
      en: 'Existing Building Vastu Analysis',
      te: 'ప్రస్తుత భవన విశ్లేషణ',
    },
    definition: {
      en: 'A comprehensive assessment of an existing property, including relevant Vastu observations and remedial guidance where required.',
      te: 'ఇప్పటికే నిర్మించిన భవనానికి సమగ్ర వాస్తు పరిశీలన. ఇందులో సంబంధిత వాస్తు అంశాల విశ్లేషణతో పాటు, అవసరమైన చోట పరిహార మార్గదర్శకత్వం కూడా ఉంటుంది.',
    },
  },
];

/* ── Bundles ── */

export const bundles: Vertical['bundles'] = [
  {
    id: 'newbuild',
    name: { en: 'New Construction', te: 'నూతన నిర్మాణం' },
    includes: ['plot', 'ayadi', 'newbuild'],
    value: {
      en: 'Site assessment, dimensional considerations and construction planning considered together from the beginning.',
      te: 'స్థల పరిశీలన, కొలతలకు సంబంధించిన అంశాలు మరియు నిర్మాణ ప్రణాళికను ప్రారంభం నుంచే కలిపి పరిశీలించడం.',
    },
  },
  {
    id: 'occupied',
    name: { en: 'Occupied Property Correction', te: 'నివాస భవన సవరణ' },
    includes: ['existing', 'water', 'entrance'],
    value: {
      en: 'A combined assessment for an occupied property, including the overall building assessment and specific attention to water and the main entrance where relevant.',
      te: 'ఇప్పటికే నివాసంలో ఉన్న భవనానికి సమగ్ర పరిశీలనతో పాటు, అవసరాన్ని బట్టి నీరు మరియు ప్రధాన ద్వారాన్ని ప్రత్యేకంగా పరిశీలించే సమగ్ర విధానం.',
    },
  },
  {
    id: 'commercial',
    name: { en: 'Commercial Launch', te: 'వాణిజ్య ప్రారంభం' },
    includes: ['commercial', 'entrance'],
    /* Named rather than linked: these two belong to other verticals. */
    crossVertical: {
      en: ['Muhurta from Jyotisha', 'Name assessment from Numerology'],
      te: ['జ్యోతిష విభాగం నుండి ముహూర్తం', 'సంఖ్యా శాస్త్రం నుండి నామ పరిశీలన'],
    },
    value: {
      en: 'A combined approach for commercial premises, entrance, opening timing and business naming, using the relevant services together where required.',
      te: 'వాణిజ్య ప్రదేశం, ప్రవేశం, ప్రారంభ సమయం మరియు వ్యాపార నామానికి సంబంధించిన అంశాలను అవసరాన్ని బట్టి సంబంధిత సేవలతో కలిపి పరిశీలించడం.',
    },
  },
];

/* ── FAQs ── */

export const faqs: Vertical['faqs'] = [
  {
    id: 'demolition',
    q: {
      en: 'Can Vastu concerns be addressed without demolition?',
      te: 'కూల్చివేత లేకుండా వాస్తు సమస్యలను సరిచేయవచ్చా?',
    },
    a: {
      en: 'In many situations, practical changes can be considered before structural changes. The appropriate approach depends on the nature of the property and the specific concern. Major structural changes are considered only where they are relevant to the particular situation.',
      te: 'చాలా సందర్భాల్లో ముందుగా ఆచరణాత్మక మార్పులను పరిగణించవచ్చు. అయితే సరైన విధానం భవనం స్వభావం మరియు గుర్తించిన అంశంపై ఆధారపడి ఉంటుంది. పెద్ద నిర్మాణ మార్పులను సంబంధిత పరిస్థితిని బట్టి మాత్రమే పరిశీలిస్తాం.',
    },
  },
  {
    id: 'online',
    q: {
      en: 'Is an online Vastu consultation based on photographs and floor plans reliable?',
      te: 'ఫోటోలు, ప్రణాళికల ఆధారంగా ఆన్‌లైన్ వాస్తు సంప్రదింపు ఎంతవరకు ఉపయోగకరంగా ఉంటుంది?',
    },
    a: {
      en: 'The usefulness of an online assessment depends on the quality and completeness of the information provided. Clear floor plans, photographs, measurements and directional details can support the assessment. Where a physical site visit is more appropriate, that will be explained.',
      te: 'ఆన్‌లైన్ పరిశీలన ఉపయోగకరత అందించిన వివరాల నాణ్యత మరియు పూర్తి స్థాయిపై ఆధారపడి ఉంటుంది. స్పష్టమైన ఫ్లోర్ ప్లాన్, ఫోటోలు, కొలతలు మరియు దిశలకు సంబంధించిన వివరాలు ఉంటే పరిశీలనకు సహాయపడుతుంది. ప్రత్యక్ష స్థల పరిశీలన అవసరమైతే, ఆ విషయాన్ని ముందుగానే తెలియజేస్తాం.',
    },
  },
  {
    id: 'ayadi',
    q: {
      en: 'How is Ayadi Ganitham different from directional Vastu?',
      te: 'ఆయాది గణితం దిక్కుల వాస్తు కంటే ఎలా భిన్నం?',
    },
    a: {
      en: 'Ayadi Ganitham is concerned primarily with traditional calculations relating to building dimensions and proportions. Directional and spatial Vastu considers directions, locations and the arrangement of spaces. They can therefore be considered as related aspects of Vastu.',
      te: 'ఆయాది గణితం ప్రధానంగా భవన కొలతలు మరియు నిష్పత్తులకు సంబంధించిన సంప్రదాయ గణన విధానం. దిశలు మరియు స్థల అమరికకు సంబంధించిన వాస్తు పరిశీలనలో దిశలు, స్థానాలు మరియు ప్రణాళికకు సంబంధించిన అంశాలను పరిగణిస్తారు. అందువల్ల ఇవి పరస్పర సంబంధం ఉన్నప్పటికీ భిన్నమైన అంశాలుగా పరిగణించవచ్చు.',
    },
  },
  {
    id: 'flatfixed',
    q: {
      en: "My flat's plumbing and walls are fixed by the builder. Is Vastu still possible?",
      te: 'నా ఫ్లాట్‌లో ప్లంబింగ్, గోడలు బిల్డర్ నిర్ణయించారు. అసలు వాస్తు సాధ్యమేనా?',
    },
    a: {
      en: 'An assessment can still be made within the existing structural limitations. The guidance will focus on aspects that can reasonably be considered or changed.',
      te: 'ఇప్పటికే ఉన్న నిర్మాణ పరిమితుల్లో కూడా వాస్తు పరిశీలన చేయవచ్చు. ఆచరణలో సాధ్యమైన అంశాలు మరియు మార్పులపైనే మార్గదర్శకత్వం ఇవ్వబడుతుంది.',
    },
  },
  {
    id: 'conflict',
    q: {
      en: 'Two consultants have given me opposite advice. How do I judge?',
      te: 'ఇద్దరు వాస్తు సలహాదారులు వ్యతిరేక సూచనలు ఇచ్చారు. ఎలా నిర్ణయించుకోవాలి?',
    },
    a: {
      en: 'Ask what principle, measurement or method each recommendation is based on. The explanation should be clear enough for you to understand the basis of the suggestion and the practical change being proposed.',
      te: 'ప్రతి సూచన ఏ సూత్రం, కొలత లేదా విధానంపై ఆధారపడి ఉందో అడగండి. సూచన ఎందుకు ఇస్తున్నారో, దాని ఆధారం ఏమిటో మరియు ఏ మార్పు సూచిస్తున్నారో స్పష్టంగా తెలుసుకోవడం ఉపయోగకరం.',
    },
  },
  {
    id: 'chart',
    q: {
      en: 'Do you need my birth chart for a Vastu consultation?',
      te: 'వాస్తు సంప్రదింపుకు నా జాతకం అవసరమా?',
    },
    a: {
      en: 'A birth chart is not generally required for a Vastu consultation. If another related service is relevant to your requirement, that can be discussed separately.',
      te: 'సాధారణంగా వాస్తు సంప్రదింపుకు జన్మ జాతకం అవసరం లేదు. మీ అవసరానికి సంబంధించి మరొక అనుబంధ సేవ అవసరమైతే, దానిని విడిగా చర్చించవచ్చు.',
    },
  },
];

export const vastuVertical: Vertical = {
  id: 'vastu',
  path: '/services/vastu',
  icon: 'vastu',
  nameKey: 'v.vastu.name',
  subKey: 'v.vastu.sub',
  title: { en: 'Vastu Shastra', te: 'వాస్తు శాస్త్రం' },
  standfirst: {
    en: 'A Traditional Discipline Based on Space, Direction and Measurement',
    te: 'స్థలం, దిశలు మరియు కొలతలకు సంబంధించిన సంప్రదాయ శాస్త్రం',
  },
  lede: [
    {
      en: 'Vastu Shastra is a traditional discipline concerned with the relationship between a site, its directions, dimensions, layout and use.',
      te: 'వాస్తు శాస్త్రం అనేది స్థలం, దిశలు, కొలతలు, నిర్మాణ ప్రణాళిక మరియు వినియోగానికి సంబంధించిన సంప్రదాయ శాస్త్రం.',
    },
    {
      en: 'Where measurement is relevant, we consider available site details, drawings, dimensions and directional information. Where a traditional principle does not provide a clear basis for a conclusion, we avoid making an unsupported claim and explain the matter accordingly.',
      te: 'కొలతలు అవసరమైన చోట అందుబాటులో ఉన్న స్థల వివరాలు, ప్రణాళికలు, కొలతలు మరియు దిశలకు సంబంధించిన సమాచారాన్ని పరిగణనలోకి తీసుకుంటాం. ఏదైనా సంప్రదాయ సూత్రానికి స్పష్టమైన ఆధారం లేని చోట, ఆధారం లేని నిర్ధారణ చేయకుండా ఆ విషయాన్ని తగిన విధంగా తెలియజేస్తాం.',
    },
  ],
  framingTitle: {
    en: 'What a Vastu Consultation Here Involves',
    te: 'ఇక్కడ వాస్తు సంప్రదింపు అంటే ఏమిటి',
  },
  framing: [
    {
      en: "We work with available drawings, measurements and directional information. Where required, the direction of the site may also be checked using an appropriate instrument rather than relying only on the direction shown on a builder's drawing.",
      te: 'అందుబాటులో ఉన్న ప్రణాళికలు, కొలతలు మరియు దిశలకు సంబంధించిన వివరాల ఆధారంగా పరిశీలన చేస్తాం. అవసరమైనప్పుడు బిల్డర్ ప్రణాళికలో చూపిన ఉత్తర దిశపై మాత్రమే ఆధారపడకుండా, తగిన పరికరం ద్వారా స్థల దిశను కూడా పరిశీలించవచ్చు.',
    },
    {
      en: 'Identified aspects are explained according to their relevance. Where changes are suggested, practical and reasonably possible modifications are considered before more extensive structural changes.',
      te: 'గుర్తించిన అంశాలను వాటి సంబంధిత ప్రాధాన్యతను బట్టి వివరిస్తాం. మార్పులు అవసరమైనప్పుడు, సాధ్యమైనంతవరకు ముందుగా సులభమైన ఆచరణాత్మక మార్పులను పరిగణించి, తరువాత అవసరమైతే నిర్మాణపరమైన మార్పులను పరిశీలిస్తాం.',
    },
    {
      en: 'The purpose is to identify the relevant Vastu considerations and provide practical guidance according to the property and the requirement.',
      te: 'మీ స్థలం లేదా భవనానికి సంబంధించిన వాస్తు అంశాలను గుర్తించి, అవసరానికి అనుగుణంగా ఆచరణాత్మక మార్గదర్శకత్వం అందించడం ప్రధాన ఉద్దేశం.',
    },
  ],
  filterAll: { en: 'All Services', te: 'అన్ని సేవలు' },
  bundlesTitle: {
    en: 'Three Service Sequences That Can Work Together',
    te: 'కలిసి చేయగల మూడు సేవా క్రమాలు',
  },
  bundlesLede: {
    en: 'These are combinations of related services that may be considered together where doing so is appropriate to the requirement.',
    te: 'ఇవి సంబంధిత సేవలను అవసరాన్ని బట్టి కలిపి పరిశీలించడానికి ఉపయోగపడే క్రమాలు.',
  },
  faqTitle: {
    en: 'Asked Before Many Consultations',
    te: 'చాలా సంప్రదింపులకు ముందు అడిగేవి',
  },
  feeLede: [
    {
      en: 'Duration and fees are communicated according to the requirement and scope of work before the work begins.',
      te: 'వ్యవధి మరియు రుసుము అవసరం మరియు పని పరిధిని బట్టి, పని ప్రారంభించే ముందు తెలియజేయబడతాయి.',
    },
    {
      en: 'For site visits outside Wanaparthy district, applicable travel expenses are charged on an actual basis.',
      te: 'వనపర్తి జిల్లా వెలుపల స్థల సందర్శనలకు వర్తించే ప్రయాణ ఖర్చులు వాస్తవ ప్రాతిపదికన వసూలు చేయబడతాయి.',
    },
  ],
  ctaTitle: {
    en: 'Not Sure Which of the Fifteen Services You Need?',
    te: 'పదిహేనింటిలో ఏ సేవ కావాలో స్పష్టత లేదా?',
  },
  ctaLede: {
    en: 'Describe the property and the concern in two or three lines. We will help identify the service relevant to your requirement and explain if any of the listed services may not be necessary.',
    te: 'భవనం మరియు మీకు ఉన్న సమస్య లేదా అవసరం గురించి రెండు లేదా మూడు వాక్యాల్లో చెప్పండి. మీ అవసరానికి సంబంధిత సేవ ఏదో, జాబితాలోని ఏ సేవలు అవసరం ఉండకపోవచ్చో కూడా తెలియజేస్తాం.',
  },
  clusters,
  services: vastuServices,
  bundles,
  faqs,
};
