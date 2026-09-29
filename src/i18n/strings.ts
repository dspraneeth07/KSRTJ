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
  'brand.tag': 'Vastu · Jyotisha · Numerology · Swara · Brahmavidya',
  'brand.full':
    'Vastu Shastra · Jyotisha Shastra & Allied Studies · Numerology · Swara Shastra · Spiritual Studies & Brahmavidya',

  'nav.services': 'Services',
  'nav.courses': 'Training',
  'nav.about': 'About',
  'nav.menu': 'Menu',
  'nav.close': 'Close',

  'cta.book': 'Book a Consultation',
  'cta.readFull': 'Read the full profile',
  'cta.instBrief': 'Get in touch',
  'cta.whatsapp': 'Ask on WhatsApp',
  'cta.eyebrow': 'Contact',
  'cta.title': 'Get in touch.',
  'cta.lede':
    'Choose the service or course, decide whether you would prefer it online or in person, and message us on WhatsApp to arrange a time.',
  'cta.foot': 'WhatsApp · Phone',

  'hero.title': 'Sanātana Vidyā Kendra',
  'hero.lede': 'Knowledge, Practice, Experience, Research & Teaching.',
  'hero.foot': 'Consultations & training · Online or In-person · Wanaparthy, Telangana',

  'trust.title': 'Experience in practice and study',
  'trust.body':
    'Continuous study, practice and teaching across Vastu Shastra, Jyotisha Shastra and its allied studies, Numerology, Swara Shastra, and Spiritual Studies and Brahmavidya.',

  'pillars.eyebrow': 'Educational Disciplines',
  'pillars.title': 'Our Main Educational Disciplines',

  'd.vastu.name': 'Vastu Shastra',
  'd.vastu.desc':
    'Vastu principles, site assessment, structural aspects and their practical application.',
  'd.jyotisha.name': 'Jyotisha Shastra & Allied Studies',
  'd.jyotisha.desc':
    'Jyotisha principles, horoscope analysis, and the knowledge, analysis and application of various allied areas of Jyotisha.',
  'd.numerology.name': 'Numerology',
  'd.numerology.desc':
    'The nature of numbers, numerical relationships, and their relevance to personality, aspects of life and the application of numbers.',
  'd.swara.name': 'Swara Shastra',
  'd.swara.desc':
    'Breath flow, subtle breath channels, swara characteristics, time-related observations and their practical application.',
  'd.spiritual.name': 'Spiritual Studies & Brahmavidya',
  'd.spiritual.desc':
    'Self-knowledge, philosophical inquiry, inner practices, and knowledge and practice relating to Brahmavidya.',

  'v.vastu.name': 'Vastu Shastra',
  'v.vastu.sub': 'The traditional science of Vastu',
  'v.jyotisha.name': 'Jyotisha Shastra & Allied Studies',
  'v.jyotisha.sub':
    'Traditional knowledge of Jyotisha Shastra and its various allied disciplines',
  'v.numero.name': 'Numerology',
  'v.numero.sub': 'The study of numbers and names',
  'v.swara.name': 'Spiritual Studies & Brahmavidya',






  'mega.training': 'Training',

  'sig.eyebrow': 'Services',
  'sig.title': 'Main Services',

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
  'founder.cred2': 'P.G. Diploma in Jyotir Vastu',
  'founder.cred3': 'Ph.D. Research in Vastu Shastra — Ongoing',
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
    'Structured teaching and study guidance is provided for learning Vastu Shastra, Jyotisha Shastra & Allied Studies, Numerology, Swara Shastra, and Spiritual Studies & Brahmavidya, based on relevant texts, principles, and practical approaches.',

  'courses.grp.cert': 'Certificate Courses',
  'courses.grp.study': 'Study Programs',

  'crs.vastu.name': 'Vastu Shastra',
  'crs.vastu.desc':
    'Systematic teaching of the principles, methods, and practical aspects of Vastu Shastra according to the nature and level of the course.',
  'crs.jyo.name': 'Jyotisha Shastra & Allied Studies',
  'crs.jyo.desc':
    'Systematic teaching of relevant principles, methods, and practical aspects of Jyotisha Shastra & Allied Studies according to the nature and level of the course.',
  'crs.num.name': 'Numerology',
  'crs.num.desc':
    'Systematic teaching of relevant principles, methods, and practical aspects of Numerology according to the nature and level of the course.',
  'crs.swara.name': 'Swara Shastra',
  'crs.swara.desc':
    'Study and guidance on breath flow, Nadi flow, the nature of Swara, time-related observations, and related aspects of Swara Shastra.',
  'crs.spiritual.name': 'Spiritual Studies & Brahmavidya',
  'crs.spiritual.desc':
    'Study, practice, and guidance related to meditation, mantra practice, inner practice, self-knowledge, and Brahmavidya.',

  'crs.levelsLabel': 'Course Levels',
  'crs.levels': 'From foundational to advanced levels, depending on the nature and scope of the course',
  'courses.dur': 'Depending on the course',
  'courses.mode': 'Online or In-person',
  'courses.certLabel': 'Certificate',
  'courses.cert': 'Course Completion Certificate',


  'faq.eyebrow': 'Before Your Consultation',
  'faq.title': 'Common Questions',
  'faq.1.q': 'Do I need to know my exact birth time?',
  'faq.1.a':
    'It is helpful if known. If there is uncertainty about the birth time, we will explain in advance the extent to which an assessment can be made based on the available information.',
  'faq.2.q': 'Will you ask me to demolish part of my house?',
  'faq.2.a':
    'In Vastu-related assessments, practical modifications and suggestions are given priority wherever possible.',
  'faq.3.q': 'Is an online consultation as reliable as an in-person one?',
  'faq.3.a':
    'The necessary details and relevant information are assessed based on what is available, and the consultation is provided accordingly.',
  'faq.4.q': 'Can the consultation be in Telugu?',
  'faq.4.a':
    'Yes. Consultation and available guidance can be provided in Telugu or English, as required.',
  'faq.5.q': 'Do you guarantee outcomes?',
  'faq.5.a':
    'Assessment and guidance are provided based on the relevant traditional disciplines. No guarantee is given regarding specific outcomes.',

  'footer.disciplines':
    'Vastu Shastra | Jyotisha Shastra & Allied Studies | Numerology | Swara Shastra | Spiritual Studies & Brahmavidya',
  'footer.location': 'Location',
  'footer.reach': 'Contact',
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
  'brand.tag': 'వాస్తు · జ్యోతిషం · సంఖ్యా శాస్త్రం · స్వరం · బ్రహ్మవిద్య',
  'brand.full':
    'వాస్తు శాస్త్రం · జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు · సంఖ్యా శాస్త్రం · స్వర శాస్త్రం · ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య',

  'nav.services': 'సేవలు',
  'nav.courses': 'శిక్షణ',
  'nav.about': 'మా గురించి',
  'nav.menu': 'మెనూ',
  'nav.close': 'మూసివేయండి',

  'cta.book': 'సంప్రదింపును బుక్ చేసుకోండి',
  'cta.readFull': 'పూర్తి పరిచయం చదవండి',
  'cta.instBrief': 'సంప్రదించండి',
  'cta.whatsapp': 'వాట్సాప్‌లో అడగండి',
  'cta.eyebrow': 'సంప్రదించండి',
  'cta.title': 'సంప్రదించండి.',
  'cta.lede':
    'సేవ లేదా కోర్సును ఎంచుకోండి; ఆన్‌లైన్ లేదా ప్రత్యక్ష సంప్రదింపును ఎంచుకోండి; సమయం కోసం వాట్సాప్ ద్వారా సంప్రదించండి.',
  'cta.foot': 'వాట్సాప్ · ఫోన్',

  'hero.title': 'సనాతన విద్యా కేంద్రం',
  'hero.lede': 'విద్యలపై జ్ఞానం, ఆచరణ, అనుభవం, పరిశోధన మరియు బోధన.',
  'hero.foot': 'సంప్రదింపులు & శిక్షణ · ఆన్‌లైన్ లేదా ప్రత్యక్షం · వనపర్తి, తెలంగాణ',

  'trust.title': 'ఆచరణ మరియు అధ్యయన అనుభవం',
  'trust.body':
    'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు, సంఖ్యా శాస్త్రం, స్వర శాస్త్రం మరియు ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్యలలో నిరంతర అధ్యయనం, ఆచరణ మరియు బోధన.',

  'pillars.eyebrow': 'విద్యా విభాగాలు',
  'pillars.title': 'మా ప్రధాన విద్యా విభాగాలు',

  'd.vastu.name': 'వాస్తు శాస్త్రం',
  'd.vastu.desc':
    'వాస్తు సూత్రాలు, స్థల పరిశీలన, నిర్మాణ సంబంధిత అంశాలు మరియు వాటి ఆచరణాత్మక అన్వయం.',
  'd.jyotisha.name': 'జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు',
  'd.jyotisha.desc':
    'జ్యోతిష శాస్త్రంలోని సూత్రాలు, జాతక విశ్లేషణ మరియు దానికి అనుబంధంగా ఉన్న వివిధ జ్యోతిష విద్యల పరిజ్ఞానం, విశ్లేషణ మరియు అన్వయం.',
  'd.numerology.name': 'సంఖ్యా శాస్త్రం',
  'd.numerology.desc':
    'సంఖ్యల స్వభావం, సంఖ్యా సంబంధాలు మరియు వాటి ఆధారంగా వ్యక్తిత్వం, జీవన అంశాలు మరియు సంఖ్యల అన్వయంపై పరిశీలన.',
  'd.swara.name': 'స్వర శాస్త్రం',
  'd.swara.desc':
    'శ్వాస ప్రవాహం, నాడీ ప్రవాహం, స్వర స్వభావం, కాల సంబంధిత పరిశీలనలు మరియు వాటి ఆచరణాత్మక అన్వయం.',
  'd.spiritual.name': 'ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య',
  'd.spiritual.desc':
    'ఆత్మజ్ఞానం, తత్త్వవిచారణ, అంతర్ముఖ సాధన మరియు బ్రహ్మవిద్యకు సంబంధించిన జ్ఞానం మరియు సాధన.',

  'v.vastu.name': 'వాస్తు శాస్త్రం',
  'v.vastu.sub': 'వాస్తు యొక్క సంప్రదాయ శాస్త్రం',
  'v.jyotisha.name': 'జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు',
  'v.jyotisha.sub':
    'జ్యోతిష శాస్త్రం మరియు దానికి అనుబంధంగా ఉన్న వివిధ విద్యల సంప్రదాయ పరిజ్ఞానం',
  'v.numero.name': 'సంఖ్యా శాస్త్రం',
  'v.numero.sub': 'సంఖ్యలు మరియు నామాలకు సంబంధించిన అధ్యయనం',
  'v.swara.name': 'ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య',






  'mega.training': 'శిక్షణ',

  'sig.eyebrow': 'సేవలు',
  'sig.title': 'ప్రధాన సేవలు',

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
    'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు, సంఖ్యా శాస్త్రం, స్వర శాస్త్రం మరియు ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్యకు సంబంధించిన అంశాలను క్రమబద్ధంగా నేర్చుకోవడానికి, సంబంధిత శాస్త్ర గ్రంథాలు, సూత్రాలు మరియు ఆచరణాత్మక విధానాల ఆధారంగా బోధన మరియు అధ్యయన మార్గదర్శనం అందించబడుతుంది.',

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
    'ధ్యానం, మంత్ర సాధన, అంతర్ముఖ సాధన, ఆత్మజ్ఞానం మరియు బ్రహ్మవిద్యకు సంబంధించిన అంశాలపై అధ్యయనం, సాధన మరియు మార్గదర్శనం.',

  'crs.levelsLabel': 'కోర్సు స్థాయిలు',
  'crs.levels': 'ప్రాథమిక స్థాయి నుండి ఉన్నత స్థాయి వరకు, కోర్సు స్వభావం మరియు అంశాల పరిధిని బట్టి',
  'courses.dur': 'కోర్సును బట్టి',
  'courses.mode': 'ఆన్‌లైన్ లేదా ప్రత్యక్షం',
  'courses.certLabel': 'సర్టిఫికేట్',
  'courses.cert': 'Course Completion Certificate',


  'faq.eyebrow': 'సంప్రదింపుకు ముందు',
  'faq.title': 'సాధారణ ప్రశ్నలు',
  'faq.1.q': 'జనన సమయం ఖచ్చితంగా తెలిసి ఉండాలా?',
  'faq.1.a':
    'తెలిస్తే ఉపయోగకరంగా ఉంటుంది. జనన సమయం విషయంలో సందేహం ఉంటే, అందుబాటులో ఉన్న వివరాల ఆధారంగా పరిశీలన చేయగలిగే పరిమితిని ముందుగా తెలియజేస్తాం.',
  'faq.2.q': 'ఇల్లు కూల్చమని చెప్తారా?',
  'faq.2.a':
    'వాస్తు సంబంధిత పరిశీలనలో సాధ్యమైనంతవరకు ఆచరణాత్మక మార్పులు మరియు సూచనలకు ప్రాధాన్యం ఇస్తాం.',
  'faq.3.q': 'ఆన్‌లైన్ సంప్రదింపు ప్రత్యక్ష సంప్రదింపు అంత నమ్మదగినదేనా?',
  'faq.3.a':
    'అవసరమైన వివరాలు మరియు సంబంధిత సమాచారాన్ని అందుబాటులో ఉన్న విధంగా పరిశీలించి, ఆ ఆధారంగా సంప్రదింపు అందించబడుతుంది.',
  'faq.4.q': 'సంప్రదింపు తెలుగులో ఉండగలదా?',
  'faq.4.a':
    'అవును. అవసరాన్ని బట్టి తెలుగు లేదా ఆంగ్లంలో సంప్రదింపు మరియు అందుబాటులో ఉన్న సూచనలు అందించవచ్చు.',
  'faq.5.q': 'ఫలితాలకు హామీ ఇస్తారా?',
  'faq.5.a':
    'సంబంధిత శాస్త్రాల ఆధారంగా పరిశీలన మరియు మార్గదర్శకత్వం అందించబడుతుంది. నిర్దిష్ట ఫలితాలకు హామీ ఇవ్వబడదు.',

  'footer.disciplines':
    'వాస్తు శాస్త్రం | జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు | సంఖ్యా శాస్త్రం | స్వర శాస్త్రం | ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య',
  'footer.location': 'చిరునామా',
  'footer.reach': 'సంప్రదింపు',
  'footer.faq': 'ప్రశ్నలు',
  'footer.contact': 'సంప్రదించండి',
  'footer.addr': 'కేడీఆర్ నగర్ · వనపర్తి · తెలంగాణ, భారతదేశం',
  'footer.copy': '© 2026 సనాతన విద్యా కేంద్రం. సర్వ హక్కులు రిజర్వ్ చేయబడ్డాయి.',
};

export const dictionaries = { en, te } as const;
export type Lang = keyof typeof dictionaries;
