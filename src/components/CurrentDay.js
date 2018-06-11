import React, { Component } from 'react'

import CounterButton from './CounterButton'
import ToggleButton from './ToggleButton'

class CurrentDay extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.habits.map(habit => {
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
                  onIncrease={() => this.props.onIncrease(habit.id)}
                />
              )
            }
          })}
        </div>
      </React.Fragment>
    )
  }
}
export default CurrentDay
