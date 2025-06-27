describe('renders heading with skips', () => {
  it('renders the skips heading on the screen', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="cypress-skips-heading"]').should('exist')
    cy.get('[data-testid="cypress-skips-heading"]').should('have.text', 'Choose your skip size')
  })

  it('renders the skips on the screen', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="skip-card"]').should('have.length.greaterThan', 0)
    cy.get('[data-testid="skip-card"]').should('have.length', 9)
  })
})