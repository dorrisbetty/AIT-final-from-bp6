import { Plane, ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { AIRPORT_PRICES } from '../../data/pricing';
import { IMAGES, WHATSAPP_BASE_URL } from '../../data/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AirportSection() {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div ref={ref} className="relative rounded-3xl overflow-hidden">
          <img src={IMAGES.airport} alt="Airport" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 to-dark-900/70" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className={`flex items-center gap-2 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Plane className="w-6 h-6 text-brand-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{t.airportTransfers[lang]}</h2>
            </div>
            <p className={`text-dark-300 mb-8 max-w-lg transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {t.airportTransfersDesc[lang]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {AIRPORT_PRICES.map((p, i) => (
                <a
                  key={p.vehicleId}
                  href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Hi, I need airport transfer. Vehicle: ${p.vehicleEn}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/20 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${(i + 2) * 100}ms` }}
                >
                  <div className="text-sm text-dark-300 mb-1">{lang === 'hi' ? p.vehicleHi : p.vehicleEn}</div>
                  <div className="text-2xl font-bold text-white mb-2">₹{p.price.toLocaleString()}</div>
                  <div className="flex items-center gap-1 text-brand-400 text-sm font-medium group-hover:gap-2 transition-all">
                    {t.bookNow[lang]} <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
