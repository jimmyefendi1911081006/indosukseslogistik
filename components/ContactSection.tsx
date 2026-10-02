'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section-revamped">
      {/* Background ambient glow orbs */}
      <div className="contact-glow-orb orb-orange"></div>
      <div className="contact-glow-orb orb-blue"></div>

      <div className="cold-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="contact-hero-glass reveal">
          <p className="about-tag" style={{ display: 'inline-block' }}>
            Kontak & Layanan 24/7
          </p>
          <h2 className="section-title">
            HUBUNGI <span>TIM OPERASIONAL ISL</span>
          </h2>
          <p className="about-text" style={{ maxWidth: '720px', margin: '1rem auto 2.5rem', textAlign: 'center', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)' }}>
            Siap memberikan solusi logistik terintegrasi, efisien, dan terjangkau untuk pertumbuhan bisnis Anda di seluruh lini Jabodetabek & jaringan pelabuhan utama.
          </p>

          {/* Email Contacts Grid */}
          <div className="contact-email-cards-grid">
            {/* Card 1: CS */}
            <a href="mailto:cs@indosukseslogistik.com" className="contact-email-card">
              <div className="contact-card-icon">💬</div>
              <div className="contact-card-info">
                <span className="contact-card-badge">24/7 Customer Support</span>
                <h4 className="contact-card-title">Customer Service & Operasional</h4>
                <strong className="contact-card-email">cs@indosukseslogistik.com</strong>
                <p className="contact-card-desc">Pertanyaan operasional, status kargo real-time, & layanan kepabeanan.</p>
              </div>
            </a>

            {/* Card 2: Marketing */}
            <a href="mailto:market@indosukseslogistik.com" className="contact-email-card highlight-contact-card">
              <div className="contact-card-icon">⚡</div>
              <div className="contact-card-info">
                <span className="contact-card-badge gold-badge">B2B Commercial & Quotation</span>
                <h4 className="contact-card-title">Marketing & Inkuiri Bisnis</h4>
                <strong className="contact-card-email gold-email">market@indosukseslogistik.com</strong>
                <p className="contact-card-desc">Penawaran harga, kerjasama armada, penyewaan depo & proyek khusus.</p>
              </div>
            </a>
          </div>

          {/* Direct CTA Action */}
          <div className="contact-cta-wrapper" style={{ marginTop: '3.5rem' }}>
            <a 
              href="https://wa.me/6282132251222" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-cta" 
            >
              💬 Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
