import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import Footer from './Footer'
export default class Statistics extends Component {
  render() {
    function backToDatum(datum) {
      const Punkt = '.'
      const pos = 2
      const teil1 = datum.substr(0, pos)
      const teil2 = datum.substr(pos, datum.length - pos)
      const teil3 = teil2.substr(0, pos)
      const teil4 = teil2.substr(pos, teil2.length - pos)
      return teil1 + Punkt + teil3 + Punkt + teil4
    }

    const { history, habits } = this.props

    let newArray = Object.keys(history).map(e =>
      e.replace('.', '').replace('.', '')
    )
    const newerArray = newArray.sort((a, b) => b - a).map(e => backToDatum(e))
    const Scroller = styled('div')`
      overflow-y: scroll;
      padding: 20px;
    `

    const statisticsListItem = css`
      padding: 10px 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      background: white;
    `
    const Grid = styled('section')`
      display: grid;
      grid-template-rows: 91px auto 91px;
      height: 100vh;
    `

    const Header = styled('header')`
      background-image: url(/static/media/header.0575ac55.svg);
      background-size: cover;
    `

    const List = styled('ul')`
      list-style: none;
      padding: 0;
    `

    const ListItem = styled('li')`
      &:before {
        content: '→ ';
        color: hotpink;
      }
    `
    return (
      <Grid>
        <Header />
        <Scroller>
          {newerArray.map(dateKey => {
            const dateEntries = history[dateKey]

            return (
              <div className={statisticsListItem} key={dateKey}>
                <h3>{dateKey}</h3>
                <div>
                  {Object.keys(dateEntries).map(habitId => {
                    const habitEntry = dateEntries[habitId]
                    const habit = habits.find(habit => habit.id === habitId)

                    return (
                      <List>
                        <ListItem key={dateKey + habitId}>
                          {habit.type === 'counter' && `${habitEntry}`}{' '}
                          {habit.text}
                        </ListItem>
                      </List>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </Scroller>
        <Footer />
      </Grid>
    )
  }
}
