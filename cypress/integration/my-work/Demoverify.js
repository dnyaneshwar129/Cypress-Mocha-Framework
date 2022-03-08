/// <reference types="cypress" />

describe('Locating Element', function()
    {
         it('Verify price on cart page', function()
         {
            // cy.visit("https://demo.nopcommerce.com/") // Opens the url
            // cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
            // cy.get("[type='submit']").click()  //Click on search button
            // cy.get(".product-box-add-to-cart-button[type='button']").click()
            // cy.get("#product_enteredQuantity_4").clear().type("3") //qty
            // cy.wait(6000)
            // cy.get("#add-to-cart-button-4").click()  //add to cart button after proving qty
            // cy.wait(6000)
            // cy.wait(6000)
            // cy.get("#topcartlink > a > span.cart-label").click() 
            //  cy.wait(9000) 
            //  cy.wait(6000)
            // cy.get("product-unit-price").contains("$1,800.00") // validation point


                    cy.visit("https://www.flipkart.com/") // Opens the url
                    cy.get("._3704LK").type("apple MacBook Pro 13-inch")
                    cy.get(".L0Z3Pu").click()
                 //   cy.get("._4rR01T").click()  //Click on search button

                    cy.get("._10Ermr").contains('Showing 1 – 12 of 12 results for "apple MacBook Pro 13-inch"') // validation point
        }
        )
    }

    


)