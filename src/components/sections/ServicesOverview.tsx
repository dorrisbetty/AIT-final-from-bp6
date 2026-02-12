import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { IMAGES } from '../../data/constants';
import SectionHeader from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  { titleKey: 'serviceAirport', descKey: 'serviceAirportDesc', image: IMAGES.serviceAirport, span: 'lg:col-span-2 lg:row-span-2' },
  { titleKey: 'serviceLocal', descKey: 'serviceLocalDesc', image: IMAGES.serviceLocal, span: '' },
  { titleKey: 'serviceOutstation', descKey: 'serviceOutstationDesc', image: IMAGES.serviceOutstation, span: '' },
  { titleKey: 'serviceCorporate', descKey: 'serviceCorporateDesc', image: IMAGES.serviceCorporate, span: '' },
  { titleKey: 'serviceWedding', descKey: 'serviceWeddingDesc', image: IMAGES.serviceWedding, span: '' },
  { titleKey: 'serviceRailway', descKey: 'serviceRailwayDesc', image: IMAGES.serviceRailway, span: 'lg:col-span-2' },
];

export default function ServicesOverview() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        <SectionHeader titleKey="servicesTitle" subtitleKey="servicesSubtitle" translations={t} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px] sm:auto-rows-[240px]">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} lang={lang} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-dark">
            {t.viewAll[lang]} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ titleKey, descKey, image, span, lang, index }: {
  titleKey: string;
  descKey: string;
  image: string;
  span: string;
  lang: 'en' | 'hi';
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${span} transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img
        src={image}
        alt={t[titleKey]?.[lang]}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent transition-all duration-500 group-hover:from-dark-900/95 group-hover:via-dark-900/50" />

      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 transition-transform duration-300 group-hover:-translate-y-1">
          {t[titleKey]?.[lang]}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed line-clamp-2 max-w-md transition-all duration-300 group-hover:text-white/90">
          {t[descKey]?.[lang]}
        </p>

        <div className="flex items-center gap-1.5 mt-3 text-brand-400 text-sm font-medium opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Link to="/services" className="flex items-center gap-1.5 hover:gap-2.5 transition-all">
            {t.learnMore[lang]} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
