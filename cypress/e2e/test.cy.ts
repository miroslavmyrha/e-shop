describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('hamburger test', () => {
    cy.get('[data-test="hamburger-menu"]').should('exist').and('be.visible')
  })
})