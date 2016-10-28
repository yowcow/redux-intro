import expect from 'expect'
import deepFreeze from 'deep-freeze'
import counterManager from '../src/counter-manager.es6'

describe('addCounter()', () => {

    it('should return a new list with 1 extra item', () => {
        const list = []

        deepFreeze(list)

        expect(counterManager.addCounter(list)).toEqual([0])
    })

    it('should append extra item', () => {
        const list = [1, 2, 3]

        deepFreeze(list)

        expect(counterManager.addCounter(list)).toEqual([1, 2, 3, 0])
    })
})

describe('removeCounter()', () => {

    it('should return a new list with specified index removed', () => {
        const list = [1, 2, 3]

        deepFreeze(list)

        expect(counterManager.removeCounter(list, 1)).toEqual([1, 3])
    })
})


describe('incrementCounter()', () => {

    it('should increment count at index', () => {
        const list = [1, 2, 3]

        deepFreeze(list)

        expect(counterManager.incrementCounter(list, 1)).toEqual([1, 3, 3])
    })
})

describe('decrementCounter()', () => {

    it('should decrement count at index', () => {
        const list = [1, 2, 3]

        deepFreeze(list)

        expect(counterManager.decrementCounter(list, 1)).toEqual([1, 1, 3])
    })
})
