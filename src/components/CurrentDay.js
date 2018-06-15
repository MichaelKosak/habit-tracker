import React, { Component } from 'react'
import DateSwitch from './DateSwitch'
import CounterButton from './CounterButton'
import ToggleButton from './ToggleButton'
import { css } from 'emotion'

class CurrentDay extends Component {
  render() {
    const dateSwitchStyles = css`
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
    `
    return (
      <React.Fragment>
        <DateSwitch
          className={dateSwitchStyles}
          text={this.props.currentDate}
          onLeft={this.props.moveDayLeft}
          onRight={this.props.moveDayRight}
          isToday={this.props.dayOffset === 0}
        />
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
