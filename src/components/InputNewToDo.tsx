import React, { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <select
        value={categoryValue}
        onChange={({ target }) => setCategoryValue(target.value)}
      >
        <option value=''>Choose Category</option>
        <option value='work'>Work</option>
        <option value='family'>Family</option>
        <option value='supplies'>Supplies</option>
      </select>
      <button type='submit'>Add</button>
    </form>
  )
}

export default InputNewToDo
