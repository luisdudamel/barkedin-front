describe("Given a form to login an user", () => {
  describe("When the user logs in, goes to profile page and tries to edit a dog", () => {
    it("Then the edit form should be shown", () => {
      const userLoginName = "luis1";
      const userPassword = "1234";

      cy.visit("http://localhost:3000/login");

      cy.get("[id=username]").type(userLoginName);
      cy.get("[id=password]").type(userPassword);
      cy.get("button[type=submit]").contains(/login/i).click();

      cy.get("p")
        .contains(/profile/i)
        .click();

      cy.get('[alt="Fergus avatar"]').click();

      cy.get("button")
        .contains(/edit profile/i)
        .click();
    });
  });
});
