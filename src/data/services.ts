import type { Bi, BiList } from '../i18n/bi';

/* ═══════════════════════════════════════════════════════════════════
   Main services.

   Four disciplines, each broken into the clusters a client actually
   arrives with — "before I build", "the house I live in", "my chart",
   "my child's name" — rather than one flat list of fifty items. The
   clusters are the navigation: a visitor finds their own situation and
   reads only that column.

   Colocated bilingual pairs (`Bi` / `BiList`) rather than dictionary
   keys, because this is long-form copy that has to be reviewed with
   both languages side by side.
   ═══════════════════════════════════════════════════════════════════ */

export interface ServiceCluster {
  id: string;
  label: Bi;
  items: BiList;
}

export interface ServiceBlock {
  id: string;
  /** Where "View details" goes. */
  to: string;
  name: Bi;
  standfirst: Bi;
  clusters: ServiceCluster[];
}

export const viewDetails: Bi = { en: 'View details', te: 'వివరాలు చూడండి' };

export const serviceBlocks: ServiceBlock[] = [
  /* ── Vastu Shastra ─────────────────────────────────────────── */
  {
    id: 'vastu',
    to: '/services/vastu',
    name: { en: 'Vastu Shastra', te: 'వాస్తు శాస్త్రం' },
    standfirst: {
      en: 'The traditional science of Vastu',
      te: 'వాస్తు యొక్క సంప్రదాయ శాస్త్రం',
    },
    clusters: [
      {
        id: 'before',
        label: {
          en: 'Before Site Selection and Construction',
          te: 'స్థలం మరియు నిర్మాణానికి ముందు',
        },
        items: {
          en: [
            'Site Vastu',
            'Ayadi calculations',
            'New construction planning',
            'Directions, measurements and construction-related considerations',
          ],
          te: [
            'స్థల వాస్తు',
            'ఆయాది గణితం',
            'నూతన నిర్మాణ ప్రణాళిక',
            'దిశలు, కొలతలు మరియు నిర్మాణ సంబంధిత పరిశీలనలు',
          ],
        },
      },
      {
        id: 'residential',
        label: { en: 'Residential Spaces', te: 'నివాస గృహాలు' },
        items: {
          en: [
            'House and villa Vastu',
            'Flat and apartment Vastu',
            'Main entrance assessment',
            'Room placement',
            'Water and drainage placement',
          ],
          te: [
            'ఇల్లు, విల్లా వాస్తు',
            'ఫ్లాట్, అపార్ట్‌మెంట్ వాస్తు',
            'ముఖ ద్వార పరిశీలన',
            'గదుల స్థాన నిర్ణయం',
            'నీరు, మురుగు నీటి స్థానం',
          ],
        },
      },
      {
        id: 'commercial',
        label: {
          en: 'Business, Industry and Institutions',
          te: 'వ్యాపారం, పరిశ్రమ మరియు సంస్థలు',
        },
        items: {
          en: [
            'Shop and office Vastu',
            'Commercial Vastu',
            'Industrial Vastu',
            'Educational institution Vastu',
          ],
          te: [
            'దుకాణం, కార్యాలయ వాస్తు',
            'వాణిజ్య వాస్తు',
            'పారిశ్రామిక వాస్తు',
            'విద్యా సంస్థల వాస్తు',
          ],
        },
      },
      {
        id: 'methods',
        label: {
          en: 'Methods Used in Vastu Assessment',
          te: 'వాస్తు పరిశీలనలో ఉపయోగించే విధానాలు',
        },
        items: {
          en: [
            'Traditional Vastu methods',
            'Degree-based Vastu assessment',
            'Zone-based Vastu assessment',
            'Assessment based on directions, divisions and locations',
          ],
          te: [
            'సంప్రదాయ వాస్తు పద్ధతులు',
            'డిగ్రీల ఆధారిత వాస్తు పరిశీలన',
            'జోన్ ఆధారిత వాస్తు పరిశీలన',
            'దిశలు, విభాగాలు మరియు స్థానాల ఆధారిత పరిశీలన',
          ],
        },
      },
      {
        id: 'existing',
        label: { en: 'Existing Buildings', te: 'నిర్మించిన భవనాలు' },
        items: {
          en: [
            'Vastu analysis of existing buildings',
            'Assessment of Vastu-related issues',
            'Vastu remedies',
          ],
          te: [
            'ప్రస్తుత భవన వాస్తు విశ్లేషణ',
            'వాస్తు దోషాల పరిశీలన',
            'వాస్తు పరిహారాలు',
          ],
        },
      },
    ],
  },

  /* ── Jyotisha Shastra & Allied Studies ─────────────────────── */
  {
    id: 'jyotisha',
    to: '/services/jyotisha',
    name: {
      en: 'Jyotisha Shastra & Allied Studies',
      te: 'జ్యోతిష శాస్త్రం & అనుబంధ విద్యలు',
    },
    standfirst: {
      en: 'Traditional knowledge of Jyotisha Shastra and its various allied disciplines',
      te: 'జ్యోతిష శాస్త్రం మరియు దానికి అనుబంధంగా ఉన్న వివిధ విద్యల సంప్రదాయ పరిజ్ఞానం',
    },
    clusters: [
      {
        id: 'chart',
        label: {
          en: 'Horoscope, Personality and Life Aspects',
          te: 'జాతకం, వ్యక్తిత్వం మరియు జీవన అంశాలు',
        },
        items: {
          en: [
            'Complete birth horoscope analysis',
            'Nature and life patterns',
            'Education and knowledge path',
            'Health-related aspects',
          ],
          te: [
            'సంపూర్ణ జన్మ జాతక విశ్లేషణ',
            'స్వభావం, జీవన సరళి',
            'విద్య, జ్ఞాన మార్గం',
            'ఆరోగ్య సంబంధిత అంశాలు',
          ],
        },
      },
      {
        id: 'career',
        label: { en: 'Career, Wealth and Property', te: 'వృత్తి, సంపద, ఆస్తి' },
        items: {
          en: [
            'Employment and profession',
            'Business and financial status',
            'Income, property and wealth combinations',
            'House, land and vehicle combinations',
            'Foreign travel, foreign education or employment, and settlement abroad',
          ],
          te: [
            'ఉద్యోగం, వృత్తి',
            'వ్యాపారం, ఆర్థిక స్థితి',
            'ఆదాయం, ఆస్తి, ధన యోగాలు',
            'గృహ, భూమి, వాహన యోగాలు',
            'విదేశీ ప్రయాణం, విదేశీ విద్య లేదా ఉద్యోగం, స్థిరనివాసం',
          ],
        },
      },
      {
        id: 'family',
        label: { en: 'Relationships and Family', te: 'సంబంధాలు, కుటుంబం' },
        items: {
          en: [
            'Marriage and marital life',
            'Marriage compatibility',
            'Children-related matters',
            'Family and relationships',
          ],
          te: [
            'వివాహం, దాంపత్య జీవితం',
            'వివాహ అనుకూలత',
            'సంతాన విషయాలు',
            'కుటుంబం, సంబంధాలు',
          ],
        },
      },
      {
        id: 'timing',
        label: {
          en: 'Timing and Event Analysis',
          te: 'కాలం మరియు సంఘటనల పరిశీలన',
        },
        items: {
          en: [
            'Assessment based on Dasha–Bhukti and transits',
            'Timing of significant life events',
          ],
          te: [
            'దశ–భుక్తి మరియు గోచారాల ఆధారిత పరిశీలన',
            'జీవిత సంఘటనల కాల నిర్ణయం',
          ],
        },
      },
      {
        id: 'muhurta',
        label: {
          en: 'Muhurta, Naming and Remedies',
          te: 'ముహూర్తం, నామకరణం మరియు పరిహారాలు',
        },
        items: {
          en: [
            'Selection of Muhurta, date and time',
            'Naming based on Nakshatra and Pada',
            'Jyotisha remedies',
          ],
          te: [
            'ముహూర్తం, తేదీ మరియు సమయ నిర్ణయం',
            'నక్షత్ర, పాద ఆధారిత నామకరణం',
            'జ్యోతిష పరిహారాలు',
          ],
        },
      },
    ],
  },

  /* ── Numerology ────────────────────────────────────────────── */
  {
    id: 'numerology',
    to: '/services/numerology',
    name: { en: 'Numerology', te: 'సంఖ్యా శాస్త్రం' },
    standfirst: {
      en: 'The study of numbers and names',
      te: 'సంఖ్యలు మరియు నామాలకు సంబంధించిన అధ్యయనం',
    },
    clusters: [
      {
        id: 'personal',
        label: {
          en: 'Personal and Family Names',
          te: 'వ్యక్తిగత, కుటుంబ నామాలు',
        },
        items: {
          en: [
            'Personal name and spelling correction',
            'Naming of children',
            'Signature analysis',
          ],
          te: [
            'వ్యక్తిగత పేరు, స్పెల్లింగ్ సవరణ',
            'శిశు నామకరణం',
            'సంతక విశ్లేషణ',
          ],
        },
      },
      {
        id: 'business',
        label: {
          en: 'Business and Brand Identity',
          te: 'వ్యాపార, బ్రాండ్ గుర్తింపు',
        },
        items: {
          en: ['Business names', 'Company and organization names', 'Brand names'],
          te: ['వ్యాపార నామం', 'కంపెనీ, సంస్థ నామం', 'బ్రాండ్ నామం'],
        },
      },
      {
        id: 'everyday',
        label: { en: 'Everyday Numbers', te: 'రోజువారీ సంఖ్యలు' },
        items: {
          en: [
            'Mobile number compatibility',
            'Vehicle number compatibility',
            'House and flat number compatibility',
          ],
          te: [
            'మొబైల్ సంఖ్య అనుకూలత',
            'వాహన సంఖ్య అనుకూలత',
            'ఇల్లు, ఫ్లాట్ సంఖ్య అనుకూలత',
          ],
        },
      },
      {
        id: 'dates',
        label: {
          en: 'Date, Timing and Compatibility',
          te: 'తేదీ, కాలం మరియు అనుకూలత',
        },
        items: {
          en: [
            'Marriage compatibility',
            'Date selection based on numbers',
            'General numerological compatibility assessment',
          ],
          te: [
            'వివాహ అనుకూలత',
            'సంఖ్య ఆధారంగా తేదీ ఎంపిక',
            'సాధారణ సంఖ్యా అనుకూలత పరిశీలన',
          ],
        },
      },
    ],
  },

  /* ── Spiritual Studies & Brahmavidya ───────────────────────── */
  {
    id: 'spiritual',
    to: '/services/spiritual',
    name: {
      en: 'Spiritual Studies & Brahmavidya',
      te: 'ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య',
    },
    standfirst: {
      en: 'Study, practice and guidance related to meditation, mantra, Swara Shastra, self-knowledge and Brahmavidya',
      te: 'ధ్యానం, మంత్రం, స్వర శాస్త్రం, ఆత్మజ్ఞానం మరియు బ్రహ్మవిద్యకు సంబంధించిన అధ్యయనం, సాధన మరియు మార్గదర్శనం',
    },
    clusters: [
      {
        id: 'swarashastra',
        label: { en: 'Swara Shastra', te: 'స్వర శాస్త్రం' },
        items: {
          en: [
            'Breath flow',
            'Nadi flow',
            'Nature of Swara',
            'Time-related observations',
            'Traditional aspects of Swara Shastra',
          ],
          te: [
            'శ్వాస ప్రవాహం',
            'నాడీ ప్రవాహం',
            'స్వర స్వభావం',
            'కాల సంబంధిత పరిశీలనలు',
            'స్వర శాస్త్రానికి సంబంధించిన సంప్రదాయ అంశాలు',
          ],
        },
      },
      {
        id: 'brahmavidya',
        label: {
          en: 'Spiritual Studies & Brahmavidya',
          te: 'ఆధ్యాత్మిక విద్యలు & బ్రహ్మవిద్య',
        },
        items: {
          en: [
            'Meditation',
            'Mantra practice',
            'Inner practice',
            'Self-knowledge',
            'Teaching, text-based study and practice related to Brahmavidya',
          ],
          te: [
            'ధ్యానం',
            'మంత్ర సాధన',
            'అంతర్ముఖ సాధన',
            'ఆత్మజ్ఞానం',
            'బ్రహ్మవిద్యకు సంబంధించిన బోధన, గ్రంథ ఆధారిత అధ్యయనం మరియు సాధన',
          ],
        },
      },
    ],
  },
];
