
export class Section2Page{

  clickOnFirstButtonNetworkCall(){
    cy.get('button[id="network-call-button"]').click()
  }

  clickOnDownloadfileButton(){
    cy.get('#file-download-button')
    .click()
  }

  ClickToOpenNewFile(){
    cy.get('button[id="new-tab-button"]').click()
  }


}
export const section2 = new Section2Page()