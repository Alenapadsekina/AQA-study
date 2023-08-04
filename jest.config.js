module.exports = {
  //  rootDir: "./tests-snapshots",
  testTimeout: 300000,
  bail: 0,
  preset: "jest-puppeteer",
  reporters: ["default", "jest-allure"],
  //  maxConcurrency: 1,
  maxWorkers: 1,
};
