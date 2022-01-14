/// <reference types="cypress" />

const payloadAddBook = require('../payloads/add-book.json')

function addBook() {
    return cy.api({
        method: 'POST',
        url: "Books",
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export { addBook };