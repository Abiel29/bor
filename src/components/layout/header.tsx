"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';
import { firmInfo } from '@/lib/dummy-data';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/tentang' },
  { name: 'Produk & Layanan', href: '/layanan' },
  { name: 'Tim', href: '/tim' },
  { name: 'Kontak', href: '/kontak' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{firmInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{firmInfo.email}</span>
              </div>
            </div>
            <div className="text-sm">
              {firmInfo.operation_hours}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="ml-2">
                <div className="font-bold text-lg text-slate-900">
                  {firmInfo.name}
                </div>
                <div className="text-xs text-slate-600 -mt-1">
                  Bank Perkreditan Rakyat
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation (shifted to right) */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 relative group ${pathname === item.href ? 'text-blue-700' : 'text-slate-700 hover:text-blue-600'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${pathname === item.href ? 'w-full bg-blue-700' : 'w-0 bg-blue-600 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu (right) */}
          <div className="flex items-center space-x-4 md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors duration-200 py-2 ${pathname === item.href ? 'text-blue-700' : 'text-slate-700 hover:text-blue-600'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Contact Info in Mobile */}
                  <div className="pt-4 space-y-3 text-sm text-slate-600 border-t">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{firmInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{firmInfo.email}</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
