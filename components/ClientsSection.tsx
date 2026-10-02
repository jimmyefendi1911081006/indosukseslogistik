'use client';
import Image from 'next/image';
import { customsLogos, depoLogos, LogoItem } from '@/lib/data';

export default function ClientsSection() {
  return (
    <section id="clients" className="clients-section-revamped">
      <div className="cold-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="about-tag reveal" style={{ display: 'inline-block' }}>
            Klien & Mitra Kami
          </p>
          <h2 className="section-title reveal">
            DIPERCAYA <span>MITRA DOKUMENTASI & DEPO</span>
          </h2>
          <p className="about-text reveal" style={{ maxWidth: '800px', margin: '1rem auto 0', textAlign: 'center', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)' }}>
            Kepercayaan industri multinasional dan nasional utama dalam pengurusan kepabeanan 24/7 serta manajemen depo kontainer strategis.
          </p>
        </div>

        {/* 1. Customs Clearance Clients */}
        <div className="clients-glass-block reveal">
          <div className="clients-block-header">
            <span className="clients-cat-badge">🚢 Customs Clearance Partners</span>
            <h3 className="clients-block-title">Mitra Pengurusan Kepabeanan & Dokumentasi 24/7</h3>
          </div>
          
          <div className="modern-logos-grid">
            {customsLogos.map((logo: LogoItem) => (
              <div className="modern-logo-card" key={logo.name} title={logo.name}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`client-logo-img ${logo.ultraScale ? 'logo-boost-ultra' : logo.superScale ? 'logo-boost-super' : logo.maxScale ? 'logo-boost-max' : logo.scale ? 'logo-boost' : ''} ${logo.cleanBg ? 'clean-bg-logo' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. Depo Clients */}
        <div className="clients-glass-block reveal" style={{ marginTop: '3.5rem' }}>
          <div className="clients-block-header">
            <span className="clients-cat-badge depo-badge">🏗️ Depo & Container Terminal Partners</span>
            <h3 className="clients-block-title">Mitra Depo Utama & Pelayaran Strategis</h3>
          </div>
          
          <div className="modern-logos-grid">
            {depoLogos.map((logo: LogoItem) => (
              <div className="modern-logo-card" key={logo.name} title={logo.name}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`client-logo-img ${logo.ultraScale ? 'logo-boost-ultra' : logo.superScale ? 'logo-boost-super' : logo.maxScale ? 'logo-boost-max' : logo.scale ? 'logo-boost' : ''} ${logo.cleanBg ? 'clean-bg-logo' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
