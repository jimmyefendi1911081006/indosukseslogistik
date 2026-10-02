'use client';

import React from 'react';

const SiklusAlatBeratSection = () => {
  const steps = [
    {
      id: 1,
      num: '01',
      stepTag: 'Tahap 1 • Ekstraksi Kargo',
      title: 'Stripping & Stuffing',
      desc: 'Presisi dalam ekstraksi dan pemuatan dari dalam kontainer dengan perlindungan kargo maksimal.',
      imgSrc: '/siklus penanganan alat berat.jpeg',
      imgPosition: '5% 42%',
      isFirst: false,
      highlights: ['🔒 Perlindungan Kargo Maksimal', '⚙️ Ekstraksi Presisi Dari Kontainer'],
    },
    {
      id: 2,
      num: '02',
      stepTag: 'Tahap 2 • Perakitan On-Site',
      title: 'Assembling & Kalibrasi',
      desc: 'Perakitan unit berat di lokasi oleh teknisi terlatih untuk memastikan unit siap operasional.',
      imgSrc: '/siklus penanganan alat berat.jpeg',
      imgPosition: '50% 42%',
      isFirst: false,
      highlights: ['👨‍🔧 Perakitan Teknisi Terlatih', '📏 Kalibrasi & Pengujian Unit'],
    },
    {
      id: 3,
      num: '03',
      stepTag: 'Tahap 3 • Verifikasi & Transpor',
      title: 'Pengecekan & Pengiriman',
      desc: 'Verifikasi teknis akhir sebelum unit dimobilisasi ke fasilitas pelanggan secara aman.',
      imgSrc: '/siklus penanganan alat berat.jpeg',
      imgPosition: '96% 42%',
      isFirst: false,
      highlights: ['✅ Verifikasi Teknis Akhir', '🚚 Mobilisasi Aman Ke Pelanggan'],
    },
  ];

  return (
    <section id="siklus-alat-berat" className="siklus-section">
      <div className="cold-container">
        {/* Top Tag & Section Header matching ColdStorageSection style */}
        <p className="about-tag reveal">Alur Operasional</p>
        <h2 className="section-title reveal">
          SIKLUS PENANGANAN <span>ALAT BERAT</span>
        </h2>

        {/* Sub Section Block */}
        <div className="siklus-block reveal" style={{ marginTop: '2.5rem' }}>
          <h3 className="sub-section-title text-center">
            🚜 Tahapan Alur Operasional Penanganan Unit Berat
          </h3>

          {/* Step Progress Tracker Bar */}
          <div className="siklus-progress-tracker">
            <div className="tracker-step-node active">
              <span className="node-num">01</span>
              <span className="node-label">Stripping &amp; Stuffing</span>
            </div>
            <div className="tracker-arrow">➔</div>
            <div className="tracker-step-node active">
              <span className="node-num">02</span>
              <span className="node-label">Assembling &amp; Kalibrasi</span>
            </div>
            <div className="tracker-arrow">➔</div>
            <div className="tracker-step-node active">
              <span className="node-num">03</span>
              <span className="node-label">Pengecekan &amp; Pengiriman</span>
            </div>
          </div>

          {/* 3 Chevron Process Cards Grid */}
          <div className="siklus-grid">
            {steps.map((step) => (
              <div key={step.id} className="siklus-card-wrapper">
                <div className="siklus-glass-card">
                  {/* Number Badge & Tag */}
                  <div className="card-top-meta">
                    <span className="step-num-pill">{step.num}</span>
                    <span className="step-category-tag">{step.stepTag}</span>
                  </div>

                  {/* Chevron Arrow Image Container */}
                  <div className={`chevron-frame ${step.isFirst ? 'first-chevron' : 'mid-chevron'}`}>
                    <div className="chevron-inner">
                      <div
                        className="chevron-img"
                        style={{
                          backgroundImage: `url('${step.imgSrc}')`,
                          backgroundPosition: step.imgPosition,
                        }}
                      />
                      <div className="chevron-overlay" />
                    </div>
                  </div>

                  {/* Text Description Box */}
                  <div className="siklus-info-box">
                    <h3 className="siklus-step-title">{step.title}</h3>
                    <p className="siklus-step-desc">{step.desc}</p>
                  </div>

                  {/* Spec Highlight Tags */}
                  <div className="siklus-spec-tags">
                    {step.highlights.map((item, idx) => (
                      <div key={idx} className="spec-tag-item">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiklusAlatBeratSection;
