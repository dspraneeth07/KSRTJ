import type { StringKey } from '../i18n/strings';

/**
 * Page content as data, not markup. Every field is a translation key, so
 * adding a language never means touching a component — and TypeScript
 * rejects a key that does not exist in the dictionary.
 */

export type IconName = 'vastu' | 'jyotisha' | 'numerology' | 'swara' | 'spiritual';

export interface Pillar {
  id: string;
  icon: IconName;
  name: StringKey;
  desc: StringKey;
  /** Where the card leads. Swara and Brahmavidya share one page. */
  to: string;
}

/** The five educational disciplines, in the order they are taught. */
export const pillars: Pillar[] = [
  { id: 'vastu', icon: 'vastu', name: 'd.vastu.name', desc: 'd.vastu.desc', to: '/services/vastu' },
  {
    id: 'jyotisha',
    icon: 'jyotisha',
    name: 'd.jyotisha.name',
    desc: 'd.jyotisha.desc',
    to: '/services/jyotisha',
  },
  {
    id: 'numerology',
    icon: 'numerology',
    name: 'd.numerology.name',
    desc: 'd.numerology.desc',
    to: '/services/numerology',
  },
  {
    id: 'swara',
    icon: 'swara',
    name: 'd.swara.name',
    desc: 'd.swara.desc',
    to: '/services/spiritual#swarashastra',
  },
  {
    id: 'spiritual',
    icon: 'spiritual',
    name: 'd.spiritual.name',
    desc: 'd.spiritual.desc',
    to: '/services/spiritual#brahmavidya',
  },
];

export interface ServiceNavItem {
  id: string;
  label: StringKey;
  to: string;
}

/**
 * The Services menu — headings only.
 *
 * The sub-lists that used to sit here repeated each page's own contents,
 * which made the menu a second sitemap to keep in step with the first.
 */
export const serviceNav: ServiceNavItem[] = [
  { id: 'vastu', label: 'v.vastu.name', to: '/services/vastu' },
  { id: 'jyotisha', label: 'v.jyotisha.name', to: '/services/jyotisha' },
  { id: 'numerology', label: 'v.numero.name', to: '/services/numerology' },
  { id: 'spiritual', label: 'v.swara.name', to: '/services/spiritual' },
  { id: 'training', label: 'mega.training', to: '/training' },
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
