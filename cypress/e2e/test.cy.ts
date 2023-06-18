describe('E2E tests: ', {  defaultCommandTimeout: 10000 }, () => {
  it('Page can be loaded', () => {
    cy.visit('/')
  })

  context('beforeEach visit "/", setting up viewport to fullHD', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.viewport(1920, 1080)
    })
    
    it('Toolbar should exist and be visible', () => {
      cy.get('[data-test="toolbar"]').should('exist').and('be.visible')
    })

    it('Hamburger menu should exist and be visible', () => {
      cy.get('button[data-test="hamburger-menu"]').should('exist').and('be.visible')
    })
  
    it('Title has text: "Vue E-shop" and should exist and be visible', () => {
      cy.get('[data-test="page-title"]').should('exist').and('be.visible')
    })

    it('Search button should exist and be visible', () => {
      cy.get('[data-test="search-button"]').should('exist').and('be.visible')
    })

    it('Shopping cart should exist and be visible', () => {
      cy.get('[data-test="shopping-cart"]').should('exist').and('be.visible')
    })

    it('Option extension should exist and be visible', () => {
      cy.get('[data-test="options-extension"]').should('exist').and('be.visible')
    })
  })
})