import React, { useState } from 'react'

const InputNewToDo = ({
  addNewItem,
}: {
  addNewItem: (label: string) => void
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputValue === '') return

    addNewItem(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default InputNewToDo