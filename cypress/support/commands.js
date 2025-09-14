Cypress.Commands.add('loginTrello', (email, password, boardName) => {
    cy.viewport(1280, 720);
    cy.visit('https://trello.com/login');

    cy.get('#username-uid1').type(email);
    cy.get('#login-submit').click();

    cy.get('#password').type(password);
    cy.get('input[type="checkbox"]').click();
    cy.get('#login-submit').click();
    cy.acessarBoard(boardName);
});

Cypress.Commands.add('acessarBoard', (name) => {
    cy.wait(3000);
    cy.origin('https://trello.com', { args: { name } }, ({ name }) => {
        cy.contains(name, { timeout: 15000 }).click();
    });
})