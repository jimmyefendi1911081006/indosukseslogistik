'use client';

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="services-container">
        <div className="section-header text-center">
          <p className="about-tag reveal">Layanan Terintegrasi Kami</p>
          <h2 className="section-title reveal">
            EKOSISTEM LAYANAN <span>UTAMA KAMI</span>
          </h2>
          <p className="about-text reveal" style={{ maxWidth: '750px', margin: '1rem auto 2.5rem', textAlign: 'center' }}>
            PT Indo Sukses Logistik menghadirkan ekosistem terintegrasi (ISL HUB) yang menghubungkan seluruh rantai pasok logistik dari depo kontainer, kepabeanan, hingga distribusi darat dan laut.
          </p>
        </div>

        {/* ===== HEXAGONAL HUB ECOSYSTEM DIAGRAM ===== */}
        <div className="hex-ecosystem-wrapper reveal">
          
          {/* Background SVG Ray Lines connecting center to surrounding 5 nodes */}
          <svg className="hex-ecosystem-svg-lines" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Top Right Line (Depo Container) */}
            <line x1="500" y1="300" x2="580" y2="110" stroke="rgba(75, 188, 232, 0.6)" strokeWidth="2" className="eco-line" />
            <circle cx="580" cy="110" r="4" fill="#4bbce8" />

            {/* Mid Right Line (Customs Clearance) */}
            <line x1="500" y1="300" x2="640" y2="300" stroke="rgba(75, 188, 232, 0.6)" strokeWidth="2" className="eco-line" />
            <circle cx="640" cy="300" r="4" fill="#4bbce8" />

            {/* Bot Right Line (Storage Solutions) */}
            <line x1="500" y1="300" x2="580" y2="490" stroke="rgba(75, 188, 232, 0.6)" strokeWidth="2" className="eco-line" />
            <circle cx="580" cy="490" r="4" fill="#4bbce8" />

            {/* Bot Left Line (Ocean Freight) */}
            <line x1="500" y1="300" x2="420" y2="490" stroke="rgba(75, 188, 232, 0.6)" strokeWidth="2" className="eco-line" />
            <circle cx="420" cy="490" r="4" fill="#4bbce8" />

            {/* Top Left Line (Cargo Transportation) */}
            <line x1="500" y1="300" x2="420" y2="110" stroke="rgba(75, 188, 232, 0.6)" strokeWidth="2" className="eco-line" />
            <circle cx="420" cy="110" r="4" fill="#4bbce8" />
          </svg>

          {/* CENTRAL CORE: ISL LOGO HEXAGON */}
          <div className="hex-core-node">
            <div className="hex-shape hex-shape-core">
              <img src="/ISL_logo.png" alt="ISL Logo" className="hex-core-logo" />
            </div>
            <div className="hex-core-tag">ISL HUB</div>
          </div>

          {/* 1. TOP RIGHT: Depo Container */}
          <div className="hex-service-node node-top-right">
            <div className="hex-shape">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="node-icon">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <div className="node-text align-left">
              <h3>Depo Container</h3>
              <p>Jaringan fasilitas strategis dengan sertifikasi khusus.</p>
            </div>
          </div>

          {/* 2. MID RIGHT: Customs Clearance */}
          <div className="hex-service-node node-mid-right">
            <div className="hex-shape">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="node-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div className="node-text align-left">
              <h3>Customs Clearance</h3>
              <p>Pengurusan kepabeanan 24/7 yang terintegrasi.</p>
            </div>
          </div>

          {/* 3. BOT RIGHT: Storage Solutions */}
          <div className="hex-service-node node-bot-right">
            <div className="hex-shape">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="node-icon">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div className="node-text align-left">
              <h3>Storage Solutions</h3>
              <p>Dry, Cold, dan Heavy Equipment Storage skala besar.</p>
            </div>
          </div>

          {/* 4. BOT LEFT: Ocean Freight */}
          <div className="hex-service-node node-bot-left">
            <div className="node-text align-right">
              <h3>Ocean Freight</h3>
              <p>Pengiriman jalur laut domestik dan internasional.</p>
            </div>
            <div className="hex-shape">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="node-icon">
                <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
                <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7"/>
                <path d="M10 2v4"/>
                <path d="M14 4v2"/>
              </svg>
            </div>
          </div>

          {/* 5. TOP LEFT: Cargo Transportation */}
          <div className="hex-service-node node-top-left">
            <div className="node-text align-right">
              <h3>Cargo Transportation</h3>
              <p>Distribusi darat dengan armada yang komprehensif.</p>
            </div>
            <div className="hex-shape">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="node-icon">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
