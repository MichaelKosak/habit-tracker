import { moveDayLeft } from './actions'
import Actions from './actions'
import { getCurrentDate } from './containers/CurrentDayView'

export default (state, action) => {
  switch (action.type) {
    case Actions.INCREASE_HABIT_COUNT:
      const habitIndex = state.habits.findIndex(
        habit => habit.id === action.payload
      )
      const habit = state.habits[habitIndex]
      const newHabit = { ...habit, count: habit.count + 1 }

      return {
        ...state,
        habits: [
          ...state.habits.slice(0, habitIndex),
          newHabit,
          ...state.habits.slice(habitIndex + 1, state.habits.length)
        ]
      }

    case Actions.NEXT_DAY:
      return {
        ...state,
        dayOffset: state.dayOffset === 0 ? 0 : state.dayOffset + 1
      }

    case Actions.PREV_DAY:
      return { ...state, dayOffset: state.dayOffset - 1 }

    case Actions.UPDATE_HISTORY:
      const currentDate = getCurrentDate(state)
      const { id } = action.payload
      const toggleFunction = oldValue => !oldValue
      const counterFunction = oldValue => (oldValue ? oldValue + 1 : 1)
      const updateFunction = isButtonACounter(id, state)
        ? counterFunction
        : toggleFunction
      const oldEntries = state.history[currentDate] || {}
      const oldValue = oldEntries[id]

      const updatedEntries = {
        ...oldEntries,
        [id]: updateFunction(oldValue)
      }
      return {
        ...state,
        history: { ...state.history, [currentDate]: updatedEntries }
      }

    default:
      return state
  }
}

function isButtonACounter(id, state) {
  const habit = state.habits.find(habit => habit.id === id)
  return habit.type === 'counter'
}
