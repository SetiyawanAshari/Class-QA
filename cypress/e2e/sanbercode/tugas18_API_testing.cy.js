///<reference types="cypress"/>

describe('API testing', () =>{
    it('T-001 GET list user', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2', 
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('data').and.to.be.an('array')
            expect(response.body.data).to.have.length(6)
        })
    })
    
    it('T-002 GET single user', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2', 
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('data').and.to.be.an('object')
           
        })
    })

    it('T-003 GET single not found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/user/23', 
            failOnStatusCode: false,
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(404)
            expect(response.body).to.be.empty
            expect(response.body.empty).to.eq()
        })
    })

    it('T-004 POST register successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                email   : "eve.holt@reqres.in",
                password: "pistol"},
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('id')
        })
    })

    it('T-005 POST register unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            failOnStatusCode: false,
            body: {
                email   : "abogoboga@yopmail.com"
                },
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(400)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })

    it('T-006 POST login successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                email: "eve.holt@reqres.in",
                password: "cityslicka"},
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('token')
        })
    })

    it('T-007 POST login unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            failOnStatusCode: false,
            body: {
                email   : "abogoboga@yopmail.com"
                },
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(400)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })


    it('T-008 Create User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users?page=2', 
            body: {
                name: "morpheus",
                job : "leader"
            },
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(201)
            expect(response.body).to.not.be.null
            expect(response.body.name).to.eq('morpheus')
        })
    })

    it('T-009 Update User', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2', 
            body: {
                name: "setiyawan",
                job : "Head"
            },
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body.name).to.eq('setiyawan')
        })
    })

     it('T-010 Update User', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2', 
            body: {
                name: "ashari",
            },
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body.name).to.eq('ashari')
        })
    })

    it('T-011 Delete User', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2', 
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(204)
            expect(response.body).to.be.empty
            expect(response.body.empty).to.eq()
        })
    })

    it('T-012 GET list resource', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown', 
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('data').and.to.be.an('array')
            expect(response.body.data).to.have.length(6)
            
            
        })
    })

    it('T-013 GET single resource', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/2', 
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('data').and.to.be.an('object')
           
        })
    })

    it('T-014 GET single resource not found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23', 
            failOnStatusCode: false,
            headers: {'x-api-key':'reqres_49c1f609bf9e499bb90b508357ba79bd'}
        })
        
        .then((response) =>{
            expect(response.status).to.eq(404)
            expect(response.body).to.be.empty
            expect(response.body.empty).to.eq()
        })
    })

})