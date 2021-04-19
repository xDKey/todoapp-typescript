import React from 'react'
import styled from 'styled-components'
import { State } from 'type'
import { useAppSelector } from '../hooks'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const { categories, toDoList } = useAppSelector((state: State) => state)

  const sortedByCategory = (category: string) => {
    const filteredListByCategory = toDoList.filter(
      (todo) => category === todo.category
    )
    return filteredListByCategory.length !== 0 ? filteredListByCategory : false
  }

  const renderedList = Object.keys(categories).map((category) => {
    const filtered = sortedByCategory(category)
    if (filtered)
      return (
        <StyledCategory key={category}>
          <h1>{category}</h1>
          { filtered.map((todo) => <ToDoItem key={todo.id} {...todo} /> ) }
        </StyledCategory>
      )
  })

  return (
    <>
      {renderedList}
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
