import { createStore } from 'redux'

//const createStore = (reducer) => {
//    let state
//    let listeners = []
//
//    const getState = () => state
//
//    const dispatch = (action) => {
//        state = reducer(state, action)
//        listeners.forEach(listener => listener())
//    }
//
//    const subscribe = (listener) => {
//        listeners.push(listener)
//        return () => {
//            listeners = listeners.filter(l => l !== listener)
//        }
//    }
//
//    dispatch({})
//
//    return { getState, dispatch, subscribe }
//}

const count = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

module.exports = createStore(count)
