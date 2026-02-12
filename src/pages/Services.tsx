import { Link } from 'react-router-dom';
import { Plane, Clock, MapPin, Building2, PartyPopper, Train, Check, ArrowRight, Landmark, Users, Briefcase } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { t } from '../data/translations';
import { IMAGES, WHATSAPP_BASE_URL, BUSINESS } from '../data/constants';
import { DILLI_DARSHAN_PACKAGE, DILLI_DARSHAN_LOCATIONS } from '../data/routes';
import PageHero from '../components/ui/PageHero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Plane, titleKey: 'serviceAirport', descKey: 'serviceAirportDesc',
    image: IMAGES.airport,
    detailsEn: ['24/7 availability', 'Flight status tracking', 'Meet & greet at terminal', 'All-inclusive pricing', 'Sedan from ₹2,200', 'Free waiting up to 30 min'],
    detailsHi: ['24/7 उपलब्धता', 'फ्लाइट स्टेटस ट्रैकिंग', 'टर्मिनल पर मिलें और अभिवादन', 'सब-समावेशी मूल्य', 'सेडान ₹2,200 से', '30 मिनट तक फ्री वेटिंग'],
  },
  {
    icon: Clock, titleKey: 'serviceLocal', descKey: 'serviceLocalDesc',
    image: IMAGES.delhiSkyline,
    detailsEn: ['8hr/80km & 12hr/120km packages', 'Flexible hourly rentals', 'Shopping, meetings, sightseeing', 'AC cars with professional drivers', 'Sedan from ₹1,600', 'Extra km at ₹12/km'],
    detailsHi: ['8hr/80km & 12hr/120km पैकेज', 'लचीली घंटे की रेंटल', 'शॉपिंग, मीटिंग, दर्शनीय स्थल', 'प्रोफेशनल ड्राइवर के साथ AC कार', 'सेडान ₹1,600 से', 'अतिरिक्त km ₹12/km'],
  },
  {
    icon: MapPin, titleKey: 'serviceOutstation', descKey: 'serviceOutstationDesc',
    image: IMAGES.road,
    detailsEn: ['One-way & round trips', 'Minimum 250 km/day billing', 'All India coverage', 'Per km transparent pricing', 'Sedan from ₹12/km', 'Experienced long-distance drivers'],
    detailsHi: ['वन-वे और राउंड ट्रिप', 'न्यूनतम 250 km/दिन बिलिंग', 'पूरे भारत में कवरेज', 'प्रति km पारदर्शी मूल्य', 'सेडान ₹12/km से', 'अनुभवी लंबी दूरी के ड्राइवर'],
  },
  {
    icon: Building2, titleKey: 'serviceCorporate', descKey: 'serviceCorporateDesc',
    image: IMAGES.corporate,
    detailsEn: ['Monthly packages from ₹40,000', '2,500 km & 240 hrs included', 'Dedicated driver', '24 working days/month', 'Flexible extra usage billing', 'Custom corporate agreements'],
    detailsHi: ['मासिक पैकेज ₹40,000 से', '2,500 km और 240 घंटे शामिल', 'समर्पित ड्राइवर', '24 कार्य दिवस/महीना', 'लचीली अतिरिक्त उपयोग बिलिंग', 'कस्टम कॉर्पोरेट समझौते'],
  },
  {
    icon: PartyPopper, titleKey: 'serviceWedding', descKey: 'serviceWeddingDesc',
    image: IMAGES.wedding,
    detailsEn: ['Decorated cars available', 'Innova Crysta for weddings', 'Multi-day event support', 'Guest transportation', 'Customizable packages', 'Professional chauffeurs'],
    detailsHi: ['सजी हुई गाड़ियां उपलब्ध', 'शादियों के लिए इनोवा क्रिस्टा', 'मल्टी-डे इवेंट सपोर्ट', 'मेहमान परिवहन', 'कस्टमाइज़ पैकेज', 'प्रोफेशनल ड्राइवर'],
  },
  {
    icon: Train, titleKey: 'serviceRailway', descKey: 'serviceRailwayDesc',
    image: IMAGES.delhiSkyline,
    detailsEn: ['All Delhi railway stations', 'New Delhi, Old Delhi, Nizamuddin', 'Train status tracking', 'Early morning & late night', 'Affordable fixed rates', 'Meet at platform exit'],
    detailsHi: ['सभी दिल्ली रेलवे स्टेशन', 'नई दिल्ली, पुरानी दिल्ली, निजामुद्दीन', 'ट्रेन स्टेटस ट्रैकिंग', 'सुबह जल्दी और रात देर तक', 'किफायती फिक्स्ड रेट', 'प्लेटफॉर्म एक्जिट पर मिलें'],
  },
];

