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

        cy.LaunchApplication()
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
        



    })
})

