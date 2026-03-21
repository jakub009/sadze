const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-col footer-brand">
        <div className="footer-logo">
          <img src="/sadziebiela.png" alt="SADZE logo" />
          <span>SADZE.SK</span>
        </div>
        <p>
          Popožiarne a povodňové služby s nonstop zásahom. Rýchla sanácia,
          odvlhčenie a obnova po celej SR.
        </p>
      </div>
      <div className="footer-col">
        <div className="footer-meta-item footer-meta-tight">
          <span className="footer-meta-title">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M5.5 4h3l1.2 4.8-2.2 1.4a12.5 12.5 0 0 0 5.6 5.6l1.4-2.2L20 15.5v3a1.5 1.5 0 0 1-1.6 1.5C10.8 19.6 4.4 13.2 4 5.6A1.5 1.5 0 0 1 5.5 4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Kontakt
          </span>
          <div className="footer-meta-contact">
            <a className="footer-meta-link" href="tel:+421911296198">
              +421 911 296 198
            </a>
            <div className="footer-meta-row footer-meta-row--email">
              <span className="footer-icon footer-icon--small" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7l9 7 9-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <a className="footer-meta-link" href="mailto:info@sadze.sk">
                info@sadze.sk
              </a>
            </div>
          </div>
          <div className="footer-meta-inline">
            <span>IČO: 47635274</span>
            <span>DIČ: 2024074635</span>
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
