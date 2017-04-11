import * as types from '../actions/actionTypes';

export default function timeReducer(state, action) {
  switch (action.type) {
    case types.TICK:
      if (state.seconds === 0) {
        return { minutes: state.minutes - 1, seconds: 59 };
      }
      else {
        return { minutes: state.minutes, seconds: state.seconds - 1 };
      }

    default:
      return state;
  }
}
