import { CategoryType } from './store/roorReducer'

export type toDoItem = {
  id: number
  label: string
  isDone: boolean
  category: string
}

export type toDoList = toDoItem[]

export type State = {
  categories: ReturnType<typeof CategoryType>
  toDoList: toDoList
}