import React from "react";
import ReactDOM from "react-dom/client";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import SocialRail from "./components/SocialRail";
import ScrollToTop from "./components/ScrollToTop";
import EmergencyCall from "./components/EmergencyCall";
import "./styles/global.css";

type PageKey = "gdpr" | "cookies" | "terms";

type LegalContent = {
  title: string;
  intro: string;
  items: string[];
};

const contentMap: Record<PageKey, LegalContent> = {
  gdpr: {
    title: "GDPR / Ochrana osobných údajov",
    intro:
      "Vaše údaje spracúvame výhradne na účely vybavenia dopytu a komunikácie. Spracúvanie prebieha v súlade s platnou legislatívou a zásadami minimalizácie.",
    items: [
      "Spracúvané údaje: meno, email, telefón, lokalita a popis situácie.",
      "Právny základ: oprávnený záujem alebo súhlas pri odoslaní formulára.",
      "Uchovávanie: po dobu nevyhnutnú na vybavenie požiadavky.",
      "Práva: prístup, oprava, vymazanie, obmedzenie spracúvania.",
    ],
  },
  cookies: {
    title: "Cookies politika",
    intro:
      "Na stránke používame základné technické cookies pre správne fungovanie a voliteľné cookies na zlepšenie služieb. Nastavenia môžete kedykoľvek zmeniť.",
    items: [
      "Technické cookies: zabezpečujú funkčnosť webu.",
      "Preferenčné cookies: ukladajú vaše voľby.",
      "Analytické cookies: anonymné štatistiky návštevnosti.",
    ],
  },
  terms: {
    title: "Obchodné podmienky",
    intro:
      "Podmienky upravujú rozsah služieb, spôsob komunikácie a realizácie zásahov. Presné ceny a harmonogram potvrdzujeme po obhliadke a odsúhlasení klientom.",
    items: [
      "Rozsah práce schvaľujeme písomne pred začiatkom zásahu.",
      "Fakturácia prebieha podľa dohodnutej ponuky.",
      "Reklamácie vybavujeme individuálne podľa charakteru zásahu.",
    ],
  },
};

const LegalPage = ({ page }: { page: PageKey }) => {
  const content = contentMap[page];

  return (
    <div className="page">
      <Topbar />
      <SocialRail />
      <ScrollToTop />
      <EmergencyCall />
      <Header />
      <main className="legal-page">
        <section className="legal">
          <div className="container legal-single">
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
            <ul>
              {content.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const root = document.getElementById("root");
const page = (root?.dataset.page as PageKey | undefined) ?? "gdpr";

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <LegalPage page={page} />
    </AuthProvider>
  </React.StrictMode>
);
