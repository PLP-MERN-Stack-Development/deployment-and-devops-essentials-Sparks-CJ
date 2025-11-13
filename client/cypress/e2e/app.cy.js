// client/cypress/e2e/app.cy.js

describe('MERN Chat App - Smoke Test', () => {
  it('loads the home page', () => {
    cy.visit('http://localhost:5173'); // Vite dev server
    cy.contains('Chat'); // Adjust to any text your app shows
  });

  it('can type in input and send a message', () => {
    cy.get('input[type="text"]').type('Hello Cypress!');
    cy.get('button').contains('Send').click();
    cy.contains('Hello Cypress!'); // Verify message appears in chat
  });
});
