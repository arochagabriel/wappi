const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 1024,
  waitForAnimations: false,
  pageLoadTimeout:30000,
  animationDistanceThreshold: 50,
  e2e: {
    experimentalStudio: true
  }
});
