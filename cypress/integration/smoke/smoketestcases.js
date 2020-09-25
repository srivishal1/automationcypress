const { groupBy } = require("cypress/types/lodash")
const cypress = require("cypress")

describe('CreateAccount',function(){

    before(function(){
        cy.LaunchApplication()
        cy.get('h1[class="text-center"]').contains('Create an Account').should('be.visible')
    })
    
    // @tags foo,bar
    it('Create Parent Account',function(){
        cy.location('protocol').should('eq','https:')
        cy.get('p').contains('click here').first().click()
    })
})
