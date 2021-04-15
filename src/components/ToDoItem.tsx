import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { doneItem, removeItem } from '../store/actions'

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
  const dispatch = useDispatch()

  return (
    <StyledToDoItem>
      <StyledToDoLabel isDone={isDone} onClick={() => dispatch(doneItem(id))}>
        {label}
      </StyledToDoLabel>
      <StyledButton onClick={() => dispatch(removeItem(id))}>X</StyledButton>
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
