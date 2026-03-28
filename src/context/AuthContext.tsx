import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { MASTER_DEFAULT_PASSWORD, MASTER_USERS, UserRole } from "../config/auth";

type StoredUser = {
  email: string;
  password: string;
  role: UserRole;
};

type Session = {
  email: string;
};

type AuthContextValue = {
  user: StoredUser | null;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  createUser: (email: string, password: string, role: UserRole) => string | null;
  users: StoredUser[];
};

const USERS_KEY = "sadze_users";
const SESSION_KEY = "sadze_session";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const loadUsers = (): StoredUser[] => {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as StoredUser[];
  } catch {
    return [];
  }
};

const saveUsers = (users: StoredUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const seedMasters = () => {
  const existing = loadUsers();
  if (existing.length > 0) return;

  const seeded: StoredUser[] = MASTER_USERS.map((user) => ({
    email: user.email.toLowerCase(),
    password: MASTER_DEFAULT_PASSWORD,
    role: user.role,
  }));

  saveUsers(seeded);
};

const loadSession = (): Session | null => {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
};

const saveSession = (session: Session | null) => {
  if (!session) {
    localStorage.removeItem(SESSION_KEY);
    return;
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<StoredUser[]>([]);
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    seedMasters();
    const loadedUsers = loadUsers();
    setUsers(loadedUsers);

    const session = loadSession();
    if (session) {
      const sessionUser = loadedUsers.find(
        (item) => item.email.toLowerCase() === session.email.toLowerCase()
      );
      if (sessionUser) {
        setUser(sessionUser);
      }
    }
  }, []);

  const login = (email: string, password: string) => {
    const normalized = email.trim().toLowerCase();
    const found = users.find(
      (item) => item.email.toLowerCase() === normalized && item.password === password
    );
    if (!found) {
      return false;
    }
    setUser(found);
    saveSession({ email: found.email });
    return true;
  };

  const logout = () => {
    setUser(null);
    saveSession(null);
  };

  const createUser = (email: string, password: string, role: UserRole) => {
    const normalized = email.trim().toLowerCase();
    if (!normalized || !password) {
      return "Vyplňte email a heslo.";
    }
    if (users.some((item) => item.email.toLowerCase() === normalized)) {
      return "Tento email už existuje.";
    }

    const next = [...users, { email: normalized, password, role }];
    setUsers(next);
    saveUsers(next);
    return null;
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAdmin: user?.role === "admin",
      login,
      logout,
      createUser,
      users,
    }),
    [user, users]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
