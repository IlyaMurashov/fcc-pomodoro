import * as types from './actionTypes';

export function incrementWorkTime() {
  return {type: types.INCREMENT_WORK_TIME};
}

export function decrementWorkTime() {
  return {type: types.DECREMENT_WORK_TIME};
}

export function incrementBreakTime() {
  return {type: types.INCREMENT_BREAK_TIME};
}

export function decrementBreakTime() {
  return {type: types.DECREMENT_BREAK_TIME};
}

