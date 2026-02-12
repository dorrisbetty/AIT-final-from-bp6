import HeroSection from '../components/sections/HeroSection';
import TrustBar from '../components/sections/TrustBar';
import QuickBooking from '../components/sections/QuickBooking';
import ServicesOverview from '../components/sections/ServicesOverview';
import AirportSection from '../components/sections/AirportSection';
import DilliDarshanPreview from '../components/sections/DilliDarshanPreview';
import FleetShowcase from '../components/sections/FleetShowcase';
import PricingPreview from '../components/sections/PricingPreview';
import PopularRoutes from '../components/sections/PopularRoutes';
import HowItWorks from '../components/sections/HowItWorks';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ServiceAreasSection from '../components/sections/ServiceAreasSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CorporatePreview from '../components/sections/CorporatePreview';
import AboutPreview from '../components/sections/AboutPreview';
import FAQPreview from '../components/sections/FAQPreview';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <QuickBooking />
      <ServicesOverview />
      <AirportSection />
      <DilliDarshanPreview />
      <HowItWorks />
      <FleetShowcase />
      <PricingPreview />
      <PopularRoutes />
      <WhyChooseUs />
      <CorporatePreview />
      <ServiceAreasSection />
      <TestimonialsSection />
      <AboutPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
}
