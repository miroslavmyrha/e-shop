describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  }) 

  it('passes', () => {
    cy.visit('/')
  })

  it('hamburger test', () => {
    cy.get('[data-test="hamburger-menu"]').should('exist').and('be.visible')
  })
})