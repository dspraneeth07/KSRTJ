import type { BiList } from '../i18n/bi';

/* ═══════════════════════════════════════════════════════════════════
   About — the practitioner's own page.

   Every line here is client-supplied copy. Where the page needs a
   heading the client did not give one for, the heading is taken from
   their own section titles rather than invented.
   ═══════════════════════════════════════════════════════════════════ */

export const about = {
  path: '/about',

  eyebrow: { en: 'Practice', te: 'ఆచరణ' },

  /** The standfirst beside the photograph. */
  standfirst: {
    en: 'With 12+ years of experience in Vastu Shastra, Jyotisha Shastra & Allied Studies, Numerology, Swara Shastra, and Spiritual Studies & Brahmavidya, he founded this centre with a continued focus on practice, research, and teaching.',
    te: 'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు, సంఖ్యా శాస్త్రం, స్వర శాస్త్రం మరియు ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్యపై 12+ సంవత్సరాల అనుభవంతో, వాటి ఆచరణ, పరిశోధన మరియు బోధనను కొనసాగిస్తూ ఈ కేంద్రాన్ని ప్రారంభించారు.',
  },
  place: { en: 'KDR Nagar · Wanaparthy · Telangana', te: 'కేడీఆర్ నగర్ · వనపర్తి · తెలంగాణ' },

  /* ── How the practice is conducted, then the qualifications ──── */
  opening: {
    label: { en: 'Qualifications', te: 'విద్యార్హతలు' },
    paras: [
      {
        en: 'Consultations and classes are conducted in person and, where required, are also available online. Each discipline is considered according to its own principles and methods, with individual disciplines examined separately where appropriate and relevant disciplines considered together when required.',
        te: 'సంప్రదింపులు మరియు తరగతులు ప్రత్యక్షంగా నిర్వహించడంతో పాటు, అవసరాన్ని బట్టి ఆన్‌లైన్‌లో కూడా అందించబడతాయి. ప్రతి శాస్త్రాన్ని దాని స్వంత సూత్రాలు మరియు విధానాల ప్రకారం పరిగణించి, సంబంధిత అవసరాన్ని బట్టి ఒక్కో శాస్త్రాన్ని విడిగా లేదా అవసరమైనప్పుడు సంబంధిత శాస్త్రాలను సమన్వయంగా పరిశీలిస్తారు.',
      },
    ],
  },

  /* ── Our Approach ────────────────────────────────────────────── */
  method: {
    label: { en: 'Our Approach', te: 'పని విధానం' },
    lede: {
      en: 'Our approach is to systematically assess each consultation based on the relevant information, clearly explain the important factors, and provide appropriate guidance.',
      te: 'ప్రతి సంప్రదింపును సంబంధిత వివరాల ఆధారంగా క్రమబద్ధంగా పరిశీలించి, అవసరమైన అంశాలను స్పష్టంగా వివరించి, తగిన మార్గదర్శకత్వం అందించడం మా విధానం.',
    },
    items: [
      {
        id: 'review',
        name: { en: 'Preliminary Review', te: 'ముందస్తు పరిశీలన' },
        body: {
          en: 'We review the birth, site, or other relevant details required for the consultation in advance. Where necessary, charts, Vastu measurements, or numerical details are prepared and rechecked beforehand.',
          te: 'సంప్రదింపుకు అవసరమైన జనన, స్థల లేదా ఇతర వివరాలను ముందుగా పరిశీలిస్తాం. అవసరమైన చోట కుండలి, వాస్తు సంబంధిత కొలతలు లేదా సంఖ్యా వివరాలను ముందుగానే సిద్ధం చేసి పునఃపరిశీలిస్తాం.',
        },
      },
      {
        id: 'verify',
        name: {
          en: 'Verification of Required Details',
          te: 'అవసరమైన వివరాల ధ్రువీకరణ',
        },
        body: {
          en: 'For Vastu assessments, the required directions, measurements, and other details are verified. If there is uncertainty regarding the birth time, we explain in advance the extent to which an assessment can be made based on the available information.',
          te: 'వాస్తు పరిశీలనలో అవసరమైన దిశలు, కొలతలు మరియు ఇతర వివరాలను నిర్ధారిస్తాం. జనన సమయం విషయంలో సందేహం ఉంటే, అందుబాటులో ఉన్న వివరాల ఆధారంగా పరిశీలించగలిగే పరిమితిని ముందుగా తెలియజేస్తాం.',
        },
      },
      {
        id: 'assess',
        name: {
          en: 'Assessment of Relevant Factors',
          te: 'సంబంధిత అంశాల పరిశీలన',
        },
        body: {
          en: 'Relevant factors are assessed according to the principles and methods of the applicable discipline. Important factors are identified and explained according to their relevance.',
          te: 'సంబంధిత శాస్త్రంలోని సూత్రాలు మరియు విధానాల ప్రకారం అవసరమైన అంశాలను పరిశీలిస్తాం. ముఖ్యమైన అంశాలను వాటి ప్రాధాన్యతను బట్టి వేరు చేసి వివరిస్తాం.',
        },
      },
      {
        id: 'practical',
        name: { en: 'Practical Suggestions', te: 'ఆచరణాత్మక సూచనలు' },
        body: {
          en: 'Where appropriate, practical modifications and suggestions are given priority. In Vastu-related matters, structural changes are considered only when necessary.',
          te: 'అవసరమైన చోట ముందుగా సాధ్యమైన ఆచరణాత్మక మార్పులు మరియు సూచనలకు ప్రాధాన్యం ఇస్తాం. వాస్తు సంబంధిత సందర్భాల్లో నిర్మాణ మార్పులను అవసరమైనప్పుడు మాత్రమే పరిశీలిస్తాం.',
        },
      },
      {
        id: 'guidance',
        name: { en: 'Clear Guidance', te: 'స్పష్టమైన మార్గదర్శకత్వం' },
        body: {
          en: 'The relevant factors identified during the assessment are explained clearly along with their basis. Appropriate suggestions and guidance are provided based on the information available.',
          te: 'పరిశీలనలో గుర్తించిన సంబంధిత అంశాలను వాటి ఆధారాలతో సహా స్పష్టంగా వివరిస్తాం. అందుబాటులో ఉన్న సమాచారం మేరకు అవసరమైన సూచనలు మరియు మార్గదర్శకత్వాన్ని తెలియజేస్తాం.',
        },
      },
    ],
  },

  /* ── Practice and teaching ───────────────────────────────────── */
  record: {
    label: { en: 'Practice & Teaching', te: 'ఆచరణ మరియు బోధన' },
    paras: [
      {
        en: 'This centre has two main purposes: to apply the relevant disciplines to the needs, questions, and concerns brought by people; and to provide teaching and structured study guidance to those who wish to learn these disciplines.',
        te: 'ఈ కేంద్రం రెండు ప్రధాన ఉద్దేశాలతో పనిచేస్తుంది: ప్రజలు తీసుకువచ్చే అవసరాలు, ప్రశ్నలు మరియు సమస్యలకు సంబంధిత శాస్త్రాలను అన్వయించడం; అలాగే ఈ శాస్త్రాలను క్రమబద్ధంగా నేర్చుకోవాలనుకునే వారికి బోధన మరియు అధ్యయన మార్గదర్శనం అందించడం.',
      },
      {
        en: 'Consultations and classes are conducted with individual attention and may be provided online or in person, as required.',
        te: 'సంప్రదింపులు మరియు తరగతులు వ్యక్తిగత శ్రద్ధతో నిర్వహించబడతాయి. అవసరాన్ని బట్టి ఆన్‌లైన్ లేదా ప్రత్యక్ష విధానంలో నిర్వహించవచ్చు.',
      },
    ],
  },

  /* ── What we do not do ───────────────────────────────────────── */
  boundaries: {
    label: { en: 'What We Do Not Do', te: 'ఈ సంస్థ చేయనివి' },
    items: {
      en: [
        'We do not sell gemstones, yantras, ritual materials, or other protective objects. Relevant remedies may be suggested where appropriate.',
        'We do not make specific predictions regarding death or fatal illnesses.',
        'We do not diagnose medical conditions or diseases, nor do we advise stopping or changing medical treatment. Astrological consideration of health-related matters is not a substitute for medical advice.',
        'We do not guarantee specific outcomes.',
        'If a matter falls outside our scope, we will clearly inform you.',
      ],
      te: [
        'రత్నాలు, యంత్రాలు, పూజా సామగ్రి లేదా ఇతర రక్షణ వస్తువులను విక్రయించము. అవసరమైన చోట సంబంధిత పరిహారాలను సూచిస్తాం.',
        'మరణం లేదా ప్రాణాంతక వ్యాధి వంటి విషయాలపై నిర్దిష్ట జోస్యాలు చేయము.',
        'వైద్య నిర్ధారణ చేయము, వ్యాధులను నిర్ధారించము మరియు వైద్య చికిత్సను ఆపమని లేదా మార్చమని సూచించము. ఆరోగ్యానికి సంబంధించిన జ్యోతిష్య పరిశీలన వైద్యుల సలహాకు ప్రత్యామ్నాయం కాదు.',
        'నిర్దిష్ట ఫలితాలకు హామీ ఇవ్వము.',
        'సంబంధిత అంశం మా పరిధికి చెందకపోతే, దాన్ని స్పష్టంగా తెలియజేస్తాం.',
      ],
    } satisfies BiList,
  },

  /* ── Teaching ────────────────────────────────────────────────── */
  teaching: {
    label: { en: 'Teaching', te: 'బోధన' },
    certPara: {
      en: 'Certificate courses are offered in Vastu Shastra, Jyotisha Shastra & Allied Studies, and Numerology. Relevant principles, methods, and practical aspects are taught systematically according to the nature and level of each course.',
      te: 'వాస్తు శాస్త్రం, జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు మరియు సంఖ్యా శాస్త్రంలో సర్టిఫికేట్ కోర్సులు నిర్వహించబడతాయి. కోర్సు స్వభావం మరియు స్థాయిని బట్టి సంబంధిత సూత్రాలు, విధానాలు మరియు ఆచరణాత్మక అంశాలను క్రమబద్ధంగా బోధిస్తాం.',
    },
    rows: [
      {
        id: 'levels',
        k: { en: 'Course Levels', te: 'కోర్సు స్థాయిలు' },
        v: {
          en: 'From foundational to advanced levels, depending on the nature and scope of the course',
          te: 'ప్రాథమిక స్థాయి నుండి ఉన్నత స్థాయి వరకు, కోర్సు స్వభావం మరియు అంశాల పరిధిని బట్టి',
        },
      },
      {
        id: 'languages',
        k: { en: 'Teaching Languages', te: 'బోధనా భాష' },
        v: { en: 'Telugu, English', te: 'తెలుగు, ఆంగ్లం' },
      },
      {
        id: 'mode',
        k: { en: 'Mode', te: 'విధానం' },
        v: { en: 'Online or In Person', te: 'ఆన్‌లైన్ లేదా ప్రత్యక్షం' },
      },
      {
        id: 'certificate',
        k: { en: 'Certificate', te: 'సర్టిఫికేట్' },
        /* Kept in English in both languages, so the wording cannot drift. */
        v: { en: 'Course Completion Certificate', te: 'Course Completion Certificate' },
      },
    ],
    studyLabel: { en: 'Study Programs', te: 'అధ్యయన కార్యక్రమాలు' },
    studyPara: {
      en: 'Swara Shastra and Spiritual Studies & Brahmavidya are offered through study, practice, and guidance. A Course Completion Certificate is not issued for these programs.',
      te: 'స్వర శాస్త్రం మరియు ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య అధ్యయనం, సాధన మరియు మార్గదర్శకత్వం రూపంలో అందించబడతాయి. వీటికి Course Completion Certificate ఇవ్వబడదు.',
    },
  },

  /* ── Training & Educational Programs ─────────────────────────── */
  programmes: {
    label: {
      en: 'Training & Educational Programs',
      te: 'శిక్షణ & విద్యా కార్యక్రమాలు',
    },
    groups: [
      {
        id: 'certificate',
        label: { en: 'Certificate Courses', te: 'సర్టిఫికేట్ కోర్సులు' },
        items: {
          en: ['Vastu Shastra', 'Jyotisha Shastra & Allied Studies', 'Numerology'],
          te: ['వాస్తు శాస్త్రం', 'జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు', 'సంఖ్యా శాస్త్రం'],
        } satisfies BiList,
      },
      {
        id: 'study',
        label: { en: 'Study Programs', te: 'అధ్యయన కార్యక్రమాలు' },
        items: {
          en: ['Swara Shastra', 'Spiritual Studies & Brahmavidya'],
          te: ['స్వర శాస్త్రం', 'ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య'],
        } satisfies BiList,
      },
    ],
    link: {
      en: 'See the training programmes in full',
      te: 'శిక్షణ కార్యక్రమాల పూర్తి వివరాలు చూడండి',
    },
  },

  /* ── Where and how ───────────────────────────────────────────── */
  where: {
    label: { en: 'Where & How', te: 'ఎక్కడ, ఎలా' },
    rows: [
      {
        id: 'base',
        k: { en: 'Centre', te: 'కేంద్రం' },
        v: {
          en: 'KDR Nagar, Wanaparthy, Telangana',
          te: 'కేడీఆర్ నగర్, వనపర్తి, తెలంగాణ',
        },
      },
      {
        id: 'visits',
        k: { en: 'Site Visits', te: 'స్థల సందర్శనలు' },
        v: {
          en: 'By prior arrangement; travel expenses are charged on an actual basis.',
          te: 'ముందస్తు ఏర్పాటుతో; ప్రయాణ ఖర్చు వాస్తవ ప్రాతిపదికన.',
        },
      },
      {
        id: 'online',
        k: { en: 'Online', te: 'ఆన్‌లైన్' },
        v: {
          en: 'Consultations and classes are also conducted online.',
          te: 'సంప్రదింపులు మరియు తరగతులు ఆన్‌లైన్‌లో కూడా నిర్వహించబడతాయి.',
        },
      },
      {
        id: 'languages',
        k: { en: 'Languages', te: 'భాషలు' },
        v: {
          en: 'Telugu and English — for consultations and classes.',
          te: 'తెలుగు, ఆంగ్లం — సంప్రదింపులు మరియు తరగతులకు.',
        },
      },
    ],
  },

  cta: {
    title: { en: 'Contact', te: 'సంప్రదించండి' },
    lede: {
      en: 'For consultations or course enquiries, please contact us via WhatsApp with a brief description of your requirement or the course you are interested in.',
      te: 'సంప్రదింపు కోసం లేదా కోర్సుల గురించి తెలుసుకోవడానికి, మీకు అవసరమైన విషయం లేదా కోర్సును క్లుప్తంగా తెలియజేసి వాట్సాప్ ద్వారా సంప్రదించండి.',
    },
  },
};
