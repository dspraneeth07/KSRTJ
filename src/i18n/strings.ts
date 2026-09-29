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
  'utility.call': '+91 83090 96407',

  'brand.name': 'Sanātana Vidyā Kendra',
  'brand.tag': 'Vastu · Jyotisha · Numerology · Spiritual & Vedic Studies',

  'nav.services': 'Services',
  'nav.process': 'Process',
  'nav.courses': 'Training',
  'nav.about': 'About',
  'nav.menu': 'Menu',
  'nav.close': 'Close',

  'cta.book': 'Book a consultation',
  'cta.howItWorks': 'See how a consultation works',
  'cta.explore': 'Explore the discipline',
  'cta.enquire': 'Explore this field',
  'cta.readFull': 'Read the full profile',
  'cta.instBrief': 'Get in touch',
  'cta.whatsapp': 'Ask on WhatsApp',
  'cta.eyebrow': 'Contact',
  'cta.title': 'Get in touch.',
  'cta.lede':
    'Choose the service or course, decide whether you would prefer it online or in person, and message us on WhatsApp to arrange a time.',
  'cta.foot': 'WhatsApp · Phone',

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
  'v.vastu.sub': 'The traditional discipline of Vastu',
  'v.vastu.desc':
    'Study, examination and guidance covering plots, houses and construction — directions, measurements, Ayadi Ganitham and the related principles of Vastu.',
  'v.vastu.count': 'Consultation & training',

  'v.jyotisha.name': 'Jyotisha',
  'v.jyotisha.sub': 'The traditional discipline of Jyotisha',
  'v.jyotisha.desc':
    'Study and practice covering the birth chart, rashi and nakshatra, houses and planets, dashas, gochara, Prashna Jyotisham and Muhurtham.',
  'v.jyotisha.count': 'Consultation & training',

  'v.numero.name': 'Numerology',
  'v.numero.sub': 'The study of numbers and names',
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
  's.vastu.13': 'Non-demolition remedies, where applicable',
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
  's.num.10': 'Date selection by number',
  's.num.11': 'Signature analysis',

  's.swa.1': 'Mantra, meditation and swara sadhana',
  's.swa.2': 'Self-knowledge and related study',


  'mega.seeAll': 'See details',
  'mega.training': 'Training',

  'sig.eyebrow': 'Services',
  'sig.title': 'Our main services',
  'sig.lede':
    'Guidance is provided based on the relevant disciplines according to your individual, family, education, career, business, financial, health-related, site, construction and other important needs, concerns, queries and decisions.',

  'grp.vastu': 'Vastu Shastra',
  'grp.jyotisha': 'Jyotisha Shastra',
  'grp.numerology': 'Numerology',

  'ms.vastu.1.name': 'Vastu Consultations — Residential, Commercial & Industrial Spaces',
  'ms.vastu.1.desc':
    'Vastu-related needs, concerns and queries are examined for sites, new construction, buildings under construction, existing houses or buildings requiring modifications, offices, business premises, factories, warehouses and other structures, with appropriate guidance and recommendations.',

  'ms.jyo.1.name': 'Birth Chart Analysis',
  'ms.jyo.1.desc':
    'Astrological guidance is provided on personal nature, education, employment, career, business, finances, marriage, family, children, health, property, foreign travel, foreign education or employment, overseas settlement and other important areas of life.',
  'ms.jyo.2.name': 'Prasna Shastra',
  'ms.jyo.2.desc':
    'When birth details are unavailable, or when guidance is sought for a specific question, relevant astrological guidance is provided based on the time of the question.',
  'ms.jyo.3.name': 'Marriage Compatibility',
  'ms.jyo.3.desc':
    'The birth charts of both individuals are examined to provide guidance on marriage compatibility, relationship-related matters and other relevant considerations. Numerology may also be considered where appropriate.',
  'ms.jyo.4.name': 'Muhurta, Date & Time Selection',
  'ms.jyo.4.desc':
    'Suitable dates and timings are suggested for marriage, housewarming, Bhumi Puja, foundation work, registration, business or institutional inauguration, important beginnings, vehicle purchase and other auspicious activities.',
  'ms.jyo.5.name': 'Samudrika Shastra Consultations',
  'ms.jyo.5.desc':
    'Relevant aspects are examined based on Samudrika Shastra principles relating to palm lines and physical features, followed by appropriate guidance.',

  'ms.num.1.name': 'Numerology Analysis & Naming',
  'ms.num.1.desc':
    'Numerological aspects related to date of birth, name and name correction are comprehensively examined. Guidance is also provided for baby naming, personal numerology, business/company/brand naming, mobile numbers, vehicle numbers and house/flat numbers.',

  'ms.mode': 'Online or In-Person',
  'sig.feeTitle': 'Service Duration & Fees',
  'sig.fee':
    'The service duration and fees will be communicated in advance, based on the nature, requirements and scope of each service.',
  'sig.feeCta': 'Contact us for fee details.',

  'meta.duration': 'Duration',
  'meta.mode': 'Mode',
  'meta.medium': 'Medium of Instruction',
  'medium.both': 'Telugu, English',

  'process.eyebrow': 'Method',
  'process.title': 'Consultation Process',
  'process.lede':
    'The consultation process proceeds through the following steps, based on the information required for the relevant service.',
  'process.1.name': 'Information Collection',
  'process.1.desc':
    'We collect the birth details, site details, or other information required for the relevant service from you. If there is any uncertainty regarding the details, we confirm them with you.',
  'process.2.name': 'Preliminary Review',
  'process.2.desc': 'The information provided is reviewed before the consultation.',
  'process.3.name': 'Consultation',
  'process.3.desc':
    'The relevant subject and questions are discussed online or in person, in Telugu or English.',
  'process.4.name': 'Explanation of Analysis',
  'process.4.desc':
    'The relevant aspects identified during the review are clearly explained along with their supporting basis.',
  'process.5.name': 'Guidance',
  'process.5.desc':
    'Appropriate suggestions and guidance are provided according to the relevant subject.',

  'founder.eyebrow': 'The practice',
  'founder.title': 'Sri K. Sreenivasa Reddy',
  'founder.role': 'Founder & Principal Guide',
  'founder.p1':
    'This centre was begun with knowledge and experience in Vastu Shastra, Jyotisha Shastra and allied studies, Numerology, Swara Shastra, and Spiritual Studies and Brahmavidya, and with the continued practice, research and teaching of them.',
  'founder.p2':
    'Consultations and classes are conducted in person, and are also available online where required. Each discipline is considered according to its own principles and methods — examined on its own, or, where the need calls for it, with the relevant disciplines considered together.',
  'founder.cred1': 'M.A. (Jyotisha Shastra)',
  'founder.cred2': 'P.G. Diploma in Jyotirvastu',
  'founder.cred3': 'Ph.D. research in Vastu Shastra — ongoing',
  'founder.credLabel': 'Qualifications',
  'founder.alt': 'Sri K. Sreenivasa Reddy at his desk',

  'inst.eyebrow': 'For organisations',
  'inst.title': 'Institutions and commercial premises.',
  'inst.lede':
    'Vastu examination and guidance is offered, according to the requirement, for institutions, educational premises, commercial spaces and other buildings.',
  'inst.ctaText': 'Get in touch with the details and we will tell you what is involved.',

  'courses.eyebrow': 'Training',
  'courses.title': 'Training & Educational Programs',
  'courses.lede':
    'Structured teaching and study guidance is provided for learning Vastu, Jyotisha Shastra & Allied Studies, Numerology, Swara Shastra, and Spiritual Studies & Brahmavidya, based on relevant texts, principles, and practical approaches.',

  'courses.grp.cert': 'Certificate Courses',
  'courses.grp.study': 'Study Programs',

  'crs.vastu.name': 'Vastu Shastra',
  'crs.vastu.desc':
    'Structured teaching of the principles, methods, and practical aspects of Vastu Shastra according to the nature and level of the course.',
  'crs.jyo.name': 'Jyotisha Shastra & Allied Studies',
  'crs.jyo.desc':
    'Structured teaching of relevant principles, methods, and practical aspects of Jyotisha Shastra & Allied Studies according to the nature and level of the course.',
  'crs.num.name': 'Numerology',
  'crs.num.desc':
    'Structured teaching of relevant principles, methods, and practical aspects of Numerology according to the nature and level of the course.',
  'crs.swara.name': 'Swara Shastra',
  'crs.swara.desc':
    'Study and guidance on breath flow, nadi flow, the nature of swara, time-related observations, and related aspects of Swara Shastra.',
  'crs.spiritual.name': 'Spiritual Studies & Brahmavidya',
  'crs.spiritual.desc':
    'Study, practice, and guidance related to meditation, mantra, introspective practices, self-knowledge, and Brahmavidya.',

  'meta.level': 'Course Level',
  'courses.level': 'Based on the nature of the course',
  'crs.levelsLabel': 'Course Levels',
  'crs.levels': 'From foundational to advanced levels, depending on the nature and scope of the course',
  'courses.dur': 'Depending on the course',
  'courses.mode': 'Online or In-person',
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
  'footer.practice': 'The centre',
  'footer.faq': 'Questions',
  'footer.contact': 'Contact',
  'footer.addr': 'KDR Nagar · Wanaparthy · Telangana, India',
  'footer.copy': '© 2026 Sanātana Vidyā Kendra. All rights reserved.',
} as const;

