/// <reference types="cypress" />

import * as DELETEBook from "../requests/DELETEBooks.request"
import * as GETBooks from "../requests/GETBooks.request"
import * as POSTBooks from "../requests/POSTBooks.request"


describe('DELETE Books', () => {
    it('Delete Book by ID', () => {
        GETBooks.allBooks().then((respALLBooks)=>{
            try{
                if(respALLBooks != null ){
                    DELETEBook.deleteBook(respALLBooks.body[0].id)
                    .should((respDeleteBook) => {
                        expect(respDeleteBook.status).to.eq(200);
                    })  
                } 
            } catch (error) {
                console.error(error + " - Book ID is empty")
            }
        })
    });

    it('Create and  Delete Book', () => {
        POSTBooks.addBook().then((resAddBook) => {
            DELETEBook.deleteBook(resAddBook.body.id)
                .should((resDeleteBook) => {
                    expect(resDeleteBook.status).to.eq(200)
                })
        })
    });
});