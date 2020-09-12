describe('Create Account',function(){
    it('CreateParentAccount',function(){
       /// cy.visit('/#')
        cy.LaunchApplication()
        cy.get('h1[class="text-center"]').contains('Create an Account').should('be.visible')
        ///cy.get('h1[class="text-center"]').should('eq','Create an Account')
        cy.location('protocol').should('eq','htps:')
        cy.get('p').contains('click here').first().click()
    })
})

