/// <reference types="cypress" />

import 'cypress-xpath';

describe('Login and Checkout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(2000);
  });

  const username = 'standard_user';
  const password = 'secret_sauce';
  const invalidPassword = 'secret_sauce123';

  it('should login with valid credentials', () => {
    cy.xpath("//input[@id='user-name']").type(username);
    cy.wait(1000);
    cy.xpath("//input[@id='password']").type(password);
    cy.wait(1000);
    cy.xpath("//input[@id='login-button']").click();
    cy.contains('Products').should('be.visible');
    // cy.screenshot();
    cy.wait(2000);
  });

  it('should show an error message for invalid credentials', () => {
    cy.xpath("//input[@id='user-name']").type(username);
    cy.wait(1000);
    cy.xpath("//input[@id='password']").type(invalidPassword);
    cy.wait(1000);
    cy.xpath("//input[@id='login-button']").click();
    cy.xpath("//h3[contains(text(),'Epic sadface: Username and password do not match a')]")
      .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    // cy.screenshot();
    cy.wait(3000);
  });

  it('should add items to the cart and proceed to checkout', () => {
    // Perform login (reuse the code from the first test)

    // Add items to the cart
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.inventory_item').eq(1).find('.btn_inventory').click();

    // Go to the shopping cart
    cy.get('.shopping_cart_link').click();

    // Verify items in the cart
    cy.get('.cart_item').should('have.length', 2);

    // Proceed to checkout
    cy.get('.checkout_button').click();

    // Verify navigation to the checkout page
    cy.url().should('include', '/checkout-step-one');
    cy.screenshot();
    cy.wait(2000);
  });

  // Add more checkout-related tests as needed
});
