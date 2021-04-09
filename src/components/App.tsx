import React, { useState } from 'react'
import ToDoList from './ToDoList'

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
