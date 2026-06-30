'use client';

export default function Contact() {
  return (
    <section className="contact-section section-padding" id="kontakt">
      <div className="container">
        <div className="contact-inner">
          <h2 className="contact-title">
            GATI TË<br /><span>POROSITËSH?</span>
          </h2>
          <p className="contact-subtitle">
            Na kontakto sot dhe le të sjellim vizionin tënd në jetë.
            Çdo porosi fillon me një bisedë të thjeshtë. 🤍
          </p>

          <div className="contact-actions">
            <a
              href="tel:355696023373"
              className="btn-primary"
              id="contact-phone-btn"
            >
              📞 069 602 3373
            </a>
          </div>

          <div className="contact-info">
            <a href="tel:355696023373" className="contact-item" id="contact-tel">
              <span className="contact-item-icon">📞</span>
              <span className="contact-item-text">069 602 3373</span>
            </a>

            <div className="contact-item" id="contact-location">
              <span className="contact-item-icon">📍</span>
              <span className="contact-item-text">Shqipëri 🇦🇱</span>
            </div>

            <div className="contact-item" id="contact-transport">
              <span className="contact-item-icon">🌏</span>
              <span className="contact-item-text">Transport Kombëtar</span>
            </div>

            <div className="contact-item" id="contact-delivery">
              <span className="contact-item-icon">📫</span>
              <span className="contact-item-text">Dërgim i Shpejtë</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
