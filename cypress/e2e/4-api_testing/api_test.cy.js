/// <reference types="cypress" />

describe('API Testing with Cypress', () => {
  it('should retrieve a list of users', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=1').then((response) => {
      // Verifikasi bahwa responsenya memiliki status code 200
      expect(response.status).to.eq(200);

      // Verifikasi bahwa 'data' ada di dalam respons
      expect(response.body).to.have.property('data');

      // Verifikasi bahwa 'data' berupa array
      expect(response.body.data).to.be.an('array');

      // Verifikasi bahwa setidaknya ada satu pengguna dalam array
      expect(response.body.data).to.have.length.greaterThan(0);

      // Outputkan daftar pengguna dalam konsol
      cy.log('List of Users:', response.body.data);
    });
  });

  // ======================================================================================================

  it('should create a new user using POST request', () => {
    // Data pengguna yang akan dibuat
    const newUser = {
      name: 'John Doe',
      job: 'Tester',
    };

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: newUser,
    }).then((response) => {
      // Verifikasi bahwa responsenya memiliki status code 201 (Created)
      expect(response.status).to.eq(201);

      // Verifikasi bahwa 'name' dan 'job' yang dikirimkan sesuai dengan yang diterima
      expect(response.body.name).to.eq(newUser.name);
      expect(response.body.job).to.eq(newUser.job);

      // Outputkan informasi pengguna yang baru dibuat dalam konsol
      cy.log('New User Created:', response.body);
    });
  });

  // ======================================================================================================

  it('should update user information using PUT request', () => {
    // ID pengguna yang akan diperbarui
    const userIdToUpdate = 2;

    // Data pengguna yang baru
    const updatedUserInfo = {
      name: 'Naufal',
      job: 'Dev',
    };

    cy.request({
      method: 'PUT',
      url: `https://reqres.in/api/users/${userIdToUpdate}`,
      body: updatedUserInfo,
    }).then((response) => {
      // Verifikasi bahwa responsenya memiliki status code 200 (OK)
      expect(response.status).to.eq(200);

      // Verifikasi bahwa 'name' dan 'job' yang diperbarui sesuai dengan yang diterima
      expect(response.body.name).to.eq(updatedUserInfo.name);
      expect(response.body.job).to.eq(updatedUserInfo.job);

      // Outputkan informasi pengguna yang diperbarui dalam konsol
      cy.log('User Updated:', response.body);
    });
  });

  // ======================================================================================================

  it('should delete a user using DELETE request', () => {
    // ID pengguna yang akan dihapus
    const userIdToDelete = 2;

    cy.request({
      method: 'DELETE',
      url: `https://reqres.in/api/users/${userIdToDelete}`,
    }).then((response) => {
      // Verifikasi bahwa responsenya memiliki status code 204 (No Content)
      expect(response.status).to.eq(204);

      // Outputkan informasi bahwa pengguna telah dihapus dalam konsol
      cy.log(`User with ID ${userIdToDelete} Deleted`);
    });
  });
});
