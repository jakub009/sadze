import type { CSSProperties } from "react";

const heroFireImage =
  "https://images.pexels.com/photos/11688879/pexels-photo-11688879.jpeg?cs=srgb&dl=pexels-vladimir-11688879.jpg&fm=jpg";
const heroFloodImage =
  "https://images.pexels.com/photos/18302377/pexels-photo-18302377.jpeg?cs=srgb&dl=pexels-ehma-18302377.jpg&fm=jpg";

const Hero = () => {
  const headline = "Rýchly zásah po požiari aj vytopení";

  return (
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
          <p className="eyebrow">Služby po požiary a po vytopení</p>
          <h1 className="hero-title" aria-label={headline}>
            <span className="hero-title-ghost" aria-hidden="true">
              {headline}
            </span>
            <span className="hero-title-text" aria-hidden="true">
              {(() => {
                const words = headline.split(" ");
                let globalIndex = 0;

                return words.map((word, wordIndex) => (
                  <span className="hero-title-word" key={`word-${wordIndex}`}>
                    {Array.from(word).map((char, charIndex) => {
                      const delay = globalIndex * 0.04;
                      globalIndex += 1;
                      return (
                        <span
                          className="hero-title-letter"
                          style={{ animationDelay: `${delay}s` }}
                          key={`char-${wordIndex}-${charIndex}`}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                ));
              })()}
            </span>
          </h1>
          <p className="lead">
            Stabilizujeme situáciu okamžite. Zabezpečíme odsávanie vody, sanáciu,
            čistenie sadzí, odvlhčenie aj obnovu interiérov. Transparentný
            postup, jasný plán a rýchla realizácia.
          </p>
          <div className="hero-actions">
            <a className="button" href="#kontakt">
              Odoslať formulár
            </a>
            <a className="button button-ghost" href="tel:+421911296198">
              Kontaktujte nás
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
