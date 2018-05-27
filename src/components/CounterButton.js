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
      <button className={buttonStyle} onClick={this.props.wasClicked}>
        <box> - </box>
        <span>{this.props.text}</span>
        <box> + </box>
      </button>
    )
  }
}
