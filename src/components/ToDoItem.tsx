import React from 'react'
import styled from 'styled-components'

const StyledToDoItem = styled.p<{ isDone: boolean }>`
  cursor: pointer;
  padding: 5px;
  box-shadow: -2px -2px 10px black;
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : '')};
`

type ToDoItemProps = {
  id: number
  label: string
  isDone: boolean
  setToDoDone: (id: number) => void
  removeItem: (id: number) => void
}

const ToDoItem = ({ id, label, isDone, setToDoDone, removeItem }: ToDoItemProps) => {
  return (
    <>
      <StyledToDoItem isDone={isDone} onClick={() => setToDoDone(id)}>
        {label}
      </StyledToDoItem>
      <button onClick={() => removeItem(id)}>Remove</button>
    </>
  )
}

export default ToDoItem
