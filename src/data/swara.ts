import type { Bi, BiList } from '../i18n/bi';

/* ═══════════════════════════════════════════════════════════════════
   Spiritual & Vedic Studies — the fourth vertical.

   Deliberately NOT the shape of the other three. Vastu, Jyotisha and
   Numerology are defined-scope engagements with a written deliverable
   and a fee. These two are teacher-guided disciplines with no
   deliverable, no end date and no booking button, so the page has its
   own data shape, its own component and its own quieter styling.

   Padding these into a twelve-item bookable menu to match the pattern
   would misrepresent what they are — and the site's whole argument is
   that we do not misrepresent things.

   Tone rules enforced in this file: no urgency, no scarcity, no
   guaranteed outcomes, no claims of diagnostic or miraculous power,
   and fees are never the first subject.
   ═══════════════════════════════════════════════════════════════════ */

export interface Stage {
  id: string;
  name: Bi;
  body: Bi;
}

export interface Discipline {
  id: string;
  name: Bi;
  /** One line, used in the mega menu and as the block standfirst. */
  standfirst: Bi;
  definition: Bi;
  /** An honest limit, stated in the discipline's own block. */
  limit: Bi;
  stagesLabel: Bi;
  stages: Stage[];
  who: Bi;
  practice: Bi;
  cta: Bi;
}

