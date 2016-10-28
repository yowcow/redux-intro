import expect from 'expect'
import todoStore from '../src/todo-store.es6'

describe('todoStore', () => {

  it('adds an item', () => {
    const stateBefore = []
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Hoge'
    }
    const stateAfter = [
      {
        id: 0,
        text: 'Hoge',
        completed: false
      }
    ]

    expect(todoStore.getState()).toEqual(stateBefore)

    todoStore.dispatch({
      type: 'ADD_TODO',
      id: 0,
      text: 'Hoge'
    })

    expect(todoStore.getState()).toEqual(stateAfter)
  })

  it('toggles item completed status', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Hoge',
        completed: false
      }
    ]
    const action = {
      type: 'TOGGLE_TODO',
      id: 0
    }
    const stateAfter = [
      {
        id: 0,
        text: 'Hoge',
        completed: true
      }
    ]

    expect(todoStore.getState()).toEqual(stateBefore)

    todoStore.dispatch({
      type: 'TOGGLE_TODO',
      id: 0
    })

    expect(todoStore.getState()).toEqual(stateAfter)
  })

  it('removes an item', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Hoge',
        completed: true
      }
    ]
    const action = {
      type: 'REMOVE_TODO',
      id: 0
    }
    const stateAfter = []

    expect(todoStore.getState()).toEqual(stateBefore)

    todoStore.dispatch({
      type: 'REMOVE_TODO',
      id: 0
    })

    expect(todoStore.getState()).toEqual(stateAfter)
  })
})
