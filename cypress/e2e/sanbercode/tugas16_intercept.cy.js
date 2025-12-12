describe ('Scenario Login', () => {
    it('TC-001 - Login with valid username and valid password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary')
        .as('actionsummary')
        cy.get('[type="submit"]').click()
        cy.wait('@actionsummary')
        .its('response.statusCode')
        .should('eq', 200)
    })

    it('TC-002 - Validation Login Succesfuly', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('POST','https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate')
        .as('loginSucces')
        cy.get('[type="submit"]').click()
        cy.wait('@loginSucces')
        .its('response.statusCode')
        .should('eq', 302)
    })


    it('TC-003 - Login Succesful validation shortcut', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts')
        .as('shortcut')
        cy.get('[type="submit"]').click()
        cy.wait('@shortcut')
        .its('response.statusCode')
        .should('eq', 200)
    })

    it('TC-004 - Login Succesful validation sub unit ', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit')
        .as('subUnit')
        cy.get('[type="submit"]').click()
        cy.wait('@subUnit')
        .its('response.statusCode')
        .should('eq', 200)
    })

    it('TC-005 - Login Succesful validation Location ', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations')
        .as('loginLoc')
        cy.get('[type="submit"]').click()
        cy.wait('@loginLoc')
        .its('response.statusCode')
        .should('eq', 200)
    })

    it('TC-006 - Login with valid username and invalid password validation status code', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('abmin321')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate')
        .as('loginAPI')
        cy.get('[type="submit"]').click()
        cy.wait('@loginAPI')
        .its('response.statusCode')
        .should('eq', 302)

        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })

    it('TC-007 - Login with invalid username and valid password validation request method', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('aBmin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate')
        .as('invalidusername')
        cy.get('[type="submit"]').click()
        cy.wait('@invalidusername')
        .its('request.method')
        .should('eq', 'POST')

        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })

    it('TC-008 - Login with invalid username and invalid password validation contains alert message', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('aBmin')
        cy.get('[name="password"]').type('abmin321')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate')
        .as('invalidUserPass')
        cy.get('[type="submit"]').click()
        cy.wait('@invalidUserPass')
        cy.contains('Invalid credentials').should('be.visible')

        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })

    it('TC-009 - Login with abnormal format username and valid password validation status code', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('@@@$$$')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages')
        .as('message')
        cy.get('[type="submit"]').click()
        cy.wait('@message')
        .its('response.statusCode')
        .should('eq', 304)
       
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })

   it('TC-010 - Login with invalid username and invalid password validation message', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('aBmin')
        cy.get('[name="password"]').type('abmin321')
        cy.get('[type="submit"]').should('be.visible')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages')
        .as('message')
        cy.get('[type="submit"]').click()
        cy.wait('@message')
        .its('response.statusCode')
        .should('eq', 304)
   })


})