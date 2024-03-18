const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  env: {
    pmtool_url: "http://tredgate.com/pmtool/index.php?",
    eshop_url: "http://tredgate.com/eshop",
    webtrain_url: "http://tredgate.com/webtrain",
    automation_test_store_url: "https://automationteststore.com/",
  },
};
