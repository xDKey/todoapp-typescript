export type toDoItem = {
  id: number
  label: string
  isDone: boolean
  category: string
}

export type toDoList = Array<toDoItem>

export type Action = {
  type: string
  payload?: any
}

export type State = {
  categories: Array<string>
  toDoList: toDoList
}

export type Dispatch = (action: Action) => Action