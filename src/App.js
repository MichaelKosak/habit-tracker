import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CurrentDay from './components/CurrentDay'
import Statistics from './components/Statistics'
import habits from './habits'

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
          <div>
            <Link to="/">CurrentDay</Link>
            <Link to="/Statistics">Statistics</Link>
          </div>
        </section>
      </Router>
    )
  }
}

export default App
