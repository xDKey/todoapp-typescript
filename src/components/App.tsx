import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { toDoItem, toDoList } from 'type'
import ToDoList from './ToDoList'
import InputNewToDo from './InputNewToDo'

const App: React.FC = () => {
  const defaultList: toDoList = [
    {
      id: 1,
      label: 'Write first task',
      isDone: false,
      category: 'work',
    },
  ]
  const localToDoList = JSON.parse(localStorage.getItem('localToDoList'))

  const [toDoListState, setToDoListState] = useState(localToDoList || defaultList)

  useEffect(() => {
    localStorage.setItem('localToDoList', JSON.stringify(toDoListState))
  }, [toDoListState])

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
      <h1>ToDo List</h1>
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
