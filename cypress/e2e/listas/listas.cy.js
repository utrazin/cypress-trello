describe('Listas Trello', () => {
    beforeEach(() => {
        cy.loginTrello(Cypress.env('TRELLO_USER'), Cypress.env('TRELLO_PASS'));
    });

    it('Deve criar uma lista', () => {
        cy.wait(2000);
        cy.origin('https://trello.com', () => {
            cy.get('button[data-testid="list-composer-button"]').click();
            cy.get('textarea[name="Digite o nome da lista…"]').type('Board Criado Pelo Cypress');
            cy.contains('button', 'Adicionar Lista').click();
        });
    });

    it('Deve arquivar uma lista', () => {
        cy.wait(2000);
        cy.origin('https://trello.com', () => {
            cy.get('span[data-testid="OverflowMenuHorizontalIcon"]').eq(1).click();
            cy.contains('span', 'Arquivar Esta Lista').click();
        });
    });
});
