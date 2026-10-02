'use client';

import React from 'react';
import Image from 'next/image';

export default function FleetSection() {
  const fleetList = [
    {
      count: '11 Unit',
      type: 'Trailer',
      category: 'Heavy Transport',
      desc: 'Transportasi kargo kontainer & beban berat melintasi Jabodetabek.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4bbce8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      highlight: true,
    },
    {
      count: '6 Unit',
      type: 'Blindvan',
      category: 'Express City Logistics',
      desc: 'Distribusi cepat untuk kargo perkotaan & paket khusus.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4bbce8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
          <path d="M15 18H9"></path>
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.3-.7L18.4 9.7a1 1 0 0 0-.7-.3H14"></path>
          <circle cx="6.5" cy="17.5" r="2.5"></circle>
          <circle cx="16.5" cy="17.5" r="2.5"></circle>
        </svg>
      ),
      highlight: false,
    },
    {
      count: '2 Unit',
      type: 'CDE Long',
      category: 'Colt Diesel Engkel Long',
      desc: 'Kapasitas muat ekstra panjang untuk distribusi kargo menengah.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4bbce8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="5" width="14" height="11" rx="1"></rect>
          <path d="M15 9h5l3 3v4h-8V9z"></path>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      highlight: false,
    },
    {
      count: '1 Unit',
      type: 'CDD Jumbo',
      category: 'Double Jumbo Capacity',
      desc: 'Volume kargo jumbo untuk efisiensi pengiriman masif.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4bbce8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 3h15v13H1z"></path>
          <path d="M16 8h4l3 3v5h-7V8z"></path>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      highlight: false,
    },
    {
      count: '1 Unit',
      type: 'CDD Frozen',
      category: 'Refrigerated Cold Truck',
      desc: 'Armada pendingin dengan kontrol suhu presisi untuk kargo beku.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"></path>
          <circle cx="12" cy="12" r="3" fill="rgba(240, 165, 0, 0.2)"></circle>
        </svg>
      ),
      highlight: true,
      badge: '❄️ Cold Storage',
    },
    {
      count: '1 Unit',
      type: 'CDE Standard',
      category: 'Standard Distribution',
      desc: 'Mobilitas fleksibel untuk operasional harian Jabodetabek.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4bbce8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="6" width="13" height="10" rx="1"></rect>
          <path d="M14 9h4l3 3v4h-7V9z"></path>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="17.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      highlight: false,
    },
    {
      count: '1 Unit',
      type: 'Frozen Traga',
      category: 'Light Cold Transport',
      desc: 'Transportasi pendingin lincah untuk pengiriman cepat.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18M3 12h18"></path>
          <path d="M6 6l12 12M6 18L18 6"></path>
        </svg>
      ),
      highlight: true,
      badge: '❄️ Cold Transport',
    },
  ];

  const customsSteps = [
    {
      num: '01',
      title: 'Pengurusan Dokumen',
      desc: 'Pembuatan PIB, PEB, & kelengkapan administratif kepabeanan secara cepat & akurat.',
      icon: '📝',
    },
    {
      num: '02',
      title: 'Pemeriksaan Fisik',
      desc: 'Pendampingan langsung di lapangan bersama instansi terkait saat verifikasi barang.',
      icon: '🔍',
    },
    {
      num: '03',
      title: 'Izin Teknis Khusus',
      desc: 'Pengurusan izin persetujuan lembaga pengawas khusus seperti BPOM & SNI.',
      icon: '🛡️',
    },
    {
      num: '04',
      title: 'Konsultasi Regulasi',
      desc: 'Advis tarif bea masuk, pembebasan pajak, & aturan lartas impor/ekspor terkini.',
      icon: '⚖️',
    },
    {
      num: '05',
      title: 'Tracking 24/7',
      desc: 'Visibilitas status kepabeanan real-time untuk kepastian lead-time pengiriman.',
      icon: '📡',
    },
  ];

  return (
    <section id="fleet" className="fleet-section">
      <div className="cold-container">
        {/* Header matching main theme */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="about-tag reveal" style={{ display: 'inline-block' }}>
            Armada & Kepabeanan
          </p>
          <h2 className="section-title reveal">
            ARMADA & <span>CUSTOMS CLEARANCE 24/7</span>
          </h2>
          <p className="about-text reveal" style={{ maxWidth: '820px', margin: '1rem auto 0', textAlign: 'center', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)' }}>
            Solusi transportasi darat terintegrasi serta pengurusan kepabeanan 24 jam nonstop. Didukung kapabilitas armada berstandar tinggi untuk komoditas dry, refrigerated, hingga mega-proyek berskala internasional.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. ARMADA TRANSPORTASI DARAT TERINTEGRASI (23 UNIT) */}
        {/* ========================================================================= */}
        <div className="fleet-hero-panel reveal">
          <div className="fleet-panel-header">
            <div className="fleet-title-group">
              <span className="fleet-badge-pill">🚚 23 Unit Armada Terintegrasi</span>
              <h3 className="fleet-panel-title">Armada Transportasi Darat Terintegrasi</h3>
              <p className="fleet-panel-desc">
                Mendukung mobilitas kargo melintasi Jabodetabek, manajemen reposisi, hingga penyewaan unit. Kapabilitas armada kami yang beragam memastikan kargo dalam kondisi <strong>dry maupun frozen</strong> dapat tiba tepat waktu.
              </p>
            </div>
            <div className="fleet-meta-chips">
              <span className="meta-chip">📦 Dry Cargo</span>
              <span className="meta-chip cold-chip">❄️ Frozen & Refrigerated</span>
              <span className="meta-chip gold-chip">⚡ 24/7 Jabodetabek Mobility</span>
            </div>
          </div>

          {/* Grid 7 Fleet Cards */}
          <div className="fleet-grid-container">
            {fleetList.map((f, i) => (
              <div
                key={i}
                className={`fleet-modern-card ${f.highlight ? 'highlight-card' : ''}`}
              >
                {f.badge && <span className="cold-unit-badge">{f.badge}</span>}
                <div className="fleet-card-icon">{f.icon}</div>
                <div className="fleet-card-count">{f.count}</div>
                <div className="fleet-card-type">{f.type}</div>
                <div className="fleet-card-category">{f.category}</div>
                <p className="fleet-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. PORTOFOLIO PROYEK KHUSUS (SAPI & EV CARS SHOWCASE) */}
        {/* ========================================================================= */}
        <div className="special-projects-section reveal" style={{ marginTop: '5rem' }}>
          <div className="section-subhead-center">
            <span className="subhead-badge">⭐ High-Skill Logistics</span>
            <h3 className="sub-section-title" style={{ fontSize: '2rem', marginTop: '0.4rem' }}>
              Portofolio Proyek Khusus
            </h3>
            <p className="about-text" style={{ textAlign: 'center', maxWidth: '750px', margin: '0.5rem auto 0' }}>
              Rekam jejak penanganan kargo bernilai tinggi dan komoditas berspesifikasi khusus dengan eksekusi standar internasional.
            </p>
          </div>

          <div className="projects-grid-2col">
            {/* Card 1: Sapi */}
            <div className="project-showcase-card reveal">
              <div className="project-img-wrapper">
                <Image
                  src="/proyek-sapi.jpeg"
                  alt="Impor Indukan Sapi & Karantina"
                  fill
                  className="project-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="project-img-overlay"></div>
                <span className="project-category-tag">🐄 Mega-Project • Live Cattle</span>
              </div>
              <div className="project-content-body">
                <h4 className="project-card-title">Impor Indukan Sapi & Karantina</h4>
                <p className="project-card-desc">
                  Penanganan sensitif yang mencakup stevedoring dan cargodooring komoditas bernyawa dengan standar bio-security ketat.
                </p>
                <div className="project-feature-list">
                  <div className="project-feature-item">
                    <span className="feat-icon">🛡️</span>
                    <span>Standar Bio-Security Ketat & Pengawasan Karantina</span>
                  </div>
                  <div className="project-feature-item">
                    <span className="feat-icon">🚢</span>
                    <span>Stevedoring & Cargodooring Komoditas Bernyawa</span>
                  </div>
                  <div className="project-feature-item">
                    <span className="feat-icon">📋</span>
                    <span>Integrasi Regulasi Bea Cukai & Balai Karantina</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Geely EV */}
            <div className="project-showcase-card reveal">
              <div className="project-img-wrapper">
                <Image
                  src="/proyek-ev.jpeg"
                  alt="Logistik Kendaraan Listrik (EV)"
                  fill
                  className="project-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="project-img-overlay"></div>
                <span className="project-category-tag ev-tag">⚡ Automotive Logistics • Geely EV</span>
              </div>
              <div className="project-content-body">
                <h4 className="project-card-title">Logistik Kendaraan Listrik (EV)</h4>
                <p className="project-card-desc">
                  Customs clearance khusus EV, fasilitas penyimpanan, hingga manajemen area pencucian mobil untuk lini Geely EV. Menjamin perlindungan aset otomotif bernilai tinggi.
                </p>
                <div className="project-feature-list">
                  <div className="project-feature-item">
                    <span className="feat-icon">⚡</span>
                    <span>Dedicated Customs Clearance Kendaraan Listrik (EV)</span>
                  </div>
                  <div className="project-feature-item">
                    <span className="feat-icon">🅿️</span>
                    <span>Fasilitas Storage Khusus & Inspection Area</span>
                  </div>
                  <div className="project-feature-item">
                    <span className="feat-icon">🧼</span>
                    <span>Layanan Carwash & EV Charging Station Terintegrasi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CUSTOMS CLEARANCE 3-WAY HUB ARCHITECTURE (PAGE 15 DIAGRAM) */}
        {/* ========================================================================= */}
        <div className="customs-diagram-section reveal" style={{ marginTop: '5rem' }}>
          <div className="section-subhead-center">
            <span className="subhead-badge">🌐 Integrasi Lintas Sektor</span>
            <h3 className="sub-section-title" style={{ fontSize: '2rem', marginTop: '0.4rem' }}>
              Customs Clearance: Kecepatan Regulasi & Eksekusi Proyek
            </h3>
            <p className="about-text" style={{ textAlign: 'center', maxWidth: '780px', margin: '0.5rem auto 0' }}>
              Penghubung pintar antara eksekusi proyek di lapangan dengan sistem perizinan Bea Cukai & INSW secara real-time.
            </p>
          </div>

          <div className="customs-hub-architecture">
            {/* Left Project Node */}
            <div className="hub-node-card left-node">
              <div className="node-icon-header">
                <span className="node-emoji">🐄</span>
                <span className="node-type">Project Alpha</span>
              </div>
              <h5 className="node-title">Mega-Project: Impor Indukan Sapi</h5>
              <p className="node-desc">
                Menangani regulasi Karantina terintegrasi dengan eksekusi lapangan (Stevedoring & Cargodooring).
              </p>
              <div className="node-tag">Stevedoring & Cargodooring</div>
            </div>

            {/* Connecting Pipe Left */}
            <div className="hub-connector left-connector">
              <div className="pulse-line"></div>
            </div>

            {/* Central INSW Core */}
            <div className="hub-center-core">
              <div className="core-glowing-ring">
                <div className="core-inner">
                  <div className="core-tech-icon">🌐</div>
                  <h4 className="core-title">Sistem INSW & Bea Cukai Terkoneksi 24/7</h4>
                  <p className="core-desc">
                    <strong>Layanan Inti:</strong> Pengurusan dokumen (PIB, PEB), Izin teknis (BPOM, SNI), pendampingan pemeriksaan fisik, & tracking real-time.
                  </p>
                  <span className="core-status-pill">🟢 Online Direct Gateway</span>
                </div>
              </div>
            </div>

            {/* Connecting Pipe Right */}
            <div className="hub-connector right-connector">
              <div className="pulse-line"></div>
            </div>

            {/* Right Project Node */}
            <div className="hub-node-card right-node">
              <div className="node-icon-header">
                <span className="node-emoji">⚡🚗</span>
                <span className="node-type">Project Beta</span>
              </div>
              <h5 className="node-title">Manajemen Komprehensif: Geely EV Car</h5>
              <p className="node-desc">
                Tidak hanya clearance dokumen, tetapi mencakup fasilitas storage khusus, carwash, area inspeksi, dan charging area.
              </p>
              <div className="node-tag ev-node-tag">End-to-End EV Logistics</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. SOLUSI CUSTOMS CLEARANCE 24/7 (5-STEP PROCESS & OFFICER SPOTLIGHT) */}
        {/* ========================================================================= */}
        <div className="customs-solutions-panel reveal" style={{ marginTop: '5rem' }}>
          <div className="customs-sol-header">
            <div>
              <span className="insw-badge">Terintegrasi Sistem INSW & Bea Cukai</span>
              <h3 className="sub-section-title" style={{ fontSize: '2rem', marginTop: '0.4rem' }}>
                Solusi Customs Clearance 24/7
              </h3>
            </div>
            <div className="sol-status-pill">
              <span className="pulse-dot"></span>
              <span>24/7 Live Monitoring & Document Support</span>
            </div>
          </div>

          <div className="customs-sol-grid">
            {/* 5 Steps Timeline */}
            <div className="customs-steps-column">
              {customsSteps.map((step, idx) => (
                <div key={idx} className="c-step-row-card">
                  <div className="c-step-badge">{step.num}</div>
                  <div className="c-step-icon-wrapper">{step.icon}</div>
                  <div className="c-step-info">
                    <h4 className="c-step-head">{step.title}</h4>
                    <p className="c-step-detail">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Officer Photo Card Spotlight */}
            <div className="customs-officer-card">
              <div className="officer-img-container">
                <Image
                  src="/pengurusan dokumen.jpeg"
                  alt="Customs Clearance Officer"
                  fill
                  className="officer-img"
                  sizes="(max-width: 991px) 100vw, 35vw"
                />
                <div className="officer-overlay"></div>
              </div>
              <div className="officer-card-content">
                <span className="insw-tag">🇮🇩 Bea Cukai & INSW Direct System</span>
                <h4 className="officer-card-title">Visibilitas Real-Time 24 Jam Nonstop</h4>
                <p className="officer-card-desc">
                  Tim ahli kepabeanan ISL siap mendampingi seluruh proses administrasi, verifikasi fisik, hingga penerbitan SPPB secara akurat dan tepat waktu.
                </p>
                <div className="officer-highlights">
                  <span>✅ Sertifikasi Kepabeanan Official</span>
                  <span>⚡ Respon Cepat & Advis Tarif Lartas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
