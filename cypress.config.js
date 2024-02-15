import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 30000,
  experimentalFetchPolyfill: true,
  reporter: "junit",

  reporterOptions: {
    mochaFile: "results/tests.xml",
  },

  retries: {
    runMode: 3,
    openMode: 0,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
