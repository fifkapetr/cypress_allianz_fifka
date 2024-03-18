const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  env: {
    pmtool_url: "https://google.com",
    eshop_url: "https://seznam.cz",
    webtrain_url: "https://www.allianz.cz/cs_CZ/pojisteni.html",
    automation_test_store_url: "https://www.principal.tech/cz/",
  },
};
