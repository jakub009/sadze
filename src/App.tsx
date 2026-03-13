import { useEffect } from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";
import SocialRail from "./components/SocialRail";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
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

  return (
    <div className="page">
      <Topbar />
      <SocialRail />
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <CookieBanner />
      <Footer />
    </div>
  );
};

export default App;
