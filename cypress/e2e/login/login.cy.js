describe('Login Trello', () => {
    it('Deve logar com usuário válido', () => {
        cy.loginTrello(Cypress.env('TRELLO_USER'), Cypress.env('TRELLO_PASS'));
    });
});