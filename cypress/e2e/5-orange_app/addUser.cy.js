/// <reference types="cypress" />

const username = 'Admin';
const validPassword = 'admin123';

describe('Add User', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(2000);
    });

    it('Verify User can add user', () => {
        cy.get('.orangehrm-login-slot').should('exist');

        // Type valid username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(validPassword);

        // Click login button
        cy.get('.oxd-form').submit()

        // Assertion: Check if the layout context exists after login
        cy.get('.oxd-layout-context').should('exist');

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
        cy.get(':nth-child(4) > .oxd-input-group').type('ba2e25h343');

        // AUTOCOMPLETE INPUT
        cy.get('.oxd-autocomplete-text-input > input').type('Peter Mac Anderson');
        cy.wait(2000)
        cy.get('.oxd-autocomplete-option').each(($ele) => {
            if ($ele.text().includes("Peter Mac Anderson")) {
                cy.wrap($ele).click()
            }
            else {
                cy.log($ele.text())
            }
        });

        // Input password
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Naufalazhar354');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Naufalazhar354');

        // Click save button
        cy.get('.oxd-button--secondary').should('contain', 'Save').click();

        cy.get('.oxd-toast').should('be.visible').and('have.text', 'SuccessSuccessfully Saved×')
        cy.wait(5000)
        

        // VERIFY USER ALREADY CREATED
        cy.get(':nth-child(2) > .oxd-input').type('naufalazhar65');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        cy.get('.oxd-select-dropdown > :nth-child(2)').click();
        cy.get('.oxd-autocomplete-text-input > input').type('Peter Mac Anderson');
        cy.wait(2000)
        cy.get('.oxd-autocomplete-option').each(($ele) => {
            if ($ele.text().includes("Peter Mac Anderson")) {
                cy.wrap($ele).click()
            }
            else {
                cy.log($ele.text())
            }
        });
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        cy.get('.oxd-select-dropdown > :nth-child(2)').click();
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.wait(3000);
        
        // Assertion: Check if the record is found
        cy.contains('(1) Record Found').should('be.visible');
        cy.get('.oxd-table-card > .oxd-table-row').contains('naufalazhar65').should('be.visible');

    });
});
