import React, { useState } from 'react'
import styled from 'styled-components'
import { toDoItem, toDoList } from 'type'
import ToDoList from './ToDoList'
import InputNewToDo from './InputNewToDo'

const App: React.FC = () => {
  const defaultList: toDoList = [
    {
      id: 1,
      label: 'Drink tea',
      isDone: false,
      category: 'work',
    },
  ]
  const [toDoListState, setToDoListState] = useState(defaultList)

  const addNewItem = (label: string, category: string): void => {
    const newItem: toDoItem = {
      id: Date.now(),
      label,
      category,
      isDone: false,
    }

    setToDoListState([...toDoListState, newItem])
  }
  return (
    <StyledMain>
      <InputNewToDo addNewItem={addNewItem} />
      <ToDoList toDoList={toDoListState} setToDoList={setToDoListState} />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
`

export default App
