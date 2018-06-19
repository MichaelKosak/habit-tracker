import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CurrentDayView from './containers/CurrentDayView'
import Statistics from './components/Statistics'
import habits from './habits'
import { css } from 'emotion'
import { Provider } from 'react-redux'
import { useLocalStorage } from './middleware'
import { createStore, applyMiddleware } from 'redux'

import { increaseHabitCount } from './actions'
import reducer from './reducer'
import initialState from './initialState'
import StatisticsView from './containers/StatisticsView'

const getInitialState = () => {
  const savedState = localStorage.getItem('state')
  if (savedState) {
    return JSON.parse(savedState)
  } else {
    return initialState
  }
}
const store = createStore(
  reducer,
  getInitialState(),
  applyMiddleware(useLocalStorage),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
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
            <Route exact path="/" component={CurrentDayView} />
            <Route path="/statistics" component={StatisticsView} />
            <div className={linksStyle}>
              <box className={boxStyle}>
                <Link to="/">thisday</Link>
              </box>
              <box className={boxStyle}>
                <Link to="/statistics">Statistics</Link>
              </box>
            </div>
          </section>
        </Provider>
      </Router>
    )
  }
}

export default App
