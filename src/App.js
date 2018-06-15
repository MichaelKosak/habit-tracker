import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CurrentDayView from './containers/CurrentDayView'
import Statistics from './components/Statistics'
import habits from './habits'
import { css } from 'emotion'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { increaseHabitCount } from './actions'
import reducer from './reducer'
import initialState from './initialState'
import StatisticsView from './containers/StatisticsView'

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
        <Provider store={store}>
          <section>
            <Route exact path="/" render={() => <CurrentDayView />} />
            <Route path="/Statistics" render={() => <StatisticsView />} />
            <div className={linksStyle}>
              <box className={boxStyle}>
                <Link to="/">thisday</Link>
              </box>
              <box className={boxStyle}>
                <Link to="/Statistics">Statistics</Link>
              </box>
            </div>
          </section>
        </Provider>
      </Router>
    )
  }
}

export default App
