export class mainPage{

    clickonSection1MenuPage(){
      cy.get('#navbar')
      .find('a')
      .contains('Section 1')
      .click()
    }
  
    clickonSection2MenuPage(){
      cy.get('#navbar')
      .find('a')
      .contains('Section 2')
      .click()
    }
  }
  
  export const mainpage = new mainPage()