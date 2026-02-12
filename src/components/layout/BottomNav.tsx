import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Car, IndianRupee, Phone, Route } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';

const tabs = [
  { path: '/', iconComponent: Home, labelEn: 'Home', labelHi: 'होम' },
  { path: '/services', iconComponent: Briefcase, labelEn: 'Services', labelHi: 'सेवाएं' },
  { path: '/fleet', iconComponent: Car, labelEn: 'Fleet', labelHi: 'गाड़ियां' },
  { path: '/routes', iconComponent: Route, labelEn: 'Routes', labelHi: 'रूट' },
  { path: '/pricing', iconComponent: IndianRupee, labelEn: 'Pricing', labelHi: 'दरें' },
  { path: '/contact', iconComponent: Phone, labelEn: 'Contact', labelHi: 'संपर्क' },
];

export default function BottomNav() {
  const location = useLocation();
  const { lang } = useLang();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-dark-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around h-16 px-1">
        {tabs.map(tab => {
          const Icon = tab.iconComponent;
          const active = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1 transition-all duration-200 ${
                active ? 'text-brand-600' : 'text-dark-400'
              }`}
            >
              <div className={`p-1 rounded-lg transition-all ${active ? 'bg-brand-50' : ''}`}>
                <Icon className={`w-5 h-5 ${active ? 'stroke-[2.5]' : ''}`} />
              </div>
              <span className="text-[10px] font-medium">{lang === 'hi' ? tab.labelHi : tab.labelEn}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
