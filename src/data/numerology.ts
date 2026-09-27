import type { Vertical } from './verticalTypes';

/* ═══════════════════════════════════════════════════════════════════
   Numerology vertical — 12 sub-services.

   The failure mode this content is written against: Business Name /
   Company Name / Brand Name, and Mobile / Vehicle / House Number, can
   all read as the same paragraph with the noun swapped. Each block
   therefore names its own real-world trigger and its own inputs:
     · #4 one proprietor, a signboard    · #7 a dealer's SIM list
     · #5 several founders, a registrar  · #8 an RTA list with a deadline
     · #6 a product sold under a name    · #9 a flat you have not bought
       the company is not registered as
   And the two comparison services differ by scope: #3 compares two
   people for marriage; #12 is the flexible check for everything the
   other eleven do not cover.
   ═══════════════════════════════════════════════════════════════════ */

export const numerologyVertical: Vertical = {
  id: 'numerology',
  path: '/services/numerology',
  icon: 'numerology',
  nameKey: 'v.numero.name',
  subKey: 'v.numero.sub',
  countKey: 'v.numero.count',

  eyebrow: { en: 'Vertical three of four', te: 'నాలుగింటిలో మూడో శాఖ' },
  title: {
    en: 'Three numbers you cannot change, and one you can.',
    te: 'మార్చలేని మూడు సంఖ్యలు, మార్చగలిగే ఒకటి.',
  },
  lede: {
    en: 'Your birth number and destiny number come from a date and are fixed for life. Your name number comes from a spelling — and a spelling can be adjusted. Almost all of this work is the arithmetic of bringing the one that moves into agreement with the two that do not.',
    te: 'మీ జనన సంఖ్య, భాగ్య సంఖ్య — ఇవి తేదీ నుండి వస్తాయి, జీవితాంతం మారవు. మీ నామ సంఖ్య స్పెల్లింగ్ నుండి వస్తుంది — స్పెల్లింగ్‌ను సవరించవచ్చు. ఈ శాఖలోని పని దాదాపు అంతా, మారగలిగే దాన్ని మారని రెండింటితో సరిపోల్చే లెక్కే.',
  },
  framingTitle: {
    en: 'How a Numerology consultation runs here',
    te: 'ఇక్కడ సంఖ్యా శాస్త్ర సంప్రదింపు ఎలా జరుగుతుంది',
  },
  framing: {
    en: 'We need your full date of birth, your name exactly as you write it today — not as it appears on your birth certificate, if the two differ — and whatever specific name, number or date you are deciding about. Calculations use the Chaldean system, which we state plainly because Pythagorean values differ and that is the usual reason two numerologists give two answers. Every recommendation shows its arithmetic, so you can check it rather than take it on trust. Most of this work is time-sensitive: a dealer holds a SIM list for a day, an RTA list for a week, a registrar rejects a company name in a fortnight. Tell us your deadline when you write.',
    te: 'మాకు మీ పూర్తి జనన తేదీ, ఈ రోజు మీరు రాసే విధంగానే మీ పేరు — జనన ధ్రువీకరణ పత్రంలో ఉన్నదానికి భిన్నంగా ఉంటే, మీరు వాడేదే — అలాగే మీరు నిర్ణయించుకోవాల్సిన నిర్దిష్ట పేరు, సంఖ్య లేదా తేదీ కావాలి. లెక్కలకు కాల్డియన్ విధానం వాడతాం; దీన్ని స్పష్టంగా చెప్తాం, ఎందుకంటే పైథాగరియన్ విలువలు వేరుగా ఉంటాయి — ఇద్దరు సంఖ్యా శాస్త్రవేత్తలు రెండు వేర్వేరు సమాధానాలు ఇవ్వడానికి సాధారణ కారణం అదే. ప్రతి సూచనలోనూ లెక్క చూపిస్తాం; నమ్మకంపై కాక, మీరే సరిచూసుకోగలిగేలా. ఈ పనిలో చాలా భాగం సమయంతో ముడిపడినది: డీలర్ సిమ్ జాబితాను ఒక రోజు, ఆర్టీఏ జాబితాను ఒక వారం ఉంచుతారు; రిజిస్ట్రార్ కంపెనీ పేరును రెండు వారాల్లో తిరస్కరిస్తారు. రాసేటప్పుడు మీ గడువు కూడా చెప్పండి.',
  },
  timingLabel: { en: 'Turnaround', te: 'వ్యవధి' },
  filterAll: { en: 'All 12', te: 'అన్నీ 12' },
  bundlesTitle: {
    en: 'Three decisions that arrive together',
    te: 'కలిసి వచ్చే మూడు నిర్ణయాలు',
  },
  bundlesLede: {
    en: 'A name is rarely chosen without a date, and a date rarely without a place. These are the three combinations that turn up as one conversation.',
    te: 'పేరు ఎంపిక తేదీ లేకుండా అరుదుగా జరుగుతుంది; తేదీ స్థలం లేకుండా అరుదుగా. ఒకే సంభాషణగా వచ్చే మూడు కలయికలు ఇవి.',
  },
  faqTitle: { en: 'Asked before most corrections', te: 'చాలా సవరణలకు ముందు అడిగేవి' },
  feeLede: {
    en: 'Fees are confirmed in writing before work begins. Where a deadline is short — an RTA list, a registrar filing — say so and we will tell you honestly whether we can meet it.',
    te: 'పని ప్రారంభించే ముందు రుసుము లిఖితపూర్వకంగా నిర్ధారిస్తాం. గడువు తక్కువగా ఉంటే — ఆర్టీఏ జాబితా, రిజిస్ట్రార్ దాఖలు — అది చెప్పండి; మేము దాన్ని అందుకోగలమా లేదా నిజాయితీగా చెప్తాం.',
  },
  ctaTitle: {
    en: 'Deciding on a name, a number or a date right now?',
    te: 'ఇప్పుడే ఒక పేరు, సంఖ్య లేదా తేదీ నిర్ణయించుకుంటున్నారా?',
  },
  ctaLede: {
    en: 'Send the options you are actually choosing between, along with your date of birth and your deadline. A ranked answer is more useful to you than a general reading.',
    te: 'మీరు నిజంగా ఏవాటి మధ్య ఎంచుకుంటున్నారో ఆ ఎంపికలు, మీ జనన తేదీ, గడువుతో పాటు పంపండి. సాధారణ వివరణ కంటే క్రమబద్ధమైన సమాధానం మీకు ఎక్కువ ఉపయోగం.',
  },

  /* ── Clusters ──────────────────────────────────────────────────
     Grouped by what the client is deciding: a name for a person, a
     name for a business, a number they will carry every day, or a
     match and a date that need checking. Four groups of three.     */
  clusters: [
    {
      id: 'personal',
      label: { en: 'Personal & family names', te: 'వ్యక్తిగత, కుటుంబ నామాలు' },
      blurb: {
        en: 'The name you answer to, the one you give a child, and the one you sign.',
        te: 'మీరు పలికే పేరు, బిడ్డకు పెట్టే పేరు, మీరు సంతకం చేసే పేరు.',
      },
    },
    {
      id: 'business',
      label: { en: 'Business & brand identity', te: 'వ్యాపార, బ్రాండ్ గుర్తింపు' },
      blurb: {
        en: 'The signboard, the registered entity, and the name on the packet.',
        te: 'బోర్డు మీది పేరు, నమోదైన సంస్థ పేరు, ప్యాకెట్ మీది పేరు.',
      },
    },
    {
      id: 'daily',
      label: { en: 'Numbers you use daily', te: 'రోజువారీ సంఖ్యలు' },
      blurb: {
        en: 'A SIM, a number plate, a door number — each chosen under its own deadline.',
        te: 'సిమ్, నంబర్ ప్లేట్, ఇంటి నంబర్ — ప్రతి ఒక్కటీ దాని సొంత గడువులో.',
      },
    },
    {
      id: 'checks',
      label: { en: 'Timing & compatibility', te: 'కాలం, అనుకూలత' },
      blurb: {
        en: 'Two people, one date, or anything the other nine do not cover.',
        te: 'ఇద్దరు వ్యక్తులు, ఒక తేదీ, లేదా మిగతా తొమ్మిదింటిలో లేని ఏదైనా.',
      },
    },
  ],

  services: [
    /* ── 1 ───────────────────────────────────────────────────── */
    {
      id: 'namecorrection',
      index: 1,
      cluster: 'personal',
      name: { en: 'Personal Name & Spelling Correction', te: 'వ్యక్తిగత పేరు, స్పెల్లింగ్ సవరణ' },
      definition: {
        en: 'Evaluating how your name is actually spelled and used day to day, and adjusting it — usually by a letter or two — so its value agrees with your birth and destiny numbers.',
        te: 'రోజువారీ వాడుకలో మీ పేరు ఎలా రాయబడుతోందో పరిశీలించి, దాన్ని — సాధారణంగా ఒకటి రెండు అక్షరాల మేర — సవరించడం; తద్వారా దాని విలువ మీ జనన, భాగ్య సంఖ్యలతో సరిపోతుంది.',
      },
      examine: {
        en: [
          'Birth number from the day of the month and destiny number from the full date — both fixed for life, and the values the name has to agree with',
          'The current name’s Chaldean value taken from the spelling you actually use, not the one on your birth certificate if the two have drifted apart',
          'The compound number behind the single digit — 15 and 24 both reduce to 6 and do not behave alike',
          'Which variants are available: a doubled letter, a dropped vowel, an initial expanded or contracted — ranked by how little disruption each causes',
          'How the name is used in practice: what colleagues call you, what the payslip says, and what you actually answer to',
        ],
        te: [
          'నెలలోని తేదీ నుండి జనన సంఖ్య, పూర్తి తేదీ నుండి భాగ్య సంఖ్య — రెండూ జీవితాంతం స్థిరం; పేరు వీటితోనే సరిపోవాలి',
          'మీరు నిజంగా వాడే స్పెల్లింగ్ ఆధారంగా ప్రస్తుత పేరు కాల్డియన్ విలువ — జనన ధ్రువీకరణ పత్రంలోని పేరుతో తేడా ఉంటే, వాడుకలో ఉన్నదే',
          'ఒక అంకె వెనుక ఉన్న సంయుక్త సంఖ్య — 15, 24 రెండూ 6కి తగ్గుతాయి కానీ ఒకేలా పనిచేయవు',
          'అందుబాటులో ఉన్న మార్పులు: ఒక అక్షరం రెట్టింపు, ఒక అచ్చు తొలగింపు, పొడి అక్షరాన్ని విస్తరించడం లేదా కుదించడం — తక్కువ ఇబ్బంది కలిగించే క్రమంలో',
          'ఆచరణలో పేరు వాడకం: సహోద్యోగులు ఏమని పిలుస్తారు, జీతం చీటీలో ఏముంది, మీరు నిజంగా దేనికి స్పందిస్తారు',
        ],
      },
      who: {
        en: 'Your documents, your signature and your visiting card carry three different spellings — or you have been told your name “does not suit” you and would like the arithmetic rather than the verdict.',
        te: 'మీ పత్రాలు, సంతకం, విజిటింగ్ కార్డు — మూడింటిలో మూడు వేర్వేరు స్పెల్లింగ్‌లు ఉన్నాయి; లేదా మీ పేరు మీకు “సరిపడదు” అని ఎవరో చెప్పారు, తీర్పు కాక లెక్క కావాలి.',
      },
      receive: {
        en: 'The corrected spelling with the arithmetic shown, alternates ranked by disruption, and a note on which records are worth changing and which are not.',
        te: 'లెక్కతో సహా సవరించిన స్పెల్లింగ్, ఇబ్బంది క్రమంలో ప్రత్యామ్నాయాలు, ఏ పత్రాలు మార్చడం విలువైనదో ఏవి కాదో వివరణ.',
      },
      cta: {
        en: 'Send your name exactly as you write it today.',
        te: 'ఈ రోజు మీరు రాసే విధంగానే మీ పేరు పంపండి.',
      },
      mode: 'remote',
      timing: { en: '2–3 working days', te: '2–3 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 2 ───────────────────────────────────────────────────── */
    {
      id: 'childnaming',
      index: 2,
      cluster: 'personal',
      name: { en: 'Child Naming', te: 'శిశు నామకరణం' },
      definition: {
        en: 'Choosing a newborn’s name so that its value agrees with the child’s numbers from the start — the one occasion when this can be done without having to correct anything later.',
        te: 'నవజాత శిశువు పేరును మొదటి నుండే ఆ బిడ్డ సంఖ్యలతో సరిపోయేలా ఎంచుకోవడం — తర్వాత ఏదీ సవరించాల్సిన అవసరం లేని ఏకైక సందర్భం ఇదే.',
      },
      examine: {
        en: [
          'The child’s birth number and destiny number from the exact date of birth',
          'Where the family also wants the nakshatra syllable observed, the syllables our Jyotisha desk indicates — so that one name satisfies both requirements rather than the family ending up with two',
          'The names the family has already grown attached to, assessed before we propose any of our own; most families arrive with a shortlist and a grandmother',
          'Spelling in both Telugu and English, since the English transliteration is what carries the numeric value on every form the child will ever fill in',
          'Surname and initials included in the calculation, because that is the form the name takes in practice',
        ],
        te: [
          'ఖచ్చితమైన జనన తేదీ నుండి బిడ్డ జనన సంఖ్య, భాగ్య సంఖ్య',
          'కుటుంబం నక్షత్ర అక్షరాన్ని కూడా పాటించాలనుకుంటే, మా జ్యోతిష విభాగం సూచించే అక్షరాలు — తద్వారా రెండు పేర్లు కాకుండా, ఒకే పేరు రెండు నియమాలనూ తీరుస్తుంది',
          'కుటుంబం ఇప్పటికే మనసు పెట్టుకున్న పేర్లు — మేము మా పేర్లు సూచించే ముందే వాటిని పరిశీలిస్తాం; చాలా కుటుంబాలు ఒక జాబితాతో, ఒక అమ్మమ్మతో వస్తాయి',
          'తెలుగు, ఆంగ్లం రెండింటిలో స్పెల్లింగ్ — ఎందుకంటే బిడ్డ జీవితాంతం నింపే ప్రతి ఫారంలో సంఖ్యా విలువను మోసేది ఆంగ్ల లిప్యంతరీకరణే',
          'లెక్కలో ఇంటిపేరు, పొడి అక్షరాలు కూడా కలిపి — ఆచరణలో పేరు ఉండేది ఆ రూపంలోనే కాబట్టి',
        ],
      },
      who: {
        en: 'Naming a newborn, or fixing a name formally before the birth certificate and the school records are made.',
        te: 'నవజాత శిశువుకు నామకరణం, లేదా జనన ధ్రువీకరణ పత్రం, పాఠశాల రికార్డులు తయారయ్యే ముందే పేరును అధికారికంగా ఖరారు చేయడం.',
      },
      receive: {
        en: 'A shortlist of names with each one’s value shown, the family’s own candidates assessed alongside, and the recommended English spelling.',
        te: 'ప్రతి దాని విలువతో సహా పేర్ల జాబితా, దానితో పాటు కుటుంబం సూచించిన పేర్ల పరిశీలన, సూచించిన ఆంగ్ల స్పెల్లింగ్.',
      },
      cta: {
        en: 'Best done before the birth certificate, not after.',
        te: 'జనన ధ్రువీకరణ పత్రం తర్వాత కాదు — ముందే చేయడం మేలు.',
      },
      mode: 'remote',
      timing: { en: '3–4 working days', te: '3–4 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 11 ──────────────────────────────────────────────────── */
    {
      id: 'signature',
      index: 11,
      cluster: 'personal',
      name: { en: 'Signature Analysis', te: 'సంతక విశ్లేషణ' },
      definition: {
        en: 'The handwritten signature treated as its own unit, separate from the legal name. Most people sign something quite different from what their documents say, and that mark is what goes on every contract they enter.',
        te: 'చేతిరాత సంతకాన్ని చట్టబద్ధమైన పేరుకు వేరుగా, స్వతంత్ర అంశంగా పరిశీలించడం. చాలామంది తమ పత్రాల్లో ఉన్నదానికి పూర్తిగా భిన్నంగా సంతకం చేస్తారు — ప్రతి ఒప్పందంపై వెళ్లేది ఆ గుర్తే.',
      },
      examine: {
        en: [
          'What the signature actually spells — initials only, a first name, the full name, or a form that resolves to no readable letters at all',
          'Its numeric value where the letters are legible, read against your birth and destiny numbers',
          'Structural habits: an underline, a full stop, a stroke through your own name, an ascending or descending baseline, letters closed off or left open',
          'The gap between the signature and a corrected name spelling if you have had one — a corrected name still signed the old way has not actually been implemented',
          'Practical constraints, since a bank-verified specimen cannot be altered casually — changes are proposed in a form your bank and employer will accept',
        ],
        te: [
          'సంతకం నిజంగా ఏమి సూచిస్తోంది — కేవలం పొడి అక్షరాలా, మొదటి పేరా, పూర్తి పేరా, లేదా చదవగలిగే అక్షరాలే లేని రూపమా',
          'అక్షరాలు స్పష్టంగా ఉన్న చోట దాని సంఖ్యా విలువ, మీ జనన–భాగ్య సంఖ్యలతో పోల్చి',
          'నిర్మాణ అలవాట్లు: కింద గీత, చుక్క, సొంత పేరు మీదుగా గీత, పైకి లేదా కిందికి వాలే వరుస, మూసిన లేదా తెరిచిన అక్షరాలు',
          'పేరు సవరణ చేయించుకుని ఉంటే, సంతకానికీ దానికీ మధ్య తేడా — సవరించిన పేరును పాత పద్ధతిలోనే సంతకం చేస్తుంటే, ఆ సవరణ అమలైనట్టు కాదు',
          'ఆచరణ పరిమితులు — బ్యాంకులో ధ్రువీకరించిన నమూనాను తేలికగా మార్చలేరు; మీ బ్యాంకు, యజమాని అంగీకరించే రూపంలోనే మార్పులు సూచిస్తాం',
        ],
      },
      who: {
        en: 'You have had a name correction and want the signature to match it, or you sign in a way you have never once examined and would like it assessed on its own terms.',
        te: 'పేరు సవరణ చేయించుకున్నారు, సంతకం కూడా దానికి తగ్గట్టు ఉండాలి; లేదా ఎప్పుడూ పరిశీలించని విధంగా సంతకం చేస్తున్నారు, దాన్ని విడిగా అంచనా వేయించుకోవాలి.',
      },
      receive: {
        en: 'A written assessment with a proposed signature form, the reasoning for each change, and practice guidance for making it consistent before you update any specimen.',
        te: 'సూచించిన సంతక రూపం, ప్రతి మార్పుకూ కారణం, నమూనాలు మార్చేముందు దాన్ని స్థిరం చేసుకోవడానికి సాధన సూచనలతో కూడిన లిఖిత అంచనా.',
      },
      cta: {
        en: 'Send a clear scan of five consecutive signatures — not one careful one.',
        te: 'వరుసగా ఐదు సంతకాల స్పష్టమైన స్కాన్ పంపండి — జాగ్రత్తగా చేసిన ఒక్కటి కాదు.',
      },
      mode: 'remote',
      timing: { en: '3–4 working days', te: '3–4 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 4 ───────────────────────────────────────────────────── */
    {
      id: 'businessname',
      index: 4,
      cluster: 'business',
      name: { en: 'Business Name', te: 'వ్యాపార నామం' },
      definition: {
        en: 'For a single proprietorship — a shop, clinic, studio, agency or trading business. The name over the door, where one owner’s numbers are the ones that matter.',
        te: 'ఒకే యజమాని వ్యాపారానికి — దుకాణం, క్లినిక్, స్టూడియో, ఏజెన్సీ లేదా వర్తక వ్యాపారం. బోర్డు మీది పేరు; ఇక్కడ ముఖ్యమైనవి ఒక్క యజమాని సంఖ్యలే.',
      },
      examine: {
        en: [
          'The proprietor’s own birth and destiny numbers, since in a sole business the enterprise and the person are numerically the same entity',
          'The trading name in full, including any suffix that actually appears on the board — “& Co”, “Traders”, “Enterprises” all carry value and are routinely left out of the calculation by accident',
          'How the name will be written on the signboard, on the GST registration and on the invoice, which are frequently three different strings',
          'Pronounceability in Telugu and English, and whether customers will shorten it — a name people abbreviate has a different working value from the one you registered',
          'Availability: a numerically excellent name already in use in your trade and locality is not a candidate, however good the number',
        ],
        te: [
          'యజమాని సొంత జనన, భాగ్య సంఖ్యలు — ఏకవ్యక్తి వ్యాపారంలో సంస్థ, వ్యక్తి సంఖ్యాపరంగా ఒకటే కాబట్టి',
          'బోర్డు మీద నిజంగా కనిపించే ప్రత్యయంతో సహా పూర్తి వ్యాపార నామం — “& కో”, “ట్రేడర్స్”, “ఎంటర్‌ప్రైజెస్” అన్నిటికీ విలువ ఉంది; తరచుగా వీటిని పొరపాటున లెక్కలో వదిలేస్తారు',
          'బోర్డు మీద, జీఎస్టీ నమోదులో, ఇన్‌వాయిస్‌లో పేరు ఎలా రాయబడుతుంది — ఇవి తరచుగా మూడు వేర్వేరు రూపాలుగా ఉంటాయి',
          'తెలుగు, ఆంగ్లంలో ఉచ్చారణ; ఖాతాదారులు దాన్ని కుదిస్తారా — ప్రజలు కుదించే పేరుకు, మీరు నమోదు చేసిన పేరుకు వేర్వేరు ఆచరణ విలువలు ఉంటాయి',
          'లభ్యత: మీ రంగంలో, మీ ప్రాంతంలో ఇప్పటికే వాడుకలో ఉన్న పేరు — సంఖ్య ఎంత బాగున్నా — ఎంపికకు అర్హం కాదు',
        ],
      },
      who: {
        en: 'Opening a shop, clinic, studio, agency or trading business under your own proprietorship.',
        te: 'మీ సొంత యాజమాన్యంలో దుకాణం, క్లినిక్, స్టూడియో, ఏజెన్సీ లేదా వర్తక వ్యాపారం ప్రారంభిస్తున్నారు.',
      },
      receive: {
        en: 'A shortlist with values shown, the proprietor’s fit for each, and the exact spelling to use on the board and on the registration.',
        te: 'విలువలతో సహా పేర్ల జాబితా, ప్రతి దానికీ యజమానితో సరిపోలిక, బోర్డు మీద–నమోదులో వాడవలసిన ఖచ్చితమైన స్పెల్లింగ్.',
      },
      cta: {
        en: 'Fix the name before the signboard, not after the GST.',
        te: 'జీఎస్టీ తర్వాత కాదు — బోర్డుకు ముందే పేరు ఖరారు చేయండి.',
      },
      mode: 'both',
      timing: { en: '4–5 working days', te: '4–5 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 5 ───────────────────────────────────────────────────── */
    {
      id: 'companyname',
      index: 5,
      cluster: 'business',
      name: { en: 'Company & Institution Name', te: 'కంపెనీ, సంస్థ నామం' },
      definition: {
        en: 'For a registered legal entity — a private limited, an LLP, a trust, a school or a hospital — where the name belongs to the institution rather than to one person, and several founders’ numbers are in play.',
        te: 'నమోదైన చట్టబద్ధ సంస్థకు — ప్రైవేట్ లిమిటెడ్, ఎల్‌ఎల్‌పీ, ట్రస్ట్, పాఠశాల లేదా ఆసుపత్రి — ఇక్కడ పేరు ఒక వ్యక్తిది కాదు, సంస్థది; పలువురు స్థాపకుల సంఖ్యలు ప్రమేయంలో ఉంటాయి.',
      },
      examine: {
        en: [
          'Each promoter’s or director’s numbers, and how the proposed name sits with the group rather than only with the most senior individual',
          'The registered legal name in full, including “Private Limited”, “LLP”, “Foundation” or “Trust” — the statutory suffix is part of the string and changes the value',
          'How the name behaves once it is abbreviated into an acronym, which is what a school or hospital will actually be called locally within a year',
          'Incorporation and registration dates where those are still movable, since the entity acquires its own destiny number from the date it is registered',
          'Availability against the MCA register and the trademark record before a name reaches the shortlist — a numerically ideal name the registrar rejects has cost you a month',
        ],
        te: [
          'ప్రతి ప్రమోటర్ లేదా డైరెక్టర్ సంఖ్యలు; ప్రతిపాదిత పేరు కేవలం అత్యంత సీనియర్ వ్యక్తితో కాక, మొత్తం బృందంతో ఎలా సరిపోతుంది',
          '“ప్రైవేట్ లిమిటెడ్”, “ఎల్‌ఎల్‌పీ”, “ఫౌండేషన్”, “ట్రస్ట్”తో సహా పూర్తి చట్టబద్ధ నామం — ఈ చట్టపరమైన ప్రత్యయం కూడా పేరులో భాగమే, విలువను మారుస్తుంది',
          'పేరు సంక్షిప్త రూపంలోకి మారినప్పుడు ఎలా ఉంటుంది — ఒక ఏడాదిలో పాఠశాలను, ఆసుపత్రిని స్థానికంగా పిలిచేది ఆ సంక్షిప్త రూపంతోనే',
          'ఇంకా మార్చగలిగితే స్థాపన, నమోదు తేదీలు — నమోదైన తేదీ నుండి సంస్థకు దాని సొంత భాగ్య సంఖ్య వస్తుంది కాబట్టి',
          'జాబితాలోకి రాకముందే ఎంసీఏ రిజిస్టర్, ట్రేడ్‌మార్క్ రికార్డుతో లభ్యత పరిశీలన — సంఖ్యాపరంగా ఉత్తమమైనా రిజిస్ట్రార్ తిరస్కరిస్తే ఒక నెల నష్టం',
        ],
      },
      who: {
        en: 'Incorporating a company, registering a trust or society, or naming a school, college or hospital whose name has to outlast its founders.',
        te: 'కంపెనీ స్థాపన, ట్రస్ట్ లేదా సంఘం నమోదు, లేదా స్థాపకుల తర్వాత కూడా నిలిచే పాఠశాల, కళాశాల, ఆసుపత్రి నామకరణం.',
      },
      receive: {
        en: 'A shortlist already cleared against the registry, the value calculation for each with the statutory suffix included, and a recommended incorporation date window.',
        te: 'రిజిస్టర్‌తో సరిపోల్చి ఇచ్చిన పేర్ల జాబితా, చట్టపరమైన ప్రత్యయంతో సహా ప్రతి దాని విలువ లెక్క, సూచించిన స్థాపన తేదీ కాలం.',
      },
      cta: {
        en: 'Bring your top three names before you file with the registrar.',
        te: 'రిజిస్ట్రార్‌కు దాఖలు చేసేముందు మీ మూడు ఉత్తమ పేర్లు తీసుకురండి.',
      },
      mode: 'both',
      timing: { en: '5–7 working days', te: '5–7 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 6 ───────────────────────────────────────────────────── */
    {
      id: 'brandname',
      index: 6,
      cluster: 'business',
      name: { en: 'Brand Name', te: 'బ్రాండ్ నామం' },
      definition: {
        en: 'The name a product or service is sold under, which is frequently not the company’s registered name. A firm registered as “Sri Lakshmi Foods Private Limited” may sell under three brands — and each of those is its own numeric decision.',
        te: 'ఉత్పత్తి లేదా సేవ ఏ పేరుతో అమ్ముడవుతుందో ఆ పేరు — ఇది తరచుగా కంపెనీ నమోదిత పేరు కాదు. “శ్రీ లక్ష్మీ ఫుడ్స్ ప్రైవేట్ లిమిటెడ్”గా నమోదైన సంస్థ మూడు బ్రాండ్ల కింద అమ్మవచ్చు — ప్రతి బ్రాండ్ ఒక ప్రత్యేక సంఖ్యా నిర్ణయం.',
      },
      examine: {
        en: [
          'The brand’s value read against the promoter’s numbers and, where the two differ, against the registered entity’s',
          'Whether the brand should agree with the parent company’s number or deliberately differ — a house of several brands does not want them all carrying the same value',
          'The brand as consumers will actually write it: with or without the prefix, in an app store listing, on the packaging, typed into a search box',
          'Trademark class availability, because a brand name that cannot be registered in your class is not a brand name',
          'Sub-brand and product-line naming, so a range can extend later without each addition needing a fresh consultation',
        ],
        te: [
          'ప్రమోటర్ సంఖ్యలతో బ్రాండ్ విలువ పోలిక; రెండూ వేరైతే నమోదిత సంస్థ సంఖ్యతో కూడా',
          'బ్రాండ్ మాతృ సంస్థ సంఖ్యతో సరిపోవాలా, ఉద్దేశపూర్వకంగా వేరుగా ఉండాలా — అనేక బ్రాండ్లున్న సంస్థకు అన్నీ ఒకే విలువ మోయడం అవసరం లేదు',
          'వినియోగదారులు నిజంగా ఎలా రాస్తారో ఆ రూపంలో బ్రాండ్: ఉపసర్గతో లేదా లేకుండా, యాప్ స్టోర్‌లో, ప్యాకేజింగ్ మీద, సెర్చ్ బాక్స్‌లో',
          'ట్రేడ్‌మార్క్ తరగతిలో లభ్యత — మీ తరగతిలో నమోదు కాని పేరు అసలు బ్రాండ్ పేరే కాదు',
          'ఉప–బ్రాండ్, ఉత్పత్తి శ్రేణి నామకరణం — తర్వాత శ్రేణి విస్తరించినప్పుడు ప్రతి కొత్త దానికీ మళ్లీ సంప్రదింపు అవసరం లేకుండా',
        ],
      },
      who: {
        en: 'A company launching a consumer-facing product line, rebranding an existing product, or running several brands under one registered entity.',
        te: 'వినియోగదారుల కోసం కొత్త ఉత్పత్తి శ్రేణిని ప్రారంభిస్తున్న, ఉన్న ఉత్పత్తికి కొత్త పేరు పెడుతున్న, లేదా ఒకే నమోదిత సంస్థ కింద అనేక బ్రాండ్లు నడుపుతున్న కంపెనీ.',
      },
      receive: {
        en: 'A brand shortlist with values, the relationship to the parent entity’s number stated, and the exact written form to use on packaging and in digital listings.',
        te: 'విలువలతో బ్రాండ్ పేర్ల జాబితా, మాతృ సంస్థ సంఖ్యతో సంబంధం స్పష్టంగా, ప్యాకేజింగ్‌లో–ఆన్‌లైన్‌లో వాడవలసిన ఖచ్చితమైన రూపం.',
      },
      cta: {
        en: 'If your company name and your shop board differ, this is the service you want.',
        te: 'మీ కంపెనీ పేరు, దుకాణం బోర్డు వేరుగా ఉంటే — మీకు కావలసింది ఈ సేవే.',
      },
      mode: 'both',
      timing: { en: '5–7 working days', te: '5–7 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 7 ───────────────────────────────────────────────────── */
    {
      id: 'mobile',
      index: 7,
      cluster: 'daily',
      name: { en: 'Mobile Number Compatibility', te: 'మొబైల్ సంఖ్య అనుకూలత' },
      definition: {
        en: 'Assessing a mobile number — one you are about to buy, or the one you have carried for a decade — against your own fixed numbers.',
        te: 'ఒక మొబైల్ సంఖ్యను — కొనబోతున్నదైనా, పదేళ్లుగా వాడుతున్నదైనా — మీ స్థిర సంఖ్యలతో పోల్చి అంచనా వేయడం.',
      },
      examine: {
        en: [
          'The full number’s digit sum and its compound value, together with the last four digits, which carry disproportionate weight because they are what people remember and dial',
          'Agreement with your birth and destiny numbers, and with your corrected name value if you have had one done',
          'Repeating and absent digits in the sequence, and whether the number contains any run traditionally avoided',
          'What the number is actually for — a personal line, a business line printed on a board, or the number tied to your bank and UPI alerts each want a different fit',
          'Where the number cannot be changed, what can be adjusted instead: which line is used for what, and which number goes on the visiting card',
        ],
        te: [
          'పూర్తి సంఖ్య అంకెల మొత్తం, దాని సంయుక్త విలువ; వాటితో పాటు చివరి నాలుగు అంకెలు — ప్రజలు గుర్తుంచుకుని డయల్ చేసేవి అవే కాబట్టి వాటికి ఎక్కువ ప్రాధాన్యం',
          'మీ జనన, భాగ్య సంఖ్యలతో సరిపోలిక; పేరు సవరణ చేయించుకుని ఉంటే ఆ విలువతో కూడా',
          'వరుసలో పునరావృతమయ్యే, లేని అంకెలు; సాంప్రదాయంగా వదిలేసే వరుస ఏదైనా సంఖ్యలో ఉందా',
          'ఆ సంఖ్య దేనికి వాడతారు — వ్యక్తిగత లైన్, బోర్డు మీద ముద్రించే వ్యాపార లైన్, లేదా బ్యాంకు–యూపీఐ సందేశాలకు అనుసంధానమైన నంబర్ — ప్రతి దానికీ వేరే సరిపోలిక కావాలి',
          'సంఖ్య మార్చలేని చోట బదులుగా ఏమి సర్దుబాటు చేయవచ్చు: ఏ లైన్ దేనికి వాడాలి, విజిటింగ్ కార్డు మీద ఏ నంబర్ ఉండాలి',
        ],
      },
      who: {
        en: 'Buying a new SIM or choosing from a dealer’s list of available numbers, or considering porting away from a number you suspect does not suit you.',
        te: 'కొత్త సిమ్ కొంటున్నారు లేదా డీలర్ ఇచ్చిన అందుబాటు సంఖ్యల జాబితా నుండి ఎంచుకుంటున్నారు; లేదా సరిపడదని అనుమానిస్తున్న నంబర్ నుండి మారాలనుకుంటున్నారు.',
      },
      receive: {
        en: 'A ranked assessment of the numbers you are choosing between, or of the one you hold, with the reasoning and a plain verdict on whether a change is worth the disruption.',
        te: 'మీరు ఎంచుకుంటున్న సంఖ్యల క్రమబద్ధ అంచనా, లేదా మీ దగ్గరున్న దాని అంచనా — కారణాలతో, మార్పు ఇబ్బందికి తగినదా కాదా అనే స్పష్టమైన నిర్ణయంతో.',
      },
      cta: {
        en: 'Send the dealer’s list. We will rank it.',
        te: 'డీలర్ జాబితా పంపండి. క్రమంలో పెట్టి ఇస్తాం.',
      },
      mode: 'remote',
      timing: { en: '1–2 working days', te: '1–2 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 8 ───────────────────────────────────────────────────── */
    {
      id: 'vehicle',
      index: 8,
      cluster: 'daily',
      name: { en: 'Vehicle Number Compatibility', te: 'వాహన సంఖ్య అనుకూలత' },
      definition: {
        en: 'Choosing or evaluating a registration number at the point of purchase, when the RTA choice list is in front of you and the decision has a deadline attached.',
        te: 'కొనుగోలు సమయంలో నమోదు సంఖ్య ఎంపిక లేదా అంచనా — ఆర్టీఏ జాబితా మీ ముందు ఉండి, నిర్ణయానికి గడువు ఉన్నప్పుడు.',
      },
      examine: {
        en: [
          'The numeric portion of the registration, and the full string including the state and series letters exactly as it will appear on the plate',
          'Agreement with the primary driver’s numbers — which is not always the registered owner, and the distinction matters more than people expect',
          'Whether the vehicle is personal, commercial or a fleet addition, since a goods vehicle is assessed against the business’s numbers rather than an individual’s',
          'The delivery and registration dates, which are frequently still movable and worth aligning while they are',
          'Fancy-number auction lists where the family is willing to pay for a choice, ranked so you know what is worth bidding for and what is not',
        ],
        te: [
          'నమోదు సంఖ్యలోని అంకెల భాగం; ప్లేట్ మీద కనిపించే విధంగా రాష్ట్ర, సిరీస్ అక్షరాలతో సహా పూర్తి రూపం',
          'ప్రధానంగా నడిపే వ్యక్తి సంఖ్యలతో సరిపోలిక — అది ఎప్పుడూ నమోదిత యజమానే కానవసరం లేదు; ఈ తేడా అనుకున్నదానికంటే ముఖ్యం',
          'వాహనం వ్యక్తిగతమా, వాణిజ్యమా, ఫ్లీట్‌కు అదనమా — సరుకు రవాణా వాహనాన్ని వ్యక్తి సంఖ్యలతో కాక వ్యాపార సంఖ్యలతో పోల్చుతాం',
          'డెలివరీ, నమోదు తేదీలు — తరచుగా ఇవి ఇంకా మార్చగలిగేవే; మార్చగలిగినంత వరకు వాటిని సరిపోల్చడం విలువైనది',
          'కుటుంబం ప్రత్యేక నంబర్ కోసం చెల్లించడానికి సిద్ధమైతే ఫ్యాన్సీ నంబర్ వేలం జాబితా — దేనికి బిడ్ వేయడం విలువైనదో, దేనికి కాదో తెలిసేలా క్రమంలో',
        ],
      },
      who: {
        en: 'Taking delivery of a new vehicle, choosing from an RTA fancy-number list, or adding a vehicle to a commercial fleet.',
        te: 'కొత్త వాహనం డెలివరీ తీసుకుంటున్నారు, ఆర్టీఏ ఫ్యాన్సీ నంబర్ జాబితా నుండి ఎంచుకుంటున్నారు, లేదా వాణిజ్య ఫ్లీట్‌కు వాహనం చేర్చుతున్నారు.',
      },
      receive: {
        en: 'A ranked list of the numbers actually available to you with the reasoning, and a recommended delivery and registration date if those are still open.',
        te: 'మీకు నిజంగా అందుబాటులో ఉన్న సంఖ్యల క్రమబద్ధ జాబితా, కారణాలతో; తేదీలు ఇంకా మార్చగలిగితే సూచించిన డెలివరీ, నమోదు తేదీ.',
      },
      cta: {
        en: 'An RTA list is usually valid for days. Send it as soon as you have it.',
        te: 'ఆర్టీఏ జాబితా సాధారణంగా కొన్ని రోజులే చెల్లుతుంది. అందిన వెంటనే పంపండి.',
      },
      mode: 'remote',
      timing: { en: '1–2 working days', te: '1–2 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 9 ───────────────────────────────────────────────────── */
    {
      id: 'house',
      index: 9,
      cluster: 'daily',
      name: { en: 'House & Flat Number Compatibility', te: 'ఇల్లు, ఫ్లాట్ సంఖ్య అనుకూలత' },
      definition: {
        en: 'Assessing the number of a home you are considering, or one you already live in — the door number, the flat number and the block designation, which are three separate values.',
        te: 'మీరు పరిశీలిస్తున్న లేదా ఇప్పటికే నివసిస్తున్న ఇంటి సంఖ్య అంచనా — ఇంటి నంబరు, ఫ్లాట్ నంబరు, బ్లాక్ గుర్తు; ఇవి మూడు వేర్వేరు విలువలు.',
      },
      examine: {
        en: [
          'The flat or door number, the block or tower designation, and the plot number where one exists — each calculated separately, since residents of the same building carry different numbers',
          'Agreement with the numbers of the head of the household and, where these differ substantially, of the family taken as a group',
          'Which number actually governs: for apartments the door number and the number on the sale deed routinely differ, and it is the door you live behind',
          'The floor level and its own value, which is regularly overlooked in apartment purchases',
          'Coordination with our Vastu desk where the same property is also being assessed for direction and layout, so you receive one opinion rather than two',
        ],
        te: [
          'ఫ్లాట్ లేదా ఇంటి నంబరు, బ్లాక్ లేదా టవర్ గుర్తు, ఉంటే ప్లాట్ నంబరు — ప్రతి ఒక్కటీ విడిగా లెక్కించి; ఒకే భవనంలోని నివాసులకు వేర్వేరు సంఖ్యలు ఉంటాయి కాబట్టి',
          'గృహ యజమాని సంఖ్యలతో సరిపోలిక; అవి బాగా వేరుగా ఉంటే కుటుంబాన్ని మొత్తంగా తీసుకుని',
          'నిజంగా ఏ సంఖ్య ముఖ్యం: అపార్ట్‌మెంట్లలో ఇంటి నంబరు, అమ్మకపు పత్రంలోని నంబరు తరచుగా వేరుగా ఉంటాయి — మీరు నివసించేది ఆ తలుపు వెనుకే',
          'అంతస్తు స్థాయి, దాని సొంత విలువ — అపార్ట్‌మెంట్ కొనుగోళ్లలో దీన్ని తరచుగా విస్మరిస్తారు',
          'అదే ఆస్తిని దిక్కు, ప్రణాళిక కోసం కూడా పరిశీలిస్తుంటే మా వాస్తు విభాగంతో సమన్వయం — రెండు అభిప్రాయాలు కాక ఒకటే వచ్చేలా',
        ],
      },
      who: {
        en: 'Choosing between flats in a project, evaluating a house before purchase, or living somewhere that has not settled and wondering whether the number is a factor.',
        te: 'ఒక ప్రాజెక్టులో ఫ్లాట్ల మధ్య ఎంపిక, కొనుగోలుకు ముందు ఇంటి పరిశీలన, లేదా కుదుటపడని చోట నివసిస్తూ సంఖ్య కారణమా అని ఆలోచిస్తున్నవారు.',
      },
      receive: {
        en: 'A written assessment of each address under consideration with a comparative ranking, and where the number is already fixed, what can practically be adjusted.',
        te: 'పరిశీలనలో ఉన్న ప్రతి చిరునామాకూ లిఖిత అంచనా, పోల్చిన క్రమంతో; సంఖ్య ఇప్పటికే స్థిరమైతే ఆచరణలో ఏమి సర్దుబాటు చేయవచ్చో కూడా.',
      },
      cta: {
        en: 'Send the flat numbers you are choosing between. We will rank them.',
        te: 'మీరు ఎంచుకుంటున్న ఫ్లాట్ నంబర్లు పంపండి. క్రమంలో పెట్టి ఇస్తాం.',
      },
      mode: 'remote',
      timing: { en: '2–3 working days', te: '2–3 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 3 ───────────────────────────────────────────────────── */
    {
      id: 'marriage',
      index: 3,
      cluster: 'checks',
      name: {
        en: 'Marriage Compatibility (Birth, Destiny & Name Numbers)',
        te: 'వివాహ అనుకూలత (జనన, భాగ్య, నామ సంఖ్యలు)',
      },
      definition: {
        en: 'A numeric comparison between two people considering marriage — their birth, destiny and name numbers read against one another.',
        te: 'వివాహాన్ని పరిశీలిస్తున్న ఇద్దరి మధ్య సంఖ్యా పోలిక — వారి జనన, భాగ్య, నామ సంఖ్యలను ఒకదానితో ఒకటి పోల్చి.',
      },
      examine: {
        en: [
          'Both birth numbers and their traditional relationship — friendly, neutral or contending',
          'Both destiny numbers, which carry more weight than the birth numbers wherever the two disagree',
          'Name numbers as they currently stand, and whether a spelling correction on either side would change the picture materially',
          'The composite of the two dates, and the periods it points to in the early years of the marriage',
          'Where the numeric reading and the Guna Milan from our Jyotisha desk disagree — we reconcile them and tell you which we weighted, and why',
        ],
        te: [
          'ఇద్దరి జనన సంఖ్యలు, వాటి సాంప్రదాయ సంబంధం — మిత్రమా, తటస్థమా, విరుద్ధమా',
          'ఇద్దరి భాగ్య సంఖ్యలు — రెండూ విభేదించిన చోట జనన సంఖ్యల కంటే వీటికే ఎక్కువ ప్రాధాన్యం',
          'ప్రస్తుతం ఉన్న నామ సంఖ్యలు; ఏ ఒక్క వైపు స్పెల్లింగ్ సవరణ అయినా చిత్రాన్ని గణనీయంగా మారుస్తుందా',
          'రెండు తేదీల సమ్మిళిత విలువ; అది వివాహ తొలి సంవత్సరాల్లో సూచించే కాలాలు',
          'సంఖ్యా ఫలితం, మా జ్యోతిష విభాగం గుణ మిలన్ విభేదించిన చోట — వాటిని సమన్వయం చేసి, దేనికి ఎక్కువ ప్రాధాన్యం ఇచ్చామో, ఎందుకో చెప్తాం',
        ],
      },
      who: {
        en: 'A family or a couple evaluating a proposal who want the numeric view, either on its own or alongside the astrological compatibility.',
        te: 'సంబంధాన్ని పరిశీలిస్తున్న కుటుంబం లేదా జంట — సంఖ్యా దృష్టికోణం విడిగా, లేదా జ్యోతిష అనుకూలతతో పాటు కావాలి.',
      },
      receive: {
        en: 'A compatibility sheet with each number set compared, a stated conclusion, and — if you have taken Guna Milan as well — one reconciled opinion rather than two.',
        te: 'ప్రతి సంఖ్యా జతను పోల్చిన అనుకూలత పత్రం, స్పష్టమైన నిర్ణయం; గుణ మిలన్ కూడా తీసుకుంటే రెండు కాక ఒకే సమన్వయ అభిప్రాయం.',
      },
      cta: {
        en: 'Take this with Guna Milan, not instead of it.',
        te: 'గుణ మిలన్‌కు బదులుగా కాదు — దానితో పాటు తీసుకోండి.',
      },
      mode: 'both',
      timing: { en: '3–4 working days', te: '3–4 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 10 ──────────────────────────────────────────────────── */
    {
      id: 'dateselection',
      index: 10,
      cluster: 'checks',
      name: { en: 'Auspicious Date Selection', te: 'శుభ తేదీ ఎంపిక' },
      definition: {
        en: 'Choosing a date whose numeric value agrees with the people involved and with the purpose — a marriage, a launch, a registration, a griha pravesh or a signing.',
        te: 'సంబంధిత వ్యక్తులతో, కార్య ప్రయోజనంతో సంఖ్యాపరంగా సరిపోయే తేదీ ఎంపిక — వివాహం, ప్రారంభోత్సవం, రిజిస్ట్రేషన్, గృహ ప్రవేశం లేదా ఒప్పంద సంతకం.',
      },
      examine: {
        en: [
          'The numeric value of each candidate date and its relationship to the birth and destiny numbers of the principals',
          'The purpose, since the number that suits a marriage does not suit a business launch — these are assessed against different criteria, not one general “good dates” list',
          'The day of the week and its ruling number alongside the date, which people frequently calculate separately and then forget to reconcile',
          'Practical constraints first: the dates you can actually use, given a hall booking, a registrar’s calendar, a doctor’s schedule or a financial year end',
          'Where you have also taken Muhurtham from our Jyotisha desk, the two are reconciled before anything reaches you — a numerically strong date the panchanga rejects is of no use to you',
        ],
        te: [
          'ప్రతి ప్రతిపాదిత తేదీ సంఖ్యా విలువ; సంబంధిత వ్యక్తుల జనన, భాగ్య సంఖ్యలతో దాని సంబంధం',
          'కార్య ప్రయోజనం — వివాహానికి సరిపోయే సంఖ్య వ్యాపార ప్రారంభానికి సరిపోదు; ఒకే “శుభ తేదీల” జాబితా కాకుండా, వేర్వేరు ప్రమాణాలతో పరిశీలన',
          'తేదీతో పాటు వారం, దాని అధిపతి సంఖ్య — వీటిని విడిగా లెక్కించి, తర్వాత సమన్వయం చేయడం మరిచిపోవడం సాధారణం',
          'ముందు ఆచరణ పరిమితులు: కల్యాణ మండపం బుకింగ్, రిజిస్ట్రార్ క్యాలెండర్, వైద్యుని సమయం, ఆర్థిక సంవత్సర ముగింపు — వీటిని బట్టి మీరు నిజంగా వాడగలిగే తేదీలు',
          'మా జ్యోతిష విభాగం నుండి ముహూర్తం కూడా తీసుకుంటే, మీకు ఏదీ చేరకముందే రెండింటినీ సమన్వయం చేస్తాం — పంచాంగం తిరస్కరించిన తేదీ సంఖ్యాపరంగా బలంగా ఉన్నా ఉపయోగం లేదు',
        ],
      },
      who: {
        en: 'Fixing a wedding, a shop opening, a registration, a griha pravesh or the signing of an agreement, and wanting the numeric view on the date.',
        te: 'వివాహం, దుకాణం ప్రారంభం, రిజిస్ట్రేషన్, గృహ ప్రవేశం లేదా ఒప్పంద సంతకానికి తేదీ ఖరారు చేస్తూ, దానిపై సంఖ్యా దృష్టికోణం కావాలి.',
      },
      receive: {
        en: 'A ranked list of usable dates with the value of each shown, and — where Muhurtham was also taken — a single reconciled recommendation.',
        te: 'ప్రతి దాని విలువతో సహా వాడగలిగే తేదీల క్రమబద్ధ జాబితా; ముహూర్తం కూడా తీసుకుంటే ఒకే సమన్వయ సూచన.',
      },
      cta: {
        en: 'Send the dates actually available to you, not a blank calendar.',
        te: 'ఖాళీ క్యాలెండర్ కాదు — మీకు నిజంగా అందుబాటులో ఉన్న తేదీలు పంపండి.',
      },
      mode: 'remote',
      timing: { en: '2–3 working days', te: '2–3 పని దినాలు' },
      fee: '₹ —',
    },

    /* ── 12 ──────────────────────────────────────────────────── */
    {
      id: 'general',
      index: 12,
      cluster: 'checks',
      name: { en: 'General Number Compatibility Check', te: 'సాధారణ సంఖ్యా అనుకూలత పరిశీలన' },
      definition: {
        en: 'The flexible check for anything the other eleven services do not cover — a bank account, a locker, a domain, a shop unit number, a pen name, a nickname, a date you are turning over.',
        te: 'మిగతా పదకొండు సేవల్లో లేని దేనికైనా సౌలభ్యమైన పరిశీలన — బ్యాంకు ఖాతా, లాకర్, డొమైన్, దుకాణం యూనిట్ నంబరు, కలం పేరు, ముద్దు పేరు, లేదా మీరు ఆలోచిస్తున్న ఒక తేదీ.',
      },
      examine: {
        en: [
          'Your fixed numbers — birth and destiny — which are the constant every other value gets checked against',
          'The specific string, number or date you bring, calculated in full rather than approximated down to its first digit',
          'Whether the thing is worth checking at all: some numbers you cannot choose and do not carry enough weight to be worth worrying about, and we will say so',
          'Where an item overlaps a named service above, we route you to that service rather than charging you for the general check',
          'How many such questions you have — this is often taken as a single sitting covering four or five small decisions at once',
        ],
        te: [
          'మీ స్థిర సంఖ్యలు — జనన, భాగ్య; ప్రతి ఇతర విలువను వీటితోనే పోల్చుతాం',
          'మీరు తెచ్చిన నిర్దిష్ట పదం, సంఖ్య లేదా తేదీ — మొదటి అంకెకు కుదించకుండా పూర్తిగా లెక్కించి',
          'అసలు దీన్ని పరిశీలించడం విలువైనదా: మీరు ఎంచుకోలేని కొన్ని సంఖ్యలు అంత ప్రభావం చూపవు — అలా అయితే అదే చెప్తాం',
          'పైన ఉన్న నిర్దిష్ట సేవలో వచ్చే విషయమైతే, సాధారణ పరిశీలనకు రుసుము తీసుకోకుండా ఆ సేవకే పంపిస్తాం',
          'మీ దగ్గర ఇలాంటి ప్రశ్నలు ఎన్ని ఉన్నాయి — నాలుగైదు చిన్న నిర్ణయాలను ఒకే సమావేశంలో కలిపి చూడటం సాధారణం',
        ],
      },
      who: {
        en: 'You have a number, name or date question that does not fit the list above, or several small ones you would rather clear in one sitting.',
        te: 'పై జాబితాలో సరిపోని సంఖ్య, పేరు లేదా తేదీ ప్రశ్న ఉంది; లేదా ఒకే సమావేశంలో తేల్చుకోవాలనుకునే చిన్న ప్రశ్నలు కొన్ని ఉన్నాయి.',
      },
      receive: {
        en: 'A written answer for each item you bring, with the calculation shown, and a plain statement wherever the number does not matter enough to act on.',
        te: 'మీరు తెచ్చిన ప్రతి అంశానికీ లెక్కతో సహా లిఖిత సమాధానం; చర్య తీసుకునేంత ప్రాముఖ్యత లేని చోట అది స్పష్టంగా చెబుతూ.',
      },
      cta: {
        en: 'Bring your list. Four small questions cost less than four consultations.',
        te: 'మీ జాబితా తీసుకురండి. నాలుగు చిన్న ప్రశ్నలకు నాలుగు సంప్రదింపుల ఖర్చు ఉండదు.',
      },
      mode: 'both',
      timing: { en: '2–3 working days', te: '2–3 పని దినాలు' },
      fee: '₹ —',
    },
  ],

  /* ── Bundles ─────────────────────────────────────────────────── */
  bundles: [
    {
      id: 'launch',
      name: { en: 'New Business Launch', te: 'నూతన వ్యాపార ప్రారంభం' },
      includes: ['businessname', 'brandname', 'dateselection'],
      crossVertical: {
        en: 'with the premises checked by the Vastu desk and the promoter’s chart by Jyotisha',
        te: 'వాస్తు విభాగం పరిశీలించిన స్థలం, జ్యోతిష విభాగం చూసిన ప్రమోటర్ జాతకంతో కలిపి',
      },
      value: {
        en: 'The registered name, the name customers will actually see, and the opening date — decided together, since changing any one of them afterwards means reprinting all three.',
        te: 'నమోదిత పేరు, ఖాతాదారులు నిజంగా చూసే పేరు, ప్రారంభ తేదీ — అన్నీ కలిపి నిర్ణయం; తర్వాత ఏ ఒక్కటి మార్చినా మూడూ మళ్లీ ముద్రించాల్సి వస్తుంది కాబట్టి.',
      },
    },
    {
      id: 'baby',
      name: { en: 'New Baby', te: 'నూతన శిశువు' },
      includes: ['childnaming', 'dateselection'],
      crossVertical: {
        en: 'with the nakshatra syllables from the Jyotisha desk, so one name satisfies both',
        te: 'జ్యోతిష విభాగం నుండి నక్షత్ర అక్షరాలతో కలిపి — ఒకే పేరు రెండు నియమాలనూ తీర్చేలా',
      },
      value: {
        en: 'The name and the naming-ceremony date settled in one pass, before the birth certificate is drawn up and the spelling becomes something you have to correct later.',
        te: 'పేరు, నామకరణ తేదీ ఒకేసారి ఖరారు — జనన ధ్రువీకరణ పత్రం తయారై, స్పెల్లింగ్ తర్వాత సవరించాల్సిన స్థితి రాకముందే.',
      },
    },
    {
      id: 'home',
      name: { en: 'New Home', te: 'నూతన గృహం' },
      includes: ['house', 'dateselection'],
      crossVertical: {
        en: 'with direction and layout from the Vastu desk on the same property',
        te: 'అదే ఆస్తిపై వాస్తు విభాగం నుండి దిక్కు, ప్రణాళిక పరిశీలనతో కలిపి',
      },
      value: {
        en: 'Which flat to take and when to move into it — one assessment covering the number and the griha pravesh date, rather than two people giving you two answers about the same address.',
        te: 'ఏ ఫ్లాట్ తీసుకోవాలి, ఎప్పుడు ప్రవేశించాలి — సంఖ్య, గృహ ప్రవేశ తేదీ రెండింటినీ కలిపిన ఒకే అంచనా; ఒకే చిరునామా గురించి ఇద్దరు రెండు సమాధానాలు ఇవ్వకుండా.',
      },
    },
  ],

  /* ── FAQ ─────────────────────────────────────────────────────── */
  faqs: [
    {
      id: 'legal',
      q: {
        en: 'Do I have to legally change my name after a spelling correction?',
        te: 'స్పెల్లింగ్ సవరణ తర్వాత పేరును చట్టబద్ధంగా మార్చుకోవాలా?',
      },
      a: {
        en: 'Usually not, and we will tell you plainly when it is not worth it. What carries the value is the form in daily use — how you write it, how you introduce yourself, what appears on your card and your email signature. Legal records matter where they are read aloud or used constantly, so most people update the visiting card, the email and the signature, and leave the PAN and the passport alone. If you do want the statutory change, we will say which documents actually need to follow and in what order.',
        te: 'సాధారణంగా అవసరం లేదు; అవసరం లేని చోట అది స్పష్టంగా చెప్తాం. విలువను మోసేది రోజువారీ వాడుకలో ఉన్న రూపమే — మీరు ఎలా రాస్తారు, ఎలా పరిచయం చేసుకుంటారు, కార్డు మీద–ఈమెయిల్‌లో ఏముంది. చట్టపరమైన పత్రాలు తరచుగా చదవబడే చోట ముఖ్యం; అందుకే చాలామంది విజిటింగ్ కార్డు, ఈమెయిల్, సంతకం మార్చుకుని పాన్, పాస్‌పోర్ట్ అలాగే ఉంచుతారు. మీరు చట్టపరమైన మార్పే కోరుకుంటే, ఏ పత్రాలు ఏ క్రమంలో మారాలో చెప్తాం.',
      },
    },
    {
      id: 'destiny-vs-name',
      q: {
        en: 'How is a Destiny Number different from a Name Number?',
        te: 'భాగ్య సంఖ్యకూ, నామ సంఖ్యకూ తేడా ఏమిటి?',
      },
      a: {
        en: 'The destiny number comes from your full date of birth and cannot be changed by anyone. The name number comes from the letters of the name you use, and changes the moment the spelling changes. That is the whole basis of this work: the two fixed numbers are the standard, and the name is the one variable you are allowed to adjust to meet it. A consultant who offers to change your destiny number is not offering numerology.',
        te: 'భాగ్య సంఖ్య మీ పూర్తి జనన తేదీ నుండి వస్తుంది; దాన్ని ఎవరూ మార్చలేరు. నామ సంఖ్య మీరు వాడే పేరులోని అక్షరాల నుండి వస్తుంది; స్పెల్లింగ్ మారిన క్షణమే అది మారుతుంది. ఈ శాఖ మొత్తం ఆధారం ఇదే: మారని రెండు సంఖ్యలు ప్రమాణం, వాటిని అందుకోవడానికి మార్చగలిగేది పేరు ఒక్కటే. మీ భాగ్య సంఖ్యను మారుస్తానని చెప్పేవారు సంఖ్యా శాస్త్రం చెప్పడం లేదు.',
      },
    },
    {
      id: 'brand-fix',
      q: {
        en: 'Can a business keep its existing name and fix the numbers through the brand or logo instead?',
        te: 'వ్యాపారం ఉన్న పేరునే ఉంచుకుని, బ్రాండ్ లేదా లోగో ద్వారా సంఖ్యలను సరిచేయవచ్చా?',
      },
      a: {
        en: 'Often, yes, and it is usually the cheaper route. A registered entity name that has years of GST filings, contracts and goodwill behind it is expensive to change, but the brand a customer actually sees can be chosen freely — which is exactly why Brand Name is a separate service here. What a logo cannot do is carry a number on its own; it is the written name that is calculated, so a redesign that keeps the same spelling changes nothing numerically. We will tell you which of the two you are actually asking about.',
        te: 'తరచుగా అవును, అదే చౌకైన మార్గం కూడా. ఏళ్ల జీఎస్టీ దాఖలులు, ఒప్పందాలు, గుడ్‌విల్ ఉన్న నమోదిత సంస్థ పేరును మార్చడం ఖరీదైనది; కానీ ఖాతాదారు నిజంగా చూసే బ్రాండ్‌ను స్వేచ్ఛగా ఎంచుకోవచ్చు — ఇక్కడ బ్రాండ్ నామం విడి సేవగా ఉండటానికి కారణం అదే. లోగో మాత్రం సొంతంగా ఒక సంఖ్యను మోయలేదు; లెక్కించేది రాసిన పేరునే. కాబట్టి అదే స్పెల్లింగ్ ఉంచి చేసిన కొత్త డిజైన్ సంఖ్యాపరంగా ఏమీ మార్చదు. మీరు నిజంగా అడుగుతున్నది ఏ దాని గురించో మేము చెప్తాం.',
      },
    },
    {
      id: 'lead-time',
      q: {
        en: 'How far in advance should I get a date checked?',
        te: 'తేదీని ఎంత ముందుగా పరిశీలించుకోవాలి?',
      },
      a: {
        en: 'Before you commit money to it — before the hall advance, the registrar slot, the launch invitations. Two to three weeks is comfortable. The reason to be early is not the calculation, which takes days at most; it is that once a hall is booked and family have bought tickets, the date has effectively been chosen and we are only being asked to approve it. Send us the dates you can actually use and we will rank those.',
        te: 'డబ్బు కట్టేముందు — మండపం అడ్వాన్స్, రిజిస్ట్రార్ స్లాట్, ఆహ్వాన పత్రికల ముందు. రెండు మూడు వారాలు సౌకర్యంగా ఉంటుంది. ముందుగా అడగాల్సిన కారణం లెక్క కాదు — దానికి ఎక్కువంటే కొన్ని రోజులే. కారణం ఏమిటంటే, ఒకసారి మండపం బుక్ అయి, కుటుంబం టికెట్లు కొన్నాక తేదీ ఆచరణలో ఖరారైపోయింది; అప్పుడు మమ్మల్ని అడిగేది ఆమోదం మాత్రమే. మీరు నిజంగా వాడగలిగే తేదీలు పంపండి, వాటినే క్రమంలో పెట్టి ఇస్తాం.',
      },
    },
    {
      id: 'systems',
      q: {
        en: 'Which system do you use, and why do two numerologists give different answers?',
        te: 'మీరు ఏ విధానం వాడతారు? ఇద్దరు సంఖ్యా శాస్త్రవేత్తలు వేర్వేరు సమాధానాలు ఎందుకు ఇస్తారు?',
      },
      a: {
        en: 'We use Chaldean, and we say so on every report. Chaldean and Pythagorean assign different values to the same letters, so the same name yields two different numbers in the two systems — which is the ordinary explanation for two consultants disagreeing, and it is a difference of method rather than of skill. Because we show the arithmetic, you can check our result or hand it to someone else to check. What we would ask you not to do is take a Chaldean correction and a Pythagorean one and apply both.',
        te: 'మేము కాల్డియన్ విధానం వాడతాం; ప్రతి నివేదికలోనూ అది చెప్తాం. కాల్డియన్, పైథాగరియన్ ఒకే అక్షరాలకు వేర్వేరు విలువలు ఇస్తాయి — కాబట్టి ఒకే పేరుకు రెండు విధానాల్లో రెండు వేర్వేరు సంఖ్యలు వస్తాయి. ఇద్దరు సలహాదారులు విభేదించడానికి సాధారణ కారణం ఇదే; ఇది నైపుణ్య తేడా కాదు, విధాన తేడా. మేము లెక్క చూపిస్తాం కాబట్టి మీరు దాన్ని సరిచూసుకోవచ్చు, లేదా వేరొకరికి చూపించవచ్చు. కాల్డియన్ సవరణ, పైథాగరియన్ సవరణ రెండింటినీ కలిపి అమలు చేయవద్దని మాత్రం కోరతాం.',
      },
    },
    {
      id: 'old-number',
      q: {
        en: 'Is it worth changing a mobile number I have had for fifteen years?',
        te: 'పదిహేనేళ్లుగా వాడుతున్న మొబైల్ నంబర్ మార్చడం విలువైనదా?',
      },
      a: {
        en: 'Frequently not, and we will say so rather than sell you a change. A number that long-held is attached to your bank, your UPI, every OTP and every contact who has ever reached you — the disruption is real and the numeric gain is often modest. Where the fit is genuinely poor we usually suggest keeping the old line for verification and taking a second number for business use, which gets you most of the benefit at none of the cost.',
        te: 'తరచుగా కాదు; మార్పును అమ్మే బదులు అదే చెప్తాం. అంత కాలం వాడిన నంబర్ మీ బ్యాంకు, యూపీఐ, ప్రతి ఓటీపీ, మిమ్మల్ని సంప్రదించిన ప్రతి వ్యక్తితో ముడిపడి ఉంటుంది — ఇబ్బంది నిజమైనది, సంఖ్యాపరమైన లాభం తరచుగా స్వల్పమే. సరిపోలిక నిజంగా బలహీనంగా ఉన్న చోట, ధ్రువీకరణల కోసం పాత లైన్ ఉంచుకుని వ్యాపారానికి రెండో నంబర్ తీసుకోమని సూచిస్తాం — ఖర్చు లేకుండా ప్రయోజనం చాలావరకు దక్కుతుంది.',
      },
    },
  ],
};
