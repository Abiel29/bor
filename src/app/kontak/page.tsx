import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';
import ContactMap from '@/components/contact/contact-map';
import MainLayout from '@/components/layout/main-layout';
import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Hubungi Kami - ${firmInfo.name}`,
  description: 'Hubungi BPR Cakradana untuk informasi produk tabungan, deposito, dan kredit. Tersedia WhatsApp, telepon, email, dan kunjungan langsung ke kantor kami.',
  keywords: 'kontak, bpr, tabungan, deposito, kredit, whatsapp, telepon, email, alamat kantor',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hubungi Kami
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Siap membantu Anda dengan solusi hukum terbaik. Konsultasi gratis tersedia 24/7
                melalui berbagai channel komunikasi yang mudah dan nyaman.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <ContactInfo />
        </div>

        {/* Map */}
        <ContactMap />
      </div>
    </MainLayout>
  );
}
