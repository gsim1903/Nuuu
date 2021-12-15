describe('visting the application a user..', () => {
    beforeEach(() => {
        cy.intercept('GET', "http://newsapi.org/v2/everything**", {
            fixture: "searchResults.json",
        })
            .as('performSearch')
        cy.visit('/')
        cy.get('[data-cy=search-field]').type('Coding')
        cy.get('[data-cy=search-button]').click()
    })

    it('is expected to call a NewAPI'), () => {
        cy.wait('@performSearch').its('response.statusCode').should('eq', 200)
    }

    it.only('is expected to see 5 news items', () => {
        cy.get('[data-cy=articles]').children().should('have.length', 5)
    }),

        it.only('is expected news items will be from today', () => {
            cy.get("[data-cy=articles]").should("contain", "2021-11-28")
        });

})

