const React = require('react')
const ReactDOM = require('react-dom')

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{ value }</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

const store = require('./src/counter.es6')

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        document.getElementById('main')
    )
}

store.subscribe(render)

render()
