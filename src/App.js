import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CurrentDay from './components/CurrentDay'
import Statistics from './components/Statistics'
import habits from './habits'
import { css } from 'emotion'

class App extends Component {
  state = {
    habits: habits
  }

  increaseHabitCount(id) {
    const habitIndex = this.state.habits.findIndex(habit => habit.id === id)
    const habit = this.state.habits[habitIndex]
    const newHabit = { ...habit, count: habit.count + 1 }
    this.setState({
      habits: [
        ...this.state.habits.slice(0, habitIndex),
        newHabit,
        ...this.state.habits.slice(habitIndex + 1, this.state.habits.length)
      ]
    })
  }

  toggleButton() {
    return null
  }

  increaseHabitCount = id => {
    const habitIndex = this.state.habits.findIndex(habit => habit.id === id)
    const habit = this.state.habits[habitIndex]
    const newHabit = { ...habit, count: habit.count + 1 }
    this.setState({
      habits: [
        ...this.state.habits.slice(0, habitIndex),
        newHabit,
        ...this.state.habits.slice(habitIndex + 1, this.state.habits.length)
      ]
    })
  }
  render() {
    //const habits = [...this.state.habits]
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
                habits={this.state.habits}
                onIncrease={this.increaseHabitCount}
              />
            )}
          />
          <Route
            path="/Statistics"
            render={() => <Statistics habits={this.state.habits} />}
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
