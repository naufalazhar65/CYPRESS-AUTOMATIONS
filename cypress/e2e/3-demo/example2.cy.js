describe("google", () => {
  it("tests google", () => {
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").click();
    cy.get("#APjFqb").type("instagram");
    cy.get("#APjFqb").type("{enter}");
    cy.get('#APjFqb').should('have.value', 'instagram')
    cy.contains('Instagram').click()

  });
});
