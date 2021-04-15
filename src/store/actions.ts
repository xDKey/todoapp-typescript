import { Action, toDoItem, toDoList } from '../type'

export const addItem = (payload: toDoItem): Action => ({
  type: 'ADD_ITEM',
  payload,
})

export const removeItem = (id: number): Action => ({
  type: 'REMOVE_ITEM',
  payload: { id },
})

export const doneItem = (id: number): Action => ({
  type: 'DONE_ITEM',
  payload: { id },
})

export const setLocalToDoList = (payload: toDoList): Action => ({
  type: 'SET_LOCAL_TODOLIST',
  payload,
})
