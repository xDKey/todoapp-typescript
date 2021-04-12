import React from 'react'
import styled from 'styled-components'

type ToDoItemProps = {
  id: number
  label: string
  isDone: boolean
  setToDoDone: (id: number) => void
  removeItem: (id: number) => void
}

const ToDoItem = ({
  id,
  label,
  isDone,
  setToDoDone,
  removeItem,
}: ToDoItemProps) => {
  return (
    <StyledToDoItem>
      <StyledToDoLabel isDone={isDone} onClick={() => setToDoDone(id)}>
        {label}
      </StyledToDoLabel>
      <StyledButton onClick={() => removeItem(id)}>X</StyledButton>
    </StyledToDoItem>
  )
}

const StyledToDoLabel = styled.div<{ isDone: boolean }>`
  cursor: pointer;
  width: 100%;
  padding: 15px;
  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : '')};
`
const StyledButton = styled.button`
  border: none;
  background: white;
  width: 40px;
`

const StyledToDoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 40%;

  box-shadow: -2px -2px 10px black;
`

export default ToDoItem
