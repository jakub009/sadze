import type { CSSProperties } from "react";

import heroFireImage from "../public/hero-fire-optimized.jpg";
import heroFloodImage from "../public/hero-flood-optimized.jpg";

const Hero = () => {
  const headlineLines = [
    ["Odborné", "zásahy"],
    ["po", "požiari", "aj", "vytopení"],
  ];
  const headline = headlineLines.flat().join(" ");

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
          <h1 className="hero-title" aria-label={headline}>
            <span className="hero-title-ghost" aria-hidden="true">
              {headlineLines.map((line, lineIndex) => (
                <span className="hero-title-line" key={`ghost-line-${lineIndex}`}>
                  {line.map((word, wordIndex) => (
                    <span
                      className="hero-title-word"
                      key={`ghost-word-${lineIndex}-${wordIndex}`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ))}
            </span>
            <span className="hero-title-text" aria-hidden="true">
              {(() => {
                let globalIndex = 0;

                return headlineLines.map((line, lineIndex) => (
                  <span className="hero-title-line" key={`line-${lineIndex}`}>
                    {line.map((word, wordIndex) => (
                      <span
                        className="hero-title-word"
                        key={`word-${lineIndex}-${wordIndex}`}
                      >
                        {Array.from(word).map((char, charIndex) => {
                          const delay = globalIndex * 0.04;
                          globalIndex += 1;
                          return (
                            <span
                              className="hero-title-letter"
                              style={{ animationDelay: `${delay}s` }}
                              key={`char-${lineIndex}-${wordIndex}-${charIndex}`}
                            >
                              {char}
                            </span>
                          );
                        })}
                      </span>
                    ))}
                  </span>
                ));
              })()}
            </span>
          </h1>
          <p className="hero-lead-mobile">
            Transparentný postup, jasný plán a rýchla realizácia. Všetko pod
            odborným{" "}
            <a
              className="link-accent"
              href="https://verejnyportal.sksi.sk/search/profile/16517"
              target="_blank"
              rel="noreferrer"
            >
              riadením a kontrolou
            </a>
            .
          </p>
          <p className="lead">
            Stabilizujeme situáciu okamžite. Zabezpečíme odsávanie vody, sanáciu,
            čistenie sadzí, odvlhčenie aj obnovu interiérov. Transparentný
            postup, jasný plán a rýchla realizácia. Všetko pod odborným <a
                                                                                                                                    className="link-accent"
                                                                                                                                    href="https://verejnyportal.sksi.sk/search/profile/16517"
                                                                                                                                    target="_blank"
                                                                                                                                    rel="noreferrer"
                                                                                                                                  >
                                                                                                                                     riadením a kontrolou
                                                                                                                                  </a>
          .</p>
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
