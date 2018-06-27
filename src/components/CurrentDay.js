import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

import DateSwitch from './DateSwitch'
import CounterButton from './CounterButton'
import ToggleButton from './ToggleButton'
import Footer from './Footer'

class CurrentDay extends Component {
  render() {
    const dateSwitchStyles = css`
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
    `
    const Liste = css`
      display: flex;
      justify-content: center;
    `

    const Scroller = styled('div')`
      overflow-y: scroll;
    `
    const Grid = styled('section')`
      display: grid;
      grid-template-rows: 91px 40px auto 91px;
      height: 100vh;
    `

    const Header = styled('header')`
      background-image: url(/static/media/header.0575ac55.svg);
      background-size: cover;
    `

    return (
      <Grid>
        <Header />
        <DateSwitch
          className={dateSwitchStyles}
          text={this.props.currentDate}
          onLeft={this.props.moveDayLeft}
          onRight={this.props.moveDayRight}
          isToday={this.props.dayOffset === 0}
        />
        <Scroller>
          {this.props.habits.map(habit => {
            if (habit.type === 'toggle') {
              return (
                <div className={Liste}>
                  <ToggleButton
                    text={habit.text}
                    key={habit.id}
                    onClick={() => this.props.onToggle(habit.id)}
                    checked={habit.value}
                  />
                </div>
              )
            } else if (habit.type === 'counter') {
              return (
                <div className={Liste}>
                  <CounterButton
                    text={habit.text}
                    key={habit.id}
                    count={habit.value}
                    onIncrease={() => this.props.onIncrease(habit.id)}
                    onDecrease={() => this.props.onDecrease(habit.id)}
                  />
                </div>
              )
            }
          })}
        </Scroller>
        <Footer />
      </Grid>
    )
  }
}
export default CurrentDay
