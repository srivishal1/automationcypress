import homePage from '../../pageObjects/homePage'
import registrationPage from '../../pageObjects/registrationPage'

describe('Create Account',function(){

    const homePageObj = new homePage()
    const registrationPageObj = new registrationPage()

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

     var accountdetails = {} 
    it('Create Parent Account',function(){

        cy.visit(Cypress.env("baseUrl"))
        //cy.LaunchApplication()
        homePageObj.checkifHomePageOpened()
        homePageObj.clickOnParentSignUpBtn()
        registrationPageObj.checkRegistartionPageOpened()
        registrationPageObj.selectPrefix("Mr.")
        var firstName= "automationfname"+makeid(3)
        accountdetails["firstName"]=firstName
        registrationPageObj.enterFirstName(firstName)
        cy.log("firstname is "+accountdetails["firstName"])
        var lastName= "automationlname"+makeid(3)
        registrationPageObj.enterInitial("Mr")
        registrationPageObj.enterLastName(lastName)
        accountdetails["lastName"]=lastName
        registrationPageObj.enterPrimaryPhoneNo("555-5555-5555")
        registrationPageObj.selectPrimaryPhoneType("Mobile")
        registrationPageObj.enterPrarentAddressLineOne("191 NY")
        registrationPageObj.enterPrarentAddressLineTwo("NJ")
        registrationPageObj.selectCountry("India")
        registrationPageObj.enterCity("New York")
        registrationPageObj.enterZip("11111")
        //registrationPageObj.selectState("AE")
        registrationPageObj.enterParentEmail(firstName+"@gmail.com")
        registrationPageObj.enterParentPassword("pencils14!")
        registrationPageObj.enterConfirmPassword("pencils14!")



    })
})

