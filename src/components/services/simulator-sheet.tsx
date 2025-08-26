"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from '@/components/ui/sheet';

export type SimulatorType = 'deposito' | 'kredit';

interface SimulatorSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: SimulatorType;
  serviceTitle: string;
  amount: number;
  rate: number;
  tenor: number;
  setAmount: (v: number) => void;
  setRate: (v: number) => void;
  setTenor: (v: number) => void;
  simulateDeposito: (pokok: number, bungaTahunan: number, tenorBulan: number) => number;
  simulateKreditFlat: (pokok: number, bungaTahunan: number, tenorBulan: number) => number;
}

export default function SimulatorSheet(props: SimulatorSheetProps) {
  const {
    open, onOpenChange, type, serviceTitle,
    amount, rate, tenor, setAmount, setRate, setTenor,
    simulateDeposito, simulateKreditFlat
  } = props;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>
            {type === 'deposito' ? `Simulasi Deposito - ${serviceTitle}` : `Simulasi Kredit - ${serviceTitle}`}
          </SheetTitle>
        </SheetHeader>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">{type === 'deposito' ? 'Nominal Setoran' : 'Plafon Kredit'}</Label>
            <Input id="amount" type="number" min={0} value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rate">Suku Bunga (persen per tahun)</Label>
            <Input id="rate" type="number" min={0} step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tenor">Tenor (bulan)</Label>
            <Input id="tenor" type="number" min={1} value={tenor} onChange={(e) => setTenor(Number(e.target.value))} />
          </div>

          {type === 'deposito' ? (
            <div className="mt-4 rounded-lg border p-4 bg-slate-50">
              <p className="text-sm text-slate-600">Estimasi Pencairan Akhir:</p>
              <p className="text-2xl font-bold text-slate-900">Rp {simulateDeposito(amount, rate, tenor).toLocaleString('id-ID')}</p>
            </div>
          ) : (
            <div className="mt-4 rounded-lg border p-4 bg-slate-50">
              <p className="text-sm text-slate-600">Estimasi Angsuran Bulanan:</p>
              <p className="text-2xl font-bold text-slate-900">Rp {simulateKreditFlat(amount, rate, tenor).toLocaleString('id-ID')}</p>
            </div>
          )}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Tutup</Button>
          </SheetClose>
          <Button asChild>
            <Link href="/kontak">Hubungi Kami</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

