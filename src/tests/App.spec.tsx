import { mount } from '@cypress/react'
import React from 'react'
import App from '../components/App'

it('<App />', () => {
  mount(<App />)
  cy.waitForReact()

  cy.react('App')
    .get('form')
    .within(() => {
      cy.get('input').type('Check')
      cy.get('select').select('Work')
      cy.get('button').click()
    })
  cy.react('App').should('contain', 'Check')

  cy.react('App')
    .get('section > div')
    .last()
    .within(() => {
      cy.get('button').click()
    })

  cy.react('App')
    .should('not.contain', 'Check')
    .and('contain', 'Write first task')

  cy.react('App')
    .contains('Write first task')
    .click()
    .should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
    .click()
    .and('have.css', 'text-decoration', 'none solid rgb(0, 0, 0)')
})
