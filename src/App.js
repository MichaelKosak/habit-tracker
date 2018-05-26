import React, { Component } from 'react'
import ToggleButton from './components/ToggleButton'
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
      <section>
        {this.state.habits.map(habit => (
          <ToggleButton text={habit.text} key={habit.id} />
        ))}
      </section>
    )
  }
}

export default App
