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
    extraTitle: 'mega.training',
    extraItems: ['crs.vastu.name', 'crs.jyo.name', 'crs.num.name', 'crs.swara.name', 'crs.spiritual.name'],
  },
];

export interface MainService {
  id: string;
  name: StringKey;
  desc: StringKey;
}

export interface ServiceGroup {
  id: string;
  title: StringKey;
  items: MainService[];
}

/**
 * The main services, grouped by discipline rather than shown as a flat row
 * of cards. Every one is offered online or in person, so the mode is stated
 * once per card from `ms.mode` instead of being modelled per service.
 */
export const serviceGroups: ServiceGroup[] = [
  {
    id: 'vastu',
    title: 'grp.vastu',
    items: [{ id: 'vastu-consult', name: 'ms.vastu.1.name', desc: 'ms.vastu.1.desc' }],
  },
  {
    id: 'jyotisha',
    title: 'grp.jyotisha',
    items: [
      { id: 'birthchart', name: 'ms.jyo.1.name', desc: 'ms.jyo.1.desc' },
      { id: 'prasna', name: 'ms.jyo.2.name', desc: 'ms.jyo.2.desc' },
      { id: 'marriage', name: 'ms.jyo.3.name', desc: 'ms.jyo.3.desc' },
      { id: 'muhurta', name: 'ms.jyo.4.name', desc: 'ms.jyo.4.desc' },
      { id: 'samudrika', name: 'ms.jyo.5.name', desc: 'ms.jyo.5.desc' },
    ],
  },
  {
    id: 'numerology',
    title: 'grp.numerology',
    items: [{ id: 'numerology', name: 'ms.num.1.name', desc: 'ms.num.1.desc' }],
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

export interface CourseItem {
  id: string;
  name: StringKey;
  desc: StringKey;
}

export interface CourseGroup {
  id: string;
  title: StringKey;
  /**
   * Certificate courses carry level, duration, medium, mode and certificate.
   * Study programmes are open-ended and carry mode only — listing a duration
   * or a certificate against them would claim something they do not offer.
   */
  kind: 'certificate' | 'study';
  items: CourseItem[];
}

export const courseGroups: CourseGroup[] = [
  {
    id: 'certificate',
    title: 'courses.grp.cert',
    kind: 'certificate',
    items: [
      { id: 'vastu', name: 'crs.vastu.name', desc: 'crs.vastu.desc' },
      { id: 'jyotisha', name: 'crs.jyo.name', desc: 'crs.jyo.desc' },
      { id: 'numerology', name: 'crs.num.name', desc: 'crs.num.desc' },
    ],
  },
  {
    id: 'study',
    title: 'courses.grp.study',
    kind: 'study',
    items: [
      { id: 'swara', name: 'crs.swara.name', desc: 'crs.swara.desc' },
      { id: 'spiritual', name: 'crs.spiritual.name', desc: 'crs.spiritual.desc' },
    ],
  },
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
  /** An absolute path, so these resolve from any route, not just home. */
  to: string;
  label: StringKey;
}

export const navLinks: NavLink[] = [
  { to: '/training', label: 'nav.courses' },
  { to: '/about', label: 'nav.about' },
  { to: '/#faq', label: 'footer.faq' },
  { to: '/contact', label: 'footer.contact' },
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
      'nav.courses',
      'courses.grp.cert',
      'nav.process',
      'footer.faq',
      'footer.contact',
    ],
  },
];

/**
 * Where each footer link in the last column goes. Kept beside the column
 * itself so a new entry cannot silently fall back to an anchor that does
 * not exist on the page the visitor happens to be on.
 */
export const footerLinkTargets: Partial<Record<StringKey, string>> = {
  'nav.about': '/about',
  'nav.courses': '/training',
  'courses.grp.cert': '/training/certificate-courses',
  'nav.process': '/contact#process',
  'footer.faq': '/#faq',
  'footer.contact': '/contact',
};
