const todaysDate = Cypress.moment().format('YYYY-MM-DD')
const typedText = 'test text'

describe('seekarten test', function() {
  it('visits seekarten heroku website', function() {
    cy.visit('https://seekarten.herokuapp.com')
    cy.get('a')
      .contains('Ich')
      .its('height')
      .should('be.gt', 0)

    //.should('be.visible')
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

  it('open timeLine page', function() {
    // Page timeLine
    cy.contains('Zeitleiste').click()
    cy.url().should('include', '/timeLine')
    cy.get('h2').should('have.text', 'Zeitleiste ')
  })

  it('filter timeLine page: all', function() {
    //Filter all
    cy.contains('all').click()
    cy.get('[type=skill]').should('exist')
    cy.get('[type=certificate]').should('exist')
  })
  it('filter timeLine page: skill', function() {
    //Filter skill
    cy.get('button')
      .contains('Kompetenzen')
      .click()
    cy.get('[type=skill]').should('exist')
    cy.get('[type=certificate]').should('not.exist')
  })

  it('filter timeLine page: certificate', function() {
    //Filter certificate
    cy.contains('Zertifikate').click()
    cy.get('[type=certificate]').should('exist')
    cy.get('[type=skill]').should('not.exist')
    //svg title Zertifikate
  })

  it('open sunburst visualisation page', function() {
    // visualisation page
    cy.contains('Sunburst').click()
    cy.url().should('include', '/vis')
    cy.get('.basic-sunburst-example-wrapper')
  })
})
