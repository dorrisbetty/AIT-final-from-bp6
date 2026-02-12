import { IMAGES } from './constants';

export interface TaxiRoute {
  id: string;
  destinationEn: string;
  destinationHi: string;
  distance: string;
  duration: string;
  categoryEn: string;
  categoryHi: string;
  sedanFare: string;
  image: string;
  descriptionEn: string;
  descriptionHi: string;
}

export const ROUTES: TaxiRoute[] = [
  {
    id: 'agra',
    destinationEn: 'Agra',
    destinationHi: 'आगरा',
    distance: '210 km',
    duration: '3-4 hrs',
    categoryEn: 'Heritage',
    categoryHi: 'विरासत',
    sedanFare: '₹2,500',
    image: IMAGES.agra,
    descriptionEn: 'Visit the iconic Taj Mahal and Agra Fort. One of the most popular day trips from Delhi NCR.',
    descriptionHi: 'प्रतिष्ठित ताज महल और आगरा किले का दौरा करें। दिल्ली NCR से सबसे लोकप्रिय दिन की यात्राओं में से एक।',
  },
  {
    id: 'jaipur',
    destinationEn: 'Jaipur',
    destinationHi: 'जयपुर',
    distance: '280 km',
    duration: '4-5 hrs',
    categoryEn: 'Heritage',
    categoryHi: 'विरासत',
    sedanFare: '₹3,360',
    image: IMAGES.jaipur,
    descriptionEn: 'The Pink City with stunning palaces, forts, and vibrant bazaars. A royal Rajasthani experience.',
    descriptionHi: 'शानदार महलों, किलों और जीवंत बाजारों वाला गुलाबी शहर। एक शाही राजस्थानी अनुभव।',
  },
  {
    id: 'rishikesh',
    destinationEn: 'Rishikesh',
    destinationHi: 'ऋषिकेश',
    distance: '240 km',
    duration: '5-6 hrs',
    categoryEn: 'Pilgrimage',
    categoryHi: 'तीर्थ',
    sedanFare: '₹2,880',
    image: IMAGES.rishikesh,
    descriptionEn: 'The Yoga Capital of the World on the banks of the Ganges. Perfect for spiritual seekers and adventure lovers.',
    descriptionHi: 'गंगा के तट पर विश्व की योग राजधानी। आध्यात्मिक साधकों और साहसिक प्रेमियों के लिए बिल्कुल सही।',
  },
  {
    id: 'manali',
    destinationEn: 'Kullu-Manali',
    destinationHi: 'कुल्लू-मनाली',
    distance: '540 km',
    duration: '10-12 hrs',
    categoryEn: 'Hill Station',
    categoryHi: 'हिल स्टेशन',
    sedanFare: '₹6,480',
    image: IMAGES.manali,
    descriptionEn: 'Snow-capped mountains, lush valleys, and adventure sports. The ultimate Himalayan getaway.',
    descriptionHi: 'बर्फ से ढकी चोटियां, हरी-भरी घाटियां और एडवेंचर स्पोर्ट्स। परम हिमालयी पलायन।',
  },
  {
    id: 'nainital',
    destinationEn: 'Nainital',
    destinationHi: 'नैनीताल',
    distance: '300 km',
    duration: '6-7 hrs',
    categoryEn: 'Hill Station',
    categoryHi: 'हिल स्टेशन',
    sedanFare: '₹3,600',
    image: IMAGES.nainital,
    descriptionEn: 'The Lake District of India with beautiful Naini Lake, boating, and stunning Himalayan views.',
    descriptionHi: 'सुंदर नैनी झील, नौका विहार और शानदार हिमालयी दृश्यों के साथ भारत का लेक डिस्ट्रिक्ट।',
  },
  {
    id: 'shimla',
    destinationEn: 'Shimla',
    destinationHi: 'शिमला',
    distance: '350 km',
    duration: '7-8 hrs',
    categoryEn: 'Hill Station',
    categoryHi: 'हिल स्टेशन',
    sedanFare: '₹4,200',
    image: IMAGES.shimla,
    descriptionEn: 'The Queen of Hills with colonial charm, Mall Road, and breathtaking mountain scenery.',
    descriptionHi: 'औपनिवेशिक आकर्षण, मॉल रोड और लुभावने पर्वतीय दृश्यों वाली पहाड़ों की रानी।',
  },
  {
    id: 'haridwar',
    destinationEn: 'Haridwar',
    destinationHi: 'हरिद्वार',
    distance: '210 km',
    duration: '4-5 hrs',
    categoryEn: 'Pilgrimage',
    categoryHi: 'तीर्थ',
    sedanFare: '₹2,520',
    image: IMAGES.rishikesh,
    descriptionEn: 'One of the holiest cities in India. Experience the divine Ganga Aarti at Har Ki Pauri.',
    descriptionHi: 'भारत के सबसे पवित्र शहरों में से एक। हर की पौड़ी पर दिव्य गंगा आरती का अनुभव करें।',
  },
  {
    id: 'amritsar',
    destinationEn: 'Amritsar',
    destinationHi: 'अमृतसर',
    distance: '470 km',
    duration: '7-8 hrs',
    categoryEn: 'Pilgrimage',
    categoryHi: 'तीर्थ',
    sedanFare: '₹5,640',
    image: IMAGES.amritsar,
    descriptionEn: 'Home of the Golden Temple. Experience Sikh heritage, Wagah Border ceremony, and legendary street food.',
    descriptionHi: 'स्वर्ण मंदिर का घर। सिख विरासत, वाघा बॉर्डर समारोह और प्रसिद्ध स्ट्रीट फूड का अनुभव करें।',
  },
  {
    id: 'mussoorie',
    destinationEn: 'Mussoorie',
    destinationHi: 'मसूरी',
    distance: '280 km',
    duration: '6-7 hrs',
    categoryEn: 'Hill Station',
    categoryHi: 'हिल स्टेशन',
    sedanFare: '₹3,360',
    image: IMAGES.mussoorie,
    descriptionEn: 'The Queen of Hills in Uttarakhand. Perfect weekend getaway with stunning views of Doon Valley.',
    descriptionHi: 'उत्तराखंड की पहाड़ों की रानी। दून घाटी के शानदार दृश्यों के साथ बिल्कुल सही वीकेंड गेटअवे।',
  },
  {
    id: 'mathura',
    destinationEn: 'Mathura-Vrindavan',
    destinationHi: 'मथुरा-वृंदावन',
    distance: '160 km',
    duration: '2-3 hrs',
    categoryEn: 'Pilgrimage',
    categoryHi: 'तीर्थ',
    sedanFare: '₹1,920',
    image: IMAGES.varanasi,
    descriptionEn: 'The birthplace of Lord Krishna. Visit ancient temples, ghats, and experience divine spirituality.',
    descriptionHi: 'भगवान कृष्ण की जन्मभूमि। प्राचीन मंदिरों, घाटों का दर्शन करें और दिव्य आध्यात्मिकता का अनुभव करें।',
  },
  {
    id: 'chandigarh',
    destinationEn: 'Chandigarh',
    destinationHi: 'चंडीगढ़',
    distance: '250 km',
    duration: '4-5 hrs',
    categoryEn: 'Weekend Getaway',
    categoryHi: 'वीकेंड गेटअवे',
    sedanFare: '₹3,000',
    image: IMAGES.chandigarh,
    descriptionEn: 'The City Beautiful with Rock Garden, Sukhna Lake, and modern urban planning.',
    descriptionHi: 'रॉक गार्डन, सुखना लेक और आधुनिक शहरी नियोजन वाला सिटी ब्यूटीफुल।',
  },
  {
    id: 'dehradun',
    destinationEn: 'Dehradun',
    destinationHi: 'देहरादून',
    distance: '250 km',
    duration: '5-6 hrs',
    categoryEn: 'Hill Station',
    categoryHi: 'हिल स्टेशन',
    sedanFare: '₹3,000',
    image: IMAGES.dehradun,
    descriptionEn: 'Gateway to Mussoorie and Uttarakhand hills. Known for its pleasant climate and natural beauty.',
    descriptionHi: 'मसूरी और उत्तराखंड की पहाड़ियों का प्रवेश द्वार। अपनी सुखद जलवायु और प्राकृतिक सुंदरता के लिए जाना जाता है।',
  },
];

