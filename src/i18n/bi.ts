import { useLang } from './LanguageProvider';

/**
 * A bilingual value.
 *
 * The homepage keeps its strings in a keyed dictionary, which suits short,
 * reused UI labels. Long-form service copy is different: roughly 300 strings
 * where the two languages must be read side by side to be reviewed at all.
 * Colocating the pair keeps a translator's eye on both, and TypeScript still
 * refuses to compile if either half is missing — a stronger parity guarantee
 * than a key lookup, not a weaker one.
 */
export interface Bi {
  en: string;
  te: string;
}

export type BiList = { en: string[]; te: string[] };

/** Picks the active language out of `Bi` / `BiList` values. */
export function useBi() {
  const { lang } = useLang();
  return {
    lang,
    b: (value: Bi) => value[lang],
    bl: (value: BiList) => value[lang],
  };
}
