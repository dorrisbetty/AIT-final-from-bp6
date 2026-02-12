import { Star, Quote } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import SectionHeader from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const reviews = [
  {
    nameEn: 'Rajesh Kumar', nameHi: 'राजेश कुमार',
    textEn: 'Excellent service! Used them for airport drop and the driver was on time. Very clean car and polite driver. Will use again.',
    textHi: 'बेहतरीन सेवा! एयरपोर्ट ड्रॉप के लिए इस्तेमाल किया और ड्राइवर समय पर आया। बहुत साफ गाड़ी और विनम्र ड्राइवर।',
    rating: 5, tripEn: 'Airport Transfer', tripHi: 'एयरपोर्ट ट्रांसफर',
  },
  {
    nameEn: 'Priya Sharma', nameHi: 'प्रिया शर्मा',
    textEn: 'Booked for a family trip to Agra. Innova was comfortable and the fare was exactly as quoted. No hidden charges at all.',
    textHi: 'आगरा की पारिवारिक यात्रा के लिए बुक किया। इनोवा आरामदायक थी और किराया बिल्कुल वही था जो बताया गया था।',
    rating: 5, tripEn: 'Outstation - Agra', tripHi: 'आउटस्टेशन - आगरा',
  },
  {
    nameEn: 'Amit Verma', nameHi: 'अमित वर्मा',
    textEn: 'Using their monthly package for my office commute. Reliable and affordable. Brajkishor ji is very helpful and responsive.',
    textHi: 'अपने ऑफिस आने-जाने के लिए उनके मासिक पैकेज का उपयोग कर रहा हूं। विश्वसनीय और किफायती। ब्रजकिशोर जी बहुत मददगार हैं।',
    rating: 4, tripEn: 'Monthly Package', tripHi: 'मासिक पैकेज',
  },
  {
    nameEn: 'Sunita Devi', nameHi: 'सुनीता देवी',
    textEn: 'I regularly book for Haridwar trips. The drivers are experienced with hill routes. Very safe and comfortable.',
    textHi: 'मैं नियमित रूप से हरिद्वार यात्रा के लिए बुक करती हूं। ड्राइवर पहाड़ी रास्तों में अनुभवी हैं। बहुत सुरक्षित और आरामदायक।',
    rating: 5, tripEn: 'Outstation - Haridwar', tripHi: 'आउटस्टेशन - हरिद्वार',
  },
];

export default function TestimonialsSection() {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader titleKey="testimonialsTitle" subtitleKey="testimonialsSubtitle" translations={t} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, lang, index }: { review: typeof reviews[0]; lang: 'en' | 'hi'; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-dark-50 rounded-2xl p-6 border border-dark-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Quote className="w-8 h-8 text-brand-200 mb-3" />
      <p className="text-sm text-dark-600 leading-relaxed mb-4">{lang === 'hi' ? review.textHi : review.textEn}</p>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-brand-500 fill-brand-500' : 'text-dark-200'}`} />
        ))}
      </div>
      <div className="border-t border-dark-100 pt-3">
        <div className="font-medium text-dark-800 text-sm">{lang === 'hi' ? review.nameHi : review.nameEn}</div>
        <div className="text-xs text-dark-400">{lang === 'hi' ? review.tripHi : review.tripEn}</div>
      </div>
    </div>
  );
}
