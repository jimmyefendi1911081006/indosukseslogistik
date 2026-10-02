'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [showVideo, setShowVideo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!showVideo) {
      timer = setTimeout(() => {
        setShowVideo(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showVideo]);

  const videoRef = React.useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [showVideo]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleNavLink = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav id="navbar">
        <div 
          className="nav-logo" 
          onClick={handleLogoClick}
          style={{ position: 'relative', width: '150px', height: '50px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          {/* Animated Video Logo */}
          <video
            ref={videoRef}
            src="/animasi%20logo.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => setShowVideo(false)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '140px',
              height: '44px',
              objectFit: 'cover',
              mixBlendMode: 'screen',
              filter: 'contrast(300%) brightness(50%)',
              pointerEvents: 'none',
              opacity: showVideo ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              zIndex: showVideo ? 2 : 1
            }}
          />

          {/* Static Image Logo */}
          <img 
            src="/ISL_logo.png" 
            alt="ISL Logo" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90px',
              objectFit: 'contain',
              opacity: !showVideo ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
              pointerEvents: 'none',
              zIndex: !showVideo ? 2 : 1
            }}
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#services">Layanan</a>
          <a href="#depo">Depo</a>
          <a href="#cold-storage">Cold Storage</a>
          <a href="#siklus-alat-berat">Alat Berat</a>
          <a href="#fleet">Armada</a>
          <a href="#clients">Klien</a>
          <a href="#contact">Kontak</a>
        </div>

        {/* Desktop CTA Button */}
        <button 
          className="nav-cta"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Hubungi Kami
        </button>

        {/* Hamburger Button (Mobile Only) */}
        <button 
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)} />

      {/* Mobile Slide-in Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src="/ISL_logo.png" alt="ISL Logo" style={{ width: '80px' }} />
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <nav className="mobile-menu-links">
          <a onClick={() => handleNavLink('about')}>Tentang ISL</a>
          <a onClick={() => handleNavLink('services')}>Layanan</a>
          <a onClick={() => handleNavLink('depo')}>Depo Kontainer</a>
          <a onClick={() => handleNavLink('cold-storage')}>Cold Storage</a>
          <a onClick={() => handleNavLink('siklus-alat-berat')}>Alat Berat</a>
          <a onClick={() => handleNavLink('fleet')}>Armada & Customs</a>
          <a onClick={() => handleNavLink('clients')}>Klien</a>
          <a onClick={() => handleNavLink('contact')}>Kontak</a>
        </nav>
        <button 
          className="mobile-menu-cta"
          onClick={() => handleNavLink('contact')}
        >
          Hubungi Kami
        </button>
      </div>
    </>
  );
}

