describe('visit website', function() {
  it('visit seekarten heroku website', function() {
    cy.visit('https://seekarten.herokuapp.com')
    cy.get('h2').should('have.text', 'Seekarte: ICH')

    cy.contains('Zertifikat eintragen').click()
    cy.url().should('include', '/certificate')

    // test form fields
    cy.get('[name="title"]')
      .type('die ist ein Test-Titel')
      .should('have.value', 'die ist ein Test-Titel')
    cy.get('[name="subject"]')
      .type('Test-Thema')
      .should('have.value', 'Test-Thema')

    const todaysDate = Cypress.moment().format('YYYY-MM-DD')
    cy.get('[name="date"]').should('have.value', todaysDate)

    cy.get('[name="comment"]')
      .type('Dies ist eine Bemerkung!')
      .should('have.value', 'Dies ist eine Bemerkung!')

    // Page timeLine
    cy.contains('Zeitleiste').click()
    cy.url().should('include', '/timeLine')

    cy.contains('all').click()
    cy.contains('skill').click()
    cy.contains('certificate').click()

    cy.contains('Seekarten').click()
    cy.url().should('include', '/charts/ich')
  })
})
