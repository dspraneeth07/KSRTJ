/**
 * Bilingual string table.
 *
 * `en` is the source of truth: its keys generate `StringKey`, and `te` is
 * typed as `Record<StringKey, string>` — so a missing or misspelled Telugu
 * key is a compile error, not a blank space discovered in production.
 *
 * The Telugu is written in a formal వ్యావహారిక–గ్రాంథిక middle register — the
 * way a professional practice writes — rather than a literal rendering of the
 * English. Sanskrit technical terms (జాతకం, ముహూర్తం, ఆయాది గణితం, గోచారం,
 * దశ–భుక్తి) are deliberately kept in Sanskrit in both languages.
 *
 * Bracketed [...] values are PLACEHOLDERS awaiting real client detail.
 */

export const en = {
  'a11y.skip': 'Skip to content',

  'utility.hours': 'Consultations · Mon–Sat, 9:00–18:00 IST · Online & in person',
  'utility.call': '+91 00000 00000',

  'brand.name': 'Sanātana Vidyā Kendra',
  'brand.tag': 'Institute of Vedic Sciences',

  'nav.services': 'Services',
  'nav.approach': 'Approach',
  'nav.process': 'Process',
  'nav.institutional': 'Institutions',
  'nav.courses': 'Training',
  'nav.about': 'About',
  'nav.menu': 'Menu',
  'nav.close': 'Close',

  'cta.book': 'Book a consultation',
  'cta.howItWorks': 'See how a consultation works',
  'cta.explore': 'Explore the discipline',
  'cta.enquire': 'Explore this field',
  'cta.requestFee': 'Request the fee schedule',
  'cta.readFull': 'Read the full profile',
  'cta.instBrief': 'Get in touch',
  'cta.whatsapp': 'Ask on WhatsApp',
  'cta.eyebrow': 'Contact',
  'cta.title': 'Get in touch.',
  'cta.lede':
    'Choose the service or course, decide whether you would prefer it online or in person, and message us on WhatsApp to arrange a time.',
  'cta.foot': 'WhatsApp · Phone · Email',

  'hero.eyebrow': 'Vastu Shastra · Jyotisha · Numerology · Spiritual & Vedic Studies',
  'hero.title': 'Study, practice, and teaching.',
  'hero.lede':
    'A centre for the systematic study of Vastu Shastra, Jyotisha, Numerology and the spiritual and Vedic disciplines — applying them in practice, and teaching them to those who wish to learn.',
  'hero.foot':
    'Consultations · Personal guidance · Structured training · Wanaparthy, Telangana',

  'trust.title': 'Experience in practice and study',
  'trust.body':
    'Continuous study, practice and teaching across Vastu Shastra, Jyotisha, Numerology and the related spiritual disciplines.',

  'pillars.eyebrow': 'Fields of study',
  'pillars.title': 'Our principal fields of study.',
  'pillars.lede':
    'Four related disciplines, each studied on its own terms and applied together where a question genuinely calls for more than one of them.',

  'v.vastu.name': 'Vastu Shastra',
  'v.vastu.sub': 'The science of built space',
  'v.vastu.desc':
    'Study, examination and guidance covering plots, houses and construction — directions, measurements, Ayadi Ganitham and the related principles of Vastu.',
  'v.vastu.count': 'Consultation & training',

  'v.jyotisha.name': 'Jyotisha',
  'v.jyotisha.sub': 'The science of time and disposition',
  'v.jyotisha.desc':
    'Study and practice covering the birth chart, rashi and nakshatra, houses and planets, dashas, gochara, Prashna Jyotisham and Muhurtham.',
  'v.jyotisha.count': 'Consultation & training',

  'v.numero.name': 'Numerology',
  'v.numero.sub': 'The science of number and name',
  'v.numero.desc':
    'Study of the birth number, destiny number and name number, along with names, spelling, naming and numeric compatibility.',
  'v.numero.count': 'Consultation & training',

  'v.swara.name': 'Spiritual & Vedic Studies',
  'v.swara.sub': 'Mantra, meditation, swara and self-knowledge',
  'v.swara.desc':
    'Guidance for the systematic study of mantra, meditation, swara sadhana, subjects relating to self-knowledge, and other spiritual disciplines.',
  'v.swara.count': 'Guidance & study',

  's.vastu.1': 'Plot Vastu — direction, shape, slope, road frontage',
  's.vastu.2': 'House & villa Vastu',
  's.vastu.3': 'Flat & apartment Vastu',
  's.vastu.4': 'Main entrance analysis',
  's.vastu.5': 'Room positioning & zoning',
  's.vastu.6': 'Water & drainage placement',
  's.vastu.7': 'Ayadi Ganitham',
  's.vastu.8': 'Shop & office Vastu',
  's.vastu.9': 'Commercial Vastu',
  's.vastu.10': 'Industrial Vastu',
  's.vastu.11': 'Educational institution Vastu',
  's.vastu.12': 'Dosha identification',
  's.vastu.13': 'Remedies without demolition',
  's.vastu.14': 'New construction planning',
  's.vastu.15': 'Existing building analysis',

  's.jyo.1': 'Birth chart analysis (Janma Jataka)',
  's.jyo.2': 'Education & knowledge path',
  's.jyo.3': 'Career & profession',
  's.jyo.4': 'Business & financial standing',
  's.jyo.5': 'Income, property & wealth yogas',
  's.jyo.6': 'Marriage & married life',
  's.jyo.7': 'Compatibility (Guna Milan)',
  's.jyo.8': 'Progeny & children',
  's.jyo.9': 'Family & relationships',
  's.jyo.10': 'Health astrology',
  's.jyo.11': 'Foreign travel & settlement',
  's.jyo.12': 'Dasha–bhukti & gochara',
  's.jyo.13': 'Life-event timing',
  's.jyo.14': 'Prashna Jyotisham',
  's.jyo.15': 'Muhurtham',
  's.jyo.16': 'Naming by Nakshatra & Pada',
  's.jyo.17': 'Remedial measures',

  's.num.1': 'Personal name & spelling correction',
  's.num.2': 'Child naming',
  's.num.3': 'Marriage compatibility by number',
  's.num.4': 'Business name',
  's.num.5': 'Company & institution name',
  's.num.6': 'Brand name',
  's.num.7': 'Mobile number compatibility',
  's.num.8': 'Vehicle number compatibility',
  's.num.9': 'House & flat number compatibility',
  's.num.10': 'Auspicious date selection',
  's.num.11': 'Signature analysis',

  's.swa.1': 'Mantra, meditation and swara sadhana',
  's.swa.2': 'Self-knowledge and related study',

  's.course.1': 'Vastu Shastra — foundational principles',
  's.course.2': 'Jyotisha Shastra — foundational principles',
  's.course.3': 'Numerology — foundational principles',
  's.course.4': 'Spiritual & Vedic Studies',

  'mega.seeAll': 'See details',
  'mega.training': 'Training',

  'sig.eyebrow': 'Services',
  'sig.title': 'Principal services',
  'sig.lede':
    'The services most often asked for. A fuller list for each discipline is on its own page.',
  'sig.1.name': 'Plot & new-construction Vastu',
  'sig.1.desc':
    'Orientation, shape, slope, road frontage and Ayadi compatibility assessed before purchase or before the foundation is laid — the one stage where correction costs nothing.',
  'sig.1.dur': '90 minutes + site visit',
  'sig.2.name': 'Complete birth chart analysis',
  'sig.2.desc':
    'Janma Jataka read in full — disposition, education, career, wealth, marriage, progeny and health — with the running dasha and the next three years of gochara mapped against it.',
  'sig.2.dur': '90 minutes',
  'sig.3.disc': 'Jyotisha + Numerology',
  'sig.3.name': 'Marriage compatibility',
  'sig.3.desc':
    'Guna Milan across the eight kutas, read together with Mangala dosha and the seventh house of both charts. Where it helps, the numeric side is examined alongside.',
  'sig.3.dur': '60 minutes',
  'sig.4.name': 'Business & brand naming',
  'sig.4.desc':
    'Candidate names evaluated on numeric value, pronounceability in Telugu and English, promoter chart fit, and a check against the registrar and trademark record before we shortlist.',
  'sig.4.dur': 'Two sittings',
  'sig.5.name': 'Muhurtham & date selection',
  'sig.5.desc':
    'Auspicious timing for marriage, griha pravesh, registration, launch or foundation — fixed against the principals’ charts and the panchanga, with two alternates for practicality.',
  'sig.5.dur': '45 minutes',
  'sig.6.disc': 'Institutional',
  'sig.6.name': 'Commercial & industrial Vastu audit',
  'sig.6.desc':
    'Full-site audit for factories, showrooms, offices, schools and hospitals. Findings are issued as a drawing-level report your architect can build from, with phased remedies.',
  'sig.6.dur': 'Scoped per site',
  'sig.fee': 'Duration and fees are shared according to the requirement, before any work begins.',

  'meta.duration': 'Duration',
  'meta.mode': 'Mode',
  'meta.output': 'Deliverable',
  'meta.medium': 'Medium',
  'mode.inPerson': 'In person',
  'mode.online': 'Online',
  'mode.both': 'Online or in person',
  'out.report': 'Written report',
  'out.shortlist': 'Shortlist & rationale',
  'out.dates': 'Dated note with alternates',
  'out.audit': 'Audit report & markups',
  'medium.both': 'Telugu & English',

  'process.eyebrow': 'Method',
  'process.title': 'How a consultation works.',
  'process.lede':
    'The same five stages apply whichever discipline the question belongs to.',
  'process.1.name': 'Gathering details',
  'process.1.desc':
    'We collect the birth details, site details or other information the question requires. Where a birth time is uncertain, we say so.',
  'process.2.name': 'Preliminary examination',
  'process.2.desc':
    'The relevant chart, Vastu plan or numeric details are examined in advance of the sitting.',
  'process.3.name': 'Consultation',
  'process.3.desc':
    'The matter is discussed in detail, online or in person, in Telugu or English. Findings are explained with the reasoning behind them.',
  'process.4.name': 'Written notes',
  'process.4.desc':
    'Where the work calls for it, the findings and recommendations are provided in writing.',
  'process.5.name': 'Follow-up',
  'process.5.desc':
    'Further guidance is offered according to the need.',

  'founder.eyebrow': 'The practice',
  'founder.title': 'Sri K. Sreenivasa Reddy',
  'founder.role': 'Founder & Principal Guide',
  'founder.p1':
    'This centre was begun out of a sustained interest in the study, practice and teaching of Vastu Shastra, Jyotisha, Numerology and the related spiritual and Vedic disciplines.',
  'founder.p2':
    'Consultations and classes are conducted personally. The questions people bring are rarely divided by discipline — a house, a marriage and a decision about work often arrive together — so the four fields are studied and applied alongside one another.',
  'founder.cred1': 'M.A. in Astrology',
  'founder.cred2': 'Ph.D. scholar — research in progress',
  'founder.credLabel': 'Qualifications',
  'founder.alt': 'Sri K. Sreenivasa Reddy at his desk',

  'inst.eyebrow': 'For organisations',
  'inst.title': 'Institutions and commercial premises.',
  'inst.lede':
    'Vastu examination and guidance is offered, according to the requirement, for institutions, educational premises, commercial spaces and other buildings.',
  'inst.1.name': 'Real estate & developers',
  'inst.1.desc':
    'Layout-stage review of plotting, road orientation, common areas and unit-level Vastu, so that saleable inventory is not compromised after approval.',
  'inst.2.name': 'Corporate & commercial',
  'inst.2.desc':
    'Office floor plates, seating zones, cabins, reception and server placement, reviewed alongside the promoters’ charts and the entity’s naming.',
  'inst.3.name': 'Industrial',
  'inst.3.desc':
    'Plant layout, machinery orientation, raw material and finished goods storage, effluent and water positioning — coordinated with your process engineer.',
  'inst.4.name': 'Educational institutions',
  'inst.4.desc':
    'Classroom orientation, library, laboratory and administrative zoning for schools and colleges, planned around the academic calendar.',
  'inst.ctaText': 'Get in touch with the details and we will tell you what is involved.',

  'courses.eyebrow': 'Training',
  'courses.title': 'Training & study programmes',
  'courses.lede':
    'Taught in small batches, in Telugu and English, from the primary texts. Open to anyone who wishes to study these subjects seriously.',
  'courses.1.desc':
    'Directions, the Vastu Purusha mandala, measurement, Ayadi Ganitham, entrance determination and the foundational principles of Vastu.',
  'courses.2.desc':
    'Rashi and nakshatra, houses, planets and lordship, yogas, the dasha system and the basics of reading a birth chart.',
  'courses.3.desc':
    'Birth number, destiny number and name number, names, numeric compatibility and the methods used in practice.',
  'courses.4.name': 'Spiritual & Vedic Studies',
  'courses.4.desc':
    'Spiritual study, meditation, mantra, swara sadhana and related subjects, taken at a pace that suits the student.',
  'courses.dur': 'Depends on the course',
  'courses.mode': 'Online or in person',
  'courses.certLabel': 'Certificate',
  'courses.cert': 'Course Completion Certificate',


  'faq.eyebrow': 'Before you book',
  'faq.title': 'Common questions',
  'faq.1.q': 'Do I need to know my exact birth time?',
  'faq.1.a':
    'It helps considerably, but it is not a precondition. Where the time is uncertain or unrecorded, we say so, and work within that limitation rather than around it.',
  'faq.2.q': 'Will you ask me to demolish part of my house?',
  'faq.2.a':
    'Almost never. Remedies are proposed in ascending order of cost: use and orientation first, then material and placement changes, and structural alteration only where the defect is severe and nothing else will address it.',
  'faq.3.q': 'Is an online consultation as reliable as an in-person one?',
  'faq.3.a':
    'For Jyotisha, Numerology and Muhurtham, yes — the inputs are documents, not the room. Vastu for an existing building requires a site visit or, at minimum, dimensioned drawings with a verified north.',
  'faq.4.q': 'Can the consultation and the report be in Telugu?',
  'faq.4.a':
    'Yes. Both the sitting and any written notes are available in Telugu or English. Technical terms are retained in Sanskrit in both.',
  'faq.5.q': 'Do you guarantee outcomes?',
  'faq.5.a':
    'No. Examination and guidance are offered on the basis of the Jyotisha, Vastu and Numerology traditions. No guarantee is given about future outcomes.',

  'footer.disciplines':
    'Vastu Shastra | Jyotisha | Numerology | Spiritual & Vedic Studies',
  'footer.blurb':
    'A centre for the study, practice and teaching of the Vedic disciplines.',
  'footer.location': 'Location',
  'footer.reach': 'Contact',
  'footer.practice': 'Practice',
  'footer.faq': 'Questions',
  'footer.contact': 'Contact',
  'footer.addr': 'KDR Nagar · Wanaparthy · Telangana, India',
  'footer.copy': '© 2026 Sanātana Vidyā Kendra. All rights reserved.',
} as const;

