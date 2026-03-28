export type UserRole = "admin" | "user";

export type SeedUser = {
  email: string;
  role: UserRole;
};

export const MASTER_USERS: SeedUser[] = [
  { email: "jakubsevcik236@gmail.com", role: "admin" },
  { email: "mario_domcek@centrum.sk", role: "admin" },
];

// Test-only default password for seeded master users. Change for production.
export const MASTER_DEFAULT_PASSWORD = "admin123";
