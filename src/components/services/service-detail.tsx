"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Scale, 
  Home, 
  Heart, 
  Lightbulb, 
  Users,
  CheckCircle,
  ArrowLeft,
  Phone,
  MessageCircle,
  Clock,
  Award
} from 'lucide-react';
import { Service } from '@/lib/types';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const serviceIcons = {
  'tabungan': Home,
  'deposito': Building2,
  'kredit-umkm': Users,
  'kredit-konsumtif': Heart,
  'kredit-mikro': Scale,
  'layanan-digital': Lightbulb,
};

const serviceDetails = {
  'tabungan': {
    features: [
      'Setoran awal ringan',
      'Biaya administrasi rendah',
      'Buku tabungan / rekening koran',
      'Info saldo via WhatsApp'
    ],
    process: [
      'Pengisian formulir pembukaan rekening',
      'Verifikasi identitas',
      'Setoran awal',
      'Aktivasi rekening'
    ],
    benefits: [
      'Dana aman dan mudah diakses',
      'Transaksi harian lebih mudah',
      'Kontrol keuangan yang lebih baik',
      'Dukungan layanan ramah'
    ]
  },
  'deposito': {
    features: [
      'Bunga kompetitif',
      'Tenor fleksibel',
      'ARO (perpanjangan otomatis)',
      'Bukti deposito resmi'
    ],
    process: [
      'Pemilihan tenor dan jumlah',
      'Setoran dana',
      'Penerbitan bilyet deposito',
      'Pencairan atau perpanjangan'
    ],
    benefits: [
      'Imbal hasil menarik',
      'Risiko rendah',
      'Perencanaan keuangan lebih terarah',
      'Proses mudah'
    ]
  },
  'kredit-umkm': {
    features: [
      'Proses cepat',
      'Plafon fleksibel',
      'Angsuran ringan',
      'Persyaratan mudah'
    ],
    process: [
      'Pengajuan dan survei usaha',
      'Analisis kelayakan',
      'Persetujuan kredit',
      'Pencairan dana'
    ],
    benefits: [
      'Pengembangan bisnis',
      'Tambahan modal kerja',
      'Skema sesuai arus kas',
      'Pendampingan ramah'
    ]
  },
  'kredit-konsumtif': {
    features: [
      'Tenor fleksibel',
      'Bunga kompetitif',
      'Multiguna',
      'Pencairan cepat'
    ],
    process: [
      'Pengajuan kebutuhan',
      'Verifikasi dokumen',
      'Persetujuan kredit',
      'Pencairan dana'
    ],
    benefits: [
      'Wujudkan kebutuhan pribadi',
      'Cicilan terjangkau',
      'Proses mudah',
      'Layanan responsif'
    ]
  },
  'kredit-mikro': {
    features: [
      'Tanpa ribet',
      'Survei cepat',
      'Dokumen sederhana',
      'Cicilan terjangkau'
    ],
    process: [
      'Pengajuan singkat',
      'Survei lapangan',
      'Persetujuan cepat',
      'Pencairan dana'
    ],
    benefits: [
      'Dukungan usaha mikro',
      'Proses cepat',
      'Syarat ringan',
      'Skema fleksibel'
    ]
  },
  'layanan-digital': {
    features: [
      'Pengingat angsuran',
      'Transfer antar rekening',
      'Informasi saldo',
      'Jaringan kantor'
    ],
    process: [
      'Registrasi layanan',
      'Aktivasi fitur',
      'Penggunaan harian',
      'Dukungan layanan'
    ],
    benefits: [
      'Transaksi makin mudah',
      'Akses informasi cepat',
      'Efisiensi waktu',
      'Kemudahan layanan'
    ]
  }
};

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || Building2;
  const details = serviceDetails[service.slug as keyof typeof serviceDetails];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb & Back Button */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <Button variant="ghost" asChild>
              <Link href="/layanan" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Layanan</span>
              </Link>
            </Button>
          </div>
          <nav className="text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/layanan" className="hover:text-blue-600">Layanan</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Service Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                <IconComponent className="h-10 w-10 text-blue-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">
              Layanan Unggulan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {service.full_description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
      {details && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Cakupan Layanan
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Layanan komprehensif yang kami tawarkan untuk memenuhi kebutuhan hukum Anda
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process & Benefits */}
      {details && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Proses Kerja</h3>
                      </div>
                      <div className="space-y-4">
                        {details.process.map((step, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-semibold text-sm">{index + 1}</span>
                            </div>
                            <span className="text-slate-700 pt-1">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Award className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Manfaat</h3>
                      </div>
                      <div className="space-y-4">
                        {details.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Butuh Bantuan untuk {service.title}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Tim ahli kami siap membantu Anda. Konsultasi gratis tersedia untuk evaluasi awal kebutuhan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Link href="/kontak">
                  Konsultasi Gratis
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <a
                  href={`https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
