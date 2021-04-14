import { mount } from '@cypress/react'
import React from 'react'
import ToDoList from '../components/ToDoList'

const toDo = [
  {
    id: 1,
    label: 'Write tests',
    category: 'Tests',
    isDone: true,
  },
  {
    id: 2,
    label: 'Do something',
    category: 'Work',
    isDone: false,
  },
]

describe('<ToDoList />', () => {
  beforeEach(() => {
    mount(
      <ToDoList
        toDoList={toDo}
        categories={['Work', 'Tests']}
        setToDoList={cy.stub().as('setToDoList')}
      />
    )
    cy.waitForReact()
  })

  it('Render correctly', () => {
    cy.react('ToDoList').get('section').should('have.length', 2)
  })

  it('Calls setToDoList onclick X-button or item', () => {
    cy.react('ToDoList').contains('Write tests').click()
    cy.react('ToDoList').get('button').first().click()
    cy.get('@setToDoList').should('have.been.calledTwice')
  })
})
