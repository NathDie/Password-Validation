describe("password verif", () => {
    it("Password verification", () => {
        cy.visit("http://localhost:5173");

        cy.get("#password").type('azerty');
        cy.get("#btn").click();
        cy.get("#title").contains("Le mot de passe doit comporter au moins 8 caractères");

        cy.get("#password").clear().type('azertyuiop');
        cy.get("#btn").click();
        cy.get("#title").contains("Le mot de passe doit contenir au moins 2 chiffres");

        cy.get("#password").clear().type('azertyuiop25');
        cy.get("#btn").click();
        cy.get("#title").contains("Le mot de passe doit contenir au moins une lettre majuscule");

        cy.get("#password").clear().type('Azertyuiop25');
        cy.get("#btn").click();
        cy.get("#title").contains("Le mot de passe doit contenir au moins un caractère spécial");
    });
});