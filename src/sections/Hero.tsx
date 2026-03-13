import type { CSSProperties } from "react";

const heroFireImage =
  "https://images.pexels.com/photos/11688879/pexels-photo-11688879.jpeg?cs=srgb&dl=pexels-vladimir-11688879.jpg&fm=jpg";
const heroFloodImage =
  "https://images.pexels.com/photos/18302377/pexels-photo-18302377.jpeg?cs=srgb&dl=pexels-ehma-18302377.jpg&fm=jpg";

const Hero = () => (
  <section
    className="hero"
    id="onas"
    style={
      {
        "--hero-fire": `url(${heroFireImage})`,
        "--hero-flood": `url(${heroFloodImage})`,
      } as CSSProperties
    }>
    <div className="hero-bg" aria-hidden="true">
      <span className="hero-bg-fire" />
      <span className="hero-bg-flood" />
    </div>
    <div className="container hero-grid">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">Popožiarne a povodňové služby</p>
        <h1>Rýchly zásah po požiari aj vytopení</h1>
        <p className="lead">
          Stabilizujeme situáciu okamžite. Zabezpečíme odsávanie vody, sanáciu,
          čistenie sadzí, odvlhčenie aj obnovu interiérov. Transparentný postup,
          jasný plán a rýchla realizácia.
        </p>
        <div className="hero-actions">
          <a className="button" href="#kontakt">
            Odoslať formulár
          </a>
          <a className="button button-ghost" href="tel:+421901234567">
            Kontaktujte nás
          </a>
        </div>
      </div>
      <div className="hero-panel" data-reveal>
        <div className="hero-panel-card">
          <span>Najčastejšie zásahy</span>
          <ul>
            <li>Sanácia sadzí a zápachu</li>
            <li>Odsávanie vody a sušenie</li>
            <li>Dezinfekcia a obnova</li>
          </ul>
        </div>
        <div className="hero-panel-card">
          <span>Rýchle kroky</span>
          <ol>
            <li>Kontaktujte nás</li>
            <li>Prídeme na obhliadku</li>
            <li>Začneme zásah</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
