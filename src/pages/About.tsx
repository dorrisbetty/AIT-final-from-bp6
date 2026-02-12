import { Award, Clock, Star, Car, Users, BadgeCheck } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import { BUSINESS, IMAGES, SERVICE_AREAS } from '../data/constants';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

export default function About() {
  const { lang } = useLang();
  useSEO({ ...SEO_DATA.about, canonicalPath: '/about' });

  return (
    <>
      <PageHero titleKey="aboutTitle" subtitleKey="aboutSubtitle" translations={t} image={IMAGES.aboutBg} />

      <StorySection lang={lang} />
      <MilestoneSection lang={lang} />
      <ValuesSection lang={lang} />
      <OwnerSection lang={lang} />
      <CoverageSection lang={lang} />
    </>
  );
}

function StorySection({ lang }: { lang: 'en' | 'hi' }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">{t.aboutStory[lang]}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mt-2 mb-6">
            {lang === 'hi' ? '2016 से विश्वसनीय सेवा' : 'Trusted Service Since 2016'}
          </h2>
          <div className="prose prose-lg text-dark-500 max-w-none leading-relaxed space-y-4">
            <p>{t.aboutStoryText[lang]}</p>
            <p>
              {lang === 'hi'
                ? 'हमारा बेड़ा सेडान से लेकर प्रीमियम SUV तक है, सभी पीली प्लेट पंजीकृत और पूरी तरह से अनुपालन वाले। हम पारदर्शी मूल्य, समय की पाबंदी और ग्राहक संतुष्टि में विश्वास करते हैं।'
                : 'Our fleet ranges from Sedans to Premium SUVs, all yellow plate registered and fully compliant. We believe in transparent pricing, punctuality, and customer satisfaction above everything else.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneSection({ lang }: { lang: 'en' | 'hi' }) {
  const { ref, isVisible } = useScrollAnimation();
  const years = useCountUp(10, 1500, isVisible);
  const customers = useCountUp(1000, 2000, isVisible);
  const cities = useCountUp(50, 1500, isVisible);

  const milestones = [
    { icon: Award, value: `${years}+`, labelEn: 'Years of Experience', labelHi: 'वर्षों का अनुभव' },
    { icon: Users, value: `${customers}+`, labelEn: 'Happy Customers', labelHi: 'खुश ग्राहक' },
    { icon: Clock, value: '24/7', labelEn: 'Always Available', labelHi: 'हमेशा उपलब्ध' },
    { icon: Car, value: `${cities}+`, labelEn: 'Cities Covered', labelHi: 'शहर कवर किए' },
    { icon: Star, value: '5', labelEn: 'Star Rating', labelHi: 'स्टार रेटिंग' },
    { icon: BadgeCheck, value: '100%', labelEn: 'Compliant Fleet', labelHi: 'अनुपालन बेड़ा' },
  ];

  return (
    <section className="section-padding gradient-dark">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className={`text-center py-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Icon className="w-7 h-7 text-brand-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                <div className="text-sm text-dark-400">{lang === 'hi' ? m.labelHi : m.labelEn}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ValuesSection({ lang }: { lang: 'en' | 'hi' }) {
  const values = [
    { titleEn: 'Safety First', titleHi: 'सुरक्षा पहले', descEn: 'All vehicles are maintained to the highest safety standards with regular servicing and inspections.', descHi: 'सभी वाहनों को नियमित सर्विसिंग और निरीक्षण के साथ सर्वोच्च सुरक्षा मानकों पर बनाए रखा जाता है।' },
    { titleEn: 'Reliability', titleHi: 'विश्वसनीयता', descEn: 'We never cancel. Once booked, your ride is guaranteed. On-time arrival is our promise.', descHi: 'हम कभी रद्द नहीं करते। एक बार बुक होने के बाद, आपकी सवारी की गारंटी है। समय पर आगमन हमारा वादा है।' },
    { titleEn: 'Transparency', titleHi: 'पारदर्शिता', descEn: 'No hidden charges, no surge pricing. The fare we quote is the fare you pay, always.', descHi: 'कोई छिपे शुल्क नहीं, कोई सर्ज प्राइसिंग नहीं। जो किराया हम बताते हैं वही आप देते हैं, हमेशा।' },
    { titleEn: 'Customer Care', titleHi: 'ग्राहक देखभाल', descEn: 'Your comfort and satisfaction is our top priority. We go the extra mile for every customer.', descHi: 'आपका आराम और संतुष्टि हमारी सर्वोच्च प्राथमिकता है। हम हर ग्राहक के लिए अतिरिक्त प्रयास करते हैं।' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader titleKey="ourMission" translations={t} />
        <p className="text-center text-dark-500 max-w-2xl mx-auto mb-12 -mt-6">{t.ourMissionText[lang]}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((val, i) => (
            <ValueCard key={i} val={val} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ val, lang, index }: { val: { titleEn: string; titleHi: string; descEn: string; descHi: string }; lang: 'en' | 'hi'; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-dark-50 rounded-2xl p-6 border border-dark-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-lg font-bold text-dark-900 mb-2">{lang === 'hi' ? val.titleHi : val.titleEn}</h3>
      <p className="text-sm text-dark-500 leading-relaxed">{lang === 'hi' ? val.descHi : val.descEn}</p>
    </div>
  );
}

function OwnerSection({ lang }: { lang: 'en' | 'hi' }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom max-w-4xl">
        <div ref={ref} className={`flex flex-col sm:flex-row items-center gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-32 h-32 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 text-4xl font-bold flex-shrink-0">
            BP
          </div>
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-1">{lang === 'hi' ? BUSINESS.ownerHi : BUSINESS.owner}</h3>
            <p className="text-brand-600 font-medium mb-3">{lang === 'hi' ? 'संस्थापक और मालिक' : 'Founder & Owner'}</p>
            <p className="text-dark-500 leading-relaxed">
              {lang === 'hi'
                ? 'ब्रजकिशोर जी 2016 से परिवहन उद्योग में हैं। उनकी व्यक्तिगत प्रतिबद्धता गुणवत्ता सेवा, समय की पाबंदी और ग्राहक संतुष्टि के प्रति है। उनका मानना है कि हर सवारी एक रिश्ता बनाने का मौका है। वे मिलनसार, भरोसेमंद और हमेशा ग्राहकों की मदद के लिए तैयार रहते हैं।'
                : 'Brajkishor ji has been in the transport industry since 2016. His personal commitment to quality service, punctuality, and customer satisfaction has been the cornerstone of All India Taxi Service. He believes every ride is an opportunity to build a lasting relationship. Known for being friendly, trustworthy, and always available to help.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageSection({ lang }: { lang: 'en' | 'hi' }) {
  const areas = lang === 'hi' ? SERVICE_AREAS.localHi : SERVICE_AREAS.local;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader titleKey="serviceAreasTitle" subtitleKey="serviceAreasSubtitle" translations={t} />
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {areas.map(area => (
            <span key={area} className="px-5 py-2.5 bg-dark-50 rounded-full text-sm font-medium text-dark-700 border border-dark-100">
              {area}
            </span>
          ))}
          <span className="px-5 py-2.5 bg-brand-500 rounded-full text-sm font-bold text-dark-900">
            {lang === 'hi' ? '+ पूरा दिल्ली NCR' : '+ All Delhi NCR'}
          </span>
          <span className="px-5 py-2.5 bg-dark-900 rounded-full text-sm font-bold text-white">
            {lang === 'hi' ? '+ पूरा भारत (आउटस्टेशन)' : '+ All India (Outstation)'}
          </span>
        </div>
      </div>
    </section>
  );
}
