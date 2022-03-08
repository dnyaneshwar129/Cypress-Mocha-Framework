/// <reference types="cypress" />

describe('Alert handling Testing', function () {

    it('Verifiy Simple Alert', function () {
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('.btn-danger').click()
 //       cy.get('body > div.container.center > div > div > div > div.tabpane.pullleft > ul > li:nth-child(3) > a').click()cy

        cy.on('window:alert', (str) =>
        {
            expect(str).to.equal('I am an alert box!')
        }
        )

    }
    )

    it('Verifiy confirmatio  Okay cancel Alert', function () {


        cy.get('body > div.container.center > div > div > div > div.tabpane.pullleft > ul > li:nth-child(2) > a').click()
        cy.get('[onclick="confirmbox()"]').click()
        cy.on('window:confirm', (str) => 
        {
            expect(str).to.equal('Press a Button !')
        }
        )



    }

    )

    
    // it('Verifiy Text box Alert', function () {


    //     cy.get('body > div.container.center > div > div > div > div.tabpane.pullleft > ul > li:nth-child(3) > a').click()
    //     cy.get('.btn-info').click()

    // }
    // )

}
)