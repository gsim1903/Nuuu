describe('visting the application a user..', () => {
  beforeEach(() => { 
    
    cy.visit('/')})
    it('is expected to see an appropriate header', () => {
      cy.get('h1').should('contain.text', 'News from around the world')
    })

    it.only('is expected to see 5 news items', () => {
      cy.get('[data-cy=news-list]').children().should('have.length',5)
    })

    it.only('is expected news items will be from today', () => {
       cy.get('[data-cy=date]').should('contain', "28.11.2021")
     })
     
});

// describe('visting the application a user..', () => {
//   beforeEach(() => { cy.visit('/')
  
//   it ("is expected to display the first news story", () => {
//     cy.get("#story-1").within(() => {
//         cy.get(".image").should("exist")
//         cy.get(".header").should("contain", "My First News Story")
//         cy.get(".description").should("contain", "This is about story 1")
//     })
//   })

//     it ("is expected to display the second news story", () => {
//       cy.get("#story-1").within(() => {
//           cy.get(".image").should("exist")
//           cy.get(".header").should("contain", "My Second News Story")
//           cy.get(".description").should("contain", "This is about story 2")
//       })
//     })

//     it ("is expected to display the third news story", () => {
//       cy.get("#story-1").within(() => {
//           cy.get(".image").should("exist")
//           cy.get(".header").should("contain", "My Third News Story")
//           cy.get(".description").should("contain", "This is about story 3")
//       })
//     })

//   })
  
// })


