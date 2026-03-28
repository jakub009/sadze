import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, isAdmin, login, logout } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loginOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLoginOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [loginOpen]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const ok = login(email, password);
    if (!ok) {
      setError("Nesprávny email alebo heslo.");
      return;
    }
    setError("");
    setEmail("");
    setPassword("");
    setLoginOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="/">
          <img src="/sadziebiela.png" alt="SADZE logo" />
          <span className="logo-text">SADZE.SK</span>
        </a>
        <button
          className="mobile-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Otvoriť menu</span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <div className={`header-panel ${mobileOpen ? "is-open" : ""}`} id="mobile-nav">
          <nav className="main-nav">
            <div className="nav-dropdown">
            <button
              className="nav-button nav-button--light"
              type="button"
              aria-haspopup="true"
            >
              Služby
            </button>
              <div className="nav-menu">
                <a href="/poziar.html">Odstránenie škôd po požiari</a>
                <a href="/vytopenie.html">Odstránenie škôd po vytopení</a>
              </div>
            </div>
            <a className="nav-button nav-button--light" href="/onas.html">
              O nás
            </a>
            <a href="/#galeria">Galéria</a>
            <a href="/#kontakt">Kontakt</a>
          </nav>
          <div className="header-mobile-contact">
            <a href="tel:+421911296198">+421 911 296 198</a>
            <a href="mailto:sadzesk@centrum.sk">sadzesk@centrum.sk</a>
          </div>
          <div className="header-actions">
            {!user ? (
              <button
                className="button button-outline"
                type="button"
                onClick={() => setLoginOpen(true)}
              >
                Prihlásiť sa
              </button>
            ) : (
              <>
                <a className="button button-outline" href="/admin.html">
                  Profil
                </a>
                <button
                  className="icon-button icon-button--inverse"
                  type="button"
                  onClick={logout}
                  aria-label="Odhlásiť sa"
                  title="Odhlásiť sa"
                >
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path
                      d="M11 4H4v16h7M20 12H9m11 0-3-3m3 3-3 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {loginOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="login-modal">
            <button
              className="modal-close"
              type="button"
              onClick={() => setLoginOpen(false)}
              aria-label="Zavrieť"
            >
              ×
            </button>
            <h3>Prihlásenie správcu</h3>
            <p className="muted">
              Prihlasovanie je určené iba pre správcov webstránky.
            </p>
            <form onSubmit={handleLogin}>
              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <label>
                Heslo
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </label>
              {error && <div className="login-error">{error}</div>}
              <div className="modal-actions">
                <button className="button" type="submit">
                  Prihlásiť sa
                </button>
                <button
                  className="button button-outline"
                  type="button"
                  onClick={() => setLoginOpen(false)}
                >
                  Zavrieť
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
