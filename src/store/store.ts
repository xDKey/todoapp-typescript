import rootReducer from './roorReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: rootReducer,
})

export enum CategoryType {
  Work = 'Work',
  Family = 'Family',
  Supplies = 'Supplies',
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store