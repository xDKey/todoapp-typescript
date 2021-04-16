import React, { useEffect } from 'react'
import styled from 'styled-components'
import { State, toDoList } from 'type'
import ToDoList from './ToDoList'
import InputNewToDo from './InputNewToDo'
import { setLocalTodoList } from '../store/roorReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setLocalToDoList } from '../store/actions'

const App: React.FC = () => {
  const toDoListState: toDoList = useSelector((state: State) => state.toDoList)
  const dispatch = useDispatch()

  useEffect(() => {
    const localToDoList: toDoList = JSON.parse(
      localStorage.getItem('localToDoList')
    )
    if (localToDoList) dispatch(setLocalTodoList(localToDoList))
  }, [])

  useEffect(() => {
    localStorage.setItem('localToDoList', JSON.stringify(toDoListState))
  }, [toDoListState])

  return (
    <StyledMain>
      <h1>ToDo List</h1>
      <InputNewToDo />
      <ToDoList />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
`

export default App
