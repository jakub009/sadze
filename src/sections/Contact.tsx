import { useMemo } from "react";
import { insurers } from "../config/insurers";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const reviews = useMemo(
    () => [
      {
        name: "Lucia M.",
        location: "Bratislava",
        service: "Požiar bytu",
        detail:
          "Prišli ešte večer, vysvetlili čo sa dá zachrániť a čo treba vyčistiť.",
        result: "Po týždni bol byt bez zápachu a sadze boli odstránené.",
        rating: 4,
      },
      {
        name: "Peter K.",
        location: "Trnava",
        service: "Požiar kuchyne",
        detail:
          "Zápach po požiari zmizol po ozóne, sadze z kuchyne šli dole bez poškodenia.",
        result: "Poisťovni sme poslali ich fotky a protokol v ten istý týždeň.",
        rating: 5,
      },
      {
        name: "Jana R.",
        location: "Nitra",
        service: "Požiar kancelárií",
        detail:
          "Rýchla obhliadka, hneď nastavili postup čistenia a neutralizácie zápachu.",
        result: "Dostali sme fotodokumentáciu a odporúčania na obnovu.",
        rating: 5,
      },
      {
        name: "Zoltan S.",
        location: "Nové Zámky",
        service: "Požiar garáže",
        detail:
          "Dohodnutá cena platila",
        result: "Garáž bola použiteľná o dva den.",
        rating: 4,
      },
    ],
    []
  );

  return (
    <section className="contact">
      <section className="about-insurance" id="poistovne">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Zabezpečujeme konzultáciu s poisťovňami</h2>
            <p>
              Zabezpečíme podklady, fotodokumentáciu a výkazy pre rýchle
              vybavenie poistnej udalosti.
            </p>
          </div>
        </div>
        <div className="insurers-marquee" aria-label="Poisťovne">
          <div className="insurers-track">
            {[...insurers, ...insurers].map((insurer, index) => (
              <a
                className="insurer-card"
                href={insurer.href}
                key={`${insurer.id}-${index}`}
              >
                <img src={insurer.logo} alt={insurer.name} />
                <span className="insurer-name">{insurer.name}</span>
                <span className="insurer-cta">Nahlásenie poistnej udalosti</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="contact-reviews" data-reveal>
        <div className="container">
          <div className="section-head section-head--center">
            <h3 className="reviews-title">Recenzie našich klientov</h3>
            <p>Krátke skúsenosti po zásahu, tak ako ich klienti popísali.</p>
          </div>
        </div>
        <div className="reviews-scatter" aria-label="Recenzie klientov">
          {reviews.map((review) => (
            <article
              className="review-card review-card--scatter"
              key={`${review.name}-${review.location}`}
            >
              <div className="review-head">
                <strong>{review.name}</strong>
                <span>{review.location}</span>
              </div>
              <div className="review-tag">{review.service}</div>
              <div className="review-rating" aria-label={`${review.rating} z 5`}>
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="review-text">{review.detail}</p>
              <p className="review-result">{review.result}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="contact-panel" id="kontakt">
        <div className="container contact-grid">
          <div className="contact-info" data-reveal>
            <div className="contact-brand">
              <h2>Kontakt</h2>
            </div>
            <div className="contact-chips" aria-label="Typ zásahu">
              <span>Obhliadka </span>
              <span>Cenová ponuka</span>
              <span>Realizácia</span>
            </div>
            <div className="contact-details">
              <div>
                <span>Telefonicky</span>
                <strong>+421 911 296 198</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>sadzesk@centrum.sk</strong>
              </div>
              <div>
                <span>Dostupnosť</span>
                <strong>Nonstop 24/7</strong>
              </div>
            </div>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
