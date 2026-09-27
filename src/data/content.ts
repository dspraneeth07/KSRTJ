import type { StringKey } from '../i18n/strings';

/**
 * Page content as data, not markup. Every field is a translation key, so
 * adding a language never means touching a component — and TypeScript
 * rejects a key that does not exist in the dictionary.
 */

export type IconName = 'vastu' | 'jyotisha' | 'numerology' | 'swara';

export interface Pillar {
  id: string;
  icon: IconName;
  name: StringKey;
  sub: StringKey;
  desc: StringKey;
  count: StringKey;
  cta: StringKey;
}

export const pillars: Pillar[] = [
  {
    id: 'vastu',
    icon: 'vastu',
    name: 'v.vastu.name',
    sub: 'v.vastu.sub',
    desc: 'v.vastu.desc',
    count: 'v.vastu.count',
    cta: 'cta.explore',
  },
  {
    id: 'jyotisha',
    icon: 'jyotisha',
    name: 'v.jyotisha.name',
    sub: 'v.jyotisha.sub',
    desc: 'v.jyotisha.desc',
    count: 'v.jyotisha.count',
    cta: 'cta.explore',
  },
  {
    id: 'numerology',
    icon: 'numerology',
    name: 'v.numero.name',
    sub: 'v.numero.sub',
    desc: 'v.numero.desc',
    count: 'v.numero.count',
    cta: 'cta.explore',
  },
  {
    id: 'swara',
    icon: 'swara',
    name: 'v.swara.name',
    sub: 'v.swara.sub',
    desc: 'v.swara.desc',
    count: 'v.swara.count',
    cta: 'cta.enquire',
  },
];

export interface MegaColumn {
  id: string;
  title: StringKey;
  items: StringKey[];
  note?: StringKey;
  extraTitle?: StringKey;
  extraItems?: StringKey[];
}

export const megaColumns: MegaColumn[] = [
  {
    id: 'vastu',
    title: 'v.vastu.name',
    items: [
      's.vastu.1', 's.vastu.2', 's.vastu.3', 's.vastu.4', 's.vastu.5',
      's.vastu.6', 's.vastu.7', 's.vastu.8', 's.vastu.9', 's.vastu.10',
      's.vastu.11', 's.vastu.12', 's.vastu.13', 's.vastu.14', 's.vastu.15',
    ],
  },
  {
    id: 'jyotisha',
    title: 'v.jyotisha.name',
    items: [
      's.jyo.1', 's.jyo.2', 's.jyo.3', 's.jyo.4', 's.jyo.5', 's.jyo.6',
      's.jyo.7', 's.jyo.8', 's.jyo.9', 's.jyo.10', 's.jyo.11', 's.jyo.12',
      's.jyo.13', 's.jyo.14', 's.jyo.15', 's.jyo.16', 's.jyo.17',
    ],
  },
  {
    id: 'numerology',
    title: 'v.numero.name',
    items: [
      's.num.1', 's.num.2', 's.num.3', 's.num.4', 's.num.5', 's.num.6',
      's.num.7', 's.num.8', 's.num.9', 's.num.10', 's.num.11',
    ],
  },
  {
    id: 'swara',
    title: 'v.swara.name',
    items: ['s.swa.1', 's.swa.2'],
    note: 'mega.swaraNote',
    extraTitle: 'mega.training',
    extraItems: ['s.course.1', 's.course.2', 's.course.3'],
  },
];

export interface TrustStat {
  id: string;
  /** Placeholder figures — see README. Replace or remove the strip. */
  value: number;
  suffix: string;
  label: StringKey;
}

export const trustStats: TrustStat[] = [
  { id: 'years', value: 27, suffix: '+', label: 'trust.1' },
  { id: 'consults', value: 14000, suffix: '+', label: 'trust.2' },
  { id: 'projects', value: 380, suffix: '+', label: 'trust.3' },
  { id: 'countries', value: 9, suffix: '', label: 'trust.4' },
];

export interface SignatureItem {
  id: string;
  discipline: StringKey;
  name: StringKey;
  desc: StringKey;
  duration: StringKey;
  mode: StringKey;
  output: StringKey;
}

