/// <reference types="cypress" />

describe('Dashboard Page', () => {
    const username = 'Admin';
    const validPassword = 'admin123';

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.orangehrm-login-slot').should('exist');

        // Type valid username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validPassword);

        // Click login button
        cy.get('.oxd-button').click();

        // Assertion: Check if the layout context exists after login
        cy.get('.oxd-layout-context').should('exist');
    });

    it('Verify User can add user', () => {
        // Navigate to the user creation page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
        cy.url().should('include', '/web/index.php/admin/saveSystemUser');

        // Select user role
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click();
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should('have.text', 'Admin');

        // Select status
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').click();
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should('have.text', 'Enabled');

        // Input username
        cy.get(':nth-child(4) > .oxd-input-group').type('naufalazhar65');

        // Select Employee Name (assuming it's an autocomplete input)
        cy.get('.oxd-autocomplete-text-input > input').type('a');

        // Input password
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Naufalazhar354');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Naufalazhar354');

        // Click save button
        cy.get('.oxd-button--secondary')
        .should('contain', 'Save')
        .click();

    });
});
