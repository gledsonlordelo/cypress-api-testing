/// <reference types="cypress" />

import * as GETBooks from "../requests/GetBooks.request"


describe('Get Books', () => {
    it('Fetch ALL Books', () => {
        GETBooks.allBooks().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    });
});
