const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  projects: [
    "<rootDir>/packages/*/jest.config.js",
    "<rootDir>/clients/*/jest.config.js",
  ],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/clients/client-.*"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/clients/client-.*",
    "/__fixtures__/",
  ],
};
