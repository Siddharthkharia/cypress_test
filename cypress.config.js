const { defineConfig } = require("cypress");


module.exports = defineConfig({

  projectId: "ocnw76",
  video:true,


  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
  },
  },
  env:{
    AMAZON_URL:"https://amazon.in/"
  },
  numTestsKeptInMemory :5,
  waitForAnimations : true
});
