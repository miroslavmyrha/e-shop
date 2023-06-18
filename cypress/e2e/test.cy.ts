describe('template spec', {  defaultCommandTimeout: 10000 }, () => {
  beforeEach(() => {
    cy.visit('/')
  }) 

  it('passes', () => {
    cy.visit('/')
    cy.visit('/')
  })

  it('hamburger test', () => {
    cy.visit('/')
    cy.get('button[data-test="hamburger-menu"]').as('hamburgerMenu')
    cy.wait('@hamburgerMenu').should('exist').and('be.visible')
  })

  it('header test', () => {
    cy.visit('/')
    cy.get('header').should('exist').and('be.visible')
  })
})