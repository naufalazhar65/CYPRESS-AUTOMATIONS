/// <reference types="cypress" />

describe('Forgot Password', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(2000);
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
