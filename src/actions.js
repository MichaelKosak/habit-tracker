const Actions = {
  INCREASE_HABIT_COUNT: 'INCREASE_HABIT_COUNT',
  NEXT_DAY: 'NEXT_DAY',
  PREV_DAY: 'PREV_DAY',
  UPDATE_HISTORY: 'UPDATE_HISTORY'
}

export function increaseHabitCount(id) {
  return {
    type: Actions.INCREASE_HABIT_COUNT,
    payload: id
  }
}

export function moveDayRight() {
  return {
    type: Actions.NEXT_DAY
  }
}

export function moveDayLeft() {
  return {
    type: Actions.PREV_DAY
  }
}
export function updateHistory(id, valueToAdd) {
  return {
    type: Actions.UPDATE_HISTORY,
    payload: {
      id,
      valueToAdd
    }
  }
}
export default Actions
