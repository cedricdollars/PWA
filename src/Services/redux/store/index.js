import { createStore } from 'redux'
import eventReducer from '../reducers/eventReducer'

const store = createStore(eventReducer)
export default store
