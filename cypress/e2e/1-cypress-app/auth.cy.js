/// <reference types="cypress" />


describe('User Sign-up and Login', () => {
    const userInfo = {
        firstName: "Naufal",
        lastName: "Azhar",
        username: "naufal65",
        password: "naufal354",
        invalidPassword: "naaaa2776",
      };

    beforeEach(() => {
        cy.visit('/signup');
        // cy.wait(1500);
    });

    //POSITIVE CASE
    it('should allow a visitor to sign-up, login, and logout', () => {
          // USER SIGN UP
        cy.get('#firstName').type(userInfo.firstName).should('have.value', userInfo.firstName);
        cy.get('#lastName').type(userInfo.lastName).should('have.value', userInfo.lastName);
        cy.get('#username').type(userInfo.username).should('have.value', userInfo.username);
        cy.get('#password').type(userInfo.password).should('have.value', userInfo.password);
        cy.get('#confirmPassword').type(userInfo.password).should('have.value', userInfo.password);
        cy.get('.makeStyles-form-4').submit()

          // USER LOGIN
        cy.get('#username').type(userInfo.username);
        cy.get('#password').type(userInfo.password);
        cy.get('.PrivateSwitchBase-input-28').click().should('be.checked');
        cy.wait(1000);
        cy.get('.makeStyles-form-22').submit();
        cy.get('[data-test="user-onboarding-dialog-content"]').should('be.visible');
        cy.get('[data-test="user-onboarding-next"]').click()
      });

      // NEGATIVE CASE
      it('should error for an invalid user', () => {
        cy.visit('/signin');
        cy.get('#username').type(userInfo.username);
        cy.get('#password').type(userInfo.invalidPassword);
        cy.get('.makeStyles-form-4').submit()
        cy.get('[data-test="signin-error"]').should('be.visible').and('have.text', 'Username or password is invalid')
      });

      // NEGATIVE CASE
      it('should error for login without input username', () => {
        cy.visit('/signin');
        cy.get('#password').type(userInfo.invalidPassword);
        cy.get('.makeStyles-form-4').submit()
        cy.get('#username-helper-text').should('be.visible').and('have.text', 'Username is required')
      });
      
});