export const ROUTE_CATEGORIES = [
  { en: 'All', hi: 'सभी' },
  { en: 'Heritage', hi: 'विरासत' },
  { en: 'Hill Station', hi: 'हिल स्टेशन' },
  { en: 'Pilgrimage', hi: 'तीर्थ' },
  { en: 'Weekend Getaway', hi: 'वीकेंड गेटअवे' },
];

export interface DilliDarshanLocation {
  id: string;
  nameEn: string;
  nameHi: string;
  descriptionEn: string;
  descriptionHi: string;
  image: string;
}

export const DILLI_DARSHAN_LOCATIONS: DilliDarshanLocation[] = [
  {
    id: 'akshardham',
    nameEn: 'Akshardham',
    nameHi: 'अक्षरधाम',
    descriptionEn: 'A stunning Hindu temple complex showcasing traditional Indian culture, spirituality, and architecture.',
    descriptionHi: 'पारंपरिक भारतीय संस्कृति, आध्यात्मिकता और वास्तुकला को प्रदर्शित करने वाला एक शानदार हिंदू मंदिर परिसर।',
    image: 'https://images.pexels.com/photos/5458393/pexels-photo-5458393.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'red-fort',
    nameEn: 'Lal Qila (Red Fort)',
    nameHi: 'लाल किला',
    descriptionEn: 'UNESCO World Heritage Site and iconic Mughal fortress, the symbol of Indian independence.',
    descriptionHi: 'यूनेस्को विश्व धरोहर स्थल और प्रतिष्ठित मुगल किला, भारतीय स्वतंत्रता का प्रतीक।',
    image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'jama-masjid',
    nameEn: 'Jama Masjid',
    nameHi: 'जामा मस्जिद',
    descriptionEn: 'One of the largest mosques in India, built by Mughal Emperor Shah Jahan in the 17th century.',
    descriptionHi: 'भारत की सबसे बड़ी मस्जिदों में से एक, 17वीं शताब्दी में मुगल सम्राट शाहजहां द्वारा निर्मित।',
    image: 'https://images.pexels.com/photos/4428290/pexels-photo-4428290.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'india-gate',
    nameEn: 'India Gate',
    nameHi: 'इंडिया गेट',
    descriptionEn: 'War memorial dedicated to soldiers of the Indian Army, an iconic landmark of New Delhi.',
    descriptionHi: 'भारतीय सेना के सैनिकों को समर्पित युद्ध स्मारक, नई दिल्ली का प्रतिष्ठित स्थल।',
    image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'rashtrapati-bhavan',
    nameEn: 'Rashtrapati Bhavan',
    nameHi: 'राष्ट्रपति भवन',
    descriptionEn: 'Official residence of the President of India, an architectural marvel with Mughal Gardens.',
    descriptionHi: 'भारत के राष्ट्रपति का आधिकारिक निवास, मुगल गार्डन के साथ एक वास्तुशिल्प चमत्कार।',
    image: 'https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'qutub-minar',
    nameEn: 'Qutub Minar',
    nameHi: 'कुतुब मीनार',
    descriptionEn: 'UNESCO World Heritage Site, the tallest brick minaret in the world at 73 meters.',
    descriptionHi: 'यूनेस्को विश्व धरोहर स्थल, 73 मीटर ऊंचाई के साथ दुनिया की सबसे ऊंची ईंट की मीनार।',
    image: 'https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'lotus-temple',
    nameEn: 'Lotus Temple',
    nameHi: 'लोटस टेम्पल',
    descriptionEn: "Bahá'í House of Worship known for its flowerlike shape and serene atmosphere.",
    descriptionHi: 'अपने फूल जैसे आकार और शांत वातावरण के लिए प्रसिद्ध बहाई उपासना गृह।',
    image: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const SPECIAL_PACKAGES = [
  {
    id: 'chardham',
    nameEn: 'Char Dham Yatra',
    nameHi: 'चार धाम यात्रा',
    descriptionEn: 'Complete Char Dham pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath with experienced drivers.',
    descriptionHi: 'अनुभवी ड्राइवरों के साथ यमुनोत्री, गंगोत्री, केदारनाथ और बद्रीनाथ को कवर करने वाली पूर्ण चार धाम तीर्थयात्रा।',
    durationEn: '10-12 Days',
    durationHi: '10-12 दिन',
    image: IMAGES.rishikesh,
  },
  {
    id: 'vaishnodevi',
    nameEn: 'Vaishno Devi',
    nameHi: 'वैष्णो देवी',
    descriptionEn: 'Comfortable journey to the holy shrine of Mata Vaishno Devi in Katra, Jammu with round-trip service.',
    descriptionHi: 'कटरा, जम्मू में माता वैष्णो देवी के पवित्र मंदिर तक आरामदायक यात्रा, राउंड-ट्रिप सेवा के साथ।',
    durationEn: '3-4 Days',
    durationHi: '3-4 दिन',
    image: IMAGES.amritsar,
  },
];
