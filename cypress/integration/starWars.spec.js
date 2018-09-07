context('Star Wars Brochure', () => {
    it('Title has "Star Wars"', () => {
        cy.visit('https://star-wars-posters.firebaseapp.com/index.html')
        cy.get('title').contains('Star Wars')
    })
    it('Click the link "Take me to the Star Wars App!"', () => {
        cy.get('a').contains('Take me to the Star Wars App!').click()
    })
    it('Make sure youre on the "Star Wars App" page', () => {
        cy.visit('https://star-wars-posters.firebaseapp.com/starwars.html')
        cy.url('/starwars.html')
    })
    it('Check that /starwars.html page has 6 "buttons"', () => {
        cy.get('.movie-list button').should('have.length', 6)
    })
    it('Inspecting text content of "buttons"', () => {
        cy.get('.movie-list button').contains('The Phantom Menace')
        cy.get('.movie-list button').contains('Attack of the Clones')
        cy.get('.movie-list button').contains('Revenge of the Sith')
        cy.get('.movie-list button').contains('A New Hope')
        cy.get('.movie-list button').contains('The Empire Strikes Back')
        cy.get('.movie-list button').contains('Return of the Jedi')
    })
    it('Clicking a poster button "Renders Poster"', () => {
        cy.get('.movie-list button').contains('The Empire Strikes Back').click()
        cy.get('#posters img', {timeout: 10000}).screenshot()
    })
})

