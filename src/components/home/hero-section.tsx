"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Shield, Users } from 'lucide-react';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white">
      {/* Decorative blob */}
      <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] bg-sky-100 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-flex items-center space-x-2 rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-medium">
                <Shield className="h-4 w-4" />
                <span>Berizin & Diawasi</span>
                <span className="hidden sm:inline">OJK</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
              {firmInfo.tagline}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl">
              Hadir mendukung kebutuhan finansial Anda dengan produk tabungan, deposito, dan kredit
              yang cepat, aman, dan bersahabat untuk perorangan, UMKM, dan komunitas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 text-base px-8 py-6 h-auto"
              >
                <Link href="/layanan" className="flex items-center space-x-2">
                  <span>Lihat Produk & Layanan</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Feature chips */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="inline-flex items-center space-x-2 rounded-full bg-white shadow-sm border px-4 py-2">
                <Users className="h-4 w-4 text-sky-600" />
                <span className="text-sm text-slate-700">Proses Cepat</span>
              </div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white shadow-sm border px-4 py-2">
                <Shield className="h-4 w-4 text-sky-600" />
                <span className="text-sm text-slate-700">Keamanan Dana</span>
              </div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-white shadow-sm border px-4 py-2">
                <Building2 className="h-4 w-4 text-sky-600" />
                <span className="text-sm text-slate-700">Dukungan UMKM</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual composition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Back card */}
            <div className="absolute -top-8 -right-4 w-64 md:w-80 h-40 md:h-48 rotate-6 bg-gradient-to-br from-sky-200 to-sky-100 rounded-2xl shadow-md" />
            {/* Middle card */}
            <div className="absolute top-6 right-6 w-64 md:w-80 h-40 md:h-48 -rotate-3 bg-white rounded-2xl shadow-xl border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Produk</p>
                  <p className="font-semibold text-slate-900">Tabungan • Deposito</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-sky-600" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">Setoran awal</p>
                  <p className="font-semibold text-slate-900">Ringan</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">Bunga</p>
                  <p className="font-semibold text-slate-900">Kompetitif</p>
                </div>
              </div>
            </div>
            {/* Front card */}
            <div className="relative w-72 md:w-[22rem] h-56 md:h-64 bg-white rounded-3xl shadow-2xl border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Kredit</p>
                  <p className="font-semibold text-slate-900">UMKM • Konsumtif • Mikro</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span className="text-slate-600">Persyaratan</span>
                  <span className="font-semibold text-slate-900">Mudah</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span className="text-slate-600">Proses</span>
                  <span className="font-semibold text-slate-900">Cepat</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <span className="text-slate-600">Angsuran</span>
                  <span className="font-semibold text-slate-900">Ringan</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
