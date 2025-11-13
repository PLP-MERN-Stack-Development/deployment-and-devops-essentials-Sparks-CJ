describe('Socket.io Chat App', () => {
  it('connects and sends a message', () => {
    cy.visit('/');
    cy.get('[data-testid="username-input"]').type('TestUser');
    cy.get('[data-testid="join-btn"]').click();
    cy.get('[data-testid="message-input"]').type('Hello World');
    cy.get('[data-testid="send-btn"]').click();
    cy.contains('Hello World').should('exist');
  });
});
