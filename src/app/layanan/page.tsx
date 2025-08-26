import React from 'react';
import { Metadata } from 'next';
import ServicesGrid from '@/components/services/services-grid';
import ServicesCTA from '@/components/services/services-cta';
import MainLayout from '@/components/layout/main-layout';
import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Produk & Layanan - ${firmInfo.name}`,
  description: 'Produk perbankan komprehensif meliputi tabungan, deposito, kredit UMKM, kredit konsumtif, dan layanan digital. Informasi dan pengajuan mudah.',
  keywords: 'bpr, tabungan, deposito, kredit umkm, kredit mikro, kredit konsumtif, layanan perbankan',
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
                Produk & Layanan Kami
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Solusi perbankan komprehensif untuk memenuhi kebutuhan nasabah,
                dari perorangan hingga UMKM dan komunitas.
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
