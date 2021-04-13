import React from 'react'
import { mount } from '@cypress/react'
import App from '../components/App'

it('<App />', () => {
  mount(<App />)
  cy.contains('ToDo List')
})