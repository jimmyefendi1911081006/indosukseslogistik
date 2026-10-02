'use client';

export default function ColdStorageSection() {
  return (
    <section id="cold-storage">
      <div className="cold-container">
        <p className="about-tag reveal">Fasilitas Khusus</p>
        <h2 className="section-title reveal">
          COLD STORAGE &amp; <span>HEAVY EQUIPMENT</span>
        </h2>

        <div className="cold-matrix-block reveal" style={{ marginTop: '2.5rem' }}>
          <h3 className="sub-section-title text-center">📊 Matriks Komparasi: Fasilitas Cold Storage</h3>

          <div className="metallic-table-wrapper">
            <table className="metallic-compare-table">
              <thead>
                <tr>
                  <th className="th-feature">Spesifikasi &amp; Lokasi</th>
                  <th>Jl. Sulawesi No 1, Tanjung Priok</th>
                  <th>Narogong, Kab. Bekasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-feature">Luas Fasilitas</td>
                  <td data-label="Jl. Sulawesi No 1"><strong>3.600 m²</strong></td>
                  <td data-label="Narogong, Kab. Bekasi"><strong>9.500 m²</strong></td>
                </tr>
                <tr>
                  <td className="td-feature">Frozen Room (-15°C s/d -25°C)</td>
                  <td data-label="Jl. Sulawesi No 1">4 Chamber @ 144 Ton (80m²)</td>
                  <td data-label="Narogong, Kab. Bekasi">Kapasitas Skala Industri</td>
                </tr>
                <tr>
                  <td className="td-feature">Chiller Room (0°C s/d 8°C)</td>
                  <td data-label="Jl. Sulawesi No 1">4 Chamber @ 144 Ton &amp; 4 Chamber @ 240 Ton</td>
                  <td data-label="Narogong, Kab. Bekasi">Tersedia</td>
                </tr>
                <tr>
                  <td className="td-feature">Cool Room (16°C s/d 26°C)</td>
                  <td data-label="Jl. Sulawesi No 1">4 Chamber @ 144 Ton (80m²)</td>
                  <td data-label="Narogong, Kab. Bekasi" className="text-muted">-</td>
                </tr>
                <tr>
                  <td className="td-feature">Total Kapasitas Khusus</td>
                  <td data-label="Jl. Sulawesi No 1"><span className="table-highlight-badge">Halal Certified</span></td>
                  <td data-label="Narogong, Kab. Bekasi"><span className="table-highlight-badge badge-cyan">13.400 Posisi Pallet (PP)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= BLOCK 2: COLD STORAGE TERKALIBRASI (PAGE 8) ================= */}
        <div className="cold-calibrated-block reveal" style={{ marginTop: '4.5rem' }}>
          <h3 className="sub-section-title text-center">❄️ Fasilitas Pergudangan: Cold Storage Terkalibrasi</h3>

          <div className="thermometer-diagram-wrapper">
            {/* Left Card: Halal Cold Storage */}
            <div className="cold-facility-glass-card left-cold">
              <span className="facility-type-badge">Halal Certified</span>
              <h4>Halal Cold Storage</h4>
              <p className="cold-loc-sub">(Tanjung Priok - Jl. Sulawesi No 1)</p>
              <div className="area-highlight-pill">Luas: <strong>3.600 m²</strong></div>
              
              <ul className="chamber-specs-list">
                <li className="chamber-item">
                  <strong>Cool Room:</strong> Kapasitas 4 Chamber (144 ton/chamber)
                </li>
                <li className="chamber-item">
                  <strong>Chiller Room:</strong> Kapasitas 4 Chamber (144 ton/chamber) &amp; 4 Chamber (240 ton/chamber)
                </li>
                <li className="chamber-item">
                  <strong>Frozen Room:</strong> Kapasitas 4 Chamber (144 ton/chamber)
                </li>
              </ul>
            </div>

            {/* Center Vertical Thermometer Scale */}
            <div className="thermometer-center-scale">
              <svg className="thermo-unified-svg" viewBox="0 0 100 360" preserveAspectRatio="none">
                <defs>
                  {/* Fluid Gradient */}
                  <linearGradient id="thermoFluidGradient" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#1a5ca3" />
                    <stop offset="40%" stopColor="#2277c4" />
                    <stop offset="80%" stopColor="#4bbce8" />
                    <stop offset="100%" stopColor="#f0a500" />
                  </linearGradient>
                  
                  {/* Glass Reflection Gradient */}
                  <linearGradient id="thermoGlassReflect" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>

                {/* 1. Glass Body Background Fill */}
                <path
                  d="M 38,25 A 12,12 0 0,1 62,25 L 62,305 A 24,24 0 1,1 38,305 Z"
                  fill="rgba(6, 16, 30, 0.85)"
                />

                {/* 2. Thermometer Liquid Fluid Fill (up to Cool top) */}
                <path
                  className="thermo-fluid-path"
                  d="M 39,32 L 61,32 L 61,305 A 23,23 0 1,1 39,305 Z"
                  fill="url(#thermoFluidGradient)"
                  filter="drop-shadow(0px 0px 10px rgba(75,188,232,0.6))"
                />

                {/* 3. Glass Tube Reflection Line */}
                <rect x="42" y="30" width="4" height="275" rx="2" fill="url(#thermoGlassReflect)" opacity="0.6" />

                {/* 4. Single Unified Outer Glass Border Outline */}
                <path
                  d="M 38,25 A 12,12 0 0,1 62,25 L 62,305 A 24,24 0 1,1 38,305 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.65)"
                  strokeWidth="3"
                  filter="drop-shadow(0px 0px 12px rgba(75,188,232,0.5))"
                />

                {/* 5. Scale Degree Ticks */}
                <line x1="58" y1="50" x2="61" y2="50" stroke="#fff" strokeWidth="1.5" />
                <line x1="58" y1="78" x2="61" y2="78" stroke="#fff" strokeWidth="1.5" />
                <line x1="58" y1="106" x2="61" y2="106" stroke="#fff" strokeWidth="1.5" />
                <line x1="58" y1="134" x2="61" y2="134" stroke="#fff" strokeWidth="1.5" />
                <line x1="58" y1="162" x2="61" y2="162" stroke="#fff" strokeWidth="1.5" />
                <line x1="58" y1="190" x2="61" y2="190" stroke="#fff" strokeWidth="1.5" />
                <line x1="58" y1="218" x2="61" y2="218" stroke="#fff" strokeWidth="1.5" />
                <line x1="58" y1="246" x2="61" y2="246" stroke="#fff" strokeWidth="1.5" />
                <line x1="58" y1="274" x2="61" y2="274" stroke="#fff" strokeWidth="1.5" />
                <line x1="58" y1="298" x2="61" y2="298" stroke="#fff" strokeWidth="1.5" />
              </svg>

              <div className="thermo-nodes-list">
                <div className="thermo-node node-cool">
                  <span className="thermo-dot" />
                  <div className="thermo-info">
                    <span className="t-name">Cool:</span>
                    <strong className="t-val">16°C s/d 26°C</strong>
                  </div>
                </div>

                <div className="thermo-node node-chiller">
                  <span className="thermo-dot" />
                  <div className="thermo-info">
                    <span className="t-name">Chiller:</span>
                    <strong className="t-val">0°C s/d 8°C</strong>
                  </div>
                </div>

                <div className="thermo-node node-frozen">
                  <span className="thermo-dot" />
                  <div className="thermo-info">
                    <span className="t-name">Frozen:</span>
                    <strong className="t-val">-15°C s/d -25°C</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Narogong Cold Storage */}
            <div className="cold-facility-glass-card right-cold">
              <span className="facility-type-badge badge-blue">Skala Industri</span>
              <h4>Narogong Cold Storage</h4>
              <p className="cold-loc-sub">(Bekasi)</p>
              <div className="area-highlight-pill">Luas: <strong>9.500 m²</strong></div>
              <div className="pallet-cap-pill">Kapasitas Total: <strong>13.400 pallet</strong></div>
              
              <div className="narogong-facilities-box">
                <h5>Fasilitas:</h5>
                <ul>
                  <li>• Frozen Room</li>
                  <li>• Chiller Room</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BLOCK 3: HEAVY EQUIPMENT STORAGE & HANDLING (PAGE 10) ================= */}
        <div className="heavy-equip-block reveal" style={{ marginTop: '4.5rem' }}>
          <h3 className="sub-section-title text-center">🚜 Heavy Equipment Storage &amp; Handling</h3>

          <div className="heavy-grid-2col">
            {/* Left Col: Heavy Equipment Real Image Card */}
            <div className="heavy-img-card">
              <img src="/heavy.jpeg" alt="Heavy Equipment Storage &amp; Handling ISL" className="heavy-real-img" />
            </div>

            {/* Right Col: Specifications & Professional Services Checklist */}
            <div className="heavy-specs-glass-card">
              <div className="heavy-spec-section">
                <h4>Spesifikasi Fasilitas</h4>
                <ul className="spec-bullets">
                  <li>📍 <strong>Lokasi:</strong> Kawasan Pelabuhan Tanjung Priok</li>
                  <li>📐 <strong>Lapangan Outdoor:</strong> 5.000 m²</li>
                  <li>🚜 <strong>Alat Berat Penunjang:</strong> Reach Stacker, Forklift (3-15 Ton), Crane</li>
                </ul>
              </div>

              <div className="divider-line" />

              <div className="heavy-services-section">
                <h4>Layanan Tim Profesional</h4>
                <ul className="checklist-bullets">
                  <li>
                    <span className="check-icon">✓</span> Bongkar muat alat berat on chasis &amp; Breakbulk
                  </li>
                  <li>
                    <span className="check-icon">✓</span> Stripping &amp; Stuffing
                  </li>
                  <li>
                    <span className="check-icon">✓</span> Perakitan (Assembling) unit
                  </li>
                  <li>
                    <span className="check-icon">✓</span> Pengecekan dan Pengiriman unit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
