export interface FAQItem {
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
  categoryEn: string;
  categoryHi: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    categoryEn: 'Booking',
    categoryHi: 'बुकिंग',
    questionEn: 'How can I book a taxi?',
    questionHi: 'मैं टैक्सी कैसे बुक कर सकता हूं?',
    answerEn: 'You can book a taxi by calling us at 9718437625, sending a WhatsApp message to the same number, or using the booking form on our website. We are available 24/7.',
    answerHi: 'आप 9718437625 पर कॉल करके, उसी नंबर पर व्हाट्सएप मैसेज भेजकर, या हमारी वेबसाइट पर बुकिंग फॉर्म का उपयोग करके टैक्सी बुक कर सकते हैं। हम 24/7 उपलब्ध हैं।',
  },
  {
    categoryEn: 'Booking',
    categoryHi: 'बुकिंग',
    questionEn: 'How far in advance should I book?',
    questionHi: 'मुझे कितने पहले बुकिंग करनी चाहिए?',
    answerEn: 'For local trips, you can book even 30 minutes before. For outstation trips, we recommend booking at least 2-3 hours in advance. For peak season or long trips, 24 hours advance booking is preferred.',
    answerHi: 'लोकल ट्रिप के लिए, आप 30 मिनट पहले भी बुक कर सकते हैं। आउटस्टेशन ट्रिप के लिए, हम कम से कम 2-3 घंटे पहले बुकिंग की सलाह देते हैं। पीक सीजन या लंबी यात्राओं के लिए, 24 घंटे पहले बुकिंग बेहतर है।',
  },
  {
    categoryEn: 'Booking',
    categoryHi: 'बुकिंग',
    questionEn: 'Can I book for a one-way outstation trip?',
    questionHi: 'क्या मैं वन-वे आउटस्टेशन ट्रिप बुक कर सकता हूं?',
    answerEn: 'Yes, we offer both one-way and round-trip outstation services. One-way trips are charged based on the actual distance traveled with a minimum billing of 250 km per day.',
    answerHi: 'हां, हम वन-वे और राउंड-ट्रिप दोनों आउटस्टेशन सेवाएं प्रदान करते हैं। वन-वे ट्रिप प्रतिदिन न्यूनतम 250 km बिलिंग के साथ वास्तविक दूरी के आधार पर चार्ज की जाती है।',
  },
  {
    categoryEn: 'Pricing',
    categoryHi: 'दरें',
    questionEn: 'Are there any hidden charges?',
    questionHi: 'क्या कोई छिपे हुए शुल्क हैं?',
    answerEn: 'No, we believe in transparent pricing. The only additional charges that may apply are toll taxes, parking fees, state taxes (for outstation), and driver night allowance of ₹400 after 10 PM. All these are communicated upfront.',
    answerHi: 'नहीं, हम पारदर्शी मूल्य निर्धारण में विश्वास करते हैं। केवल अतिरिक्त शुल्क जो लग सकते हैं वे हैं टोल टैक्स, पार्किंग शुल्क, राज्य कर (आउटस्टेशन के लिए), और रात 10 बजे के बाद ₹400 ड्राइवर नाइट अलाउंस। ये सभी पहले से बता दिए जाते हैं।',
  },
  {
    categoryEn: 'Pricing',
    categoryHi: 'दरें',
    questionEn: 'What payment methods do you accept?',
    questionHi: 'आप कौन से भुगतान तरीके स्वीकार करते हैं?',
    answerEn: 'We accept cash, UPI (PhonePe, Google Pay, Paytm), and bank transfers. Payment is typically made at the end of the trip or as agreed during booking.',
    answerHi: 'हम कैश, UPI (PhonePe, Google Pay, Paytm), और बैंक ट्रांसफर स्वीकार करते हैं। भुगतान आमतौर पर यात्रा के अंत में या बुकिंग के दौरान सहमति के अनुसार किया जाता है।',
  },
  {
    categoryEn: 'Pricing',
    categoryHi: 'दरें',
    questionEn: 'How is the fare calculated for local packages?',
    questionHi: 'लोकल पैकेज का किराया कैसे गिना जाता है?',
    answerEn: 'Local packages are based on km and hours (e.g., 80km/8hrs). Whichever limit is reached first determines any extra charges. Extra km and extra hours are charged separately at the applicable rate.',
    answerHi: 'लोकल पैकेज km और घंटों पर आधारित होते हैं (जैसे, 80km/8hrs)। जो भी सीमा पहले पूरी होती है, उसके अनुसार अतिरिक्त शुल्क लगता है। अतिरिक्त km और अतिरिक्त घंटे लागू दर पर अलग से चार्ज किए जाते हैं।',
  },
  {
    categoryEn: 'Fleet',
    categoryHi: 'गाड़ियां',
    questionEn: 'What types of cars are available?',
    questionHi: 'कौन-कौन सी गाड़ियां उपलब्ध हैं?',
    answerEn: 'We offer three categories: Sedan (Dzire, Aura, Xcent - 4 passengers), XL/SUV (XL6, Ertiga - 6 passengers), and Premium SUV (Innova Crysta - 7 passengers). All vehicles are yellow plate registered and fully compliant.',
    answerHi: 'हम तीन श्रेणियां प्रदान करते हैं: सेडान (Dzire, Aura, Xcent - 4 यात्री), XL/SUV (XL6, Ertiga - 6 यात्री), और प्रीमियम SUV (Innova Crysta - 7 यात्री)। सभी वाहन पीली प्लेट पंजीकृत और पूरी तरह से अनुपालन वाले हैं।',
  },
  {
    categoryEn: 'Fleet',
    categoryHi: 'गाड़ियां',
    questionEn: 'Are the vehicles clean and well-maintained?',
    questionHi: 'क्या गाड़ियां साफ और अच्छी तरह से रखी गई हैं?',
    answerEn: 'Yes, all our vehicles are regularly serviced and deep cleaned. We ensure AC, music system, and all amenities are working before every trip. Hygiene is our top priority.',
    answerHi: 'हां, हमारी सभी गाड़ियों की नियमित सर्विसिंग और डीप क्लीनिंग होती है। हम हर ट्रिप से पहले AC, म्यूजिक सिस्टम और सभी सुविधाओं की जांच करते हैं। स्वच्छता हमारी सर्वोच्च प्राथमिकता है।',
  },
  {
    categoryEn: 'Safety',
    categoryHi: 'सुरक्षा',
    questionEn: 'Are your drivers verified and experienced?',
    questionHi: 'क्या आपके ड्राइवर सत्यापित और अनुभवी हैं?',
    answerEn: 'Yes, all our drivers have valid commercial driving licenses, are police verified, and have years of driving experience. Our owner Brajkishor Prajapati himself has 10+ years of experience in the transport industry.',
    answerHi: 'हां, हमारे सभी ड्राइवरों के पास वैध वाणिज्यिक ड्राइविंग लाइसेंस हैं, पुलिस सत्यापित हैं, और कई वर्षों का ड्राइविंग अनुभव है। हमारे मालिक ब्रजकिशोर प्रजापति को स्वयं परिवहन उद्योग में 10+ वर्षों का अनुभव है।',
  },
  {
    categoryEn: 'Safety',
    categoryHi: 'सुरक्षा',
    questionEn: 'Is it safe to travel at night?',
    questionHi: 'क्या रात में यात्रा करना सुरक्षित है?',
    answerEn: 'Yes, we provide safe 24/7 service including night travel. All vehicles have GPS tracking and our drivers are experienced with night driving. A driver night allowance of ₹400 applies after 10 PM.',
    answerHi: 'हां, हम रात की यात्रा सहित 24/7 सुरक्षित सेवा प्रदान करते हैं। सभी वाहनों में GPS ट्रैकिंग है और हमारे ड्राइवर रात की ड्राइविंग में अनुभवी हैं। रात 10 बजे के बाद ₹400 ड्राइवर नाइट अलाउंस लागू होता है।',
  },
  {
    categoryEn: 'Safety',
    categoryHi: 'सुरक्षा',
    questionEn: 'Do you provide child/baby seats?',
    questionHi: 'क्या आप चाइल्ड/बेबी सीट प्रदान करते हैं?',
    answerEn: 'Child seats are not included by default, but if you need one, please mention it during booking and we will try our best to arrange it.',
    answerHi: 'चाइल्ड सीट डिफ़ॉल्ट रूप से शामिल नहीं है, लेकिन यदि आपको चाहिए, तो कृपया बुकिंग के दौरान बताएं और हम इसकी व्यवस्था करने की पूरी कोशिश करेंगे।',
  },
  {
    categoryEn: 'Cancellation',
    categoryHi: 'रद्दीकरण',
    questionEn: 'What is your cancellation policy?',
    questionHi: 'आपकी रद्दीकरण नीति क्या है?',
    answerEn: 'You can cancel your booking free of charge up to 2 hours before the scheduled pickup time. For cancellations within 2 hours, a nominal cancellation fee may apply. Please contact us on WhatsApp for any changes.',
    answerHi: 'आप निर्धारित पिकअप समय से 2 घंटे पहले तक अपनी बुकिंग निःशुल्क रद्द कर सकते हैं। 2 घंटे के भीतर रद्दीकरण के लिए, एक मामूली रद्दीकरण शुल्क लग सकता है। किसी भी बदलाव के लिए कृपया व्हाट्सएप पर संपर्क करें।',
  },
  {
    categoryEn: 'Outstation',
    categoryHi: 'आउटस्टेशन',
    questionEn: 'What is the minimum billing for outstation trips?',
    questionHi: 'आउटस्टेशन ट्रिप के लिए न्यूनतम बिलिंग क्या है?',
    answerEn: 'The minimum billing for outstation trips is 250 km per day. For example, even if you travel only 200 km in a day, you will be charged for 250 km. This is a standard industry practice.',
    answerHi: 'आउटस्टेशन ट्रिप के लिए न्यूनतम बिलिंग प्रतिदिन 250 km है। उदाहरण के लिए, भले ही आप एक दिन में केवल 200 km यात्रा करें, आपसे 250 km का शुल्क लिया जाएगा। यह एक मानक उद्योग प्रथा है।',
  },
  {
    categoryEn: 'Outstation',
    categoryHi: 'आउटस्टेशन',
    questionEn: 'Can I travel to any city in India?',
    questionHi: 'क्या मैं भारत के किसी भी शहर में यात्रा कर सकता हूं?',
    answerEn: 'Yes! As the name suggests, All India Taxi Service provides outstation trips to anywhere in India. Whether it is a nearby city like Agra or a long-distance trip to Amritsar, we cover it all.',
    answerHi: 'हां! जैसा कि नाम से पता चलता है, ऑल इंडिया टैक्सी सर्विस भारत में कहीं भी आउटस्टेशन ट्रिप प्रदान करती है। चाहे आगरा जैसा नजदीकी शहर हो या अमृतसर जैसी लंबी दूरी की यात्रा, हम सब कवर करते हैं।',
  },
  {
    categoryEn: 'Outstation',
    categoryHi: 'आउटस्टेशन',
    questionEn: 'Do you provide multi-day outstation packages?',
    questionHi: 'क्या आप मल्टी-डे आउटस्टेशन पैकेज प्रदान करते हैं?',
    answerEn: 'Yes, we offer multi-day packages for trips like Char Dham Yatra, Vaishno Devi, Rajasthan tours, and more. These are customized based on your itinerary. Contact us for a personalized quote.',
    answerHi: 'हां, हम चार धाम यात्रा, वैष्णो देवी, राजस्थान टूर आदि जैसी यात्राओं के लिए मल्टी-डे पैकेज प्रदान करते हैं। ये आपके यात्रा कार्यक्रम के आधार पर अनुकूलित किए जाते हैं। व्यक्तिगत उद्धरण के लिए हमसे संपर्क करें।',
  },
  {
    categoryEn: 'Booking',
    categoryHi: 'बुकिंग',
    questionEn: 'Do you provide airport pickup and drop?',
    questionHi: 'क्या आप एयरपोर्ट पिकअप और ड्रॉप प्रदान करते हैं?',
    answerEn: 'Yes, we provide 24/7 airport pickup and drop services for Delhi IGI Airport. Our drivers track your flight status for pickups and ensure timely service.',
    answerHi: 'हां, हम दिल्ली IGI एयरपोर्ट के लिए 24/7 एयरपोर्ट पिकअप और ड्रॉप सेवाएं प्रदान करते हैं। हमारे ड्राइवर पिकअप के लिए आपकी फ्लाइट की स्थिति ट्रैक करते हैं और समय पर सेवा सुनिश्चित करते हैं।',
  },
];

export const FAQ_CATEGORIES = [
  { en: 'All', hi: 'सभी' },
  { en: 'Booking', hi: 'बुकिंग' },
  { en: 'Pricing', hi: 'दरें' },
  { en: 'Fleet', hi: 'गाड़ियां' },
  { en: 'Safety', hi: 'सुरक्षा' },
  { en: 'Cancellation', hi: 'रद्दीकरण' },
  { en: 'Outstation', hi: 'आउटस्टेशन' },
];
