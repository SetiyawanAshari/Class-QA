import commandsPOM from "../../support/pageObject/commandsPOM"
import loginData from "../../fixtures/loginData.json"

describe ('Scenario Login', () => {
    it('TC-001 - Login with valid username and valid password', ()=>{

        commandsPOM.visit()
        commandsPOM.inputUsername(loginData.validUsername)
        commandsPOM.inputPassword(loginData.validPassword)
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.validationLogin()
        
    })

    it('TC-002 - Login with valid username and invalid password', ()=>{

        commandsPOM.visit()
        commandsPOM.inputUsername(loginData.validUsername)
        commandsPOM.inputPassword(loginData.invalidPassword)
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.valididationAlertText()

    })

    it('TC-003 - Login with invalid username and valid password', ()=>{

        commandsPOM.visit()
        commandsPOM.inputUsername(loginData.invalidUsername)
        commandsPOM.inputPassword(loginData.validPassword)
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.valididationAlertText()

    })

    it('TC-004 - Login with invalid username and invalid password', ()=>{

        commandsPOM.visit()
        commandsPOM.inputUsername(loginData.invalidUsername)
        commandsPOM.inputPassword(loginData.invalidPassword)
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.valididationAlertText()

    })

    it('TC-005 - Login with empty username and empty password', ()=>{

        commandsPOM.visit()
        commandsPOM.emptyUsername()
        commandsPOM.emptyPassword()
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.validationAlertUsername()
        commandsPOM.validationAlertPassword()

    })

    it('TC-006 - Login with only username field and empty password', ()=>{

        commandsPOM.visit()
        commandsPOM.inputUsername(loginData.validUsername)
        commandsPOM.emptyPassword()
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.validationAlertPassword()
       
    })

    it('TC-007 - Login with only password field and empty username', ()=>{

        commandsPOM.visit()
        commandsPOM.emptyUsername()
        commandsPOM.inputPassword(loginData.validPassword)
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.validationAlertUsername()
    
    })

    it('TC-008 - Login with invalid username and empty passwor', ()=>{

        commandsPOM.visit()
        commandsPOM.inputUsername(loginData.invalidUsername)
        commandsPOM.emptyPassword()
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.validationAlertPassword
        
    })
    
     it('TC-009 - Login with only empty username and  invalid password', ()=>{

        commandsPOM.visit()
        commandsPOM.emptyUsername()
        commandsPOM.inputPassword(loginData.invalidPassword)
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.validationAlertUsername
        
    })

    it('TC-010 - Login with abnormal format username and valid password', ()=>{

        commandsPOM.visit()
        commandsPOM.inputUsername(loginData.abnormalUsername)
        commandsPOM.inputPassword(loginData.validPassword)
        commandsPOM.validationLoginBtn()
        commandsPOM.clickLoginBtn()
        commandsPOM.valididationAlertText()
        
    })
    

})