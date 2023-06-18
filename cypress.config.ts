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
      baseUrl: "http://10.1.0.49:8080"
      // implement node event listeners here
    },
  },
});
