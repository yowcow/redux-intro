import expect from 'expect'
import deepFreeze from 'deep-freeze'
import todoManager from '../src/todo-manager.es6'

describe('toggleTodo()', () => {

  it('should toggle "completed" status', () => {
    const item = {
      id: 1,
      text: "Hoge",
      completed: false
    }

    deepFreeze(item)

    expect(todoManager.toggleTodo(item)).toEqual(
      {
        id: 1,
        text: "Hoge",
        completed: true
      }
    )
  })
})