export const signatures: SignatureItem[] = [
  {
    id: 'plot',
    discipline: 'v.vastu.name',
    name: 'sig.1.name',
    desc: 'sig.1.desc',
    duration: 'sig.1.dur',
    mode: 'mode.inPerson',
    output: 'out.report',
  },
  {
    id: 'chart',
    discipline: 'v.jyotisha.name',
    name: 'sig.2.name',
    desc: 'sig.2.desc',
    duration: 'sig.2.dur',
    mode: 'mode.both',
    output: 'out.report',
  },
  {
    id: 'marriage',
    discipline: 'sig.3.disc',
    name: 'sig.3.name',
    desc: 'sig.3.desc',
    duration: 'sig.3.dur',
    mode: 'mode.both',
    output: 'out.report',
  },
  {
    id: 'naming',
    discipline: 'v.numero.name',
    name: 'sig.4.name',
    desc: 'sig.4.desc',
    duration: 'sig.4.dur',
    mode: 'mode.both',
    output: 'out.shortlist',
  },
  {
    id: 'muhurtham',
    discipline: 'v.jyotisha.name',
    name: 'sig.5.name',
    desc: 'sig.5.desc',
    duration: 'sig.5.dur',
    mode: 'mode.online',
    output: 'out.dates',
  },
  {
    id: 'audit',
    discipline: 'sig.6.disc',
    name: 'sig.6.name',
    desc: 'sig.6.desc',
    duration: 'sig.6.dur',
    mode: 'mode.inPerson',
    output: 'out.audit',
  },
];

export interface ProcessStep {
  id: string;
  name: StringKey;
  desc: StringKey;
}

export const processSteps: ProcessStep[] = [
  { id: 'intake', name: 'process.1.name', desc: 'process.1.desc' },
  { id: 'prep', name: 'process.2.name', desc: 'process.2.desc' },
  { id: 'sitting', name: 'process.3.name', desc: 'process.3.desc' },
  { id: 'report', name: 'process.4.name', desc: 'process.4.desc' },
  { id: 'followup', name: 'process.5.name', desc: 'process.5.desc' },
];

export interface InstitutionalItem {
  id: string;
  name: StringKey;
  desc: StringKey;
}

export const institutional: InstitutionalItem[] = [
  { id: 'realestate', name: 'inst.1.name', desc: 'inst.1.desc' },
  { id: 'corporate', name: 'inst.2.name', desc: 'inst.2.desc' },
  { id: 'industrial', name: 'inst.3.name', desc: 'inst.3.desc' },
  { id: 'education', name: 'inst.4.name', desc: 'inst.4.desc' },
];

export interface Course {
  id: string;
  name: StringKey;
  desc: StringKey;
  duration: StringKey;
}

export const courses: Course[] = [
  { id: 'vastu', name: 's.course.1', desc: 'courses.1.desc', duration: 'courses.1.dur' },
  { id: 'jyotisha', name: 's.course.2', desc: 'courses.2.desc', duration: 'courses.2.dur' },
  { id: 'numerology', name: 's.course.3', desc: 'courses.3.desc', duration: 'courses.3.dur' },
];

export interface Testimonial {
  id: string;
  text: StringKey;
  who: StringKey;
  what: StringKey;
}

export const testimonials: Testimonial[] = [
  { id: 't1', text: 'test.1.text', who: 'test.1.who', what: 'test.1.what' },
  { id: 't2', text: 'test.2.text', who: 'test.2.who', what: 'test.2.what' },
  { id: 't3', text: 'test.3.text', who: 'test.3.who', what: 'test.3.what' },
];

export interface FaqItem {
  id: string;
  q: StringKey;
  a: StringKey;
}

export const faqs: FaqItem[] = [
  { id: 'f1', q: 'faq.1.q', a: 'faq.1.a' },
  { id: 'f2', q: 'faq.2.q', a: 'faq.2.a' },
  { id: 'f3', q: 'faq.3.q', a: 'faq.3.a' },
  { id: 'f4', q: 'faq.4.q', a: 'faq.4.a' },
  { id: 'f5', q: 'faq.5.q', a: 'faq.5.a' },
];

export interface NavLink {
  href: string;
  label: StringKey;
}

export const navLinks: NavLink[] = [
  { href: '#pillars', label: 'nav.approach' },
  { href: '#process', label: 'nav.process' },
  { href: '#institutional', label: 'nav.institutional' },
  { href: '#courses', label: 'nav.courses' },
  { href: 'about', label: 'nav.about' },
];

export const footerColumns: { id: string; title: StringKey; items: StringKey[] }[] = [
  {
    id: 'vastu',
    title: 'v.vastu.name',
    items: ['s.vastu.1', 's.vastu.2', 's.vastu.3', 's.vastu.7', 's.vastu.10', 's.vastu.13'],
  },
  {
    id: 'jyotisha',
    title: 'v.jyotisha.name',
    items: ['s.jyo.1', 's.jyo.7', 's.jyo.12', 's.jyo.14', 's.jyo.15', 's.jyo.16'],
  },
  {
    id: 'numerology',
    title: 'v.numero.name',
    items: ['s.num.1', 's.num.2', 's.num.6', 's.num.9', 's.num.10', 's.num.11'],
  },
  {
    id: 'practice',
    title: 'footer.practice',
    items: [
      'nav.about',
      'nav.process',
      'nav.institutional',
      'nav.courses',
      'footer.faq',
      'footer.contact',
    ],
  },
];
