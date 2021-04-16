export type toDoItem = {
  id: number
  label: string
  isDone: boolean
  category: string
}

export type toDoList = toDo[]

export type State = {
  categories: Array<string>
  toDoList: toDoList
}