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

const CountManager = ({
    value,
    onReset
}) => (
    <div>
      <div>Counted count is: {value}</div>
      <button onClick={onReset}>Reset</button>
    </div>
)

const counterStore = require('./src/counter.es6')
const countManagerStore = require('./src/count-manager.es6')

const render = () => {
    ReactDOM.render(
        (
            <div>
              <Counter
                value={counterStore.getState()}
                onIncrement={
                    () => {
                        counterStore.dispatch({ type: 'INCREMENT' })
                        countManagerStore.dispatch({ type: 'FIRED' })
                    }
                }
                onDecrement={
                    () => {
                        counterStore.dispatch({ type: 'DECREMENT' })
                        countManagerStore.dispatch({ type: 'FIRED' })
                    }
                }
              />
              <CountManager
                value={countManagerStore.getState()}
                onReset={
                    () => countManagerStore.dispatch({ type: 'RESET' })
                }
              />
            </div>
        ),
        document.getElementById('main')
    )
}

counterStore.subscribe(render)
countManagerStore.subscribe(render)

render()
