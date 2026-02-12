import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import { FAQ_DATA, FAQ_CATEGORIES } from '../data/faq';
import { BUSINESS, IMAGES, WHATSAPP_BASE_URL } from '../data/constants';
import PageHero from '../components/ui/PageHero';
import Accordion from '../components/ui/Accordion';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

export default function FAQ() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  useSEO({ ...SEO_DATA.faq, canonicalPath: '/faq' });

  const filtered = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter(faq => faq.categoryEn === activeCategory);

  return (
    <>
      <PageHero titleKey="faqTitle" subtitleKey="faqSubtitle" translations={t} image={IMAGES.delhiSkyline} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat.en}
                onClick={() => setActiveCategory(cat.en)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.en
                    ? 'bg-dark-900 text-white'
                    : 'bg-dark-50 text-dark-600 hover:bg-dark-100'
                }`}
              >
                {lang === 'hi' ? cat.hi : cat.en}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <Accordion
                key={i}
                question={lang === 'hi' ? faq.questionHi : faq.questionEn}
                answer={lang === 'hi' ? faq.answerHi : faq.answerEn}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-dark text-center">
        <div className="container-custom max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-3">{t.stillHaveQuestions[lang]}</h2>
          <p className="text-dark-300 mb-8">{t.stillHaveQuestionsDesc[lang]}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-base px-8 py-4">
              <Phone className="w-5 h-5" />
              {t.callNow[lang]}
            </a>
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I have a question.')}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {t.whatsappUs[lang]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
