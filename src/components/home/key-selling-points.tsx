"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Clock, 
  Heart, 
  Shield, 
  Users, 
  Zap 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { firmInfo } from '@/lib/dummy-data';

const keyPoints = [
  {
    icon: Award,
    title: 'Pengalaman Lebih dari 20 Tahun',
    description: 'Tim ahli dengan track record yang terbukti dalam menangani berbagai kasus hukum kompleks.',
    badge: 'Berpengalaman'
  },
  {
    icon: Heart,
    title: 'Pendekatan Personalisasi',
    description: 'Setiap klien mendapat perhatian khusus dengan solusi yang disesuaikan dengan kebutuhan spesifik.',
    badge: 'Personal'
  },
  {
    icon: Shield,
    title: 'Keberhasilan Terbukti',
    description: 'Tingkat keberhasilan 95% dalam menyelesaikan kasus dengan hasil yang memuaskan klien.',
    badge: 'Terpercaya'
  },
  {
    icon: Clock,
    title: 'Respons Cepat',
    description: 'Konsultasi 24/7 dan respons maksimal 2 jam untuk urusan mendesak.',
    badge: 'Responsif'
  },
  {
    icon: Users,
    title: 'Tim Multidisiplin',
    description: 'Kolaborasi ahli dari berbagai bidang hukum untuk solusi komprehensif.',
    badge: 'Komprehensif'
  },
  {
    icon: Zap,
    title: 'Teknologi Modern',
    description: 'Menggunakan teknologi terkini untuk efisiensi dan transparansi proses hukum.',
    badge: 'Inovatif'
  }
];

export default function KeySellingPoints() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Komitmen kami adalah memberikan layanan hukum terbaik dengan standar profesional tertinggi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <point.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {point.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {point.badge}
                        </Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Siap untuk Konsultasi?
            </h3>
            <p className="text-slate-600 mb-6">
              Dapatkan konsultasi gratis untuk memahami opsi hukum terbaik untuk kasus Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
              >
                WhatsApp Sekarang
              </a>
              <a
                href={`tel:${firmInfo.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Telepon Langsung
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
