import * as types from '../actions/actionTypes';

export default function workTimeReducer(state, action) {
  switch (action.type) {
    case types.INCREMENT_WORK_TIME:
      return (state + 1 > 99 ? 99 : state + 1);

    case types.DECREMENT_WORK_TIME:
      return (state - 1 < 1 ? 1 : state - 1);

    default:
      return state;
  }
}
