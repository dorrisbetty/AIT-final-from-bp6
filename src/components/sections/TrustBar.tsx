import { Clock, Users, Star, Shield } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

export default function TrustBar() {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollAnimation();
  const years = useCountUp(10, 1500, isVisible);
  const customers = useCountUp(1000, 2000, isVisible);

  const stats = [
    { icon: Shield, value: `${years}+`, label: t.trustYears[lang] },
    { icon: Clock, value: '24/7', label: t.trustAvailable[lang] },
    { icon: Users, value: `${customers}+`, label: t.trustCustomers[lang] },
    { icon: Star, value: '4.4', label: t.trustRating[lang] },
  ];

  return (
    <section ref={ref} className="relative -mt-12 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-dark-900/10 border border-dark-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-dark-100">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center py-6 px-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Icon className="w-6 h-6 text-brand-500 mb-2" />
                <span className="text-2xl sm:text-3xl font-bold text-dark-900">{stat.value}</span>
                <span className="text-sm text-dark-500 text-center">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
