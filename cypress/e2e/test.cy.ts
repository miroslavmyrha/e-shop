describe('template spec', {  defaultCommandTimeout: 10000 }, () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(100000)
  }) 

  it('passes', () => {
    cy.visit('/')
  })

  it('hamburger test', () => {
    cy.get('button[data-test="hamburger-menu"]').as('hamburgerMenu')
    cy.wait('@hamburgerMenu').should('exist').and('be.visible')
  })

  it('header test', () => {
    cy.get('header').should('exist').and('be.visible')
  })
})