/// <reference types="cypress" />

const username = 'Admin';
const validPassword = 'admin123';
const invalidPassword = 'admin';

describe('Login Functional', () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login');
        cy.wait(2000);
    });

    // POSITIVE CASE
    it('login with valid credentials', () => {
        cy.get('.orangehrm-login-slot').should('be.visible');

        // Type valid username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validPassword);

        // Click login button
        cy.get('.oxd-form').submit()

        // Assertion: Check if the layout context exists after login
        cy.get('.oxd-layout-context').should('exist');
        cy.wait(2000);
    });

    // NEGATIVE CASE
    it('fails to log in with invalid credentials', () => {
        cy.get('.orangehrm-login-slot').should('be.visible');

        // Type invalid username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(invalidPassword);

        // Click login button
        cy.get('.oxd-form').submit()

        // Assertion: Check if the alert appears after unsuccessful login
        cy.get('.oxd-alert').should('be.visible');
    });

    // NEGATIVE CASE
    it('fails to log in without input username and password', () => {
        cy.get('.orangehrm-login-slot').should('be.visible');
        cy.get('.oxd-form').submit()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').and('have.text', 'Required');
    });

    // POSITIVE CASE
    it('logout successfully', () => {
        // Log in with valid credentials
        cy.get('.orangehrm-login-slot').should('be.visible');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validPassword);
        cy.get('.oxd-form').submit()
        cy.get('.oxd-layout-context').should('exist');

        // USER LOG OUT
        cy.get('.oxd-userdropdown-tab').click();
        cy.contains('Logout').click();
        cy.get('.oxd-form').should('be.visible');
        cy.contains('Login').should('be.visible');
    });
});
