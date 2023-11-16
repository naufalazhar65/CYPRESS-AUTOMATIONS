/// <reference types="cypress" />

describe('Test 01', () => {
    beforeEach(() => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login');
    });
  
    it('logs in, books an appointment, and verifies confirmation', () => {
    
      // Login
      const username = 'John Doe';
      const password = 'ThisIsNotAPassword';
      cy.get('#txt-username').type(username);
      cy.get('#txt-password').type(password);
      cy.get('#btn-login').click();
      cy.wait(1000);
  
      // Pilih fasilitas
      const selectedOption = 'Seoul CURA Healthcare Center';
      cy.get('#combo_facility').should('be.visible');
      cy.get('#combo_facility').select(selectedOption);
      cy.get('#combo_facility').should('have.value', selectedOption);
  
      // Checkbox
      cy.get('#chk_hospotal_readmission').should('not.be.checked').check().should('be.checked').uncheck().should('not.be.checked');
  
      // Tanggal kunjungan
      const selectedDate = '1999-02-12';
      cy.get('#txt_visit_date').type(selectedDate);
      cy.get('#txt_visit_date').should('have.value', selectedDate);
  
      // Pilih program
      cy.get('#radio_program_medicaid').click();
  
      // Komentar
      const comment = 'hallo world';
      cy.get('#txt_comment').type(comment);
  
      // Booking appointment
      cy.get('#btn-book-appointment').click();
  
      // Verifikasi halaman konfirmasi
      cy.get('#summary > .container > .row').should('exist');
      cy.get('.col-xs-12.text-center h2').should('have.text', 'Appointment Confirmation');
      cy.get('.col-xs-12.text-center p.lead').should('have.text', 'Please be informed that your appointment has been booked as following:');
      cy.get('.col-xs-12.text-center hr.small').should('exist');

      cy.get('.text-center > .btn').click();
      
      cy.get('.form-horizontal').should('exist')
    });
  });
  