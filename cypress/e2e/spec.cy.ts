import Chance from 'chance'
const chance = new Chance();



describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome to E-Auction sponsored by Revature Technologies')
  })
})

//dropdown works
describe('Fetch Product', () => {
  it('Should fetch products and populate into select dropdown menu', () => {
    cy.visit('/')
    cy.get('#fetchProduct').click();
    cy.contains('Product')

  })
})

