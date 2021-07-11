//module.exports = { Section1 }

export class Section1Page{

  clickOnShowTableButton(){
    cy.get('button[id="table-toggle-button"]').click()
  }

  checkTableIsHidden(){
    cy.get('[id=alaya-table]').then(($el) => {
      Cypress.dom.isHidden($el) // false
    })
  }

  checkTableVisibleIfTrue(){
    cy.get('[id=alaya-table]') // jQuery element
    .should('have.attr', 'style') // string attribute
    .invoke('replace', /\s/g, '') // string without whitespace
    .should('equal', 'display:table;')
  }

  clickOnShowFormButton(){
    cy.get('button[id="form-toggle-button"]').click()
  }

  checkFormVisibleIfTrue(){
    cy.get('[id=alaya-form]') // jQuery element
    .should('have.attr', 'style') // string attribute
    .invoke('replace', /\s/g, '') // string without whitespace
    .should('equal', 'display:block;')
  }

  enterNameAndAgeInForm(){
    this.clickOnShowFormButton()
    cy.get('[id="fullName"]').type('testuser1')  
    cy.get('#fullName').should('have.value', 'testuser1')
    cy.get('[id="age"]').type('25') 
    cy.get('#age').should('have.value', '25')
  }

  enterGenderInForm(){
    this.clickOnShowFormButton()
    cy.get('#gender').select('female')
    cy.get('#gender').should('have.value', 'female')
  }

  enterNurseAsTrue(){
    this.clickOnShowFormButton()
    cy.get('#nurse')
    .check({ force: true })
    .should('be.checked')
  }

  clickOnSubmitButton(){
    this.clickOnShowFormButton()
    cy.on('window:alert', cy.stub().as('alert'))
    cy.get('button[id="submit"]')
    .should('be.enabled')
    .click()
  cy.get('@alert').should('have.been.calledWithExactly', 'Form submitted!')
  }
}


export const section1 = new Section1Page()