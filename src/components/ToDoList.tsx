import React from 'react'
import { toDoList } from 'type'
import ToDoItem from './ToDoItem'

type toDoListProps = {
  toDoList: toDoList
  setToDoList: (newList: toDoList) => void
}

const ToDoList = ({ toDoList, setToDoList }: toDoListProps) => {
  const setToDoDone = (id: number): void => {
    const newtoDoList: toDoList = toDoList.map((item) => {
      if (item.id === id) return { id, label: item.label, isDone: !item.isDone }
      return item
    })
    setToDoList(newtoDoList)
  }

  const removeItem = (id: number): void => {
    const newtoDoList: toDoList = toDoList.filter(item => item.id !== id)
    setToDoList(newtoDoList)
  }

  return (
    <>
      {toDoList.map((item) => (
        <ToDoItem {...item} setToDoDone={setToDoDone} removeItem={removeItem}/>
      ))}
    </>
  )
}

export default ToDoList
