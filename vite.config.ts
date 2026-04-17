import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "src/public",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        admin: resolve(__dirname, "admin.html"),
        cookies: resolve(__dirname, "cookies.html"),
        forms: resolve(__dirname, "forms.html"),
        gdpr: resolve(__dirname, "gdpr.html"),
        invoices: resolve(__dirname, "invoices.html"),
        onas: resolve(__dirname, "onas.html"),
        permissions: resolve(__dirname, "permissions.html"),
        photos: resolve(__dirname, "photos.html"),
        poziar: resolve(__dirname, "poziar.html"),
        quotes: resolve(__dirname, "quotes.html"),
        terms: resolve(__dirname, "terms.html"),
        vytopenie: resolve(__dirname, "vytopenie.html"),
      },
    },
  },
});
