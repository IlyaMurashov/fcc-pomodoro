import * as types from '../actions/actionTypes';

export default function controlReducer(state = '?', action) {
  switch (action.type) {
    case types.RUN:
    case types.PAUSE:
    case types.STOP:
    default:
      return state;
  }
}
