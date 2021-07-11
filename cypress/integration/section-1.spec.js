//const { section1 } = require('../objects/section-1')
import { createYield, idText } from "typescript"
import { section1 } from "../objects/section-1.js"
import { mainpage } from "../objects/mainPage.js"

describe('Problem 1', () => {
  
  beforeEach('Open application', ()=>{
    cy.openHomePage()
    mainpage.clickonSection1MenuPage()
  })

  it('Assert that the table is not visible', () =>{

  })

  it('After clicking the "Show table" button, assert the table is visible',()=>{
    section1.clickOnShowTableButton()
    section1.checkTableVisibleIfTrue()
  })

  it('Assert that the table is 5 columns wide', () =>{

  })

  it('Assert that the table is 10 rows long, excluding the first (header) row', () =>{

  })

  it('Assert that at least 5 entries have the role "user"', () =>{

  })

  it('Assert there are exactly 3 people older than 60 years old', () =>{

  })

  // The test steps for form 
  
  it('Assert that the form is not visible', () =>{

  })

  it('After clicking the "Show form" button, assert that the form is visible', ()=>{
    section1.clickOnShowFormButton()
    section1.checkFormVisibleIfTrue()
  })

  it('Fill in the "Name" and "Age" inputs, and assert that both inputs are filled', () =>{
    section1.enterNameAndAgeInForm()
  })

  it('Select "Female" from the select option, and assert that the value is "female"', () =>{
    section1.enterGenderInForm()
  })

  it('Tick the "Nurse" checkbox and assert that the value "nurse" is true', () =>{
    section1.enterNurseAsTrue()
  })

  it('Click on the "Submit" button and assert that there is an alert window showing with the text "Form submitted!"', () =>{
    section1.clickOnSubmitButton()
  })

})