export type StringKey = keyof typeof en;

export const te: Record<StringKey, string> = {
  'a11y.skip': 'విషయానికి వెళ్లండి',

  'utility.hours': 'సంప్రదింపులు · సోమ–శని, ఉదయం 9:00 – సాయంత్రం 6:00 · ఆన్‌లైన్ మరియు ప్రత్యక్షంగా',
  'utility.call': '+91 83090 96407',

  'brand.name': 'సనాతన విద్యా కేంద్రం',
  'brand.tag': 'వాస్తు · జ్యోతిషం · సంఖ్యా శాస్త్రం · వేద విద్యలు',

  'nav.services': 'సేవలు',
  'nav.process': 'ప్రక్రియ',
  'nav.courses': 'శిక్షణ',
  'nav.about': 'మా గురించి',
  'nav.menu': 'మెనూ',
  'nav.close': 'మూసివేయండి',

  'cta.book': 'సంప్రదింపును బుక్ చేసుకోండి',
  'cta.howItWorks': 'సంప్రదింపు ఎలా జరుగుతుంది',
  'cta.explore': 'ఈ శాస్త్రం గురించి',
  'cta.enquire': 'ఈ విభాగం గురించి',
  'cta.readFull': 'పూర్తి పరిచయం చదవండి',
  'cta.instBrief': 'సంప్రదించండి',
  'cta.whatsapp': 'వాట్సాప్‌లో అడగండి',
  'cta.eyebrow': 'సంప్రదించండి',
  'cta.title': 'సంప్రదించండి.',
  'cta.lede':
    'సేవ లేదా కోర్సును ఎంచుకోండి; ఆన్‌లైన్ లేదా ప్రత్యక్ష సంప్రదింపును ఎంచుకోండి; సమయం కోసం వాట్సాప్ ద్వారా సంప్రదించండి.',
  'cta.foot': 'వాట్సాప్ · ఫోన్',

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
  'v.vastu.sub': 'వాస్తు యొక్క సంప్రదాయ శాస్త్రం',
  'v.vastu.desc':
    'స్థలం, గృహం, నిర్మాణం, దిక్కులు, కొలతలు, ఆయాది గణితం మరియు సంబంధిత వాస్తు అంశాల అధ్యయనం, పరిశీలన మరియు మార్గదర్శనం.',
  'v.vastu.count': 'సంప్రదింపు, శిక్షణ',

  'v.jyotisha.name': 'జ్యోతిష శాస్త్రం',
  'v.jyotisha.sub': 'జ్యోతిషం యొక్క సంప్రదాయ శాస్త్రం',
  'v.jyotisha.desc':
    'జన్మకుండలి, రాశి, నక్షత్రం, భావాలు, గ్రహాలు, దశలు, గోచారం, ప్రశ్న జ్యోతిషం మరియు ముహూర్తం వంటి అంశాల అధ్యయనం మరియు ఆచరణ.',
  'v.jyotisha.count': 'సంప్రదింపు, శిక్షణ',

  'v.numero.name': 'సంఖ్యా శాస్త్రం',
  'v.numero.sub': 'సంఖ్యలు మరియు నామాలకు సంబంధించిన అధ్యయనం',
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
  's.vastu.13': 'అవకాశమున్న చోట కూల్చివేత లేని పరిహార సూచనలు',
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
  's.num.10': 'సంఖ్య ఆధారంగా తేదీ ఎంపిక',
  's.num.11': 'సంతక విశ్లేషణ',

  's.swa.1': 'మంత్రం, ధ్యానం, స్వర సాధన',
  's.swa.2': 'ఆత్మజ్ఞానం, సంబంధిత అధ్యయనం',


  'mega.seeAll': 'వివరాలు చూడండి',
  'mega.training': 'శిక్షణ',

  'sig.eyebrow': 'సేవలు',
  'sig.title': 'మా ప్రధాన సేవలు',
  'sig.lede':
    'మీ వ్యక్తిగత, కుటుంబ, విద్య, వృత్తి, వ్యాపార, ఆర్థిక, ఆరోగ్య సంబంధిత అంశాలు, స్థలం, నిర్మాణం మరియు ఇతర ముఖ్య అవసరాలు, సమస్యలు, సందేహాలు మరియు నిర్ణయాలకు అనుగుణంగా సంబంధిత శాస్త్రాల ఆధారంగా తగిన మార్గదర్శకత్వం అందించబడుతుంది.',

  'grp.vastu': 'వాస్తు శాస్త్రం',
  'grp.jyotisha': 'జ్యోతిష శాస్త్రం',
  'grp.numerology': 'సంఖ్యా శాస్త్రం',

  'ms.vastu.1.name': 'వాస్తు సంప్రదింపులు — నివాస, వాణిజ్య మరియు పారిశ్రామిక ప్రదేశాలు',
  'ms.vastu.1.desc':
    'స్థలం, కొత్త నిర్మాణం, నిర్మాణంలో ఉన్న భవనాలు, ఇప్పటికే ఉన్న ఇల్లు లేదా భవనంలో మార్పులు, కార్యాలయాలు, వ్యాపార ప్రదేశాలు, ఫ్యాక్టరీలు, గోదాములు మరియు ఇతర నిర్మాణాలకు సంబంధించిన వాస్తు అవసరాలు, సమస్యలు మరియు సందేహాలను పరిశీలించి, తగిన మార్గదర్శకత్వం మరియు అవసరమైన సూచనలు అందించడం.',

  'ms.jyo.1.name': 'జన్మ జాతక విశ్లేషణ',
  'ms.jyo.1.desc':
    'వ్యక్తిగత స్వభావం, విద్య, ఉద్యోగం, వృత్తి, వ్యాపారం, ఆర్థిక పరిస్థితులు, వివాహం, కుటుంబం, సంతానం, ఆరోగ్యం, ఆస్తి, విదేశీ ప్రయాణం, విదేశీ విద్య లేదా ఉద్యోగం, విదేశీ స్థిరనివాసం మరియు జీవితంలోని ఇతర ముఖ్య అంశాలపై జ్యోతిష్య పరిశీలన మరియు మార్గదర్శకత్వం అందించడం.',
  'ms.jyo.2.name': 'ప్రశ్న శాస్త్రం',
  'ms.jyo.2.desc':
    'జన్మ వివరాలు అందుబాటులో లేని సందర్భాల్లో లేదా ఒక నిర్దిష్ట ప్రశ్నకు సమాధానం కోరినప్పుడు, ప్రశ్న సమయాన్ని ఆధారంగా చేసుకుని అడిగిన విషయానికి సంబంధించిన జ్యోతిష్య పరిశీలన మరియు మార్గదర్శకత్వం అందించడం.',
  'ms.jyo.3.name': 'వివాహ అనుకూలత',
  'ms.jyo.3.desc':
    'వివాహానికి ముందు ఇరువురి జాతకాలను పరిశీలించి, వివాహ అనుకూలత, దాంపత్య సంబంధిత అంశాలు మరియు అవసరమైన ఇతర విషయాలపై మార్గదర్శకత్వం అందించడం. అవసరమైన సందర్భంలో సంఖ్యా శాస్త్ర అంశాలను కూడా పరిశీలించడం.',
  'ms.jyo.4.name': 'ముహూర్తం, తేదీ మరియు సమయ నిర్ణయం',
  'ms.jyo.4.desc':
    'వివాహం, గృహప్రవేశం, భూమి పూజ, పునాది, రిజిస్ట్రేషన్, వ్యాపార ప్రారంభం, సంస్థ ప్రారంభం, ముఖ్య కార్యారంభాలు, వాహనం కొనుగోలు మరియు ఇతర శుభకార్యాలకు అనుకూలమైన తేదీ మరియు సమయాన్ని సూచించడం.',
  'ms.jyo.5.name': 'సాముద్రిక శాస్త్ర సంప్రదింపులు',
  'ms.jyo.5.desc':
    'హస్తరేఖలు మరియు శరీర లక్షణాలకు సంబంధించిన సాముద్రిక శాస్త్ర సూత్రాల ఆధారంగా సంబంధిత అంశాలను పరిశీలించి మార్గదర్శకత్వం అందించడం.',

  'ms.num.1.name': 'సంఖ్యా విశ్లేషణ మరియు నామకరణం',
  'ms.num.1.desc':
    'జన్మతేదీ, పేరు మరియు పేరు సవరణకు సంబంధించిన సంఖ్యా అంశాలను సమగ్రంగా పరిశీలించడం; శిశు నామకరణం, వ్యక్తిగత సంఖ్యా విశ్లేషణ, వ్యాపార/సంస్థ/బ్రాండ్ నామకరణం, మొబైల్ నంబర్, వాహన నంబర్ మరియు ఇంటి/ఫ్లాట్ నంబర్‌కు సంబంధించిన సంఖ్యా అంశాలను పరిశీలించి మార్గదర్శకత్వం అందించడం.',

  'ms.mode': 'ఆన్‌లైన్ లేదా ప్రత్యక్షంగా',
  'sig.feeTitle': 'సేవా వ్యవధి & రుసుము',
  'sig.fee':
    'ప్రతి సేవ యొక్క స్వభావం, అవసరం మరియు పని పరిధిని బట్టి సేవా వ్యవధి మరియు రుసుము ముందుగానే తెలియజేయబడతాయి.',
  'sig.feeCta': 'రుసుము వివరాల కోసం సంప్రదించండి.',

  'meta.duration': 'వ్యవధి',
  'meta.mode': 'విధానం',
  'meta.medium': 'బోధనా భాష',
  'medium.both': 'తెలుగు, ఆంగ్లం',

  'process.eyebrow': 'పద్ధతి',
  'process.title': 'సంప్రదింపు విధానం',
  'process.lede':
    'సంబంధిత సేవకు అవసరమైన వివరాల ఆధారంగా సంప్రదింపు ప్రక్రియ ఈ దశల్లో కొనసాగుతుంది.',
  'process.1.name': 'వివరాల సేకరణ',
  'process.1.desc':
    'సంబంధిత సేవకు అవసరమైన జనన, స్థల లేదా ఇతర వివరాలను మీ నుంచి సేకరిస్తాం. వివరాల్లో ఏదైనా సందేహం ఉంటే, మీతో నిర్ధారించుకుంటాం.',
  'process.2.name': 'ముందస్తు పరిశీలన',
  'process.2.desc': 'అందిన వివరాలను సంప్రదింపుకు ముందుగా పరిశీలిస్తాం.',
  'process.3.name': 'సంప్రదింపు',
  'process.3.desc':
    'ఆన్‌లైన్ లేదా ప్రత్యక్షంగా, తెలుగులో లేదా ఆంగ్లంలో సంబంధిత విషయం మరియు ప్రశ్నలను చర్చిస్తాం.',
  'process.4.name': 'విశ్లేషణ వివరణ',
  'process.4.desc':
    'పరిశీలనలో గుర్తించిన సంబంధిత అంశాలను వాటి ఆధారాలతో సహా స్పష్టంగా వివరిస్తాం.',
  'process.5.name': 'మార్గదర్శకత్వం',
  'process.5.desc':
    'సంబంధిత అంశానికి అనుగుణంగా అవసరమైన సూచనలు మరియు మార్గదర్శకత్వాన్ని తెలియజేస్తాం.',

  'founder.eyebrow': 'ఆచరణ',
  'founder.title': 'శ్రీ కె. శ్రీనివాస్ రెడ్డి',
  'founder.role': 'స్థాపకులు & ప్రధాన మార్గదర్శకులు',
  'founder.p1':
    'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు, సంఖ్యా శాస్త్రం, స్వర శాస్త్రం మరియు ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్యపై జ్ఞానం మరియు అనుభవంతో, వాటి ఆచరణ, పరిశోధన మరియు బోధనను కొనసాగిస్తూ ఈ కేంద్రాన్ని ప్రారంభించారు.',
  'founder.p2':
    'సంప్రదింపులు మరియు తరగతులు ప్రత్యక్షంగా నిర్వహించడంతో పాటు, అవసరాన్ని బట్టి ఆన్‌లైన్‌లో కూడా అందించబడతాయి. ప్రతి శాస్త్రాన్ని దాని స్వంత సూత్రాలు మరియు విధానాల ప్రకారం పరిగణించి, సంబంధిత అవసరాన్ని బట్టి ఒక్కో శాస్త్రాన్ని విడిగా లేదా అవసరమైనప్పుడు సంబంధిత శాస్త్రాలను సమన్వయంగా పరిశీలిస్తారు.',
  'founder.cred1': 'ఎం.ఏ. (జ్యోతిష శాస్త్రం)',
  'founder.cred2': 'పీ.జీ. డిప్లొమా ఇన్ జ్యోతిర్వాస్తు',
  'founder.cred3': 'వాస్తు శాస్త్రంలో పీహెచ్‌డీ పరిశోధన — కొనసాగుతోంది',
  'founder.credLabel': 'విద్యార్హతలు',
  'founder.alt': 'శ్రీ కె. శ్రీనివాస్ రెడ్డి తమ కార్యస్థానంలో',

  'inst.eyebrow': 'సంస్థల కోసం',
  'inst.title': 'సంస్థలు మరియు వాణిజ్య అవసరాలకు.',
  'inst.lede':
    'అవసరాన్ని బట్టి సంస్థలు, విద్యా సంస్థలు, వాణిజ్య ప్రదేశాలు మరియు ఇతర నిర్మాణాలకు వాస్తు సంబంధిత పరిశీలన మరియు మార్గదర్శనం అందించబడుతుంది.',
  'inst.ctaText':
    'వివరాలతో సంప్రదించండి; ఏమి అవసరమో తెలియజేస్తాం.',

  'courses.eyebrow': 'శిక్షణ',
  'courses.title': 'శిక్షణ & విద్యా కార్యక్రమాలు',
  'courses.lede':
    'వాస్తు, జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు, సంఖ్యా శాస్త్రం, స్వర శాస్త్రం మరియు ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్యకు సంబంధించిన అంశాలను క్రమబద్ధంగా నేర్చుకోవడానికి, సంబంధిత శాస్త్ర గ్రంథాలు, సూత్రాలు మరియు ఆచరణాత్మక విధానాల ఆధారంగా బోధన మరియు అధ్యయన మార్గదర్శనం అందించబడుతుంది.',

  'courses.grp.cert': 'సర్టిఫికేట్ కోర్సులు',
  'courses.grp.study': 'అధ్యయన కార్యక్రమాలు',

  'crs.vastu.name': 'వాస్తు శాస్త్రం',
  'crs.vastu.desc':
    'వాస్తు శాస్త్రంలోని సూత్రాలు, విధానాలు మరియు ఆచరణాత్మక అంశాలను కోర్సు స్వభావం మరియు స్థాయిని బట్టి క్రమబద్ధంగా బోధించడం.',
  'crs.jyo.name': 'జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు',
  'crs.jyo.desc':
    'జ్యోతిష శాస్త్రం & అనుబంధ విద్యలలోని సంబంధిత సూత్రాలు, విధానాలు మరియు ఆచరణాత్మక అంశాలను కోర్సు స్వభావం మరియు స్థాయిని బట్టి క్రమబద్ధంగా బోధించడం.',
  'crs.num.name': 'సంఖ్యా శాస్త్రం',
  'crs.num.desc':
    'సంఖ్యా శాస్త్రంలోని సంబంధిత సూత్రాలు, విధానాలు మరియు ఆచరణాత్మక అంశాలను కోర్సు స్వభావం మరియు స్థాయిని బట్టి క్రమబద్ధంగా బోధించడం.',
  'crs.swara.name': 'స్వర శాస్త్రం',
  'crs.swara.desc':
    'శ్వాస ప్రవాహం, నాడీ ప్రవాహం, స్వర స్వభావం, కాల సంబంధిత పరిశీలనలు మరియు స్వర శాస్త్రానికి సంబంధించిన అంశాలపై అధ్యయనం మరియు మార్గదర్శనం.',
  'crs.spiritual.name': 'ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య',
  'crs.spiritual.desc':
    'ధ్యానం, మంత్రం, అంతర్ముఖ సాధన, ఆత్మజ్ఞానం మరియు బ్రహ్మవిద్యకు సంబంధించిన అంశాలపై అధ్యయనం, సాధన మరియు మార్గదర్శనం.',

  'meta.level': 'కోర్సు స్థాయి',
  'courses.level': 'కోర్సు స్వభావాన్ని బట్టి',
  'crs.levelsLabel': 'కోర్సు స్థాయిలు',
  'crs.levels': 'ప్రాథమిక స్థాయి నుండి ఉన్నత స్థాయి వరకు, కోర్సు స్వభావం మరియు అంశాల పరిధిని బట్టి',
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
  'footer.practice': 'కేంద్రం',
  'footer.faq': 'ప్రశ్నలు',
  'footer.contact': 'సంప్రదించండి',
  'footer.addr': 'కేడీఆర్ నగర్ · వనపర్తి · తెలంగాణ, భారతదేశం',
  'footer.copy': '© 2026 సనాతన విద్యా కేంద్రం. సర్వ హక్కులు రిజర్వ్ చేయబడ్డాయి.',
};

export const dictionaries = { en, te } as const;
export type Lang = keyof typeof dictionaries;
