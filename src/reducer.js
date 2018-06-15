import { moveDayLeft } from './actions'
import Actions from './actions'

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
      const { id, updateFunction } = action.payload
      const oldEntries = state.history[this.currentDate] || {}
      const oldValue = oldEntries[id]

      const updatedEntries = {
        ...oldEntries,
        [id]: updateFunction(oldValue)
      }
      return {
        ...state,
        history: { ...state.history, [this.currentDate]: updatedEntries }
      }

    default:
      return state
  }
}
