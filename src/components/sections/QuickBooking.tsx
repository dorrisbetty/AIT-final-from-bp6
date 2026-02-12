import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';
import BookingForm from '../forms/BookingForm';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function QuickBooking() {
  const { lang } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom max-w-3xl">
        <div
          ref={ref}
          className={`bg-white rounded-2xl shadow-xl shadow-dark-900/5 border border-dark-100 p-6 sm:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl font-bold text-dark-900 mb-2 text-center">{t.quickBookingTitle[lang]}</h2>
          <p className="text-dark-500 text-center mb-6 text-sm">{t.getQuoteWhatsApp[lang]}</p>
          <BookingForm compact />
        </div>
      </div>
    </section>
  );
}
