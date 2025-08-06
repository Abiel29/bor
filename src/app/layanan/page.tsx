import React from 'react';
import { Metadata } from 'next';
import ServicesGrid from '@/components/services/services-grid';
import ServicesCTA from '@/components/services/services-cta';
import MainLayout from '@/components/layout/main-layout';
import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Layanan Hukum - ${firmInfo.name}`,
  description: 'Layanan hukum komprehensif meliputi hukum korporasi, litigasi, properti, keluarga, HKI, dan ketenagakerjaan. Konsultasi gratis tersedia.',
  keywords: 'layanan hukum, pengacara, konsultasi hukum, hukum korporasi, litigasi, properti, jakarta',
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Layanan Hukum Kami
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Solusi hukum komprehensif untuk memenuhi berbagai kebutuhan klien,
                dari individu hingga perusahaan multinasional.
              </p>
            </div>
          </div>
        </section>

        <ServicesGrid />
        <ServicesCTA />
      </div>
    </MainLayout>
  );
}
