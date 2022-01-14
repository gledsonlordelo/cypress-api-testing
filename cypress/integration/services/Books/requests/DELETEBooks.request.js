/// <reference types="cypress" />

function deleteBook(idBook) {
    return cy.api({
        method: 'DELETE',
        url: `Books/${idBook}`,
        failOnStatusCode: false
    })
    
}

export { deleteBook };
