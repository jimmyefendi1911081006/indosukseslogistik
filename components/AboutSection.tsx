import { memo } from 'react';
import { hexCards } from '@/lib/data';

function AboutSection() {
  return (
    <section id="about">
      <div>
        <p className="about-tag reveal">Tentang Kami</p>
        <h2 className="section-title reveal">
          SOLUSI <span>LOGISTIK</span> YANG ANDAL
        </h2>
        <div className="divider reveal" />
        <p className="about-text reveal">
          PT Indo Sukses Logistik adalah penyedia layanan logistik terintegrasi yang
          berkomitmen memberikan solusi yang aman, efisien, dan terjangkau. Dengan
          infrastruktur strategis di kawasan Tanjung Priok dan jaringan yang terus
          berkembang, kami hadir sebagai mitra andal bisnis Anda.
        </p>
        <div className="about-pillars">
          <div className="pillar-item">
            <span className="pillar-num">01</span>
            <div className="pillar-text">
              <h4>Lokasi Strategis</h4>
              <p>
                Akses premium ke pelabuhan utama Tanjung Priok dengan jarak terdekat ke
                semua terminal.
              </p>
            </div>
          </div>
          <div className="pillar-item">
            <span className="pillar-num">02</span>
            <div className="pillar-text">
              <h4>Standar Tinggi</h4>
              <p>
                Fasilitas bersertifikasi Halal &amp; Dangerous Goods dengan keamanan sistem
                hydrant dan CCTV 24/7.
              </p>
            </div>
          </div>
          <div className="pillar-item">
            <span className="pillar-num">03</span>
            <div className="pillar-text">
              <h4>Partner Andalan</h4>
              <p>
                Skalabilitas layanan untuk mendukung pertumbuhan bisnis skala kecil hingga
                mega-project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-visual reveal-right">
        <div className="hexagon-grid">
          {hexCards.map((card, i) => (
            <div
              key={i}
              className="hex-card"
              style={
                card.highlight
                  ? {
                      background: 'rgba(240,165,0,.1)',
                      borderColor: 'rgba(240,165,0,.4)',
                    }
                  : undefined
              }
            >
              <div className="hex-icon">{card.icon}</div>
              <h5 style={card.highlight ? { color: 'var(--gold)' } : undefined}>
                {card.label}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
