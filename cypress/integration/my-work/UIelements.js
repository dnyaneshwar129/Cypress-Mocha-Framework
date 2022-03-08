/// <reference types="cypress" />

describe('Locating Element', function () {
    // it('Verify Text box', function () {
    //     cy.visit("https://www.functionize.com/free-trial")
    //     cy.url().should('include', 'functionize')   //verify URLshould include
    //     cy.get('[name="firstname"]').should('be.visible').should('be.enabled').type("Test Name")
    //     cy.get('[name="phone"]').should('be.visible').should('be.enabled').type("12334567")
    //     //         cy.title().should("eq", "This is test")   //titile verification
    //     cy.get('[value="No"]').should("be.visible").should('not.be.checked').click()
    //     cy.get('[value="Enterprise Packaged App Testing with AI (Salesforce, Workday, SAP)"]').click()
    // }
    // )

    // it('verifiy Checkbox', function () {
    //     cy.visit('http://demo.automationtesting.in/Register.html')
    //     cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
    //     cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
    //     cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value', 'Cricket')
    //     cy.get('#checkbox2').uncheck().should('not.be.checked').and('have.value', 'Movies')

    //     cy.get('[type="checkbox"]').check(['Movies', 'Hockey'])
    // }
    // )

    // it('Verifiy Radio', function () {

    //     cy.get('[value="Male"]').click()

    // }
    // )

    // it('Verifiy Dropwon', function () {

    //     cy.get('#Skills').select('Android').should('have.value', 'Android')

    // }
    // )

    // it('Verifiy Multiselect', function () {

    //     cy.get('#msdd').click()
    //     cy.get('.ui-corner-all').contains('Estonian').click()
    //     cy.get('.ui-corner-all').contains('Filipino').click()

    // }
    // )


    it('Verifiy Multiselect', function () {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Estonian').click()
        cy.get('.ui-corner-all').contains('Filipino').click()

    }
    )

    it('Verifiy Search and Select', function () {

        cy.get('.select2-selection--single').click({force:true})
        cy.get('.select2-search__field').click().type("India")
        cy.get('.select2-search__field').click().type('{enter}')     



    }
    )



}
)