export type StringKey = keyof typeof en;

export const te: Record<StringKey, string> = {
  'a11y.skip': 'విషయానికి వెళ్లండి',

  'utility.hours': 'సంప్రదింపులు · సోమ–శని, ఉదయం 9:00 – సాయంత్రం 6:00 · ఆన్‌లైన్ మరియు ప్రత్యక్షంగా',
  'utility.call': '+91 00000 00000',

  'brand.name': 'సనాతన విద్యా కేంద్రం',
  'brand.tag': 'వేద శాస్త్ర సంస్థ',

  'nav.services': 'సేవలు',
  'nav.approach': 'విధానం',
  'nav.process': 'ప్రక్రియ',
  'nav.institutional': 'సంస్థలకు',
  'nav.courses': 'శిక్షణ',
  'nav.about': 'మా గురించి',
  'nav.menu': 'మెనూ',
  'nav.close': 'మూసివేయండి',

  'cta.book': 'సంప్రదింపు నమోదు',
  'cta.howItWorks': 'సంప్రదింపు ఎలా జరుగుతుంది',
  'cta.explore': 'ఈ శాస్త్రం గురించి',
  'cta.enquire': 'ఈ విభాగం గురించి',
  'cta.requestFee': 'రుసుము వివరాలు కోరండి',
  'cta.readFull': 'పూర్తి పరిచయం చదవండి',
  'cta.instBrief': 'సంప్రదించండి',
  'cta.whatsapp': 'వాట్సాప్‌లో అడగండి',
  'cta.eyebrow': 'సంప్రదించండి',
  'cta.title': 'సంప్రదించండి.',
  'cta.lede':
    'సేవ లేదా కోర్సును ఎంచుకోండి; ఆన్‌లైన్ లేదా ప్రత్యక్ష సంప్రదింపును ఎంచుకోండి; సమయం కోసం వాట్సాప్ ద్వారా సంప్రదించండి.',
  'cta.foot': 'వాట్సాప్ · ఫోన్ · ఈమెయిల్',

  'hero.eyebrow': 'వాస్తు శాస్త్రం · జ్యోతిష శాస్త్రం · సంఖ్యా శాస్త్రం · ఆధ్యాత్మిక & వేద విద్యలు',
  'hero.title': 'అధ్యయనం, ఆచరణ, బోధన.',
  'hero.lede':
    'వాస్తు, జ్యోతిష్యం, సంఖ్యా శాస్త్రం మరియు ఆధ్యాత్మిక–వేద విద్యలను క్రమబద్ధంగా అధ్యయనం చేసి, ఆచరణలో ఉపయోగిస్తూ, ఆసక్తి ఉన్న వారికి శిక్షణ అందించే విద్యా కేంద్రం.',
  'hero.foot':
    'ఆచరణాత్మక సేవలు · వ్యక్తిగత మార్గదర్శనం · క్రమబద్ధమైన శిక్షణ · వనపర్తి, తెలంగాణ',

  'trust.title': 'ఆచరణ మరియు అధ్యయన అనుభవం',
  'trust.body':
    'వాస్తు, జ్యోతిష్యం, సంఖ్యా శాస్త్రం మరియు సంబంధిత విద్యలపై నిరంతర అధ్యయనం, ఆచరణ మరియు బోధన.',

  'pillars.eyebrow': 'విద్యా విభాగాలు',
  'pillars.title': 'మా ప్రధాన విద్యా విభాగాలు.',
  'pillars.lede':
    'నాలుగు సంబంధిత శాస్త్రాలు — ప్రతి ఒక్కటీ విడిగా అధ్యయనం చేస్తూ, ఒక ప్రశ్నకు ఒకటి కంటే ఎక్కువ అవసరమైన చోట వాటిని కలిపి పరిశీలిస్తాం.',

  'v.vastu.name': 'వాస్తు శాస్త్రం',
  'v.vastu.sub': 'నిర్మాణ స్థల శాస్త్రం',
  'v.vastu.desc':
    'స్థలం, గృహం, నిర్మాణం, దిక్కులు, కొలతలు, ఆయాది గణితం మరియు సంబంధిత వాస్తు అంశాల అధ్యయనం, పరిశీలన మరియు మార్గదర్శనం.',
  'v.vastu.count': 'సంప్రదింపు, శిక్షణ',

  'v.jyotisha.name': 'జ్యోతిష శాస్త్రం',
  'v.jyotisha.sub': 'కాల, గ్రహస్థితి శాస్త్రం',
  'v.jyotisha.desc':
    'జన్మకుండలి, రాశి, నక్షత్రం, భావాలు, గ్రహాలు, దశలు, గోచారం, ప్రశ్న జ్యోతిషం మరియు ముహూర్తం వంటి అంశాల అధ్యయనం మరియు ఆచరణ.',
  'v.jyotisha.count': 'సంప్రదింపు, శిక్షణ',

  'v.numero.name': 'సంఖ్యా శాస్త్రం',
  'v.numero.sub': 'సంఖ్య, నామ శాస్త్రం',
  'v.numero.desc':
    'జన్మ సంఖ్య, భాగ్య సంఖ్య, నామ సంఖ్య, పేరు, స్పెల్లింగ్, నామకరణం మరియు సంఖ్యా అనుకూలతకు సంబంధించిన అధ్యయనం.',
  'v.numero.count': 'సంప్రదింపు, శిక్షణ',

  'v.swara.name': 'ఆధ్యాత్మిక & వేద విద్యలు',
  'v.swara.sub': 'మంత్రం, ధ్యానం, స్వరం, ఆత్మజ్ఞానం',
  'v.swara.desc':
    'మంత్రం, ధ్యానం, స్వర సాధన, ఆత్మజ్ఞాన సంబంధిత అంశాలు మరియు ఇతర ఆధ్యాత్మిక విద్యలను క్రమబద్ధంగా అధ్యయనం చేయడానికి మార్గదర్శనం.',
  'v.swara.count': 'మార్గదర్శనం, అధ్యయనం',

  's.vastu.1': 'స్థల వాస్తు — దిక్కు, ఆకారం, వాలు, రహదారి ముఖం',
  's.vastu.2': 'ఇల్లు, విల్లా వాస్తు',
  's.vastu.3': 'ఫ్లాట్, అపార్ట్‌మెంట్ వాస్తు',
  's.vastu.4': 'ముఖ ద్వార పరిశీలన',
  's.vastu.5': 'గదుల స్థాన నిర్ణయం',
  's.vastu.6': 'నీరు, మురుగు నీటి స్థానం',
  's.vastu.7': 'ఆయాది గణితం',
  's.vastu.8': 'దుకాణం, కార్యాలయ వాస్తు',
  's.vastu.9': 'వాణిజ్య వాస్తు',
  's.vastu.10': 'పారిశ్రామిక వాస్తు',
  's.vastu.11': 'విద్యా సంస్థల వాస్తు',
  's.vastu.12': 'వాస్తు దోష నిర్ధారణ',
  's.vastu.13': 'కూల్చివేత లేని పరిహారాలు',
  's.vastu.14': 'నూతన నిర్మాణ ప్రణాళిక',
  's.vastu.15': 'ప్రస్తుత భవన విశ్లేషణ',

  's.jyo.1': 'జన్మ జాతక విశ్లేషణ',
  's.jyo.2': 'విద్య, జ్ఞాన మార్గం',
  's.jyo.3': 'ఉద్యోగం, వృత్తి',
  's.jyo.4': 'వ్యాపారం, ఆర్థిక స్థితి',
  's.jyo.5': 'ఆదాయం, ఆస్తి, ధన యోగాలు',
  's.jyo.6': 'వివాహం, దాంపత్య జీవితం',
  's.jyo.7': 'వివాహ అనుకూలత (గుణ మిలన్)',
  's.jyo.8': 'సంతాన విషయాలు',
  's.jyo.9': 'కుటుంబం, సంబంధాలు',
  's.jyo.10': 'ఆరోగ్య జ్యోతిషం',
  's.jyo.11': 'విదేశ ప్రయాణం, స్థిర నివాసం',
  's.jyo.12': 'దశ–భుక్తి, గోచారం',
  's.jyo.13': 'జీవిత సంఘటనల కాల నిర్ణయం',
  's.jyo.14': 'ప్రశ్న జ్యోతిషం',
  's.jyo.15': 'ముహూర్త నిర్ణయం',
  's.jyo.16': 'నక్షత్ర, పాద ఆధారిత నామకరణం',
  's.jyo.17': 'జ్యోతిష పరిహారాలు',

  's.num.1': 'వ్యక్తిగత పేరు, స్పెల్లింగ్ సవరణ',
  's.num.2': 'శిశు నామకరణం',
  's.num.3': 'సంఖ్యల ఆధారంగా వివాహ అనుకూలత',
  's.num.4': 'వ్యాపార నామం',
  's.num.5': 'కంపెనీ, సంస్థ నామం',
  's.num.6': 'బ్రాండ్ నామం',
  's.num.7': 'మొబైల్ సంఖ్య అనుకూలత',
  's.num.8': 'వాహన సంఖ్య అనుకూలత',
  's.num.9': 'ఇల్లు, ఫ్లాట్ సంఖ్య అనుకూలత',
  's.num.10': 'శుభ తేదీ ఎంపిక',
  's.num.11': 'సంతక విశ్లేషణ',

  's.swa.1': 'మంత్రం, ధ్యానం, స్వర సాధన',
  's.swa.2': 'ఆత్మజ్ఞానం, సంబంధిత అధ్యయనం',

  's.course.1': 'వాస్తు శాస్త్రం — మౌలిక సూత్రాలు',
  's.course.2': 'జ్యోతిష శాస్త్రం — మౌలిక సూత్రాలు',
  's.course.3': 'సంఖ్యా శాస్త్రం — మౌలిక సూత్రాలు',
  's.course.4': 'ఆధ్యాత్మిక & వేద విద్యలు',

  'mega.seeAll': 'వివరాలు చూడండి',
  'mega.training': 'శిక్షణ',

  'sig.eyebrow': 'సేవలు',
  'sig.title': 'ప్రధాన సేవలు',
  'sig.lede':
    'ఎక్కువగా కోరబడే సేవలు ఇవి. ప్రతి శాస్త్రానికీ పూర్తి వివరాలు దాని సొంత పేజీలో ఉన్నాయి.',
  'sig.1.name': 'స్థల, నూతన నిర్మాణ వాస్తు',
  'sig.1.desc':
    'కొనుగోలుకు ముందు లేదా పునాది వేయకముందే దిక్కు, ఆకారం, వాలు, రహదారి ముఖం, ఆయాది అనుకూలత పరిశీలన — సవరణకు ఏమీ ఖర్చు కాని ఏకైక దశ ఇదే.',
  'sig.1.dur': '90 నిమిషాలు + స్థల సందర్శన',
  'sig.2.name': 'సంపూర్ణ జన్మ జాతక విశ్లేషణ',
  'sig.2.desc':
    'స్వభావం, విద్య, వృత్తి, ధనం, వివాహం, సంతానం, ఆరోగ్యం — జాతకాన్ని పూర్తిగా చదివి, నడుస్తున్న దశతోను, రాబోయే మూడేళ్ల గోచారంతోను సరిపోల్చుతాం.',
  'sig.2.dur': '90 నిమిషాలు',
  'sig.3.disc': 'జ్యోతిషం + సంఖ్యా శాస్త్రం',
  'sig.3.name': 'వివాహ అనుకూలత',
  'sig.3.desc':
    'అష్టకూట గుణ మిలన్‌ను కుజ దోషం, ఇద్దరి సప్తమ స్థానంతో కలిపి చూస్తాం. అవసరమైన సందర్భంలో సంఖ్యా శాస్త్ర అంశాలను కూడా సమన్వయంగా పరిశీలిస్తాం.',
  'sig.3.dur': '60 నిమిషాలు',
  'sig.4.name': 'వ్యాపార, బ్రాండ్ నామకరణం',
  'sig.4.desc':
    'సంఖ్యా విలువ, తెలుగు–ఆంగ్లం రెండింటిలో ఉచ్చారణ, ప్రమోటర్ జాతకంతో సరిపోలిక, రిజిస్ట్రార్ మరియు ట్రేడ్‌మార్క్ రికార్డు పరిశీలన — ఇవన్నీ అయిన తర్వాతే ఎంపిక జాబితా.',
  'sig.4.dur': 'రెండు సమావేశాలు',
  'sig.5.name': 'ముహూర్తం, తేదీ నిర్ణయం',
  'sig.5.desc':
    'వివాహం, గృహ ప్రవేశం, రిజిస్ట్రేషన్, ప్రారంభోత్సవం లేదా పునాదికి శుభ సమయం — సంబంధిత వ్యక్తుల జాతకాలు, పంచాంగం ఆధారంగా; ఆచరణ సౌలభ్యం కోసం రెండు ప్రత్యామ్నాయాలతో.',
  'sig.5.dur': '45 నిమిషాలు',
  'sig.6.disc': 'సంస్థాగతం',
  'sig.6.name': 'వాణిజ్య, పారిశ్రామిక వాస్తు తనిఖీ',
  'sig.6.desc':
    'ఫ్యాక్టరీలు, షోరూమ్‌లు, కార్యాలయాలు, పాఠశాలలు, ఆసుపత్రులకు పూర్తి స్థల తనిఖీ. మీ ఆర్కిటెక్ట్ నేరుగా అమలు చేయగల డ్రాయింగ్ స్థాయి నివేదిక, దశలవారీ పరిహారాలతో.',
  'sig.6.dur': 'స్థలాన్ని బట్టి',
  'sig.fee':
    'వ్యవధి, రుసుము అవసరాన్ని బట్టి పని ప్రారంభించే ముందు తెలియజేయబడతాయి.',

  'meta.duration': 'వ్యవధి',
  'meta.mode': 'విధానం',
  'meta.output': 'అందించేది',
  'meta.medium': 'బోధనా భాష',
  'mode.inPerson': 'ప్రత్యక్షంగా',
  'mode.online': 'ఆన్‌లైన్',
  'mode.both': 'ఆన్‌లైన్ లేదా ప్రత్యక్షం',
  'out.report': 'లిఖిత నివేదిక',
  'out.shortlist': 'ఎంపిక జాబితా, కారణాలు',
  'out.dates': 'తేదీల పత్రం, ప్రత్యామ్నాయాలు',
  'out.audit': 'తనిఖీ నివేదిక, గుర్తులు',
  'medium.both': 'తెలుగు, ఆంగ్లం',

  'process.eyebrow': 'పద్ధతి',
  'process.title': 'సంప్రదింపు విధానం.',
  'process.lede':
    'ప్రశ్న ఏ శాస్త్రానికి సంబంధించినదైనా ఇవే అయిదు దశలు.',
  'process.1.name': 'వివరాల సేకరణ',
  'process.1.desc':
    'అవసరమైన జనన వివరాలు, స్థల వివరాలు లేదా సంబంధిత సమాచారాన్ని సేకరిస్తాం. జనన సమయం మీద సందేహం ఉంటే అది చెప్తాం.',
  'process.2.name': 'ముందస్తు పరిశీలన',
  'process.2.desc':
    'సంబంధిత జాతకం, వాస్తు ప్రణాళిక లేదా సంఖ్యా వివరాలను సమావేశానికి ముందే పరిశీలిస్తాం.',
  'process.3.name': 'సంప్రదింపు',
  'process.3.desc':
    'ఆన్‌లైన్ లేదా ప్రత్యక్షంగా, తెలుగులో లేదా ఆంగ్లంలో విషయాన్ని వివరంగా చర్చిస్తాం. ఫలితాలను వాటి వెనుక ఉన్న కారణాలతో సహా వివరిస్తాం.',
  'process.4.name': 'లిఖిత సూచనలు',
  'process.4.desc':
    'అవసరమైన సందర్భంలో పరిశీలనలు మరియు సూచనలను లిఖిత రూపంలో అందిస్తాం.',
  'process.5.name': 'అనుసరణ',
  'process.5.desc':
    'అవసరాన్ని బట్టి తదుపరి మార్గదర్శనం అందించబడుతుంది.',

  'founder.eyebrow': 'ఆచరణ',
  'founder.title': 'శ్రీ కె. శ్రీనివాస్ రెడ్డి',
  'founder.role': 'స్థాపకులు & ప్రధాన మార్గదర్శకులు',
  'founder.p1':
    'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం, సంఖ్యా శాస్త్రం మరియు సంబంధిత ఆధ్యాత్మిక–వేద విద్యలపై అధ్యయనం, ఆచరణ మరియు బోధనలో ఆసక్తితో ఈ కేంద్రాన్ని ప్రారంభించారు.',
  'founder.p2':
    'సంప్రదింపులు, తరగతులు వ్యక్తిగతంగానే నిర్వహిస్తారు. ప్రజలు తెచ్చే ప్రశ్నలు శాస్త్రాల వారీగా విడిపోయి ఉండవు — ఇల్లు, వివాహం, వృత్తి నిర్ణయం తరచుగా కలిసే వస్తాయి. అందుకే ఈ నాలుగు విభాగాలనూ పక్కపక్కనే అధ్యయనం చేసి ఆచరిస్తారు.',
  'founder.cred1': 'ఎం.ఎ. (జ్యోతిష శాస్త్రం)',
  'founder.cred2': 'పీహెచ్‌డీ పరిశోధక విద్యార్థి — పరిశోధన కొనసాగుతోంది',
  'founder.credLabel': 'విద్యార్హతలు',
  'founder.alt': 'శ్రీ కె. శ్రీనివాస్ రెడ్డి తమ కార్యస్థానంలో',

  'inst.eyebrow': 'సంస్థల కోసం',
  'inst.title': 'సంస్థలు మరియు వాణిజ్య అవసరాలకు.',
  'inst.lede':
    'అవసరాన్ని బట్టి సంస్థలు, విద్యా సంస్థలు, వాణిజ్య ప్రదేశాలు మరియు ఇతర నిర్మాణాలకు వాస్తు సంబంధిత పరిశీలన మరియు మార్గదర్శనం అందించబడుతుంది.',
  'inst.1.name': 'రియల్ ఎస్టేట్, డెవలపర్లు',
  'inst.1.desc':
    'లేఅవుట్ దశలోనే ప్లాట్ విభజన, రహదారి దిక్కు, ఉమ్మడి స్థలాలు, యూనిట్ స్థాయి వాస్తు పరిశీలన — అనుమతుల తర్వాత అమ్మకపు విలువ దెబ్బతినకుండా.',
  'inst.2.name': 'కార్పొరేట్, వాణిజ్యం',
  'inst.2.desc':
    'కార్యాలయ అంతస్తుల ప్రణాళిక, సీటింగ్ జోన్లు, క్యాబిన్లు, రిసెప్షన్, సర్వర్ స్థానం — ప్రమోటర్ల జాతకాలు, సంస్థ నామకరణంతో కలిపి పరిశీలన.',
  'inst.3.name': 'పారిశ్రామికం',
  'inst.3.desc':
    'ప్లాంట్ లేఅవుట్, యంత్రాల దిక్కు, ముడి సరుకు, తయారీ వస్తువుల నిల్వ, వ్యర్థ జలాలు, నీటి స్థానం — మీ ప్రాసెస్ ఇంజనీర్‌తో సమన్వయంగా.',
  'inst.4.name': 'విద్యా సంస్థలు',
  'inst.4.desc':
    'పాఠశాలలు, కళాశాలలకు తరగతి గదుల దిక్కు, గ్రంథాలయం, ప్రయోగశాల, పరిపాలనా విభాగాల స్థాన నిర్ణయం — విద్యా సంవత్సరానికి అంతరాయం కలగకుండా.',
  'inst.ctaText':
    'వివరాలతో సంప్రదించండి; ఏమి అవసరమో తెలియజేస్తాం.',

  'courses.eyebrow': 'శిక్షణ',
  'courses.title': 'శిక్షణ & విద్యా కార్యక్రమాలు',
  'courses.lede':
    'చిన్న బ్యాచ్‌లలో, తెలుగు మరియు ఆంగ్లంలో, మూల గ్రంథాల ఆధారంగా బోధన. ఈ విషయాలను క్రమబద్ధంగా నేర్చుకోవాలనుకునే ఎవరికైనా.',
  'courses.1.desc':
    'దిక్కులు, వాస్తు పురుష మండలం, కొలతలు, ఆయాది గణితం, ద్వార నిర్ణయం మరియు ప్రాథమిక వాస్తు సూత్రాలు.',
  'courses.2.desc':
    'రాశి, నక్షత్రం, భావం, గ్రహాలు, అధిపత్యం, యోగాలు, దశా విధానం మరియు జాతక విశ్లేషణకు సంబంధించిన ప్రాథమిక అంశాలు.',
  'courses.3.desc':
    'జన్మ సంఖ్య, భాగ్య సంఖ్య, నామ సంఖ్య, పేరు, సంఖ్యా అనుకూలత మరియు ఆచరణలో ఉపయోగించే ప్రాథమిక విధానాలు.',
  'courses.4.name': 'ఆధ్యాత్మిక & వేద విద్యలు',
  'courses.4.desc':
    'ఆధ్యాత్మిక అధ్యయనం, ధ్యానం, మంత్రం, స్వర సాధన మరియు సంబంధిత అంశాలు — విద్యార్థికి అనుకూలమైన వేగంతో.',
  'courses.dur': 'కోర్సును బట్టి',
  'courses.mode': 'ఆన్‌లైన్ లేదా ప్రత్యక్షం',
  'courses.certLabel': 'సర్టిఫికేట్',
  'courses.cert': 'Course Completion Certificate',


  'faq.eyebrow': 'నమోదుకు ముందు',
  'faq.title': 'సాధారణ ప్రశ్నలు',
  'faq.1.q': 'జనన సమయం ఖచ్చితంగా తెలిసి ఉండాలా?',
  'faq.1.a':
    'తెలిస్తే చాలా ఉపయోగం, కానీ అది తప్పనిసరి కాదు. సమయం మీద సందేహం ఉన్నా, నమోదు కాకపోయినా — ఆ విషయాన్ని స్పష్టంగా చెప్పి, ఆ పరిమితిలోనే పరిశీలన చేస్తాం.',
  'faq.2.q': 'ఇల్లు కూల్చమని చెప్తారా?',
  'faq.2.a':
    'దాదాపు ఎప్పుడూ చెప్పం. పరిహారాలను ఖర్చు క్రమంలో సూచిస్తాం — ముందు వినియోగం, దిక్కులో మార్పు; తర్వాత వస్తువులు, స్థానాల మార్పు; నిర్మాణ మార్పు కేవలం దోషం తీవ్రంగా ఉండి, మరే మార్గమూ పని చేయని చోట మాత్రమే.',
  'faq.3.q': 'ఆన్‌లైన్ సంప్రదింపు ప్రత్యక్ష సంప్రదింపు అంత నమ్మదగినదేనా?',
  'faq.3.a':
    'జ్యోతిషం, సంఖ్యా శాస్త్రం, ముహూర్తానికి — అవును; ఎందుకంటే వాటికి కావలసినవి పత్రాలు, గది కాదు. ఇప్పటికే ఉన్న భవనానికి వాస్తు మాత్రం స్థల సందర్శన, లేదా కనీసం ఉత్తర దిక్కు ధ్రువీకరించిన కొలతల ప్రణాళిక అవసరం.',
  'faq.4.q': 'సంప్రదింపు, నివేదిక తెలుగులో ఉండగలవా?',
  'faq.4.a':
    'అవును. సమావేశం, లిఖిత సూచనలు రెండూ తెలుగులో లేదా ఆంగ్లంలో అందుబాటులో ఉంటాయి. శాస్త్రీయ పదాలను రెండింటిలోనూ సంస్కృతంలోనే ఉంచుతాం.',
  'faq.5.q': 'ఫలితాలకు హామీ ఇస్తారా?',
  'faq.5.a':
    'ఇవ్వము. జ్యోతిషం, వాస్తు మరియు సంఖ్యా శాస్త్ర సంప్రదాయాల ఆధారంగా పరిశీలన మరియు మార్గదర్శనం అందిస్తాం. భవిష్యత్తు ఫలితాలకు హామీ ఇవ్వము.',

  'footer.disciplines':
    'వాస్తు శాస్త్రం | జ్యోతిష శాస్త్రం | సంఖ్యా శాస్త్రం | ఆధ్యాత్మిక & వేద విద్యలు',
  'footer.blurb':
    'వేద విద్యల అధ్యయనం, ఆచరణ మరియు బోధన కోసం ఒక కేంద్రం.',
  'footer.location': 'చిరునామా',
  'footer.reach': 'సంప్రదింపు',
  'footer.practice': 'సంస్థ',
  'footer.faq': 'ప్రశ్నలు',
  'footer.contact': 'సంప్రదించండి',
  'footer.addr': 'కేడీఆర్ నగర్ · వనపర్తి · తెలంగాణ, భారతదేశం',
  'footer.copy': '© 2026 సనాతన విద్యా కేంద్రం. సర్వ హక్కులు రిజర్వ్ చేయబడ్డాయి.',
};

export const dictionaries = { en, te } as const;
export type Lang = keyof typeof dictionaries;
