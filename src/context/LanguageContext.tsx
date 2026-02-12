import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type Language } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  isHindi: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'hi' ? 'hi' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'hi' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, isHindi: lang === 'hi' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
}
