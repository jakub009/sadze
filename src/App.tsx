import { useEffect } from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";
import SocialRail from "./components/SocialRail";
import ScrollToTop from "./components/ScrollToTop";
import EmergencyCall from "./components/EmergencyCall";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

const App = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (elements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) {
      return;
    }

    const target = document.getElementById(hash);
    if (!target) {
      return;
    }

    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  return (
    <div className="page home-page">
      <Topbar />
      <SocialRail />
      <ScrollToTop />
      <EmergencyCall />
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Contact />
      </main>
      <CookieBanner />
      <Footer />
    </div>
  );
};

export default App;
