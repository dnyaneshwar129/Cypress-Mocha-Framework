/// <reference types="cypress" />

describe('MYTest Suite', function () {

before(function ()
{
    cy.fixture('example').then(function(data)
{
    this.data = data
})

})


    // it('Simple login', function()
    // {
    //    cy.visit("https://admin-demo.nopcommerce.com/login")
    //    cy.get('input[name="Email"]').clear().type('admin@yourstore.com') //
    //    cy.get('input[name="Password"]').clear().type('admin')
    //    cy.get('.login-button').click()

    // })

    it('Fixture Demo Test', function()
    {
       cy.visit("https://admin-demo.nopcommerce.com/login")
       cy.get('input[name="Email"]').clear().type(this.data.email) //
       cy.get('input[name="Password"]').clear().type(this.data.password)
       cy.get('.login-button').click()
       cy.log(' I am in Data driver Testing blog')

    })

})
