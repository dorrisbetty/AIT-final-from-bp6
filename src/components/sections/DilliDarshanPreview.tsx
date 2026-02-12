import { Link } from 'react-router-dom';
import { Landmark, MapPin, Clock, Users, ArrowRight, Check } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { DILLI_DARSHAN_LOCATIONS, DILLI_DARSHAN_PACKAGE } from '../../data/routes';
import { WHATSAPP_BASE_URL } from '../../data/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function DilliDarshanPreview() {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollAnimation();
  const pkg = DILLI_DARSHAN_PACKAGE;
  const displayLocations = DILLI_DARSHAN_LOCATIONS.slice(0, 5);

  return (
    <section className="section-padding bg-gradient-to-br from-brand-50 via-white to-brand-50/30">
      <div className="container-custom">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full mb-4">
              <Landmark className="w-4 h-4 text-brand-600" />
              <span className="text-sm font-medium text-brand-700">{t.dilliDarshanTitle[lang]}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              {t.fullDayPackage[lang]}
            </h2>
            <p className="text-dark-500 mb-6">
              {t.dilliDarshanPreviewDesc[lang]}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span className="text-dark-700 font-medium">{pkg.distance}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                <Clock className="w-4 h-4 text-brand-500" />
                <span className="text-dark-700 font-medium">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                <Users className="w-4 h-4 text-brand-500" />
                <span className="text-dark-700 font-medium">4-7 {t.passengers[lang]}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {pkg.vehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white rounded-xl p-4 border border-dark-100 text-center">
                  <span className="text-xs text-dark-500 block mb-1">
                    {lang === 'hi' ? vehicle.typeHi : vehicle.typeEn}
                  </span>
                  <span className="text-xl font-bold text-dark-900">{vehicle.price}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I want to book a Dilli Darshan package for Delhi sightseeing.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t.bookDilliDarshan[lang]} <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/routes" className="btn-secondary">
                {t.viewDetails[lang]}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-dark-100">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">{t.locationsCovered[lang]}</h3>
              <div className="grid grid-cols-5 gap-3 mb-6">
                {displayLocations.map((location, i) => (
                  <div
                    key={location.id}
                    className="group text-center"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="relative w-14 h-14 mx-auto mb-2 rounded-full overflow-hidden ring-2 ring-dark-100 group-hover:ring-brand-400 transition-all">
                      <img
                        src={location.image}
                        alt={location.nameEn}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs text-dark-600 leading-tight block">
                      {lang === 'hi' ? location.nameHi : location.nameEn}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-brand-600 mb-6">
                <span>+ {DILLI_DARSHAN_LOCATIONS.length - 5} more landmarks</span>
              </div>

              <div className="border-t border-dark-100 pt-4">
                <h4 className="text-sm font-semibold text-dark-900 mb-3">{t.whatsIncluded[lang]}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {(lang === 'hi' ? pkg.includedHi : pkg.includedEn).slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-dark-600">
                      <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
