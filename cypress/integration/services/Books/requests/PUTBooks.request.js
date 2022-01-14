/// <reference types="cypress" />

const payloadUpdateBook = require('../payloads/update-book.json')

function updateBook(idBook) {
    return cy.api({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: payloadUpdateBook
    })
}

export { updateBook }