import { connect } from 'react-redux'
import moment from 'moment'

import { increaseHabitCount, moveDayLeft, moveDayRight } from '../actions'
import CurrentDay from '../components/CurrentDay'

const mapStateToProps = state => ({
  habits: state.habits,
  history: state.history,
  dayOffset: state.dayOffset,
  currentDate: moment()
    .add(state.dayOffset, 'days')
    .format('DD.MM.YYYY')
})

const mapDispatchToProps = dispatch => ({
  onIncrease: id => dispatch(increaseHabitCount(id)),
  moveDayLeft: () => dispatch(moveDayLeft()),
  moveDayRight: () => dispatch(moveDayRight())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentDay)
