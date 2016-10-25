import { createStore } from 'redux'

const manageCount = (state = 0, action) => {
    switch (action.type) {
        case 'FIRED':
            return state + 1
        case 'RESET':
            return 0
        default:
            return state
    }
}

module.exports =  createStore(manageCount)
