import React, { Component } from 'react'
import habits from '../habits'

export default class Statistics extends Component {
  render() {
    return this.props.habits.map(habit => {
      if (habit.count != null) {
        return <div> {habit.count}</div>
      }
    })
  }
}
