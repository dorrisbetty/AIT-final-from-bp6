import { useState } from 'react';
import { MapPin, Clock, ArrowRight, Compass, Landmark, Check, Users, Briefcase, Car, Info } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import { ROUTES, ROUTE_CATEGORIES, SPECIAL_PACKAGES, DILLI_DARSHAN_LOCATIONS, DILLI_DARSHAN_PACKAGE, DilliDarshanLocation } from '../data/routes';
import { IMAGES, WHATSAPP_BASE_URL } from '../data/constants';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

export default function Routes() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  const { openWhatsApp, buildRouteMessage } = useWhatsApp();
  useSEO({ ...SEO_DATA.routes, canonicalPath: '/routes' });

  const filtered = activeCategory === 'All'
    ? ROUTES
    : ROUTES.filter(r => r.categoryEn === activeCategory);

  return (
    <>
      <PageHero titleKey="routesTitle" subtitleKey="routesSubtitle" translations={t} image={IMAGES.road} />

      <DilliDarshanSection lang={lang} />

      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">{t.outstationDestinations[lang]}</h2>
            <p className="text-dark-500 max-w-2xl mx-auto">{t.outstationDestinationsSubtitle[lang]}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {ROUTE_CATEGORIES.map(cat => (
              <button
                key={cat.en}
                onClick={() => setActiveCategory(cat.en)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.en
                    ? 'bg-dark-900 text-white'
                    : 'bg-white text-dark-600 hover:bg-dark-100'
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

function DilliDarshanSection({ lang }: { lang: 'en' | 'hi' }) {
  const pkg = DILLI_DARSHAN_PACKAGE;
  const included = lang === 'hi' ? pkg.includedHi : pkg.includedEn;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-100 mb-4">
            <Landmark className="w-7 h-7 text-brand-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">{t.dilliDarshanTitle[lang]}</h2>
          <p className="text-dark-500 max-w-2xl mx-auto">{t.dilliDarshanSubtitle[lang]}</p>
        </div>

        <div className="bg-gradient-to-br from-brand-50 to-white rounded-3xl border border-brand-100 overflow-hidden mb-12">
          <div className="p-6 md:p-8 border-b border-brand-100 bg-white/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-2">{t.fullDayPackage[lang]}</h3>
                <div className="flex flex-wrap items-center gap-4 text-dark-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-500" />
                    {pkg.distance}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-500" />
                    {pkg.duration}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-brand-500/10 rounded-full">
                <span className="text-sm font-medium text-brand-700">{t.startingFrom[lang]}</span>
                <span className="text-xl font-bold text-brand-600">₹2,500</span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h4 className="text-lg font-semibold text-dark-900 mb-4">{t.chooseVehicle[lang]}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {pkg.vehicles.map((vehicle, i) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} lang={lang} index={i} featured={i === 0} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  {t.whatsIncluded[lang]}
                </h4>
                <ul className="space-y-2">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-dark-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-amber-500" />
                  {t.extraCharges[lang]}
                </h4>
                <div className="bg-dark-50 rounded-xl p-4">
                  <div className="space-y-2">
                    {pkg.extraCharges.map((charge, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-dark-600">{lang === 'hi' ? charge.labelHi : charge.labelEn}</span>
                        <span className="font-medium text-dark-800">{charge.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-100 text-center">
              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I want to book a Dilli Darshan package for Delhi sightseeing.')}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary text-base px-10 py-4"
              >
                {t.bookDilliDarshan[lang]} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-dark-900 mb-6 text-center">{t.locationsCovered[lang]}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {DILLI_DARSHAN_LOCATIONS.map((location, i) => (
              <DilliDarshanLocationCard key={location.id} location={location} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle, lang, index, featured }: {
  vehicle: typeof DILLI_DARSHAN_PACKAGE.vehicles[0];
  lang: 'en' | 'hi';
  index: number;
  featured: boolean;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative rounded-xl p-5 transition-all duration-500 ${
        featured
          ? 'bg-dark-900 text-white ring-2 ring-brand-500'
          : 'bg-white border border-dark-200 hover:border-brand-300'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 bg-brand-500 text-white text-xs font-medium rounded-full">
            {t.popular[lang]}
          </span>
        </div>
      )}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${featured ? 'bg-white/10' : 'bg-brand-50'}`}>
          <Car className={`w-5 h-5 ${featured ? 'text-brand-400' : 'text-brand-600'}`} />
        </div>
        <div>
          <h5 className={`font-bold ${featured ? 'text-white' : 'text-dark-900'}`}>
            {lang === 'hi' ? vehicle.typeHi : vehicle.typeEn}
          </h5>
          <p className={`text-xs ${featured ? 'text-dark-300' : 'text-dark-500'}`}>{vehicle.models}</p>
        </div>
      </div>
      <div className={`space-y-1 text-sm mb-4 ${featured ? 'text-dark-300' : 'text-dark-600'}`}>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          {vehicle.capacity}
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          {vehicle.bags}
        </div>
      </div>
      <div className={`text-2xl font-bold ${featured ? 'text-white' : 'text-dark-900'}`}>
        {vehicle.price}
      </div>
    </div>
  );
}

function DilliDarshanLocationCard({ location, lang, index }: {
  location: DilliDarshanLocation; lang: 'en' | 'hi'; index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${(index % 7) * 60}ms` }}
    >
      <div className="relative w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden ring-2 ring-dark-100 group-hover:ring-brand-400 transition-all">
        <img
          src={location.image}
          alt={location.nameEn}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h4 className="text-sm font-medium text-dark-800 group-hover:text-brand-600 transition-colors">
        {lang === 'hi' ? location.nameHi : location.nameEn}
      </h4>
    </div>
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
