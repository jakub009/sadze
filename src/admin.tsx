import React from "react";
import ReactDOM from "react-dom/client";
import { jsPDF } from "jspdf";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { UserRole } from "./config/auth";
import SocialRail from "./components/SocialRail";
import ScrollToTop from "./components/ScrollToTop";
import EmergencyCall from "./components/EmergencyCall";
import "./styles/global.css";

type PageKey = "dashboard" | "quotes" | "invoices" | "photos" | "forms" | "permissions";

type StoredFile = {
  id: string;
  name: string;
  type: string;
  size: number;
  dataUrl: string;
  createdAt: string;
};

const loadFiles = (key: string): StoredFile[] => {
  const raw = localStorage.getItem(key);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as StoredFile[];
  } catch {
    return [];
  }
};

const saveFiles = (key: string, files: StoredFile[]) => {
  localStorage.setItem(key, JSON.stringify(files));
};

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("File read failed"));
    reader.readAsDataURL(file);
  });

const AdminDashboard = () => {
  const { user, isAdmin, users, logout } = useAuth();
  const cards = [
    {
      title: "Cenové ponuky",
      description: "Správa doručených ponúk od zákazníkov.",
      href: "/quotes.html",
      count: loadFiles("sadze_quotes").length,
      label: "ponúk",
    },
    {
      title: "Faktúry",
      description: "Vystavené a archivované faktúry.",
      href: "/invoices.html",
      count: loadFiles("sadze_invoices").length,
      label: "faktúr",
    },
    {
      title: "Foto galéria",
      description: "Fotodokumentácia a archív.",
      href: "/photos.html",
      count: loadFiles("sadze_photos").length,
      label: "fotiek",
    },
    {
      title: "Tlačivá",
      description: "Firemné dokumenty a šablóny.",
      href: "/forms.html",
      count: loadFiles("sadze_forms").length,
      label: "tlačív",
    },
  ];

  if (isAdmin) {
    cards.push({
      title: "Oprávnenia",
      description: "Správa prístupov a rolí.",
      href: "/permissions.html",
      count: users.length,
      label: "používateľov",
    });
  }

  return (
    <section className="admin-card admin-dashboard">
      <div className="admin-dashboard-head">
        <div>
          <p className="admin-dashboard-kicker">Admin dashboard</p>
          <h2>Prehľad kategórií</h2>
          <p className="muted">Kliknite na kategóriu pre detailné nastavenia.</p>
        </div>
        <div className="admin-dashboard-user">
          <div>
            <span className="admin-dashboard-label">Prihlásený účet</span>
            <strong>{user?.email ?? "Neznámy účet"}</strong>
            <span className="muted">{isAdmin ? "Admin" : "Používateľ"}</span>
          </div>
          <button
            className="icon-button"
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
        </div>
      </div>
      <div className="admin-dashboard-grid">
        {cards.map((card) => (
          <a key={card.title} className="dashboard-tile" href={card.href}>
            <div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <div className="dashboard-tile-meta">
              <span className="dashboard-tile-count">{card.count}</span>
              <span className="dashboard-tile-label">{card.label}</span>
              <span className="dashboard-tile-action">Otvoriť</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const FileVault = ({
  title,
  storageKey,
  accept,
  variant,
}: {
  title: string;
  storageKey: string;
  accept?: string;
  variant?: "gallery";
}) => {
  const [files, setFiles] = React.useState<StoredFile[]>(() => loadFiles(storageKey));

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files;
    if (!selected || selected.length === 0) return;

    const nextFiles: StoredFile[] = [];
    for (const file of Array.from(selected)) {
      const dataUrl = await fileToDataUrl(file);
      nextFiles.push({
        id: crypto.randomUUID(),
        name: file.name,
        type: file.type || "unknown",
        size: file.size,
        dataUrl,
        createdAt: new Date().toISOString(),
      });
    }
    const updated = [...nextFiles, ...files];
    setFiles(updated);
    saveFiles(storageKey, updated);
    event.target.value = "";
  };

  const handleDownload = (file: StoredFile) => {
    const link = document.createElement("a");
    link.href = file.dataUrl;
    link.download = file.name;
    link.click();
  };

  const handleRemove = (id: string) => {
    const updated = files.filter((file) => file.id !== id);
    setFiles(updated);
    saveFiles(storageKey, updated);
  };

  return (
    <section className="admin-card">
      <div className="admin-card-head">
        <h2>{title}</h2>
        <label className="upload-button">
          Nahrať súbor
          <input type="file" multiple onChange={handleUpload} accept={accept} />
        </label>
      </div>

      {variant === "gallery" ? (
        <div className="photo-grid">
          {files.length === 0 && <p className="muted">Zatiaľ žiadne fotky.</p>}
          {files.map((file) => (
            <div key={file.id} className="photo-card">
              <img src={file.dataUrl} alt={file.name} />
              <div className="photo-actions">
                <span>{file.name}</span>
                <div>
                  <button type="button" onClick={() => handleDownload(file)}>
                    Stiahnuť
                  </button>
                  <button type="button" onClick={() => handleRemove(file.id)}>
                    Zmazať
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="file-list">
          {files.length === 0 && <p className="muted">Zatiaľ žiadne súbory.</p>}
          {files.map((file) => (
            <div key={file.id} className="file-row">
              <div>
                <strong>{file.name}</strong>
                <span>{file.type}</span>
              </div>
              <div className="file-actions">
                <button type="button" onClick={() => handleDownload(file)}>
                  Stiahnuť
                </button>
                <button type="button" onClick={() => handleRemove(file.id)}>
                  Zmazať
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const InvoicePage = () => {
  const [form, setForm] = React.useState({
    invoiceNumber: "2026-001",
    date: new Date().toISOString().slice(0, 10),
    client: "",
    address: "",
    item1: "Sanácia po požiari",
    price1: "350",
    item2: "Odsávanie vody",
    price2: "250",
    item3: "Odvlhčenie",
    price3: "180",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Faktúra", 14, 20);
    doc.setFont("helvetica", "normal");
    doc.text(`Číslo: ${form.invoiceNumber}`, 14, 30);
    doc.text(`Dátum: ${form.date}`, 14, 38);
    doc.text(`Odberateľ: ${form.client}`, 14, 50);
    doc.text(`Adresa: ${form.address}`, 14, 58);

    const items = [
      { name: form.item1, price: Number(form.price1) || 0 },
      { name: form.item2, price: Number(form.price2) || 0 },
      { name: form.item3, price: Number(form.price3) || 0 },
    ];

    let y = 75;
    let total = 0;
    items.forEach((item) => {
      if (!item.name) return;
      doc.text(item.name, 14, y);
      doc.text(`${item.price.toFixed(2)} €`, 160, y, { align: "right" });
      total += item.price;
      y += 8;
    });

    doc.setFont("helvetica", "bold");
    doc.text(`Spolu: ${total.toFixed(2)} €`, 160, y + 6, { align: "right" });

    doc.save(`faktura-${form.invoiceNumber}.pdf`);
  };

  return (
    <section className="admin-card">
      <div className="admin-card-head">
        <h2>Faktúra (šablóna)</h2>
        <button className="button" type="button" onClick={generatePdf}>
          Stiahnuť PDF
        </button>
      </div>
      <div className="invoice-form">
        <label>
          Číslo faktúry
          <input
            type="text"
            value={form.invoiceNumber}
            onChange={(event) => update("invoiceNumber", event.target.value)}
          />
        </label>
        <label>
          Dátum
          <input
            type="date"
            value={form.date}
            onChange={(event) => update("date", event.target.value)}
          />
        </label>
        <label>
          Odberateľ
          <input
            type="text"
            value={form.client}
            onChange={(event) => update("client", event.target.value)}
          />
        </label>
        <label>
          Adresa
          <input
            type="text"
            value={form.address}
            onChange={(event) => update("address", event.target.value)}
          />
        </label>
        <label>
          Položka 1
          <input
            type="text"
            value={form.item1}
            onChange={(event) => update("item1", event.target.value)}
          />
        </label>
        <label>
          Cena 1 (€)
          <input
            type="number"
            value={form.price1}
            onChange={(event) => update("price1", event.target.value)}
          />
        </label>
        <label>
          Položka 2
          <input
            type="text"
            value={form.item2}
            onChange={(event) => update("item2", event.target.value)}
          />
        </label>
        <label>
          Cena 2 (€)
          <input
            type="number"
            value={form.price2}
            onChange={(event) => update("price2", event.target.value)}
          />
        </label>
        <label>
          Položka 3
          <input
            type="text"
            value={form.item3}
            onChange={(event) => update("item3", event.target.value)}
          />
        </label>
        <label>
          Cena 3 (€)
          <input
            type="number"
            value={form.price3}
            onChange={(event) => update("price3", event.target.value)}
          />
        </label>
      </div>
    </section>
  );
};

const PermissionsPage = () => {
  const { createUser, users, isAdmin } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState<UserRole>("user");
  const [message, setMessage] = React.useState<string | null>(null);

  if (!isAdmin) {
    return (
      <section className="admin-card">
        <h2>Oprávnenia</h2>
        <p className="muted">Nemáte oprávnenie na správu používateľov.</p>
      </section>
    );
  }

  const handleCreate = (event: React.FormEvent) => {
    event.preventDefault();
    const error = createUser(email, password, role);
    if (error) {
      setMessage(error);
      return;
    }
    setMessage("Používateľ bol vytvorený.");
    setEmail("");
    setPassword("");
    setRole("user");
  };

  return (
    <section className="admin-card">
      <div className="admin-card-head">
        <h2>Oprávnenia</h2>
      </div>
      <form className="permissions-form" onSubmit={handleCreate}>
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
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <label>
          Rola
          <select value={role} onChange={(event) => setRole(event.target.value as UserRole)}>
            <option value="user">Používateľ</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button className="button" type="submit">
          Vytvoriť prístup
        </button>
        {message && <p className="muted">{message}</p>}
      </form>
      <div className="user-list">
        <h3>Aktívni používatelia</h3>
        {users.map((item) => (
          <div key={item.email} className="user-row">
            <span>{item.email}</span>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const PageBody = ({ page }: { page: PageKey }) => {
  switch (page) {
    case "dashboard":
      return <AdminDashboard />;
    case "quotes":
      return (
        <FileVault
          title="Cenové ponuky"
          storageKey="sadze_quotes"
          accept=".pdf,.doc,.docx,.xls,.xlsx"
        />
      );
    case "invoices":
      return (
        <div className="admin-stack">
          <InvoicePage />
          <FileVault
            title="Archivované faktúry"
            storageKey="sadze_invoices"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
          />
        </div>
      );
    case "photos":
      return (
        <FileVault
          title="Foto galéria"
          storageKey="sadze_photos"
          accept="image/*"
          variant="gallery"
        />
      );
    case "forms":
      return (
        <FileVault
          title="Tlačivá"
          storageKey="sadze_forms"
          accept=".pdf,.doc,.docx,.xls,.xlsx"
        />
      );
    case "permissions":
      return <PermissionsPage />;
    default:
      return null;
  }
};

const AdminGate = ({ page }: { page: PageKey }) => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="admin-card">
        <h2>Prihláste sa</h2>
        <p className="muted">Na prístup k tejto časti je potrebné prihlásenie.</p>
      </div>
    );
  }

  return <PageBody page={page} />;
};

const AdminApp = ({ page }: { page: PageKey }) => (
  <div className="page">
    <Topbar />
    <SocialRail />
    <ScrollToTop />
    <EmergencyCall />
    <Header />
    <main className="admin-page">
      <div className="container admin-container">
        <AdminGate page={page} />
      </div>
    </main>
    <Footer />
  </div>
);

const root = document.getElementById("root");
const page = (root?.dataset.page as PageKey | undefined) ?? "dashboard";

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AdminApp page={page} />
    </AuthProvider>
  </React.StrictMode>
);
