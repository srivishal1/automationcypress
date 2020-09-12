/// <reference types="cypress" />
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
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

// const selectTests = require('cypress-select-tests')

// const pickTests = (filename, foundTests, cypressConfig) => {
//   console.log('picking tests from file', filename)

//   // found tests will be names of the tests found in "filename" spec
//   // it is a list of names, each name an Array of strings
//   // ['suite 1', 'suite 2', ..., 'test name']
//   console.log('found tests')
//   console.log(foundTests)

//   // let's only run tests with "does" in the title
//   return foundTests.filter(fullTestName => fullTestName.join(' ').includes('does'))
// }

// module.exports = (on, config) => {
//   on('file:preprocessor', selectTests(config, pickTests))
// }