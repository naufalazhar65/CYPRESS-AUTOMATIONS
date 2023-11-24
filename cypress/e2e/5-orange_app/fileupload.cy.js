/// <reference types="cypress" />
import 'cypress-xpath';
import 'cypress-file-upload';



describe('Add User', () => {
    beforeEach(() => {
        cy.visit('https://fineuploader.com/demos.html');
        cy.wait(2000);
    });
    it('Verify User can add user', () => {
        const imagefile = 'GIT.jpg';
        cy.get('[name="qqfile"]').attachFile(imagefile);
        cy.get('.qq-file-info').should('be.visible');
    });
});
