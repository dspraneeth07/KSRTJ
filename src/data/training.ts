/* ═══════════════════════════════════════════════════════════════════
   Training pages.

   The programmes themselves — names, descriptions, level, duration,
   medium, mode, certificate — live in the dictionary as `crs.*` and
   `courses.*` keys and are read through `courseGroups` in content.ts.
   Only the page furniture lives here, so a change to a course
   description never has to be made twice.
   ═══════════════════════════════════════════════════════════════════ */

export const training = {
  path: '/training',
  certificatePath: '/training/certificate-courses',

  crumbHome: { en: 'Home', te: 'ముఖపేజీ' },
  crumbTraining: { en: 'Training', te: 'శిక్షణ' },

  /** Shown under the overview hero, above the two groups. */
  standfirst: {
    en: 'Teaching is treated as one half of the work, alongside consultation. What is applied in practice is what is taught.',
    te: 'సంప్రదింపుతో పాటు బోధనను కూడా ఈ పనిలోని ఒక భాగంగానే చూస్తారు. ఆచరణలో ఉపయోగించేదే ఇక్కడ బోధిస్తారు.',
  },

  /** The line that sends a reader from the overview to the detail page. */
  certLink: {
    en: 'See the certificate courses in full',
    te: 'సర్టిఫికేట్ కోర్సుల పూర్తి వివరాలు చూడండి',
  },

  /* ── The certificate-courses page ─────────────────────────────── */
  certificate: {
    eyebrow: { en: 'Training', te: 'శిక్షణ' },
    lede: {
      en: 'Three certificate courses, each taught according to the nature and level of the course. Every course concludes with a Course Completion Certificate.',
      te: 'మూడు సర్టిఫికేట్ కోర్సులు — ప్రతి ఒక్కటీ కోర్సు స్వభావం మరియు స్థాయిని బట్టి బోధించబడుతుంది. ప్రతి కోర్సు చివర Course Completion Certificate ఇవ్వబడుతుంది.',
    },
    /**
     * A certificate has to say plainly what it is not, or the reader will
     * assume the stronger reading. This is the site's standing position,
     * not a disclaimer added for this page.
     */
    note: {
      en: 'A Course Completion Certificate records that the course was completed. It is not a university degree and not a government-recognised qualification, and is not presented as one.',
      te: 'Course Completion Certificate అనేది కోర్సు పూర్తి చేసినట్లు తెలిపే ధ్రువపత్రం. ఇది విశ్వవిద్యాలయ పట్టా కాదు, ప్రభుత్వ గుర్తింపు పొందిన అర్హత కాదు — అలా చెప్పబడదు కూడా.',
    },
    noteLabel: { en: 'Note', te: 'గమనిక' },
    enquire: { en: 'Enquire about a course', te: 'కోర్సు గురించి అడగండి' },
    backToTraining: { en: 'All training programmes', te: 'అన్ని శిక్షణ కార్యక్రమాలు' },
  },

  /* ── Study programmes, on the overview page ───────────────────── */
  studyNote: {
    en: 'Study programmes are open-ended and are guided personally, so no fixed duration or certificate is stated against them.',
    te: 'అధ్యయన కార్యక్రమాలు నిర్దిష్ట కాలపరిమితి లేనివి, వ్యక్తిగత మార్గదర్శనంతో కొనసాగుతాయి. అందువల్ల వాటికి నిర్ణీత వ్యవధి లేదా సర్టిఫికేట్ పేర్కొనబడదు.',
  },

  cta: {
    title: { en: 'Ask about a course.', te: 'కోర్సు గురించి అడగండి.' },
    lede: {
      en: 'Tell us which subject you want to study and what you have read so far, and we will tell you which course fits.',
      te: 'మీరు ఏ శాస్త్రం నేర్చుకోవాలనుకుంటున్నారో, ఇప్పటివరకు ఏమి చదివారో తెలియజేయండి — ఏ కోర్సు సరిపోతుందో చెబుతాం.',
    },
  },
};
