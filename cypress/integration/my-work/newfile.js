/// <reference types="cypress" />

describe('new file', function () {
    it('Verify Text box', function () {
        cy.visit("https://www.functionize.com/free-trial")
        cy.url().should('include', 'functionize')   //verify URLshould include
        cy.get('[name="firstname"]').should('be.visible').should('be.enabled').type("Test Name")
        cy.get('[name="phone"]').should('be.visible').should('be.enabled').type("12334567")
        //         cy.title().should("eq", "This is test")   //titile verification
        cy.get('[value="No"]').should("be.visible").should('not.be.checked').click()
        cy.get('[value="Enterprise Packaged App Testing with AI (Salesforce, Workday, SAP)"]').click()
    }
    )





}
)