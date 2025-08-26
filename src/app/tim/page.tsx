import React from 'react';
import { Metadata } from 'next';
import TeamGrid from '@/components/team/team-grid';
import TeamStats from '@/components/team/team-stats';
import JoinTeam from '@/components/team/join-team';
import MainLayout from '@/components/layout/main-layout';
import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Tim Kami - ${firmInfo.name}`,
  description: 'Bertemu dengan tim profesional perbankan berpengalaman di BPR Cakradana. Tim yang berdedikasi dengan keahlian keuangan dan layanan nasabah.',
  keywords: 'tim bpr, tim perbankan, layanan nasabah, keuangan, jakarta',
};

export default function TeamPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tim Ahli Kami
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Bertemu dengan tim profesional berpengalaman yang siap memberikan
                solusi keuangan terbaik dengan keahlian di berbagai produk dan layanan perbankan.
              </p>
            </div>
          </div>
        </section>

        <TeamGrid />
        <TeamStats />
        <JoinTeam />
      </div>
    </MainLayout>
  );
}
