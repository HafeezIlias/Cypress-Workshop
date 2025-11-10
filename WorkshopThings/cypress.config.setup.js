
// WORKSHOP CYPRESS AND ALLURE BY HAFEEZ
// THIS ARE THE INGREDIENT TO BE USED IN THE WORKSHOP

//// cypress.config.js or cypress.config.ts
import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // call allureCypress: you can pass options like resultsDir
      allureCypress(on, config, { resultsDir: "allure-results" });

      // return config for Cypress
      return config;
    },
    baseUrl: "https://example.cypress.io",
  },
});

//This we will be inserting into the e2e.js file
///// cypress/support/e2e.js  (or cypress/support/index.js depending on setup)
import "allure-cypress";

// THIS SCRIPT WE WILL BE ADDING TO THE PACKAGE.JSON FILE TO EASE OUR USAGE OF ALLURE WITH CYPRESS
"scripts": {
  "cypress:run": "npx cypress run",
  "allure:generate": "npx allure generate allure-results --clean -o allure-report",
  "allure:open": "npx allure open allure-report",
  "test:allure": "npm run cypress:run && npm run allure:generate && npm run allure:open"
}

// Setting auto record video
    video: true,
// Setting auto screenshot
    screenshotOnRunFailure: true,
// END OF WORKSHOP CYPRESS AND ALLURE BY HAFEEZ