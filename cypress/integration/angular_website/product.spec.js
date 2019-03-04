// name of test in reporter
context('Product Tests (CRUD)', () => {
// Is a hook that will run the contents of the function before every test
    beforeEach(() => {
        // is the api for Cypress exposing all the commands available
        // visit opens the browser at a certain url. Because we've set baseUrl in cypress.json its automatically set there so we don't need it here
        // you can add extra queries to the url here too, eg cy.visit('/news/sport')
        cy.visit('')
    })

    it("Creates a Product", () => {
        cy.get('a').click();

        cy.url().should('include', '/product-add');

        cy.get('#mat-input-0').type("Mizuno");
        cy.get('#mat-input-1').type("Kaboooom!");
        cy.get('#mat-input-2').type("300.00");

        cy.get('[type="submit"]').click();

        cy.get('h2').should('contain', 'Mizuno');

    })
})