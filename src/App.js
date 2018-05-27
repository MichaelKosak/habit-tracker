import React, { Component } from 'react'
import ToggleButton from './components/ToggleButton'
import CounterButton from './components/CounterButton'
import './App.css'
import habits from './habits'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habits: habits
    }
  }

  render() {
    //const habits = [...this.state.habits]

    return (
      <div>
        {this.state.habits.map(habit => {
          if (habit.checked != null) {
            return <ToggleButton text={habit.text} key={habit.id} />
          } else if (habit.count != null) {
            return <CounterButton text={habit.text} key={habit.id} />
          }
        })}
      </div>
    )
  }
}

export default App
