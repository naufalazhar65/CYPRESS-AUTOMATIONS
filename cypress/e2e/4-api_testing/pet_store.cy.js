// /// <reference types="cypress" />

// describe('Petstore API Testing', () => {
//     // Test Case 1: Retrieve a list of available pets
//     it('should retrieve a list of pets', () => {
//       cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available').then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body).to.be.an('array').and.not.be.empty;
//         cy.log('List of Available Pets:', response.body);
//       });
//     });
  
// // ======================================================================================================
// // ======================================================================================================


// //     // Test Case 2: Add a new pet
//     it('should add a new pet', () => {
//       const newPet = {
//         id: 12345,
//         name: 'CypressPet',
//         category: {
//           id: 1,
//           name: 'Dogs',
//         },
//         photoUrls: ['https://example.com/pet.jpg'],
//         tags: [
//           {
//             id: 1,
//             name: 'tag1',
//           },
//         ],
//         status: 'available',
//       };
  
//       cy.request({
//         method: 'POST',
//         url: 'https://petstore.swagger.io/v2/pet',
//         body: newPet,
//       }).then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body.id).to.eq(newPet.id);
//         expect(response.body.name).to.eq(newPet.name);
//         cy.log('New Pet Added:', response.body);
//       });
//     });
  
// // ======================================================================================================
// // ======================================================================================================

//     // Test Case 3: Update a pet's information
//     it('should update a pet\'s information', () => {
//       const petIdToUpdate = 12345;
//       const updatedPetInfo = {
//         id: petIdToUpdate,
//         name: 'UpdatedCypressPet',
//         status: 'sold',
//       };
  
//       cy.request({
//         method: 'PUT',
//         url: `https://petstore.swagger.io/v2/pet`,
//         body: updatedPetInfo,
//       }).then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body.id).to.eq(updatedPetInfo.id);
//         expect(response.body.name).to.eq(updatedPetInfo.name);
//         expect(response.body.status).to.eq(updatedPetInfo.status);
//         cy.log('Pet Information Updated:', response.body);
//       });
//     });
  
// // ======================================================================================================
// // ======================================================================================================

//     // Test Case 4: Delete a pet
//     it('should delete a pet', () => {
//       const petIdToDelete = 12345;
  
//       cy.request({
//         method: 'DELETE',
//         url: `https://petstore.swagger.io/v2/pet/${petIdToDelete}`,
//       }).then((response) => {
//         expect(response.status).to.eq(200);
//         cy.log(`Pet with ID ${petIdToDelete} Deleted`);
//       });
//     });
//   });
  
// // ======================================================================================================
// // ======================================================================================================

// describe('Petstore Store API Testing', () => {
//     // Test Case 1: Place a new order
//     it('should place a new order', () => {
//       const newOrder = {
//         id: 10,
//         petId: 12345, // Assuming pet with ID 12345 exists
//         quantity: 1,
//         shipDate: '2023-12-01T12:00:00.000Z',
//         status: 'placed',
//         complete: true,
//       };
  
//       cy.request({
//         method: 'POST',
//         url: 'https://petstore.swagger.io/v2/store/order',
//         body: newOrder,
//       }).then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body.id).to.eq(newOrder.id);
//         expect(response.body.petId).to.eq(newOrder.petId);
//         expect(response.body.quantity).to.eq(newOrder.quantity);
//         expect(response.body.status).to.eq(newOrder.status);
//         expect(response.body.complete).to.eq(newOrder.complete);
//         cy.log('New Order Placed:', response.body);
//       });
//     });
  
// // ======================================================================================================
// // ======================================================================================================

//     // Test Case 2: Retrieve order by ID
//     it('should retrieve an order by ID', () => {
//       const orderIdToRetrieve = 10;
  
//       cy.request('GET', `https://petstore.swagger.io/v2/store/order/${orderIdToRetrieve}`).then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body.id).to.eq(orderIdToRetrieve);
//         cy.log('Retrieved Order:', response.body);
//       });
//     });
  
// // ======================================================================================================
// // ======================================================================================================

//     // Test Case 3: Delete an order by ID
//     it('should delete an order by ID', () => {
//       const orderIdToDelete = 10;
  
