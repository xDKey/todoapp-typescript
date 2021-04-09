import React from 'react'
import ToDoItem from './ToDoItem'

type toDoItem = {
  id: number
  label: string
  isDone: boolean
}

type toDoListProps = {
  toDoList: Array<toDoItem>
  setToDoList: (newList: Array<toDoItem>) => void
}

const ToDoList = ({ toDoList, setToDoList }: toDoListProps) => {
  const setToDoDone = (id: number): void => {
    const newtoDoList: Array<toDoItem> = toDoList.map((item) => {
      if (item.id === id) return { id, label: item.label, isDone: !item.isDone }
      return item
    })
    setToDoList(newtoDoList)
  }

  return (
    <>
      {toDoList.map((item) => (
        <ToDoItem {...item} setToDoDone={setToDoDone} />
      ))}
    </>
  )
}

export default ToDoList
