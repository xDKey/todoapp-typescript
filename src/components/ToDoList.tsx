import React from 'react'
import styled from 'styled-components'
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

  return (
    <>
      {sortedByCategory('work').length !== 0 && (
        <StyledCategory>
          <h1>Work</h1>
          {sortedByCategory('work')}
        </StyledCategory>
      )}
      {sortedByCategory('family').length !== 0 && (
        <StyledCategory>
          <h1>Family</h1>
          {sortedByCategory('family')}
        </StyledCategory>
      )}
      {sortedByCategory('supplies').length !== 0 && (
        <StyledCategory>
          <h1>Supplies</h1>
          {sortedByCategory('supplies')}
        </StyledCategory>
      )}
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
