import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CurrentDay from './components/CurrentDay'
import Statistics from './components/Statistics'
import habits from './habits'
import { css } from 'emotion'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { increaseHabitCount } from './actions'
import reducer from './reducer'
import initialState from './initialState'

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  increaseHabitCount = id => {
    store.dispatch(increaseHabitCount(id))
  }

  render() {
    const state = store.getState()

    const boxStyle = css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 40px;
      margin: 10px;
      background: rgb(100, 123, 234);
      border: 1px solid black;
      border-radius: 10px;
    `
    const linksStyle = css`
      display: flex;
    `

    return (
      <Router>
        <section>
          <Route
            exact
            path="/"
            render={() => (
              <CurrentDay
                habits={state.habits}
                onIncrease={this.increaseHabitCount}
                history={state.history}
                dayOffset={state.dayOffset}
              />
            )}
          />
          <Route
            path="/Statistics"
            render={() => <Statistics habits={state.habits} />}
          />
          <div className={linksStyle}>
            <box className={boxStyle}>
              <Link to="/">thisday</Link>
            </box>
            <box className={boxStyle}>
              <Link to="/Statistics">Statistics</Link>
            </box>
          </div>
        </section>
      </Router>
    )
  }
}

export default App
