/// <reference types="cypress" />
import 'cypress-xpath';

describe('Product Checkout', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
  });
  
// Data
  const username = 'standard_user';
  const password = 'secret_sauce';
  const firstName = 'Naufal';
  const lastName = 'Azhar';
  const postalCode = '1234';

  it('should add items to the cart and proceed to checkout', () => {
    // Login
    cy.xpath("//input[@id='user-name']").type(username);
    cy.wait(1000);
    cy.xpath("//input[@id='password']").type(password);
    cy.wait(1000);
    cy.xpath("//input[@id='login-button']").click();
    cy.contains('Products').should('be.visible');
    cy.wait(2000);

    // Add items to the cart
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.inventory_item').eq(2).find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '2');

    // Go to the shopping cart
    cy.get('.shopping_cart_link').click();

    // Verify items in the cart
    cy.get('.cart_item').should('have.length', 2);

    // Proceed to checkout
    cy.get('[data-test="checkout"]').click();

    // Verify navigation to the checkout page
    cy.url().should('include', '/checkout-step-one');
    cy.wait(2000);
    cy.contains('Checkout: Your Information').should('be.visible').and('have.text', 'Checkout: Your Information');

    // Fill in user information
    cy.get('[data-test="firstName"]').type(firstName).should('have.value', firstName);
    cy.get('[data-test="lastName"]').type(lastName).should('have.value', lastName);
    cy.get('[data-test="postalCode"]').type(postalCode).should('have.value', postalCode);

    cy.get('[data-test="continue"]').click();

    // Verify checkout summary
    cy.get('#checkout_summary_container').should('be.visible');
    cy.get('.cart_list').should('contain', 'QTY').and('contain', 'Description');
    cy.get('.summary_info').should('contain', 'Payment Information').and('contain', 'Shipping Information').and('contain', 'Price Total');
    cy.get('.summary_total_label').should('contain', 'Total: $').and('contain', '49.66');

    // Complete the order
    cy.get('[data-test="finish"]').click();

    // Verify order completion message
    cy.get('#checkout_complete_container').should('be.visible')
      .find('.complete-header').should('have.text', 'Thank you for your order!');
    cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  });
});
