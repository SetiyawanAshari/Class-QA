import LoginPage from "../../support/POM_projectAkhir/LoginPage"
import dataLogin from "../../fixtures/dataLogin.json"

describe ('Authentication Module', () => {
    it('TC-LG-001 - Login with valid username and valid password (validation login succsessful)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(dataLogin.validUsername)
        LoginPage.inputPassword(dataLogin.validPassword)
        LoginPage.validationLoginBtn()
        LoginPage.interceptLoginSuccsess()
        LoginPage.clickLoginBtn()
        LoginPage.waitLoginSuccess()
        LoginPage.validationLogin()
    })

    it('TC-LG-002 - Login with valid username and valid password (intercept actionsummary)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(dataLogin.validUsername)
        LoginPage.inputPassword(dataLogin.validPassword)
        LoginPage.validationLoginBtn()
        LoginPage.interceptActionsummary()
        LoginPage.clickLoginBtn()
        LoginPage.waitActionsummary()
        LoginPage.validationLogin()
    })

    it('TC-LG-003 - Login with valid username and valid password (intercept location)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(dataLogin.validUsername)
        LoginPage.inputPassword(dataLogin.validPassword)
        LoginPage.validationLoginBtn()
        LoginPage.interceptLocation()
        LoginPage.clickLoginBtn()
        LoginPage.waitLocation()
        LoginPage.validationLogin()
    })

    it('TC-LG-004 - Login with valid username and invalid password (intercept status code)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(dataLogin.validUsername)
        LoginPage.inputPassword(dataLogin.invalidPassword)
        LoginPage.validationLoginBtn
        LoginPage.interceptStatusCode()
        LoginPage.clickLoginBtn()
        LoginPage.waitStatusCode()
        LoginPage.validationAlertText()
    })

    it('TC-LG-005 - Login with invalid username and valid password (intercept request method)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(dataLogin.invalidUsername)
        LoginPage.inputPassword(dataLogin.validPassword)
        LoginPage.validationLoginBtn()
        LoginPage.interceptRequestMethod()
        LoginPage.clickLoginBtn()
        LoginPage.waitRequestMethod()
        LoginPage.validationAlertText()
    })

    it('TC-LG-006 - Login with invalid username and invalid password (intercept request method)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(dataLogin.invalidUsername)
        LoginPage.inputPassword(dataLogin.invalidPassword)
        LoginPage.validationLoginBtn()
        LoginPage.interceptAlertMessage()
        LoginPage.clickLoginBtn()
        LoginPage.waitAlertMessage()
        LoginPage.validationAlertText()
    })
    it('TC-LG-007 - Login with abnornal format username and valid password (intercept status code)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(dataLogin.abnormalUsername)
        LoginPage.inputPassword(dataLogin.validPassword)
        LoginPage.validationLoginBtn()
        LoginPage.interceptStatusCode()
        LoginPage.clickLoginBtn()
        LoginPage.waitStatusCode()
        LoginPage.validationAlertText()
    })

    it('TC-LG-008 - Login with abnornal format username and invalid password (intercept message)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(dataLogin.abnormalUsername)
        LoginPage.inputPassword(dataLogin.invalidPassword)
        LoginPage.validationLoginBtn
        LoginPage.interceptMessage()
        LoginPage.clickLoginBtn()
        LoginPage.waitMessage()
        LoginPage.validationAlertText()
    })

    it('TC-LG-009 - Validation Request Reset Password (intercept request reset passowrd)', ()=>{
        LoginPage.visit()
        LoginPage.validationForgotPass()
        LoginPage.clickForgotPass()
        LoginPage.inputUsernameForgotPass(dataLogin.validUsername)
        LoginPage.interceptReqResetPass()
        LoginPage.clickBtnResetPass()
        LoginPage.waitReqResetPass()
    })

    it('TC-LG-010 - Succsess Reset Password (intercept send passowrd reset)', ()=>{
        LoginPage.visit()
        LoginPage.validationForgotPass()
        LoginPage.clickForgotPass()
        LoginPage.inputUsernameForgotPass(dataLogin.validUsername)
        LoginPage.interceptSendPassReset()
        LoginPage.clickBtnResetPass()
        LoginPage.waitPassReset()
    })

    it('TC-LG-011 - Validation Cancel Reset Password (intercept status code)', ()=>{
        LoginPage.visit()
        LoginPage.validationForgotPass()
        LoginPage.clickForgotPass()
        LoginPage.interceptCancelReset()
        LoginPage.clickBtnCancelReset()
        LoginPage.waitCancelReset()
    })
})