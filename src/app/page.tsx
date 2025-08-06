import HeroSection from '@/components/home/hero-section';
import KeySellingPoints from '@/components/home/key-selling-points';
import ServicesPreview from '@/components/home/services-preview';
import TestimonialsCarousel from '@/components/home/testimonials-carousel';
import FinalCTA from '@/components/home/final-cta';

import MainLayout from '@/components/layout/main-layout';

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <HeroSection />
        <KeySellingPoints />
        <ServicesPreview />
        <TestimonialsCarousel />
        <FinalCTA />
      </div>
    </MainLayout>
  );
}
