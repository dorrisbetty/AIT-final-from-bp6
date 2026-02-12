import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { ROUTES } from '../../data/routes';
import SectionHeader from '../ui/SectionHeader';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function PopularRoutes() {
  const { lang } = useLang();
  const { openWhatsApp, buildRouteMessage } = useWhatsApp();
  const displayed = ROUTES.slice(0, 6);

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        <SectionHeader titleKey="routesTitle" subtitleKey="routesSubtitle" translations={t} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((route, i) => (
            <RouteCard key={route.id} route={route} lang={lang} index={i} onBook={() => openWhatsApp(buildRouteMessage(route.destinationEn))} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/routes" className="btn-outline">
            {t.viewAll[lang]} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function RouteCard({ route, lang, index, onBook }: {
  route: typeof ROUTES[0];
  lang: 'en' | 'hi';
  index: number;
  onBook: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`card-premium group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img src={route.image} alt={route.destinationEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-dark-700">
            {lang === 'hi' ? route.categoryHi : route.categoryEn}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-dark-900 mb-2">
          {lang === 'hi' ? route.destinationHi : route.destinationEn}
        </h3>
        <div className="flex items-center gap-4 text-sm text-dark-500 mb-3">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{route.distance}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{route.duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-dark-900">{route.sedanFare}</span>
          <button onClick={onBook} className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors flex items-center gap-1">
            {t.bookThisRoute[lang]} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
