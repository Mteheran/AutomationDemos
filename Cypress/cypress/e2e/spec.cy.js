describe('Sauce demo', () => {
  it('login pass', () => {
    cy.visit('https://www.saucedemo.com/#/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.app_logo').should('have.text', 'Swag Labs')
  })
})