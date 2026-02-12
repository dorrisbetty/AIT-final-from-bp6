import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, Phone } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../../data/constants';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLang();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-dark-900/5' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center group-hover:bg-brand-400 transition-colors">
              <Car className="w-5 h-5 text-dark-900" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-dark-900 text-sm block">All India</span>
              <span className="text-brand-600 text-xs font-semibold -mt-0.5 block">Taxi Service</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50'
                }`}
              >
                {lang === 'hi' ? link.labelHi : link.labelEn}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
            >
              <Phone className="w-4 h-4" />
              {t.callNow[lang]}
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-dark-600 hover:bg-dark-50 transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white lg:hidden animate-fade-in">
          <nav className="flex flex-col p-4 gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-dark-700 hover:bg-dark-50'
                }`}
              >
                {lang === 'hi' ? link.labelHi : link.labelEn}
              </Link>
            ))}
            <div className="border-t border-dark-100 mt-2 pt-4 flex flex-col gap-2">
              <button
                onClick={toggleLang}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-50 text-dark-700 font-medium"
              >
                {lang === 'en' ? 'हिंदी में देखें' : 'Switch to English'}
              </button>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-primary justify-center text-base"
              >
                <Phone className="w-5 h-5" />
                {t.callNow[lang]}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
