import { Phone, Mail } from 'lucide-react';
import { BUSINESS } from '../../data/constants';
import { useLang } from '../../context/LanguageContext';

export default function TopBar() {
  const { lang, toggleLang } = useLang();

  return (
    <div className="bg-dark-900 text-white text-sm py-2 px-4 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-1.5 hover:text-brand-400 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>{BUSINESS.phone}</span>
          </a>
          <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-1.5 hover:text-brand-400 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>{BUSINESS.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-dark-400 text-xs">24/7</span>
          <button
            onClick={toggleLang}
            className="flex items-center bg-dark-800 rounded-full p-0.5 border border-dark-700"
          >
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${lang === 'en' ? 'bg-brand-500 text-dark-900' : 'text-dark-400'}`}>
              EN
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${lang === 'hi' ? 'bg-brand-500 text-dark-900' : 'text-dark-400'}`}>
              HI
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
