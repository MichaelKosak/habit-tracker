import React, { Component } from 'react'
import ToggleButton from './components/ToggleButton'
import CounterButton from './components/CounterButton'
import habits from './habits'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habits: habits
    }
  }
  toggleButton() {
    return null
  }
  decreaseHabitCount(id) {
    return null
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
  render() {
    //const habits = [...this.state.habits]

    return (
      <div>
        {this.state.habits.map(habit => {
          if (habit.checked != null) {
            return (
              <ToggleButton
                text={habit.text}
                key={habit.id}
                checked={habit.checked}
              />
            )
          } else if (habit.count != null) {
            return (
              <CounterButton
                text={habit.text}
                key={habit.id}
                count={habit.count}
                onIncrease={e => this.increaseHabitCount(habit.id)}
                onDecrease={e => this.decreaseHabitCount(habit.id)}
              />
            )
          }
        })}
      </div>
    )
  }
}

export default App
