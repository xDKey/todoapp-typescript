import React from 'react'
import styled from 'styled-components'
import { toDoList } from 'type'
import ToDoItem from './ToDoItem'

type toDoListProps = {
  toDoList: toDoList
  categories: Array<string>
  setToDoList: (newList: toDoList) => void
}

const ToDoList = ({ toDoList, categories, setToDoList }: toDoListProps) => {
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

  return (
    <>
      {categories.map((item) => {
        if (sortedByCategory(item).length !== 0) {
          return (
            <StyledCategory key={item}>
              <h1>{item}</h1>
              {sortedByCategory(item)}
            </StyledCategory>
          )
        }
      })}
    </>
  )
}

const StyledCategory = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  border-bottom: 2px solid gray;
`
export default ToDoList
