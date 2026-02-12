import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import { FAQ_DATA } from '../../data/faq';
import SectionHeader from '../ui/SectionHeader';
import Accordion from '../ui/Accordion';

export default function FAQPreview() {
  const { lang } = useLang();
  const topFaqs = FAQ_DATA.slice(0, 5);

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom max-w-3xl">
        <SectionHeader titleKey="faqTitle" translations={t} />
        <div className="space-y-3">
          {topFaqs.map((faq, i) => (
            <Accordion
              key={i}
              question={lang === 'hi' ? faq.questionHi : faq.questionEn}
              answer={lang === 'hi' ? faq.answerHi : faq.answerEn}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/faq" className="btn-outline">
            {t.viewAll[lang]} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
