const todaysDate = Cypress.moment().format('YYYY-MM-DD')
const typedText = 'test text'

describe('visit website', function() {
  it('visit seekarten heroku website', function() {
    cy.visit('https://seekarten.herokuapp.com')
    cy.get('h2').should('have.text', 'Seekarte: ICH')
  })

  it('open page to add certifcate', () => {
    cy.contains('Zertifikat eintragen').click()
    cy.url().should('include', '/certificate')
    // test form fields
    //cy.focused()
  })

  it('fill from and save certificate', () => {
    cy.get('form')
      .find('[name="title"]')
      .type(typedText)
      .should('have.value', typedText)
    cy.get('[name="subject"]')
      .type(typedText)
      .should('have.value', typedText)

    cy.get('[name="date"]').should('have.value', todaysDate)

    cy.get('[name="comment"]')
      .type(typedText)
      .should('have.value', typedText)

    // https://on.cypress.io/submit
    cy.get('form').submit()
    cy.contains('Zertifikate')
  })

  it('check first certificate in list', function() {
    cy.get('em')
      .first()
      .should('have.text', typedText)
    cy.get('span')
      .first()
      .should('have.text', todaysDate)
    cy.get('h4')
      .first()
      .should('have.text', typedText)
    cy.get('small')
      .first()
      .should('have.text', typedText)
  })

  it('visit seekarten heroku website', function() {
    // Page timeLine
    cy.contains('Zeitleiste').click()
    cy.url().should('include', '/timeLine')

    //Filter all
    cy.contains('all').click() //.should('have.class', 'active')
    //Filter skill
    cy.contains('skill').click()
    cy.get('h2').should('have.text', 'Zeitleiste ')

    //cy.get('ul section li ')
    // .should('have.attr')
    // .should('have.type', 'skill')
    //cy.get('ul section').should('have.text', 'Arbeitshaltung')
    //cy.get('ul section li').should('have.text', 'Arbeitshaltung')

    //Filter certificate
    cy.contains('certificate').click()

    // visualisation page
    cy.contains('Sunburst').click()
    cy.url().should('include', '/vis')
    cy.get('.basic-sunburst-example-wrapper')

    cy.contains('Seekarten').click()
    cy.url().should('include', '/charts/ich')
  })
})
