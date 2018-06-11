import React, { Component } from 'react'
import { css } from 'emotion'

export default class ToggleButton extends Component {
  render() {
    const buttonStyle = css`
      width: 400px;
      height: 40px;
      margin: 10px;
      font-size: 1.3em;
      display: block;
      background: #eee;
    `
    return (
      <button
        className={buttonStyle}
        onClick={this.props.wasClicked}
        checked={this.props.checked}
      >
        {this.props.text}
      </button>
    )
  }
}
