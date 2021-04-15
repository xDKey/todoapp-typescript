import { Action, State, toDoList } from '../type'

const initState: State = {
  categories: ['Work', 'Family', 'Supplies'],
  toDoList: [
    {
      id: 1,
      label: 'Write first task',
      isDone: false,
      category: 'Work',
    },
  ],
}

const rootReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case 'SET_LOCAL_TODOLIST': {
      return {...state, toDoList: action.payload}
    }
    case 'DONE_ITEM': {
      const newToDoList: toDoList = state.toDoList.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, isDone: !item.isDone }
        return item
      })

      return { ...state, toDoList: newToDoList }
    }
    case 'REMOVE_ITEM': {
      const newToDoList: toDoList = state.toDoList.filter(
        (item) => item.id !== action.payload.id
      )

      return { ...state, toDoList: newToDoList }
    }
    case 'ADD_ITEM': {
      return {...state, toDoList: [...state.toDoList, action.payload]}
    }
    default:
      return state
  }
}

export default rootReducer
