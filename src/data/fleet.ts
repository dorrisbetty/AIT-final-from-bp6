import { IMAGES } from './constants';

export interface Vehicle {
  id: string;
  nameEn: string;
  nameHi: string;
  models: string[];
  capacity: number;
  image: string;
  descriptionEn: string;
  descriptionHi: string;
  features: string[];
  featuresHi: string[];
  perKm: number;
  idealForEn: string[];
  idealForHi: string[];
}

export const FLEET: Vehicle[] = [
  {
    id: 'sedan',
    nameEn: 'Sedan',
    nameHi: 'सेडान',
    models: ['Dzire', 'Aura', 'Xcent'],
    capacity: 4,
    image: IMAGES.sedan,
    descriptionEn: 'Comfortable and fuel-efficient sedans perfect for city rides, airport transfers, and small family trips.',
    descriptionHi: 'शहर की सवारी, एयरपोर्ट ट्रांसफर और छोटे परिवार की यात्राओं के लिए आरामदायक और ईंधन-कुशल सेडान।',
    features: ['AC', 'Music System', '3 Luggage Bags', 'Phone Charger', 'Clean Interiors', 'GPS Tracking'],
    featuresHi: ['AC', 'म्यूजिक सिस्टम', '3 सामान बैग', 'फोन चार्जर', 'साफ इंटीरियर', 'GPS ट्रैकिंग'],
    perKm: 12,
    idealForEn: ['Airport Transfers', 'City Rides', 'Small Family Trips', 'Business Travel'],
    idealForHi: ['एयरपोर्ट ट्रांसफर', 'शहर की सवारी', 'छोटी पारिवारिक यात्रा', 'बिजनेस ट्रैवल'],
  },
  {
    id: 'xl',
    nameEn: 'XL / SUV',
    nameHi: 'XL / SUV',
    models: ['Maruti Suzuki XL6', 'Ertiga'],
    capacity: 6,
    image: IMAGES.suv,
    descriptionEn: 'Spacious SUVs with extra room for families and groups. Ideal for outstation trips and comfortable long-distance travel.',
    descriptionHi: 'परिवार और समूहों के लिए अतिरिक्त जगह वाली विशाल SUV। आउटस्टेशन यात्रा और लंबी दूरी की आरामदायक यात्रा के लिए आदर्श।',
    features: ['AC', 'Music System', '4 Luggage Bags', 'Phone Charger', 'Spacious Cabin', 'GPS Tracking'],
    featuresHi: ['AC', 'म्यूजिक सिस्टम', '4 सामान बैग', 'फोन चार्जर', 'विशाल केबिन', 'GPS ट्रैकिंग'],
    perKm: 15,
    idealForEn: ['Family Trips', 'Group Travel', 'Outstation', 'Weekend Getaways'],
    idealForHi: ['पारिवारिक यात्रा', 'ग्रुप ट्रैवल', 'आउटस्टेशन', 'वीकेंड गेटअवे'],
  },
  {
    id: 'premium',
    nameEn: 'Premium SUV',
    nameHi: 'प्रीमियम SUV',
    models: ['Innova Crysta'],
    capacity: 7,
    image: IMAGES.premiumSuv,
    descriptionEn: 'The flagship Innova Crysta offers premium comfort for VIP travel, corporate rides, and luxury outstation journeys.',
    descriptionHi: 'फ्लैगशिप इनोवा क्रिस्टा VIP यात्रा, कॉर्पोरेट राइड और लक्जरी आउटस्टेशन यात्राओं के लिए प्रीमियम आराम प्रदान करती है।',
    features: ['AC', 'Premium Sound', '5 Luggage Bags', 'Phone Charger', 'Captain Seats', 'GPS Tracking', 'First Aid Kit'],
    featuresHi: ['AC', 'प्रीमियम साउंड', '5 सामान बैग', 'फोन चार्जर', 'कैप्टन सीट्स', 'GPS ट्रैकिंग', 'फर्स्ट एड किट'],
    perKm: 22,
    idealForEn: ['VIP Travel', 'Corporate', 'Wedding', 'Long Outstation', 'Large Families'],
    idealForHi: ['VIP ट्रैवल', 'कॉर्पोरेट', 'शादी', 'लंबी आउटस्टेशन', 'बड़े परिवार'],
  },
];
