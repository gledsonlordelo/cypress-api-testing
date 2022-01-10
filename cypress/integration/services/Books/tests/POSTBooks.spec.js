/// <reference types="cypress" />

import * as POSTBooks from '../requests/POSTBooks.request'

const payloadAddBook = require('../payloads/add-book.json')

describe('POST Books', () => {
    it('Add a new book', () => {
        POSTBooks.addBook().should((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.body.id).to.eq(payloadAddBook.id);
            expect(resp.body.title).to.eq(payloadAddBook.title); 
            expect(resp.body.description).to.eq(payloadAddBook.description);  
        })
    });
});