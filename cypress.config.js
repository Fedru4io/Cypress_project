const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    //baseUrl: 'http://by01-vm46.topsoft.local/home',
    excludeSpecPattern: '**/EXAMPLES/**',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
});