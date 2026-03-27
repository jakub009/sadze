import React, { type CSSProperties } from "react";
import ReactDOM from "react-dom/client";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import SocialRail from "./components/SocialRail";
import ScrollToTop from "./components/ScrollToTop";
import EmergencyCall from "./components/EmergencyCall";
import "./styles/global.css";

type ServiceKey = "fire" | "flood";

type ServiceContent = {
  title: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  heroPosition: string;
  highlights: string[];
  steps: string[];
  ctaTitle: string;
  ctaText: string;
};

const contentMap: Record<ServiceKey, ServiceContent> = {
  fire: {
    title: "Odstránenie škôd po požiari",
    subtitle:
      "Rýchla stabilizácia, bezpečné čistenie sadzí a obnova interiéru bez zbytočných prieťahov.",
    intro:
      "Zasahujeme okamžite, aby sa škody ďalej nešírili. Zabezpečíme dekontamináciu, odstránenie sadzí a zápachu, ochranu materiálov a prípravu priestoru na obnovu.",
    heroImage: "/service-fire.jpg",
    heroAlt: "Zhorený interiér po požiari",
    heroPosition: "center",
    highlights: [
      "Odstránenie sadzí a zápachu zo stien, stropov a zariadenia.",
      "Bezpečné čistenie povrchov a technológií.",
      "Dezinfekcia a neutralizácia toxických zvyškov.",
      "Dočasné zabezpečenie priestoru proti ďalšiemu poškodeniu.",
      "Priebežná dokumentácia pre poisťovňu.",
    ],
    steps: [
      "Krátka konzultácia a zistenie rozsahu škôd.",
      "Obhliadka na mieste a návrh postupu.",
      "Sanácia, čistenie a stabilizácia priestoru.",
      "Kontrola, odovzdanie a odporúčania k obnove.",
    ],
    ctaTitle: "Potrebujete rýchlu sanáciu po požiari?",
    ctaText:
      "Zavolajte nám a dohodneme zásah v čo najkratšom čase. Sme pripravení 24/7.",
  },
  flood: {
    title: "Odstránenie škôd po vytopení",
    subtitle:
      "Odsávanie vody, technické sušenie a ochrana konštrukcií aj vybavenia.",
    intro:
      "Pri vytopení rozhoduje čas. Rýchlo odsajeme vodu, nasadíme sušenie a zabránime tvorbe plesní. Sledujeme vlhkosť a prispôsobujeme postup podľa typu materiálov.",
    heroImage: "/service-flood.jpg",
    heroAlt: "Vytopená miestnosť po povodni",
    heroPosition: "center",
    highlights: [
      "Rýchle odsávanie vody a hrubé čistenie.",
      "Technické sušenie stien, podláh a izolácií.",
      "Dezinfekcia a prevencia proti plesniam.",
      "Monitoring vlhkosti počas celého zásahu.",
      "Ochrana nábytku a citlivých materiálov.",
    ],
    steps: [
      "Nahlásenie udalosti a základné údaje.",
      "Okamžitý výjazd a zhodnotenie stavu.",
      "Odsatie vody, sušenie a dezinfekcia.",
      "Kontrola výsledkov a odovzdanie.",
    ],
    ctaTitle: "Zasiahnuť treba hneď po vytopení",
    ctaText:
      "Kontaktujte nás čo najskôr, aby sme minimalizovali škody a skrátili dobu obnovy.",
  },
};

const ServicePage = ({ page }: { page: ServiceKey }) => {
  const content = contentMap[page];

  return (
    <div className="page">
      <Topbar />
      <SocialRail />
      <ScrollToTop />
      <EmergencyCall />
      <Header />
      <main className="service-page">
        <section
          className="service-hero"
          style={
            {
              "--service-hero-image": `url(${content.heroImage})`,
              "--service-hero-position": content.heroPosition,
            } as CSSProperties
          }
        >
          <div className="container service-hero-inner">
            <p className="eyebrow">Služby</p>
            <h1>{content.title}</h1>
            <p className="service-subtitle">{content.subtitle}</p>
            <p className="service-intro">{content.intro}</p>
            <div className="service-actions">
              <a className="button" href="/#kontakt">
                Objednať zásah
              </a>
              <a className="button button-ghost" href="tel:+421911296198">
                Zavolať 24/7
              </a>
            </div>
          </div>
          <span className="sr-only">{content.heroAlt}</span>
        </section>
        <section className="service-details">
          <div className="container service-grid">
            <div className="service-card">
              <h2>Čo zabezpečíme</h2>
              <ul>
                {content.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="service-card">
              <h2>Ako prebieha sanácia</h2>
              <ol>
                {content.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section className="service-cta">
          <div className="container service-cta-inner">
            <h2>{content.ctaTitle}</h2>
            <p>{content.ctaText}</p>
            <div className="service-cta-actions">
              <a className="button" href="/#kontakt">
                Napísať správu
              </a>
              <a className="button button-urgent" href="tel:+421911296198">
                Zavolať
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const root = document.getElementById("root");
const page = (root?.dataset.page as ServiceKey | undefined) ?? "fire";

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ServicePage page={page} />
    </AuthProvider>
  </React.StrictMode>
);
