import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { State, toDoItem } from '../type'
import {addItem} from '../store/actions'

const InputNewToDo = () => {
  const [inputValue, setInputValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')

  const categories = useSelector((state: State) => state.categories)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputValue === '' || categoryValue === '') return

    const newItem: toDoItem = {
      id: Date.now(),
      label: inputValue,
      isDone: false,
      category: categoryValue
    }

    dispatch(addItem(newItem))
    
    setInputValue('')
    setCategoryValue('')
  }

  const renderOptions = categories.map((item) => (
    <option value={item} key={item}>
      {item}
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
