import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import StatsSection from "@/components/StatsSection";
import ContentSection from "@/components/ContentSection";
import FleetSection from "@/components/FleetSection";
import StrengthsSection from "@/components/StrengthsSection";
import CitiesSection from "@/components/CitiesSection";
import WhySection from "@/components/WhySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LiveTrackingSection from "@/components/LiveTrackingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABannerSection from "@/components/CTABannerSection";
import BookingTipsSection from "@/components/BookingTipsSection";
import HireTruckBannerSection from "@/components/HireTruckBannerSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ClientsSection />
      <ContentSection />
      <FleetSection />
      <CitiesSection />
      <StrengthsSection />
      <WhySection />
      <HowItWorksSection />
      <LiveTrackingSection />
      <TestimonialsSection />
      <HireTruckBannerSection />
      <FAQSection />
      <CTABannerSection />
      <BookingTipsSection />
    </>
  );
}
