describe('Quantity type objects', () => {

    let arrayLogin = ["User*", "Password*"]
    let arrayForm = []
    let count = 0

    beforeEach(()=>{
        cy.visit('/')
    })

    it('Objects to Login', () => {
        cy.get("#form").find("label").each(x => {
            expect(x[0].textContent).equal(arrayLogin[count])
            count++
        }
        )
        cy.get("#form").find("input[type=text]").should("have.length", 1)
        cy.get("#form").find("input[type=password]").should("have.length", 1)
        cy.get("#form").find("button").should("have.length", 1)
        cy.login()
    })

    it('Objects to Dashboard', () => {

    })

    it('Objects to form 1', () => {

    })
    
    it('Objects to form 1', () => {

    })
})