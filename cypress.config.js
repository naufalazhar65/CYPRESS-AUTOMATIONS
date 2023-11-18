const { defineConfig } = require("cypress");
const fs = require("fs"); // Tambahkan baris ini untuk impor modul fs

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  video: true,
  videoCompression: true,
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
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--start-fullscreen');
        }

        if (browser.name === 'electron') {
          launchOptions.preferences.fullscreen = false;
        }

        return launchOptions;
      });

      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          )
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video);
          }
        }
      });
    }
  }
});
