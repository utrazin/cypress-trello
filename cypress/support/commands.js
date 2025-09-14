Cypress.Commands.add('loginTrello', (email, password) => {
    cy.viewport(1280, 720);
    cy.visit('https://trello.com/login');

    cy.get('#username-uid1').type(email);
    cy.get('#login-submit').click();

    cy.get('#password').type(password);
    cy.get('input[type="checkbox"]').click();
    cy.get('#login-submit').click();
    cy.origin('https://trello.com', () => {
        cy.contains('ATV 1', { timeout: 15000 }).click();
    });
});