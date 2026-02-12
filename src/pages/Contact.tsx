import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import { BUSINESS, IMAGES, WHATSAPP_BASE_URL } from '../data/constants';
import PageHero from '../components/ui/PageHero';
import BookingForm from '../components/forms/BookingForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { lang } = useLang();

  return (
    <>
      <PageHero titleKey="contactTitle" subtitleKey="contactSubtitle" translations={t} image={IMAGES.contactBg} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <ContactCards lang={lang} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            <div>
              <h2 className="text-2xl font-bold text-dark-900 mb-2">{t.getQuoteWhatsApp[lang]}</h2>
              <p className="text-dark-500 mb-6 text-sm">
                {lang === 'hi' ? 'नीचे फॉर्म भरें और हम आपको व्हाट्सएप पर तुरंत जवाब देंगे।' : 'Fill out the form below and we will respond on WhatsApp instantly.'}
              </p>
              <BookingForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark-900 mb-6">{t.officeAddress[lang]}</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-dark-700 font-medium">{lang === 'hi' ? BUSINESS.addressHi : BUSINESS.address}</p>
                    <p className="text-sm text-dark-500">{lang === 'hi' ? BUSINESS.landmarkHi : BUSINESS.landmark}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  <p className="text-dark-700">{t.available247[lang]}</p>
                </div>
                <a
                  href={BUSINESS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {lang === 'hi' ? 'Google Maps पर देखें' : 'View on Google Maps'}
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-dark-100 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9!2d77.5!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37eb6f0f0f5c90a3!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCards({ lang }: { lang: 'en' | 'hi' }) {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      icon: Phone,
      titleEn: 'Call Us',
      titleHi: 'कॉल करें',
      value: BUSINESS.phone,
      secondaryValue: BUSINESS.phoneSecondary,
      href: `tel:${BUSINESS.phone}`,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: MessageCircle,
      titleEn: 'WhatsApp',
      titleHi: 'व्हाट्सएप',
      value: BUSINESS.whatsapp,
      href: `${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I want to book a taxi.')}`,
      color: 'bg-green-50 text-green-600',
      external: true,
    },
    {
      icon: Mail,
      titleEn: 'Email',
      titleHi: 'ईमेल',
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <a
            key={i}
            href={card.href}
            target={card.external ? '_blank' : undefined}
            rel={card.external ? 'noopener noreferrer' : undefined}
            className={`card-premium p-6 text-center group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="font-semibold text-dark-900 mb-1">{lang === 'hi' ? card.titleHi : card.titleEn}</h3>
            <p className="text-dark-600 text-sm">{card.value}</p>
            {card.secondaryValue && <p className="text-dark-400 text-sm">{card.secondaryValue}</p>}
          </a>
        );
      })}
    </div>
  );
}
