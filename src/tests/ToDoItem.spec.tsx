import React from 'react'
import { mount } from '@cypress/react'
import ToDoItem from '../components/ToDoItem'
import { Provider } from 'react-redux'
import store from '../store/store'

describe('<ToDoItem />', () => {
  beforeEach(() => {
    mount(
      <Provider store={store}>
        <ToDoItem id={0} label='Test' isDone={false} />
      </Provider>
    )
    cy.waitForReact()
    cy.spy(store, 'dispatch').as('check')
  })

  it('Render correctly', () => {
    cy.react('ToDoItem').contains('Test')
  })

  it('Calls dispatch onclick item', () => {
    cy.react('ToDoItem').contains('Test').click()
    cy.get('@check').should('have.been.called')
  })

  it('Calls dispatch onclick X-button', () => {
    cy.react('ToDoItem').contains('X').click()
    cy.get('@check').should('have.been.called')
  })
})
