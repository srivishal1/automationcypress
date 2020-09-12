class registrationPage{

    prefixElement(){
        return cy.get('select[name="prefix"')
    }

    firstNameElement(){
        return cy.get('input[name="firstName"')
    }

    initialElement(){
        return cy.get('input[name="initial"')
    }

    lastNameElement(){
        return cy.get('input[name="lastName"')
    }

    primaryPhoneNoElement(){
        return cy.get('input[id="primaryPhoneNumber"]')
    }

    phoneTypeEle(){
        return cy.get('select[name="primaryPhoneType"]')
    }

    addressLine1Ele(){
        return cy.get('input[id="addressLine1"]')
    }

    addressLine2Ele(){
        return cy.get('input[id="addressLine2"]')
    }

    addressCountry(){
        return cy.get('select[name="addressCountry"]')
    }

    city(){
        return cy.get('input[id="addressCity"]')
    }
    
    state(){
        return cy.get('select[name="addressStateDdl"]')
    }

    zip(){
        return cy.get('input[name="addressZip"]')
    }
    
    parentEmailEle(){
        return cy.get('input[type="email"]')
    }

    parentUserNameEle(){
        return cy.get('input[name="username"]')
    }

    parentPasswordEle(){
        return cy.get('input[name="password"]')
    }

    parentConfirmPasswordEle(){
        return cy.get('input[id="confirmPassword"]')
    }
    
    
    checkRegistartionPageOpened() {
        cy.title().should('eq','SSAT - Registration')
    }

    selectPrefix(value) {
        return this.prefixElement().select(value)   
      }

    enterFirstName(value) {
        ///this.firstNameElement().clear()
        return this.firstNameElement().first().type(value)  
      }

    enterInitial(value) {
        ///this.initialElement().clear()
        return this.initialElement().type(value)   
      }

    enterLastName(value) {
        this.lastNameElement().clear()
        return this.lastNameElement().first().type(value) 
      }

     enterPrimaryPhoneNo(value){
         return this.primaryPhoneNoElement().type(value) 
     }

     selectPrimaryPhoneType(value){
        return this.phoneTypeEle().type(value) 
    }

    enterPrarentAddressLineOne(value){
        return this.addressLine1Ele().type(value) 
    }

    enterPrarentAddressLineTwo(value){
        return this.addressLine2Ele().type(value) 
    }

    selectCountry(value){
        return this.addressCountry().select(value)
    }

    enterCity(value){
        return this.city().type(value) 
    }

    selectState(value){
        return this.state().select(value)
    }

    enterZip(value){
        return this.zip().type(value) 
    }

    enterParentEmail(value){
        return this.parentEmailEle().type(value) 
    }

    enterParentUserName(value){
        return this.parentUserNameEle().type(value) 
    }

    enterParentPassword(value){
        return this.parentPasswordEle().type(value) 
    }

    enterConfirmPassword(value){
        return this.parentConfirmPasswordEle().type(value) 
    }

    
}

export default registrationPage