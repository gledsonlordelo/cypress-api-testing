///  <reference types="cypress" />

function GETApiData() {
    return cy.request({
        method: 'GET',
        url: "https://covid19-brazil-api.now.sh/api/report/v1",
        failOnStatusCode: false
    })
}

export { GETApiData };