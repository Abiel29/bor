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
  description: 'Pelajari lebih lanjut tentang sejarah, misi, visi, dan tim BPR Cakradana. Bank Perkreditan Rakyat yang berkomitmen mendukung masyarakat dan UMKM.',
  keywords: 'tentang kami, sejarah bpr, tim, misi visi, bpr, perbankan, jakarta',
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
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium border border-green-200">
                  Berizin & Diawasi OJK
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium border border-blue-200">
                  Dijamin LPS
                </span>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed">
                Mengenal lebih dekat {firmInfo.name}, perjalanan kami, dan komitmen
                untuk memberikan layanan perbankan terbaik bagi nasabah.
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
