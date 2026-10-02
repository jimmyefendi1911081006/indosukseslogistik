import React, { memo } from 'react';
import { MapPin, Mail, Phone, ChevronRight, ShieldCheck, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-glow-line"></div>
      <div className="cold-container relative z-10">
        
        {/* Main Footer Content */}
        <div className="footer-main-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-box">
              <video
                src="/animasi%20logo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="footer-video-logo"
              />
            </div>
            <p className="footer-brand-desc">
              Solusi Terintegrasi. Infrastruktur Strategis. Presisi Operasional. Mitigasi Risiko & Kepabeanan 24/7.
            </p>
            <div className="footer-badges">
              <span className="badge-item"><ShieldCheck size={16} /> Certified Customs</span>
              <span className="badge-item"><Clock size={16} /> 24/7 Operations</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-links-col">
            <h5 className="footer-heading">Navigasi Utama</h5>
            <div className="footer-nav-list">
              <a href="#about"><ChevronRight size={14} className="nav-icon" /> Tentang ISL</a>
              <a href="#services"><ChevronRight size={14} className="nav-icon" /> Layanan</a>
              <a href="#depo"><ChevronRight size={14} className="nav-icon" /> Depo Kontainer</a>
              <a href="#fleet"><ChevronRight size={14} className="nav-icon" /> Armada & Customs</a>
              <a href="#clients"><ChevronRight size={14} className="nav-icon" /> Mitra Klien</a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <h5 className="footer-heading">Layanan Pelanggan</h5>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span><strong>Depo Utama (Halal Hub):</strong><br/>Jl. Sulawesi No 1, Tanjung Priok</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span><strong>Depo Pasoso:</strong><br/>Stasiun Pasoso, Tanjung Priok</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span><strong>Depo Arsa:</strong><br/>Area Pelabuhan Domestik, Tanjung Priok</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} PT Indo Sukses Logistik. All Rights Reserved.</p>
          </div>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
