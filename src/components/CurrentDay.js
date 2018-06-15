import React, { Component } from 'react'
import DateSwitch from './DateSwitch'
import CounterButton from './CounterButton'
import ToggleButton from './ToggleButton'
import { css } from 'emotion'
import moment from 'moment'

class CurrentDay extends Component {
  state = {
    dayOffset: 0,
    history: {}
  }

  updateHistory(id, updateFunction) {
    const oldEntries = this.state.history[this.currentDate] || {}
    const oldValue = oldEntries[id]

    const updatedEntries = {
      ...oldEntries,
      [id]: updateFunction(oldValue)
    }
    this.setState({
      history: { ...this.state.history, [this.currentDate]: updatedEntries }
    })
  }

  get currentDate() {
    return moment()
      .add(this.state.dayOffset, 'days')
      .format('DD.MM.YYYY')
  }

  moveDayLeft = () => {
    this.setState(state => ({
      dayOffset: state.dayOffset - 1
    }))
  }

  moveDayRight = () => {
    this.setState({
      dayOffset: this.state.dayOffset + 1
    })
  }
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
          text={this.currentDate}
          onLeft={this.moveDayLeft}
          onRight={this.moveDayRight}
          isToday={this.state.dayOffset === 0}
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
