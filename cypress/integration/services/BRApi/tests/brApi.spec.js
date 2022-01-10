///  <reference types="cypress" />

import * as GETAllData from '../requests/brApi.request'

const Ajv = require("ajv")
const ajv = new Ajv({allErrors: true, verbose:true}) // options can be passed, e.g. {allErrors: true}
const brApiSchema = require('../payloads/brApi-schema.json')


describe('Test API Contract with Cypress', () => {
    it('Request API', () => {
        GETAllData.GETApiData().then((response) => {
            const validate = ajv.compile(brApiSchema)
            const valid = validate(response.body)
          if (!valid) cy.log(validate.errors).then(() =>{
              throw new Error('Fail to validate the contract')
          })
        })          
    });
});