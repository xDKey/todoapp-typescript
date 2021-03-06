import { State, toDoItem } from '../type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initState: State = {
  toDoList: [
    {
      id: 1,
      label: 'Write first task',
      isDone: false,
      category: 'Work',
    },
  ],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: initState,
  reducers: {
    setLocalTodoList: (state, action: PayloadAction<toDoItem[]>) => {
      const localToDoList = action.payload
      state.toDoList = localToDoList
    },
    todoAdded: (state, action: PayloadAction<toDoItem>) => {
      const newTodo = action.payload
      state.toDoList = [...state.toDoList, newTodo]
    },
    todoToggled: (state, action: PayloadAction<number>) => {
      const todoId = action.payload

      state.toDoList.forEach((todo) => {
        if (todoId === todo.id) todo.isDone = !todo.isDone
      })
    },
    todoRemoved: (state, action: PayloadAction<number>) => {
      const todoId = action.payload
      const newToDoList: toDoItem[] = state.toDoList.filter(
        (todo) => todo.id !== todoId
      )
      state.toDoList = newToDoList
    },
  },
})

export const {
  setLocalTodoList,
  todoAdded,
  todoToggled,
  todoRemoved,
} = todosSlice.actions

export default todosSlice.reducer
