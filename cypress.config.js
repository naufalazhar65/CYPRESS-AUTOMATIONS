const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // defaultCommandTimeout: 4000,
  // pageLoadTimeout: 30000,
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/reports/mocha"
  },
  projectId: 'koxvv5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
