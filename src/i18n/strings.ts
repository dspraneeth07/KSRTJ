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
  'cta.enquire': 'Enquire about admission',
  'cta.requestFee': 'Request the fee schedule',
  'cta.readFull': 'Read the full profile',
  'cta.instBrief': 'Request an institutional brief',
  'cta.whatsapp': 'Ask on WhatsApp',
  'cta.eyebrow': 'Begin',
  'cta.title': 'Three steps to a consultation.',
  'cta.lede':
    'Choose the discipline, choose online or in person, and pick a time. Everything else — details, documents, payment — happens after the slot is held.',
  'cta.foot':
    'Slots are confirmed by a person, not an autoresponder. Expect a reply within one working day.',

  'hero.eyebrow': 'Wanaparthy, Telangana · Consulting across India and abroad',
  'hero.title': 'India’s first integrated house of the Vedic sciences.',
  'hero.lede':
    'Vastu Shastra, Jyotisha, Numerology, Swarashastra and Brahmavidya — studied and practised as one discipline rather than five separate trades, with the method and record-keeping of a research institution.',
  'hero.foot': 'Every consultation concludes with a written report in Telugu or English.',

  'trust.1': 'Years of continuous practice',
  'trust.2': 'Consultations on record',
  'trust.3': 'Institutional & commercial projects',
  'trust.4': 'Countries served remotely',

  'pillars.eyebrow': 'The four disciplines',
  'pillars.title': 'One practice, four bodies of knowledge.',
  'pillars.lede':
    'A plot is read differently once the owner’s chart is known. A name is chosen differently once the muhurtham is fixed. We hold all four disciplines in the same room so that findings are reconciled, not stacked.',

  'v.vastu.name': 'Vastu Shastra',
  'v.vastu.sub': 'The science of built space',
  'v.vastu.desc':
    'Plot, residence, commercial and industrial analysis grounded in orientation, proportion and Ayadi Ganitham. Remedies are proposed in order of cost — behavioural, then material, then structural.',
  'v.vastu.count': '15 defined services',

  'v.jyotisha.name': 'Jyotisha',
  'v.jyotisha.sub': 'The science of time and disposition',
  'v.jyotisha.desc':
    'Birth chart reading, dasha–bhukti and gochara analysis, event timing, Prashna and Muhurtham. Charts are calculated before the sitting and cross-checked against a second ayanamsa.',
  'v.jyotisha.count': '19 defined services',

  'v.numero.name': 'Numerology',
  'v.numero.sub': 'The science of number and name',
  'v.numero.desc':
    'Name and signature correction, business and brand naming, and compatibility across house, vehicle and mobile numbers — always checked against the birth chart before a change is recommended.',
  'v.numero.count': '12 defined services',

  'v.swara.name': 'Swarashastra & Brahmavidya',
  'v.swara.sub': 'The disciplines of breath and Self',
  'v.swara.desc':
    'Structured, long-form guidance in Swara sadhana and Brahmavidya for committed practitioners. Taught in a lineage, admitted by assessment, and never sold as a single sitting.',
  'v.swara.count': 'By assessment only',

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

  's.swa.1': 'Swarashastra — study & practice guidance',
  's.swa.2': 'Brahmavidya — sadhana guidance',

  's.course.1': 'Vastu Shastra — foundational principles',
  's.course.2': 'Jyotisha Shastra — foundational principles',
  's.course.3': 'Numerology — foundational principles',

  'mega.swaraNote':
    'Admission to these two disciplines follows an assessment. They are not offered as single sittings.',
  'mega.training': 'Training',

  'sig.eyebrow': 'Most requested',
  'sig.title': 'Signature consultations',
  'sig.lede':
    'Six engagements that account for the majority of our work. Each has a fixed scope, a fixed duration and a written deliverable.',
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
    'Guna Milan across the eight kutas, read together with Mangala dosha, the seventh house of both charts, and birth, destiny and name numbers. One reconciled opinion, not two.',
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
  'sig.fee': 'Fees are quoted per engagement and confirmed in writing before work begins.',

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
  'process.title': 'How a consultation actually runs.',
  'process.lede':
    'The same five stages apply whether you are buying a plot in Kukatpally or auditing a plant in Sriperumbudur. Nothing is read cold, and nothing is left verbal.',
  'process.1.name': 'Intake',
  'process.1.desc':
    'You submit birth details, site plans or documents through a structured brief. If the birth time is uncertain, we say so and rectify it before proceeding.',
  'process.2.name': 'Preparation',
  'process.2.desc':
    'The chart, the Vastu mandala overlay or the numeric grid is prepared and checked in advance. You are never billed for time spent on arithmetic during your own sitting.',
  'process.3.name': 'Consultation',
  'process.3.desc':
    'Sixty to ninety minutes, online or in person, in Telugu or English. Findings are explained with the reasoning that produced them. You are told where the shastra is silent.',
  'process.4.name': 'Written report',
  'process.4.desc':
    'Within seven working days: findings, recommendations, and the basis for each, in your chosen language. Remedies are ranked by cost and by expected effect.',
  'process.5.name': 'Follow-up',
  'process.5.desc':
    'One review sitting within ninety days is included. For construction work, we stay available to your architect through the build at no further consultation fee.',

  'founder.eyebrow': 'The practice',
  'founder.title': 'Shri K. Shrinivas Reddy',
  'founder.role': 'Founder & Principal Consultant',
  'founder.p1':
    'Trained in the Sthapatya and Jyotisha traditions under [Guru’s name] over [n] years, and in practice since [year]. The work has never been divided into separate consultancies, because the questions clients bring are not divided that way either — a house, a marriage and a business decision usually arrive as one problem.',
  'founder.p2':
    'Consultations are conducted personally. Every chart, every plan and every report issued since [year] is retained, which is what allows this practice to review its own predictions rather than only recall the ones that landed.',
  'founder.cred1': '[CONFIRM] MA in Jyotisha — [university], [year of award]',
  'founder.cred2': '[CONFIRM] PhD scholar (registered, thesis in progress) — [department], [university]',
  'founder.cred3': '[Institutional affiliation, published work or lecture record]',
  'founder.alt': 'Shri K. Shrinivas Reddy at his desk',

  'inst.eyebrow': 'For organisations',
  'inst.title': 'Builders, corporates and institutions.',
  'inst.lede':
    'Organisational work runs on a different footing: scoped engagements, drawing-level deliverables, named points of contact, and confidentiality in writing.',
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
  'inst.ctaText': 'Institutional engagements begin with a scoping call and a written proposal.',

  'courses.eyebrow': 'Training',
  'courses.title': 'Foundational courses',
  'courses.lede':
    'Taught in small batches, in Telugu and English, with primary texts rather than summaries. Intended for serious students, including practising architects and interior designers.',
  'courses.1.desc':
    'Directions and the Vastu Purusha mandala, proportion, Ayadi Ganitham, entrance determination, and reading a real site plan from the first session.',
  'courses.1.dur': '12 weeks · weekends',
  'courses.2.desc':
    'Rashi and nakshatra, house and lordship, chart casting by hand before software, yogas, and the dasha system read against documented life events.',
  'courses.2.dur': '16 weeks · weekends',
  'courses.3.desc':
    'Birth, destiny and name numbers, the systems in use and where they disagree, compatibility method, and why a name change is checked against the chart first.',
  'courses.3.dur': '8 weeks · weekends',

  'test.eyebrow': 'In their words',
  'test.title': 'What clients say afterwards',
  'test.1.text':
    'We were told which two of our four shortlisted plots to drop, and why, in terms our architect could actually act on. The report went straight into the design brief.',
  'test.1.who': '[Client name]',
  'test.1.what': 'Residence, Hyderabad',
  'test.2.text':
    'What stayed with me was being told plainly where the chart offered no clear answer. I had not heard that from anyone before.',
  'test.2.who': '[Client name]',
  'test.2.what': 'Birth chart consultation, Bengaluru',
  'test.3.text':
    'The plant audit was phased across two shutdowns so we lost no production. That kind of practicality is rare in this field.',
  'test.3.who': '[Client name]',
  'test.3.what': 'Manufacturing unit, Vijayawada',

  'faq.eyebrow': 'Before you book',
  'faq.title': 'Common questions',
  'faq.1.q': 'Do I need to know my exact birth time?',
  'faq.1.a':
    'It helps considerably, but it is not a precondition. Where the time is uncertain or unrecorded, we perform birth-time rectification against documented life events before any prediction is offered — and we tell you the confidence level we reached.',
  'faq.2.q': 'Will you ask me to demolish part of my house?',
  'faq.2.a':
    'Almost never. Remedies are proposed in ascending order of cost: use and orientation first, then material and placement changes, and structural alteration only where the defect is severe and nothing else will address it.',
  'faq.3.q': 'Is an online consultation as reliable as an in-person one?',
  'faq.3.a':
    'For Jyotisha, Numerology and Muhurtham, yes — the inputs are documents, not the room. Vastu for an existing building requires a site visit or, at minimum, dimensioned drawings with a verified north.',
  'faq.4.q': 'Can the consultation and the report be in Telugu?',
  'faq.4.a':
    'Yes. Both the sitting and the written report are available in Telugu or English, and you may choose a different language for each. Technical terms are retained in Sanskrit in both versions.',
  'faq.5.q': 'Do you guarantee outcomes?',
  'faq.5.a':
    'No, and you should be cautious of anyone who does. What is guaranteed is the method: stated reasoning, a written record, and a willingness to tell you when the answer is uncertain.',

  'footer.blurb':
    'An integrated practice in Vastu Shastra, Jyotisha, Numerology, Swarashastra and Brahmavidya. Consulting individuals and institutions across India and abroad.',
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
  'cta.enquire': 'ప్రవేశం గురించి విచారించండి',
  'cta.requestFee': 'రుసుము వివరాలు కోరండి',
  'cta.readFull': 'పూర్తి పరిచయం చదవండి',
  'cta.instBrief': 'సంస్థాగత ప్రతిపాదన కోరండి',
  'cta.whatsapp': 'వాట్సాప్‌లో అడగండి',
  'cta.eyebrow': 'ప్రారంభం',
  'cta.title': 'సంప్రదింపుకు మూడు అడుగులు.',
  'cta.lede':
    'శాస్త్రాన్ని ఎంచుకోండి, ఆన్‌లైన్ లేదా ప్రత్యక్షం అని నిర్ణయించండి, సమయాన్ని ఎంచుకోండి. మిగిలినవన్నీ — వివరాలు, పత్రాలు, చెల్లింపు — సమయం నిర్ధారణ అయిన తర్వాతే.',
  'cta.foot':
    'సమయాన్ని ఒక వ్యక్తి నిర్ధారిస్తారు, యంత్రం కాదు. ఒక పని దినంలోపు సమాధానం ఉంటుంది.',

  'hero.eyebrow': 'వనపర్తి, తెలంగాణ · భారతదేశం, విదేశాలలో సేవలు',
  'hero.title': 'వేద శాస్త్రాలకు భారతదేశపు తొలి సమగ్ర సంస్థ.',
  'hero.lede':
    'వాస్తు శాస్త్రం, జ్యోతిషం, సంఖ్యా శాస్త్రం, స్వర శాస్త్రం, బ్రహ్మవిద్య — వేర్వేరు వృత్తులుగా కాక ఒకే శాస్త్రంగా అధ్యయనం చేసి ఆచరిస్తాం; పరిశోధనా సంస్థ స్థాయి పద్ధతి, రికార్డులతో.',
  'hero.foot': 'ప్రతి సంప్రదింపు తెలుగు లేదా ఆంగ్లంలో లిఖిత నివేదికతో ముగుస్తుంది.',

  'trust.1': 'సంవత్సరాల నిరంతర అనుభవం',
  'trust.2': 'రికార్డులో ఉన్న సంప్రదింపులు',
  'trust.3': 'సంస్థాగత, వాణిజ్య ప్రాజెక్టులు',
  'trust.4': 'దేశాల్లో దూరస్థ సేవలు',

  'pillars.eyebrow': 'నాలుగు శాస్త్రాలు',
  'pillars.title': 'ఒకే ఆచరణ, నాలుగు జ్ఞాన శాఖలు.',
  'pillars.lede':
    'యజమాని జాతకం తెలిసిన తర్వాత స్థలాన్ని చూసే దృష్టి మారుతుంది. ముహూర్తం నిర్ణయమైన తర్వాత పేరు ఎంపిక మారుతుంది. అందుకే నాలుగు శాస్త్రాలనూ ఒకే చోట ఉంచి, ఫలితాలను పోగు చేయకుండా సమన్వయం చేస్తాం.',

  'v.vastu.name': 'వాస్తు శాస్త్రం',
  'v.vastu.sub': 'నిర్మాణ స్థల శాస్త్రం',
  'v.vastu.desc':
    'దిక్కు, కొలత, ఆయాది గణితం ఆధారంగా స్థలం, గృహం, వాణిజ్య, పారిశ్రామిక నిర్మాణాల విశ్లేషణ. పరిహారాలను ఖర్చు క్రమంలో సూచిస్తాం — ముందు వినియోగంలో మార్పు, తర్వాత వస్తు మార్పు, చివరగా నిర్మాణ మార్పు.',
  'v.vastu.count': '15 నిర్దిష్ట సేవలు',

  'v.jyotisha.name': 'జ్యోతిష శాస్త్రం',
  'v.jyotisha.sub': 'కాల, గ్రహస్థితి శాస్త్రం',
  'v.jyotisha.desc':
    'జన్మ కుండలి విశ్లేషణ, దశ–భుక్తి, గోచార పరిశీలన, సంఘటనల కాల నిర్ణయం, ప్రశ్న, ముహూర్తం. కుండలిని సమావేశానికి ముందే గణించి, రెండో అయనాంశతో సరిపోల్చుతాం.',
  'v.jyotisha.count': '19 నిర్దిష్ట సేవలు',

  'v.numero.name': 'సంఖ్యా శాస్త్రం',
  'v.numero.sub': 'సంఖ్య, నామ శాస్త్రం',
  'v.numero.desc':
    'పేరు, సంతకం సవరణ; వ్యాపార, బ్రాండ్ నామకరణం; ఇల్లు, వాహనం, మొబైల్ సంఖ్యల అనుకూలత — మార్పు సూచించే ముందు ప్రతిసారీ జాతకంతో సరిపోల్చుతాం.',
  'v.numero.count': '12 నిర్దిష్ట సేవలు',

  'v.swara.name': 'స్వర శాస్త్రం, బ్రహ్మవిద్య',
  'v.swara.sub': 'శ్వాస, ఆత్మజ్ఞాన సాధనలు',
  'v.swara.desc':
    'నిష్ఠ కలిగిన సాధకుల కోసం స్వర సాధన, బ్రహ్మవిద్యలో దీర్ఘకాలిక క్రమబద్ధ మార్గదర్శనం. గురు పరంపరలో బోధన, పరిశీలన అనంతరం ప్రవేశం. ఒకే సమావేశంగా ఇవి అందించబడవు.',
  'v.swara.count': 'పరిశీలన ద్వారా మాత్రమే',

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

  's.swa.1': 'స్వర శాస్త్రం — అధ్యయనం, సాధన మార్గదర్శనం',
  's.swa.2': 'బ్రహ్మవిద్య — సాధన మార్గదర్శనం',

  's.course.1': 'వాస్తు శాస్త్రం — మౌలిక సూత్రాలు',
  's.course.2': 'జ్యోతిష శాస్త్రం — మౌలిక సూత్రాలు',
  's.course.3': 'సంఖ్యా శాస్త్రం — మౌలిక సూత్రాలు',

  'mega.swaraNote':
    'ఈ రెండు శాఖల్లో ప్రవేశం పరిశీలన అనంతరం మాత్రమే. ఇవి ఒకే సమావేశంగా అందించబడవు.',
  'mega.training': 'శిక్షణ',

  'sig.eyebrow': 'ఎక్కువగా కోరబడేవి',
  'sig.title': 'ప్రధాన సంప్రదింపులు',
  'sig.lede':
    'మా పనిలో అధిక భాగం ఈ ఆరు సేవలదే. ప్రతి దానికీ నిర్దిష్ట పరిధి, నిర్దిష్ట వ్యవధి, లిఖిత నివేదిక ఉంటాయి.',
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
    'అష్టకూట గుణ మిలన్‌ను కుజ దోషం, ఇద్దరి సప్తమ స్థానం, జనన–భాగ్య–నామ సంఖ్యలతో కలిపి చూస్తాం. రెండు వేర్వేరు అభిప్రాయాలు కాదు — ఒకే సమన్వయ నిర్ణయం.',
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
    'ప్రతి సేవకు రుసుము విడిగా నిర్ణయించి, పని ప్రారంభించే ముందు లిఖితపూర్వకంగా నిర్ధారిస్తాం.',

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
  'process.title': 'సంప్రదింపు నిజంగా ఎలా జరుగుతుంది.',
  'process.lede':
    'కూకట్‌పల్లిలో స్థలం కొంటున్నా, శ్రీపెరంబుదూర్‌లో కర్మాగారం తనిఖీ చేస్తున్నా — ఇవే అయిదు దశలు. ఏదీ ముందస్తు సన్నద్ధత లేకుండా చదవం, ఏదీ మౌఖికంగా వదిలిపెట్టం.',
  'process.1.name': 'వివరాల సేకరణ',
  'process.1.desc':
    'జనన వివరాలు, స్థల ప్రణాళికలు లేదా పత్రాలను నిర్దిష్ట ఫారం ద్వారా అందిస్తారు. జనన సమయం మీద సందేహం ఉంటే అది చెప్పి, ముందుగా సవరించిన తర్వాతే ముందుకు వెళ్తాం.',
  'process.2.name': 'సన్నద్ధత',
  'process.2.desc':
    'కుండలి, వాస్తు మండల నిర్ధారణ లేదా సంఖ్యా పట్టిక ముందుగానే సిద్ధం చేసి పరిశీలిస్తాం. మీ సమావేశ సమయంలో లెక్కలకు వెచ్చించిన సమయానికి మీకు రుసుము ఉండదు.',
  'process.3.name': 'సంప్రదింపు',
  'process.3.desc':
    '60 నుండి 90 నిమిషాలు — ఆన్‌లైన్ లేదా ప్రత్యక్షంగా, తెలుగులో లేదా ఆంగ్లంలో. ఫలితాలను వాటి వెనుక ఉన్న కారణాలతో సహా వివరిస్తాం. శాస్త్రం మౌనంగా ఉన్న చోట అది కూడా చెప్తాం.',
  'process.4.name': 'లిఖిత నివేదిక',
  'process.4.desc':
    'ఏడు పని దినాల్లోపు — పరిశీలనలు, సూచనలు, ప్రతి దాని ఆధారం, మీరు ఎంచుకున్న భాషలో. పరిహారాలను ఖర్చు, ఆశించిన ప్రభావం ఆధారంగా క్రమంలో ఇస్తాం.',
  'process.5.name': 'అనుసరణ',
  'process.5.desc':
    '90 రోజుల్లోపు ఒక సమీక్ష సమావేశం ఇందులోనే కలిసి ఉంటుంది. నిర్మాణ పనుల విషయంలో, పని పూర్తయ్యే వరకు మీ ఆర్కిటెక్ట్‌కు అదనపు రుసుము లేకుండా అందుబాటులో ఉంటాం.',

  'founder.eyebrow': 'ఆచరణ',
  'founder.title': 'శ్రీ కె. శ్రీనివాస్ రెడ్డి',
  'founder.role': 'స్థాపకులు, ప్రధాన సలహాదారు',
  'founder.p1':
    '[గురువు పేరు] వద్ద [n] సంవత్సరాలు స్థాపత్య, జ్యోతిష సంప్రదాయాలలో శిక్షణ; [సంవత్సరం] నుండి ఆచరణలో. ఈ పనిని ఎప్పుడూ వేర్వేరు సంస్థలుగా విభజించలేదు — ఎందుకంటే ఖాతాదారులు తెచ్చే ప్రశ్నలు కూడా అలా విడిపోయి ఉండవు. ఇల్లు, వివాహం, వ్యాపార నిర్ణయం సాధారణంగా ఒకే సమస్యగానే వస్తాయి.',
  'founder.p2':
    'సంప్రదింపులు వ్యక్తిగతంగానే నిర్వహిస్తారు. [సంవత్సరం] నుండి ఇచ్చిన ప్రతి కుండలి, ప్రతి ప్రణాళిక, ప్రతి నివేదిక భద్రపరచబడింది. అందుకే ఈ సంస్థ తన అంచనాల్లో సరైనవి మాత్రమే గుర్తుంచుకోకుండా, అన్నిటినీ తిరిగి సమీక్షించుకోగలుగుతుంది.',
  'founder.cred1': '[నిర్ధారించండి] జ్యోతిషంలో ఎం.ఎ. — [విశ్వవిద్యాలయం], [సంవత్సరం]',
  'founder.cred2': '[నిర్ధారించండి] పీహెచ్‌డీ పరిశోధక విద్యార్థి (నమోదైన, సిద్ధాంత గ్రంథం కొనసాగుతోంది) — [విభాగం], [విశ్వవిద్యాలయం]',
  'founder.cred3': '[సంస్థాగత అనుబంధం, ప్రచురణలు లేదా ఉపన్యాస వివరాలు]',
  'founder.alt': 'శ్రీ కె. శ్రీనివాస్ రెడ్డి తమ కార్యస్థానంలో',

  'inst.eyebrow': 'సంస్థల కోసం',
  'inst.title': 'బిల్డర్లు, కార్పొరేట్లు, సంస్థలు.',
  'inst.lede':
    'సంస్థాగత పని వేరే పద్ధతిలో నడుస్తుంది — నిర్దిష్ట పరిధి, డ్రాయింగ్ స్థాయి నివేదికలు, నియమిత సంప్రదింపు వ్యక్తి, లిఖిత గోప్యతా ఒప్పందం.',
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
    'సంస్థాగత పని ఒక పరిధి నిర్ణయ సమావేశం, లిఖిత ప్రతిపాదనతో ప్రారంభమవుతుంది.',

  'courses.eyebrow': 'శిక్షణ',
  'courses.title': 'మౌలిక కోర్సులు',
  'courses.lede':
    'చిన్న బ్యాచ్‌లలో, తెలుగు మరియు ఆంగ్లంలో, సంక్షిప్త నోట్సుతో కాక మూల గ్రంథాలతో బోధన. ఆచరణలో ఉన్న ఆర్కిటెక్టులు, ఇంటీరియర్ డిజైనర్లతో సహా నిష్ఠ కలిగిన విద్యార్థుల కోసం.',
  'courses.1.desc':
    'దిక్కులు, వాస్తు పురుష మండలం, కొలత, ఆయాది గణితం, ద్వార నిర్ణయం — మొదటి తరగతి నుండే నిజమైన స్థల ప్రణాళికను చదవడం.',
  'courses.1.dur': '12 వారాలు · వారాంతాలు',
  'courses.2.desc':
    'రాశి, నక్షత్రం, భావం, అధిపత్యం; సాఫ్ట్‌వేర్‌కు ముందు చేతితో కుండలి నిర్మాణం; యోగాలు; ధ్రువీకరించిన జీవిత సంఘటనలతో సరిపోల్చి దశా విధానం.',
  'courses.2.dur': '16 వారాలు · వారాంతాలు',
  'courses.3.desc':
    'జనన, భాగ్య, నామ సంఖ్యలు; వాడుకలో ఉన్న విధానాలు, అవి ఎక్కడ విభేదిస్తాయి; అనుకూలత పద్ధతి; పేరు మార్పును ముందుగా జాతకంతో ఎందుకు సరిపోల్చాలి.',
  'courses.3.dur': '8 వారాలు · వారాంతాలు',

  'test.eyebrow': 'వారి మాటల్లో',
  'test.title': 'సంప్రదింపు తర్వాత ఖాతాదారులు చెప్పినవి',
  'test.1.text':
    'మేము ఎంపిక చేసిన నాలుగు స్థలాల్లో ఏ రెండింటిని వదిలేయాలో, ఎందుకో — మా ఆర్కిటెక్ట్ నేరుగా అమలు చేయగల భాషలో చెప్పారు. ఆ నివేదిక అలాగే డిజైన్ బ్రీఫ్‌లోకి వెళ్లింది.',
  'test.1.who': '[ఖాతాదారు పేరు]',
  'test.1.what': 'గృహ నిర్మాణం, హైదరాబాద్',
  'test.2.text':
    'జాతకంలో స్పష్టమైన సమాధానం లేని చోట అది స్పష్టంగా చెప్పడం నాకు గుర్తుండిపోయింది. అంతకు ముందు ఎవరూ అలా చెప్పలేదు.',
  'test.2.who': '[ఖాతాదారు పేరు]',
  'test.2.what': 'జాతక విశ్లేషణ, బెంగళూరు',
  'test.3.text':
    'కర్మాగార తనిఖీని రెండు షట్‌డౌన్‌లలో దశలవారీగా చేయడంతో ఉత్పత్తికి ఎలాంటి నష్టం జరగలేదు. ఈ రంగంలో అంత ఆచరణాత్మకత అరుదు.',
  'test.3.who': '[ఖాతాదారు పేరు]',
  'test.3.what': 'తయారీ కర్మాగారం, విజయవాడ',

  'faq.eyebrow': 'నమోదుకు ముందు',
  'faq.title': 'సాధారణ ప్రశ్నలు',
  'faq.1.q': 'జనన సమయం ఖచ్చితంగా తెలిసి ఉండాలా?',
  'faq.1.a':
    'తెలిస్తే చాలా ఉపయోగం, కానీ అది తప్పనిసరి కాదు. సమయం మీద సందేహం ఉన్నా, నమోదు కాకపోయినా — ధ్రువీకరించిన జీవిత సంఘటనల ఆధారంగా జనన సమయ సవరణ చేసిన తర్వాతే ఏ అంచనా అయినా చెప్తాం; ఎంత నిశ్చయతకు చేరామో కూడా చెప్తాం.',
  'faq.2.q': 'ఇల్లు కూల్చమని చెప్తారా?',
  'faq.2.a':
    'దాదాపు ఎప్పుడూ చెప్పం. పరిహారాలను ఖర్చు క్రమంలో సూచిస్తాం — ముందు వినియోగం, దిక్కులో మార్పు; తర్వాత వస్తువులు, స్థానాల మార్పు; నిర్మాణ మార్పు కేవలం దోషం తీవ్రంగా ఉండి, మరే మార్గమూ పని చేయని చోట మాత్రమే.',
  'faq.3.q': 'ఆన్‌లైన్ సంప్రదింపు ప్రత్యక్ష సంప్రదింపు అంత నమ్మదగినదేనా?',
  'faq.3.a':
    'జ్యోతిషం, సంఖ్యా శాస్త్రం, ముహూర్తానికి — అవును; ఎందుకంటే వాటికి కావలసినవి పత్రాలు, గది కాదు. ఇప్పటికే ఉన్న భవనానికి వాస్తు మాత్రం స్థల సందర్శన, లేదా కనీసం ఉత్తర దిక్కు ధ్రువీకరించిన కొలతల ప్రణాళిక అవసరం.',
  'faq.4.q': 'సంప్రదింపు, నివేదిక తెలుగులో ఉండగలవా?',
  'faq.4.a':
    'అవును. సమావేశం, లిఖిత నివేదిక రెండూ తెలుగులో లేదా ఆంగ్లంలో అందుబాటులో ఉంటాయి; రెండింటికీ వేర్వేరు భాషలు కూడా ఎంచుకోవచ్చు. శాస్త్రీయ పదాలను రెండు భాషల్లోనూ సంస్కృతంలోనే ఉంచుతాం.',
  'faq.5.q': 'ఫలితాలకు హామీ ఇస్తారా?',
  'faq.5.a':
    'ఇవ్వం. ఇస్తామన్న వారి పట్ల జాగ్రత్తగా ఉండండి. హామీ ఇచ్చేది పద్ధతికి — చెప్పిన కారణాలు, లిఖిత రికార్డు, సమాధానం అనిశ్చితంగా ఉన్నప్పుడు అది చెప్పే నిజాయితీ.',

  'footer.blurb':
    'వాస్తు శాస్త్రం, జ్యోతిషం, సంఖ్యా శాస్త్రం, స్వర శాస్త్రం, బ్రహ్మవిద్యలలో సమగ్ర ఆచరణ. భారతదేశం, విదేశాలలో వ్యక్తులకు, సంస్థలకు సేవలు.',
  'footer.practice': 'సంస్థ',
  'footer.faq': 'ప్రశ్నలు',
  'footer.contact': 'సంప్రదించండి',
  'footer.addr': 'కేడీఆర్ నగర్ · వనపర్తి · తెలంగాణ, భారతదేశం',
  'footer.copy': '© 2026 సనాతన విద్యా కేంద్రం. సర్వ హక్కులు రిజర్వ్ చేయబడ్డాయి.',
};

export const dictionaries = { en, te } as const;
export type Lang = keyof typeof dictionaries;
