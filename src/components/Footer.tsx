const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-col footer-brand">
        <div className="footer-logo">
          <img src="/sadziebiela.png" alt="SADZE logo" />
          <span>SADZE.SK</span>
        </div>
        <div className="footer-brand-address">
          <span className="footer-brand-label">Sídlo</span>
          <div className="footer-brand-address-lines">
            <span>For All s.r.o.</span>
            <span>Cukrovarská 146/5</span>
            <span>926 01 Sereď</span>
          </div>
        </div>
      </div>
      <div className="footer-col footer-ids">
        <div className="footer-brand-ids">
          <span>IČO: 47635274</span>
          <span>DIČ: 2024074635</span>
          <span>IČ DPH: SK2024074635</span>
        </div>
      </div>
      <div className="footer-col footer-contact">
        <div className="footer-brand-contact">
          <span className="footer-brand-label">Kontakt</span>
          <div className="footer-brand-contact-links">
            <a className="footer-brand-link" href="tel:+421911296198">
              +421 911 296 198
            </a>
            <a className="footer-brand-link" href="mailto:sadzesk@centrum.sk">
              sadzesk@centrum.sk
            </a>
          </div>
        </div>
      </div>
      <div className="footer-col footer-stack">
        <div className="footer-meta-item">
          <span className="footer-meta-title">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M12 7v5l3 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </span>
            Dostupnosť
          </span>
          <strong className="footer-meta-strong">Nonstop 24/7</strong>
        </div>
        <nav className="footer-legal" aria-label="Právne informácie">
          <a className="footer-link" href="/gdpr.html">
            GDPR / Ochrana osobných údajov
          </a>
          <a className="footer-link" href="/cookies.html">
            Cookies politika
          </a>
          <a className="footer-link" href="/terms.html">
            Obchodné podmienky
          </a>
        </nav>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© 2026 SADZE.SK Všetky práva vyhradené.</span>
      <span className="footer-powered">
        Realizácia a správa webu{" "}
        <a href="https://www.topwebovky.sk" target="_blank" rel="noreferrer">
          TOPwebovky.sk
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
