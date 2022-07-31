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
   describe('Add Test',function(){
        
    
        it('Add Account',function(){

             cy.LaunchApplication()     
            
             homePageObj.checkifHomePageOpened()
        
             const registrationPageObj = homePageObj.clickOnParentSignUpBtn()
        
             registrationPageObj.checkRegistartionPageOpened()
        
             var parentInfo = parentInformation()
        
             registrationPageObj.fillParentInformation(parentInfo)

             var studentInfo=studentInformation()

             registrationPageObj.fillStudentInformation(studentInfo)

             cy.wait(2000)

             const loggedinPageObj = registrationPageObj.clickRegister()

             cy.waitUntil(() => cy.get('div[class="cg-busy-default-text ng-binding"]').should("not.be.visible"))
            
             loggedinPageObj.getWelcomeText().should('contain.text',"\n                    Welcome, "+parentInfo.firstname+" "+parentInfo.lastName+"\n")

             loggedinPageObj.checkAgreetoMarketingCheckbox()

             loggedinPageObj.readParentConsent()

             loggedinPageObj.checkagreeTermsCondition()

             loggedinPageObj.readPrivacyPolicy()

             loggedinPageObj.checkagreeToPrivacyPolicy()

             loggedinPageObj.checkagreeToShareInformation()

             loggedinPageObj.clickSubmitBtn()

             loggedinPageObj.verifyStudentinManageStDropDown(studentInfo.firstname,studentInfo.lastName)
        

})

    })


    function parentInformation() {
        return   {
            prefix: "Mr.",
            firstname: "automationfname"+commonFunc.generaterandomString(3),
            initial:"Mr",
            lastName: "automationlname"+commonFunc.generaterandomString(3),
            primaryphone : "555-555-5555",
            phoneType :"Home",
            addressline1: "Kulas Light",
            addressline2: "Apt. 556",
              country :"India",
              city: "Gwenborough",
              zip: "92998-3874",
            parentemail: "randomemail"+commonFunc.generaterandomString(3)+"@gmail.com",
            parentusername:"autparentuser"+commonFunc.generaterandomString(3),
            parentpassword: ""
           }
       } 

       function studentInformation() {
        return   {
            firstname: "studentFirst"+commonFunc.generaterandomString(3),
            lastName: "studentLast"+commonFunc.generaterandomString(3),
            dob : "03/14/2006",
            cob :"India",
            citybirth: "New York",
            gender: "Male",
            nativelanguage :"English",
            ethnicity: "string:AmericanIndianOrAlaskanNative",
            currentgrade: "string:GradeD",
            schoolType: "string:PublicSchoolWithinUSAndCanada",
            yearapplyingfor: "number:2022",
            interstSchool:"Day",
            religious:"Baptist",
            stuserName:"stuser"+commonFunc.generaterandomString(3),
            password:""

           }
       } 
       
