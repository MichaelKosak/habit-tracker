import { connect } from 'react-redux'
import moment from 'moment'

import { updateHistory, moveDayLeft, moveDayRight } from '../actions'
import CurrentDay from '../components/CurrentDay'

export function getCurrentDate(state) {
  return moment()
    .add(state.dayOffset, 'days')
    .format('DD.MM.YYYY')
}

function getHabitsFromHistory(state) {
  const { history, habits } = state
  const currentDate = getCurrentDate(state)

  return habits.map(habit => {
    const currentDay = history[currentDate]

    if (!currentDay) {
      return habit
    }

    const entryForHabit = currentDay[habit.id]

    if (entryForHabit != null) {
      return {
        ...habit,
        value: entryForHabit
      }
    }

    return habit
  })
}

const mapStateToProps = state => ({
  habits: getHabitsFromHistory(state),
  history: state.history,
  dayOffset: state.dayOffset,
  currentDate: getCurrentDate(state)
})

const mapDispatchToProps = dispatch => ({
  onIncrease: id => dispatch(updateHistory(id)),
  onDecrease: id => dispatch(updateHistory(id)),
  onToggle: id => dispatch(updateHistory(id)),
  moveDayLeft: () => dispatch(moveDayLeft()),
  moveDayRight: () => dispatch(moveDayRight())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentDay)
