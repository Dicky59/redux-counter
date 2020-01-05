import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)

const App = () => {
  return (
    <div className="App">
      <h2>The Counter App</h2>
      
      <div className="Display">
        {store.getState()}
      </div>
      <button 
        onClick={e => store.dispatch({ type: 'INCREMENT' })}
      >
        +
      </button>
      <button 
        onClick={e => store.dispatch({ type: 'RESET' })}
      >
        &#x21ba;
      </button>
      <button
        onClick={e => store.dispatch({ type: 'DECREMENT' })}
      >
        -
      </button>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)

export default App;
