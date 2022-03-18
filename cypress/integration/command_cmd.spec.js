describe('Command CMD', () => {
    it('Exec .bat', () => {
        cy.fixture("test.bat").then((fileContent) => {
             cy.visit("/");
            cy.exec(fileContent).its('stdout')
            .should('contain', '')
        });
    });
})