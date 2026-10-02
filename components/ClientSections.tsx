'use client';

/**
 * ClientSections — Client Component boundary
 *
 * Semua section yang dianimasikan GSAP HARUS ada di Client Component ini.
 * Dengan 'use client', semua import di sini otomatis menjadi client-only
 * (tidak di-SSR) TANPA perlu ssr:false atau next/dynamic.
 *
 * Menggunakan import biasa (bukan dynamic) agar semua komponen sudah
 * ada di DOM saat GSAPAnimations menjalankan useEffect-nya.
 */

import StatsStrip from '@/components/StatsStrip';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DepoSection from '@/components/DepoSection';
import ColdStorageSection from '@/components/ColdStorageSection';
import SiklusAlatBeratSection from '@/components/SiklusAlatBeratSection';
import FleetSection from '@/components/FleetSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import GSAPAnimations from '@/components/GSAPAnimations';

export default function ClientSections() {
  return (
    <>
      <StatsStrip />
      <AboutSection />
      <ServicesSection />
      <DepoSection />
      <ColdStorageSection />
      <SiklusAlatBeratSection />
      <FleetSection />
      <ClientsSection />
      <ContactSection />

      {/* GSAP terakhir — semua elemen sudah di DOM */}
      <GSAPAnimations />
    </>
  );
}
