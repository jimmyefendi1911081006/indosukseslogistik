import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// ─── EAGER: Critical path (above-the-fold) ───────────────────────────────────
// Semua yang di-render server AND digunakan GSAP harus tetap di sini
// atau di ClientSections dengan ssr:false untuk menghindari hydration mismatch
import Cursor from '@/components/Cursor';
import ProgressBar from '@/components/ProgressBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ParticleCanvas from '@/components/ParticleCanvas';

// ─── LAZY (server-safe, tidak ada GSAP inline styles) ────────────────────────
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
});

// ─── Client boundary (semua section yang disentuh GSAP = ssr:false) ───────────
const ClientSections = dynamic(() => import('@/components/ClientSections'));

// ─── Page (Server Component) ─────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* Global UI overlays */}
      <ProgressBar />
      <Cursor />

      {/* ParticleCanvas eager agar HeroSection dapat #particle-canvas di DOM */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        {/* Hero — eager */}
        <HeroSection />

        {/* Semua section interaktif / dianimasikan GSAP — client-only */}
        <ClientSections />
      </main>

      <Footer />
    </>
  );
}
