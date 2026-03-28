import { useEffect, useState } from "react";

type ConsentState = "accepted" | "declined" | "pending";

const STORAGE_KEY = "sadze_cookie_consent";

const CookieBanner = () => {
  const [consent, setConsent] = useState<ConsentState>("pending");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
  }, []);

  const handleChoice = (choice: Exclude<ConsentState, "pending">) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setConsent(choice);
  };

  if (consent !== "pending") {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <div className="cookie-content">
        <div>
          <strong>Cookies</strong>
          <p>
            Používame cookies na zlepšenie funkčnosti webu. Viac informácií nájdete v
            <a href="/cookies.html"> cookies politike</a>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="button" type="button" onClick={() => handleChoice("accepted")}>
            Súhlasím
          </button>
          <button
            className="button button-outline"
            type="button"
            onClick={() => handleChoice("declined")}
          >
            Odmietnuť
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
