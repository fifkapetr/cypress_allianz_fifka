const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    pmtool_url: "http://tredgate.com/pmtool/index.php?",
    eshop_url: "http://tredgate.com/eshop",
    webtrain_url: "http://tredgate.com/webtrain",
    automation_test_store_url: "https://automationteststore.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 60000,
    baseUrl: "https://tredgate.com/pmtool",
  },
});
