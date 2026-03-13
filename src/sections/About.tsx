const About = () => (
  <section className="about" aria-label="O nás">
    <div className="container about-grid">
      <div className="about-text" data-reveal>
        <h2>O nás</h2>
        <p>
          Sme tím, ktorý rieši následky požiarov a povodní rýchlo, technicky presne a
          s dôrazom na bezpečnosť. Každý projekt začína prehliadkou, návrhom postupu
          a jasným rozpočtom. Vy rozhodujete, my realizujeme.
        </p>
      </div>
      <div className="about-cards" data-reveal>
        <div className="info-card">
          <h3>Technológie</h3>
          <p>Priemyselné vysúšače, ozónovanie, HEPA filtrácia, termokamery.</p>
        </div>
        <div className="info-card">
          <h3>Transparentnosť</h3>
          <p>Priebeh zásahu reportujeme a dokumentujeme v každej fáze.</p>
        </div>
        <div className="info-card">
          <h3>Poistenie</h3>
          <p>Pomôžeme s podkladmi pre poisťovňu a likvidáciu škôd.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
