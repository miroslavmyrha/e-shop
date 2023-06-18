describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  }) 

  it('passes', () => {
    cy.visit('/')
  })

  it('hamburger test', () => {
    cy.get('button[data-test="hamburger-menu"]').should('exist').and('be.visible')
  })

  it('header test', () => {
    cy.get('header').should('exist').and('be.visible')
  })
})