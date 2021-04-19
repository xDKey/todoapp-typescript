import { CategoryType } from './store/roorReducer'

export type toDoItem = {
  id: number
  label: string
  isDone: boolean
  category: string
}

export type State = {
  toDoList: toDoItem[]
}