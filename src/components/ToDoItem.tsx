import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../hooks'
import { todoRemoved, todoToggled } from '../store/roorReducer'


type ToDoItemProps = {
  id: number
  label: string
  isDone: boolean
}

const ToDoItem = ({
  id,
  label,
  isDone,
}: ToDoItemProps) => {
  const dispatch = useAppDispatch()

  return (
    <StyledToDoItem>
      <StyledToDoLabel isDone={isDone} onClick={() => dispatch(todoToggled(id))}>
        {label}
      </StyledToDoLabel>
      <StyledButton onClick={() => dispatch(todoRemoved(id))}>X</StyledButton>
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

  @media (max-width: 768px) {
    width: 100%;
  }
`

export default ToDoItem
