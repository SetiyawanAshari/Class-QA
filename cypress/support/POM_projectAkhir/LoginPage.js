class LoginPage{
    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUsername(dataUsername){
        cy.get('[name="username"]').type(dataUsername)
    }
    inputPassword(dataPassword){
        cy.get('[name="password"]').type(dataPassword)
    }
    emptyUsername(){
        cy.get('[name="username"]').clear()
    }
    emptyPassword(){
        cy.get('[name="password"]').clear()
    }
    validationLoginBtn(){
        cy.get('[type="submit"]').should('be.visible')
    }
    validationForgotPass(){
        cy.get('.orangehrm-login-forgot > .oxd-text').should('be.visible')
    }
    clickLoginBtn(){
        cy.get('[type="submit"]').click()
    }
    validationLogin(){
        cy.url().should('include', 'dashboard')
    }
    validationAlertText(){
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    }
    validationAlertUsername(){
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    }
    validationAlertPassword(){
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    }
    interceptLoginSuccsess(){
        cy.intercept('POST','https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate')
        .as('loginSucces')
    }
    waitLoginSuccess(){
         cy.wait('@loginSucces')
        .its('response.statusCode')
        .should('eq', 302)
    }
    interceptStatusCode(){
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate')
        .as('loginAPI')
    }
    waitStatusCode(){
         cy.wait('@loginAPI')
        .its('response.statusCode')
        .should('eq', 302)
    }
    interceptRequestMethod(){
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate')
        .as('requestMethod')
    }
    waitRequestMethod(){
        cy.wait('@requestMethod')
        .its('request.method')
        .should('eq', 'POST')
    }
    interceptAlertMessage(){
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate')
        .as('alertMessage')
    }
    waitAlertMessage(){
        cy.contains('Invalid credentials').should('be.visible')
    }
    interceptActionsummary(){
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary')
        .as('actionsummary')
    }
    waitActionsummary(){
        cy.wait('@actionsummary')
        .its('response.statusCode')
        .should('eq', 200)
    }
    interceptLocation(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations')
        .as('loginLoc')
    }
    waitLocation(){
        cy.wait('@loginLoc')
        .its('response.statusCode')
        .should('eq', 200)
    }
    interceptMessage(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages')
        .as('message')
    }
    waitMessage(){
        cy.wait('@message')
        .its('response.statusCode')
        .should('eq', 304)
    }
    clickForgotPass(){
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
    }
    inputUsernameForgotPass(dataUsername){
        cy.get('.oxd-input').type(dataUsername)
    }
    clickBtnResetPass(){
        cy.get('.oxd-button--secondary').click()
    }
    interceptSendPassReset(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset')
        .as('sendPass')
    }
    waitPassReset(){
        cy.wait('@sendPass')
        .its('response.statusCode')
        .should('eq', 200)
    }
    interceptReqResetPass(){
        cy.intercept('POST','https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestResetPassword')
        .as('ReqReset')
    }
    waitReqResetPass(){
       cy.wait('@ReqReset')
        .its('response.statusCode')
        .should('eq', 302) 
    }
    clickBtnCancelReset(){
        cy.get('button[type="button"]').click()
    }
    interceptCancelReset(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .as('cancelReset')
    }
    waitCancelReset(){
        cy.wait('@cancelReset')
        .its('response.statusCode')
        .should('eq', 200)
    }

}

export default new LoginPage