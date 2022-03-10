/// <reference types="cypress" />

import LoginPage from '../PageObjects/LoginPage'

describe('Verify Login using page Object concept', function () {

    it('Valid Logi Test', function() {

        const login = new LoginPage()
        login.OpenLoginPage()
        login.EnterEmailaddress('admin@yourstore.com')
        login.EnterPassword('admin')
        login.ClickSubmit()
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')



    })



})
