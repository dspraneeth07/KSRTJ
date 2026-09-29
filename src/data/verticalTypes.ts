import type { Bi, BiList } from '../i18n/bi';
import type { IconName } from './content';
import type { StringKey } from '../i18n/strings';

/**
 * Shared shape for every service vertical (Vastu, Jyotisha, Numerology,
 * Swarashastra). One page component renders all of them from this config,
 * so a new vertical is a data file, not a new page.
 */

export interface Cluster {
  id: string;
  label: Bi;
  blurb: Bi;
}

export type ConsultMode =
  | 'site'
  | 'sitedraw'
  | 'remote'
  | 'drawing'
  | 'both'
  | 'online'
  | 'inperson';

export interface Service {
  id: string;
  index: number;
  cluster: string;
  name: Bi;
  definition: Bi;
  examine: BiList;
  who: Bi;
  receive: Bi;
  cta: Bi;
  mode: ConsultMode;
  /** Turnaround for a deliverable, or session length for a sitting. */
  timing: Bi;
  /** Placeholder — real figures go in here. See README. */
  fee: string;
  /**
   * Responsible-framing callout, rendered as a distinct block. Used where a
   * reading touches medicine, fertility or anything a client could mistake
   * for professional advice it is not.
   */
  caution?: Bi;
}

export interface Bundle {
  id: string;
  name: Bi;
  includes: string[];
  /** Services from other verticals, named rather than linked. */
  crossVertical?: Bi;
  value: Bi;
}

export interface VerticalFaq {
  id: string;
  q: Bi;
  a: Bi;
}

export interface Vertical {
  id: string;
  path: string;
  icon: IconName;
  /** Vertical name and one-liner, reused from the homepage dictionary. */
  nameKey: StringKey;
  subKey: StringKey;
  eyebrow: Bi;
  title: Bi;
  lede: Bi;
  framingTitle: Bi;
  framing: Bi;
  /** Column label for the per-service duration/turnaround field. */
  timingLabel: Bi;
  filterAll: Bi;
  bundlesTitle: Bi;
  bundlesLede: Bi;
  faqTitle: Bi;
  feeLede: Bi;
  ctaTitle: Bi;
  ctaLede: Bi;
  clusters: Cluster[];
  services: Service[];
  bundles: Bundle[];
  faqs: VerticalFaq[];
}

export const modeLabels: Record<ConsultMode, Bi> = {
  site: { en: 'Site visit', te: 'స్థల సందర్శన' },
  remote: { en: 'Remote', te: 'దూరస్థం' },
  sitedraw: { en: 'Site visit + drawings', te: 'స్థల సందర్శన + ప్రణాళికలు' },
  drawing: { en: 'Drawing review', te: 'ప్రణాళిక పరిశీలన' },
  both: { en: 'Online or in person', te: 'ఆన్‌లైన్ లేదా ప్రత్యక్షం' },
  online: { en: 'Online', te: 'ఆన్‌లైన్' },
  inperson: { en: 'In person', te: 'ప్రత్యక్షంగా' },
};
