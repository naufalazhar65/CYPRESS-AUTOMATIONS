/// <reference types="cypress" />

const username = 'Admin';
const validPassword = 'admin123';

describe('Search Bar', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(2000);
    });

    it('Verify search bar is working', () => {
        cy.get('.orangehrm-login-slot').should('exist');

        // Type valid username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validPassword);

        // Click login button
        cy.get('.oxd-button').click();

        // Assertion: Check if the layout context exists after login
        cy.get('.oxd-layout-context').should('exist');

        // Type into the search bar and check the input value
        cy.get('.oxd-input')
            .type('Admin')
            .should('have.value', 'Admin');

        // Click on a main menu item
        cy.get('.oxd-main-menu-item > .oxd-text').click();

        // Assertion: Check if the top bar header breadcrumb module is visible and has the expected text
        cy.get('.oxd-topbar-header-breadcrumb-module')
            .should('be.visible')
            .and('have.text', 'Admin');
    });
});
