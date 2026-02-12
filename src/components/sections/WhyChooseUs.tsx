import { Shield, Car, IndianRupee, Headphones, Eye, BadgeCheck, Clock, Lock } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import SectionHeader from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const reasons = [
  { icon: Shield, key: 'whyExperience' },
  { icon: Car, key: 'whyClean' },
  { icon: IndianRupee, key: 'whyTransparent' },
  { icon: Headphones, key: 'whySupport' },
  { icon: Eye, key: 'whyNoHidden' },
  { icon: BadgeCheck, key: 'whyCompliant' },
  { icon: Clock, key: 'whyPunctual' },
  { icon: Lock, key: 'whySafe' },
];

export default function WhyChooseUs() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        <SectionHeader titleKey="whyChooseTitle" translations={t} />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {reasons.map((item, i) => (
            <ReasonCard key={i} icon={item.icon} label={t[item.key]?.[lang] || ''} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ icon: Icon, label, index }: { icon: typeof Shield; label: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-5 text-center border border-dark-100 hover:border-brand-200 hover:shadow-md transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <Icon className="w-7 h-7 text-brand-500 mx-auto mb-3" />
      <span className="text-sm font-medium text-dark-700">{label}</span>
    </div>
  );
}
