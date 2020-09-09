describe('CreateAccount',function(){

    before(function(){
        cy.LaunchApplication()
        cy.get('h1[class="text-center"]').contains('Create an Account').should('be.visible')
    })

    it('Create Parent Account',function(){
        cy.location('protocol').should('eq','https:')
        cy.get('p').contains('click here').first().click()
    })
})
