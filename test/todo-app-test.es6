import expect from 'expect'
import deepFreeze from 'deep-freeze'
import todoApp from '../src/todo-app.es6'

describe('todoApp', () => {

  it('adds an item', () => {
    const stateBefore = {
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    }
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Hoge'
    }
    const stateAfter = {
      todos: [
        {
          id: 0,
          text: 'Hoge',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    }

    deepFreeze(action)

    expect(todoApp.getState()).toEqual(stateBefore)

    todoApp.dispatch(action)

    expect(todoApp.getState()).toEqual(stateAfter)
  })

  it('toggles item completed status', () => {
    const stateBefore = {
      todos: [
        {
          id: 0,
          text: 'Hoge',
          completed: false
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    }
    const action = {
      type: 'TOGGLE_TODO',
      id: 0
    }
    const stateAfter = {
      todos: [
        {
          id: 0,
          text: 'Hoge',
          completed: true
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    }

    deepFreeze(action)

    expect(todoApp.getState()).toEqual(stateBefore)

    todoApp.dispatch(action)

    expect(todoApp.getState()).toEqual(stateAfter)
  })

  it('removes an item', () => {
    const stateBefore = {
      todos: [
        {
          id: 0,
          text: 'Hoge',
          completed: true
        }
      ],
      visibilityFilter: 'SHOW_ALL'
    }
    const action = {
      type: 'REMOVE_TODO',
      id: 0
    }
    const stateAfter = {
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    }

    deepFreeze(action)

    expect(todoApp.getState()).toEqual(stateBefore)

    todoApp.dispatch(action)

    expect(todoApp.getState()).toEqual(stateAfter)
  })
})
