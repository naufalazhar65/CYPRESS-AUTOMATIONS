/// <reference types="cypress" />

describe('Bank Account Management', () => {
    const userInfo = {
        username: "naufal65",
        password: "naufal354",
    };
    beforeEach(() => {
        cy.visit('/bankaccounts');
        cy.wait(1500);
    });

    it('should create a new bank account', () => {
          
        // USER LOGIN
        cy.get('#username').type(userInfo.username);
        cy.get('#password').type(userInfo.password);
        cy.get('.PrivateSwitchBase-input-14').check().should('be.checked');
        cy.wait(1000);
        cy.get('.makeStyles-form-4').submit();

        

        // CREATE BANK ACCOUNT
        cy.get('[data-test="bankaccount-form"]').should('be.visible');
        cy.get('#bankaccount-bankName-input').type('The Best Bank');
        cy.get('#bankaccount-routingNumber-input').type('987654321');
        cy.get('#bankaccount-accountNumber-input').type('123456789');
        cy.get('[data-test="bankaccount-form"]').submit();
    });

    it('should display bank account form errors', () => {
        
    });
});
