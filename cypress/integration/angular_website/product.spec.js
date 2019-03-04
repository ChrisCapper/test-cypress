// name of test in reporter
context('Product Tests (CRUD)', () => {
// Is a hook that will run the contents of the function before every test
    beforeEach(() => {
        // is the api for Cypress exposing all the commands available
        // visit opens the browser at a certain url. Because we've set baseUrl in cypress.json its automatically set there so we don't need it here
        // you can add extra queries to the url here too, eg cy.visit('/news/sport')
        cy.visit('')
    })
    // name of specific test
    it("Creates a Product", () => {
        // find the element 'a' and click it
        cy.get('a').click();
        
        // assert the url includes /product-add
        cy.url().should('include', '/product-add');

        // find the element and type some text
        cy.get('#mat-input-0').type("Mizuno");
        cy.get('#mat-input-1').type("Kaboooom!");
        cy.get('#mat-input-2').type("300.00");

        // find the button type submit and click it
        cy.get('[type="submit"]').click();

        // find the element h2 and assert it contains some text
        cy.get('h2').should('contain', 'Mizuno');

    })
})