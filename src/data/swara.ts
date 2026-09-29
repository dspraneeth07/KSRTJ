import type { Bi, BiList } from '../i18n/bi';

/* ═══════════════════════════════════════════════════════════════════
   Spiritual Studies & Brahmavidya — the fourth service page.

   Not a catalogue of bookable services. Swara Shastra and Brahmavidya
   are study, practice and personal guidance, so the page is built round
   how the study progresses rather than round what can be purchased.

   Several fields are arrays of paragraphs rather than single strings:
   this copy argues rather than labels, and a paragraph break is part of
   the argument.
   ═══════════════════════════════════════════════════════════════════ */

export interface Stage {
  id: string;
  name: Bi;
  body: Bi[];
}

export interface Discipline {
  id: string;
  name: Bi;
  standfirst: Bi;
  definition: Bi[];
  /** "What it is not" — stated before anything is claimed. */
  limit: Bi[];
  stagesLabel: Bi;
  stages: Stage[];
  who: Bi[];
  practice: Bi[];
  cta: Bi;
}

export const swaraPage = {
  path: '/services/spiritual',

  eyebrow: { en: 'Educational Areas', te: 'విద్యా విభాగాలు' },
  title: {
    en: 'Spiritual Studies & Brahmavidya',
    te: 'ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య',
  },
  lede: {
    en: 'Guidance is provided for the structured study of meditation, mantra practice, Swara Shastra, self-knowledge, and subjects related to Brahmavidya. This is designed not as a one-time consultation, but as a study and practice that may continue over time. Therefore, its approach is different from the other consultation services.',
    te: 'ధ్యానం, మంత్ర సాధన, స్వర శాస్త్రం, ఆత్మజ్ఞానం మరియు బ్రహ్మవిద్యకు సంబంధించిన అంశాలను క్రమబద్ధంగా అధ్యయనం చేయడానికి మార్గదర్శనం అందించబడుతుంది. ఇది ఒక సాధారణ సంప్రదింపుగా కాకుండా, కాలక్రమేణా కొనసాగగల అధ్యయనం మరియు సాధనగా రూపొందించబడింది. అందువల్ల మిగతా సేవల కంటే దీని విధానం భిన్నంగా ఉంటుంది.',
  },

  framingTitle: {
    en: 'How It Differs from Other Services',
    te: 'ఇది మిగతా సేవలకు ఎలా భిన్నం',
  },
  framing: [
    {
      en: 'Vastu, Jyotisha, and Numerology services are generally provided for a specific need, question, or subject. The consultation is completed after the relevant assessment and guidance are provided.',
      te: 'వాస్తు, జ్యోతిషం, సంఖ్యా శాస్త్రం వంటి సేవలు సాధారణంగా ఒక నిర్దిష్ట అవసరం, ప్రశ్న లేదా అంశాన్ని పరిశీలించడానికి అందించబడతాయి. అవసరమైన పరిశీలన మరియు మార్గదర్శనం అందించిన తర్వాత ఆ సంప్రదింపు పూర్తవుతుంది.',
    },
    {
      en: 'Spiritual Studies & Brahmavidya, on the other hand, focus on self-study, practice, and inner observation. Therefore, they do not have to be completed in a single consultation. Study and guidance can continue gradually according to the individual’s pace and requirement.',
      te: 'ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్యలో మాత్రం దృష్టి స్వీయ అధ్యయనం, సాధన మరియు అంతర్ముఖ పరిశీలనపై ఉంటుంది. అందువల్ల దీనికి ఒకే సంప్రదింపుతో ముగిసే నిర్దిష్ట పరిధి ఉండదు. వ్యక్తికి అనుకూలమైన వేగంతో క్రమంగా అధ్యయనం మరియు మార్గదర్శనం కొనసాగుతుంది.',
    },
  ] satisfies Bi[],

  expectations: {
    en: [
      'An initial conversation to understand your interest and present study requirement.',
      'Study progressing at a pace that the student can realistically maintain.',
      'Guidance available online or in person, in Telugu or English.',
      'Individual guidance or a structured study program, depending on the requirement.',
      'Importance given to personal discipline in study and practice.',
    ],
    te: [
      'మీరు ఏమి కోరుకుంటున్నారో మరియు ప్రస్తుతం మీకు ఏ విధమైన అధ్యయనం అవసరమో తెలుసుకోవడానికి ముందుగా ఒక సంభాషణ ఉంటుంది.',
      'అధ్యయనం విద్యార్థి వాస్తవంగా కొనసాగించగలిగే వేగంతో క్రమంగా సాగుతుంది.',
      'మార్గదర్శనం ఆన్‌లైన్ లేదా ప్రత్యక్షంగా, తెలుగులో లేదా ఆంగ్లంలో అందుబాటులో ఉంటుంది.',
      'వ్యక్తిగత మార్గదర్శనం లేదా క్రమబద్ధమైన అధ్యయన కార్యక్రమం — మీ అవసరానికి ఏది అనుకూలమో దానికి అనుగుణంగా విధానం నిర్ణయించబడుతుంది.',
      'అధ్యయనం మరియు సాధనలో వ్యక్తిగత క్రమశిక్షణకు ప్రాధాన్యం ఉంటుంది.',
    ],
  } satisfies BiList,

  disciplines: [
    /* ── Swara Shastra ────────────────────────────────────────── */
    {
      id: 'swarashastra',
      name: { en: 'Swara Shastra', te: 'స్వర శాస్త్రం' },
      standfirst: {
        en: 'Study of Breath Observation and Traditional Applications',
        te: 'శ్వాస పరిశీలన మరియు దాని ద్వారా సంప్రదాయంగా తెలుసుకునే అంశాల అధ్యయనం',
      },
      definition: [
        {
          en: 'Swara Shastra is the study of Swara — including observation of which nostril is predominantly carrying the breath at a particular time and how related aspects are traditionally observed.',
          te: 'స్వర శాస్త్రం అంటే స్వర అధ్యయనం — ఒక నిర్దిష్ట సమయంలో శ్వాస ప్రధానంగా ఏ నాసికా రంధ్రం ద్వారా ప్రవహిస్తోంది, దానితో సంబంధం ఉన్న అంశాలను సంప్రదాయంగా ఎలా పరిశీలిస్తారనే విషయాల అధ్యయనం.',
        },
        {
          en: 'It is traditionally used for observing one’s own state, considering the timing of activities, and supporting personal practice. Above all, it involves continuous awareness and observation. Its study requires regular self-observation and recording over time.',
          te: 'స్వీయ స్థితిని గమనించడం, కార్య సమయాన్ని పరిశీలించడం మరియు సాధనకు తోడ్పడే విధంగా దీనిని సంప్రదాయంలో ఉపయోగిస్తారు. అన్నిటికంటే ముందు ఇది నిరంతర అవధాన సాధన. దీని అధ్యయనం క్రమమైన స్వీయ పరిశీలన మరియు నమోదు ఆధారంగా కొనసాగుతుంది.',
        },
      ],
      limit: [
        {
          en: 'It is not a method of medical diagnosis and is not a substitute for medical care.',
          te: 'ఇది వైద్య నిర్ధారణ విధానం కాదు మరియు వైద్యానికి ప్రత్యామ్నాయం కాదు.',
        },
        {
          en: 'Swara Shastra requires regular observation and practice. It is not taught as a method to be learned quickly and then used alone for major life decisions.',
          te: 'స్వర శాస్త్రం క్రమమైన పరిశీలన మరియు సాధనపై ఆధారపడి ఉంటుంది. త్వరగా నేర్చుకుని వెంటనే ముఖ్యమైన నిర్ణయాలకు ఉపయోగించే పద్ధతిగా దీనిని బోధించము.',
        },
      ],
      stagesLabel: { en: 'How the Study Progresses', te: 'అధ్యయనం ఎలా సాగుతుంది' },
      stages: [
        {
          id: 'foundation',
          name: { en: 'Foundation and Observation', te: 'పునాది, పరిశీలన' },
          body: [
            {
              en: 'The initial stage introduces basic subjects such as Swara, Ida, Pingala, Sushumna, the traditional understanding of the elements, and related observations.',
              te: 'స్వరం, ఇడ, పింగళ, సుషుమ్న, తత్త్వాలు మరియు వాటికి సంప్రదాయంగా చెప్పబడే లక్షణాలు వంటి ప్రాథమిక అంశాలను నేర్చుకుంటారు. ప్రతిరోజూ నిర్ణీత సమయాల్లో శ్వాసను గమనించి నమోదు చేసుకునే క్రమశిక్షణకు ప్రాధాన్యం ఉంటుంది.',
            },
            {
              en: 'Students are encouraged to observe and record first rather than make quick conclusions.',
              te: 'మొదటి దశలో సాధకుడు ప్రధానంగా గమనించి, నమోదు చేయాలి; తొందరగా నిర్ణయాలకు రాకూడదు.',
            },
          ],
        },
        {
          id: 'state',
          name: { en: 'Observing One’s Own State', te: 'స్వీయ స్థితిని గమనించడం' },
          body: [
            {
              en: 'After sufficient observation and recording, students examine possible relationships between Swara and their own state.',
              te: 'తగినంత కాలం పరిశీలన మరియు నమోదు జరిగిన తర్వాత, స్వరానికి మరియు స్వీయ స్థితికి మధ్య కనిపించే సంబంధాలను పరిశీలిస్తారు.',
            },
            {
              en: 'Energy, appetite, sleep, mood, activities that felt easier, and activities that felt difficult may be observed.',
              te: 'శక్తి, ఆకలి, నిద్ర, మనోభావం, సులభంగా జరిగిన పనులు మరియు కష్టంగా అనిపించిన పనులు వంటి అంశాలను గమనించవచ్చు.',
            },
            {
              en: 'Guidance is provided to distinguish recurring patterns from isolated events.',
              te: 'పునరావృతమయ్యే సరళి మరియు యాదృచ్ఛిక సంఘటన మధ్య తేడాను గుర్తించడానికి మార్గదర్శనం అందించబడుతుంది.',
            },
          ],
        },
        {
          id: 'application',
          name: { en: 'Time and Application', te: 'కాలం, కార్యానికి అనువర్తనం' },
          body: [
            {
              en: 'Traditional applications related to Swara are examined at this stage, including traditional observations regarding different Swaras, activities, and changes in the flow of breath.',
              te: 'స్వరానికి సంబంధించిన సంప్రదాయ అనువర్తనాలను ఈ దశలో పరిశీలిస్తారు — ఏ స్వరం ఏ రకమైన కార్యానికి అనుకూలంగా చెప్పబడింది, స్వర మార్పు సమయాల గురించి సంప్రదాయ గ్రంథాలు ఏమి చెబుతున్నాయి వంటి అంశాలు.',
            },
            {
              en: 'These are first considered in ordinary and relatively low-impact situations. Important life decisions should not be based solely on these observations.',
              te: 'వాటిని ముందుగా సాధారణ మరియు తక్కువ ప్రభావం ఉన్న సందర్భాల్లో పరిశీలించడం ద్వారా అవగాహన పెంచుకుంటారు. ముఖ్యమైన జీవిత నిర్ణయాలకు వీటిపై మాత్రమే ఆధారపడకుండా ఉండాలని సూచిస్తారు.',
            },
          ],
        },
        {
          id: 'continuing',
          name: { en: 'Continuing Practice', te: 'నిరంతర సాధన' },
          body: [
            {
              en: 'With continued practice, observation can become a more natural part of daily awareness.',
              te: 'పరిశీలన క్రమంగా సహజమైన అభ్యాసంగా మారే దశ ఇది. ఈ దశలో మార్గదర్శనం అవసరాన్ని బట్టి కొనసాగుతుంది.',
            },
            {
              en: 'The student continues personal observation and recording and seeks guidance when questions arise.',
              te: 'సాధకుడు స్వతంత్రంగా తన పరిశీలన మరియు నమోదు కొనసాగిస్తూ, అవసరమైనప్పుడు ప్రశ్నలతో మార్గదర్శనం పొందుతాడు.',
            },
          ],
        },
      ],
      who: [
        {
          en: 'This study is suitable for those who already maintain a regular daily practice or wish to develop such a discipline.',
          te: 'క్రమమైన దైనందిన సాధన ఉన్నవారికి, లేదా అలాంటి క్రమాన్ని ఏర్పరచుకోవాలనుకునేవారికి ఈ అధ్యయనం అనుకూలంగా ఉంటుంది.',
        },
        {
          en: 'More than prior knowledge, consistency and systematic observation are important.',
          te: 'ఇక్కడ ప్రధానంగా అవసరమైనది ముందస్తు జ్ఞానం కంటే నిలకడ మరియు క్రమబద్ధమైన పరిశీలన.',
        },
      ],
      practice: [
        {
          en: 'The process begins with a personal conversation. Meetings are arranged in a manner suitable for the student.',
          te: 'వ్యక్తిగత సంభాషణతో ప్రారంభమవుతుంది. విద్యార్థికి అనుకూలమైన విధంగా సమావేశాలు ఏర్పాటు చేస్తారు.',
        },
        {
          en: 'Guidance is not limited to following a fixed syllabus; it can also respond to questions arising from the student’s own observation and study.',
          te: 'మార్గదర్శనం కేవలం నిర్ణీత పాఠ్య ప్రణాళికను అనుసరించడం కాకుండా, విద్యార్థి చేస్తున్న స్వీయ పరిశీలన మరియు అధ్యయనంలో ఎదురయ్యే ప్రశ్నలకు అనుగుణంగా కొనసాగుతుంది.',
        },
        {
          en: 'Daily observation and recording between meetings form an important part of the study.',
          te: 'సమావేశాల మధ్య దైనందిన పరిశీలన మరియు నమోదు కొనసాగించడం ఈ అధ్యయనంలో ముఖ్యమైన భాగం.',
        },
      ],
      cta: { en: 'Enquire About This Study', te: 'ఈ అధ్యయనం గురించి విచారించండి' },
    },

    /* ── Brahmavidya ──────────────────────────────────────────── */
    {
      id: 'brahmavidya',
      name: { en: 'Brahmavidya', te: 'బ్రహ్మవిద్య' },
      standfirst: {
        en: 'Study of the Self, Traditional Texts, Reflection and Practice',
        te: 'ఆత్మ స్వరూపాన్ని గురించిన గ్రంథ అధ్యయనం, మననం మరియు సాధన',
      },
      definition: [
        {
          en: 'Brahmavidya is a traditional field of knowledge concerned with the nature of the Self. Guidance is provided for the study of relevant traditional texts along with systematic reflection and practice.',
          te: 'బ్రహ్మవిద్య అనేది ఆత్మ స్వరూపాన్ని గురించిన సంప్రదాయ జ్ఞాన అధ్యయనం. సంబంధిత సంప్రదాయ గ్రంథాల అధ్యయనంతో పాటు, వాటిపై క్రమబద్ధమైన మననం మరియు సాధనకు మార్గదర్శనం అందించబడుతుంది.',
        },
        {
          en: 'It is not therapy, not a medical method, and does not promise specific results. It is a structured path of study involving texts, reflection, and practice.',
          te: 'ఇది చికిత్స కాదు, వైద్య విధానం కాదు మరియు నిర్దిష్ట ఫలితాలను అందిస్తామని చెప్పే పద్ధతి కాదు. ఇది గ్రంథ అధ్యయనం, మననం మరియు సాధనతో కూడిన క్రమబద్ధమైన అధ్యయన మార్గం.',
        },
      ],
      limit: [
        {
          en: 'No specific result is guaranteed.',
          te: 'ఎలాంటి నిర్దిష్ట ఫలితాన్నీ హామీ ఇవ్వము.',
        },
        {
          en: 'This study does not promise that it will necessarily create peace, remove life difficulties, or improve particular circumstances.',
          te: 'ఈ అధ్యయనం తప్పనిసరిగా ప్రశాంతతను కలిగిస్తుందని, జీవితంలోని కష్టాలను తొలగిస్తుందని లేదా పరిస్థితులను మెరుగుపరుస్తుందని హామీ ఇవ్వము.',
        },
        {
          en: 'The emphasis is on study, reflection, and practice rather than promises of specific material or personal outcomes.',
          te: 'బ్రహ్మవిద్యలో ప్రధానంగా అధ్యయనం, మననం మరియు సాధనకు ప్రాధాన్యం ఉంటుంది; నిర్దిష్ట భౌతిక లేదా వ్యక్తిగత ఫలితాల వాగ్దానానికి కాదు.',
        },
      ],
      stagesLabel: { en: 'How the Study Progresses', te: 'అధ్యయనం ఎలా సాగుతుంది' },
      stages: [
        {
          id: 'preparation',
          name: { en: 'Preparation', te: 'సన్నద్ధత' },
          body: [
            {
              en: 'The initial stage considers basic subjects that support the study. Depending on the requirement, topics such as discernment, detachment, discipline of the mind and senses, and interest in self-knowledge may be discussed.',
              te: 'అధ్యయనానికి అవసరమైన ప్రాథమిక అంశాల గురించి ప్రారంభ దశలో చర్చిస్తారు. వివేకం, వైరాగ్యం, మనస్సు మరియు ఇంద్రియ నియమం, ఆత్మజ్ఞానంపై ఆసక్తి వంటి అంశాలను అవసరాన్ని బట్టి పరిశీలిస్తారు.',
            },
            {
              en: 'These are treated as supportive foundations for the study.',
              te: 'ఇది ఒక అడ్డంకిగా కాకుండా, అధ్యయనం సరైన పునాదిపై కొనసాగడానికి ఉపయోగపడే అంశంగా పరిగణించబడుతుంది.',
            },
          ],
        },
        {
          id: 'texts',
          name: { en: 'Textual Study', te: 'గ్రంథ అధ్యయనం' },
          body: [
            {
              en: 'Relevant traditional texts are studied in a structured manner. Translations and explanatory works may be used where appropriate.',
              te: 'సంబంధిత సంప్రదాయ గ్రంథాలను క్రమబద్ధంగా అధ్యయనం చేస్తారు. అవసరాన్ని బట్టి అనువాదాలు మరియు వివరణాత్మక గ్రంథాల సహాయంతో అధ్యయనం కొనసాగించవచ్చు.',
            },
            {
              en: 'Knowledge of Sanskrit can be useful, but it is not compulsory for beginning the study.',
              te: 'సంస్కృత పరిజ్ఞానం ఉపయోగకరంగా ఉంటుంది; అయితే ప్రారంభించడానికి అది తప్పనిసరి కాదు.',
            },
          ],
        },
        {
          id: 'sadhana',
          name: { en: 'Guided Practice', te: 'మార్గదర్శనంలో సాధన' },
          body: [
            {
              en: 'Traditional approaches such as listening to the teaching, reflection, and contemplative practice are examined systematically.',
              te: 'శ్రవణం, మననం మరియు నిదిధ్యాసనం వంటి సంప్రదాయ అధ్యయన–సాధనా విధానాలను క్రమబద్ధంగా పరిశీలిస్తారు.',
            },
            {
              en: 'Practice is considered according to the individual’s actual circumstances, including the time available for daily study and personal responsibilities.',
              te: 'సాధనను వ్యక్తి యొక్క వాస్తవ పరిస్థితులకు అనుగుణంగా కొనసాగిస్తారు — రోజువారీగా ఎంత సమయం కేటాయించగలరు, కుటుంబం మరియు ఉద్యోగ పరిస్థితులు ఎంతవరకు అనుమతిస్తాయి వంటి అంశాలను పరిగణనలోకి తీసుకుంటారు.',
            },
          ],
        },
        {
          id: 'continuing',
          name: { en: 'Continuing Study', te: 'కొనసాగుతున్న అధ్యయనం' },
          body: [
            {
              en: 'There is no single fixed completion period for everyone. Some may study for a period and take a break, while others may continue for a longer period.',
              te: 'ఈ అధ్యయనానికి అందరికీ ఒకే విధమైన ముగింపు కాలం ఉండదు. కొందరు కొంతకాలం అధ్యయనం చేసి విరామం తీసుకోవచ్చు; మరికొందరు దీర్ఘకాలం కొనసాగవచ్చు.',
            },
            {
              en: 'The study progresses according to the individual’s interest, circumstances, and ability to continue.',
              te: 'అధ్యయనం వ్యక్తి యొక్క ఆసక్తి, పరిస్థితి మరియు కొనసాగించే సామర్థ్యానికి అనుగుణంగా సాగుతుంది.',
            },
          ],
        },
      ],
      who: [
        {
          en: 'The study is open to those who wish to study these subjects systematically, including both those who have already studied to some extent and those beginning with sincere interest and commitment.',
          te: 'ఈ విషయాలను క్రమబద్ధంగా అధ్యయనం చేయాలనుకునే ఎవరికైనా — ఇప్పటికే కొంత చదివిన వారికైనా, ఆసక్తి మరియు పట్టుదలతో ఇప్పుడే ప్రారంభించేవారికైనా ఈ అధ్యయనం అందుబాటులో ఉంటుంది.',
        },
        {
          en: 'Prior knowledge is less important than the willingness to study honestly and continue consistently.',
          te: 'ముందస్తు జ్ఞానం కంటే నిజాయితీగా అధ్యయనం చేయాలనే ఆసక్తి మరియు క్రమంగా కొనసాగించే సిద్ధతకు ప్రాధాన్యం ఉంటుంది.',
        },
      ],
      practice: [
        {
          en: 'The process begins with a conversation about what you have studied, what you wish to understand, and what kind of study may be suitable for you.',
          te: 'మీరు ఇంతవరకు ఏమి చదివారు, ఏమి తెలుసుకోవాలనుకుంటున్నారు, మీకు ఎలాంటి అధ్యయనం అవసరం అనే విషయంపై సంభాషణతో ప్రారంభమవుతుంది.',
        },
        {
          en: 'Depending on the requirement, the study may continue individually or in a small group.',
          te: 'అవసరాన్ని బట్టి ఒకరితో ఒకరు లేదా చిన్న బృందంగా అధ్యయనం కొనసాగించవచ్చు.',
        },
        {
          en: 'Since the study progresses gradually, regular participation and personal study are encouraged as far as practical.',
          te: 'అధ్యయనం క్రమంగా కొనసాగుతుంది కాబట్టి, సాధ్యమైనంతవరకు క్రమబద్ధమైన హాజరు మరియు వ్యక్తిగత అధ్యయనానికి ప్రాధాన్యం ఉంటుంది.',
        },
      ],
      cta: { en: 'Enquire About This Study', te: 'ఈ అధ్యయనం గురించి విచారించండి' },
    },
  ] satisfies Discipline[],

  /* ── Explicit comparison, so nobody expects a booking flow ───── */
  comparison: {
    title: {
      en: 'How This Differs from Other Services',
      te: 'ఇది సైట్‌లోని మిగతా సేవలకు ఎలా భిన్నం',
    },
    lede: [
      {
        en: 'Vastu, Jyotisha, and Numerology services are generally provided for a specific need or question.',
        te: 'వాస్తు, జ్యోతిషం మరియు సంఖ్యా శాస్త్రానికి సంబంధించిన సేవలు సాధారణంగా ఒక నిర్దిష్ట అవసరం లేదా ప్రశ్న ఆధారంగా అందించబడతాయి.',
      },
      {
        en: 'Swara Shastra and Brahmavidya are study, practice, and personal guidance programs. Therefore, they do not necessarily have a single meeting, fixed service duration, or fixed completion point.',
        te: 'స్వర శాస్త్రం మరియు బ్రహ్మవిద్య మాత్రం అధ్యయనం, సాధన మరియు వ్యక్తిగత మార్గదర్శనానికి సంబంధించిన కార్యక్రమాలు. అందువల్ల వీటికి మిగతా సేవల మాదిరిగా ఒకే సమావేశం, ఒకే సేవా వ్యవధి లేదా ఒకే ముగింపు విధానం ఉండదు.',
      },
    ] satisfies Bi[],
    label: { en: 'Aspect', te: 'అంశం' },
    colA: { en: 'Vastu · Jyotisha · Numerology', te: 'వాస్తు · జ్యోతిషం · సంఖ్యా శాస్త్రం' },
    colB: { en: 'Swara Shastra · Brahmavidya', te: 'స్వర శాస్త్రం · బ్రహ్మవిద్య' },
    rows: [
      {
        id: 'nature',
        label: { en: 'What it is', te: 'ఇది ఏమిటి' },
        a: { en: 'Specific consultation service', te: 'నిర్దిష్ట పరిధి గల సంప్రదింపు సేవ' },
        b: {
          en: 'Continuing study, practice, and guidance',
          te: 'కొనసాగగల అధ్యయనం, సాధన మరియు మార్గదర్శనం',
        },
      },
      {
        id: 'start',
        label: { en: 'How it begins', te: 'ఎలా ప్రారంభమవుతుంది' },
        a: {
          en: 'Select a service and arrange a consultation',
          te: 'సేవను ఎంచుకుని సంప్రదింపు సమయం నిర్ణయించడం',
        },
        b: {
          en: 'Initial conversation to understand the requirement',
          te: 'ముందుగా సంభాషణ మరియు అవసరాన్ని అర్థం చేసుకోవడం',
        },
      },
      {
        id: 'output',
        label: { en: 'What you receive', te: 'మీకు అందేది' },
        a: {
          en: 'Assessment and guidance on the relevant subject',
          te: 'సంబంధిత అంశంపై పరిశీలన మరియు మార్గదర్శనం',
        },
        b: {
          en: 'Personal study and guidance over time',
          te: 'కాలక్రమేణా వ్యక్తిగత అధ్యయనం మరియు మార్గదర్శనం',
        },
      },
      {
        id: 'duration',
        label: { en: 'Duration', te: 'ఎంత కాలం' },
        a: { en: 'According to the nature of the service', te: 'సేవ స్వభావాన్ని బట్టి' },
        b: {
          en: 'According to the individual and nature of study',
          te: 'వ్యక్తి మరియు అధ్యయన స్వభావాన్ని బట్టి',
        },
      },
      {
        id: 'fee',
        label: { en: 'Fee', te: 'రుసుము' },
        a: {
          en: 'Communicated in advance according to the service and scope',
          te: 'సేవ స్వభావం మరియు పని పరిధిని బట్టి ముందుగా తెలియజేయబడుతుంది',
        },
        b: {
          en: 'Communicated in advance according to the study arrangement',
          te: 'అధ్యయన విధానం మరియు వ్యక్తిగత మార్గదర్శనాన్ని బట్టి ముందుగా తెలియజేయబడుతుంది',
        },
      },
      {
        id: 'end',
        label: { en: 'How it concludes', te: 'ఎలా ముగుస్తుంది' },
        a: {
          en: 'When the relevant consultation is completed',
          te: 'సంబంధిత సంప్రదింపు పూర్తయినప్పుడు',
        },
        b: {
          en: 'May continue or be paused according to the requirement',
          te: 'అవసరాన్ని బట్టి కొనసాగించవచ్చు లేదా విరామం తీసుకోవచ్చు',
        },
      },
    ],
  },

  /* ── Enquiry flow, in place of a fee table ───────────────────── */
  flow: {
    title: {
      en: 'Enquiry and Guidance Conversation',
      te: 'విచారణ, మార్గదర్శన సంభాషణ',
    },
    lede: {
      en: 'There is no requirement to complete a lengthy form or select a time slot in advance. The initial process is intentionally calm and personal.',
      te: 'తప్పనిసరిగా నింపాల్సిన పెద్ద ఫారం లేదా ముందుగా ఖాళీ సమయాలను ఎంచుకోవాల్సిన విధానం ఉండదు. ప్రారంభ ప్రక్రియ ప్రశాంతంగా మరియు వ్యక్తిగతంగా ఉంటుంది.',
    },
    steps: [
      {
        id: 'write',
        name: { en: 'You Write', te: 'మీరు రాస్తారు' },
        body: {
          en: 'Send a short message in your own words about your background, any existing practice, what you have studied, and what has brought you towards this study. Two paragraphs are enough.',
          te: 'మీ మాటల్లో ఒక చిన్న సందేశం పంపండి: మీ నేపథ్యం, ఏదైనా సాధన ఉంటే అది, మీరు చదివినవి మరియు మిమ్మల్ని ఈ అధ్యయనం వైపు తీసుకువచ్చిన కారణం. రెండు పేరాలు సరిపోతాయి.',
        },
      },
      {
        id: 'reply',
        name: { en: 'Personal Response', te: 'వ్యక్తిగత సమాధానం' },
        body: {
          en: 'Your message will be reviewed and a response will be provided. Where necessary, a few preliminary questions may also be asked.',
          te: 'మీ సందేశాన్ని పరిశీలించి సమాధానం ఇస్తాం. అవసరమైతే ముందుగా కొన్ని ప్రశ్నలు కూడా అడగవచ్చు.',
        },
      },
      {
        id: 'conversation',
        name: { en: 'A Conversation', te: 'ఒక సంభాషణ' },
        body: {
          en: 'An initial conversation is held. Its purpose is to understand whether this study is suitable for you at present, and how it may be begun.',
          te: 'ఒక ప్రారంభ సంభాషణ నిర్వహిస్తాం. దీని ఉద్దేశం ఈ అధ్యయనం ప్రస్తుతం మీకు అనుకూలమా, ఏ విధంగా ప్రారంభించాలి అనే విషయాన్ని అర్థం చేసుకోవడం.',
        },
      },
      {
        id: 'begin',
        name: { en: 'If Both Sides Agree', te: 'ఇరువైపులా అంగీకారం ఉంటే' },
        body: {
          en: 'The manner of beginning the study, the pattern of meetings, and other necessary arrangements are decided mutually. Where a fee applies, it is also clearly communicated in advance.',
          te: 'అధ్యయనం ప్రారంభించే విధానం, సమావేశాల క్రమం మరియు అవసరమైన ఇతర అంశాలను పరస్పరం నిర్ణయించుకుంటాం. రుసుము వర్తించే చోట, అది కూడా ముందుగా స్పష్టంగా తెలియజేయబడుతుంది.',
        },
      },
    ],
    cta: { en: 'Write to us', te: 'మాకు రాయండి' },
  },

  faqs: [
    {
      id: 'beginners',
      q: {
        en: 'Is this available for complete beginners?',
        te: 'పూర్తిగా కొత్తవారికి ఇది అందుబాటులో ఉందా?',
      },
      a: [
        {
          en: 'For Swara Shastra: Beginners who wish to develop a regular daily practice may begin. Consistency and systematic observation are more important than prior knowledge.',
          te: 'స్వర శాస్త్రానికి: స్థిరమైన దైనందిన క్రమాన్ని ఏర్పరచుకోవాలనుకునే కొత్తవారు ప్రారంభించవచ్చు. ముందస్తు జ్ఞానం కంటే నిలకడ మరియు క్రమబద్ధమైన పరిశీలనకు ప్రాధాన్యం ఉంటుంది.',
        },
        {
          en: 'For Brahmavidya: Those who have not studied previously may also begin. However, willingness to devote time to textual study and reflection is important.',
          te: 'బ్రహ్మవిద్యకు: ముందుగా ఏమీ చదవని వారు కూడా ప్రారంభించవచ్చు. అయితే గ్రంథ అధ్యయనం మరియు మననానికి సమయం కేటాయించే సిద్ధత అవసరం.',
        },
      ],
    },
    {
      id: 'cost',
      q: { en: 'Is there a fee?', te: 'రుసుము ఉంటుందా?' },
      a: [
        {
          en: 'The initial conversation helps us understand your requirement and whether this study is suitable for you. Before beginning the study, the applicable fee and arrangement will be clearly communicated.',
          te: 'ప్రారంభ సంభాషణలో మీ అవసరం మరియు ఈ అధ్యయనం మీకు అనుకూలమా అనే విషయాన్ని అర్థం చేసుకుంటాం. అధ్యయనం ప్రారంభించే ముందు వర్తించే రుసుము మరియు విధానాన్ని స్పష్టంగా తెలియజేస్తాం.',
        },
      ],
    },
    {
      id: 'separate',
      q: {
        en: 'Can I study Swara Shastra without studying Brahmavidya?',
        te: 'బ్రహ్మవిద్య లేకుండా స్వర శాస్త్రం మాత్రమే చదవవచ్చా?',
      },
      a: [
        {
          en: 'Yes. Swara Shastra and Brahmavidya can be studied as two independent areas of study. Where relevant, related subjects may also be considered according to the individual’s interest and practice.',
          te: 'అవును. స్వర శాస్త్రం మరియు బ్రహ్మవిద్యను రెండు స్వతంత్ర అధ్యయన విభాగాలుగా చదవవచ్చు. వ్యక్తి యొక్క ఆసక్తి మరియు సాధనకు అనుగుణంగా కొన్ని సందర్భాల్లో సంబంధిత అంశాలను కూడా పరిశీలించవచ్చు.',
        },
      ],
    },
    {
      id: 'ready',
      q: {
        en: 'How do I know whether I am ready to begin?',
        te: 'ప్రారంభించడానికి నేను సిద్ధమేనా అని ఎలా తెలుసుకోవాలి?',
      },
      a: [
        {
          en: 'The initial conversation considers your interest, present practice, available study time, and purpose. Guidance can then be provided regarding whether it is suitable to begin or whether some preparation would be useful first.',
          te: 'ప్రారంభ సంభాషణలో మీకు ఉన్న ఆసక్తి, ప్రస్తుతం ఉన్న సాధన, అధ్యయనానికి కేటాయించగల సమయం మరియు మీ ఉద్దేశాన్ని చర్చిస్తాం. దాని ఆధారంగా ప్రారంభించడం అనుకూలమా అనే విషయంపై మార్గదర్శనం అందిస్తాం.',
        },
      ],
    },
    {
      id: 'online',
      q: { en: 'Is it possible to study online?', te: 'ఇది ఆన్‌లైన్‌లో సాధ్యమా?' },
      a: [
        {
          en: 'Yes. Study and guidance can also be provided online where appropriate. Any recording of meetings can be decided by mutual agreement in advance.',
          te: 'అవును. అవసరాన్ని బట్టి ఆన్‌లైన్‌లో కూడా అధ్యయనం మరియు మార్గదర్శనం అందించవచ్చు. సమావేశాల రికార్డింగ్ గురించి ముందుగానే పరస్పర అంగీకారం ప్రకారం నిర్ణయించుకోవచ్చు.',
        },
      ],
    },
  ],
};
