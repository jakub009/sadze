import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, isAdmin, login, logout } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
        <nav className="main-nav">
          <a href="/#onas">O nás</a>
          <a href="/#galeria">Galéria</a>
          <a href="/#kontakt">Kontakt</a>
        </nav>
        <div className="header-actions">
          <a className="button button-outline" href="tel:+421901234567">
            Zavolať 24/7
          </a>
          {!user ? (
            <button
              className="button button-outline"
              type="button"
              onClick={() => setLoginOpen(true)}
            >
              Prihlásiť sa
            </button>
          ) : (
            <div className="user-menu">
              <button
                className="button button-outline"
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {user.email}
              </button>
              {menuOpen && (
                <div className="menu-panel">
                  <a href="/quotes.html">Cenové ponuky</a>
                  <a href="/invoices.html">Faktúry</a>
                  <a href="/photos.html">Foto galéria</a>
                  <a href="/forms.html">Tlačivá</a>
                  {isAdmin && <a href="/permissions.html">Oprávnenia</a>}
                  <button type="button" onClick={logout}>
                    Odhlásiť sa
                  </button>
                </div>
              )}
            </div>
          )}
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
