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
      category: 'work'
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
    <>
      <ToDoList toDoList={toDoListState} setToDoList={setToDoListState} />
      <InputNewToDo addNewItem={addNewItem} />
    </>
  )
}

export default App
