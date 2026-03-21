import disinfectingStairs from "../public/full-shot-man-with-suit-disinfecting-stairs.jpg";
import darkPaintWorker from "../public/side-view-worker-with-dark-paint.jpg";
import cinemaCleaning from "../public/workers-cleaning-chairs-with-disinfectants-cinema.jpg";
import protectiveWorker from "../public/31931F7A-E30F-413A-BBDB-ED811DCF0F17.png";
import serviceFire from "../public/service-fire.jpg";

const About = () => (
  <section className="about" id="onas" aria-label="Profil firmy">
    <div className="container about-grid">
      <div className="about-text" data-reveal>
        <p className="eyebrow">Profil firmy</p>
        <h2>Profesionálna sanácia škôd s jasným plánom</h2>
        <p>
          Zásahy po požiari alebo vytopení riadime systematicky a transparentne.
          Každý krok vysvetlíme, zdokumentujeme a prispôsobíme realite na mieste.
          Výsledok: stabilizovaný priestor, jasný postup obnovy a minimum výpadkov.
        </p>
      </div>
      <div className="home-collage about-collage" data-reveal>
        {[
          {
            src: protectiveWorker,
            alt: "Ochranné vybavenie pri zásahu",
          },
          {
            src: serviceFire,
            alt: "Sanácia po požiari v interiéri",
          },
          {
            src: cinemaCleaning,
            alt: "Dezinfekcia a čistenie sedačiek v sále",
          },
          {
            src: disinfectingStairs,
            alt: "Dezinfekcia schodiska a povrchov",
          },
          {
            src: darkPaintWorker,
            alt: "Čistenie povrchov po poškodení sadzami",
          },
        ].map((item, index) => (
          <figure className="collage-item" key={`about-collage-${index}`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default About;
