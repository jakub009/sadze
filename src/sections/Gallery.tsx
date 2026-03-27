import { useEffect, useMemo, useState } from "react";
import newGalleryImage from "../public/chodba.png";
import newGalleryImage2 from "../public/kuchyna.png";
import newGalleryImage3 from "../public/vaňa.png";
import newGalleryImage4 from "../public/pivnica.png";
import newGalleryImage5 from "../public/terasa.png";
import newGalleryImage6 from "../public/wc.png";
import newGalleryImage7 from "../public/odpad.png";
import newGalleryImage8 from "../public/pracovneplošiny.png";


const Gallery = () => {
  const items = useMemo(
    () => [
      {
        src: newGalleryImage,
      },
      {
        src: newGalleryImage2,
      },
      {
        src: newGalleryImage3,
      },
      {
        src: newGalleryImage4,
      },
      {
        src: newGalleryImage5,
      },
      {
        src: newGalleryImage6,
      },
      {
        src: newGalleryImage7,
      },
      {
        src: newGalleryImage8,
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
        <div className="gallery-slider gallery-slider--hero" data-reveal>
          <button
            className="gallery-arrow gallery-arrow--prev"
            type="button"
            aria-label="Predchádzajúce obrázky"
            onClick={goPrev}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="gallery-arrow gallery-arrow--next"
            type="button"
            aria-label="Nasledujúce obrázky"
            onClick={goNext}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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
