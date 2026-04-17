export type UserRole = "admin" | "user";

export type SeedUser = {
  email: string;
  role: UserRole;
};

export const MASTER_USERS: SeedUser[] = [
  { email: "mario_domcek@centrum.sk", role: "admin" },
];

export const REMOVED_USER_EMAILS = ["jakubsevcik236@gmail.com"];

// Test-only default password for seeded master users. Change for production.
export const MASTER_DEFAULT_PASSWORD = "admin123";
