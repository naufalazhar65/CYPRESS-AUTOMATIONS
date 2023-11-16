/// <reference types="cypress" />

describe('Login Functional', () => {
    const username = 'Admin';
    const validPassword = 'admin123';
    const invalidPassword = 'admin';

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    // POSITIVE CASE
    it('logs in with valid credentials', () => {
        cy.get('.orangehrm-login-slot').should('exist');

        // Type valid username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validPassword);

        // Click login button
        cy.get('.oxd-button').click();

        // Assertion: Check if the layout context exists after login
        cy.get('.oxd-layout-context').should('exist');
    });

    // NEGATIVE CASE
    it('fails to log in with invalid credentials', () => {
        cy.get('.orangehrm-login-slot').should('exist');

        // Type invalid username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(invalidPassword);

        // Click login button
        cy.get('.oxd-button').click();

        // Assertion: Check if the alert appears after unsuccessful login
        cy.get('.oxd-alert').should('exist');
    });
});

describe('Forgot Password', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('User can reset a password and receive an email', () => {
        // Click on the "Forgot Password" link
        cy.get('.orangehrm-login-forgot > .oxd-text').click();

        // Assertion: Check if the URL includes the expected path
        cy.url().should('include', '/web/index.php/auth/requestPasswordResetCode');

        // Type username for password reset
        cy.get('.oxd-input').type('Admin');

        // Click on the Reset passoword button
        cy.get('.oxd-button--secondary').click();

        // Assertion: Check if the card container exists after password reset request
        cy.get('.orangehrm-card-container').should('exist');

        // Assertion: Check if the success message is displayed
        cy.get('.oxd-text--h6').should('have.text', 'Reset Password link sent successfully');
    });
});
