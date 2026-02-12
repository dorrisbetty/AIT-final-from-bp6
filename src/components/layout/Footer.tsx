import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../../data/constants';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../data/translations';

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center">
                <Car className="w-5 h-5 text-dark-900" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-white text-sm block">All India</span>
                <span className="text-brand-400 text-xs font-semibold block">Taxi Service</span>
              </div>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed">{t.footerTagline[lang]}</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{t.quickLinks[lang]}</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-dark-400 hover:text-brand-400 text-sm transition-colors">
                    {lang === 'hi' ? link.labelHi : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{t.ourServices[lang]}</h3>
            <ul className="space-y-2">
              {[t.serviceAirport, t.serviceLocal, t.serviceOutstation, t.serviceCorporate, t.serviceWedding, t.serviceRailway].map((s, i) => (
                <li key={i}>
                  <Link to="/services" className="text-dark-400 hover:text-brand-400 text-sm transition-colors">
                    {s[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">{t.contactInfo[lang]}</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 text-dark-400 hover:text-brand-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${BUSINESS.phoneSecondary}`} className="flex items-center gap-2 text-dark-400 hover:text-brand-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {BUSINESS.phoneSecondary}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-dark-400 hover:text-brand-400 text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-dark-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? BUSINESS.addressHi : BUSINESS.address}</span>
              </li>
              <li>
                <a
                  href={BUSINESS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-dark-500 text-xs">
          <span>&copy; {year} {BUSINESS.name}. {t.allRightsReserved[lang]}</span>
          <span>{lang === 'hi' ? BUSINESS.landmarkHi : BUSINESS.landmark}</span>
        </div>
      </div>
    </footer>
  );
}