export const swaraPage = {
  path: '/services/spiritual',

  eyebrow: { en: 'Educational Disciplines', te: 'విద్యా విభాగాలు' },
  title: {
    en: 'Spiritual Studies & Brahmavidya.',
    te: 'ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య.',
  },
  lede: {
    en: 'Guidance for the systematic study of mantra, meditation, swara sadhana and subjects relating to self-knowledge. This is study taken up over time rather than a single consultation, so it is arranged differently from the other three fields.',
    te: 'మంత్రం, ధ్యానం, స్వర సాధన మరియు ఆత్మజ్ఞాన సంబంధిత అంశాలను క్రమబద్ధంగా అధ్యయనం చేయడానికి మార్గదర్శనం. ఇది ఒక్క సంప్రదింపు కాదు, కాలక్రమేణా కొనసాగే అధ్యయనం; అందుకే మిగతా మూడు విభాగాల కంటే దీని ఏర్పాటు వేరుగా ఉంటుంది.',
  },

  framingTitle: { en: 'How this differs from the other three', te: 'ఇది మిగతా మూడింటికి ఎలా భిన్నం' },
  framing: {
    en: 'Vastu, Jyotisha and Numerology are applied to a question someone brings — a building, a chart, a name — and the matter closes when it is answered. This field is directed inward, at the student’s own practice, and there is no question to close. It is therefore taken up gradually, at whatever pace suits the person, and is offered as guidance and as a course of study rather than as a single sitting.',
    te: 'వాస్తు, జ్యోతిషం, సంఖ్యా శాస్త్రం — ఇవి ఎవరో అడిగిన ప్రశ్నకు వర్తిస్తాయి: ఒక భవనం, ఒక జాతకం, ఒక పేరు; సమాధానం వచ్చాక ఆ విషయం ముగుస్తుంది. ఈ విభాగం మాత్రం లోపలికి, సాధకుని సొంత సాధన వైపు మళ్లుతుంది; ఇక్కడ ముగించవలసిన ప్రశ్న ఉండదు. అందువల్ల ఇది వ్యక్తికి అనుకూలమైన వేగంతో క్రమంగా సాగుతుంది; ఒక్క సమావేశంగా కాక మార్గదర్శనంగా, అధ్యయన కోర్సుగా అందించబడుతుంది.',
  },
  expectations: {
    en: [
      'A first conversation comes before anything else, to understand what you are looking for. It carries no fee.',
      'Study proceeds gradually and at the pace the student can genuinely sustain.',
      'Guidance is available online or in person, in Telugu or English.',
      'Where a structured course suits you better than individual guidance, we will say so.',
    ],
    te: [
      'మీరు ఏమి కోరుకుంటున్నారో తెలుసుకోవడానికి ముందుగా ఒక సంభాషణ. దానికి రుసుము ఉండదు.',
      'విద్యార్థి నిజంగా కొనసాగించగలిగే వేగంతో అధ్యయనం క్రమంగా సాగుతుంది.',
      'మార్గదర్శనం ఆన్‌లైన్ లేదా ప్రత్యక్షంగా, తెలుగులో లేదా ఆంగ్లంలో అందుబాటులో ఉంటుంది.',
      'వ్యక్తిగత మార్గదర్శనం కంటే క్రమబద్ధమైన కోర్సు మీకు అనుకూలమైతే, అది చెప్తాం.',
    ],
  } satisfies BiList,

  disciplines: [
    /* ── Swarashastra ──────────────────────────────────────────── */
    {
      id: 'swarashastra',
      name: { en: 'Swarashastra', te: 'స్వర శాస్త్రం' },
      standfirst: {
        en: 'The observation of breath, and what it is traditionally held to indicate.',
        te: 'శ్వాస పరిశీలన, దాని ద్వారా సాంప్రదాయంగా తెలుసుకునేవి.',
      },
      definition: {
        en: 'Swarashastra is the traditional study of the swara — which nostril the breath is predominantly flowing through at a given moment, and the elemental tattva held to be carried within it. It is set out in texts such as the Shiva Svarodaya, and is used to observe one’s own state, to consider the timing of action, and as a support to sadhana. Before it is anything else it is a discipline of attention: it rests entirely on sustained, honest self-observation kept up over months.',
        te: 'స్వర శాస్త్రం అంటే స్వర అధ్యయనం — ఒక క్షణంలో శ్వాస ప్రధానంగా ఏ నాసికా రంధ్రం ద్వారా ప్రవహిస్తోంది, అందులో ఉన్నట్టు సాంప్రదాయంగా చెప్పే తత్త్వం ఏమిటి. ఇది శివ స్వరోదయం వంటి గ్రంథాల్లో వివరించబడింది; స్వీయ స్థితిని గమనించడానికి, కార్య సమయాన్ని ఆలోచించడానికి, సాధనకు తోడ్పాటుగా వాడతారు. అన్నిటికంటే ముందు ఇది అవధాన సాధన: నెలల తరబడి నిజాయితీగా, నిరంతరం చేసే స్వీయ పరిశీలనపైనే ఇది పూర్తిగా ఆధారపడుతుంది.',
      },
      limit: {
        en: 'It is not a medical diagnostic system and is no substitute for one. It also depends entirely on regular practice — it is not a technique that can be picked up quickly and applied to a decision.',
        te: 'ఇది వైద్య నిర్ధారణ విధానం కాదు, దానికి ప్రత్యామ్నాయమూ కాదు. ఇది పూర్తిగా క్రమమైన సాధనపై ఆధారపడి ఉంటుంది — త్వరగా నేర్చుకుని ఒక నిర్ణయానికి వాడే పద్ధతి కాదు.',
      },
      stagesLabel: { en: 'How the study is structured', te: 'అధ్యయనం ఎలా సాగుతుంది' },
      stages: [
        {
          id: 'foundation',
          name: { en: 'Foundation and observation', te: 'పునాది, పరిశీలన' },
          body: {
            en: 'What the swara actually is — ida, pingala and sushumna; the tattvas and the signs traditionally associated with each; and the discipline of recording your own breath at fixed times every day. For the first several months you observe and record, and are asked to draw no conclusions at all. Most of what a beginner concludes early turns out to be their expectation rather than their breath.',
            te: 'స్వరం అంటే నిజంగా ఏమిటి — ఇడ, పింగళ, సుషుమ్న; తత్త్వాలు, ఒక్కొక్క దానికి సాంప్రదాయంగా చెప్పే లక్షణాలు; ప్రతిరోజూ నిర్ణీత సమయాల్లో మీ శ్వాసను నమోదు చేసుకునే క్రమశిక్షణ. మొదటి కొన్ని నెలలు మీరు గమనించి, నమోదు చేయాలి; ఎలాంటి నిర్ణయాలకూ రావద్దని కోరతాం. ప్రారంభంలో ఒక సాధకుడు తీసుకునే నిర్ణయాల్లో చాలావరకు అతని అంచనాయే తప్ప అతని శ్వాస కాదు.',
          },
        },
        {
          id: 'reading',
          name: { en: 'Reading your own state', te: 'స్వీయ స్థితిని చదవడం' },
          body: {
            en: 'Once there is a record long enough to be worth reading, the correlation between the swara and your own condition: energy, appetite, sleep, temper, the tasks that went easily and those that did not. This is where a student learns to tell a pattern from a coincidence — largely by getting it wrong under supervision, which is the only way it is learnt.',
            te: 'చదవదగినంత దీర్ఘమైన నమోదు తయారయ్యాక, స్వరానికీ మీ స్థితికీ ఉన్న సంబంధం: శక్తి, ఆకలి, నిద్ర, మనోభావం, సులభంగా జరిగిన పనులు, జరగని పనులు. ఒక సరళికీ, యాదృచ్ఛికతకూ మధ్య తేడాను సాధకుడు నేర్చుకునేది ఇక్కడే — గురువు పర్యవేక్షణలో తప్పులు చేస్తూనే; నేర్చుకునే మార్గం అదొక్కటే.',
          },
        },
        {
          id: 'application',
          name: { en: 'Application to timing and action', te: 'కాలం, కార్యానికి అనువర్తనం' },
          body: {
            en: 'The traditional applications: which swara is held to support which kind of undertaking, what is said of the moments of transition, and the practices for changing the flow. This is applied first to small and reversible decisions, and never to consequential ones while a student is still learning. A student who begins timing significant matters in the first year is asked to stop.',
            te: 'సాంప్రదాయ అనువర్తనాలు: ఏ స్వరం ఏ రకమైన కార్యానికి అనుకూలమని చెప్తారు, స్వర మార్పు క్షణాల గురించి ఏమి చెప్పబడింది, ప్రవాహాన్ని మార్చే అభ్యాసాలు ఏవి. వీటిని ముందు చిన్న, వెనక్కి తీసుకోగల నిర్ణయాలకే వర్తింపజేస్తారు; నేర్చుకుంటున్నంత కాలం ముఖ్యమైన నిర్ణయాలకు ఎప్పుడూ కాదు. మొదటి ఏడాదిలోనే ముఖ్య విషయాలకు దీన్ని వాడటం మొదలుపెట్టిన సాధకుడిని ఆపమని చెప్తాం.',
          },
        },
        {
          id: 'sustained',
          name: { en: 'Sustained practice', te: 'నిరంతర సాధన' },
          body: {
            en: 'The point at which observation stops being an exercise. Guidance thins out, sessions become occasional, and the student maintains the record independently — arriving with questions rather than waiting for lessons. Most people do not reach this stage, and that is neither hidden from them nor held against them.',
            te: 'పరిశీలన ఒక అభ్యాసంగా కాక సహజంగా మారే దశ. మార్గదర్శనం తగ్గుతుంది, సమావేశాలు అప్పుడప్పుడే జరుగుతాయి; సాధకుడు స్వతంత్రంగా నమోదు కొనసాగిస్తూ, పాఠాల కోసం ఎదురుచూడకుండా ప్రశ్నలతో వస్తారు. చాలామంది ఈ దశకు చేరరు; అది వారి నుండి దాచమూ, దాన్ని తప్పుగా చూడమూ.',
          },
        },
      ],
      who: {
        en: 'Anyone who keeps, or is willing to build, a regular daily practice and wants to add structured observation to it. What it asks for is consistency rather than prior knowledge.',
        te: 'క్రమమైన దైనందిన సాధన ఉన్నవారికి, లేదా దాన్ని ఏర్పరచుకోవాలనుకునేవారికి — దానికి క్రమబద్ధ పరిశీలన జోడించాలనుకునేవారికి. ఇక్కడ కావలసినది ముందస్తు జ్ఞానం కాదు, నిలకడ.',
      },
      practice: {
        en: 'One to one, beginning with a conversation rather than an enrolment. Sessions are arranged at a frequency that suits the student, and are built around what their own observation actually shows rather than around a fixed syllabus. Keeping the daily record between sessions is what makes the study work.',
        te: 'ఒకరితో ఒకరు; చేరిక కాదు, సంభాషణతో ప్రారంభం. విద్యార్థికి అనుకూలమైన వ్యవధిలో సమావేశాలు ఏర్పాటు చేస్తాం; నిర్ణీత పాఠ్య ప్రణాళిక చుట్టూ కాక, వారి స్వంత పరిశీలన చూపిస్తున్న దాని చుట్టూ. సమావేశాల మధ్య దైనందిన నమోదు కొనసాగించడమే ఈ అధ్యయనాన్ని ఫలవంతం చేస్తుంది.',
      },
      cta: {
        en: 'Enquire about this study',
        te: 'ఈ అధ్యయనం గురించి విచారించండి',
      },
    },

    /* ── Brahmavidya ───────────────────────────────────────────── */
    {
      id: 'brahmavidya',
      name: { en: 'Brahmavidya', te: 'బ్రహ్మవిద్య' },
      standfirst: {
        en: 'Study of the texts on the nature of the self, with practice, under a teacher.',
        te: 'ఆత్మ స్వరూపాన్ని గురించిన గ్రంథ అధ్యయనం, సాధన — గురువు వద్ద.',
      },
      definition: {
        en: 'The traditional field of knowledge concerning the nature of the self, studied through the Upanishads, the Bhagavad Gita and related texts, alongside sustained contemplative practice. It is not therapy, self-improvement, or a collection of techniques. What is offered here is study and practice under guidance, at whatever pace a student’s life permits.',
        te: 'ఆత్మ స్వరూపాన్ని గురించిన సాంప్రదాయ జ్ఞాన శాఖ — ఉపనిషత్తులు, భగవద్గీత మరియు సంబంధిత గ్రంథాల అధ్యయనం; దానితో పాటు నిరంతర మననం. ఇది చికిత్స కాదు, ఆత్మాభివృద్ధి శిక్షణ కాదు, పద్ధతుల సముదాయమూ కాదు. ఇక్కడ ఇచ్చేది మార్గదర్శనంలో అధ్యయనం, సాధన — సాధకుని జీవితం అనుమతించే వేగంతో.',
      },
      limit: {
        en: 'No outcome is promised, because none can honestly be promised. Study of this kind does not reliably produce calm, resolve difficulties, or improve circumstances, and a teacher who offers those things is offering something else under this name.',
        te: 'ఎలాంటి ఫలితమూ వాగ్దానం చేయం; నిజాయితీగా చేయగలిగేది ఏదీ లేదు కాబట్టి. ఈ అధ్యయనం ప్రశాంతతను కలిగిస్తుందని, కష్టాలను తీరుస్తుందని, పరిస్థితులను మెరుగుపరుస్తుందని నమ్మకంగా చెప్పలేం. అవి ఇస్తానని చెప్పే గురువు ఈ పేరుతో వేరే దేన్నో ఇస్తున్నారు.',
      },
      stagesLabel: { en: 'How the study is structured', te: 'అధ్యయనం ఎలా సాగుతుంది' },
      stages: [
        {
          id: 'qualification',
          name: { en: 'Preparation and fitness', te: 'సన్నద్ధత, అధికారం' },
          body: {
            en: 'The traditional sadhana-chatushtaya — discrimination, dispassion, the six disciplines, and the wish for liberation — discussed openly at the outset, not as a barrier but so that the study rests on something.',
            te: 'సాంప్రదాయ సాధన చతుష్టయం — వివేకం, వైరాగ్యం, షట్‌సంపత్తి, ముముక్షుత్వం — మొదటే బహిరంగంగా చర్చిస్తాం. ఇది అడ్డంకిగా కాదు; అధ్యయనం ఒక పునాదిపై నిలబడటానికి.',
          },
        },
        {
          id: 'texts',
          name: { en: 'Textual grounding', te: 'గ్రంథ అధ్యయనం' },
          body: {
            en: 'Reading in sequence: the principal Upanishads with a traditional commentary, then the Gita, and further for those who wish to go on. Sanskrit is a considerable help and is not a requirement to begin — where it is absent we work through translation and simply take longer.',
            te: 'క్రమంలో అధ్యయనం: ప్రధాన ఉపనిషత్తులు సాంప్రదాయ భాష్యంతో, ఆ తర్వాత గీత, అంతవరకు వెళ్లేవారికి బ్రహ్మ సూత్రాలు. సంస్కృతం ఎంతో ఉపయోగపడుతుంది, కానీ ప్రారంభించడానికి తప్పనిసరి కాదు — అది లేని చోట అనువాదం ద్వారా సాగుతూ ఎక్కువ సమయం తీసుకుంటాం; ఇది అడ్డదారి కాదు, నిజాయితీ గల మార్పిడి.',
          },
        },
        {
          id: 'sadhana',
          name: { en: 'Practice under guidance', te: 'మార్గదర్శనంలో సాధన' },
          body: {
            en: 'Shravana, manana and nididhyasana taken as an actual sequence rather than as three words recited together. The practice is fitted to the person: what they can genuinely sustain each day, what their household and work allow, and what the text currently in front of them is asking of them.',
            te: 'శ్రవణం, మననం, నిదిధ్యాసనం — కలిపి చెప్పే మూడు పదాలుగా కాక, నిజమైన క్రమంగా. సాధనను వ్యక్తికి తగ్గట్టు సర్దుతాం: రోజూ నిజంగా ఎంత కొనసాగించగలరు, ఇల్లు–ఉద్యోగం ఎంత అనుమతిస్తాయి, ప్రస్తుతం చదువుతున్న గ్రంథం వారి నుండి ఏమి కోరుతోంది.',
          },
        },
        {
          id: 'continuing',
          name: { en: 'A continuing relationship', te: 'కొనసాగే సంబంధం' },
          body: {
            en: 'For those who stay, the relationship continues without a defined end. Some study for two years and stop; some continue for decades. Neither is treated as a failure, and no one is asked to declare in advance which they intend to be.',
            te: 'కొనసాగేవారికి ఈ సంబంధానికి నిర్దిష్టమైన ముగింపు ఉండదు. కొందరు రెండేళ్లు చదివి ఆగిపోతారు; కొందరు దశాబ్దాల పాటు కొనసాగుతారు. రెండింటినీ వైఫల్యంగా చూడం; ఎవరినీ ముందుగానే ఏది ఎంచుకుంటారో చెప్పమని అడగం.',
          },
        },
      ],
      who: {
        en: 'Anyone who wishes to study these texts seriously — whether they have read something of the material already, or are beginning with an interest and the willingness to keep at it.',
        te: 'ఈ గ్రంథాలను క్రమబద్ధంగా అధ్యయనం చేయాలనుకునే ఎవరికైనా — ఇప్పటికే కొంత చదివిన వారికైనా, ఆసక్తితో, పట్టుదలతో ఇప్పుడే ప్రారంభించేవారికైనా.',
      },
      practice: {
        en: 'It begins with a conversation about what you have read and what you are looking for. Study then proceeds in a small group where one is running and one to one where it is not, at a fixed hour each week. Attendance is expected to be regular, because the reading is sequential.',
        te: 'మీరు ఏమి చదివారు, ఏమి కోరుకుంటున్నారు — దీని గురించిన సంభాషణతో ప్రారంభం. ఆ తర్వాత ఒక చిన్న బృందం నడుస్తుంటే అందులో, లేకుంటే ఒకరితో ఒకరు — వారానికొక నిర్ణీత సమయంలో అధ్యయనం సాగుతుంది. అధ్యయనం వరుసగా సాగుతుంది కాబట్టి హాజరు క్రమం తప్పకుండా ఉండాలి.',
      },
      cta: {
        en: 'Enquire about this study',
        te: 'ఈ అధ్యయనం గురించి విచారించండి',
      },
    },
  ] satisfies Discipline[],

  /* ── Explicit comparison, so nobody expects a booking flow ───── */
  comparison: {
    title: {
      en: 'How this differs from the rest of the site',
      te: 'ఇది సైట్‌లోని మిగతా వాటికి ఎలా భిన్నం',
    },
    lede: {
      en: 'Stated plainly, because a visitor arriving from the other three verticals reasonably expects to choose a service, see a fee and pick a slot. None of that applies here.',
      te: 'స్పష్టంగా చెప్తున్నాం — మిగతా మూడు శాఖల నుండి వచ్చిన సందర్శకులు సేవను ఎంచుకోవడం, రుసుము చూడటం, సమయం ఎంచుకోవడం సహజంగానే ఆశిస్తారు. ఇక్కడ అవేవీ వర్తించవు.',
    },
    colA: { en: 'Vastu · Jyotisha · Numerology', te: 'వాస్తు · జ్యోతిషం · సంఖ్యా శాస్త్రం' },
    colB: { en: 'Swarashastra · Brahmavidya', te: 'స్వర శాస్త్రం · బ్రహ్మవిద్య' },
    rows: [
      {
        id: 'nature',
        label: { en: 'What it is', te: 'ఇది ఏమిటి' },
        a: { en: 'A defined engagement with a fixed scope', te: 'నిర్దిష్ట పరిధి గల సేవ' },
        b: { en: 'A teaching relationship with no fixed scope', te: 'నిర్దిష్ట పరిధి లేని బోధనా సంబంధం' },
      },
      {
        id: 'start',
        label: { en: 'How it starts', te: 'ఎలా ప్రారంభమవుతుంది' },
        a: { en: 'Choose the service, book a time', te: 'సేవను ఎంచుకుని, సమయం నమోదు చేయడం' },
        b: {
          en: 'A conversation about whether to begin at all',
          te: 'అసలు ప్రారంభించాలా వద్దా అనే సంభాషణ',
        },
      },
      {
        id: 'output',
        label: { en: 'What you receive', te: 'మీకు అందేది' },
        a: { en: 'A written report, and a follow-up sitting', te: 'లిఖిత నివేదిక, ఒక సమీక్ష సమావేశం' },
        b: { en: 'Guidance over time. There is no deliverable', te: 'కాలక్రమేణా మార్గదర్శనం. అందించే పత్రం ఉండదు' },
      },
      {
        id: 'duration',
        label: { en: 'How long', te: 'ఎంత కాలం' },
        a: { en: 'A sitting, with follow-up as needed', te: 'ఒక సమావేశం; అవసరాన్ని బట్టి అనుసరణ' },
        b: { en: 'Months at minimum. Frequently years', te: 'కనీసం నెలలు. తరచుగా ఏళ్లు' },
      },
      {
        id: 'fee',
        label: { en: 'Fees', te: 'రుసుము' },
        a: { en: 'Quoted per engagement, confirmed in writing', te: 'ప్రతి సేవకూ విడిగా, లిఖితపూర్వకంగా' },
        b: {
          en: 'Discussed personally, and never as the first subject',
          te: 'వ్యక్తిగతంగా చర్చిస్తాం; అది మొదటి విషయం ఎప్పుడూ కాదు',
        },
      },
      {
        id: 'end',
        label: { en: 'How it ends', te: 'ఎలా ముగుస్తుంది' },
        a: { en: 'The report closes the engagement', te: 'నివేదికతో సేవ ముగుస్తుంది' },
        b: { en: 'No fixed end. You may stop at any point', te: 'నిర్దిష్ట ముగింపు లేదు. ఎప్పుడైనా ఆపవచ్చు' },
      },
    ],
  },

  /* ── Enquiry flow, in place of a fee table ───────────────────── */
  flow: {
    title: { en: 'Enquiry and guidance conversation', te: 'విచారణ, మార్గదర్శన సంభాషణ' },
    lede: {
      en: 'There is no form with required fields, and no calendar with open slots. The sequence is deliberately slow.',
      te: 'తప్పనిసరి ఖాళీలున్న ఫారం లేదు, ఖాళీ సమయాలున్న క్యాలెండర్ లేదు. ఈ క్రమం ఉద్దేశపూర్వకంగానే నెమ్మదిగా ఉంటుంది.',
    },
    steps: [
      {
        id: 'write',
        name: { en: 'You write', te: 'మీరు రాస్తారు' },
        body: {
          en: 'A short note in your own words: your background, what practice you keep if any, what you have read, and what brings you to this. Two paragraphs is enough.',
          te: 'మీ మాటల్లో ఒక చిన్న లేఖ: మీ నేపథ్యం, ఏదైనా సాధన ఉంటే అది, మీరు చదివినవి, మిమ్మల్ని ఇటు నడిపించినది ఏమిటి. రెండు పేరాలు చాలు.',
        },
      },
      {
        id: 'reply',
        name: { en: 'A personal reply', te: 'వ్యక్తిగత సమాధానం' },
        body: {
          en: 'Within a week, from the person who would actually be guiding you. Sometimes the reply is a question rather than an answer.',
          te: 'ఒక వారంలోపు — నిజంగా మీకు మార్గదర్శనం చేసే వ్యక్తి నుండే. కొన్నిసార్లు ఆ సమాధానం ఒక ప్రశ్నగా ఉంటుంది.',
        },
      },
      {
        id: 'conversation',
        name: { en: 'A conversation', te: 'ఒక సంభాషణ' },
        body: {
          en: 'Unhurried, without obligation on either side, and without a fee. Its purpose is to establish whether this is the right thing for you now — and the honest answer is often not yet.',
          te: 'తొందర లేకుండా, ఇరువైపులా బాధ్యత లేకుండా, రుసుము లేకుండా. ఇది ఇప్పుడు మీకు సరైనదా అని నిర్ధారించడమే దీని ఉద్దేశం — నిజాయితీ గల సమాధానం తరచుగా “ఇంకా కాదు” అనే ఉంటుంది.',
        },
      },
      {
        id: 'begin',
        name: { en: 'If both sides agree', te: 'ఇరువురూ అంగీకరిస్తే' },
        body: {
          en: 'A beginning is arranged, with its shape and rhythm settled between you. Fees, where they apply at all, are discussed at this point and not before.',
          te: 'ప్రారంభం ఏర్పాటు చేస్తాం; దాని రూపం, క్రమం మీ ఇద్దరి మధ్యే నిర్ణయమవుతాయి. రుసుము వర్తించే చోట, అది ఈ దశలోనే చర్చిస్తాం — అంతకుముందు కాదు.',
        },
      },
    ],
    note: {
      en: 'If we think you would be better served by one of the consultation services, or by a teacher elsewhere, we will tell you that instead.',
      te: 'సంప్రదింపు సేవల్లో ఏదైనా మీకు ఎక్కువ ఉపయోగమని, లేదా వేరే గురువు దగ్గర మీకు మెరుగైన మార్గదర్శనం లభిస్తుందని అనిపిస్తే — అదే చెప్తాం.',
    },
    cta: { en: 'Write to us', te: 'మాకు రాయండి' },
  },

  faqs: [
    {
      id: 'beginners',
      q: { en: 'Is this open to complete beginners?', te: 'పూర్తిగా కొత్తవారికి ఇది అందుబాటులో ఉందా?' },
      a: {
        en: 'For Swarashastra, a beginner with a settled daily routine can start; what is needed is consistency rather than prior knowledge. For Brahmavidya it is harder to say yes honestly. Someone who has read nothing and practises nothing usually finds the first year unrewarding, not because the material is withheld but because the questions have not yet formed. In that case we generally suggest reading on your own for a period and writing again afterwards.',
        te: 'స్వర శాస్త్రానికి — స్థిరమైన దైనందిన క్రమం ఉన్న కొత్తవారు ప్రారంభించవచ్చు; ఇక్కడ కావలసినది ముందస్తు జ్ఞానం కాదు, నిలకడ. బ్రహ్మవిద్యకు నిజాయితీగా అవును అనడం కష్టం. ఏమీ చదవని, ఏ సాధనా లేని వ్యక్తికి మొదటి సంవత్సరం సాధారణంగా నిష్ఫలంగా అనిపిస్తుంది — విషయాన్ని దాచడం వల్ల కాదు, ప్రశ్నలు ఇంకా రూపుదిద్దుకోకపోవడం వల్ల. అలాంటప్పుడు కొంతకాలం మీ స్వంతంగా చదివి, తర్వాత మళ్లీ రాయమని సూచిస్తాం.',
      },
    },
    {
      id: 'cost',
      q: {
        en: 'Is there a cost, and how is it structured compared with the other consultations?',
        te: 'రుసుము ఉంటుందా? మిగతా సంప్రదింపులతో పోలిస్తే అది ఎలా ఉంటుంది?',
      },
      a: {
        en: 'Not in the same way. The consultation services are quoted per engagement against a defined scope, because there is a scope to define. Here there is not — the relationship has no fixed length and no deliverable, so it cannot honestly be priced like one. What applies is discussed personally once both sides have decided to begin, and it is never the first thing raised. The enquiry and the guidance conversation carry no fee at all.',
        te: 'అదే విధంగా కాదు. సంప్రదింపు సేవలకు నిర్దిష్ట పరిధి ఉంటుంది కాబట్టి, ప్రతి సేవకూ విడిగా రుసుము నిర్ణయిస్తాం. ఇక్కడ అలాంటి పరిధి లేదు — ఈ సంబంధానికి నిర్ణీత కాలం లేదు, అందించే పత్రం లేదు; కాబట్టి దానికి అలా ధర నిర్ణయించడం నిజాయితీ కాదు. వర్తించేది ఏదైనా ఉంటే, ఇరువురూ ప్రారంభించాలని నిర్ణయించుకున్న తర్వాత వ్యక్తిగతంగా చర్చిస్తాం; అది ఎప్పుడూ మొదటి విషయం కాదు. విచారణకు, మార్గదర్శన సంభాషణకు ఎలాంటి రుసుమూ లేదు.',
      },
    },
    {
      id: 'separate',
      q: {
        en: 'Can I study Swarashastra without pursuing Brahmavidya, or are the two connected?',
        te: 'బ్రహ్మవిద్య లేకుండా స్వర శాస్త్రం మాత్రమే చదవవచ్చా, లేక ఈ రెండూ ముడిపడి ఉన్నాయా?',
      },
      a: {
        en: 'They are separate and are taught separately. Swarashastra can be studied entirely on its own, and most people who take it do exactly that. It is grouped with Brahmavidya on this page because both are inward disciplines rather than client-facing sciences, not because one leads to the other. Some students do move from one to the other in time; nobody is expected to.',
        te: 'ఇవి వేర్వేరు; వేర్వేరుగానే బోధిస్తాం. స్వర శాస్త్రాన్ని పూర్తిగా విడిగా అధ్యయనం చేయవచ్చు; దాన్ని తీసుకునే చాలామంది అలాగే చేస్తారు. ఈ పేజీలో బ్రహ్మవిద్యతో కలిపి ఉంచడానికి కారణం — రెండూ బయటివారి కోసం కాక అంతర్ముఖ సాధనలు కావడం; ఒకటి రెండోదానికి దారి తీస్తుందని కాదు. కొందరు కాలక్రమేణా ఒకదాని నుండి మరొకదానికి వెళ్తారు; అలా వెళ్లాలని ఎవరినీ ఆశించం.',
      },
    },
    {
      id: 'ready',
      q: { en: 'How do I know whether I am ready to begin?', te: 'ప్రారంభించడానికి నేను సిద్ధమేనా అని ఎలా తెలుసుకోవాలి?' },
      a: {
        en: 'You largely do not, and that is what the conversation is for. A useful private test is whether you have kept any voluntary daily discipline for six months without anyone knowing or checking. Both of these ask for that before they ask for anything else. If the answer is no, it is worth building that first — and it can be built anywhere, not necessarily here.',
        te: 'చాలావరకు మీకు తెలియదు; ఆ సంభాషణ ఉద్దేశం అదే. ఒక ఉపయోగకరమైన స్వీయ పరీక్ష: ఎవరికీ తెలియకుండా, ఎవరూ తనిఖీ చేయకుండా, ఆరు నెలల పాటు మీరు స్వచ్ఛందంగా ఏదైనా దైనందిన క్రమాన్ని కొనసాగించారా. ఈ రెండూ మిగతా దేని కంటే ముందు అదే కోరతాయి. సమాధానం కాదు అయితే, ముందు అది ఏర్పరచుకోవడం విలువైనది — అది ఇక్కడే కానక్కర్లేదు, ఎక్కడైనా చేయవచ్చు.',
      },
    },
    {
      id: 'online',
      q: {
        en: 'Can this be done online, and is anything recorded?',
        te: 'ఇది ఆన్‌లైన్‌లో సాధ్యమా? ఏదైనా రికార్డు చేస్తారా?',
      },
      a: {
        en: 'Online is workable and a good number of students are at a distance. Nothing is recorded, in either discipline — not the sessions, not the discussions, not for internal use. Study of this kind depends on a student being able to say something imprecise and be corrected without it existing afterwards as a file.',
        te: 'ఆన్‌లైన్ సాధ్యమే; చాలామంది సాధకులు దూర ప్రాంతాల్లోనే ఉన్నారు. రెండు శాఖల్లోనూ ఏదీ రికార్డు చేయబడదు — సమావేశాలు కాదు, చర్చలు కాదు, అంతర్గత అవసరాలకూ కాదు. ఈ తరహా అధ్యయనం నిలబడేది — సాధకుడు ఏదైనా అస్పష్టంగా చెప్పి, దాన్ని సరిదిద్దుకోగలగడంపైనే; ఆ మాట తర్వాత ఒక ఫైలుగా మిగిలిపోకూడదు.',
      },
    },
  ],
};
