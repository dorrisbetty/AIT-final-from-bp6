import { useState } from 'react';
import { MapPin, Clock, ArrowRight, Compass } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import { ROUTES, ROUTE_CATEGORIES, SPECIAL_PACKAGES } from '../data/routes';
import { IMAGES, WHATSAPP_BASE_URL } from '../data/constants';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Routes() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  const { openWhatsApp, buildRouteMessage } = useWhatsApp();

  const filtered = activeCategory === 'All'
    ? ROUTES
    : ROUTES.filter(r => r.categoryEn === activeCategory);

  return (
    <>
      <PageHero titleKey="routesTitle" subtitleKey="routesSubtitle" translations={t} image={IMAGES.road} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {ROUTE_CATEGORIES.map(cat => (
              <button
                key={cat.en}
                onClick={() => setActiveCategory(cat.en)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.en
                    ? 'bg-dark-900 text-white'
                    : 'bg-dark-50 text-dark-600 hover:bg-dark-100'
                }`}
              >
                {lang === 'hi' ? cat.hi : cat.en}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((route, i) => (
              <RouteCard key={route.id} route={route} lang={lang} index={i} onBook={() => openWhatsApp(buildRouteMessage(route.destinationEn))} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-dark">
        <div className="container-custom">
          <SectionHeader titleKey="specialPackages" translations={t} light />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SPECIAL_PACKAGES.map((pkg, i) => (
              <SpecialCard key={pkg.id} pkg={pkg} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-2xl">
          <Compass className="w-12 h-12 text-brand-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-dark-900 mb-3">{t.customRoute[lang]}</h2>
          <p className="text-dark-500 mb-8">{t.customRouteDesc[lang]}</p>
          <a
            href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I need a custom route quote.')}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4"
          >
            {t.getQuote[lang]} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}

function RouteCard({ route, lang, index, onBook }: {
  route: typeof ROUTES[0]; lang: 'en' | 'hi'; index: number; onBook: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`card-premium group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${(index % 6) * 60}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={route.image} alt={route.destinationEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-dark-700">
            {lang === 'hi' ? route.categoryHi : route.categoryEn}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-dark-900 mb-1">{lang === 'hi' ? route.destinationHi : route.destinationEn}</h3>
        <p className="text-sm text-dark-500 mb-3 line-clamp-2">{lang === 'hi' ? route.descriptionHi : route.descriptionEn}</p>
        <div className="flex items-center gap-4 text-sm text-dark-500 mb-4">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{route.distance}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{route.duration}</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-dark-100">
          <div>
            <span className="text-xs text-dark-400">{t.sedan[lang]} {t.fromDelhi[lang]}</span>
            <span className="text-lg font-bold text-dark-900 ml-2">{route.sedanFare}</span>
          </div>
          <button onClick={onBook} className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors">
            {t.bookNow[lang]} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SpecialCard({ pkg, lang, index }: {
  pkg: typeof SPECIAL_PACKAGES[0]; lang: 'en' | 'hi'; index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden h-72 group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img src={pkg.image} alt={pkg.nameEn} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-brand-400 text-sm font-medium mb-1">{lang === 'hi' ? pkg.durationHi : pkg.durationEn}</div>
        <h3 className="text-2xl font-bold text-white mb-2">{lang === 'hi' ? pkg.nameHi : pkg.nameEn}</h3>
        <p className="text-dark-300 text-sm mb-4">{lang === 'hi' ? pkg.descriptionHi : pkg.descriptionEn}</p>
        <a
          href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.nameEn} package.`)}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-400 font-medium text-sm hover:text-brand-300 transition-colors"
        >
          {t.getQuote[lang]} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
