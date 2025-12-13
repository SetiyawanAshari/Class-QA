import LoginPage from "../../support/POM_projectAkhir/LoginPage"
import dataLogin from "../../fixtures/dataLogin.json"
import Directory from "../../support/POM_projectAkhir/Directory"
import dataDashboard from "../../fixtures/dataDahsboaard.json"

describe ('Dashboard Page', () => {
    beforeEach(() =>{
        LoginPage.visit()
        LoginPage.inputUsername(dataLogin.validUsername)
        LoginPage.inputPassword(dataLogin.validPassword)
        LoginPage.interceptLoginSuccsess()
        LoginPage.clickLoginBtn()
        LoginPage.waitLoginSuccess()
        Directory.DashboardPage()
    })

    it('TC-DB-001 Verify Dashboard Page Loads Successfully',() =>{
        Directory.interceptDahsboardPage()
        Directory.DashboardPage()
        Directory.waitDashboardPage()
        Directory.verifyWidgetsDisplay()
    })

    it('TC-DB-002 Verify Widgets Element on the Dashboard page is Displayed',() =>{
        Directory.verifyDashboardTitle()
        Directory.verifyHelpBtn()
        Directory.verifyMyActionOption()
        Directory.verifyQuickLanuchOption()
        Directory.verifyTimeatWork()
        Directory.verifyUserDropDownOption()
        Directory.verifyBuzzPost()
        Directory.verifyEmployeesonLeaveToday()
        Directory.verifyEmployeesDistribution()
    })

    it('TC-DB-003 Verify Sidebar Menu is Displayed',() =>{
        Directory.verifyMenuSearch()
        Directory.verifyMenuAdmin()
        Directory.verifyMenuPIM()
        Directory.verifyMenuLeave()
        Directory.verifyMenuTime()
        Directory.verifyMenuRecruitment()
        Directory.verifyMenuMyInfo()
        Directory.verifyMenuPerforment()
    })

    it('TC-DB-004 Verify "Search" Menu Usablility',() =>{
        Directory.interceptSearchMenu()
        Directory.DashboardPage()
        Directory.clickMenuSearch()
        Directory.inputSearchField(dataDashboard.TextSearch)
        Directory.verifyBTnSearcMenu()
        Directory.clickBtnSearcMenu()
        Directory.waitSearchMenu()
        Directory.validationSuccessSearc()
    })

    it('TC-DB-005 Verify "Admin" Menu Navigation',() =>{
        Directory.DashboardPage()
        Directory.interceptAdminMenu()
        Directory.clickBtnAdmin()
        Directory.waitAdminMenu()
        Directory.validationSuccessAdmin()
    })

    it('TC-DB-006 Verify "PIM" Menu Navigation',() =>{
        Directory.DashboardPage()
        Directory.interceptEmployeeLists()
        Directory.clickBtnPim()
        Directory.waitEmployeeList()
        Directory.validationSuccessPim()
        Directory.verifyDataEmployeed()
    })

    it('TC-DB-007 Verify "Leave" Menu Navigation',() =>{
        Directory.DashboardPage()
        Directory.interceptLeaveList()
        Directory.clickBtnLeave()
        Directory.waitLeaveList()
        Directory.validationSuccessLeave()
        Directory.verifySubMenu()
    })

    it('TC-DB-008 Verify "Time" Menu Navigation',() =>{
        Directory.DashboardPage()
        Directory.interceptTimeModule()
        Directory.clickBtnTime()
        Directory.waitTimeModule()
        Directory.validationSuccessTime()
        Directory.verifyTimeSheet()
    })

    it('TC-DB-009 Verify "Recruitment" Menu Navigation',() =>{
        Directory.DashboardPage()
        Directory.interceptViewCadidates()
        Directory.clickBtnRecruit()
        Directory.waitViewCadidates()
        Directory.validationSuccessRecruit()
        Directory.verifySubMenuRecruit()
    })

    it('TC-DB-010 Verify "My Info" Menu Navigation',() =>{
        Directory.DashboardPage()
        Directory.interceptPersonalDetail()
        Directory.clickBtnMyInfo()
        Directory.waitPersonalDetail()
        Directory.validationSuccessMyInfo()
        Directory.verifyFirstName()
        Directory.verifyLastName()
        Directory.validationEmployeeData() 
    })

    it('TC-DB-011 Verify "Performance" Menu Navigation',() =>{
        Directory.DashboardPage()
        Directory.interceptPerformModule()
        Directory.clickBtnPerform()
        Directory.waitPerformModule()
        Directory.validationSuccessPerform()
        Directory.verifySubMenuPerform()
    })

    it('TC-DB-012 Verify "Dashboard" Menu Navigation',() =>{
        Directory.DashboardPage()
        Directory.interceptDahsboardPage()
        Directory.clickBtnDasboard()
        Directory.waitDashboardPage()
        Directory.validationSuccessDashboard()
        Directory.verifyDashDisplay()
    })

    it('TC-DB-013 Verify "Directory" Menu Navigation',() =>{
        Directory.DashboardPage()
        Directory.interceptDirectModule()
        Directory.clickBtnDirect()
        Directory.waitDirectModule()
        Directory.verifyEmployeeFiled()
        Directory.inputEmployeeName(dataDashboard.dataEmployee) 
        Directory.selectEmployeeName()
        Directory.clickAutoCom()
        cy.wait(2000)
        Directory.clickBtnSearch()
        cy.wait(2000)
        Directory.validationResultDisplay()
    })

    it('TC-DB-014 Success Logout', ()=>{
        Directory.DashboardPage()
        Directory.interceptLocation()
        Directory.clickDropdownProfile()
        Directory.waitLocation()
        Directory.verifyLogoutBtn()
        Directory.clickLogoutBtn()
        Directory.validationLogOutSuccess()
    })

    it('TC-DB-015 Verify "Time at Work" Date is Accurate',() =>{
        const now = new Date()
        const year = now.getFullYear()
        const day = String(now.getDate()).padStart(2, '0')
        const month = String(now.getMonth() + 1).padStart(2, '0')
        const currentDate = `${year}-${day}-${month}` //format tanggal: YYYY-DD-MM

        Directory.interceptWorkTime()
        Directory.clickTimeBtn()
        Directory.waitWorkTime()
        Directory.validationDate()
        .invoke('val')
        .should('eq', currentDate)
        Directory.verifyTime()
    })
})