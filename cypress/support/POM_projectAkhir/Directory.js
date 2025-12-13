class Directory{
    DashboardPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
    verifyDashboardTitle(){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    }
    verifyHelpBtn(){
        cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button > .oxd-icon').should('be.visible')
    }
    clickDropdownProfile(){
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    }
    verifyLogoutBtn(){
        cy.contains('Logout').should('be.visible')
    }
    clickLogoutBtn(){
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        cy.wait(1000)
    }
    interceptLocation(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations')
        .as('logOut')
    }
    waitLocation(){
        cy.wait('@logOut')
        .its('response.statusCode').should('eq', (200))
    }
    validationLogOutSuccess(){
        cy.url().should('include', 'auth/login')
    }
    verifyTimeatWork(){
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
        .should('be.visible')
    }
    verifyMyActionOption(){
        cy.get(':nth-child(2) > .oxd-sheet').should('be.visible')
    }
    verifyUserDropDownOption(){
        cy.get('.oxd-userdropdown-tab').should('be.visible')
    }
    verifyQuickLanuchOption(){
        cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-body').should('be.visible')
    }
    verifyBuzzPost(){
        cy.get(':nth-child(4) > .oxd-sheet').should('be.visible')
    }
    verifyEmployeesonLeaveToday(){
        cy.get(':nth-child(5) > .oxd-sheet').should('be.visible')
    }
    verifyEmployeesDistribution(){
        cy.get(':nth-child(6) > .oxd-sheet').should('be.visible')
    }
    verifyMenuSearch(){
        cy.get('.oxd-main-menu-search').should('be.visible')
    }
    verifyMenuAdmin(){
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    }
    verifyMenuPIM(){
        cy.get(':nth-child(2) > .oxd-main-menu-item').should('be.visible')
    }
    verifyMenuLeave(){
        cy.get(':nth-child(3) > .oxd-main-menu-item').should('be.visible')
    }
    verifyMenuTime(){
        cy.get(':nth-child(4) > .oxd-main-menu-item').should('be.visible')
    }
    verifyMenuRecruitment(){
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').should('be.visible')
    }
    verifyMenuMyInfo(){
        cy.get(':nth-child(6) > .oxd-main-menu-item').should('be.visible')
    }
    verifyMenuPerforment(){
        cy.get(':nth-child(7) > .oxd-main-menu-item').should('be.visible')
    }
    interceptDahsboardPage(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        .as('Dashboard')
    }
    waitDashboardPage(){
        cy.wait('@Dashboard')
        .its('response.statusCode').should('eq', (200))
    }
    verifyWidgetsDisplay(){
        cy.get('.oxd-layout-context').should('be.visible')
    }
    clickTimeBtn(){
        cy.get('.orangehrm-attendance-card-bar > .oxd-icon-button > .oxd-icon').click()
    }
    interceptWorkTime(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchIn')
        .as('realTime')
    }
    waitWorkTime(){
        cy.wait('@realTime')
        .its('response.statusCode').should('eq', (302))
    }
    validationDate(){
        return cy.get('.oxd-date-input > .oxd-input')
        .should('be.visible')
        .should('not.have.value', '')
    }
    verifyTime(){
        cy.get('.oxd-time-input > .oxd-input')
        .should('be.visible')
    }
    inputSearchField(dataSearch){
        cy.get('.oxd-input').type(dataSearch)
    }
    clickMenuSearch(){
        cy.get('.oxd-input').should('be.visible').click()
    }
    verifyBTnSearcMenu(){
        cy.get('.oxd-main-menu-item > .oxd-text').should('be.visible')
    }
    clickBtnSearcMenu(){
        cy.get('.oxd-main-menu-item > .oxd-text').click()
    }
    validationSuccessSearc(){
        cy.url().should('include', '/leave')
        cy.contains('Leave').should('be.visible')
    }
    interceptSearchMenu(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveModule')
        .as('Leave')
    }
    waitSearchMenu(){
        cy.wait('@Leave')
        .its('response.statusCode')
        .should('eq', 302)
    }
    clickBtnAdmin(){
        cy.contains('.oxd-main-menu-item', 'Admin')
        .click()
    }
    validationSuccessAdmin(){
        cy.url().should('include', '/admin')
        cy.contains('Admin').should('be.visible')
    }
    interceptAdminMenu(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
        .as('Admin')
    }
    waitAdminMenu(){
        cy.wait('@Admin')
        .its('response.statusCode')
        .should('eq', 200)
    }
    clickBtnPim(){
        cy.contains('.oxd-main-menu-item', 'PIM')
        .click()
    }
    validationSuccessPim(){
        cy.url().should('include', '/pim');
        cy.contains('PIM').should('be.visible')
    }
    verifyDataEmployeed(){
        cy.get('.oxd-table-body')
        .should('be.visible')
        .find('.oxd-table-card')
        .its('length')
        .should('be.greaterThan', 0)
    }
    interceptEmployeeLists(){
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        .as('Employee')
    }
    waitEmployeeList(){
        cy.wait('@Employee')
        .its('response.statusCode')
        .should('eq', 200)
    }
    clickBtnLeave(){
        cy.contains('.oxd-main-menu-item', 'Leave')
        .click()
    }
    validationSuccessLeave(){
        cy.url().should('include', '/leave')
        cy.contains('Leave').should('be.visible')
    }
    verifySubMenu(){
        cy.contains('Leave List').should('be.visible')
    }
    interceptLeaveList(){
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
        .as('LeaveList')
    }
    waitLeaveList(){
        cy.wait('@LeaveList')
        .its('response.statusCode')
        .should('eq', 200)
    }
    clickBtnTime(){
        cy.contains('.oxd-main-menu-item', 'Time')
        .click()
    }
    validationSuccessTime(){
        cy.url().should('include', '/time');
        cy.contains('Time').should('be.visible')
    }
    verifyTimeSheet(){
        cy.contains('Timesheets').should('be.visible')
    }
    interceptTimeModule(){
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/time/viewTimeModule')
        .as('timeModule')
    }
    waitTimeModule(){
        cy.wait('@timeModule')
        .its('response.statusCode')
        .should('eq', 302)
    }
    clickBtnRecruit(){
        cy.contains('.oxd-main-menu-item', 'Recruitment')
        .click()
    }
    validationSuccessRecruit(){
        cy.url().should('include', '/recruitment')
        cy.contains('Recruitment').should('be.visible')
    }
    verifySubMenuRecruit(){
        cy.contains('Candidates').should('be.visible')
        cy.contains('Vacancies').should('be.visible')
    }
    interceptViewCadidates(){
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
        .as('viewCadidates')
    }
    waitViewCadidates(){
        cy.wait('@viewCadidates')
        .its('response.statusCode')
        .should('eq', 200)
    }
    clickBtnMyInfo(){
        cy.contains('.oxd-main-menu-item', 'My Info')
        .click()
    }
    validationSuccessMyInfo(){
        cy.url().should('include', '/viewPersonalDetails')
        cy.contains('Personal Details').should('be.visible')
    }
    verifyFirstName(){
        cy.get('input[name="firstName"]').should('be.visible')
    }
    verifyLastName(){
        cy.get('input[name="lastName"]').should('be.visible')
    }
    validationEmployeeData(){
        cy.get('input[placeholder="Type for hints..."]').should('not.exist')
    }
    interceptPersonalDetail(){
         cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7')
        .as('personalDetail')
    }
    waitPersonalDetail(){
        cy.wait('@personalDetail')
        .its('response.statusCode')
        .should('eq', 200)
    }
    clickBtnPerform(){
        cy.contains('.oxd-main-menu-item', 'Performance').click()
    }
    validationSuccessPerform(){
        cy.url().should('include', '/performance')
        cy.contains('Performance').should('be.visible')
    }
    verifySubMenuPerform(){
        cy.contains('Configure').should('be.visible')
        cy.contains('Manage Reviews').should('be.visible')
    }
    interceptPerformModule(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewPerformanceModule')
        .as('performModule')
    }
    waitPerformModule(){
        cy.wait('@performModule')
        .its('response.statusCode')
        .should('eq', 302)
    }
    clickBtnDasboard(){
        cy.contains('.oxd-main-menu-item', 'Dashboard')
        .click()
    }
    validationSuccessDashboard(){
        cy.url().should('include', '/dashboard')
        cy.contains('Dashboard').should('be.visible')
    }
    verifyDashDisplay(){
         cy.contains('Time at Work').should('be.visible')
        cy.contains('My Actions').should('be.visible')
        cy.contains('Quick Launch').should('be.visible')
    }
    clickBtnDirect(){
        cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text')
        .click()
    }
    validationSuccessDirect(){
        cy.url().should('include', '/directory')
        cy.contains('Directory').should('be.visible')
    }
    verifyEmployeeFiled(){
        cy.get('input[placeholder="Type for hints..."]')
        .should('be.visible')
    }
    inputEmployeeName(dataSearch){
        cy.get('input[placeholder="Type for hints..."]').type(dataSearch)
    }
    clickAutoCom(){
        cy.get('.oxd-autocomplete-text-input>input').click()
    }
    clickBtnSearch(){
        cy.get('.oxd-button--secondary')
        .click()
    }
    validationResultDisplay(){
        cy.get('.orangehrm-directory-card')
        .should('exist')
    }
    interceptDirectModule(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
        .as('Direct')
    }
    waitDirectModule(){
        cy.wait('@Direct')
        .its('response.statusCode')
        .should('eq', 200)
    }
    selectEmployeeName(){
        cy.wait(2000)
        cy.get('input[placeholder="Type for hints..."]').eq(0).type('{downarrow}{enter}')       
        cy.wait(2000)
    }


}
export default new Directory