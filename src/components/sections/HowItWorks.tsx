import { Phone, CheckCircle, MapPin, Smile } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import SectionHeader from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const steps = [
  { icon: Phone, titleKey: 'step1', descKey: 'step1Desc', color: 'bg-blue-50 text-blue-600' },
  { icon: CheckCircle, titleKey: 'step2', descKey: 'step2Desc', color: 'bg-emerald-50 text-emerald-600' },
  { icon: MapPin, titleKey: 'step3', descKey: 'step3Desc', color: 'bg-orange-50 text-orange-600' },
  { icon: Smile, titleKey: 'step4', descKey: 'step4Desc', color: 'bg-brand-50 text-brand-600' },
];

export default function HowItWorks() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader titleKey="howItWorksTitle" translations={t} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <StepCard key={i} {...step} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ icon: Icon, titleKey, descKey, color, lang, index }: {
  icon: typeof Phone;
  titleKey: string;
  descKey: string;
  color: string;
  lang: 'en' | 'hi';
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative mb-4">
        <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mx-auto`}>
          <Icon className="w-7 h-7" />
        </div>
        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-dark-900 text-white text-xs font-bold flex items-center justify-center">
          {index + 1}
        </span>
      </div>
      <h3 className="font-semibold text-dark-900 mb-1 text-sm sm:text-base">{t[titleKey]?.[lang]}</h3>
      <p className="text-xs sm:text-sm text-dark-500">{t[descKey]?.[lang]}</p>
    </div>
  );
}
