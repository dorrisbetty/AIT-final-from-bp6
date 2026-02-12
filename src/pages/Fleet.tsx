import { Users, Check, ArrowRight } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import { FLEET } from '../data/fleet';
import { IMAGES, WHATSAPP_BASE_URL } from '../data/constants';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

export default function Fleet() {
  const { lang } = useLang();
  useSEO({ ...SEO_DATA.fleet, canonicalPath: '/fleet' });

  return (
    <>
      <PageHero titleKey="fleetTitle" subtitleKey="fleetSubtitle" translations={t} image={IMAGES.road} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {FLEET.map((vehicle, i) => (
              <VehicleBlock key={vehicle.id} vehicle={vehicle} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionHeader titleKey="comparisonTitle" translations={t} />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] bg-white rounded-2xl overflow-hidden border border-dark-100">
              <thead>
                <tr className="bg-dark-900 text-white">
                  <th className="text-left px-6 py-4 text-sm font-semibold">{t.features[lang]}</th>
                  {FLEET.map(v => (
                    <th key={v.id} className="text-center px-6 py-4 text-sm font-semibold">{lang === 'hi' ? v.nameHi : v.nameEn}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-100">
                {[
                  { labelEn: 'Passengers', labelHi: 'यात्री', values: FLEET.map(v => String(v.capacity)) },
                  { labelEn: 'Per KM Rate', labelHi: 'प्रति KM दर', values: FLEET.map(v => `₹${v.perKm}`) },
                  { labelEn: 'AC', labelHi: 'AC', values: ['Yes', 'Yes', 'Yes'] },
                  { labelEn: 'Luggage', labelHi: 'सामान', values: ['3 Bags', '4 Bags', '5 Bags'] },
                  { labelEn: 'GPS Tracking', labelHi: 'GPS ट्रैकिंग', values: ['Yes', 'Yes', 'Yes'] },
                  { labelEn: 'Phone Charger', labelHi: 'फोन चार्जर', values: ['Yes', 'Yes', 'Yes'] },
                  { labelEn: 'Music System', labelHi: 'म्यूजिक सिस्टम', values: ['Standard', 'Standard', 'Premium'] },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-dark-50 transition-colors">
                    <td className="px-6 py-3.5 text-sm font-medium text-dark-700">{lang === 'hi' ? row.labelHi : row.labelEn}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="text-center px-6 py-3.5 text-sm text-dark-600">
                        {val === 'Yes' ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-dark text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle[lang]}</h2>
          <p className="text-dark-300 mb-8">{t.ctaSubtitle[lang]}</p>
          <a href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I want to book a taxi.')}`} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
            {t.bookNow[lang]} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}

function VehicleBlock({ vehicle, lang, index }: {
  vehicle: typeof FLEET[0];
  lang: 'en' | 'hi';
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const reversed = index % 2 === 1;
  const features = lang === 'hi' ? vehicle.featuresHi : vehicle.features;
  const idealFor = lang === 'hi' ? vehicle.idealForHi : vehicle.idealForEn;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`relative rounded-2xl overflow-hidden h-64 lg:h-80 bg-dark-100 ${reversed ? 'lg:order-2' : ''}`}>
        <img src={vehicle.image} alt={vehicle.nameEn} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
          <Users className="w-4 h-4 text-dark-600" />
          <span className="text-sm font-semibold text-dark-700">{vehicle.capacity} {t.passengers[lang]}</span>
        </div>
      </div>
      <div className={reversed ? 'lg:order-1' : ''}>
        <h3 className="text-3xl font-bold text-dark-900 mb-2">{lang === 'hi' ? vehicle.nameHi : vehicle.nameEn}</h3>
        <p className="text-dark-500 text-sm mb-1">{t.models[lang]}: {vehicle.models.join(', ')}</p>
        <p className="text-dark-500 mb-6">{lang === 'hi' ? vehicle.descriptionHi : vehicle.descriptionEn}</p>

        <div className="mb-5">
          <h4 className="font-semibold text-dark-800 mb-3 text-sm uppercase tracking-wider">{t.features[lang]}</h4>
          <div className="flex flex-wrap gap-2">
            {features.map(f => (
              <span key={f} className="px-3 py-1.5 bg-dark-50 rounded-lg text-sm text-dark-600 border border-dark-100">{f}</span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-dark-800 mb-3 text-sm uppercase tracking-wider">{t.idealFor[lang]}</h4>
          <div className="flex flex-wrap gap-2">
            {idealFor.map(u => (
              <span key={u} className="px-3 py-1.5 bg-brand-50 text-brand-700 rounded-lg text-sm font-medium">{u}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-brand-600">₹{vehicle.perKm}{t.perKm[lang]}</span>
          <a
            href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Hi, I want to book a ${vehicle.nameEn}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.bookNow[lang]}
          </a>
        </div>
      </div>
    </div>
  );
}
