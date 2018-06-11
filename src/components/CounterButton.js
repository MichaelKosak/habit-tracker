import React, { Component } from 'react'
import { css } from 'emotion'

export default class CounterButton extends Component {
  render() {
    const buttonStyle = css`
      display: flex;
      justify-content: space-between;
      width: 400px;
      height: 40px;
      margin: 10px;
      font-size: 1.3em;
      background: #eee;
    `
    return (
      <div className={buttonStyle}>
        <span>
          {this.props.count} {this.props.text}
        </span>
        <button onClick={this.props.onIncrease}> + </button>
      </div>
    )
  }
}