//       cy.request({
//         method: 'DELETE',
//         url: `https://petstore.swagger.io/v2/store/order/${orderIdToDelete}`,
//       }).then((response) => {
//         expect(response.status).to.eq(200);
//         cy.log(`Order with ID ${orderIdToDelete} Deleted`);
//       });
//     });
//   });

// // ======================================================================================================
// // ======================================================================================================
  
//   describe('Petstore User API Testing', () => {
//     // Test Case 1: Create a new user
//    it('should create a new user', () => {
//     const newUser = {
//       id: 123455,
//       username: 'cypressuser',
//       firstName: 'Cypress',
//       lastName: 'User',
//       email: 'cypressuser@example.com',
//       password: 'cypresspassword',
//       phone: '1234567890',
//       userStatus: 34534,
//     };
  
//     cy.request({
//       method: 'POST',
//       url: 'https://petstore.swagger.io/v2/user',
//       body: newUser,
//     }).then((response) => {
//       // Log the response to the console for debugging
//       console.log('Response Body:', response.body);
  
//       // Verify the response status is 200 OK
//       expect(response.status).to.eq(200);
  
//       // Verify that the response body contains the expected user data
//       expect(response.body.id).to.eq(newUser.id);
//       expect(response.body.username).to.eq(newUser.username);
//       expect(response.body.firstName).to.eq(newUser.firstName);
//       expect(response.body.lastName).to.eq(newUser.lastName);
//       expect(response.body.email).to.eq(newUser.email);
//       expect(response.body.password).to.eq(newUser.password);
//       expect(response.body.phone).to.eq(newUser.phone);
//       expect(response.body.userStatus).to.eq(newUser.userStatus);
//     });
//   });
    
// // ======================================================================================================
// // ======================================================================================================
  
//     // Test Case 2: Retrieve user by username
//     it('should retrieve a user by username', () => {
//       const usernameToRetrieve = 'cypressuser';
  
//       cy.request('GET', `https://petstore.swagger.io/v2/user/${usernameToRetrieve}`).then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body.username).to.eq(usernameToRetrieve);
//         cy.log('Retrieved User:', response.body);
//       });
//     });
  
// // ======================================================================================================
// // ======================================================================================================

//     // Test Case 3: Update user information
//     it('should update user information', () => {
//       const usernameToUpdate = 'cypressuser';
//       const updatedUserInfo = {
//         id: 11, // Use the correct user ID you want to update
//         username: usernameToUpdate,
//         firstName: 'UpdatedCypress',
//         lastName: 'UpdatedUser',
//         email: 'updatedcypressuser@example.com',
//         password: 'updatedcypresspassword',
//         phone: '9876543210',
//         userStatus: 2,
//       };
    
//       cy.request({
//         method: 'PUT',
//         url: `https://petstore.swagger.io/v2/user/${usernameToUpdate}`,
//         body: updatedUserInfo,
//       }).then((response) => {
//         expect(response.status).to.eq(200);
//         expect(response.body.id).to.eq(updatedUserInfo.id);
//         expect(response.body.username).to.eq(updatedUserInfo.username);
//         expect(response.body.firstName).to.eq(updatedUserInfo.firstName);
//         expect(response.body.lastName).to.eq(updatedUserInfo.lastName);
//         expect(response.body.email).to.eq(updatedUserInfo.email);
//         expect(response.body.phone).to.eq(updatedUserInfo.phone);
//         expect(response.body.userStatus).to.eq(updatedUserInfo.userStatus);
//         cy.log('User Information Updated:', response.body);
//       });
//     });
    
// // ======================================================================================================
// // ======================================================================================================

//     // Test Case 4: Delete a user by username
//     it('should delete a user by username', () => {
//       const usernameToDelete = 'cypressuser';
  
//       cy.request({
//         method: 'DELETE',
//         url: `https://petstore.swagger.io/v2/user/${usernameToDelete}`,
//       }).then((response) => {
//         expect(response.status).to.eq(200);
//         cy.log(`User with username ${usernameToDelete} Deleted`);
//       });
//     });
//   });
  