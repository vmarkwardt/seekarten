const todaysDate = Cypress.moment().format('YYYY-MM-DD')
const typedText = 'test text ' + Cypress.moment()
const herokuPath = 'https://seekarten.herokuapp.com'
const localPath = 'http://localhost:3000'

const baseURL = localPath

describe('seekarten test', function() {
  it('visits seekarten heroku website', function() {
    cy.visit(baseURL)
    cy.get('a')
      .contains('Ich')
      .should('have.css', 'height', '33px')

    cy.get('h2').should('have.text', 'Seekarte: ICH')
  })

  it('open page to add certifcate', () => {
    cy.contains('Zertifikat eintragen').click()
    cy.url().should('include', '/certificate')
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
    cy.contains('Zeitleiste').click()
    cy.url().should('include', '/timeLine')
    cy.get('h2').should('have.text', 'Zeitleiste ')
  })

  it('filter timeLine page: all', function() {
    cy.contains('all').click()
    cy.get('[type=skill]').should('exist')
    cy.get('[type=certificate]').should('exist')
  })
  it('filter timeLine page: skill', function() {
    cy.get('button')
      .contains('Kompetenzen')
      .click()
    cy.get('[type=skill]').should('exist')
    cy.get('[type=certificate]').should('not.exist')
  })

  it('filter timeLine page: certificate', function() {
    cy.get('button')
      .contains('Zertifikate')
      .click()
    cy.get('[type=certificate]').should('exist')
    cy.get('[type=skill]').should('not.exist')
  })

  it('open sunburst visualisation page', function() {
    cy.contains('Sunburst').click()
    cy.url().should('include', '/vis')
    cy.get('.basic-sunburst-example-wrapper')
  })
})
