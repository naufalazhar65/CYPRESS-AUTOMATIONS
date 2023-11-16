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

    it('Verify all widgets on the dashboard are displayed', () => {
        // Time at Work widget
        cy.get('.orangehrm-dashboard-grid > :nth-child(1)')
            .should('exist')
            .find('.oxd-sheet')
            .should('be.visible')
            .and('have.text', 'Time at Work');

        // My Actions widget (uncomment if needed)
        // cy.get(':nth-child(2) > .oxd-sheet').should('be.visible');

        // Quick Launch widget
        cy.get(':nth-child(3) > .oxd-sheet')
            .should('be.visible')
            .and('have.text', 'Quick Launch');

        // Buzz Latest Posts widget
        cy.get(':nth-child(4) > .oxd-sheet')
            .should('be.visible')
            .and('have.text', 'Buzz Latest Posts');

        // Employees on Leave Today widget
        cy.get(':nth-child(5) > .oxd-sheet')
            .should('be.visible')
            .and('have.text', 'Employees on Leave Today');

        // Employee Distribution by Sub Unit widget
        cy.get(':nth-child(6) > .oxd-sheet')
            .should('be.visible')
            .and('have.text', 'Employee Distribution by Sub Unit');

        // Employee Distribution by Location widget
        cy.get(':nth-child(7) > .oxd-sheet')
            .should('be.visible')
            .and('have.text', 'Employee Distribution by Location');
    });
});
