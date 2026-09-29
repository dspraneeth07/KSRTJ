import type { Vertical } from './verticalTypes';

/* ═══════════════════════════════════════════════════════════════════
   Vastu Shastra vertical — full content for all 15 sub-services.

   Every block is written to be non-interchangeable. Where two services
   sound alike, the copy states the boundary explicitly:
     · Plot Vastu (land, before purchase) vs New Construction Planning
       (the building, once the land is confirmed)
     · House & Villa (you control the structure) vs Flat (you do not)
     · Shop/Office vs Commercial vs Industrial (unit → floor plate → plant)
     · Dosha Identification (diagnosis) vs Remedies (correction) vs
       Existing Building Analysis (the audit that contains both)
   ═══════════════════════════════════════════════════════════════════ */

export const clusters: Vertical['clusters'] = [
  {
    id: 'before',
    label: { en: 'Before you build', te: 'నిర్మాణానికి ముందు' },
    blurb: {
      en: 'Land, dimensions and the plan — the stage where correction is free.',
      te: 'స్థలం, కొలతలు, ప్రణాళిక — సవరణకు ఖర్చు లేని దశ.',
    },
  },
  {
    id: 'home',
    label: { en: 'Homes', te: 'నివాస గృహాలు' },
    blurb: {
      en: 'Independent houses, flats, and the systems inside them.',
      te: 'స్వతంత్ర గృహాలు, ఫ్లాట్లు, వాటిలోని వ్యవస్థలు.',
    },
  },
  {
    id: 'work',
    label: { en: 'Work & industry', te: 'వ్యాపారం, పరిశ్రమ' },
    blurb: {
      en: 'From a single shop to a plant floor or a campus.',
      te: 'ఒక దుకాణం నుండి కర్మాగారం, విద్యా సముదాయం వరకు.',
    },
  },
  {
    id: 'built',
    label: { en: 'Already built', te: 'నిర్మించిన భవనాలు' },
    blurb: {
      en: 'Diagnosis, correction, and the full audit that contains both.',
      te: 'నిర్ధారణ, పరిహారం, రెండింటినీ కలుపుకున్న సమగ్ర తనిఖీ.',
    },
  },
];

