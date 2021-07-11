const { Section2 } = require('../objects/section-2')
import { mainpage } from "../objects/mainPage.js"
import { section2 } from "../objects/section-2.js"

describe('Problem 2', () => {

  beforeEach('Open application', ()=>{
    cy.openHomePage()
    mainpage.clickonSection2MenuPage()
  })

  it('Click on the following button to trigger an abnormally long network call (+10sec)', () =>{
    section2.clickOnFirstButtonNetworkCall()
  })

  it('Click on the following button to trigger a file download', () =>{
    section2.clickOnDownloadfileButton()
  })
  
  it('Click on the following button to trigger a new tab opening', () =>{
    section2.ClickToOpenNewFile()
  })

  
})
