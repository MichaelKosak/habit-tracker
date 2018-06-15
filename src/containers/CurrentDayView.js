import { connect } from 'react-redux'
import { increaseHabitCount } from '../actions'
import CurrentDay from '../components/CurrentDay'

const mapStateToProps = state => ({
  habits: state.habits,
  history: state.history,
  dayOffset: state.dayOffset
})

const mapDispatchToProps = dispatch => ({
  onIncrease: id => dispatch(increaseHabitCount(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentDay)
