'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useEffect(() => {
    // Master timeline for smooth entrance animations on page load
    const tl = gsap.timeline({ delay: 0.15 });

    // 1. Navbar slide down & fade in
    tl.fromTo(
      '#navbar',
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // 2. Tagline slide in from left
    tl.fromTo(
      '.hero-tagline',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );

    // 3. Subtext slide in from left
    tl.fromTo(
      '.hero-subtext',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.6'
    );

    // 4. Action buttons slide up & fade in
    tl.fromTo(
      '.hero-action-btns',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.5'
    );

    // 5. Marquee text above cards fade in & slide down
    tl.fromTo(
      '.hero-cards-marquee',
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.6'
    );

    // 6. Stagger 3 cards from bottom with subtle scale
    tl.fromTo(
      '.bluebird-card',
      { opacity: 0, y: 45, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)' },
      '-=0.5'
    );

    // ===== SCROLL EXIT ANIMATIONS (Left exits Left, Right exits Right) =====
    // Left column slides out to the left on scroll down
    gsap.to('.hero-left-30', {
      x: -150,
      opacity: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#hero',
        start: '15% top',
        end: '65% top',
        scrub: 0.5,
      },
    });

    // Right column slides out to the right on scroll down
    gsap.to('.hero-right-30', {
      x: 150,
      opacity: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#hero',
        start: '15% top',
        end: '65% top',
        scrub: 0.5,
      },
    });

    // Particle canvas remains 0 opacity on hero, fades in only when scrolling below hero
    gsap.to('#particle-canvas', {
      opacity: 0.4,
      scrollTrigger: {
        trigger: '#hero',
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <section id="hero">

      {/* ===== VIDEO BACKGROUND ===== */}
      <div className="hero-video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          {/* Next.js: file di /public langsung bisa diakses dengan path relatif */}
          <source src="/animasi isl.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Vignette overlay — sembunyikan tepi video saat rotasi */}
      <div className="hero-video-vignette" />

      {/* Gradient overlays (bottom & side fade) */}
      <div className="hero-gradient" />
      <div className="hero-gradient-side" />

      {/* Ambient glow orbs */}
      <div className="hero-glow-orb hero-glow-orange" />
      <div className="hero-glow-orb hero-glow-blue" />
      <div className="hero-glow-orb hero-glow-blue-top" />      {/* ===== BOTTOM CONTENT LAYOUT (Bluebird Style) ===== */}
      <div className="hero-bottom-layout">
        
        {/* LEFT COLUMN: 30% width, Tagline & Buttons */}
        <div className="hero-left-30">
          <h2 className="hero-tagline">
            Solusi Logistik yang<br />
            Terintegrasi & Andal
          </h2>
          <p className="hero-subtext" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            PT Indo Sukses Logistik adalah penyedia layanan logistik terintegrasi yang berkomitmen memberikan solusi logistik yang aman, efisien, dan terjangkau.
          </p>
          <div className="hero-action-btns">
            <a href="#services" className="btn-bluebird-primary">Layanan Kami</a>
            <a href="#contact" className="btn-bluebird-outline">Hubungi kami</a>
          </div>
        </div>

        {/* RIGHT COLUMN: 30% width, 3 Cards */}
        <div className="hero-right-30">
          
          {/* Running Marquee Text above 3 Cards */}
          <div className="hero-cards-marquee">
            <div className="hero-cards-marquee-cap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="marquee-cap-icon">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="hero-cards-marquee-viewport">
              <div className="hero-cards-marquee-track">
                <span className="hero-cards-marquee-text">
                  solusi terintegrasi &nbsp;—&nbsp; infrastruktur strategis &nbsp;—&nbsp; presisi operasional &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="hero-cards-marquee-text">
                  solusi terintegrasi &nbsp;—&nbsp; infrastruktur strategis &nbsp;—&nbsp; presisi operasional &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </div>
            </div>
          </div>

          {/* Card 1: Standar Tinggi */}
          <div className="bluebird-card">
            <div className="bluebird-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bluebird-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="bluebird-card-title">Standar Tinggi</h3>
            <p className="bluebird-card-text">Dukungan fasilitas berstandar tinggi.</p>
          </div>

          {/* Card 2: Lokasi Strategis */}
          <div className="bluebird-card">
            <div className="bluebird-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bluebird-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h3 className="bluebird-card-title">Lokasi Strategis</h3>
            <p className="bluebird-card-text">Akses premium ke pelabuhan utama.</p>
          </div>

          {/* Card 3: Partner Andalan */}
          <div className="bluebird-card">
            <div className="bluebird-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bluebird-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="bluebird-card-title">Partner Andalan</h3>
            <p className="bluebird-card-text">Skalabilitas untuk mendukung pertumbuhan bisnis Anda.</p>
          </div>

        </div>

      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
      </div>
    </section>
  );
}
