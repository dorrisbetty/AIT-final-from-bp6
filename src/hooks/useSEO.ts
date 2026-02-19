import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://allindiataxiservice.in';
const DEFAULT_IMAGE = '/images/services/outstation-tips.jpg';
const SITE_NAME = 'All India Taxi Service';

export function useSEO({
  title,
  description,
  keywords,
  canonicalPath = '',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) {
      setMeta('keywords', keywords);
    }

    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

    const canonicalUrl = `${BASE_URL}${canonicalPath}`;
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', fullOgImage, true);
    setMeta('og:image:secure_url', fullOgImage, true);
    setMeta('og:image:type', 'image/jpeg', true);
    setMeta('og:image:width', '1536', true);
    setMeta('og:image:height', '1024', true);
    setMeta('og:image:alt', fullTitle, true);

    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', fullOgImage);

    return () => {};
  }, [title, description, keywords, canonicalPath, ogImage, ogType, noIndex]);
}

export const SEO_DATA = {
  home: {
    title: '24/7 Cab Booking in Greater Noida, Delhi NCR | Airport Transfer, Outstation',
    description: 'All India Taxi Service - Best 24/7 cab booking in Greater Noida, Noida, Delhi NCR. Airport transfers from ₹2,200, outstation trips to Agra, Jaipur, Haridwar, Rishikesh, Manali, Shimla. Call 9718437625.',
    keywords: 'taxi Greater Noida, cab Noida, Delhi NCR taxi, airport transfer, outstation cab, Agra taxi, Jaipur cab, Haridwar taxi, 24/7 cab booking',
  },
  services: {
    title: 'Taxi Services - Airport Transfer, Outstation, Local Rental, Corporate',
    description: 'Complete taxi services in Delhi NCR - Airport pickup/drop, outstation trips, local hourly rental (8hr/80km, 12hr/120km), corporate car rental, wedding car hire, railway station transfer. Sedan, SUV, Innova Crysta.',
    keywords: 'airport taxi Delhi, outstation cab service, local taxi rental, corporate car hire, wedding car Delhi, railway station taxi, Dilli Darshan tour',
  },
  fleet: {
    title: 'Our Fleet - Sedan, SUV, Innova Crysta | Book AC Cab',
    description: 'Choose from our well-maintained fleet - Sedan (Dzire, Aura, Xcent), XL/SUV (Ertiga, XL6), Premium SUV (Innova Crysta). All AC cars with professional drivers. Book for airport, outstation, local trips.',
    keywords: 'Innova Crysta hire, Dzire cab booking, Ertiga taxi, SUV rental Delhi, AC cab Greater Noida, sedan taxi Noida',
  },
  pricing: {
    title: 'Taxi Rates & Pricing - Transparent Fares | No Hidden Charges',
    description: 'Transparent taxi pricing in Delhi NCR. Local: Sedan ₹1,600 (8hr/80km). Outstation: ₹12/km. Airport: from ₹2,200. Corporate monthly from ₹40,000. No hidden charges. Toll, parking extra.',
    keywords: 'taxi fare Greater Noida, cab rates Noida, outstation taxi price, airport transfer cost, corporate cab rates, taxi charges Delhi NCR',
  },
  routes: {
    title: 'Outstation Taxi Routes - Agra, Jaipur, Haridwar, Rishikesh, Manali',
    description: 'Book outstation taxi from Delhi NCR to 40+ destinations. Agra ₹2,500, Jaipur ₹3,360, Haridwar ₹2,520, Rishikesh ₹2,880, Manali ₹6,480, Shimla ₹4,200, Nainital ₹3,600. One-way & round trip.',
    keywords: 'Delhi to Agra taxi, Delhi to Jaipur cab, Delhi to Haridwar taxi, Delhi to Rishikesh cab, Delhi to Manali taxi, Delhi to Shimla cab, Delhi to Nainital taxi, Delhi to Varanasi cab, Delhi to Ayodhya taxi',
  },
  about: {
    title: 'About Us - 10+ Years Experience | Trusted Taxi Service',
    description: 'All India Taxi Service - Trusted taxi provider in Greater Noida since 2016. 10+ years experience, 5-star rated, 24/7 service. Owner Brajkishor Prajapati. Professional drivers, clean AC cars.',
    keywords: 'taxi service Greater Noida, cab company Noida, trusted taxi Delhi NCR, professional drivers, experienced taxi service',
  },
  contact: {
    title: 'Contact Us - Book Taxi | Call 9718437625 | WhatsApp',
    description: 'Contact All India Taxi Service for bookings. Call: 9718437625, 9354958169. WhatsApp available. Address: L232, L Block, Delta II, Greater Noida. 24/7 support. Book via call, WhatsApp, or online form.',
    keywords: 'taxi booking number Greater Noida, cab contact Noida, taxi WhatsApp booking, 24/7 taxi helpline Delhi NCR',
  },
  faq: {
    title: 'FAQ - Booking, Pricing, Cancellation, Safety | Common Questions',
    description: 'Frequently asked questions about All India Taxi Service. How to book, pricing details, cancellation policy, vehicle types, driver verification, outstation rules, payment methods, safety measures.',
    keywords: 'taxi booking FAQ, cab service questions, outstation rules, taxi cancellation policy, payment methods taxi',
  },
};

export const getRoutePageSEO = (destination: string, distance: string, fare: string) => ({
  title: `Delhi to ${destination} Taxi - ${fare} | Book Outstation Cab`,
  description: `Book taxi from Delhi/Greater Noida to ${destination}. Distance: ${distance}. Sedan fare from ${fare}. One-way & round trip. 24/7 booking. Call 9718437625. AC cars, professional drivers.`,
  keywords: `Delhi to ${destination} taxi, Greater Noida to ${destination} cab, ${destination} taxi booking, ${destination} outstation cab`,
});
