import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://adam-gajek.pages.dev",
  output: "static",
  trailingSlash: "ignore",
  i18n: {
    locales: ["en", "pl"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
});
