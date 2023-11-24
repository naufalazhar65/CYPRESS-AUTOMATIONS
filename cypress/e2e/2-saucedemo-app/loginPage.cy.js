/// <reference types="cypress" />
import 'cypress-xpath';

// DATA
const username = 'standard_user';
const password = 'secret_sauce';
const invalidPassword = 'secret_sauce123';

describe('Login and Logout', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
  });

  it('should login with valid credentials', () => {
    cy.xpath("//input[@id='user-name']").type(username)
      .should('have.value', username);
    cy.xpath("//input[@id='password']").type(password)
      .should('have.value', password);
    cy.xpath("//input[@id='login-button']").click();
    cy.contains('Products').should('be.visible');
    // cy.screenshot();
    cy.wait(2000);
  });

  it('should show an error message for invalid credentials', () => {
    cy.xpath("//input[@id='user-name']").type(username);
    cy.xpath("//input[@id='password']").type(invalidPassword);
    cy.xpath("//input[@id='login-button']").click();
    cy.wait(2000);
    cy.xpath("//h3[contains(text(),'Epic sadface: Username and password do not match a')]")
      .should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    // cy.screenshot();
  });

  it('should logout after successful login', () => {
    // Reuse login code from the first test
    cy.xpath("//input[@id='user-name']").type(username);
    cy.xpath("//input[@id='password']").type(password);
    cy.xpath("//input[@id='login-button']").click();
    cy.wait(2000);
    cy.contains('Products').should('be.visible');

    // Logout
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click();
    cy.wait(2000);
    
    // Verify logout
    cy.url().should('include', '/');
    cy.contains('Swag Labs').should('be.visible');
    // cy.screenshot();
  });
});
