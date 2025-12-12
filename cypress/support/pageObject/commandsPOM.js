class commandsPOM{
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
    clickLoginBtn(){
        cy.get('[type="submit"]').click()
    }
    validationLogin(){
        cy.url().should('include', 'dashboard')
    }
    valididationAlertText(){
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    }
    validationAlertUsername(){
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    }
    validationAlertPassword(){
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    }
}

export default new commandsPOM