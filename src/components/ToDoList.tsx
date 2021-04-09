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
      if (item.id === id)
        return {
          id,
          label: item.label,
          category: item.category,
          isDone: !item.isDone,
        }
      return item
    })
    setToDoList(newtoDoList)
  }

  const removeItem = (id: number): void => {
    const newtoDoList: toDoList = toDoList.filter((item) => item.id !== id)
    setToDoList(newtoDoList)
  }

  const sortedByCategory = (category: string) => {
    return toDoList
      .filter((item) => item.category === category)
      .map((item) => (
        <ToDoItem
          key={item.id}
          {...item}
          setToDoDone={setToDoDone}
          removeItem={removeItem}
        />
      ))
  }
  console.log(sortedByCategory('family'))

  return (
    <>
      {sortedByCategory('work').length !== 0 && (
        <section>
          <h4>Work</h4>
          {sortedByCategory('work')}
        </section>
      )}
      {sortedByCategory('family').length !== 0 && (
        <section>
          <h4>Family</h4>
          {sortedByCategory('family')}
        </section>
      )}
      {sortedByCategory('supplies').length !== 0 && (
        <section>
          <h4>Supplies</h4>
          {sortedByCategory('supplies')}
        </section>
      )}
    </>
  )
}

export default ToDoList
