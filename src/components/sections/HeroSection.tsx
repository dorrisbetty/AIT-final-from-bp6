import { Phone, MessageCircle } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { BUSINESS, IMAGES } from '../../data/constants';
import { WHATSAPP_BASE_URL } from '../../data/constants';

export default function HeroSection() {
  const { lang } = useLang();

  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden">
      <img
        src={IMAGES.hero}
        alt="Taxi service"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-900/80 to-dark-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-brand-400 text-sm font-medium">{t.available247[lang]}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up whitespace-pre-line">
            {t.heroTitle[lang]}
          </h1>

          <p className="text-lg sm:text-xl text-dark-300 mb-8 leading-relaxed animate-slide-up max-w-xl">
            {t.heroSubtitle[lang]}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-slide-up">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-base px-8 py-4">
              <Phone className="w-5 h-5" />
              {t.callNow[lang]}
            </a>
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I want to book a taxi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              {t.whatsappUs[lang]}
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 animate-slide-up">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-dark-700 border-2 border-dark-900 flex items-center justify-center text-[10px] text-white font-medium">
                    {['BK', 'RS', 'AK', 'SP'][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="text-brand-400 font-semibold">4.4 ★</div>
                <div className="text-dark-400">Justdial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
