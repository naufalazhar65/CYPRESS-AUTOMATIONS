// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import addContext from "mochawesome/addContext";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Cypress.on("test:after:run", (test, runnable) => {  
//     if (test.state === "passed") {    
//       const screenshot =`cypress/assets/images/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title}.png`;    
//       addContext({ test }, screenshot); 
//       const videos =`cypress/assets/videos/${Cypress.spec.name}.mp4`;    
//       addContext({ test }, videos);  
//     } else if (test.state === "failed") {    
//       const screenshot =`cypress/assets/images/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;    
//       addContext({ test }, screenshot);
//       const videos =`cypress/assets/videos/${Cypress.spec.name}.mp4`;    
//       addContext({ test }, videos);
//     }
//   });