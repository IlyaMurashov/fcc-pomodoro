import * as types from '../actions/actionTypes';

export default function breakTimeReducer(state, action) {
  switch (action.type) {
    case types.INCREMENT_BREAK_TIME:
      return (state + 1 > 25 ? 25 : state + 1);

    case types.DECREMENT_BREAK_TIME:
      return (state - 1 < 1 ? 1 : state - 1);

    default:
      return state;
  }
}
