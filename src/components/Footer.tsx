const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="footer-logo">
          <img src="/sadziebiela.png" alt="SADZE logo" />
          <span>SADZE</span>
        </div>
        <p>
          Popožiarne a povodňové služby s nonstop zásahom.
          Rýchla sanácia, odvlhčenie a obnova po celej SR.
        </p>
      </div>
      <div className="footer-meta">
        <div>
          <span>Kontakt</span>
          <strong>+421 901 234 567</strong>
          <strong>info@sadze.sk</strong>
        </div>
        <div>
          <span>Dostupnosť</span>
          <strong>Nonstop 24/7</strong>
        </div>
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
    <div className="container footer-bottom">
      <span>© 2026 SADZE. Všetky práva vyhradené.</span>
      <span className="footer-powered">
        Powered by{" "}
        <a href="https://www.webtechdigital.eu/" target="_blank" rel="noreferrer">
          WebTech Digital
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
