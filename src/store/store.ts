import { createStore, Store } from 'redux'
import { Action, State } from '../type'
import rootReducer from './roorReducer'

const store: Store<State, Action> = createStore(rootReducer)

export default store