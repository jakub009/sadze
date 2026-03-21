import { useEffect, useMemo, useState } from "react";
import newGalleryImage from "../public/Gemini_Generated_Image_5u11w85u11w85u11.png";
import newGalleryImage2 from "../public/Gemini_Generated_Image_xlzguyxlzguyxlzg.png";
import newGalleryImage3 from "../public/Gemini_Generated_Image_v0f4eyv0f4eyv0f4.png";

const Gallery = () => {
  const items = useMemo(
    () => [
      {
        src: newGalleryImage,
        alt: "Zásah po požiari",
        location: "Administratívna budova, Žilina",
        subtitle: "Kompletné čistenie a stabilizácia priestoru po požiari.",
      },
      {
        src: newGalleryImage2,
        alt: "Sanácia po požiari",
        location: "Bytový dom, Trenčín",
        subtitle: "Odstránenie sadzí a dezinfekcia spoločných priestorov.",
      },
      {
        src: newGalleryImage3,
        alt: "Sanácia po požiari",
        location: "Rodinný dom, Banská Bystrica",
        subtitle: "Stabilizácia priestoru a čistenie po požiari.",
      },
    ],
    []
  );

  const totalSlides = items.length;
  const slides = useMemo(() => {
    if (items.length === 0) {
      return [];
    }
    const first = items[0];
    const last = items[items.length - 1];
    return [last, ...items, first];
  }, [items]);
  const [activeSlide, setActiveSlide] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => {
        if (isJumping || prev >= totalSlides + 1) {
          return prev;
        }
        return prev + 1;
      });
    }, 3500);

    return () => window.clearInterval(timer);
  }, [totalSlides, isPaused, isJumping]);

  const goPrev = () => {
    setActiveSlide((prev) => {
      if (isJumping || prev <= 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const goNext = () => {
    setActiveSlide((prev) => {
      if (isJumping || prev >= totalSlides + 1) {
        return prev;
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    if (!isJumping) return undefined;
    const raf = requestAnimationFrame(() => setIsJumping(false));
    return () => cancelAnimationFrame(raf);
  }, [isJumping]);

  const handleTransitionEnd = () => {
    if (activeSlide === totalSlides + 1) {
      setIsJumping(true);
      setActiveSlide(1);
    }
    if (activeSlide === 0) {
      setIsJumping(true);
      setActiveSlide(totalSlides);
    }
  };

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <h2>Galéria zásahov</h2>
          <p>Ukážky situácií, ktoré vieme stabilizovať, vyčistiť a obnoviť.</p>
        </div>
        <div className="gallery-shape-texts" data-reveal>
          <div className="gallery-shape-text gallery-shape-text--large">
            <span className="gallery-shape-title">Najčastejšie zásahy</span>
            <ul>
              <li>Sanácia sadzí a zápachu</li>
              <li>Odsávanie vody a sušenie</li>
              <li>Dezinfekcia a obnova</li>
            </ul>
          </div>
          <div className="gallery-shape-text gallery-shape-text--small">
            <span className="gallery-shape-title">Rýchle kroky</span>
            <ol>
              <li>Kontaktujte nás</li>
              <li>Prídeme na obhliadku</li>
              <li>Začneme zásah</li>
            </ol>
          </div>
        </div>
        <div className="gallery-slider gallery-slider--hero" data-reveal>
          <button
            className="gallery-arrow gallery-arrow--prev"
            type="button"
            aria-label="Predchádzajúce obrázky"
            onClick={goPrev}
            disabled={totalSlides <= 1}
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <div
            className="gallery-viewport"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
            className="gallery-track"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
              transition: isJumping ? "none" : undefined,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
              {slides.map((item, itemIndex) => (
                <div
                  className="gallery-slide gallery-slide--hero"
                  key={`slide-${itemIndex}`}
                >
                  <img
                    className="gallery-hero-image"
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <div className="gallery-hero-overlay">
                    <span className="gallery-hero-label">
                      Reálne miesto zásahu
                    </span>
                    <h3 className="gallery-hero-title">{item.location}</h3>
                    <p className="gallery-hero-subtitle">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="gallery-arrow gallery-arrow--next"
            type="button"
            aria-label="Nasledujúce obrázky"
            onClick={goNext}
            disabled={totalSlides <= 1}
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
