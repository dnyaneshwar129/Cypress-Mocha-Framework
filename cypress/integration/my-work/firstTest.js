describe('My First Test', () => {
    it('Verify title of the page', () => {
      cy.visit('https://testerwork.com/')
      cy.title().should('eq', 'Homepage - TesterWork')
    })


    it('Verify title of the page', () => {
        cy.visit('https://testerwork.com/')
        cy.title().should('eq', 'Homepa TesterWork')
      })


  })