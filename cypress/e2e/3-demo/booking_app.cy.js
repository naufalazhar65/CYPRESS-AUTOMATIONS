/// <reference types="cypress" />

describe('Booking App', () => {
  beforeEach(() => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login');
  });

  it('logs in, books an appointment, and verifies confirmation', () => {
      // Login
      const username = 'John Doe';
      const password = 'ThisIsNotAPassword';

      cy.get('#txt-username')
          .type(username)
          .should('have.value', username);

      cy.get('#txt-password')
          .type(password)
          .should('have.value', password);

      cy.get('.form-horizontal').submit();
      cy.wait(1000);

      // Pilih fasilitas
      const selectedOption = 'Seoul CURA Healthcare Center';
      cy.get('#combo_facility')
          .should('be.visible')
          .select(selectedOption)
          .should('have.value', selectedOption);

      // Checkbox
      cy.get('#chk_hospotal_readmission')
          .should('not.be.checked')
          .check()
          .should('be.checked');

      // Tanggal kunjungan
      const selectedDate = '1999-02-12';
      cy.get('#txt_visit_date')
          .type(selectedDate)
          .should('have.value', selectedDate);

      // Pilih program
      cy.get('.col-sm-4 [type="radio"]')
          .check('None', { force: true })
          .should('be.checked');

      // Komentar
      const comment = 'hallo world';
      cy.get('#txt_comment')
          .type(comment)
          .should('have.value', comment);

      // Booking appointment
      cy.get('.form-horizontal').submit();

      // Verifikasi halaman konfirmasi
      cy.get('#summary > .container > .row').should('be.visible');
      cy.get('.col-xs-12.text-center h2').should('have.text', 'Appointment Confirmation');
      cy.get('.col-xs-12.text-center p.lead').should('have.text', 'Please be informed that your appointment has been booked as following:');
      cy.get('.col-xs-12.text-center hr.small').should('be.visible');

      cy.get('.text-center')
          .find('.btn').click();

      cy.get('.form-horizontal').should('be.visible');
  });
});
