import React, { Component } from 'react'

export default class Statistics extends Component {
  render() {
    function backToDatum(datum) {
      const Punkt = '.'
      const pos = 2
      const teil1 = datum.substr(0, pos)
      const teil2 = datum.substr(pos, datum.length - pos)
      const teil3 = teil2.substr(0, pos)
      const teil4 = teil2.substr(pos, teil2.length - pos)
      return teil1 + Punkt + teil3 + Punkt + teil4
    }

    const { history, habits } = this.props

    let newArray = Object.keys(history).map(e =>
      e.replace('.', '').replace('.', '')
    )
    const newerArray = newArray.sort((a, b) => b - a).map(e => backToDatum(e))

    return newerArray.map(dateKey => {
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
