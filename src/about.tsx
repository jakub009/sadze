import React, { type CSSProperties } from "react";
import ReactDOM from "react-dom/client";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialRail from "./components/SocialRail";
import ScrollToTop from "./components/ScrollToTop";
import EmergencyCall from "./components/EmergencyCall";
import { AuthProvider } from "./context/AuthContext";
import aboutHeroImage from "./public/side-view-worker-with-dark-paint.jpg";
import technologieImage from "./public/workers-cleaning-chairs-with-disinfectants-cinema.jpg";
import procesImage from "./public/full-shot-man-with-suit-disinfecting-stairs.jpg";
import poistenieImage from "./public/31931F7A-E30F-413A-BBDB-ED811DCF0F17.png";
import processContactImage from "./public/process-contact.jpg";
import processInspectionImage from "./public/process-inspection.jpg";
import processSanitationImage from "./public/31931F7A-E30F-413A-BBDB-ED811DCF0F17.png";
import processControlImage from "./public/workers-cleaning-chairs-with-disinfectants-cinema.jpg";
import sootRemovalImage from "./public/Gemini_Generated_Image_vovh0ivovh0ivovh.png";
import ozoneImage from "./public/cistenie-ozonom_ozonovanie-po-poziari.jpg";
import hepaImage from "./public/workers-cleaning-chairs-with-disinfectants-cinema.jpg";
import insurancePhotoImage from "./public/insurance-photo.jpg";
import insuranceDocsImage from "./public/3C274B11-9608-4753-AC0A-B3078B47D66D.png";
import coordinationImage from "./public/inspection-coordination.jpg";
import "./styles/global.css";

const AboutPage = () => {
  return (
    <div className="page">
      <Topbar />
      <SocialRail />
      <ScrollToTop />
      <EmergencyCall />
      <Header />
      <main className="about-page">
        <section
          className="about-hero about-hero--photo"
          id="onas"
          style={
            {
              "--hero-photo": `url(${aboutHeroImage})`,
            } as CSSProperties
          }
        >
          <div className="container about-hero-inner">
            <p className="eyebrow">O nás</p>
            <h1>Odborné zásahy po požiari a vytopení</h1>
            <p className="about-hero-subtitle">
              Našou úlohou je stabilizovať situáciu, ochrániť majetok a pripraviť
              priestor na obnovu. Všetko s dôrazom na bezpečnosť, presný postup
              a transparentnú komunikáciu.
            </p>
            <div className="about-hero-actions">
              <a className="button" href="/#kontakt">
                Objednať zásah
              </a>
              <a className="button button-ghost" href="tel:+421911296198">
                Zavolať 24/7
              </a>
            </div>
          </div>
        </section>

        <section
          className="about-values about-pane"
          id="technologie"
          style={
            {
              "--pane-photo": `url(${technologieImage})`,
            } as CSSProperties
          }
        >
          <div className="container">
            <div className="section-head">
              <h2>Technológie</h2>
              <p>Overené postupy a technika pre stabilizáciu aj obnovu.</p>
            </div>
            <div className="values-grid">
              <div className="value-card value-card--photo">
                <div className="value-card-media">
                  <img
                    src={sootRemovalImage}
                    alt="Odstraňovanie sadzí po požiari"
                    loading="lazy"
                  />
                </div>
                <h3>Odstraňovanie sadzí</h3>
                <p>Dekontaminácia povrchov a odstránenie sadzí po požiari.</p>
              </div>
              <div className="value-card value-card--photo">
                <div className="value-card-media">
                  <img src={ozoneImage} alt="Ozónovanie a dezinfekcia priestoru" loading="lazy" />
                </div>
                <h3>Ozónovanie a dezinfekcia</h3>
                <p>Odstránenie zápachu a mikrobiologickej záťaže.</p>
              </div>
              <div className="value-card value-card--photo">
                <div className="value-card-media">
                  <img src={hepaImage} alt="HEPA filtrácia a dekontaminácia sadzí" loading="lazy" />
                </div>
                <h3>HEPA filtrácia</h3>
                <p>Dekontaminácia sadzí a prachových častíc z prostredia.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-process about-pane"
          id="proces"
          style={
            {
              "--pane-photo": `url(${procesImage})`,
            } as CSSProperties
          }
        >
          <div className="container">
            <div className="section-head">
              <h2>Postup zásahu</h2>
              <p>Od prvého kontaktu po odovzdanie priestoru.</p>
            </div>
            <div className="process-grid">
              <div
                className="process-step process-step--photo"
                style={
                  {
                    "--step-photo": `url(${processContactImage})`,
                  } as CSSProperties
                }
              >
                <span>1</span>
                <h3>Kontakt</h3>
                <p>Získame základné informácie a dohodneme obhliadku.</p>
                <span className="process-arrow" aria-hidden="true" />
              </div>
              <div
                className="process-step process-step--photo"
                style={
                  {
                    "--step-photo": `url(${processInspectionImage})`,
                  } as CSSProperties
                }
              >
                <span>2</span>
                <h3>Obhliadka</h3>
                <p>Na mieste nastavíme postup podľa rozsahu poškodenia.</p>
                <span className="process-arrow" aria-hidden="true" />
              </div>
              <div
                className="process-step process-step--photo"
                style={
                  {
                    "--step-photo": `url(${processSanitationImage})`,
                  } as CSSProperties
                }
              >
                <span>3</span>
                <h3>Sanácia</h3>
                <p>Čistenie, sušenie, dekontaminácia a stabilizácia.</p>
                <span className="process-arrow" aria-hidden="true" />
              </div>
              <div
                className="process-step process-step--photo"
                style={
                  {
                    "--step-photo": `url(${processControlImage})`,
                  } as CSSProperties
                }
              >
                <span>4</span>
                <h3>Kontrola</h3>
                <p>Merania a dokumentácia výsledkov zásahu.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-values about-pane"
          id="poistenie"
          style={
            {
              "--pane-photo": `url(${poistenieImage})`,
            } as CSSProperties
          }
        >
          <div className="container">
            <div className="section-head">
              <h2>Poistenie</h2>
              <p>Pomôžeme s podkladmi a komunikáciou pri poistnej udalosti.</p>
            </div>
            <div className="values-grid">
              <div className="value-card value-card--photo">
                <div className="value-card-media">
                  <img
                    src={insuranceDocsImage}
                    alt="Podklady a protokoly pre poisťovňu"
                    loading="lazy"
                  />
                </div>
                <h3>Podklady pre poisťovňu</h3>
                <p>Výkazy, záznamy a protokoly podľa požiadaviek.</p>
              </div>
              <div className="value-card value-card--photo">
                <div className="value-card-media">
                  <img
                    src={insurancePhotoImage}
                    alt="Fotodokumentácia stavu po zásahu"
                    loading="lazy"
                  />
                </div>
                <h3>Fotodokumentácia</h3>
                <p>Jasný stav pred, počas a po zásahu.</p>
              </div>
              <div className="value-card value-card--photo">
                <div className="value-card-media">
                  <img
                    src={coordinationImage}
                    alt="Koordinácia obhliadky a komunikácia"
                    loading="lazy"
                  />
                </div>
                <h3>Koordinácia obhliadky</h3>
                <p>Spolupráca s likvidátorom a rýchle dohodnutie termínu.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AboutPage />
    </AuthProvider>
  </React.StrictMode>
);
