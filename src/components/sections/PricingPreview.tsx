import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { AIRPORT_PRICES, LOCAL_PACKAGES } from '../../data/pricing';
import SectionHeader from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type Tab = 'airport' | 'local';

export default function PricingPreview() {
  const { lang } = useLang();
  const [tab, setTab] = useState<Tab>('airport');
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding gradient-dark">
      <div className="container-custom">
        <SectionHeader titleKey="pricingTitle" subtitleKey="pricingSubtitle" translations={t} light />

        <div ref={ref} className="flex justify-center mb-10">
          <div className="inline-flex bg-dark-800 rounded-xl p-1">
            <button
              onClick={() => setTab('airport')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === 'airport' ? 'bg-brand-500 text-dark-900' : 'text-dark-400 hover:text-white'}`}
            >
              {t.airportTransfers[lang]}
            </button>
            <button
              onClick={() => setTab('local')}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${tab === 'local' ? 'bg-brand-500 text-dark-900' : 'text-dark-400 hover:text-white'}`}
            >
              {t.localPackages[lang]}
            </button>
          </div>
        </div>

        {tab === 'airport' && (
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {AIRPORT_PRICES.map((p, i) => (
              <div key={p.vehicleId} className={`bg-dark-800/50 rounded-2xl p-6 border border-dark-700/50 text-center ${i === 1 ? 'ring-2 ring-brand-500 relative' : ''}`}>
                {i === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Popular</span>}
                <h3 className="text-white font-semibold mb-1">{lang === 'hi' ? p.vehicleHi : p.vehicleEn}</h3>
                <div className="text-3xl font-bold text-brand-400 my-4">₹{p.price.toLocaleString()}</div>
                <p className="text-dark-400 text-sm mb-4">{t.allInclusive[lang]}</p>
                <ul className="text-sm text-dark-300 space-y-2 text-left mb-6">
                  {['AC Car', 'Toll Included', 'No Hidden Fee'].map(f => (
                    <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {tab === 'local' && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {LOCAL_PACKAGES.map(pkg => (
              <div key={`${pkg.km}-${pkg.hours}`} className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700/50">
                <div className="text-brand-400 font-bold text-lg mb-4">{pkg.km} km / {pkg.hours} {lang === 'hi' ? 'घंटे' : 'Hours'}</div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-dark-400">{t.sedan[lang]}</span><span className="text-white font-semibold">₹{pkg.sedan.toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-dark-400">{t.xlSuv[lang]}</span><span className="text-white font-semibold">₹{pkg.xl.toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-dark-400">{t.premiumSuv[lang]}</span><span className="text-white font-semibold">₹{pkg.premium.toLocaleString()}</span></div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-brand-400 font-medium hover:text-brand-300 transition-colors">
            {t.viewPricing[lang]} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
