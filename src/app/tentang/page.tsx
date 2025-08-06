import React from 'react';
import { Metadata } from 'next';
import FirmHistory from '@/components/about/firm-history';
import MissionVision from '@/components/about/mission-vision';
import TeamProfiles from '@/components/about/team-profiles';
import FirmValues from '@/components/about/firm-values';
import MainLayout from '@/components/layout/main-layout';
import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Tentang Kami - ${firmInfo.name}`,
  description: 'Pelajari lebih lanjut tentang sejarah, misi, visi, dan tim ahli di Hukum Prima & Associates. Firma hukum terpercaya dengan pengalaman lebih dari 20 tahun.',
  keywords: 'tentang kami, sejarah firma hukum, tim pengacara, misi visi, jakarta',
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tentang Kami
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Mengenal lebih dekat {firmInfo.name}, perjalanan kami, dan komitmen
                untuk memberikan layanan hukum terbaik bagi klien.
              </p>
            </div>
          </div>
        </section>

        <FirmHistory />
        <MissionVision />
        <TeamProfiles />
        <FirmValues />
      </div>
    </MainLayout>
  );
}
