describe('Fluxo Completo', () => {
    beforeEach(() => {
        cy.loginTrello(Cypress.env('TRELLO_USER'), Cypress.env('TRELLO_PASS'), 'ATV 1');
    });

    it('Fluxo Completo, CRUD de Lista, Card, Etiqueta', () => {
        cy.wait(2000);
        cy.fixture('dadosFluxoCompleto').then((dados) => {
            cy.origin('https://trello.com', { args: { dados } }, ({ dados }) => {
                cy.get('button[data-testid="list-composer-button"]').click();
                cy.get('textarea[name="Digite o nome da lista…"]').type(dados.boardName);
                cy.contains('button', 'Adicionar Lista').click();
                cy.wait(1000);
                cy.get('button[data-testid="list-add-card-button"]').eq(dados.cardPosition).click();
                cy.get('textarea[placeholder="Insira um título ou cole um link"]').type(dados.cardName);
                cy.contains('button', 'Adicionar Cartão').click();
                cy.wait(1000);
                cy.contains('a', dados.cardName).should('be.visible');
                cy.contains('a', dados.cardName).click();
                cy.get(`textarea[aria-label="${dados.cardName}"]`, { timeout: 15000 }).clear().type(`${dados.cardNameEdit}{enter}`);
                cy.get(`textarea[aria-label="${dados.cardNameEdit}"]`, { timeout: 15000 }).should('be.visible');
                cy.contains('button', 'Etiquetas').click();
                cy.contains('button', 'Criar uma nova etiqueta').click();
                cy.get('input[id="edit-label-title-input"]').type(dados.labelName);
                cy.contains('button', 'Criar').click();
                cy.get(`button[aria-label*="${dados.labelName}"]`).should('be.visible');
                cy.get('span[data-testid="card-label"]').eq(1).click();
                cy.get('button[aria-label*="Etiqueta Cypress"]').click();
                cy.get('input[id="edit-label-title-input"]').clear().type(dados.labelNameEdit);
                cy.contains('button', 'Salvar').click();
                cy.get(`button[aria-label*="${dados.labelNameEdit}"]`).should('be.visible');
                cy.get('span[data-testid="card-label"]').click();
                cy.get('label[data-testid="clickable-checkbox"]').click();
                cy.contains('button', 'Etiquetas').should('be.visible');
                cy.get(`button[aria-label*="${dados.labelNameEdit}"]`).click();
                cy.contains('button', 'Excluir').click();
                cy.contains('button', 'Excluir').click();
                cy.get('button[aria-label="Fechar pop-over"]').click();
                cy.get('button[data-testid="description-button"]').click();
                cy.get('div[data-testid="click-wrapper"]').click().type(dados.cardDescription);
                cy.contains('button', 'Salvar').click();
                cy.contains('p', dados.cardDescription).should('be.visible');
                cy.get('span[aria-label="Ações"]', { timeout: 15000 }).click();
                cy.get('span[data-testid="MoveIcon"]').click();
                cy.get('div[data-testid="move-card-popover-select-list-destination-select--value-container"]').click();
                cy.contains('div > li', 'Board Exemplo 1').click();
                cy.get('button[data-testid="move-card-popover-move-button"]').click();
                cy.contains('div > div > span', 'Board Exemplo 1').should('be.visible');
                cy.get('span[aria-label="Ações"]', { timeout: 15000 }).click().type('{c}');
                cy.contains('p', 'Este cartão foi arquivado').should('be.visible');
                cy.get('span[data-testid="CloseIcon"]').click();
                cy.get('span[data-testid="OverflowMenuHorizontalIcon"]').eq(2).click();
                cy.contains('span', 'Arquivar Esta Lista').click();
                cy.contains('span', 'Lista arquivada').should('be.visible');
            });
        });
    });
});
