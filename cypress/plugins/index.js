/// <reference types="cypress" />
const path = require("path");


function getConfigurationByFile (file) {
  const path = require("path");
  const fs = require("fs-extra");
  const pathToConfigFile = path.resolve('./cypress', 'config', `config.${file}.json`)

  return fs.readJson(pathToConfigFile)
}

// plugins file
module.exports = (on, config) => {
  // accept a configFile value or use development by default
  // on('before:browser:launch', (browser = {}, args) => {
  //   console.log(config, browser, args);
  //   if (browser.name === 'chrome') {
  //     args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
  //   }
  //   return args;
  // });


  const file = config.env.configFile || 'development'

  return getConfigurationByFile(file)
}
// function getConfigurationFileByEnvName(env) {
//   const fileLocation = path.resolve("cypress/config", `config.${env}.json`);
//   return fs.readJson(fileLocation);
// }
// module.exports = (on, config) => {  
//   const envFile = config.env.configFile;
//   return getConfigurationFileByEnvName(envFile);
// };

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */



// function getConfigurationByFile (file) {
//   const pathToConfigFile = path.resolve('..', 'config', `${file}.json`)

//   return fs.readJson(pathToConfigFile)
// }

// // plugins file
// module.exports = (on, config) => {
//   // accept a configFile value or use development by default
//   const file = config.env.configFile || 'development'

//   return getConfigurationByFile(file)
// }