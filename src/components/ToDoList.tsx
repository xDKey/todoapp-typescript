import React from 'react'
import styled from 'styled-components'
import { State } from 'type'
import { useAppSelector } from '../hooks'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const { categories, toDoList } = useAppSelector((state: State) => state)

  const sortedByCategory = (category: string) => {
    return toDoList
      .filter((item) => item.category === category)
      .map((item) => <ToDoItem key={item.id} {...item} />)
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
