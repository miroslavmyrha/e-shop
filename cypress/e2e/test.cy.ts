describe('template spec', {  defaultCommandTimeout: 10000 }, () => {
  it('visit', () => {
    cy.visit('/')
  })

  context('beforeEach visit "/", setting up viewport to fullHD', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.viewport(1920, 1080)
    }) 

    it('hamburger test', () => {
      cy.get('button[data-test="hamburger-menu"]').should('exist').and('be.visible')
    })
  
    it('header test', () => {
      cy.get('header').should('exist').and('be.visible')
    })
  })
})