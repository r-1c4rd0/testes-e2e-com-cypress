// cypress/e2e/login.cy.js
describe('Login', () => {
	it('successfully logs in', () => {
		cy.guiLogin()
		cy.wait('@getNotes')
  		
		cy.contains('h1', 'Your Notes').should('be.visible')
		cy.contains('a', 'Create a new note').should('be.visible')
	})
})
  