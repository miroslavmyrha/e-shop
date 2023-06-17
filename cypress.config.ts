import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "http://127.0.0.1:80"
      // implement node event listeners here
    },
  },
});
