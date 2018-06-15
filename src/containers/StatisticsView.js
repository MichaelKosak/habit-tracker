import { connect } from 'react-redux'
import Statistics from '../components/Statistics'

const mapStateToProps = state => ({
  habits: state.habits
})

export default connect(mapStateToProps)(Statistics)
