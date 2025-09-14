describe('Cards Trello', () => {
    beforeEach(() => {
        cy.loginTrello(Cypress.env('TRELLO_USER'), Cypress.env('TRELLO_PASS'));
    });

    it('Deve criar um card', () => {
        cy.wait(3000);
        cy.origin('https://trello.com', () => {
            cy.get('button[data-testid="list-add-card-button"]').click();
            cy.get('textarea[placeholder="Insira um título ou cole um link"]').type('Card Gerado pelo Cypress');
            cy.contains('button', 'Adicionar Cartão').click();
        });
    });
});
