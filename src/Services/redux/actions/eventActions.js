import { ADD_EVENT } from '../constants/event-types'
import { DELETE_EVENT } from '../constants/event-types'

export const addEvent = event => ({
  type: ADD_EVENT,
  payload: event
})

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  payload: id
})
