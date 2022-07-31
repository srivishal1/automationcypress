class homePage{
    clickHereBtn(){
        return cy.get('p').contains('click here')
    }

    createAccountTxt(){
        return cy.get('h1[class="text-center"]').contains('Create')
    }

    clickOnParentSignUpBtn() {
        this.clickHereBtn().first().click()
        return this
      }

     checkifHomePageOpened() {
        this.createAccountTxt().should('be.visible')
        return this
     }
}

export default homePage
