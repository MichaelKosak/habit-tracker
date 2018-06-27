import React, { Component } from 'react'
import { css } from 'emotion'

export default class ToggleButton extends Component {
  render() {
    const buttonStyle = css`
      background: white;
      font-size: 1.3em;
      font-weight: 700;
      border: 1px solid black;
      border-radius: 5px;
      color: #412551;
      width: 95%;
      height: 70px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
    `

    const blueButtonStyle = css`
      background: #9aff54;
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
