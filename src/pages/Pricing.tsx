import { useState } from 'react';
import { Check, Shield, ArrowRight, Calculator } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import { AIRPORT_PRICES, LOCAL_PACKAGES, OUTSTATION_RATES, MONTHLY_PACKAGES, EXTRA_CHARGES } from '../data/pricing';
import { IMAGES, WHATSAPP_BASE_URL } from '../data/constants';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useWhatsApp } from '../hooks/useWhatsApp';

export default function Pricing() {
  const { lang } = useLang();

  return (
    <>
      <PageHero titleKey="pricingTitle" subtitleKey="pricingSubtitle" translations={t} image={IMAGES.road} />

      <AirportPricing lang={lang} />
      <LocalPricing lang={lang} />
      <OutstationPricing lang={lang} />
      <MonthlyPricing lang={lang} />
      <ExtraChargesSection lang={lang} />
      <FareEstimator lang={lang} />
      <PriceGuarantee lang={lang} />
    </>
  );
}

function AirportPricing({ lang }: { lang: 'en' | 'hi' }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader titleKey="airportTransfers" subtitleKey="airportTransfersDesc" translations={t} />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {AIRPORT_PRICES.map((p, i) => (
            <div
              key={p.vehicleId}
              className={`card-premium p-6 text-center transition-all duration-500 ${i === 2 ? 'ring-2 ring-brand-500 relative' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {i === 2 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Premium</span>}
              <h3 className="font-semibold text-dark-900 text-lg mb-1">{lang === 'hi' ? p.vehicleHi : p.vehicleEn}</h3>
              <div className="text-4xl font-bold text-dark-900 my-4">₹{p.price.toLocaleString()}</div>
              <p className="text-sm text-brand-600 font-medium mb-4">{t.allInclusive[lang]}</p>
              <ul className="text-sm text-dark-500 space-y-2 text-left mb-6">
                {['AC Car', 'Toll Included', 'No Hidden Fee', 'Flight Tracking'].map(f => (
                  <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" />{f}</li>
                ))}
              </ul>
              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Hi, I need airport transfer with ${p.vehicleEn}.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                {t.bookNow[lang]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalPricing({ lang }: { lang: 'en' | 'hi' }) {
  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        <SectionHeader titleKey="localPackages" translations={t} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {LOCAL_PACKAGES.map(pkg => (
            <div key={`${pkg.km}-${pkg.hours}`} className="card-premium p-6">
              <div className="text-xl font-bold text-brand-600 mb-4">{pkg.km} km / {pkg.hours} {lang === 'hi' ? 'घंटे' : 'Hours'}</div>
              <div className="space-y-4">
                {[
                  { label: t.sedan[lang], price: pkg.sedan },
                  { label: t.xlSuv[lang], price: pkg.xl },
                  { label: t.premiumSuv[lang], price: pkg.premium },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-dark-100 last:border-0">
                    <span className="text-dark-600">{item.label}</span>
                    <span className="text-xl font-bold text-dark-900">₹{item.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutstationPricing({ lang }: { lang: 'en' | 'hi' }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader titleKey="outstationRates" translations={t} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {OUTSTATION_RATES.map(rate => (
            <div key={rate.vehicleId} className="card-premium p-6 text-center">
              <h3 className="font-semibold text-dark-900 text-lg mb-3">{lang === 'hi' ? rate.vehicleHi : rate.vehicleEn}</h3>
              <div className="text-4xl font-bold text-dark-900 mb-1">₹{rate.perKm}</div>
              <div className="text-sm text-dark-500 mb-4">{t.perKm[lang]}</div>
              <div className="bg-dark-50 rounded-xl px-4 py-3 text-sm text-dark-600">
                {t.minBilling[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MonthlyPricing({ lang }: { lang: 'en' | 'hi' }) {
  return (
    <section className="section-padding gradient-dark">
      <div className="container-custom">
        <SectionHeader titleKey="monthlyPackages" translations={t} light />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {MONTHLY_PACKAGES.map(pkg => (
            <div key={pkg.vehicleId} className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700/50 text-center">
              <h3 className="text-white font-semibold text-lg mb-3">{lang === 'hi' ? pkg.vehicleHi : pkg.vehicleEn}</h3>
              <div className="text-4xl font-bold text-brand-400 mb-1">₹{pkg.price.toLocaleString()}</div>
              <div className="text-sm text-dark-400 mb-5">{t.perMonth[lang]}</div>
              <ul className="text-sm text-dark-300 space-y-2 text-left">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />{pkg.km.toLocaleString()} km {t.included[lang]}</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />{pkg.hours} {t.hoursIncluded[lang]}</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />{pkg.days} {lang === 'hi' ? 'दिन/महीना' : 'days/month'}</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />{t.ac[lang]} + {lang === 'hi' ? 'समर्पित ड्राइवर' : 'Dedicated Driver'}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtraChargesSection({ lang }: { lang: 'en' | 'hi' }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader titleKey="extraCharges" translations={t} />
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full min-w-[500px] bg-white rounded-2xl overflow-hidden border border-dark-100">
            <thead>
              <tr className="bg-dark-50">
                <th className="text-left px-6 py-3.5 text-sm font-semibold text-dark-700">{lang === 'hi' ? 'शुल्क' : 'Charge'}</th>
                <th className="text-center px-6 py-3.5 text-sm font-semibold text-dark-700">{t.sedan[lang]}</th>
                <th className="text-center px-6 py-3.5 text-sm font-semibold text-dark-700">{t.xlSuv[lang]}</th>
                <th className="text-center px-6 py-3.5 text-sm font-semibold text-dark-700">{t.premiumSuv[lang]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-100">
              {EXTRA_CHARGES.map((charge, i) => (
                <tr key={i} className="hover:bg-dark-50 transition-colors">
                  <td className="px-6 py-3.5 text-sm font-medium text-dark-700">{lang === 'hi' ? charge.labelHi : charge.labelEn}</td>
                  <td className="text-center px-6 py-3.5 text-sm text-dark-600">{charge.sedan}</td>
                  <td className="text-center px-6 py-3.5 text-sm text-dark-600">{charge.xl}</td>
                  <td className="text-center px-6 py-3.5 text-sm text-dark-600">{charge.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FareEstimator({ lang }: { lang: 'en' | 'hi' }) {
  const [distance, setDistance] = useState(100);
  const [vehicle, setVehicle] = useState('sedan');
  const { openWhatsApp } = useWhatsApp();

  const rates: Record<string, number> = { sedan: 12, xl: 15, premium: 22 };
  const fare = Math.max(distance, 250) * rates[vehicle];

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500';

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom max-w-xl">
        <div className="text-center mb-8">
          <Calculator className="w-10 h-10 text-brand-500 mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-dark-900 mb-2">{t.fareEstimatorTitle[lang]}</h2>
          <p className="text-dark-500">{t.fareEstimatorDesc[lang]}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-dark-100 shadow-lg">
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm font-medium text-dark-700 mb-1 block">{t.approxDistance[lang]}</label>
              <input type="number" min={1} value={distance} onChange={e => setDistance(Number(e.target.value))} className={inputClass} />
            </div>
            <div>
              <label className="text-sm font-medium text-dark-700 mb-1 block">{t.vehicleType[lang]}</label>
              <select value={vehicle} onChange={e => setVehicle(e.target.value)} className={inputClass}>
                <option value="sedan">{t.sedan[lang]}</option>
                <option value="xl">{t.xlSuv[lang]}</option>
                <option value="premium">{t.premiumSuv[lang]}</option>
              </select>
            </div>
          </div>
          <div className="bg-brand-50 rounded-xl p-5 text-center mb-4">
            <div className="text-sm text-dark-500 mb-1">{t.estimatedFare[lang]}</div>
            <div className="text-4xl font-bold text-dark-900">₹{fare.toLocaleString()}</div>
            <div className="text-xs text-dark-400 mt-1">{t.minBilling[lang]}</div>
          </div>
          <button
            onClick={() => openWhatsApp(`Hi, I need a fare quote.\nDistance: ~${distance} km\nVehicle: ${vehicle}\nEstimate: ₹${fare.toLocaleString()}`)}
            className="btn-primary w-full"
          >
            {t.getQuoteWhatsApp[lang]} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function PriceGuarantee({ lang }: { lang: 'en' | 'hi' }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div ref={ref} className={`container-custom max-w-3xl text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <Shield className="w-12 h-12 text-brand-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-dark-900 mb-4">{t.priceGuarantee[lang]}</h2>
        <p className="text-dark-500 text-lg leading-relaxed">{t.priceGuaranteeDesc[lang]}</p>
      </div>
    </section>
  );
}
