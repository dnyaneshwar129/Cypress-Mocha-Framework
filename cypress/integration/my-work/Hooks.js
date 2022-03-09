/// <reference types="cypress" />

describe('Hooks Concept', function () {
    before(() => {
        // runs once before all tests in the block
        cy.log('Open Browser and Set URL')
      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log('Login to system')
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log('Logout')
      })
    
      after(() => {
        // runs once after all tests in the block
        cy.log('Close Browser')
      })


    it('Verify Edit Profile', function () {
        cy.log('Edit profile')
    }
    )

    it('Place order', function () {
        cy.log('Place order')
    }
    )

   it('Delete Product', function () {
        cy.log('Delete Product')
    }
    )




}
)