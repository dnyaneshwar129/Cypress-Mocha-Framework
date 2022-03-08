/// <reference types="cypress" />

describe('Verify table data', function () {

    it('check value anywhere in table', function () {
        cy.visit('https://html.com/tables/')
        cy.get('.related-elements').contains('td', 'colgroup').should('be.visible')


    }
    )


    it('Check value at specific row column', function () {

        cy.get('#post-382 > div > div.related-pages > table > tbody > tr:nth-child(7) > td:nth-child(3)').contains('ygggg').should('be.visible')

    })

    it('get 1st column value we have other col value', function () {

        cy.get('#post-382 > div > div.related-pages > table>tbody>tr td:nth-child(2)').each(($e,index,$list ) => {
            const text=$e.text()
            if(text.includes("target columns"))
            {
                cy.get('#post-382 0> div > div.related-pages > table>tbody>tr td:nth-child(1)').eq(index).then(function(bname)
                {
                   const booname= bname.text()
                   expect(bookname).to.equal('colgroup')

                })
            }

        })

    })

    
})