export const vastuServices: Vertical['services'] = [
  /* ── 1 ─────────────────────────────────────────────────────────── */
  {
    id: 'plot',
    index: 1,
    cluster: 'before',
    name: { en: 'Plot Vastu', te: 'స్థల వాస్తు' },
    definition: {
      en: 'Assessment of the land itself — before you pay an advance — to establish whether a Vastu-correct building can stand on it at all.',
      te: 'అడ్వాన్స్ చెల్లించక ముందే భూమిని పరిశీలించి, దానిపై వాస్తు ప్రకారం సరైన నిర్మాణం సాధ్యమేనా అని నిర్ధారించడం.',
    },
    examine: {
      en: [
        'True north fixed on site with an instrument and corrected for magnetic declination — not the north printed on the layout drawing, which is wrong more often than not',
        'Plot shape: square and rectangular against irregular; extensions (vriddhi) and cut corners, with the north-east extension and the south-west cut weighted heaviest',
        'Level and slope — fall toward north, east or north-east is favourable; the south-west must be the high point',
        'Road frontage, how many roads touch the plot, and whether a road strikes a corner (veedhi shoola) or the middle of a side',
        'Surroundings: adjacent structures and their heights, transformers, nallahs, water bodies, and what stands directly opposite the frontage',
      ],
      te: [
        'స్థలంలోనే పరికరంతో నిజ ఉత్తర దిక్కు నిర్ధారణ, అయస్కాంత విచలనం సవరించి — లేఅవుట్ ప్రణాళికలో ముద్రించిన ఉత్తరం చాలాసార్లు తప్పుగా ఉంటుంది',
        'స్థల ఆకారం: చతురస్రం, దీర్ఘచతురస్రం లేదా క్రమరహితం; పెరుగుదల (వృద్ధి), కోత ఉన్న మూలలు — ఈశాన్య పెరుగుదల, నైరుతి కోతకు అత్యధిక ప్రాధాన్యం',
        'మట్టం, వాలు — ఉత్తరం, తూర్పు లేదా ఈశాన్యం వైపు వాలు అనుకూలం; నైరుతి ఎత్తుగా ఉండాలి',
        'రహదారి ముఖం, స్థలాన్ని తాకే రహదారుల సంఖ్య, రహదారి మూలకు తగులుతుందా (వీధి శూల) లేదా మధ్యకు తగులుతుందా',
        'పరిసరాలు: పక్క నిర్మాణాలు, వాటి ఎత్తులు, ట్రాన్స్‌ఫార్మర్లు, కాలువలు, నీటి వనరులు, స్థలం ఎదురుగా ఉన్నవి',
      ],
    },
    who: {
      en: 'You are buying land, or holding a shortlist of two or three plots and deciding which to drop.',
      te: 'మీరు స్థలం కొనబోతున్నారు, లేదా రెండు మూడు స్థలాలలో ఏది వదిలేయాలో నిర్ణయించుకోవాలి.',
    },
    receive: {
      en: 'A written assessment of each plot with a comparative ranking, and a marked-up survey sketch showing true north, corner conditions and the buildable envelope we would recommend.',
      te: 'ప్రతి స్థలానికీ లిఖిత అంచనా, పోల్చిన క్రమం; నిజ ఉత్తరం, మూలల స్థితి, మేము సూచించే నిర్మాణ పరిధి గుర్తించిన సర్వే స్కెచ్.',
    },
    cta: {
      en: 'Send the survey sketch before you pay the advance.',
      te: 'అడ్వాన్స్ చెల్లించే ముందు సర్వే స్కెచ్ పంపండి.',
    },
    mode: 'site',
    timing: { en: '3–5 working days', te: '3–5 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 2 ─────────────────────────────────────────────────────────── */
  {
    id: 'house',
    index: 2,
    cluster: 'home',
    name: { en: 'House & Villa Vastu', te: 'ఇల్లు, విల్లా వాస్తు' },
    definition: {
      en: 'Vastu for an independent structure, where you still control orientation, layout, mass and elevation — everything is on the table.',
      te: 'దిక్కు, ప్రణాళిక, బరువు, ఎత్తు — అన్నీ మీ నియంత్రణలో ఉన్న స్వతంత్ర నిర్మాణానికి వాస్తు.',
    },
    examine: {
      en: [
        'The Vastu Purusha mandala laid over the plot as a padavinyasa grid, with the brahmasthan left open and carrying no load',
        'Where the built mass sits within the plot: setbacks weighted to the north and east, structural weight to the south and west',
        'Floor-by-floor allocation — kitchen in the agni zone, master bedroom in the south-west, pooja, and a staircase that turns clockwise',
        'Height distribution across the elevation: south-west highest, north-east lowest, with parapet, overhead tank and sump positions consistent with that',
        'Compound wall proportion, gate position within the 32 padas, and open space on each of the four sides',
      ],
      te: [
        'స్థలంపై వాస్తు పురుష మండలాన్ని పదవిన్యాస గ్రిడ్‌గా వేయడం; బ్రహ్మస్థానం ఖాళీగా, ఎలాంటి బరువు లేకుండా',
        'స్థలంలో నిర్మాణం ఎక్కడ ఉండాలి: ఉత్తరం, తూర్పు వైపు ఎక్కువ ఖాళీ; దక్షిణం, పడమర వైపు బరువు',
        'అంతస్తుల వారీ కేటాయింపు — వంటగది అగ్ని మూలలో, ప్రధాన శయన గది నైరుతిలో, పూజ గది, సవ్య దిశలో తిరిగే మెట్లు',
        'ఎత్తుల విభజన: నైరుతి ఎత్తు, ఈశాన్యం తక్కువ; పారాపెట్, పైన ట్యాంక్, సంప్ స్థానాలు దానికి అనుగుణంగా',
        'ప్రహరీ గోడ నిష్పత్తి, 32 పదాలలో గేటు స్థానం, నాలుగు వైపులా వదిలిన ఖాళీ స్థలం',
      ],
    },
    who: {
      en: 'You are building or buying an independent house or villa, and the plan can still be changed.',
      te: 'మీరు స్వతంత్ర ఇల్లు లేదా విల్లా కట్టబోతున్నారు లేదా కొనబోతున్నారు, ప్రణాళికలో మార్పు ఇంకా సాధ్యం.',
    },
    receive: {
      en: 'Marked floor plans for every level with zone allocations, a written note separating what must change from what can stay, and coordination notes your architect can work from directly.',
      te: 'ప్రతి అంతస్తుకూ మండల కేటాయింపులతో గుర్తించిన ప్రణాళికలు; ఏది తప్పక మార్చాలి, ఏది అలాగే ఉంచవచ్చు అనే లిఖిత వివరణ; మీ ఆర్కిటెక్ట్ నేరుగా వాడుకోగల సమన్వయ సూచనలు.',
    },
    cta: {
      en: 'Share the plan at sketch stage — corrections cost nothing on paper.',
      te: 'స్కెచ్ దశలోనే ప్రణాళిక పంపండి — కాగితంపై సవరణకు ఖర్చు లేదు.',
    },
    mode: 'sitedraw',
    timing: { en: '5–7 working days', te: '5–7 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 3 ─────────────────────────────────────────────────────────── */
  {
    id: 'flat',
    index: 3,
    cluster: 'home',
    name: { en: 'Flat & Apartment Vastu', te: 'ఫ్లాట్, అపార్ట్‌మెంట్ వాస్తు' },
    definition: {
      en: 'Vastu inside a unit you cannot structurally alter — choosing the right flat, then working properly within the walls, shafts and stacks the builder has already fixed.',
      te: 'నిర్మాణపరంగా మార్చలేని యూనిట్‌లో వాస్తు — సరైన ఫ్లాట్ ఎంపిక, ఆపై బిల్డర్ నిర్ణయించిన గోడలు, షాఫ్ట్‌ల లోపలే సరిగా సర్దుబాటు.',
    },
    examine: {
      en: [
        'The unit’s position within the tower and which direction the entrance door opens to as read from inside the flat, not from the corridor',
        'Whether the flat’s own north-east corner is intact, or occupied by a toilet, a shaft or the lift core — the single most common defect in apartment stock',
        'Fixed constraints that cannot be argued with: the plumbing stack decides where the kitchen and toilets are, and it does not move',
        'Balcony, cut-out and open-terrace orientation, and where the unit sits in the vertical stack of floors',
        'Correction available at interior level only — bed and head direction, wardrobe mass toward the south-west, cooking platform facing, and where you sit to work',
      ],
      te: [
        'టవర్‌లో యూనిట్ స్థానం, ఫ్లాట్ లోపలి నుండి చూసినప్పుడు ప్రవేశ ద్వారం ఏ దిక్కుకు తెరుచుకుంటుంది — కారిడార్ నుండి కాదు',
        'ఫ్లాట్ సొంత ఈశాన్య మూల చెక్కుచెదరకుండా ఉందా, లేక అక్కడ మరుగుదొడ్డి, షాఫ్ట్ లేదా లిఫ్ట్ ఉందా — అపార్ట్‌మెంట్లలో అత్యంత సాధారణ దోషం ఇదే',
        'మార్చలేని పరిమితులు: ప్లంబింగ్ స్టాక్ వంటగది, మరుగుదొడ్ల స్థానాన్ని నిర్ణయిస్తుంది; అది కదలదు',
        'బాల్కనీ, కట్‌అవుట్, ఓపెన్ టెర్రస్ దిక్కు; అంతస్తుల వరుసలో యూనిట్ ఎక్కడ ఉంది',
        'లోపలి స్థాయిలో మాత్రమే సాధ్యమైన సవరణలు — మంచం, తల దిక్కు; నైరుతిలో బీరువాల బరువు; వంట వేదిక ముఖం; మీరు కూర్చుని పని చేసే స్థానం',
      ],
    },
    who: {
      en: 'You are choosing between units in a project, or you have already taken possession of a flat and want to know what can still be done.',
      te: 'ఒక ప్రాజెక్ట్‌లో యూనిట్ల మధ్య ఎంపిక చేసుకుంటున్నారు, లేదా ఇప్పటికే ఫ్లాట్ తీసుకుని ఇంకా ఏమి చేయవచ్చో తెలుసుకోవాలి.',
    },
    receive: {
      en: 'A unit-by-unit comparison if you are still choosing, and an interior layout markup that works inside the developer’s structure rather than pretending it can be moved.',
      te: 'ఇంకా ఎంపికలో ఉంటే యూనిట్ల పోలిక; బిల్డర్ నిర్మాణాన్ని మార్చగలమని నటించకుండా, దాని లోపలే పని చేసే లోపలి ప్రణాళిక గుర్తింపు.',
    },
    cta: {
      en: 'Send the builder’s unit plan and we will tell you which flat to take.',
      te: 'బిల్డర్ ఇచ్చిన యూనిట్ ప్రణాళిక పంపండి — ఏ ఫ్లాట్ తీసుకోవాలో చెప్తాం.',
    },
    mode: 'drawing',
    timing: { en: '3–4 working days', te: '3–4 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 4 ─────────────────────────────────────────────────────────── */
  {
    id: 'entrance',
    index: 4,
    cluster: 'home',
    name: { en: 'Main Entrance Analysis', te: 'ముఖ ద్వార పరిశీలన' },
    definition: {
      en: 'Fixing the exact position of the main door — one decision that carries more weight than most of the rest of the plan put together.',
      te: 'ప్రధాన ద్వారం ఖచ్చితమైన స్థానం నిర్ణయం — మిగతా ప్రణాళిక అంతటికంటే ఎక్కువ ప్రభావం ఉన్న ఒకే నిర్ణయం.',
    },
    examine: {
      en: [
        'The 32 entrance padas around the perimeter, and precisely which pada the door occupies for that particular facing',
        'The door leaf itself: swinging inward and clockwise, threshold height, and whether it is the tallest and widest opening in the elevation',
        'What stands directly opposite — pole, transformer, tree, drain, or the corner of the building across the road',
        'Levels on approach: steps in odd numbers, plinth rise, and the door never sitting below road level',
        'Secondary and rear doors, and whether any of them align straight through the main door in a single line',
      ],
      te: [
        'చుట్టుకొలత చుట్టూ ఉన్న 32 ద్వార పదాలు; ఆ ముఖానికి ద్వారం ఏ పదంలో ఉంది అనే ఖచ్చితమైన నిర్ధారణ',
        'ద్వారం స్వరూపం: లోపలికి, సవ్య దిశలో తెరుచుకోవడం; గడప ఎత్తు; ఎత్తులో అదే అతి పెద్ద, అతి వెడల్పైన ద్వారమా',
        'ఎదురుగా ఏమి ఉంది — స్తంభం, ట్రాన్స్‌ఫార్మర్, చెట్టు, కాలువ, లేదా ఎదురు భవనం మూల',
        'ప్రవేశ మార్గంలో మట్టాలు: బేసి సంఖ్యలో మెట్లు, పునాది ఎత్తు; ద్వారం ఎప్పుడూ రహదారి మట్టం కంటే కిందకు రాకూడదు',
        'ఇతర, వెనుక ద్వారాలు; అవి ప్రధాన ద్వారంతో ఒకే సరళ రేఖలో ఉన్నాయా',
      ],
    },
    who: {
      en: 'You are fixing the door before construction, or diagnosing a house that has felt wrong from the entrance onward.',
      te: 'నిర్మాణానికి ముందు ద్వార స్థానం నిర్ణయించాలి, లేదా ప్రవేశం నుండే ఇల్లు సరిగా అనిపించకపోవడానికి కారణం తెలుసుకోవాలి.',
    },
    receive: {
      en: 'A dimensioned note giving the door’s exact position measured from a fixed corner reference, with the padas marked on both your plan and elevation.',
      te: 'నిర్దిష్ట మూల నుండి కొలిచిన ద్వారం ఖచ్చితమైన స్థానంతో కూడిన కొలతల పత్రం; ప్రణాళిక, ఎత్తు రెండింటిపైనా పదాలు గుర్తించి.',
    },
    cta: {
      en: 'If you correct only one thing, correct the entrance.',
      te: 'ఒకే ఒక్కటి సరిచేయాలంటే, ముందు ద్వారం సరిచేయండి.',
    },
    mode: 'drawing',
    timing: { en: '2–3 working days', te: '2–3 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 5 ─────────────────────────────────────────────────────────── */
  {
    id: 'zoning',
    index: 5,
    cluster: 'home',
    name: { en: 'Room Positioning & Zoning', te: 'గదుల స్థాన నిర్ణయం' },
    definition: {
      en: 'Assigning every room to the zone whose element supports what happens in it — across the whole plan, not one room at a time.',
      te: 'ప్రతి గదినీ, అందులో జరిగే పనికి తగిన తత్వం ఉన్న మండలానికి కేటాయించడం — ఒక్కో గది కాకుండా, మొత్తం ప్రణాళికకు.',
    },
    examine: {
      en: [
        'Kitchen in the agni zone with the cooking platform facing east, and the refrigerator and water storage kept out of the fire corner',
        'Master bedroom in the south-west, children toward the west and north-west, guests in the north-west — and the sleeping head direction for each',
        'Pooja room in the north-east, never sharing a wall with a toilet or a bedroom headboard; study in the west or north-east facing east or north',
        'Toilets, septic tank and heavy storage kept away from the north-east and off the brahmasthan; staircase in the south, west or south-west',
        'Beams running over sleeping and seating positions, and the number of openings on each wall',
      ],
      te: [
        'వంటగది అగ్ని మూలలో, వంట వేదిక తూర్పు ముఖంగా; రిఫ్రిజిరేటర్, నీటి నిల్వ అగ్ని మూల నుండి దూరంగా',
        'ప్రధాన శయన గది నైరుతిలో, పిల్లలవి పడమర–వాయవ్యంలో, అతిథులవి వాయవ్యంలో — ప్రతి గదికీ నిద్రించే తల దిక్కుతో సహా',
        'పూజ గది ఈశాన్యంలో; మరుగుదొడ్డి గోడకు గానీ, మంచం తలవైపు గోడకు గానీ ఆనుకుని ఉండకూడదు; చదువు గది పడమర లేదా ఈశాన్యంలో, తూర్పు–ఉత్తర ముఖంగా',
        'మరుగుదొడ్లు, సెప్టిక్ ట్యాంక్, బరువైన నిల్వ ఈశాన్యం, బ్రహ్మస్థానం నుండి దూరంగా; మెట్లు దక్షిణం, పడమర లేదా నైరుతిలో',
        'పడుకునే, కూర్చునే స్థానాల మీదుగా వెళ్లే దూలాలు; ప్రతి గోడకూ ఉన్న ద్వార–కిటికీల సంఖ్య',
      ],
    },
    who: {
      en: 'Your plan is drawn but the rooms are not finalised — or you are renovating internally without touching the structure.',
      te: 'ప్రణాళిక గీశారు కానీ గదులు ఖరారు కాలేదు — లేదా నిర్మాణాన్ని తాకకుండా లోపల మార్పులు చేస్తున్నారు.',
    },
    receive: {
      en: 'A zoned floor plan with every room’s assigned position and the head or seating direction inside it, plus stated alternates wherever the ideal position is not achievable.',
      te: 'ప్రతి గది స్థానం, అందులో తల లేదా కూర్చునే దిక్కుతో కూడిన మండల ప్రణాళిక; ఉత్తమ స్థానం సాధ్యం కాని చోట ప్రత్యామ్నాయాలు స్పష్టంగా.',
    },
    cta: {
      en: 'Send the plan before the walls go up.',
      te: 'గోడలు లేవక ముందే ప్రణాళిక పంపండి.',
    },
    mode: 'drawing',
    timing: { en: '3–5 working days', te: '3–5 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 6 ─────────────────────────────────────────────────────────── */
  {
    id: 'water',
    index: 6,
    cluster: 'home',
    name: { en: 'Water & Drainage Vastu', te: 'నీరు, మురుగు నీటి స్థానం' },
    definition: {
      en: 'Positioning every water element — source, storage and discharge — because water is among the few faults that becomes genuinely expensive to correct once built.',
      te: 'నీటి మూలం, నిల్వ, బహిర్గమనం — ప్రతి నీటి అంశ స్థాన నిర్ణయం; ఎందుకంటే నిర్మాణం పూర్తయ్యాక సవరించడానికి నిజంగా ఖరీదైన కొద్ది దోషాలలో నీరు ఒకటి.',
    },
    examine: {
      en: [
        'Underground sump, borewell and open well in the north-east quadrant, at the correct offset from the compound wall',
        'Overhead tank in the south-west or west — never above the north-east or the brahmasthan — and the load path it sits on',
        'Surface slope and rainwater discharge running to the north, east or north-east, and the exact point it leaves the compound',
        'Septic tank and soak pit position, their distance from the well and from the brahmasthan, and the routing of kitchen and toilet waste lines',
        'Swimming pool, sump overflow, fountain or any standing water body, and what sits directly below or above each',
      ],
      te: [
        'భూగర్భ సంప్, బోరు బావి, తెరిచిన బావి ఈశాన్య భాగంలో, ప్రహరీ గోడ నుండి సరైన దూరంలో',
        'పైన ఉండే ట్యాంక్ నైరుతి లేదా పడమరలో — ఈశాన్యం, బ్రహ్మస్థానం మీద ఎప్పుడూ కాదు — దాని బరువు ఎక్కడ పడుతుందో కూడా',
        'నేల వాలు, వర్షపు నీరు ఉత్తరం, తూర్పు లేదా ఈశాన్యం వైపు వెళ్లడం; ప్రహరీ దాటి బయటకు వెళ్లే ఖచ్చితమైన స్థానం',
        'సెప్టిక్ ట్యాంక్, ఇంకుడు గుంత స్థానం; బావి, బ్రహ్మస్థానం నుండి వాటి దూరం; వంటగది, మరుగుదొడ్డి వ్యర్థ నీటి మార్గాలు',
        'ఈత కొలను, సంప్ పొంగు, ఫౌంటెన్ లేదా నిలిచిన నీటి వనరు; వాటి కింద, పైన ఏమి ఉంది',
      ],
    },
    who: {
      en: 'You are at plumbing or site-development stage — or you have recurring seepage, borewell failure or drainage trouble in a built property.',
      te: 'ప్రస్తుతం ప్లంబింగ్ లేదా స్థల అభివృద్ధి దశలో ఉన్నారు — లేదా నిర్మించిన ఇంట్లో పదే పదే తడి, బోరు వైఫల్యం, మురుగు సమస్యలు వస్తున్నాయి.',
    },
    receive: {
      en: 'A site services markup showing sump, overhead tank, septic, drain runs and the discharge point, all dimensioned so your contractor can set them out directly.',
      te: 'సంప్, పైన ట్యాంక్, సెప్టిక్, మురుగు మార్గాలు, బహిర్గమన స్థానం — అన్నీ కొలతలతో గుర్తించిన స్థల సేవల ప్రణాళిక; మీ కాంట్రాక్టర్ నేరుగా అమలు చేయగలిగేలా.',
    },
    cta: {
      en: 'Fix water positions before excavation, not after.',
      te: 'తవ్వకం తర్వాత కాదు — ముందే నీటి స్థానాలు నిర్ణయించండి.',
    },
    mode: 'sitedraw',
    timing: { en: '3–4 working days', te: '3–4 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 7 ─────────────────────────────────────────────────────────── */
  {
    id: 'ayadi',
    index: 7,
    cluster: 'before',
    name: { en: 'Ayadi Ganitham', te: 'ఆయాది గణితం' },
    definition: {
      en: 'The proportional system that tests the building’s dimensions themselves — a separate discipline from directional Vastu, and the reason two directionally correct plans can perform differently.',
      te: 'భవన కొలతలనే పరీక్షించే నిష్పత్తుల విధానం — దిక్కుల వాస్తు కంటే వేరైన శాఖ; దిక్కుల ప్రకారం సరైన రెండు ప్రణాళికలు వేర్వేరు ఫలితాలు ఇవ్వడానికి కారణం ఇదే.',
    },
    examine: {
      en: [
        'Perimeter and area of the proposed building reduced through the ayadi shadvarga — aaya, vyaya, yoni, nakshatra, vaara and thithi',
        'Whether aaya exceeds vyaya in the resulting proportion, so that the dimensions themselves favour income over outgoing',
        'Yoni derived from the perimeter, matched against the direction the building actually faces',
        'Nakshatra and rashi from the calculation correlated with the birth star of the owner it is being built for',
        'The smallest adjustment in length or breadth — often a matter of inches — that brings all six values into agreement without redesigning the plan',
      ],
      te: [
        'ప్రతిపాదిత భవనం చుట్టుకొలత, వైశాల్యాన్ని ఆయాది షడ్వర్గ ద్వారా లెక్కించడం — ఆయ, వ్యయ, యోని, నక్షత్ర, వార, తిథి',
        'వచ్చిన నిష్పత్తిలో ఆయ వ్యయాన్ని మించి ఉందా — అంటే కొలతలే ఆదాయానికి అనుకూలంగా ఉన్నాయా',
        'చుట్టుకొలత నుండి వచ్చిన యోని, భవనం నిజంగా చూసే ముఖ దిక్కుతో సరిపోలుతుందా',
        'లెక్క నుండి వచ్చిన నక్షత్రం, రాశి — భవనం ఎవరి కోసమో వారి జన్మ నక్షత్రంతో సరిపోలిక',
        'ప్రణాళికను తిరిగి గీయకుండా ఆరు విలువలనూ సరిచేసే అతి చిన్న పొడవు–వెడల్పు మార్పు — తరచుగా కొన్ని అంగుళాలే',
      ],
    },
    who: {
      en: 'You are finalising building dimensions. This is checked before the foundation is set out — afterwards, the only correction is demolition.',
      te: 'భవన కొలతలు ఖరారు చేస్తున్నారు. పునాది వేయక ముందే దీన్ని పరిశీలించాలి — ఆ తర్వాత సవరణ అంటే కూల్చివేత మాత్రమే.',
    },
    receive: {
      en: 'The full ayadi calculation sheet for your dimensions, showing each of the six values, and the corrected length and breadth to adopt.',
      te: 'మీ కొలతలకు పూర్తి ఆయాది గణన పత్రం — ఆరు విలువలూ చూపిస్తూ, స్వీకరించవలసిన సరిచేసిన పొడవు, వెడల్పుతో.',
    },
    cta: {
      en: 'Send your proposed dimensions; we will return the adjusted figures.',
      te: 'ప్రతిపాదిత కొలతలు పంపండి; సరిచేసిన అంకెలు తిరిగి ఇస్తాం.',
    },
    mode: 'remote',
    timing: { en: '2–3 working days', te: '2–3 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 8 ─────────────────────────────────────────────────────────── */
  {
    id: 'shop',
    index: 8,
    cluster: 'work',
    name: { en: 'Shop & Office Vastu', te: 'దుకాణం, కార్యాలయ వాస్తు' },
    definition: {
      en: 'For a single commercial unit — a shop, clinic, studio or leased office floor — where you control the interior fit-out but not the building around it.',
      te: 'ఒకే వాణిజ్య యూనిట్ కోసం — దుకాణం, క్లినిక్, స్టూడియో లేదా అద్దె కార్యాలయం — లోపలి అమరిక మీ చేతిలో, భవనం కాదు.',
    },
    examine: {
      en: [
        'Entry position relative to the unit’s own frontage, and the direction customers physically approach from on the street',
        'Cash counter and the owner’s seat: facing north or east, with a solid wall behind and no opening at the back',
        'Stock logic — slow-moving and heavy stock to the south-west, fast-moving to the north-west, the sales floor kept open toward the north-east',
        'Safe or locker placement and the direction its door opens toward when unlocked',
        'Shutter proportion, signage position, and the step level between the street and the shop floor',
      ],
      te: [
        'యూనిట్ సొంత ముఖద్వారానికి సంబంధించి ప్రవేశ స్థానం; వీధిలో ఖాతాదారులు ఏ దిక్కు నుండి వస్తారు',
        'నగదు కౌంటర్, యజమాని కుర్చీ: ఉత్తరం లేదా తూర్పు ముఖంగా, వెనుక దృఢమైన గోడ, వెనుక ఎలాంటి ద్వారం లేకుండా',
        'సరుకు అమరిక — నెమ్మదిగా అమ్ముడయ్యే, బరువైన సరుకు నైరుతిలో; వేగంగా కదిలేది వాయవ్యంలో; అమ్మకపు స్థలం ఈశాన్యం వైపు ఖాళీగా',
        'సేఫ్ లేదా లాకర్ స్థానం; తెరిచినప్పుడు దాని తలుపు ఏ దిక్కుకు తెరుచుకుంటుంది',
        'షట్టర్ నిష్పత్తి, బోర్డు స్థానం, వీధికి–దుకాణానికి మధ్య మెట్టు మట్టం',
      ],
    },
    who: {
      en: 'You are taking a shop or a small office on lease, or fitting out a single commercial unit before opening.',
      te: 'దుకాణం లేదా చిన్న కార్యాలయం అద్దెకు తీసుకుంటున్నారు, లేదా ప్రారంభానికి ముందు లోపలి అమరిక చేస్తున్నారు.',
    },
    receive: {
      en: 'An interior layout markup fixing counter, seating and storage positions, with the order in which to implement them if the fit-out is phased.',
      te: 'కౌంటర్, కూర్చునే స్థానాలు, నిల్వ స్థానాలను నిర్ణయించే లోపలి ప్రణాళిక; దశలవారీగా చేస్తే ఏ క్రమంలో చేయాలో సహా.',
    },
    cta: {
      en: 'Send the unit plan before the interior contract is awarded.',
      te: 'ఇంటీరియర్ పని అప్పగించే ముందు యూనిట్ ప్రణాళిక పంపండి.',
    },
    mode: 'sitedraw',
    timing: { en: '3–4 working days', te: '3–4 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 9 ─────────────────────────────────────────────────────────── */
  {
    id: 'commercial',
    index: 9,
    cluster: 'work',
    name: { en: 'Business & Commercial Vastu', te: 'వాణిజ్య వాస్తు' },
    definition: {
      en: 'For larger establishments — showrooms, corporate floor plates, hotels, hospitals, malls — where the question is departmental zoning across many people, not the placement of one counter.',
      te: 'పెద్ద సంస్థల కోసం — షోరూమ్‌లు, కార్పొరేట్ అంతస్తులు, హోటళ్లు, ఆసుపత్రులు, మాల్స్ — ఇక్కడ ప్రశ్న ఒక కౌంటర్ స్థానం కాదు, అనేక మంది పనిచేసే విభాగాల మండల విభజన.',
    },
    examine: {
      en: [
        'Department zoning across the floor plate: accounts and finance to the north, marketing and dispatch north-west, management south-west, design and research west',
        'The visitor path — reception, waiting, and how a client physically travels from the entrance to the person who signs',
        'Cabin allocation and seating direction for promoters and senior staff, and where the conference room sits relative to them',
        'Services in the fire quadrant: server room, electrical panel, kitchen and pantry to the south-east; records and dead storage to the south-west',
        'Multi-floor logic — lift and staircase cores, basement usage, parking, and which department belongs on which level',
      ],
      te: [
        'అంతస్తు అంతటా విభాగాల విభజన: ఖాతాలు, ఆర్థిక విభాగం ఉత్తరంలో; మార్కెటింగ్, డిస్పాచ్ వాయవ్యంలో; యాజమాన్యం నైరుతిలో; డిజైన్, పరిశోధన పడమరలో',
        'సందర్శకుల మార్గం — రిసెప్షన్, వేచి ఉండే స్థలం; ప్రవేశం నుండి సంతకం చేసే వ్యక్తి వరకు ఖాతాదారు ఎలా వెళ్తారు',
        'ప్రమోటర్లు, సీనియర్ సిబ్బందికి క్యాబిన్ కేటాయింపు, కూర్చునే దిక్కు; వారికి సంబంధించి సమావేశ మందిరం స్థానం',
        'అగ్ని మూలలో సేవలు: సర్వర్ గది, విద్యుత్ ప్యానెల్, వంటగది ఆగ్నేయంలో; రికార్డులు, పాత నిల్వ నైరుతిలో',
        'బహుళ అంతస్తుల అమరిక — లిఫ్ట్, మెట్ల స్థానం, బేస్‌మెంట్ వినియోగం, పార్కింగ్; ఏ విభాగం ఏ అంతస్తులో ఉండాలి',
      ],
    },
    who: {
      en: 'You are planning a floor plate or a new commercial building — or the business is underperforming despite sound fundamentals and you want the premises ruled in or out.',
      te: 'కొత్త అంతస్తు లేదా వాణిజ్య భవనం ప్రణాళిక చేస్తున్నారు — లేదా మౌలికంగా అంతా సవ్యంగా ఉన్నా వ్యాపారం సాగడం లేదు, భవనం కారణమా కాదా అని తేల్చుకోవాలి.',
    },
    receive: {
      en: 'Department-wise zoning notes, seating guidance, and, where appropriate, phased suggestions that take your occupancy into account.',
      te: 'విభాగాల వారీ మండల సూచనలు, కూర్చునే విధానంపై మార్గదర్శనం; అవసరమైన చోట మీ కార్యకలాపాలను దృష్టిలో ఉంచుకుని దశలవారీ సూచనలు.',
    },
    cta: {
      en: 'Commercial work is scoped per site — request a scoping call.',
      te: 'వాణిజ్య పని ప్రతి స్థలానికీ విడిగా నిర్ణయిస్తాం — పరిధి నిర్ణయ సమావేశం కోరండి.',
    },
    mode: 'site',
    timing: { en: '10–14 working days', te: '10–14 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 10 ────────────────────────────────────────────────────────── */
  {
    id: 'industrial',
    index: 10,
    cluster: 'work',
    name: { en: 'Industrial Vastu', te: 'పారిశ్రామిక వాస్తు' },
    definition: {
      en: 'Plant-level Vastu for manufacturing, where the real constraints are process flow, heat, machine load and worker safety — not interiors.',
      te: 'తయారీ రంగానికి ప్లాంట్ స్థాయి వాస్తు — ఇక్కడ నిజమైన పరిమితులు ఉత్పత్తి ప్రవాహం, వేడి, యంత్రాల బరువు, కార్మికుల భద్రత; అలంకరణ కాదు.',
    },
    examine: {
      en: [
        'Material flow direction: raw material intake to the north-west, work-in-progress through the plant, finished goods held to the south and west',
        'Heat and fire in the south-east quadrant — furnace, boiler, heat treatment, DG set and the electrical substation',
        'Machine mass concentrated toward the south and west, with the north-east kept light, low and physically open',
        'Effluent treatment, scrap yard and waste discharge placed away from the north-east, and where the discharge finally leaves the site',
        'Administrative block, security cabin, weighbridge and worker amenities positioned relative to the production shed',
      ],
      te: [
        'సరుకు ప్రవాహ దిశ: ముడి సరుకు వాయవ్యంలోకి, ఉత్పత్తి ప్లాంట్ గుండా, తయారైన వస్తువులు దక్షిణం–పడమరలో నిల్వ',
        'ఆగ్నేయ భాగంలో వేడి, అగ్ని — కొలిమి, బాయిలర్, హీట్ ట్రీట్‌మెంట్, డీజీ సెట్, విద్యుత్ ఉపకేంద్రం',
        'యంత్రాల బరువు దక్షిణం, పడమర వైపు; ఈశాన్యం తేలికగా, తక్కువ ఎత్తులో, ఖాళీగా',
        'వ్యర్థ జల శుద్ధి, స్క్రాప్ యార్డ్, వ్యర్థాల బహిర్గమనం ఈశాన్యానికి దూరంగా; అవి చివరకు స్థలం నుండి ఎక్కడ బయటకు వెళ్తాయి',
        'ఉత్పత్తి షెడ్‌కు సంబంధించి పరిపాలనా భవనం, భద్రతా గది, వేబ్రిడ్జ్, కార్మికుల సౌకర్యాల స్థానం',
      ],
    },
    who: {
      en: 'You are planning a new unit, or running an existing plant with persistent breakdowns, labour turnover or cashflow problems that have no operational explanation.',
      te: 'కొత్త యూనిట్ ప్రణాళిక చేస్తున్నారు, లేదా ఉన్న ప్లాంట్‌లో నిర్వహణపరమైన కారణం కనిపించకుండా పదే పదే యంత్ర లోపాలు, కార్మికుల మార్పు, నగదు ఇబ్బందులు ఉన్నాయి.',
    },
    receive: {
      en: 'Vastu observations on the plant layout, read against your process drawing, with suggested machinery and utility positions and, where appropriate, phasing discussed around your shutdown schedule.',
      te: 'మీ ప్రాసెస్ డ్రాయింగ్‌తో పోల్చి ప్లాంట్ లేఅవుట్‌పై వాస్తు పరిశీలనలు; యంత్రాలు, సదుపాయాల స్థానాలపై సూచనలు; అవసరమైన చోట మీ షట్‌డౌన్ షెడ్యూల్‌ను దృష్టిలో ఉంచుకుని దశలవారీ చర్చ.',
    },
    cta: {
      en: 'We phase plant work around your shutdowns. Ask for a site scope.',
      te: 'ప్లాంట్ పనిని మీ షట్‌డౌన్‌ల చుట్టూ దశలవారీగా చేస్తాం. స్థల పరిధి అడగండి.',
    },
    mode: 'site',
    timing: { en: '2–3 weeks', te: '2–3 వారాలు' },
    fee: '₹ —',
  },

  /* ── 11 ────────────────────────────────────────────────────────── */
  {
    id: 'education',
    index: 11,
    cluster: 'work',
    name: { en: 'Educational Institution Vastu', te: 'విద్యా సంస్థల వాస్తు' },
    definition: {
      en: 'For schools, colleges and coaching institutions, where the objective is concentration, discipline and administrative order rather than commerce.',
      te: 'పాఠశాలలు, కళాశాలలు, శిక్షణా సంస్థల కోసం — ఇక్కడ లక్ష్యం వ్యాపారం కాదు; ఏకాగ్రత, క్రమశిక్షణ, పరిపాలనా వ్యవస్థ.',
    },
    examine: {
      en: [
        'Classroom orientation and seating so that pupils face north or east, and which wall the board is fixed to',
        'Library toward the north-east or north; laboratories with chemical and flame work held in the south-east; computer labs and their electrical load',
        'Principal’s room and the administrative block in the south-west, with the staff room and accounts placed separately from them',
        'Assembly ground, playground and open space toward the north and east; toilet blocks kept well clear of the north-east',
        'Hostel wings, dining hall and kitchen, plus the drop-off point and the safety circulation route at opening and closing hours',
      ],
      te: [
        'తరగతి గదుల దిక్కు, కూర్చునే విధానం — విద్యార్థులు ఉత్తరం లేదా తూర్పు ముఖంగా; బోర్డు ఏ గోడకు ఉండాలి',
        'గ్రంథాలయం ఈశాన్యం లేదా ఉత్తరంలో; రసాయన, మంట పనులు ఉన్న ప్రయోగశాలలు ఆగ్నేయంలో; కంప్యూటర్ ల్యాబ్‌లు, వాటి విద్యుత్ భారం',
        'ప్రధానోపాధ్యాయుని గది, పరిపాలనా విభాగం నైరుతిలో; ఉపాధ్యాయుల గది, ఖాతాల విభాగం వాటికి వేరుగా',
        'ప్రార్థనా మైదానం, ఆట స్థలం, ఖాళీ స్థలం ఉత్తరం–తూర్పు వైపు; మరుగుదొడ్ల భవనం ఈశాన్యానికి బాగా దూరంగా',
        'వసతి గృహాలు, భోజనశాల, వంటగది; ఉదయం–సాయంత్రం వేళల్లో దింపే స్థలం, భద్రతా రాకపోకల మార్గం',
      ],
    },
    who: {
      en: 'A management building a new campus, or an institution facing attendance, results or staff-retention problems it cannot otherwise account for.',
      te: 'కొత్త విద్యా సముదాయం నిర్మిస్తున్న యాజమాన్యం, లేదా హాజరు, ఫలితాలు, సిబ్బంది నిలకడలో కారణం తెలియని ఇబ్బందులు ఎదుర్కొంటున్న సంస్థ.',
    },
    receive: {
      en: 'A block-level campus zoning report, classroom seating-direction guidance, and, where appropriate, phasing suggested around the academic calendar.',
      te: 'భవనాల వారీ సముదాయ మండల నివేదిక, తరగతి గదుల కూర్చునే దిక్కులపై మార్గదర్శనం; అవసరమైన చోట విద్యా క్యాలెండర్‌ను దృష్టిలో ఉంచుకుని దశలవారీ సూచనలు.',
    },
    cta: {
      en: 'Campus work belongs between sessions. Start with a scoping visit.',
      te: 'సముదాయ పని విద్యా సంవత్సరాల మధ్యలోనే చేయాలి. పరిధి నిర్ణయ సందర్శనతో ప్రారంభించండి.',
    },
    mode: 'site',
    timing: { en: '2–3 weeks', te: '2–3 వారాలు' },
    fee: '₹ —',
  },

  /* ── 12 ────────────────────────────────────────────────────────── */
  {
    id: 'dosha',
    index: 12,
    cluster: 'built',
    name: { en: 'Vastu Dosha Identification', te: 'వాస్తు దోష నిర్ధారణ' },
    definition: {
      en: 'The diagnostic step alone — establishing exactly which faults exist and how serious each one is. No remedy is proposed and nothing is sold at this stage.',
      te: 'కేవలం నిర్ధారణ దశ — ఏ దోషాలు ఉన్నాయి, ఏది ఎంత తీవ్రమైనది అని ఖచ్చితంగా తేల్చడం. ఈ దశలో ఎలాంటి పరిహారం సూచించం, ఏదీ అమ్మం.',
    },
    examine: {
      en: [
        'True north established on site with an instrument, and the mandala grid laid over a measured plan rather than the drawing you were given',
        'Each of the eight directions and the brahmasthan checked against whatever physically occupies it today',
        'Faults classified by type — structural (position, load, opening), elemental (fire or water in the wrong quadrant), and external (approach, obstruction, neighbouring construction)',
        'Each fault graded for severity, separating what is actively affecting the household from what is textbook-imperfect but inert',
        'Correlation against the specific complaint you arrived with — health, finances, disputes, sleep — rather than a general list',
      ],
      te: [
        'స్థలంలోనే పరికరంతో నిజ ఉత్తరం నిర్ధారణ; మీకు ఇచ్చిన ప్రణాళిక కాకుండా, కొలిచిన ప్రణాళికపై మండల గ్రిడ్',
        'ఎనిమిది దిక్కులు, బ్రహ్మస్థానం — ప్రస్తుతం వాటిలో నిజంగా ఏమి ఉందో పరిశీలన',
        'దోషాల వర్గీకరణ — నిర్మాణపరమైనవి (స్థానం, బరువు, ద్వారాలు), తత్వపరమైనవి (తప్పు మూలలో అగ్ని లేదా నీరు), బాహ్యమైనవి (ప్రవేశ మార్గం, అడ్డంకులు, పక్క నిర్మాణాలు)',
        'ప్రతి దోషానికీ తీవ్రత శ్రేణి — నిజంగా ఇప్పుడు ప్రభావం చూపుతున్నవి, గ్రంథ ప్రకారం లోపమే అయినా నిష్క్రియంగా ఉన్నవి వేరుచేసి',
        'మీరు వచ్చిన నిర్దిష్ట సమస్యతో పోలిక — ఆరోగ్యం, ఆర్థికం, వివాదాలు, నిద్ర — సాధారణ జాబితా కాకుండా',
      ],
    },
    who: {
      en: 'You suspect something is wrong and have been given contradictory opinions, or you want an unbiased second reading before spending money on remedies.',
      te: 'ఏదో సరిగా లేదని అనుమానం, పైగా వేర్వేరు అభిప్రాయాలు వచ్చాయి — లేదా పరిహారాలకు ఖర్చు పెట్టే ముందు నిష్పక్షపాత రెండో అభిప్రాయం కావాలి.',
    },
    receive: {
      en: 'A written dosha register: every fault located, classified and graded — with nothing prescribed, so you are free to take it to anyone you choose.',
      te: 'లిఖిత దోష నివేదిక: ప్రతి దోషం స్థానం, వర్గం, తీవ్రతతో — ఎలాంటి పరిహారం సూచించకుండా; మీరు దాన్ని ఎవరి దగ్గరకైనా తీసుకెళ్లవచ్చు.',
    },
    cta: {
      en: 'Get the diagnosis first. Remedies can wait.',
      te: 'ముందు నిర్ధారణ చేయించుకోండి. పరిహారాలు ఆగవచ్చు.',
    },
    mode: 'site',
    timing: { en: '4–6 working days', te: '4–6 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 13 ────────────────────────────────────────────────────────── */
  {
    id: 'remedies',
    index: 13,
    cluster: 'built',
    name: { en: 'Vastu Remedies', te: 'వాస్తు పరిహారాలు' },
    definition: {
      en: 'The corrective step — taking an identified fault list, ours or someone else’s, and producing the cheapest sufficient fix for each one.',
      te: 'సవరణ దశ — మేము ఇచ్చినదైనా, వేరొకరు ఇచ్చినదైనా, నిర్ధారించిన దోష జాబితా తీసుకుని, ప్రతి దానికీ సరిపడే అతి తక్కువ ఖర్చు పరిష్కారం ఇవ్వడం.',
    },
    examine: {
      en: [
        'Whether the fault clears through use and orientation alone — what the room is used for, and where you sit, sleep and cook in it',
        'Material and placement corrections next: a partition, closing or opening an aperture, shifting a water or fire point, redistributing weight',
        'Structural correction only where the defect is severe and nothing lighter will address it — costed and drawn before it is recommended',
        'Compensatory measures where correction is genuinely impossible: proportion, light, colour, and metal or element placement',
        'Sequence and expected effect for each remedy, so you can stop at any point in the list and know exactly what you have gained',
      ],
      te: [
        'వినియోగం, దిక్కు మార్పుతోనే దోషం తగ్గుతుందా — ఆ గదిని దేనికి వాడుతున్నారు, అందులో ఎక్కడ కూర్చుంటారు, పడుకుంటారు, వండుతారు',
        'తర్వాత వస్తు, స్థాన మార్పులు: విభజన గోడ, ఒక ద్వారం మూయడం లేదా తెరవడం, నీరు లేదా అగ్ని స్థానం మార్చడం, బరువు పునఃపంపిణీ',
        'నిర్మాణ మార్పు కేవలం దోషం తీవ్రంగా ఉండి, తేలికైన మార్గం ఏదీ పని చేయని చోట మాత్రమే — సూచించే ముందే ఖర్చు, ప్రణాళికతో సహా',
        'సవరణ నిజంగా సాధ్యం కాని చోట పరిహార చర్యలు: నిష్పత్తి, వెలుతురు, రంగు, లోహ లేదా తత్వ స్థాపన',
        'ప్రతి పరిహారానికీ క్రమం, ఆశించిన ఫలితం — జాబితాలో ఎక్కడైనా ఆపేసినా, అప్పటివరకు ఏమి సాధించారో స్పష్టంగా తెలిసేలా',
      ],
    },
    who: {
      en: 'You already have a fault list and want the least destructive way to act on it — particularly if you have been told to demolish something.',
      te: 'మీ దగ్గర ఇప్పటికే దోష జాబితా ఉంది, దాన్ని అతి తక్కువ నష్టంతో పరిష్కరించే మార్గం కావాలి — ముఖ్యంగా ఏదో కూల్చమని చెప్పి ఉంటే.',
    },
    receive: {
      en: 'A ranked remedy plan: each fault, the proposed correction, an approximate cost band and the expected effect. Demolition appears last in the list, if at all.',
      te: 'క్రమబద్ధ పరిహార ప్రణాళిక: ప్రతి దోషం, సూచించిన సవరణ, సుమారు ఖర్చు శ్రేణి, ఆశించిన ఫలితం. కూల్చివేత జాబితాలో చివర — అసలు ఉంటే.',
    },
    cta: {
      en: 'Bring us an existing report. We will tell you what actually needs doing.',
      te: 'ఇప్పటికే ఉన్న నివేదిక తీసుకురండి. నిజంగా ఏమి చేయాలో చెప్తాం.',
    },
    mode: 'sitedraw',
    timing: { en: '5–7 working days', te: '5–7 పని దినాలు' },
    fee: '₹ —',
  },

  /* ── 14 ────────────────────────────────────────────────────────── */
  {
    id: 'newbuild',
    index: 14,
    cluster: 'before',
    name: { en: 'New Construction Planning', te: 'నూతన నిర్మాణ ప్రణాళిక' },
    definition: {
      en: 'Working alongside your architect from first sketch to handover, on land that is already confirmed. This is the design and build stage — Plot Vastu is the stage before it.',
      te: 'ఇప్పటికే ఖరారైన స్థలంలో, మొదటి స్కెచ్ నుండి గృహ ప్రవేశం వరకు మీ ఆర్కిటెక్ట్‌తో కలిసి పని. ఇది రూపకల్పన, నిర్మాణ దశ — స్థల వాస్తు దీనికి ముందటి దశ.',
    },
    examine: {
      en: [
        'The building envelope inside the plot: setbacks, and how mass is distributed between the north-east and the south-west',
        'The plan at every revision — entrance pada, room zoning, staircase, kitchen and toilet positions re-checked each time the architect redraws',
        'Dimensions cleared through Ayadi Ganitham before the foundation is set out, not after',
        'Muhurtham for each construction milestone: bhumi puja, foundation, pillar erection, roof casting and griha pravesh',
        'Site verification at three stages — setting out, plinth, and slab level — checked against the approved Vastu plan rather than assumed',
      ],
      te: [
        'స్థలంలో నిర్మాణ పరిధి: వదిలే ఖాళీ, ఈశాన్యం–నైరుతి మధ్య బరువు విభజన',
        'ప్రతి సవరణలోనూ ప్రణాళిక — ఆర్కిటెక్ట్ మళ్లీ గీసిన ప్రతిసారీ ద్వార పదం, గదుల మండలం, మెట్లు, వంటగది, మరుగుదొడ్ల స్థానాలు తిరిగి పరిశీలన',
        'పునాది వేయక ముందే ఆయాది గణితం ద్వారా కొలతల నిర్ధారణ — తర్వాత కాదు',
        'ప్రతి నిర్మాణ దశకూ ముహూర్తం: భూమి పూజ, పునాది, స్తంభ స్థాపన, పైకప్పు, గృహ ప్రవేశం',
        'మూడు దశల్లో స్థల పరిశీలన — గుర్తు వేయడం, పునాది మట్టం, స్లాబ్ మట్టం — ఊహించకుండా ఆమోదిత వాస్తు ప్రణాళికతో సరిపోల్చి',
      ],
    },
    who: {
      en: 'The land is bought, the architect is appointed, and you want Vastu designed in rather than corrected afterwards.',
      te: 'స్థలం కొన్నారు, ఆర్కిటెక్ట్‌ను నియమించారు — వాస్తును తర్వాత సరిచేయడం కాకుండా, మొదటి నుండే ప్రణాళికలో కలపాలనుకుంటున్నారు.',
    },
    receive: {
      en: 'Vastu-cleared drawings at each revision, ayadi-corrected dimensions, a muhurtham schedule for every milestone, and three site verification visits during construction.',
      te: 'ప్రతి సవరణలోనూ వాస్తు ఆమోదిత ప్రణాళికలు, ఆయాది ప్రకారం సరిచేసిన కొలతలు, ప్రతి దశకూ ముహూర్త పట్టిక, నిర్మాణ సమయంలో మూడు స్థల పరిశీలన సందర్శనలు.',
    },
    cta: {
      en: 'Bring us in with your architect, not after them.',
      te: 'ఆర్కిటెక్ట్ తర్వాత కాదు — వారితో పాటే మమ్మల్ని కలపండి.',
    },
    mode: 'sitedraw',
    timing: { en: 'Runs with the build', te: 'నిర్మాణంతో పాటు కొనసాగుతుంది' },
    fee: '₹ —',
  },

  /* ── 15 ────────────────────────────────────────────────────────── */
  {
    id: 'existing',
    index: 15,
    cluster: 'built',
    name: { en: 'Existing Building Vastu Analysis', te: 'ప్రస్తుత భవన విశ్లేషణ' },
    definition: {
      en: 'The complete audit of a property already built and occupied. Dosha identification and the remedy plan are both included — this is the single engagement, not three bought separately.',
      te: 'ఇప్పటికే నిర్మించి, నివాసంలో ఉన్న భవనానికి సమగ్ర తనిఖీ. దోష నిర్ధారణ, పరిహార ప్రణాళిక రెండూ ఇందులోనే ఉంటాయి — విడిగా మూడు కాదు, ఇది ఒకే సేవ.',
    },
    examine: {
      en: [
        'A full measured survey of the structure as it actually stands, with instrument-verified north — the drawings you hold are frequently inaccurate',
        'Complete dosha identification across every zone, exactly as in that service, included here rather than billed again',
        'A ranked remedy plan for everything found, again included — you are not charged twice for the same work',
        'Occupancy correlation: who sleeps and works where, and how those positions map against the chart of the head of the household',
        'What has changed since you moved in — neighbouring construction, road widening, a new transformer, a felled tree',
      ],
      te: [
        'భవనం ప్రస్తుతం ఉన్న స్థితిలో పూర్తి కొలతల సర్వే, పరికరంతో ధ్రువీకరించిన ఉత్తరంతో — మీ దగ్గరున్న ప్రణాళికలు తరచుగా తప్పుగా ఉంటాయి',
        'ప్రతి మండలంలోనూ పూర్తి దోష నిర్ధారణ — ఆ సేవలో ఎలా ఉంటుందో అలాగే, ఇక్కడ అదనపు రుసుము లేకుండా',
        'కనుగొన్న ప్రతి దానికీ క్రమబద్ధ పరిహార ప్రణాళిక — ఇది కూడా ఇందులోనే; ఒకే పనికి రెండుసార్లు రుసుము ఉండదు',
        'నివాస పరిశీలన: ఎవరు ఎక్కడ పడుకుంటారు, పని చేస్తారు; ఆ స్థానాలు గృహ యజమాని జాతకంతో ఎలా సరిపోతున్నాయి',
        'మీరు వచ్చిన తర్వాత మారినవి — పక్కన కొత్త నిర్మాణం, రహదారి వెడల్పు, కొత్త ట్రాన్స్‌ఫార్మర్, తొలగించిన చెట్టు',
      ],
    },
    who: {
      en: 'You already live or work in the property and want one complete opinion, rather than piecemeal advice collected over years.',
      te: 'మీరు ఇప్పటికే ఆ భవనంలో నివసిస్తున్నారు లేదా పని చేస్తున్నారు; ఏళ్ల తరబడి ముక్కలుగా వచ్చిన సలహాలు కాకుండా ఒకే సమగ్ర అభిప్రాయం కావాలి.',
    },
    receive: {
      en: 'A full report — measured drawings, the dosha register and ranked remedies with indicative cost bands — with a review after implementation by arrangement.',
      te: 'పూర్తి నివేదిక — కొలతల ప్రణాళికలు, దోష నివేదిక, సూచనాత్మక ఖర్చు శ్రేణులతో క్రమబద్ధ పరిహారాలు — అమలు తర్వాత ముందస్తు ఏర్పాటుతో ఒక సమీక్ష.',
    },
    cta: {
      en: 'One audit, one report, one opinion. Book a site visit.',
      te: 'ఒకే తనిఖీ, ఒకే నివేదిక, ఒకే అభిప్రాయం. స్థల సందర్శన నమోదు చేయండి.',
    },
    mode: 'site',
    timing: { en: '7–10 working days', te: '7–10 పని దినాలు' },
    fee: '₹ —',
  },
];

/* ── Bundles ── */

export const bundles: Vertical['bundles'] = [
  {
    id: 'newbuild',
    name: { en: 'New Construction', te: 'నూతన నిర్మాణం' },
    includes: ['plot', 'ayadi', 'newbuild'],
    value: {
      en: 'Land assessed, dimensions cleared and the building planned as one continuous engagement — the only sequence in which nothing has to be corrected later.',
      te: 'స్థల పరిశీలన, కొలతల నిర్ధారణ, భవన ప్రణాళిక — అన్నీ ఒకే నిరంతర సేవగా. తర్వాత ఏదీ సవరించాల్సిన అవసరం రాని ఏకైక క్రమం ఇదే.',
    },
  },
  {
    id: 'occupied',
    name: { en: 'Occupied Property Correction', te: 'నివాస భవన సవరణ' },
    includes: ['existing', 'water', 'entrance'],
    value: {
      en: 'The full audit, plus the two systems most often at fault in an occupied building — water and the entrance — with a review visit after the work is done. Dosha identification and remedies sit inside the audit and are not billed again.',
      te: 'సమగ్ర తనిఖీతో పాటు, నివాస భవనాల్లో ఎక్కువగా దోషం ఉండే రెండు అంశాలు — నీరు, ప్రధాన ద్వారం; పని పూర్తయ్యాక సమీక్ష సందర్శనతో. దోష నిర్ధారణ, పరిహారాలు తనిఖీలోనే ఉంటాయి, వాటికి మళ్లీ రుసుము లేదు.',
    },
  },
  {
    id: 'commercial',
    name: { en: 'Commercial Launch', te: 'వాణిజ్య ప్రారంభం' },
    includes: ['commercial', 'entrance'],
    crossVertical: {
      en: 'with Muhurtham from Jyotisha and a name check from Numerology',
      te: 'జ్యోతిష విభాగం నుండి ముహూర్తం, సంఖ్యా శాస్త్ర విభాగం నుండి నామ పరిశీలనతో కలిపి',
    },
    value: {
      en: 'Premises, entrance, opening date and trading name settled together instead of by four people who never speak to each other.',
      te: 'భవనం, ప్రవేశం, ప్రారంభ తేదీ, వ్యాపార నామం — ఒకరితో ఒకరు మాట్లాడని నలుగురు కాకుండా, అన్నీ ఒకే చోట నిర్ణయం.',
    },
  },
];

/* ── FAQ ── */

export const vastuFaqs: Vertical['faqs'] = [
  {
    id: 'demolition',
    q: {
      en: 'Can Vastu faults be corrected without demolition?',
      te: 'కూల్చివేత లేకుండా వాస్తు దోషాలు సరిచేయవచ్చా?',
    },
    a: {
      en: 'In the large majority of cases, yes. We work in ascending order of cost: first use and orientation, then material and placement changes, and structural alteration only where the defect is severe and nothing lighter addresses it. If demolition is genuinely the only answer, we say so and draw it — but it is the last item on the list, not the first.',
      te: 'చాలా సందర్భాల్లో అవును. మేము ఖర్చు క్రమంలో పని చేస్తాం: ముందు వినియోగం, దిక్కు; తర్వాత వస్తు, స్థాన మార్పులు; నిర్మాణ మార్పు కేవలం దోషం తీవ్రంగా ఉండి, తేలికైన మార్గం పని చేయని చోట మాత్రమే. నిజంగా కూల్చివేతే ఏకైక మార్గమైతే అది స్పష్టంగా చెప్పి, ప్రణాళిక కూడా గీస్తాం — కానీ అది జాబితాలో చివరిది, మొదటిది కాదు.',
    },
  },
  {
    id: 'online',
    q: {
      en: 'Is an online Vastu consultation from photographs and floor plans accurate?',
      te: 'ఫోటోలు, ప్రణాళికల ఆధారంగా ఆన్‌లైన్ వాస్తు సంప్రదింపు కచ్చితంగా ఉంటుందా?',
    },
    a: {
      en: 'For drawing-stage work — plot assessment from a survey sketch, entrance padas, room zoning, ayadi calculation — yes, because the inputs are documents. For a built property, no: the north on your drawing is often wrong, and a measured survey with an instrument is the whole basis of the audit. We will tell you which category your job falls into before you pay.',
      te: 'ప్రణాళిక దశ పనికి — సర్వే స్కెచ్ ఆధారంగా స్థల అంచనా, ద్వార పదాలు, గదుల మండలం, ఆయాది గణన — అవును, ఎందుకంటే కావలసినవి పత్రాలే. నిర్మించిన భవనానికి కాదు: మీ ప్రణాళికలో ఉత్తరం తరచుగా తప్పుగా ఉంటుంది, పరికరంతో కొలిచిన సర్వేయే తనిఖీకి ఆధారం. మీ పని ఏ విభాగంలోకి వస్తుందో చెల్లింపుకు ముందే చెప్తాం.',
    },
  },
  {
    id: 'ayadi',
    q: {
      en: 'How is Ayadi Ganitham different from directional Vastu?',
      te: 'ఆయాది గణితం దిక్కుల వాస్తు కంటే ఎలా భిన్నం?',
    },
    a: {
      en: 'Directional Vastu asks where things are placed. Ayadi asks whether the building’s measurements themselves are in proportion — perimeter and area reduced through six formulae and checked against the owner’s birth star. They are independent tests. A plan can pass one and fail the other, which is why two houses that look equally correct on paper do not perform the same way.',
      te: 'దిక్కుల వాస్తు — ఏది ఎక్కడ ఉంది అని చూస్తుంది. ఆయాది — భవన కొలతలే నిష్పత్తిలో ఉన్నాయా అని చూస్తుంది; చుట్టుకొలత, వైశాల్యాన్ని ఆరు సూత్రాల ద్వారా లెక్కించి యజమాని జన్మ నక్షత్రంతో సరిపోల్చి. ఇవి వేర్వేరు పరీక్షలు. ఒక ప్రణాళిక ఒకదాంట్లో నెగ్గి మరొకదాంట్లో ఓడిపోవచ్చు — కాగితంపై సమానంగా కనిపించే రెండు ఇళ్లు వేర్వేరు ఫలితాలు ఇవ్వడానికి కారణం ఇదే.',
    },
  },
  {
    id: 'flatfixed',
    q: {
      en: 'My flat’s plumbing and walls are fixed by the builder. Is Vastu even possible?',
      te: 'నా ఫ్లాట్‌లో ప్లంబింగ్, గోడలు బిల్డర్ నిర్ణయించారు. అసలు వాస్తు సాధ్యమేనా?',
    },
    a: {
      en: 'Partly, and we will be clear about the limit. The plumbing stack fixes your kitchen and toilets and cannot be moved — anyone promising otherwise is selling you something. What remains genuinely available is bed and head direction, where weight sits, the cooking platform facing, where you work, and how the north-east is kept. That is a real improvement, and it is not the same as a corrected house.',
      te: 'పాక్షికంగా — పరిమితి ఏమిటో స్పష్టంగా చెప్తాం. ప్లంబింగ్ స్టాక్ మీ వంటగది, మరుగుదొడ్ల స్థానాన్ని నిర్ణయిస్తుంది, అది కదలదు — వేరేలా చెప్పేవారు మీకు ఏదో అమ్ముతున్నారు. నిజంగా మిగిలేవి: మంచం, తల దిక్కు; బరువు ఎక్కడ ఉంది; వంట వేదిక ముఖం; మీరు పని చేసే స్థానం; ఈశాన్యం ఎలా ఉంచుతున్నారు. ఇది నిజమైన మెరుగుదలే, కానీ పూర్తిగా సరిచేసిన ఇంటితో సమానం కాదు.',
    },
  },
  {
    id: 'conflict',
    q: {
      en: 'Two consultants have given me opposite advice. How do I judge?',
      te: 'ఇద్దరు సలహాదారులు వ్యతిరేక సూచనలు ఇచ్చారు. ఎలా నిర్ణయించుకోవాలి?',
    },
    a: {
      en: 'Ask each of them for the reasoning, not the conclusion — which pada, measured from where, on what north reading. Advice that cannot be traced back to a measurement is opinion. This is exactly what Dosha Identification is for: a graded, located fault register with no remedy attached, which you are free to take to whoever you like.',
      te: 'ఇద్దరినీ తీర్పు కాదు, కారణం అడగండి — ఏ పదం, ఎక్కడి నుండి కొలిచారు, ఏ ఉత్తర నిర్ధారణ ఆధారంగా. కొలతతో ముడిపడని సలహా కేవలం అభిప్రాయం. దోష నిర్ధారణ సేవ సరిగ్గా దీని కోసమే: పరిహారం జతచేయని, స్థానం–తీవ్రతతో కూడిన దోష నివేదిక; దాన్ని మీరు ఎవరి దగ్గరకైనా తీసుకెళ్లవచ్చు.',
    },
  },
  {
    id: 'chart',
    q: {
      en: 'Do you need my birth chart for a Vastu consultation?',
      te: 'వాస్తు సంప్రదింపుకు నా జాతకం అవసరమా?',
    },
    a: {
      en: 'Not for the structural work — directions, zoning, water and drainage stand on their own. It matters for Ayadi Ganitham, which correlates the building’s dimensions with the owner’s birth star, and for occupancy in an existing-building audit. We ask for it only where it changes the answer, and we tell you which of the two it is.',
      te: 'నిర్మాణపరమైన పనికి అవసరం లేదు — దిక్కులు, మండల విభజన, నీరు, మురుగు వ్యవస్థ వాటికవే నిలబడతాయి. ఆయాది గణితానికి అవసరం, ఎందుకంటే అది భవన కొలతలను యజమాని జన్మ నక్షత్రంతో సరిపోలుస్తుంది; ప్రస్తుత భవన తనిఖీలో నివాస పరిశీలనకు కూడా. సమాధానం మారే చోట మాత్రమే అడుగుతాం, ఏ కారణంతో అడుగుతున్నామో కూడా చెప్తాం.',
    },
  },
];

/* ── Vertical config ─────────────────────────────────────────────── */

export const vastuVertical: Vertical = {
  id: 'vastu',
  path: '/services/vastu',
  icon: 'vastu',
  nameKey: 'v.vastu.name',
  subKey: 'v.vastu.sub',

  eyebrow: { en: 'Vertical one of four', te: 'నాలుగింటిలో మొదటి శాఖ' },
  title: {
    en: 'Vastu Shastra is a measured discipline, not a belief.',
    te: 'వాస్తు శాస్త్రం ఒక కొలత ఆధారిత శాస్త్రం, నమ్మకం కాదు.',
  },
  lede: {
    en: 'Every finding on this page comes from something that can be measured — a bearing taken on site, a pada counted from a fixed corner, a perimeter reduced through the ayadi formulae. Where the shastra is silent or the evidence is thin, we say so rather than fill the gap.',
    te: 'ఈ పేజీలోని ప్రతి నిర్ధారణా కొలవగలిగిన దాని నుండే వస్తుంది — స్థలంలో తీసుకున్న దిక్కు, నిర్దిష్ట మూల నుండి లెక్కించిన పదం, ఆయాది సూత్రాల ద్వారా తగ్గించిన చుట్టుకొలత. శాస్త్రం మౌనంగా ఉన్న చోట, ఆధారం బలహీనంగా ఉన్న చోట — ఖాళీని పూరించకుండా అది స్పష్టంగా చెప్తాం.',
  },
  framingTitle: {
    en: 'What a Vastu consultation here involves',
    te: 'ఇక్కడ వాస్తు సంప్రదింపు అంటే ఏమిటి',
  },
  framing: {
    en: 'We work from measured drawings and an instrument reading of true north — never from the north printed on a builder’s layout, which is wrong more often than it is right. Findings are graded by severity, so you know what is actively affecting the household and what is merely imperfect on paper. Remedies are ranked by cost, and demolition is the last item on that list, if it appears at all. Fifteen services follow; most people need two or three of them, and the filter below is there to narrow it down.',
    te: 'మేము కొలిచిన ప్రణాళికలు, పరికరంతో తీసుకున్న నిజ ఉత్తర దిక్కు ఆధారంగానే పని చేస్తాం — బిల్డర్ లేఅవుట్‌లో ముద్రించిన ఉత్తరం ఆధారంగా కాదు; అది సరిగా ఉండటం కంటే తప్పుగా ఉండటమే ఎక్కువ. నిర్ధారణలను తీవ్రత ప్రకారం విభజిస్తాం — నిజంగా ఇప్పుడు ప్రభావం చూపేది ఏది, కాగితంపై మాత్రమే లోపమైనది ఏది అని మీకు తెలుస్తుంది. పరిహారాలను ఖర్చు క్రమంలో ఇస్తాం; కూల్చివేత ఆ జాబితాలో చివరిది — అసలు ఉంటే. కింద పదిహేను సేవలు ఉన్నాయి; చాలామందికి వాటిలో రెండు మూడు చాలు, అందుకే వడపోత ఇచ్చాం.',
  },
  timingLabel: { en: 'Turnaround', te: 'వ్యవధి' },
  filterAll: { en: 'All services', te: 'అన్ని సేవలు' },
  bundlesTitle: {
    en: 'Three sequences that work better together',
    te: 'కలిపి చేస్తే మెరుగ్గా పనిచేసే మూడు క్రమాలు',
  },
  bundlesLede: {
    en: 'Not discounts on a list of services — sequences where doing one before the other is the whole point.',
    te: 'సేవల జాబితాపై తగ్గింపులు కాదు — ఒకదాని తర్వాత ఒకటి చేయడమే అసలు ప్రయోజనమైన క్రమాలు.',
  },
  faqTitle: { en: 'Asked before most consultations', te: 'చాలా సంప్రదింపులకు ముందు అడిగేవి' },
  feeLede: {
    en: 'Duration and fees are shared according to the requirement, before any work begins. Travel is charged at actuals for site visits outside Wanaparthy district.',
    te: 'వ్యవధి, రుసుము అవసరాన్ని బట్టి పని ప్రారంభించే ముందు తెలియజేయబడతాయి. వనపర్తి జిల్లా వెలుపల స్థల సందర్శనలకు ప్రయాణ ఖర్చు వాస్తవ ప్రాతిపదికన.',
  },
  ctaTitle: { en: 'Not sure which of the fifteen you need?', te: 'పదిహేనింటిలో ఏది కావాలో స్పష్టత లేదా?' },
  ctaLede: {
    en: 'Describe the property and the problem in two lines. We will tell you which service applies — and which ones you do not need.',
    te: 'భవనం, సమస్య గురించి రెండు వాక్యాల్లో చెప్పండి. ఏ సేవ సరిపోతుందో — ఏవి అవసరం లేదో కూడా చెప్తాం.',
  },

  clusters,
  services: vastuServices,
  bundles,
  faqs: vastuFaqs,
};
