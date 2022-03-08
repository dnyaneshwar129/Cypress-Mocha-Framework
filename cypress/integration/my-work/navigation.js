/// <reference types="cypress" />

describe('Open Home page', function () {

    it('verify back page', function () {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.title().should('eq', 'Register')   // Home page


    }
    )


    it('Nagigating to Web table page', function () {
        cy.get('#header > nav > div > div.navbar-collapse.collapse.navbar-right > ul > li:nth-child(3) > a').click()
        cy.title().should('eq', 'Web Table')  // Order page


    })


    it('verify back', function () {

        cy.go('back')
        cy.title().should('eq', 'Register')   // Home page


    })
    it('verify forward', function () {

        cy.go('forward')
        cy.title().should('eq', 'Web Table1') // Order page


    })


    it('verify -1', function () {

        cy.go(-1)  //back
        cy.title().should('eq', 'Register')   // Home page


    })

    it('verify +1', function () {
        cy.go(1)
        cy.title().should('eq', 'Web Table') // Order page

    })


    it('Reload', function () {
        cy.reload()
        cy.title().should('eq', 'Web Table') // Order page

    })


}
)
