describe ('Scenario Login', () => {
    it('TC-001 - Login with valid username and valid password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
    })

    it('TC-002 - Login with valid username and invalid password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('abmin321')
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })

    it('TC-003 - Login with invalid username and valid password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('aBmin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })

    it('TC-004 - Login with invalid username and invalid password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('aBmin')
        cy.get('[name="password"]').type('abmin321')
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    })

    it('TC-005 - Login with empty username and empty password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').clear()
        cy.get('[name="password"]').clear()
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    })

    it('TC-006 - Login with only username field and empty password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').clear()
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    })

    it('TC-007 - Login with only password field and empty username', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').clear()
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    })

    it('TC-008 - Login with inusername and empty passwor', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('aBmin')
        cy.get('[name="password"]').clear()
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    })
    
     it('TC-009 - Login with only empty username and  invalid password', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').clear()
        cy.get('[name="password"]').type('abmin321')
        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
    })
})