"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SimulatorSheet from '@/components/services/simulator-sheet';
import {
  Building2,
  Scale,
  Home,
  Heart,
  Lightbulb,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { services } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const serviceIcons = {
  'tabungan': Home,
  'deposito': Building2,
  'kredit-umkm': Users,
  'kredit-konsumtif': Heart,
  'kredit-mikro': Scale,
  'layanan-digital': Lightbulb,
};

const serviceFeatures = {
  'tabungan': [
    'Setoran Awal Ringan',
    'Biaya Administrasi Rendah',
    'Buku Tabungan / Rekening Koran',
    'Info Saldo via WA'
  ],
  'deposito': [
    'Bunga Kompetitif',
    'Tenor Fleksibel',
    'Perpanjangan Otomatis',
    'Bukti Deposito Resmi'
  ],
  'kredit-umkm': [
    'Proses Cepat',
    'Plafon Fleksibel',
    'Angsuran Ringan',
    'Persyaratan Mudah'
  ],
  'kredit-konsumtif': [
    'Tenor Fleksibel',
    'Bunga Kompetitif',
    'Multiguna',
    'Pencairan Cepat'
  ],
  'kredit-mikro': [
    'Tanpa Ribet',
    'Survei Cepat',
    'Dokumen Sederhana',
    'Cicilan Terjangkau'
  ],
  'layanan-digital': [
    'Pengingat Angsuran',
    'Transfer Antar Rekening',
    'Informasi Saldo',
    'Jaringan Kantor'
  ]
};

export default function ServicesGrid() {
  const [simulatorOpen, setSimulatorOpen] = useState<null | { type: 'deposito' | 'kredit'; serviceTitle: string }>(null);

  // state input simulasi
  const [amount, setAmount] = useState<number>(10000000);
  const [rate, setRate] = useState<number>(6);
  const [tenor, setTenor] = useState<number>(12);

  // kalkulator sederhana
  const simulateDeposito = (pokok: number, bungaTahunan: number, tenorBulan: number) => {
    const bungaBulanan = bungaTahunan / 12 / 100;
    const bunga = pokok * bungaBulanan * tenorBulan;
    return Math.max(0, Math.round(pokok + bunga));
  };

  const simulateKreditFlat = (pokok: number, bungaTahunan: number, tenorBulan: number) => {
    const bungaBulanan = bungaTahunan / 12 / 100;
    const angsuranPokok = pokok / tenorBulan;
    const angsuranBunga = pokok * bungaBulanan;
    const angsuran = angsuranPokok + angsuranBunga;
    return Math.max(0, Math.round(angsuran));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
Produk & Layanan BPR Cakradana
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Kami hadir dengan solusi keuangan yang aman dan mudah diakses.
            Setiap produk dirancang untuk memberi nilai tambah bagi nasabah.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || Building2;
            const features = serviceFeatures[service.slug as keyof typeof serviceFeatures] || [];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            Populer
                          </Badge>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {service.short_description}
                        </p>
                      </div>
                    </div>

                    {/* Service Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Cakupan Layanan:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={() => {
                          if (['deposito'].includes(service.slug)) {
                            setSimulatorOpen({ type: 'deposito', serviceTitle: service.title });
                            setRate(6); setTenor(12);
                          } else if (['kredit-umkm','kredit-konsumtif','kredit-mikro'].includes(service.slug)) {
                            setSimulatorOpen({ type: 'kredit', serviceTitle: service.title });
                            setRate(18); setTenor(12);
                          } else {
                            window.location.href = `/layanan/${service.slug}`;
                          }
                        }}
                      >
                        <div className="flex items-center justify-center space-x-2 w-full">
                          <span>{['deposito','kredit-umkm','kredit-konsumtif','kredit-mikro'].includes(service.slug) ? 'Simulasikan' : 'Pelajari Detail'}</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 hover:bg-blue-50 hover:border-blue-300"
                      >
                        <Link href="/kontak">
                          Konsultasi
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              Proses Kerja Kami
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Konsultasi Awal</h4>
                <p className="text-slate-600 text-sm">Analisis kebutuhan dan profil nasabah</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Analisis & Penawaran</h4>
                <p className="text-slate-600 text-sm">Penyusunan penawaran dan opsi produk terbaik</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">



                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Proses</h4>
                <p className="text-slate-600 text-sm">Pengajuan/pembukaan dan verifikasi dokumen</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Pencairan & Layanan</h4>
                <p className="text-slate-600 text-sm">Pencairan/aktivasi dan layanan purna jual</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

        {/* Simulation Sheet */}
        {simulatorOpen && (
          <SimulatorSheet
            open={!!simulatorOpen}
            onOpenChange={(open) => !open && setSimulatorOpen(null)}
            type={simulatorOpen.type}
            serviceTitle={simulatorOpen.serviceTitle}
            amount={amount}
            rate={rate}
            tenor={tenor}
            setAmount={setAmount}
            setRate={setRate}
            setTenor={setTenor}
            simulateDeposito={simulateDeposito}
            simulateKreditFlat={simulateKreditFlat}
          />
        )}

    </section>
  );
}
