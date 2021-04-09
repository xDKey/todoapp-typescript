import React, { useState } from 'react'
import { toDoItem, toDoList } from 'type'
import ToDoList from './ToDoList'
import InputNewToDo from './InputNewToDo'

const App: React.FC = () => {
  const defaultList: toDoList = [
    {
      id: 1,
      label: 'Drink tea',
      isDone: false,
    },
    {
      id: 2,
      label: 'Walk',
      isDone: true,
    },
  ]
  const [toDoListState, setToDoListState] = useState(defaultList)

  const addNewItem = (label: string): void => {
    const newItem: toDoItem = {
      id: toDoListState.length + 1,
      label,
      isDone: false,
    }

    setToDoListState([...toDoListState, newItem])
  }

  return (
    <>
      <ToDoList toDoList={toDoListState} setToDoList={setToDoListState} />
      <InputNewToDo addNewItem={addNewItem} />
    </>
  )
}

export default App
