import React, { useState } from 'react'
import styled from 'styled-components'
import { toDoItem } from '../type'
import { todoAdded } from '../store/roorReducer'
import { useAppDispatch } from '../hooks'
import { CategoryType } from '../store/store'

const InputNewToDo = () => {
  const [inputValue, setInputValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')

  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputValue === '' || categoryValue === '') return

    const newItem: toDoItem = {
      id: Date.now(),
      label: inputValue,
      isDone: false,
      category: categoryValue,
    }

    dispatch(todoAdded(newItem))

    setInputValue('')
    setCategoryValue('')
  }

  const renderOptions = Object.keys(CategoryType).map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ))

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Wrapper>
        <StyledInput
          type='text'
          value={inputValue}
          placeholder='Enter new task'
          onChange={({ target }) => setInputValue(target.value)}
        />
        <StyledSelect
          value={categoryValue}
          onChange={({ target }) => setCategoryValue(target.value)}
        >
          <option value=''>Choose Category</option>
          {renderOptions}
        </StyledSelect>
      </Wrapper>
      <StyledButton type='submit'>ADD</StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  width: 40%;
  box-shadow: -2px -2px 10px black;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledInput = styled.input`
  height: 40px;
  border: none;
  outline: none;
`
const StyledSelect = styled.select`
  height: 40px;
  border: none;
`

const StyledButton = styled.button`
  border: none;
  @media (max-width: 768px) {
    height: 40px;
  }
`

export default InputNewToDo
