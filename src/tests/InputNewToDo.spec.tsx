import { mount, unmount } from '@cypress/react'
import React from 'react'
import InputNewToDo from '../components/InputNewToDo'

const App = () => (
  <InputNewToDo
    addNewItem={cy.stub().as('addNewItem')}
    categories={['test', 'test2']}
  />
)

describe('<InoutNewToDo />', () => {
  beforeEach(() => {
    mount(<App />)
    cy.waitForReact()
  })
  after(() => unmount())

  it('Render correctly', () => {
    cy.react('InputNewToDo').contains('Choose Category')
  })

  it('Correct take categories', () => {
    cy.react('InputNewToDo')
      .get('select')
      .should('have.value', '')
      .select('test')
      .should('have.value', 'test')
  })

  it('Doesnt call addNewItem if no input is filled or any parameter is not selected', () => {
    cy.react('InputNewToDo').get('input').type('check{enter}')
    cy.get('@addNewItem').should('not.have.been.called')

    cy.react('InputNewToDo').get('select').select('test')
    cy.react('InputNewToDo').get('input').clear().type('{enter}')
    cy.get('@addNewItem').should('not.have.been.called')
  })

  it('Calls addNewItem if input filled and some option selected', () => {
    cy.react('InputNewToDo').get('select').select('test')
    cy.react('InputNewToDo').get('input').type('check{enter}')
    cy.get('@addNewItem').should('have.been.called')
  })
})
