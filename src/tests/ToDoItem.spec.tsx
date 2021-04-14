import React from 'react'
import { mount } from '@cypress/react'
import ToDoItem from '../components/ToDoItem'

describe('<ToDoItem />', () => {
  beforeEach(() => {
    mount(
      <ToDoItem
        id={0}
        label='Test'
        isDone={false}
        setToDoDone={cy.stub().as('setToDoDone')}
        removeItem={cy.stub().as('removeItem')}
      />
    )
    cy.waitForReact()
  })

  it('Render correctly', () => {
    cy.react('ToDoItem').contains('Test')
  })

  it('Call setToDoDone onclick item', () => {
    cy.react('ToDoItem').contains('Test').click()
    cy.get('@setToDoDone').should('have.been.called')
  })

  it('Call removeItem onclick X-button', () => {
    cy.react('ToDoItem').contains('X').click()
    cy.get('@removeItem').should('have.been.called')
  })
})
