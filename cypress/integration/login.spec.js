describe('Login Test', () => {

    let options = 2;

    beforeEach(() => {
        cy.visit("/");
    })

    if (options == 1) {
        it('Login automatic', () => {
            cy.login().then(x => {
                cy.log("Login Successfully!")
            })
        })
    }

    if (options == 2) {
        it('Login Localstorage', () => {
            cy.login()
                .wait(4000)
                .should(() => {
                    expect(localStorage.getItem("sessionData")).to.eq(
                        
                        JSON.stringify({
                            user: "root",
                            password: "root"
                        })
                    );
                }).then(res =>
                    cy.log("Login Successfully!"));
        })
    }

})