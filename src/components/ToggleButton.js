import React, { Component } from 'react'
import { css } from 'emotion'

export default class ToggleButton extends Component {
  render() {
    const buttonStyle = css`
      width: 300px;
      height: 40px;
      margin: 10px;
      font-size: 1.3em;
      display: block;
      background: #eee;
    `
    return <button className={buttonStyle}> {this.props.text}</button>
  }
}
