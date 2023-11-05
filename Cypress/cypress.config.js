const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
    "chromeWebSecurity": false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com'
  },
});
