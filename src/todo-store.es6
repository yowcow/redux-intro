import { createStore } from 'redux'
import todoManager from './todo-manager.es6'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      return Object.assign(
        {},
        state,
        { completed: !state.completed }
      )
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => {
        return t.id !== action.id
          ? t
          : todo(t, action)
      })
    case 'REMOVE_TODO':
      return state.filter(t => {
        return t.id != action.id
      })
    default:
      return state
  }
}

module.exports = createStore(todos)
