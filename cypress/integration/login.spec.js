describe('Login Test', () => {

    let options = 2;

    if(options == 1){
        it('Login automatic', () => {
            cy.visit("/");
            cy.get(':nth-child(1) > .form-control').clear();
            cy.get(':nth-child(1) > .form-control').type('root');
            cy.get(':nth-child(2) > .form-control').clear();
            cy.get(':nth-child(2) > .form-control').type('root');
            cy.get('.btn').click();
            cy.wait(4000);
            cy.log("Login Successfully!")
        })
    }
    if(options==2){
        it('Login localstorage', () => {
            cy.visit("/");
            cy.get(':nth-child(1) > .form-control').clear();
            cy.get(':nth-child(1) > .form-control').type('root');
            cy.get(':nth-child(2) > .form-control').clear();
            cy.get(':nth-child(2) > .form-control').type('root');
            cy.wait(4000);
            cy.get(".btn")
                .should("not.be.disabled")
                .click()
                .should(() => {
                    expect(localStorage.getItem("sessionData")).to.eq(
                        Json.stringify({
                            user: "root",
                            pasdword: "root"
                        })
                    );
                }).then(res =>
                    cy.log("Login Successfully!"));
        })
    }
   
})