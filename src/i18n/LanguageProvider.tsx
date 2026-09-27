import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { dictionaries, type Lang, type StringKey } from './strings';

const STORAGE_KEY = 'svk.lang';

interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translate a key. Typed, so a bad key fails at compile time. */
  t: (key: StringKey) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'te') return stored;
  } catch {
    // Private mode or blocked storage — fall through to the browser hint.
  }
  return /^te\b/i.test(navigator.language ?? '') ? 'te' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  // <html lang> is what drives every Telugu type rule in the stylesheet,
  // so the DOM attribute is the single source of truth for the CSS.
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Non-fatal: the choice simply will not survive a reload.
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      setLang,
      t: (key: StringKey) => dictionaries[lang][key],
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
