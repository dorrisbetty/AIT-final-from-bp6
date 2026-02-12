import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Clock } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { BUSINESS } from '../../data/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AboutPreview() {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">{t.aboutTitle[lang]}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mt-2 mb-6">{t.aboutStory[lang]}</h2>
            <p className="text-dark-500 leading-relaxed mb-6">{t.aboutStoryText[lang]}</p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-lg">
                {(lang === 'hi' ? BUSINESS.ownerHi : BUSINESS.owner).split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-dark-900">{lang === 'hi' ? BUSINESS.ownerHi : BUSINESS.owner}</div>
                <div className="text-sm text-dark-500">{lang === 'hi' ? 'संस्थापक और मालिक' : 'Founder & Owner'}</div>
              </div>
            </div>
            <Link to="/about" className="btn-outline">
              {t.learnMore[lang]} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {[
              { icon: Award, value: '10+', labelEn: 'Years of Trust', labelHi: 'वर्षों का भरोसा' },
              { icon: Heart, value: '1000+', labelEn: 'Happy Customers', labelHi: 'खुश ग्राहक' },
              { icon: Clock, value: '24/7', labelEn: 'Always Available', labelHi: 'हमेशा उपलब्ध' },
              { value: '4.4★', labelEn: 'Justdial Rating', labelHi: 'Justdial रेटिंग' },
            ].map((stat, i) => (
              <div key={i} className="bg-dark-50 rounded-2xl p-6 text-center border border-dark-100">
                {stat.icon && <stat.icon className="w-7 h-7 text-brand-500 mx-auto mb-2" />}
                <div className="text-3xl font-bold text-dark-900 mb-1">{stat.value}</div>
                <div className="text-sm text-dark-500">{lang === 'hi' ? stat.labelHi : stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
