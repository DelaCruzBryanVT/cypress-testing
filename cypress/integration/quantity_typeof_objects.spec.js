describe('Quantity type objects', () => {
    let arrayLogin = [
        "User*",
        "Password*"
    ]
    let count = 0
    it('Objects to Login', () => {
        cy.visit('/')
        //cy.contains('Add').click()
        cy.get("#form").find("label").each(x => {
            cy.log(x[0].textContent)
            expect(x[0].textContent).equal(arrayLogin[count])
            count++
        }
        )
    })
    it('Objects to form 1', () => {

    })
    it('Objects to form 2', () => {

    })
})