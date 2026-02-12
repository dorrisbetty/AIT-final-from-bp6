import { Phone, MessageCircle } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { BUSINESS, WHATSAPP_BASE_URL, IMAGES } from '../../data/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function CTASection() {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 overflow-hidden">
      <img src={IMAGES.road} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-dark-900/85" />
      <div
        ref={ref}
        className={`relative z-10 text-center px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{t.ctaTitle[lang]}</h2>
        <p className="text-lg text-dark-300 mb-8 max-w-xl mx-auto">{t.ctaSubtitle[lang]}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-base px-10 py-4">
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
          <a
            href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I want to book a taxi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-green-500 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-green-600 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            {t.whatsappUs[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
