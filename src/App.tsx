import React, { useState } from 'react'
import ToDoList from './components/ToDoList'

type toDoItem = {
  id: number
  label: string
  isDone: boolean
}

type toDoList = Array<toDoItem>

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

  return (
    <>
      <ToDoList toDoList={toDoListState} setToDoList={setToDoListState} />
    </>
  )
}

export default App
