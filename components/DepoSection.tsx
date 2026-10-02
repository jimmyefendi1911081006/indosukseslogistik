'use client';
import { useState } from 'react';

export default function DepoSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="depo">
      <div className="depo-container">
        <p className="about-tag reveal">Infrastruktur Strategis</p>
        <h2 className="section-title reveal">
          JARINGAN <span>DEPO CONTAINER</span> STRATEGIS
        </h2>

        {/* Depo Navigation Tabs */}
        <div className="depo-tabs-bar reveal">
          <button
            className={`depo-tab-btn ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => setActiveTab(0)}
          >
            ISL Halal Hub (Tj. Priok)
          </button>
          <button
            className={`depo-tab-btn ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            Depo ISL Pasoso
          </button>
          <button
            className={`depo-tab-btn ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            Depo ISL Arsa
          </button>
        </div>

        {/* ================= TABS CONTENT WRAPPER ================= */}
        <div className="depo-content-wrapper">
          {/* ================= TAB 1: ISL HALAL HUB (TJ. PRIOK) ================= */}
        {activeTab === 0 && (
          <div className="depo-detail-view">
            <div className="depo-view-header">
              <h3 className="depo-view-title">Depo Utama: ISL Halal (Tj. Priok)</h3>
              <div className="metallic-badge-pill">
                Tersertifikasi <span>Halal &amp; DG (Dangerous Goods)</span>
              </div>
            </div>

            <div className="depo-view-grid-2col">
              {/* Left Col: Concentric Proximity Radar */}
              <div className="radar-canvas-card">
                <span className="radar-top-tag">Proximity Radar</span>
                
                <div className="radar-circle-wrapper">
                  {/* Concentric Circles SVG */}
                  <svg className="radar-svg-rings" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="170" stroke="rgba(75, 188, 232, 0.15)" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="200" r="125" stroke="rgba(75, 188, 232, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    <circle cx="200" cy="200" r="80" stroke="rgba(75, 188, 232, 0.45)" strokeWidth="1.5" fill="none" />
                    <circle cx="200" cy="200" r="45" stroke="#4bbce8" strokeWidth="2" fill="rgba(34, 119, 196, 0.2)" />
                    
                    {/* Connecting Spokes */}
                    <line x1="200" y1="200" x2="80" y2="120" stroke="rgba(75, 188, 232, 0.5)" strokeWidth="1.5" />
                    <line x1="200" y1="200" x2="310" y2="100" stroke="rgba(75, 188, 232, 0.5)" strokeWidth="1.5" />
                    <line x1="200" y1="200" x2="350" y2="210" stroke="rgba(75, 188, 232, 0.5)" strokeWidth="1.5" />
                    <line x1="200" y1="200" x2="300" y2="310" stroke="rgba(75, 188, 232, 0.5)" strokeWidth="1.5" />
                    <line x1="200" y1="200" x2="90" y2="290" stroke="rgba(75, 188, 232, 0.5)" strokeWidth="1.5" />
                  </svg>

                  {/* Center Node */}
                  <div className="radar-node-center">
                    <div className="hex-mini-core">ISL Halal Hub</div>
                  </div>

                  {/* Radar Nodes */}
                  <div className="radar-point pt-utc">
                    <span className="radar-icon">🏢</span>
                    <span className="radar-label">UTC: 700 m</span>
                  </div>
                  <div className="radar-point pt-ter3">
                    <span className="radar-icon">🏗️</span>
                    <span className="radar-label">Ter3: 1,8 Km</span>
                  </div>
                  <div className="radar-point pt-npct">
                    <span className="radar-icon">⚓</span>
                    <span className="radar-label">NPCT-1: 4,7 Km</span>
                  </div>
                  <div className="radar-point pt-mal">
                    <span className="radar-icon">🚢</span>
                    <span className="radar-label">MAL: 2,8 Km</span>
                  </div>
                  <div className="radar-point pt-tpk">
                    <span className="radar-icon">🏬</span>
                    <span className="radar-label">TPK Koja: 2,2 Km</span>
                  </div>
                </div>
                <span className="radar-bot-tag">Proximity Radar</span>
              </div>

              {/* Right Col: Facility Showcase & Metallic Specs Box */}
              <div className="depo-facility-card">
                <div className="facility-img-box">
                  <img src="/depo utama.jpeg" alt="Tanjung Priok Gateway Depo Utama" className="facility-real-img" />
                  
                  <div className="facility-placeholder-bg">
                    <span className="facility-badge-tag">Tanjung Priok Gateway</span>
                  </div>
                  
                  {/* Metallic Technical Specs Box overlay */}
                  <div className="metallic-specs-overlay">
                    <div className="spec-row">
                      <span>Total Area: <strong>13.127 m²</strong></span>
                      <span>Cold Storage Area: <strong>3.600 m²</strong></span>
                    </div>
                    <div className="spec-row sub">
                      <span>Non-Plugging Area: <strong>5.879 m²</strong></span>
                      <span>Plugging Area: <strong>3.648 m²</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-width Bottom Metallic Banner */}
            <div className="metallic-bottom-banner">
              <p>
                Fasilitas terlengkap untuk Dry, Isotanks, dan Reefer containers. Keamanan tingkat tinggi dengan spesifikasi penanganan Dangerous Goods, mencakup sistem hydrants (water &amp; dry), pemantauan CCTV 24/7, mitigasi tumpahan khusus, serta akses langsung ke fasilitas pemadam kebakaran.
              </p>
            </div>
          </div>
        )}

        {/* ================= TAB 2: DEPO ISL PASOSO ================= */}
        {activeTab === 1 && (
          <div className="depo-detail-view">
            <div className="depo-view-header">
              <h3 className="depo-view-title">Depo ISL Pasoso: Integrasi Kereta Api Langsung</h3>
              <div className="metallic-badge-pill">
                Stasiun Pasoso <span>Intermodal Rail Hub 🚂</span>
              </div>
            </div>

            <div className="depo-view-grid-2col">
              {/* Left Col: Train Cargo Showcase */}
              <div className="pasoso-img-card">
                <img src="/depo pasoso.jpeg" alt="Depo ISL Pasoso Kereta Api" className="pasoso-real-img" />
                <div className="train-visual-placeholder">
                  <span className="facility-badge-tag">🚂 KAI Intermodal Cargo Station</span>
                </div>
              </div>

              {/* Right Col: Route Map, Subtext & Technical Specs */}
              <div className="pasoso-info-col">
                {/* Route Map Header */}
                <div className="rail-route-map-box">
                  <div className="rail-node">
                    <span className="dot pulse" />
                    <strong>Jakarta</strong>
                  </div>
                  <div className="rail-line-track">
                    <span className="train-pulse-dot" />
                  </div>
                  <div className="rail-node">
                    <span className="dot pulse" />
                    <strong>Semarang</strong>
                  </div>
                </div>

                <p className="pasoso-desc-text">
                  Menghadirkan solusi logistik antarmoda terdepan. Bersebelahan langsung dengan Stasiun Pasoso, depo dry container kami mengeliminasi inefisiensi transportasi darat. Rute layanan Jakarta - Semarang kini beroperasi penuh, memberikan rute distribusi yang lebih efisien, terjangkau, dan ramah lingkungan.
                </p>

                {/* Metallic Specs Box */}
                <div className="metallic-specs-overlay standalone">
                  <div className="metallic-specs-header">Technical Specs Box</div>
                  <div className="metallic-specs-grid">
                    <div className="m-spec">
                      <span className="m-icon">📐</span>
                      <div>
                        <span className="m-lbl">Total Area:</span>
                        <strong className="m-val">21.101 m²</strong>
                      </div>
                    </div>
                    <div className="m-spec">
                      <span className="m-icon">📦</span>
                      <div>
                        <span className="m-lbl">Kapasitas Non-Plugging:</span>
                        <strong className="m-val">21.101 m²</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Timeline Distance Scale */}
            <div className="pasoso-timeline-bar">
              <div className="timeline-title-row">
                <span>📡 Aksesibilitas Terminal Pelabuhan Pasoso</span>
              </div>
              <div className="timeline-track-line" />
              <div className="timeline-nodes">
                <div className="t-node">
                  <span className="t-dot" />
                  <span className="t-label">Ter3 (1,4 Km)</span>
                </div>
                <div className="t-node">
                  <span className="t-dot" />
                  <span className="t-label">UTC 1 (2,2 Km)</span>
                </div>
                <div className="t-node">
                  <span className="t-dot" />
                  <span className="t-label">MAL (2,4 Km)</span>
                </div>
                <div className="t-node">
                  <span className="t-dot" />
                  <span className="t-label">TPK Koja (3,7 Km)</span>
                </div>
                <div className="t-node">
                  <span className="t-dot" />
                  <span className="t-label">NPCT-1 (6,2 Km)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: DEPO ISL ARSA ================= */}
        {activeTab === 2 && (
          <div className="depo-detail-view">
            <div className="depo-view-header">
              <h3 className="depo-view-title">Depo ISL Arsa: Pusat Logistik Pelabuhan Domestik</h3>
              <div className="metallic-badge-pill">
                Pelabuhan <span>Domestik Tanjung Priok ⚓</span>
              </div>
            </div>

            <div className="depo-view-grid-2col">
              {/* Left Col: 2 Stacked Cards (Spesifikasi & Keunggulan Strategis) */}
              <div className="arsa-left-cards">
                {/* Dark Navy Card: Spesifikasi */}
                <div className="arsa-navy-card">
                  <h4>Spesifikasi</h4>
                  <p>Luas area 9.506 m².</p>
                </div>

                {/* White/Glass Card: Keunggulan Strategis */}
                <div className="arsa-glass-card">
                  <h4>Keunggulan Strategis</h4>
                  <div className="orange-accent-bar" />
                  <p>
                    Pilihan paling menguntungkan bagi customer yang mengutamakan lokasi, keterjangkauan, dan kecepatan akses ke port domestik di area Tanjung Priok.
                  </p>
                </div>
              </div>

              {/* Right Col: Depo Arsa Node Map Diagram */}
              <div className="arsa-radar-card">
                <div className="arsa-map-wrapper">
                  {/* Central Node: Depo Arsa */}
                  <div className="arsa-core-node">
                    <div className="arsa-core-circle">
                      <span>Depo Arsa</span>
                    </div>
                  </div>

                  {/* Connected Spoke Nodes */}
                  <div className="arsa-spoke spoke-left">
                    <span className="orange-node-dot" />
                    <div className="spoke-label">
                      <strong>Kade 106:</strong>
                      <span className="orange-val">1,3 km</span>
                    </div>
                  </div>

                  <div className="arsa-spoke spoke-top-right">
                    <span className="orange-node-dot" />
                    <div className="spoke-label">
                      <strong>Lap 202:</strong>
                      <span className="orange-val">1,6 km</span>
                    </div>
                  </div>

                  <div className="arsa-spoke spoke-bot-right">
                    <span className="orange-node-dot" />
                    <div className="spoke-label">
                      <strong>Kade 100:</strong>
                      <span className="orange-val">1,7 km</span>
                    </div>
                  </div>

                  {/* Connecting Lines SVG */}
                  <svg className="arsa-lines-svg" viewBox="0 0 500 350">
                    <line x1="250" y1="175" x2="100" y2="210" stroke="#f0a500" strokeWidth="2.5" />
                    <line x1="250" y1="175" x2="390" y2="90" stroke="#f0a500" strokeWidth="2.5" />
                    <line x1="250" y1="175" x2="350" y2="260" stroke="#f0a500" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
