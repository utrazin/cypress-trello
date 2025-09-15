describe('Listas Trello', () => {
    beforeEach(() => {
        cy.loginTrello(Cypress.env('TRELLO_USER'), Cypress.env('TRELLO_PASS'), 'ATV 1');
    });

    it('Deve criar uma lista', () => {
        cy.wait(2000);
        cy.fixture('dadosLista').then((dados) => {
            cy.origin('https://trello.com', { args: { dados } }, ({ dados }) => {
            cy.get('button[data-testid="list-composer-button"]').click();
            cy.get('textarea[name="Digite o nome da lista…"]').type(dados.boardName);
            cy.contains('button', 'Adicionar Lista').click();
            });
        });
    });

    it('Deve arquivar uma lista', () => {
        cy.wait(2000);
        cy.origin('https://trello.com', () => {
            cy.get('span[data-testid="OverflowMenuHorizontalIcon"]').eq(2).click();
            cy.contains('span', 'Arquivar Esta Lista').click();
            cy.contains('span', 'Lista arquivada').should('be.visible');
        });
    });
});
