import { Link } from 'react-router-dom';
import { Building2, Check, ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { IMAGES } from '../../data/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function CorporatePreview() {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  const benefitsEn = ['Dedicated vehicle & driver', 'Flexible monthly terms', '2,500 km + 240 hours included', 'Starting from ₹40,000/month', 'No surge pricing ever'];
  const benefitsHi = ['समर्पित गाड़ी और ड्राइवर', 'लचीली मासिक शर्तें', '2,500 km + 240 घंटे शामिल', '₹40,000/महीने से शुरू', 'कभी सर्ज प्राइसिंग नहीं'];
  const benefits = lang === 'hi' ? benefitsHi : benefitsEn;

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className={`relative rounded-2xl overflow-hidden h-72 lg:h-96 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <img src={IMAGES.corporate} alt="Corporate" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-6 h-6 text-brand-500" />
              <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">{t.serviceCorporate[lang]}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">{t.corporateTitle[lang]}</h2>
            <p className="text-dark-500 mb-6">{t.corporateSubtitle[lang]}</p>
            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-dark-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link to="/pricing" className="btn-primary">
              {t.viewPricing[lang]} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
