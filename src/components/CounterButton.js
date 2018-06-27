import React, { Component } from 'react'
import { css } from 'emotion'

export default class CounterButton extends Component {
  render() {
    const counterButtonStyle = css`
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
    const smallButtonLeft = css`
      background: white;
      color: red;
      border: 1px solid;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `
    const smallButtonRight = css`
      background: rgba(0, 200, 100, 1);
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `
    const minusSize = css`
      border: 2px solid red;
      width: 10px;
    `
    const plusSize = css`
      color: white;
      font-weight: 900;
    `
    const TetxStyle = css`
      display: flex;
      justify-content: space-around;
      align-items: center;
    `
    return (
      <div className={counterButtonStyle}>
        <box className={smallButtonLeft} onClick={this.props.onDecrease}>
          <div className={minusSize} />
        </box>
        <span className={TetxStyle}>
          {this.props.count} {this.props.text}
        </span>
        <box className={smallButtonRight} onClick={this.props.onIncrease}>
          <div className={plusSize}> + </div>
        </box>
      </div>
    )
  }
}
