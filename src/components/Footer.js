import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { NavLink } from 'react-router-dom'

const boxStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
const linkContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 20px;
    bottom: 100%;
    background: linear-gradient(transparent, aliceblue);
  }

  &.active {
    background: blue;
  }
`
const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  padding: 20px;
  &.active {
    color: white;
    background: #4b75fa;
  }
`

export default class Footer extends Component {
  render() {
    return (
      <div className={linkContainerStyle}>
        <box className={boxStyle}>
          <StyledLink activeClassName="active" exact to="/">
            Current Day
          </StyledLink>
        </box>
        <box className={boxStyle}>
          <StyledLink activeClassName="active" to="/statistics">
            Statistics
          </StyledLink>
        </box>
      </div>
    )
  }
}
