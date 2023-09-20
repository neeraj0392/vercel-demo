describe("Example Test", () => {
  it("Visits the homepage", () => {
    cy.visit("/");
    cy.contains("Welcome to Next.js!").should("exist");
  });
});
