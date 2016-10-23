const expect = require('expect')

const store = require('../src/counter.es6')

describe('store', () => {

    it('should return initial state = 0', () => {
        expect(
            store.getState()
        ).toEqual(0)
    })

    it('should increment with dispatch()', () => {
        store.dispatch({ type: 'INCREMENT' })

        expect(
            store.getState()
        ).toEqual(1)
    })

    it('should increment with dispatch()', () => {
        store.dispatch({ type: 'INCREMENT' })

        expect(
            store.getState()
        ).toEqual(2)
    })

    it('should decrement with dispatch()', () => {
        store.dispatch({ type: 'DECREMENT' })

        expect(
            store.getState()
        ).toEqual(1)
    })
})
