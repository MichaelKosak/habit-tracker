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
      background: grey;
    `

    const blueButtonStyle = css`
      background: blue;
    `

    return (
      <button
        className={`${buttonStyle} ${this.props.checked && blueButtonStyle}`}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    )
  }
}
