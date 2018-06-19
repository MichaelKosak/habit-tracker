import React, { Component } from 'react'

export default class Statistics extends Component {
  render() {
    const { history, habits } = this.props
    return Object.keys(history).map(dateKey => {
      const dateEntries = history[dateKey]
      return (
        <div key={dateKey}>
          <h3>{dateKey}</h3>
          <div>
            {Object.keys(dateEntries).map(habitId => {
              const habitEntry = dateEntries[habitId]
              const habit = habits.find(habit => habit.id === habitId)
              return (
                <div key={dateKey + habitId}>
                  {habit.text} {habit.type === 'counter' && `(${habitEntry})`}
                </div>
              )
            })}
          </div>
        </div>
      )
    })
  }
}
