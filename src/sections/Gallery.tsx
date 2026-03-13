import heroImage from "../public/hero.jpg";

const Gallery = () => (
  <section className="gallery" id="galeria">
    <div className="container">
      <div className="section-head" data-reveal>
        <h2>Galéria zásahov</h2>
        <p>Ukážky situácií, ktoré vieme stabilizovať, vyčistiť a obnoviť.</p>
      </div>
      <div className="gallery-grid">
        <figure className="gallery-item" data-reveal>
          <img src={heroImage} alt="Požiar a voda" loading="lazy" />
          <figcaption>Kritická situácia s vodou a ohňom</figcaption>
        </figure>
        <figure className="gallery-item" data-reveal>
          <img src={heroImage} alt="Zásah po požiari" loading="lazy" />
          <figcaption>Sanácia po požiari</figcaption>
        </figure>
        <figure className="gallery-item" data-reveal>
          <img src={heroImage} alt="Zásah po povodni" loading="lazy" />
          <figcaption>Vytopené priestory po povodni</figcaption>
        </figure>
        <figure className="gallery-item" data-reveal>
          <img src={heroImage} alt="Čistenie a obnova" loading="lazy" />
          <figcaption>Čistenie, sušenie, obnova</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default Gallery;
