import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { FLEET } from '../../data/fleet';
import SectionHeader from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function FleetShowcase() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader titleKey="fleetTitle" subtitleKey="fleetSubtitle" translations={t} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLEET.map((vehicle, i) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} lang={lang} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/fleet" className="btn-outline">
            {t.viewDetails[lang]} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FleetCard({ vehicle, lang, index }: {
  vehicle: typeof FLEET[0];
  lang: 'en' | 'hi';
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`card-premium group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden bg-dark-100">
        <img
          src={vehicle.image}
          alt={vehicle.nameEn}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <Users className="w-3.5 h-3.5 text-dark-600" />
          <span className="text-sm font-medium text-dark-700">{vehicle.capacity}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-dark-900 mb-1">{lang === 'hi' ? vehicle.nameHi : vehicle.nameEn}</h3>
        <p className="text-sm text-dark-500 mb-3">{vehicle.models.join(' / ')}</p>
        <div className="flex items-center justify-between pt-3 border-t border-dark-100">
          <div>
            <span className="text-xs text-dark-400">{t.startingAt[lang]}</span>
            <span className="text-lg font-bold text-brand-600 ml-1">₹{vehicle.perKm}{t.perKm[lang]}</span>
          </div>
          <Link to="/fleet" className="text-sm text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1 transition-colors">
            {t.viewDetails[lang]} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
