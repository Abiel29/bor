"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Shield } from 'lucide-react';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

export default function MissionVision() {
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
            Misi & Visi Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Komitmen kami dalam memberikan layanan perbankan terbaik dilandasi oleh misi dan visi yang jelas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Misi Kami</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {firmInfo.mission}
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-600">Memberikan solusi keuangan yang inovatif</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-600">Melindungi dana dan kepentingan nasabah</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-600">Membangun hubungan jangka panjang</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Visi Kami</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {firmInfo.vision}
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-600">Menjadi BPR terdepan dan terpercaya di Indonesia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-600">Dipercaya oleh nasabah dan mitra bisnis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-600">Mendorong literasi keuangan dan inklusi finansial</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
            Prinsip Dasar Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Integritas</h4>
                <p className="text-slate-600">
                  Kami berkomitmen untuk selalu jujur, transparan, dan bertanggung jawab dalam setiap tindakan dan keputusan.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Empati</h4>
                <p className="text-slate-600">
                  Kami memahami bahwa setiap klien memiliki situasi unik dan membutuhkan pendekatan yang personal.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Keunggulan</h4>
                <p className="text-slate-600">
                  Kami terus berusaha memberikan layanan terbaik dengan standar kualitas tertinggi di industri.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Inovasi</h4>
                <p className="text-slate-600">
                  Kami mengadopsi teknologi dan metode terbaru untuk memberikan solusi perbankan yang efektif dan efisien.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
