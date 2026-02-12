export interface AirportPrice {
  vehicleEn: string;
  vehicleHi: string;
  vehicleId: string;
  price: number;
}

export interface LocalPackage {
  km: number;
  hours: number;
  sedan: number;
  xl: number;
  premium: number;
}

export interface OutstationRate {
  vehicleEn: string;
  vehicleHi: string;
  vehicleId: string;
  perKm: number;
  minKmPerDay: number;
}

export interface MonthlyPackage {
  vehicleEn: string;
  vehicleHi: string;
  vehicleId: string;
  price: number;
  km: number;
  hours: number;
  days: number;
}

export interface ExtraCharge {
  labelEn: string;
  labelHi: string;
  sedan: string;
  xl: string;
  premium: string;
}

export const AIRPORT_PRICES: AirportPrice[] = [
  { vehicleEn: 'Sedan', vehicleHi: 'सेडान', vehicleId: 'sedan', price: 2200 },
  { vehicleEn: 'XL / SUV', vehicleHi: 'XL / SUV', vehicleId: 'xl', price: 2500 },
  { vehicleEn: 'Premium SUV', vehicleHi: 'प्रीमियम SUV', vehicleId: 'premium', price: 3500 },
];

export const LOCAL_PACKAGES: LocalPackage[] = [
  { km: 80, hours: 8, sedan: 1600, xl: 2500, premium: 3000 },
  { km: 120, hours: 12, sedan: 2500, xl: 3500, premium: 4500 },
];

export const OUTSTATION_RATES: OutstationRate[] = [
  { vehicleEn: 'Sedan', vehicleHi: 'सेडान', vehicleId: 'sedan', perKm: 12, minKmPerDay: 250 },
  { vehicleEn: 'XL / SUV', vehicleHi: 'XL / SUV', vehicleId: 'xl', perKm: 15, minKmPerDay: 250 },
  { vehicleEn: 'Premium SUV', vehicleHi: 'प्रीमियम SUV', vehicleId: 'premium', perKm: 22, minKmPerDay: 250 },
];

export const MONTHLY_PACKAGES: MonthlyPackage[] = [
  { vehicleEn: 'Sedan', vehicleHi: 'सेडान', vehicleId: 'sedan', price: 40000, km: 2500, hours: 240, days: 24 },
  { vehicleEn: 'XL / SUV', vehicleHi: 'XL / SUV', vehicleId: 'xl', price: 75000, km: 2500, hours: 240, days: 24 },
  { vehicleEn: 'Premium SUV', vehicleHi: 'प्रीमियम SUV', vehicleId: 'premium', price: 125000, km: 2500, hours: 240, days: 24 },
];

export const EXTRA_CHARGES: ExtraCharge[] = [
  { labelEn: 'Extra Hour', labelHi: 'अतिरिक्त घंटा', sedan: '₹150/hr', xl: '₹150/hr', premium: '₹150/hr' },
  { labelEn: 'Extra KM', labelHi: 'अतिरिक्त KM', sedan: '₹12/km', xl: '₹15/km', premium: '₹22/km' },
  { labelEn: 'Night Allowance', labelHi: 'रात्रि भत्ता', sedan: '₹400', xl: '₹400', premium: '₹400' },
  { labelEn: 'Parking & Tolls', labelHi: 'पार्किंग और टोल', sedan: 'As applicable', xl: 'As applicable', premium: 'As applicable' },
];
