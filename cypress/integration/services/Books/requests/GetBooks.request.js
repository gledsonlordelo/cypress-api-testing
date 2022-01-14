/// <reference types="cypress" />

function allBooks() {
    return cy.api({
        method:'GET',
        url: "Books",
        failOnStatusCode: false
    })
}

export { allBooks };
