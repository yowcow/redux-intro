import { createStore } from 'redux'
import todoManager from './todo-manager.es6'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return [
        ...state.slice(0, action.id),
        todoManager.toggleTodo(state[action.id]),
        ...state.slice(action.id + 1)
      ]
    case 'REMOVE_TODO':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    default:
      return state
  }
}

module.exports = createStore(todos)
