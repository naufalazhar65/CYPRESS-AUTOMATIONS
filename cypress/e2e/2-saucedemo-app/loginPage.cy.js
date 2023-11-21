/// <reference types="cypress" />

import 'cypress-xpath';

describe('Login and Logout', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
  });

  const username = 'standard_user';
  const password = 'secret_sauce';
  const invalidPassword = 'secret_sauce123';

  it('should login with valid credentials', () => {
    cy.xpath("//input[@id='user-name']").type(username)
      .should('have.value', username);
    cy.wait(1000);
    cy.xpath("//input[@id='password']").type(password)
      .should('have.value', password);
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

  it('should logout after successful login', () => {
    // Reuse login code from the first test
    cy.xpath("//input[@id='user-name']").type(username);
    cy.wait(1000);
    cy.xpath("//input[@id='password']").type(password);
    cy.wait(1000);
    cy.xpath("//input[@id='login-button']").click();
    cy.contains('Products').should('be.visible');
    cy.wait(2000);

    // Logout
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click();
    
    // Verify logout
    cy.url().should('include', '/');
    cy.contains('Swag Labs').should('be.visible');
    // cy.screenshot();
  });
});
