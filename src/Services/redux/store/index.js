import { createStore } from 'redux'
import eventReducer from '../reducers/eventReducer'

const store = createStore(
  eventReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
