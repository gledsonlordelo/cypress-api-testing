/// <reference types="cypress" />

import * as GETBooks from "../requests/GETBooks.request"
import * as POSTBooks from "../requests/POSTBooks.request"
import * as PUTBooks from "../requests/PUTBooks.request"

const updateBook = require("../payloads/update-book.json")


describe('Update Book', () => {

    Cypress.Commands.add('validateRequest',(request) =>{
        expect(request).to.be.not.null
        expect(request.status).to.eq(200)
        expect(request.body.title).to.eq(updateBook.title)
    })

    it('Update existent book', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            cy.log("Old TITLE: " + resAllBooks.body[0].title)
            PUTBooks.updateBook(resAllBooks.body[0].id)
                .should((resUpdateBook) => {
                    //expect(resUpdateBook.status).to.eq(200)
                    //expect(resUpdateBook).to.be.not.null
                    //expect(resUpdateBook.body.title).to.eq(updateBook.title)
                    cy.validateRequest(resUpdateBook)
                })
        })
    });
    
    it('Create and update book by ID', () => {
        POSTBooks.addBook().then((respAddBook) => {
            cy.log("Old TITLE: " + respAddBook.body.title)
            PUTBooks.updateBook(respAddBook.body.id)
                .should((respUpdateBook) => {
                    //expect(respUpdateBook.status).to.eq(200)
                    //expect(respUpdateBook.body.title).to.eq(updateBook.title)
                    expect(respUpdateBook.body).deep.eq(updateBook)
                    //expect(respUpdateBook).to.be.not.null
                    cy.validateRequest(respUpdateBook)
                })
        })
    });
});