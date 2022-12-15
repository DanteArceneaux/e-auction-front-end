import Chance from 'chance'
const chance = new Chance();



describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome to E-Auction sponsored by Revature Technologies')
  })
})



//register works
describe('Register', () => {
  it('Should register a new user', () => {
    cy.visit('/register')
    cy.get('#firstName').type("Dante");
    cy.get('#lastName').type("Romen");
    cy.get('#city').type("Flint");
    cy.get('#state').type("Michigan");
    cy.get('#phone').type(chance.phone({ formatted: false }));

    cy.get('#email').type(chance.email());
    cy.get('#pin').type(chance.zip());
   //role should be buyer or seller
    cy.get('#roles').type("buyer", {force: true});

  })
})


//login works
describe('Login', () => {
  it('Should login a user', () => {
    cy.visit('/login')
    cy.get('#email').type("dante@gmail.com");
    //pin should be 5555
    cy.get('#pin').type("5555")
    cy.get('#loginButton').click();
    //should redirect to home page
})
})



//Menu works
describe('Menu', () => {
  it('Should display menu', () => {
    cy.visit('/')
    cy.get('#menuButton').click();
    cy.contains('Menu')
  })
})
//Fetch and select product Product works
describe('Fetch Product', () => {
  it('Should fetch products and populate into select dropdown menu', () => {
    cy.visit('/')
    cy.get('#fetchButton').click();
    cy.contains('Product')

  })
})
