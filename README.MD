Automação Trello com Cypress

Este projeto contém uma suíte de testes automatizados utilizando Cypress para validar funcionalidades do Trello.
Foram implementados cenários de login, criação e gerenciamento de listas, cards e etiquetas, além de fluxos completos de CRUD.

🚀 Passo a passo para usar

Clonar o repositório

git clone https://github.com/utrazin/cypress-trello.git
cd cypress-trello

Utilizar Node.js 18
Verifique sua versão do Node:

node -v

Caso necessário, utilize o nvm
 para instalar e definir a versão 18.

Instalar dependências do Cypress

npm install
npx cypress install

Configurar variáveis de ambiente
Crie o arquivo cypress.env.json na raiz do projeto e defina as credenciais:

{
  "TRELLO_USER": "seu-email",
  "TRELLO_PASS": "sua-senha"
}

Configurar fixtures
No diretório cypress/fixtures/, ajuste os arquivos (dadosLista.json, dadosCard.json, dadosFluxoCompleto.json) com os valores desejados para nomes de listas, cards, etiquetas e descrições.

Executar os testes

Para rodar em modo interativo:

npx cypress open

Para rodar em modo headless:

npx cypress run

🧪 Casos de Teste Implementados
🔐 Login Trello

Login com usuário válido: valida autenticação utilizando credenciais definidas no cypress.env.json.

📋 Listas Trello

Criar uma lista

Arquivar uma lista

🃏 Cards Trello

Criar um card

Editar um card

Criar uma etiqueta no card

Editar uma etiqueta no card

Desvincular etiqueta do card

Excluir etiqueta do card

Adicionar descrição ao card

Mover um card

Arquivar um card

🔄 Fluxo Completo

CRUD de Lista, Card e Etiqueta
Executa um cenário de ponta a ponta, englobando:

Criar lista

Criar card

Editar card

Criar, editar, desvincular e excluir etiqueta

Adicionar descrição ao card

Mover card

Arquivar card

Arquivar lista

📂 Estrutura do Projeto
cypress/
 ├─ e2e/
 │   ├─ cards/
 │   │   └─ cards.cy.js
 │   ├─ fluxo/
 │   │   └─ fluxoCompleto.cy.js
 │   ├─ listas/
 │   │   └─ listas.cy.js
 │   └─ login/
 │       └─ login.cy.js
 │
 ├─ fixtures/
 │   ├─ dadosCard.json
 │   ├─ dadosFluxoCompleto.json
 │   ├─ dadosLista.json
 │   └─ example.json
 │
 ├─ support/
 │   ├─ commands.js
 │    └─ e2e.js
cypress.env.json

✅ Tecnologias

Cypress
Node.js 18