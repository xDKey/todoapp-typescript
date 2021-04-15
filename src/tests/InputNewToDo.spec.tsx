import { mount } from '@cypress/react'
import React from 'react'
import { Provider } from 'react-redux'
import InputNewToDo from '../components/InputNewToDo'
import store from '../store/store'

describe('<InputNewToDo />', () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <InputNewToDo />
      </Provider>
    )
    cy.waitForReact()
  })

  it('Render correctly', () => {
    cy.react('InputNewToDo').contains('Choose Category')
  })

  it('Correct take categories', () => {
    cy.react('InputNewToDo')
      .get('select')
      .should('have.value', '')
      .select('Work')
      .should('have.value', 'Work')
  })

  it('Doesnt add new task if no input is filled or any parameter is not selected', () => {
    cy.spy(store, 'dispatch').as('check')
    cy.react('InputNewToDo').get('input').type('check{enter}')
    cy.get('@check').should('not.have.been.called')

    cy.react('InputNewToDo').get('select').select('Work')
    cy.react('InputNewToDo').get('input').clear().type('{enter}')
    cy.get('@check').should('not.have.been.called')
  })

  it('Calls addNewItem if input filled and some option selected', () => {
    cy.spy(store, 'dispatch').as('check')

    cy.react('InputNewToDo').get('select').select('Work')
    cy.react('InputNewToDo').get('input').type('check{enter}')
    cy.get('@check').should('have.been.called')
  })
})
