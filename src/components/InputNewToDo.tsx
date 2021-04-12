import React, { useState } from 'react'
import styled from 'styled-components'

const InputNewToDo = ({
  addNewItem,
}: {
  addNewItem: (label: string, category: string) => void
}) => {
  const [inputValue, setInputValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputValue === '' || categoryValue === '') return

    addNewItem(inputValue, categoryValue)
    setInputValue('')
    setCategoryValue('')
  }

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
          <option value='work'>Work</option>
          <option value='family'>Family</option>
          <option value='supplies'>Supplies</option>
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
`

export default InputNewToDo
