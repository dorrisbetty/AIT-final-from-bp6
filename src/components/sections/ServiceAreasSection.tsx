import { MapPin } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { SERVICE_AREAS } from '../../data/constants';
import SectionHeader from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ServiceAreasSection() {
  const { lang } = useLang();
  const areas = lang === 'hi' ? SERVICE_AREAS.localHi : SERVICE_AREAS.local;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        <SectionHeader titleKey="serviceAreasTitle" subtitleKey="serviceAreasSubtitle" translations={t} />
        <div ref={ref} className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {areas.map((area, i) => (
            <div
              key={area}
              className={`flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-dark-100 shadow-sm hover:border-brand-300 hover:shadow-md transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <MapPin className="w-4 h-4 text-brand-500" />
              <span className="font-medium text-dark-700 text-sm">{area}</span>
            </div>
          ))}
          <div
            className={`flex items-center gap-2 px-5 py-3 bg-brand-500 rounded-full shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: `${areas.length * 60}ms` }}
          >
            <span className="font-semibold text-dark-900 text-sm">{lang === 'hi' ? '+ पूरा दिल्ली NCR' : '+ All Delhi NCR'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
