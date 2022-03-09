/// <reference types="cypress" />


describe('Custome Command', function () {

  
    
        it('Custome Command login', function()
        {
            cy.login('admin@yourstore.com', 'admin') // this command funtion is defined in support folder command file
            cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
            cy.log('This is for Custome Command login')

    
        })


           
        it('invalid login', function()
        {
         

            cy.login('admin@yourstore.com', 'invalid')
            cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration')

    
        })

        it('Add Customer', function()
        {

            cy.login('admin@yourstore.com', 'admin')

            cy.log('This is for add customer')
    
        })

        it('Edit  Customer', function()
        {

            cy.login('admin@yourstore.com', 'admin')

            cy.log('This is for Edit customer')
    
        })

        it('Delete  Customer', function()
        {

            cy.login('admin@yourstore.com', 'admin')

            cy.log('This is for Delete customer')
    
        })



})