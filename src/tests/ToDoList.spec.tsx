import { mount } from '@cypress/react'
import React from 'react'
import { Provider } from 'react-redux'
import ToDoList from '../components/ToDoList'
import store from '../store/store'

describe('<ToDoList />', () => {
  it('Render correctly', () => {
    mount(
      <Provider store={store}>
        <ToDoList />
      </Provider>
    )
    cy.waitForReact()
    cy.react('ToDoList').get('section').should('have.length', '1')
  })
})