export default function Services() {
  const { lang } = useLang();

  return (
    <>
      <PageHero titleKey="servicesTitle" subtitleKey="servicesSubtitle" translations={t} image={IMAGES.delhiSkyline} />

      <DilliDarshanServiceCard lang={lang} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, i) => (
              <ServiceBlock key={i} service={service} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle[lang]}</h2>
          <p className="text-dark-300 mb-8 max-w-lg mx-auto">{t.ctaSubtitle[lang]}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary text-base px-10 py-4">{t.callNow[lang]}</a>
            <a href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I need taxi service.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all">{t.whatsappUs[lang]}</a>
          </div>
        </div>
      </section>
    </>
  );
}

function DilliDarshanServiceCard({ lang }: { lang: 'en' | 'hi' }) {
  const { ref, isVisible } = useScrollAnimation();
  const pkg = DILLI_DARSHAN_PACKAGE;
  const displayLocations = DILLI_DARSHAN_LOCATIONS.slice(0, 7);

  return (
    <section className="section-padding bg-gradient-to-br from-brand-50 to-white">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl border border-brand-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-brand-500 text-white text-xs font-medium rounded-full">
                      {t.popular[lang]}
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-dark-900 mb-2">{t.dilliDarshanTitle[lang]}</h2>
                <p className="text-dark-500 mb-6">{t.dilliDarshanPreviewDesc[lang]}</p>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-dark-700">
                    <MapPin className="w-4 h-4 text-brand-500" />
                    <span className="font-medium">{pkg.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-dark-700">
                    <Clock className="w-4 h-4 text-brand-500" />
                    <span className="font-medium">{pkg.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {pkg.vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="bg-dark-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-dark-400" />
                        <span className="text-xs text-dark-500">{vehicle.capacity}</span>
                      </div>
                      <span className="text-sm font-medium text-dark-700 block mb-1">
                        {lang === 'hi' ? vehicle.typeHi : vehicle.typeEn}
                      </span>
                      <span className="text-xl font-bold text-dark-900">{vehicle.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-900 mb-3">{t.whatsIncluded[lang]}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {(lang === 'hi' ? pkg.includedHi : pkg.includedEn).slice(0, 6).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-dark-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Hi, I want to book a Dilli Darshan package for Delhi sightseeing.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {t.bookDilliDarshan[lang]} <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link to="/routes" className="btn-secondary">
                    {t.viewDetails[lang]}
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 bg-dark-900 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-white mb-6">{t.locationsCovered[lang]}</h3>
                <div className="grid grid-cols-4 gap-3">
                  {displayLocations.map((location) => (
                    <div key={location.id} className="group text-center">
                      <div className="relative w-14 h-14 mx-auto mb-2 rounded-full overflow-hidden ring-2 ring-dark-700 group-hover:ring-brand-400 transition-all">
                        <img
                          src={location.image}
                          alt={location.nameEn}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-xs text-dark-300 leading-tight block">
                        {lang === 'hi' ? location.nameHi : location.nameEn}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-dark-400 text-sm mt-4 text-center">
                  + {t.extraCharges[lang]}: ₹150/hr, ₹12-22/km
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({ service, lang, index }: {
  service: typeof services[0];
  lang: 'en' | 'hi';
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = service.icon;
  const reversed = index % 2 === 1;
  const details = lang === 'hi' ? service.detailsHi : service.detailsEn;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`relative rounded-2xl overflow-hidden h-64 lg:h-80 ${reversed ? 'lg:order-2' : ''}`}>
        <img src={service.image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent" />
      </div>
      <div className={reversed ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-dark-900">{t[service.titleKey]?.[lang]}</h3>
        </div>
        <p className="text-dark-500 mb-5">{t[service.descKey]?.[lang]}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {details.map((d, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-dark-600">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
        <a
          href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Hi, I'm interested in ${t[service.titleKey]?.en} service.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {t.bookNow[lang]} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
